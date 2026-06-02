'use strict';
/*
 * Shared content-scan core for the wildlife directory location pages.
 *
 * scanPages() walks the JSON data layer, enumerates every location page
 * (city-hub / county-animal / city-animal), splits each page's authored body
 * content into normalized blocks (tokens for city/county/state/animal replaced
 * with `loc`), and returns { pages, blockIndex } with per-page uniqueness,
 * indexability, contractor coverage, and local-grounding signals attached.
 *
 * Used by both dup-content-detector.js (duplicate report) and
 * enrichment-audit.js (indexable / rich-vs-thin / contractor audit).
 *
 * Pure read-only: no network, no writes.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_ROOT = path.join(__dirname, '..', 'data', 'states');
const PERM = require(path.join(__dirname, '..', 'data', 'permanentlyIndexed.json'));

const MIN_WORDS = 5; // ignore very short fragments

// ---- animal token map (slug -> singular/plural words to strip) -------------
const ANIMALS = {
  'raccoon-removal':     { base: 'Raccoon',     plural: 'Raccoons' },
  'squirrel-removal':    { base: 'Squirrel',    plural: 'Squirrels' },
  'rat-removal':         { base: 'Rat',         plural: 'Rats' },
  'bat-removal':         { base: 'Bat',         plural: 'Bats' },
  'snake-removal':       { base: 'Snake',       plural: 'Snakes' },
  'groundhog-removal':   { base: 'Groundhog',   plural: 'Groundhogs' },
  'bird-removal':        { base: 'Bird',        plural: 'Birds' },
  'skunk-removal':       { base: 'Skunk',       plural: 'Skunks' },
  'opossum-removal':     { base: 'Opossum',     plural: 'Opossums' },
  'mole-removal':        { base: 'Mole',        plural: 'Moles' },
  'dead-animal-removal': { base: 'Dead Animal', plural: 'Dead Animals' },
};

const STATES = {
  'georgia':       { name: 'Georgia',       abbr: 'GA' },
  'tennessee':     { name: 'Tennessee',     abbr: 'TN' },
  'connecticut':   { name: 'Connecticut',   abbr: 'CT' },
  'delaware':      { name: 'Delaware',      abbr: 'DE' },
  'new-hampshire': { name: 'New Hampshire', abbr: 'NH' },
  'rhode-island':  { name: 'Rhode Island',  abbr: 'RI' },
  'vermont':       { name: 'Vermont',       abbr: 'VT' },
};

// Contractor coverage, discovered from the live LeadPortal directory API
// (state, county -> assigned contractor). NOTE: contractor assignment has ZERO
// effect on indexability; this is used only to SEQUENCE enrichment work so that
// pages backed by a paying contractor are improved first. Keyed `State|county`
// (bare county, lowercase).
const CONTRACTORS = {
  'Total Animal Control':                 ['Georgia|bartow', 'Georgia|cherokee', 'Georgia|cobb'],
  'Central Georgia Wildlife Control LLC': ['Georgia|bibb', 'Georgia|butts', 'Georgia|crawford', 'Georgia|henry',
                                           'Georgia|houston', 'Georgia|jasper', 'Georgia|lamar', 'Georgia|monroe',
                                           'Georgia|peach', 'Georgia|pike', 'Georgia|spalding', 'Georgia|upson'],
  'Local Wildlife Experts':               ['Georgia|coweta', 'Georgia|fayette'],
};
const CONTRACTOR_BY_KEY = {};
for (const [name, keys] of Object.entries(CONTRACTORS)) for (const k of keys) CONTRACTOR_BY_KEY[k] = name;

// ---- indexability sets (mirror server.js) ----------------------------------
const _permCounties   = new Set((PERM.counties || []).map(normKey));
const _countyOnly     = new Set((PERM.countiesWithCountyOnlyIndex || []).map(normKey));
const _hubOnly        = new Set((PERM.countiesWithHubOnlyIndex || []).map(normKey));
function normKey(k) { const [s, c] = k.split('|'); return `${s}|${(c || '').toLowerCase()}`; }

// ---------------------------------------------------------------------------
function toSlug(s) {
  return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function countySlugToName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
function bareCounty(countyName) { return countyName.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim(); }
function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–').replace(/&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function toBlocks(raw) {
  if (!raw || typeof raw !== 'string') return [];
  let s = raw
    .replace(/<\/(p|li|h[1-6]|aside|blockquote|ul|ol|div|tr)>/gi, '\n')
    .replace(/<(h[1-6]|li|p|aside|blockquote|tr)\b[^>]*>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');
  s = decodeEntities(s);
  return s.split('\n').map(t => t.replace(/\s+/g, ' ').trim()).filter(Boolean);
}
function tokensFor({ city, countyName, stateName, stateAbbr, animalSlug }) {
  const toks = [];
  if (city) toks.push(city);
  if (countyName) { toks.push(countyName); toks.push(bareCounty(countyName)); }
  if (stateName) toks.push(stateName);
  if (stateAbbr) toks.push(stateAbbr);
  if (animalSlug && ANIMALS[animalSlug]) { toks.push(ANIMALS[animalSlug].plural); toks.push(ANIMALS[animalSlug].base); }
  return [...new Set(toks)].filter(Boolean).sort((a, b) => b.length - a.length);
}
function normalize(block, toks) {
  let s = block;
  for (const t of toks) s = s.replace(new RegExp(escapeRe(t), 'gi'), ' LOC ');
  return s.toLowerCase().replace(/\s+/g, ' ').replace(/[ ]?loc[ ]?/g, ' loc ').replace(/\s+/g, ' ').trim();
}
function hash(s) { return crypto.createHash('sha1').update(s).digest('hex').slice(0, 16); }
function wordCount(s) { return s.split(/\s+/).filter(Boolean).length; }

function extractBlocks(fieldList, toks) {
  const out = [];
  for (const { text, kind } of fieldList) {
    for (const b of toBlocks(text)) {
      const norm = normalize(b, toks);
      const w = wordCount(norm);
      if (w < MIN_WORDS) continue;
      out.push({ norm, hash: hash(norm), words: w, raw: b, kind });
    }
  }
  return out;
}
function faqFields(faqs) {
  const out = [];
  if (Array.isArray(faqs)) for (const f of faqs) {
    if (f && f.q) out.push({ text: f.q, kind: 'faq-q' });
    if (f && f.a) out.push({ text: f.a, kind: 'faq-a' });
  }
  return out;
}
function load(file) {
  if (!fs.existsSync(file)) return null;
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { console.error('parse fail', file, e.message); return null; }
}

// Grounding-signal score from a city-hub record (the real local facts that a
// grounded generator can turn into TRUE unique prose).
function localSignals(cityRec) {
  const nb = Array.isArray(cityRec && cityRec.neighborhoods) ? cityRec.neighborhoods.length : 0;
  const gf = Array.isArray(cityRec && cityRec.geographic_features) ? cityRec.geographic_features.length : 0;
  const he = !!(cityRec && cityRec.housing_era && String(cityRec.housing_era).trim());
  const pt = !!(cityRec && cityRec.population_tier);
  // RICH = enough concrete, true local hooks to ground 2-3 unique paragraphs.
  const rich = (nb >= 3 && gf >= 2) || (he && gf >= 2 && nb >= 1);
  return { level: 'city', neighborhoods: nb, geographic_features: gf, housing_era: he, population_tier: pt, rich };
}

// Grounding-signal score from a county record in counties.json (the real
// county-level local facts that ground a county-animal page's unique prose).
// natural_features + largest_cities + habitat_type + regional_wildlife.
function countySignals(countyRec) {
  const nf = Array.isArray(countyRec && countyRec.natural_features) ? countyRec.natural_features.length : 0;
  const lc = Array.isArray(countyRec && countyRec.largest_cities) ? countyRec.largest_cities.length : 0;
  const hab = !!(countyRec && countyRec.habitat_type && String(countyRec.habitat_type).trim());
  const rw = !!(countyRec && countyRec.regional_wildlife && String(countyRec.regional_wildlife).trim());
  const rich = (nf >= 3 && rw) || (nf >= 2 && lc >= 2 && hab);
  // map onto the same shape the audit prints (neighborhoods<-cities, geographic_features<-natural_features)
  return { level: 'county', neighborhoods: lc, geographic_features: nf, housing_era: hab, population_tier: rw, rich };
}

// ---------------------------------------------------------------------------
function scanPages() {
  const pages = [];
  const cityHubRecords = {}; // `${stateSlug}|${countySlug}|${city}` -> record (for grounding city-animal pages)

  for (const stateSlug of fs.readdirSync(DATA_ROOT)) {
    const stDir = path.join(DATA_ROOT, stateSlug);
    if (!fs.statSync(stDir).isDirectory()) continue;
    const st = STATES[stateSlug] || { name: countySlugToName(stateSlug), abbr: '' };
    const countiesFile = load(path.join(stDir, 'counties.json'));
    const countyRecs = (countiesFile && countiesFile.counties) || {};
    const listJson = (sub) => {
      const d = path.join(stDir, sub);
      return fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith('.json')) : [];
    };

    // pre-load city hub records for grounding lookups
    for (const file of listJson('cities')) {
      const countySlug = file.replace(/\.json$/, '');
      const data = load(path.join(stDir, 'cities', file)) || {};
      for (const city of Object.keys(data)) cityHubRecords[`${stateSlug}|${countySlug}|${city}`] = data[city];
    }

    const permKey = (countyName) => `${st.name}|${bareCounty(countyName).toLowerCase()}`;

    // CITY HUB
    for (const file of listJson('cities')) {
      const countySlug = file.replace(/\.json$/, '');
      const countyName = countySlugToName(countySlug);
      const data = load(path.join(stDir, 'cities', file)) || {};
      const key = permKey(countyName);
      for (const city of Object.keys(data)) {
        const d = data[city];
        const toks = tokensFor({ city, countyName, stateName: st.name, stateAbbr: st.abbr });
        const blocks = extractBlocks([{ text: d.wildlife_intro, kind: 'body' }, ...faqFields(d.faqs)], toks);
        let indexable = _permCounties.has(key);
        if (indexable && (_hubOnly.has(key) || _countyOnly.has(key))) indexable = !!d.wildlife_intro;
        pages.push(mkPage({
          url: `/${stateSlug}/${countySlug}/${toSlug(city)}/`, type: 'city-hub',
          stateSlug, countySlug, citySlug: toSlug(city), city, stateName: st.name, countyName,
          permKey: key, indexable, blocks, record: d, cityRecord: d, signals: localSignals(d),
        }));
      }
    }

    // COUNTY-ANIMAL
    for (const file of listJson('county-animal')) {
      const countySlug = file.replace(/\.json$/, '');
      const countyName = countySlugToName(countySlug);
      const data = load(path.join(stDir, 'county-animal', file)) || {};
      const key = permKey(countyName);
      for (const animalSlug of Object.keys(data)) {
        if (!ANIMALS[animalSlug]) continue;
        const d = data[animalSlug];
        const toks = tokensFor({ countyName, stateName: st.name, stateAbbr: st.abbr, animalSlug });
        const blocks = extractBlocks([
          { text: d.leadParagraph, kind: 'lead' }, { text: d.extendedBody, kind: 'body' }, ...faqFields(d.faqs),
        ], toks);
        let indexable = _permCounties.has(key);
        if (indexable && _hubOnly.has(key)) indexable = !!d.extendedBody;
        pages.push(mkPage({
          url: `/${stateSlug}/${countySlug}/${animalSlug}/`, type: 'county-animal',
          stateSlug, countySlug, animalSlug, stateName: st.name, countyName,
          permKey: key, indexable, blocks, record: d, signals: countySignals(countyRecs[countyName]),
        }));
      }
    }

    // CITY-ANIMAL
    for (const file of listJson('city-animal')) {
      const countySlug = file.replace(/\.json$/, '');
      const countyName = countySlugToName(countySlug);
      const data = load(path.join(stDir, 'city-animal', file)) || {};
      const key = permKey(countyName);
      for (const city of Object.keys(data)) {
        const cityRec = cityHubRecords[`${stateSlug}|${countySlug}|${city}`] || null;
        const sig = localSignals(cityRec);
        for (const animalSlug of Object.keys(data[city])) {
          if (!ANIMALS[animalSlug]) continue;
          const d = data[city][animalSlug];
          const toks = tokensFor({ city, countyName, stateName: st.name, stateAbbr: st.abbr, animalSlug });
          const blocks = extractBlocks([
            { text: d.intro, kind: 'intro' }, { text: d.extendedBody, kind: 'body' }, ...faqFields(d.faqs),
          ], toks);
          let indexable = _permCounties.has(key);
          if (indexable && (_hubOnly.has(key) || _countyOnly.has(key))) {
            indexable = !!(d.extendedBody) && !d.holdNoindex;
          }
          pages.push(mkPage({
            url: `/${stateSlug}/${countySlug}/${toSlug(city)}/${animalSlug}/`, type: 'city-animal',
            stateSlug, countySlug, citySlug: toSlug(city), city, animalSlug, stateName: st.name, countyName,
            permKey: key, indexable, blocks, record: d, cityRecord: cityRec, signals: sig, hasCityHub: !!cityRec,
          }));
        }
      }
    }
  }

  // ---- global block frequency + per-page uniqueness ----
  const blockIndex = new Map();
  for (const p of pages) for (const b of p.blocks) {
    let e = blockIndex.get(b.hash);
    if (!e) { e = { sample: b.raw, pages: new Set(), kinds: new Set(), words: b.words }; blockIndex.set(b.hash, e); }
    e.pages.add(p.url); e.kinds.add(b.kind);
  }
  for (const p of pages) {
    let total = 0, unique = 0;
    for (const b of p.blocks) { total += b.words; if (blockIndex.get(b.hash).pages.size === 1) unique += b.words; }
    p.totalWords = total; p.uniqueWords = unique;
    p.uniqueness = total ? (unique / total) * 100 : null;
  }
  return { pages, blockIndex };
}

function mkPage(o) {
  o.contractor = CONTRACTOR_BY_KEY[o.permKey] || null;
  o.contractorCovered = !!o.contractor;
  o.fullIndexCounty = _permCounties.has(o.permKey) && !_countyOnly.has(o.permKey) && !_hubOnly.has(o.permKey);
  return o;
}

module.exports = {
  scanPages, ANIMALS, STATES, CONTRACTORS, CONTRACTOR_BY_KEY,
  toBlocks, normalize, tokensFor, hash, wordCount, localSignals,
};
