#!/usr/bin/env node
/*
 * Duplicate-content detector for wildlife directory location pages.
 *
 * Scans the data layer (data/states/<state>/{cities,county-animal,city-animal}/*.json),
 * enumerates every location page, splits each page's authored body content into blocks
 * (paragraphs / list items / headings / FAQ questions+answers), normalizes each block by
 * stripping HTML + collapsing whitespace + REMOVING the page's variable tokens (city,
 * county, state, animal), hashes it, and counts how many distinct pages share each block.
 *
 * Output: a ranked markdown report + a console summary.
 *
 * NOTE ON SCOPE: this measures *authored* content stored in the JSON data layer — the
 * surface that actually varies page to page. Template chrome and the generic FAQ/region
 * modules (lib + data/faqContent.js + data/animalRegionContent.js) are shared boilerplate
 * by design and are reported separately at the end, not mixed into the per-page scores.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_ROOT = path.join(__dirname, '..', 'data', 'states');
const OUT_FILE = path.join(__dirname, '..', 'duplicate-content-report.md');

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

// ---- state slug -> { name, abbr } ------------------------------------------
const STATES = {
  'georgia':       { name: 'Georgia',       abbr: 'GA' },
  'tennessee':     { name: 'Tennessee',     abbr: 'TN' },
  'connecticut':   { name: 'Connecticut',   abbr: 'CT' },
  'delaware':      { name: 'Delaware',      abbr: 'DE' },
  'new-hampshire': { name: 'New Hampshire', abbr: 'NH' },
  'rhode-island':  { name: 'Rhode Island',  abbr: 'RI' },
  'vermont':       { name: 'Vermont',       abbr: 'VT' },
};

const MIN_WORDS = 5; // ignore very short fragments

// ---------------------------------------------------------------------------
function toSlug(s) {
  return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function countySlugToName(slug) {
  // "cobb-county" -> "Cobb County"
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–').replace(/&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// Split an HTML or plain string into content blocks.
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

// Build the list of token strings to strip for a given page context.
function tokensFor({ city, countyName, stateName, stateAbbr, animalSlug }) {
  const toks = [];
  if (city) toks.push(city);
  if (countyName) {
    toks.push(countyName);                              // "Cobb County"
    toks.push(countyName.replace(/\s+County$/i, ''));   // "Cobb"
  }
  if (stateName) toks.push(stateName);
  if (stateAbbr) toks.push(stateAbbr);
  if (animalSlug && ANIMALS[animalSlug]) {
    toks.push(ANIMALS[animalSlug].plural);   // strip plural before singular
    toks.push(ANIMALS[animalSlug].base);
  }
  // longest first so "Cobb County" is consumed before "Cobb", "Raccoons" before "Raccoon"
  return [...new Set(toks)].filter(Boolean).sort((a, b) => b.length - a.length);
}

// Normalize a block: strip tokens, lowercase, collapse whitespace.
function normalize(block, toks) {
  let s = block;
  for (const t of toks) {
    s = s.replace(new RegExp(escapeRe(t), 'gi'), ' LOC ');
  }
  return s.toLowerCase().replace(/\s+/g, ' ').replace(/[ ]?loc[ ]?/g, ' loc ').replace(/\s+/g, ' ').trim();
}
function hash(s) { return crypto.createHash('sha1').update(s).digest('hex').slice(0, 16); }
function wordCount(s) { return s.split(/\s+/).filter(Boolean).length; }
function first30(s) { return s.split(/\s+/).slice(0, 30).join(' '); }

// ---------------------------------------------------------------------------
const pages = [];   // { url, type, state, blocks:[{norm,hash,words,raw,kind}] }

function addBlocksFromFields(fieldList, toks) {
  // fieldList: [{ text, kind }]
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
  if (Array.isArray(faqs)) {
    for (const f of faqs) {
      if (f && f.q) out.push({ text: f.q, kind: 'faq-q' });
      if (f && f.a) out.push({ text: f.a, kind: 'faq-a' });
    }
  }
  return out;
}

function load(stateSlug, sub, county) {
  const f = path.join(DATA_ROOT, stateSlug, sub, county + '.json');
  if (!fs.existsSync(f)) return null;
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); }
  catch (e) { console.error('Failed to parse', f, e.message); return null; }
}

// ---- walk every state ------------------------------------------------------
for (const stateSlug of fs.readdirSync(DATA_ROOT)) {
  const stDir = path.join(DATA_ROOT, stateSlug);
  if (!fs.statSync(stDir).isDirectory()) continue;
  const st = STATES[stateSlug] || { name: countySlugToName(stateSlug), abbr: '' };

  const listJson = (sub) => {
    const d = path.join(stDir, sub);
    return fs.existsSync(d) ? fs.readdirSync(d).filter(f => f.endsWith('.json')) : [];
  };

  // CITY HUB pages: cities/<county>.json -> { CityName: {...} }
  for (const file of listJson('cities')) {
    const countySlug = file.replace(/\.json$/, '');
    const countyName = countySlugToName(countySlug);
    const data = load(stateSlug, 'cities', countySlug);
    if (!data) continue;
    for (const city of Object.keys(data)) {
      const d = data[city];
      const toks = tokensFor({ city, countyName, stateName: st.name, stateAbbr: st.abbr });
      const fields = [{ text: d.wildlife_intro, kind: 'body' }, ...faqFields(d.faqs)];
      pages.push({
        url: `/${stateSlug}/${countySlug}/${toSlug(city)}/`,
        type: 'city-hub', state: st.name,
        blocks: addBlocksFromFields(fields, toks),
      });
    }
  }

  // COUNTY-ANIMAL pages: county-animal/<county>.json -> { animal-slug: {...} }
  for (const file of listJson('county-animal')) {
    const countySlug = file.replace(/\.json$/, '');
    const countyName = countySlugToName(countySlug);
    const data = load(stateSlug, 'county-animal', countySlug);
    if (!data) continue;
    for (const animalSlug of Object.keys(data)) {
      const d = data[animalSlug];
      const toks = tokensFor({ countyName, stateName: st.name, stateAbbr: st.abbr, animalSlug });
      const fields = [
        { text: d.leadParagraph, kind: 'lead' },
        { text: d.extendedBody, kind: 'body' },
        ...faqFields(d.faqs),
      ];
      pages.push({
        url: `/${stateSlug}/${countySlug}/${animalSlug}/`,
        type: 'county-animal', state: st.name,
        blocks: addBlocksFromFields(fields, toks),
      });
    }
  }

  // CITY-ANIMAL pages: city-animal/<county>.json -> { CityName: { animal-slug: {...} } }
  for (const file of listJson('city-animal')) {
    const countySlug = file.replace(/\.json$/, '');
    const countyName = countySlugToName(countySlug);
    const data = load(stateSlug, 'city-animal', countySlug);
    if (!data) continue;
    for (const city of Object.keys(data)) {
      const cityData = data[city];
      for (const animalSlug of Object.keys(cityData)) {
        if (!ANIMALS[animalSlug]) continue; // skip non-animal keys if any
        const d = cityData[animalSlug];
        const toks = tokensFor({ city, countyName, stateName: st.name, stateAbbr: st.abbr, animalSlug });
        const fields = [
          { text: d.intro, kind: 'intro' },
          { text: d.extendedBody, kind: 'body' },
          ...faqFields(d.faqs),
        ];
        pages.push({
          url: `/${stateSlug}/${countySlug}/${toSlug(city)}/${animalSlug}/`,
          type: 'city-animal', state: st.name,
          blocks: addBlocksFromFields(fields, toks),
        });
      }
    }
  }
}

// ---- global block frequency ------------------------------------------------
const blockIndex = new Map(); // hash -> { sample, pages:Set, kinds:Set }
for (const p of pages) {
  for (const b of p.blocks) {
    let e = blockIndex.get(b.hash);
    if (!e) { e = { sample: b.raw, pages: new Set(), kinds: new Set(), words: b.words }; blockIndex.set(b.hash, e); }
    e.pages.add(p.url);
    e.kinds.add(b.kind);
  }
}

// ---- per-page uniqueness (word-weighted) -----------------------------------
for (const p of pages) {
  let total = 0, unique = 0;
  for (const b of p.blocks) {
    total += b.words;
    if (blockIndex.get(b.hash).pages.size === 1) unique += b.words;
  }
  p.totalWords = total;
  p.uniqueWords = unique;
  p.uniqueness = total ? (unique / total) * 100 : null; // null = no content
}

// ---- assemble report -------------------------------------------------------
const dupBlocks = [...blockIndex.entries()]
  .map(([h, e]) => ({ hash: h, count: e.pages.size, pages: [...e.pages], sample: e.sample, kinds: [...e.kinds], words: e.words }))
  .filter(b => b.count > 1)
  .sort((a, b) => b.count - a.count || b.words - a.words);

const byType = {};
for (const p of pages) { byType[p.type] = (byType[p.type] || 0) + 1; }

const withContent = pages.filter(p => p.uniqueness !== null);
const worst = [...withContent].sort((a, b) => a.uniqueness - b.uniqueness);

const fmt = (n) => n === null ? 'n/a' : n.toFixed(1) + '%';

let md = '';
md += '# Duplicate-Content Report — Wildlife Directory location pages\n\n';
md += `_Generated by \`scripts/dup-content-detector.js\`. Scope: authored content in the JSON data layer (\`wildlife_intro\`, \`leadParagraph\`, \`intro\`, \`extendedBody\`, and authored \`faqs\`). Each block is normalized: HTML stripped, whitespace collapsed, and the page's variable tokens (city, county, state, animal singular/plural) replaced with \`loc\` so name-swapped boilerplate collides._\n\n`;

md += '## Summary\n\n';
md += `- **Total location pages scanned:** ${pages.length}\n`;
for (const t of Object.keys(byType).sort()) md += `  - ${t}: ${byType[t]}\n`;
md += `- **Pages with authored body content:** ${withContent.length} (${pages.length - withContent.length} have none of the scanned fields)\n`;
md += `- **Distinct content blocks:** ${blockIndex.size}\n`;
md += `- **Distinct DUPLICATED blocks (appear on >1 page):** ${dupBlocks.length}\n`;
const totalBlockInstances = pages.reduce((s, p) => s + p.blocks.length, 0);
const dupInstances = dupBlocks.reduce((s, b) => s + b.count, 0);
md += `- **Block instances total:** ${totalBlockInstances}; instances that are duplicates: ${dupInstances} (${((dupInstances / totalBlockInstances) * 100).toFixed(1)}%)\n`;
const medUniq = (() => {
  if (!withContent.length) return null;
  const a = withContent.map(p => p.uniqueness).sort((x, y) => x - y);
  return a[Math.floor(a.length / 2)];
})();
md += `- **Median page uniqueness:** ${fmt(medUniq)}\n\n`;

md += '## Top duplicated blocks (ranked by # of pages)\n\n';
md += 'Each row: how many pages share the block, which field kind it came from, the first ~30 words (normalized tokens shown as `loc`), and a sample of affected URLs.\n\n';
const TOP = 40;
dupBlocks.slice(0, TOP).forEach((b, i) => {
  md += `### ${i + 1}. ${b.count} pages — \`${b.kinds.join('/')}\` (${b.words} words)\n\n`;
  md += `> ${first30(b.sample)}${b.sample.split(/\s+/).length > 30 ? ' …' : ''}\n\n`;
  const sampleUrls = b.pages.slice(0, 8);
  md += sampleUrls.map(u => `- \`${u}\``).join('\n');
  if (b.pages.length > 8) md += `\n- …and ${b.pages.length - 8} more`;
  md += '\n\n';
});
if (dupBlocks.length > TOP) md += `_…and ${dupBlocks.length - TOP} more duplicated blocks (see full list below)._\n\n`;

md += '## Worst offenders — lowest uniqueness (fix these first)\n\n';
md += '| # | Uniqueness | Unique/Total words | Type | URL |\n|---|---|---|---|---|\n';
worst.slice(0, 40).forEach((p, i) => {
  md += `| ${i + 1} | ${fmt(p.uniqueness)} | ${p.uniqueWords}/${p.totalWords} | ${p.type} | \`${p.url}\` |\n`;
});
md += '\n';

md += '## Full per-page uniqueness scores\n\n';
md += '| Uniqueness | Type | URL | Words |\n|---|---|---|---|\n';
[...withContent].sort((a, b) => a.uniqueness - b.uniqueness).forEach(p => {
  md += `| ${fmt(p.uniqueness)} | ${p.type} | \`${p.url}\` | ${p.totalWords} |\n`;
});
md += '\n';

if (pages.length - withContent.length > 0) {
  md += '## Pages with NO scanned body content (stubs)\n\n';
  pages.filter(p => p.uniqueness === null).forEach(p => { md += `- \`${p.url}\` (${p.type})\n`; });
  md += '\n';
}

md += '## Full duplicated-block list\n\n';
md += '| Pages | Kind | Words | First ~30 words |\n|---|---|---|---|\n';
dupBlocks.forEach(b => {
  md += `| ${b.count} | ${b.kinds.join('/')} | ${b.words} | ${first30(b.sample).replace(/\|/g, '\\|')}${b.sample.split(/\s+/).length > 30 ? ' …' : ''} |\n`;
});
md += '\n';

fs.writeFileSync(OUT_FILE, md, 'utf8');

// ---- console summary -------------------------------------------------------
console.log('=== Duplicate-content scan complete ===');
console.log('Total location pages scanned :', pages.length);
for (const t of Object.keys(byType).sort()) console.log('   ', t.padEnd(14), byType[t]);
console.log('Pages with body content      :', withContent.length);
console.log('Distinct content blocks      :', blockIndex.size);
console.log('Distinct DUPLICATED blocks   :', dupBlocks.length);
console.log('Duplicate block instances    :', dupInstances, '/', totalBlockInstances,
  `(${((dupInstances / totalBlockInstances) * 100).toFixed(1)}%)`);
console.log('Median page uniqueness       :', fmt(medUniq));
console.log('');
console.log('Worst boilerplate offenders (lowest uniqueness):');
worst.slice(0, 12).forEach((p, i) => {
  console.log(`  ${String(i + 1).padStart(2)}. ${fmt(p.uniqueness).padStart(6)}  ${p.type.padEnd(13)} ${p.url}`);
});
console.log('');
console.log('Most-repeated blocks:');
dupBlocks.slice(0, 8).forEach((b, i) => {
  console.log(`  ${String(i + 1).padStart(2)}. on ${String(b.count).padStart(3)} pages [${b.kinds.join('/')}] ${first30(b.sample).slice(0, 90)}…`);
});
console.log('');
console.log('Report written to:', OUT_FILE);
