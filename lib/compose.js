'use strict';

// Composition engine for the 2026 rebuild.
//
// City and city-animal pages used to render from one shared body template,
// which is why they read as duplicates. This module assembles each page's
// supporting copy from layered, page-specific material:
//   1. Authored content where it exists (city-animal JSON entries carry a
//      hand-written intro / extendedBody / faqs per city + animal; county
//      content carries hand-written county blocks and faqs).
//   2. County texture (data/countyTexture.js) — terrain / housing / wildlife
//      pressure notes written per county.
//   3. Fragment pools (data/fragments.js) — variant frames chosen
//      deterministically by a hash of the page's state|county|city|animal,
//      so the same page always renders the same text (stable for caching
//      and for the duplicate checker) while neighbouring pages differ.
// Nothing here invents facts about a contractor: fragments are about the
// animal, the place and the work, in the site's first-person voice.

const { scrubVoice } = require('./present');
let seatCityFor = () => null;
let citySlugToName = (s) => s;
try { seatCityFor = require('../data/countySeatCity').seatCityFor; } catch (e) { /* optional */ }
try { citySlugToName = require('../data/cities').citySlugToName; } catch (e) { /* optional */ }

// Authored copy sometimes carries the (844) fallback number in prose. On an
// assigned county's pages every rendered number must be the contractor's.
function remapPhones(text, pro) {
  if (!text || !pro || !pro.assigned) return text;
  const dashed = pro.phoneE164.replace('+1', '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  return String(text)
    .split('(844) 544-3498').join(pro.phoneDisplay)
    .split('+18445443498').join(pro.phoneE164)
    .split('844-544-3498').join(dashed);
}
const scrubFaq = (pro) => (f) => ({ q: remapPhones(scrubVoice(f.q), pro), a: remapPhones(scrubVoice(f.a), pro) });

function slugify(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

function firstSentences(text, n) {
  if (!text) return '';
  const parts = String(text).split(/(?<=[.!?])\s+(?=[A-Z"“])/);
  return parts.slice(0, n).join(' ');
}

// A short factual paragraph built from the county seat + rotated sibling
// towns — real, page-specific facts (and proper nouns) for every city page.
function geoNote({ stateName, countyName, cityName, siblingNames, seed }) {
  const seatSlug = seatCityFor(slugify(stateName), slugify(countyName));
  const seat = seatSlug ? citySlugToName(stateName, countyName, seatSlug) : null;
  const sibs = rotate((siblingNames || []).filter(n => n !== cityName), seed + '|geo', 3);
  let out = `${cityName} sits in ${countyName}`;
  if (seat && seat !== cityName) out += `, whose county seat is ${seat}`;
  out += '. Our crew covers the whole county';
  if (sibs.length) out += ` — including ${sibs.join(', ')}`;
  out += ' — so if the problem turns out to be at a second property nearby, one call still covers it.';
  return out;
}

// Per-city material from the authored city files (data/cities): named
// neighbourhoods, housing stock and geography — the strongest per-city
// differentiator the data set has. Absent for counties without city files.
function cityNotes(cityContent, seed) {
  const c = cityContent || {};
  return {
    neighborhoods: rotate(Array.isArray(c.neighborhoods) ? c.neighborhoods : [], seed + '|nb', 5),
    housing: firstSentences(c.housing_era || '', 2),
    geo: firstSentences(c.geographic_features || '', 1)
  };
}

let FRAGMENTS = {};
try { FRAGMENTS = require('../data/fragments').FRAGMENTS || {}; } catch (e) { FRAGMENTS = {}; }
let getCountyTexture = () => null;
try { getCountyTexture = require('../data/countyTexture').getCountyTexture; } catch (e) { /* texture optional */ }

function hash(str) {
  let h = 2166136261;
  const s = String(str || '');
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick(pool, seed, offset) {
  if (!Array.isArray(pool) || pool.length === 0) return '';
  return pool[(hash(seed) + (offset || 0)) % pool.length];
}

function rotate(arr, seed, take) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const start = hash(seed) % arr.length;
  const out = [];
  for (let i = 0; i < Math.min(take, arr.length); i++) out.push(arr[(start + i) % arr.length]);
  return out;
}

function tokenCtx({ stateName, countyName, cityName, animal }) {
  const base = animal ? animal.name.replace(/ Removal$/, '') : 'Wildlife';
  return {
    city: cityName || '',
    county: countyName || '',
    countyShort: (countyName || '').replace(/ County$/, ''),
    state: stateName || '',
    animal: base.toLowerCase(),
    animalName: base,
    animalPlural: animal ? animal.plural : 'Wildlife',
    animalsLower: animal ? animal.plural.toLowerCase() : 'wildlife'
  };
}

function fill(text, ctx) {
  if (!text) return '';
  return String(text)
    .replace(/\{city\}/g, ctx.city)
    .replace(/\{county\}/g, ctx.county)
    .replace(/\{countyShort\}/g, ctx.countyShort)
    .replace(/\{state\}/g, ctx.state)
    .replace(/\{animalPlural\}/g, ctx.animalPlural)
    .replace(/\{animalsLower\}/g, ctx.animalsLower)
    .replace(/\{animalName\}/g, ctx.animalName)
    .replace(/\{animal\}/g, ctx.animal);
}

function dedupeFaqs(faqs) {
  const seen = new Set();
  const out = [];
  for (const f of faqs || []) {
    if (!f || !f.q) continue;
    const key = f.q.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
  }
  return out;
}

// Split an authored HTML body into its <h2>-headed sections (plus any lead
// chunk) and keep a deterministic subset — county extended bodies are long,
// and printing the whole thing on every city hub in the county is what made
// sibling hubs near-duplicates. Every section still appears on some hubs.
function rotateSections(html, seed, keep) {
  if (!html) return '';
  const parts = String(html).split(/(?=<h2)/).filter(s => s.trim().length > 0);
  if (parts.length <= keep) return html;
  const start = hash(seed) % parts.length;
  const chosen = [];
  for (let i = 0; i < keep; i++) chosen.push(parts[(start + i) % parts.length]);
  return chosen.join('\n');
}

// ── City hub ────────────────────────────────────────────────────────────────
function composeCityHub({ stateName, countyName, cityName, countyContent, cityContent, pro, siblingNames }) {
  const seed = `${stateName}|${countyName}|${cityName}|hub`;
  const ctx = tokenCtx({ stateName, countyName, cityName, animal: null });
  const texture = getCountyTexture(stateName, countyName);
  const cc = countyContent || {};
  const city = cityContent || {};
  const faqs = dedupeFaqs([
    ...(Array.isArray(city.faqs) ? city.faqs : []),
    ...(Array.isArray(cc.faqs) ? cc.faqs : [])
  ].map(scrubFaq(pro)));
  // The authored per-city intro can run to many paragraphs — rotate a
  // 3-paragraph window per city so sibling hubs don't share it wholesale.
  const introParas = String(city.wildlife_intro || '').split(/\n\s*\n/).filter(s => s.trim());
  return {
    texture,
    introFrame: fill(pick(FRAGMENTS.hubFrames, seed, 0), ctx),
    localBridge: fill(pick(FRAGMENTS.localBridges, seed, 3), ctx),
    cityIntro: rotate(introParas, seed + '|intro', 3).map(p => remapPhones(scrubVoice(p), pro)).join('\n\n'),
    cityBody: remapPhones(scrubVoice(city.extendedBody || ''), pro),
    cityNotes: cityNotes(city, seed),
    geoNote: geoNote({ stateName, countyName, cityName, siblingNames, seed }),
    extendedHtml: rotateSections(remapPhones(scrubVoice(cc.extendedBody || ''), pro), seed, 2),
    countyFaqs: rotate(faqs, seed, 5)
  };
}

// ── City × animal ───────────────────────────────────────────────────────────
function composeCityAnimal({ stateName, countyName, cityName, animal, countyContent, cityAnimalContent, countyAnimalContent, cityContent, baseFaqs, pro, siblingNames }) {
  const seed = `${stateName}|${countyName}|${cityName}|${animal.slug}`;
  const ctx = tokenCtx({ stateName, countyName, cityName, animal });
  const texture = getCountyTexture(stateName, countyName);

  const authored = cityAnimalContent || {};
  const countyAnimal = countyAnimalContent || {};
  const faqs = dedupeFaqs([
    ...(Array.isArray(authored.faqs) ? authored.faqs : []),
    ...rotate(baseFaqs, seed, 4),
    ...rotate(countyContent && countyContent.faqs, seed + '|county', 2)
  ].map(scrubFaq(pro))).slice(0, 6);

  // Rotate sentence windows of the shared animal core text — every page
  // still reads complete, but sibling pages no longer carry identical sets.
  const sentences = (t) => String(t || '').split(/(?<=[.!?])\s+(?=[A-Z"“])/).filter(s => s.trim());
  const processSents = sentences(animal.process);
  const urgencySents = sentences(animal.urgency);

  const introPool = [...(FRAGMENTS.introFrames || []), ...(FRAGMENTS.introFramesB || [])];
  return {
    texture,
    introFrame: fill(pick(introPool, seed, 0), ctx),
    signsIntro: fill(pick(FRAGMENTS.signsIntros, seed, 1), ctx),
    signsFrame: fill(pick(FRAGMENTS.signsFrames, seed, 6), ctx),
    processFrame: fill(pick(FRAGMENTS.processFrames, seed, 7), ctx),
    urgencyFrame: fill(pick(FRAGMENTS.urgencyFrames, seed, 8), ctx),
    waitRisk: fill(pick(FRAGMENTS.waitRisks, seed, 2), ctx),
    processCloser: fill(pick(FRAGMENTS.processClosers, seed, 3), ctx),
    localBridge: fill(pick(FRAGMENTS.localBridges, seed, 4), ctx),
    costIntro: fill(pick(FRAGMENTS.costIntros, seed, 5), ctx),
    signs: rotate(animal.signs || [], seed + '|signs', Math.min(5, (animal.signs || []).length)),
    services: rotate(animal.services || [], seed + '|svc', Math.min(5, (animal.services || []).length)),
    processText: rotate(processSents, seed + '|proc', Math.max(2, processSents.length - 1)).join(' '),
    urgencyText: rotate(urgencySents, seed + '|urg', Math.max(1, urgencySents.length - 1)).join(' '),
    cityNotes: cityNotes(cityContent, seed),
    cityIntroParas: rotate(String((cityContent || {}).wildlife_intro || '').split(/\n\s*\n/).filter(s => s.trim()), seed + '|ci', 2).map(p => remapPhones(scrubVoice(p), pro)),
    geoNote: geoNote({ stateName, countyName, cityName, siblingNames, seed }),
    countyAnimalLead: remapPhones(scrubVoice(countyAnimal.leadParagraph || ''), pro),
    countyAnimalBody: rotateSections(remapPhones(scrubVoice(countyAnimal.extendedBody || ''), pro), seed + '|ca', 3),
    authoredIntro: remapPhones(scrubVoice(authored.intro || ''), pro),
    authoredBody: rotateSections(remapPhones(scrubVoice(authored.extendedBody || ''), pro), seed + '|ab', 1),
    authoredMetaTitle: remapPhones(scrubVoice(authored.metaTitle || ''), pro),
    authoredMetaDescription: remapPhones(scrubVoice(authored.metaDescription || ''), pro),
    faqs
  };
}

module.exports = { composeCityHub, composeCityAnimal, hash, rotate, fill, tokenCtx };
