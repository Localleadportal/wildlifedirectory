'use strict';
/*
 * Shared library for the grounded enrichment generator + verifier.
 *
 * - SYSTEM_PROMPT: the no-fabrication guardrails (used by the API generator AND
 *   when the content is drafted inline; printed for human review).
 * - buildGrounding(page): assembles the STORED facts a page may be grounded on
 *   (city signals, county signals, species facts, agency, existing true content).
 * - buildUserPrompt(page, grounding): the per-page generation instruction.
 * - groundingText(grounding): one flat string of every allowed fact, used by the
 *   verifier to decide whether a specific claim in a draft was grounded.
 * - flagUngrounded(html, grounding): returns specific-fact assertions in the draft
 *   (exit numbers, distances, street/landmark/water names, %, $, years) that do
 *   NOT appear in the grounding — i.e. things a human must fact-check.
 *
 * No network here. enrich-generate.js does the API call; this stays pure.
 */

const fs = require('fs');
const path = require('path');

const AGENCY = 'Georgia DNR Wildlife Resources Division';

const ANIMALS = require(path.join(__dirname, '..', 'data', 'animals.js')).ANIMALS
  .reduce((m, a) => (m[a.slug] = a, m), {});

// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `You are a local-content writer for a licensed wildlife-removal directory. Your ONLY job is to turn the STORED LOCAL FACTS you are given into clear, readable, genuinely UNIQUE prose for one specific town + animal page. You are not a researcher and you must not add knowledge from outside the provided facts.

ABSOLUTE NO-FABRICATION RULES (a violation is a failure, even if the result is unique):
1. NEVER invent or guess a specific local fact. That includes: street names, neighborhoods, subdivisions, landmarks, parks, rivers/creeks/lakes, highway or interstate exit numbers, distances/directions, population numbers, dates, founding years, statistics, percentages, or prices.
2. You may ONLY state a specific local fact if it appears verbatim (or as an obvious paraphrase) in the GROUNDING FACTS provided for THIS page. If it is not there, do not say it.
3. General species biology and standard removal/exclusion method from the SPECIES FACTS block may be stated generally (e.g. moles eat earthworms; skunks are a rabies vector; opossums rarely carry rabies; exclude with 1/4-inch hardware cloth). These are not local claims.
4. If you do not have a specific local detail to make a sentence concrete, WRITE GENERALLY rather than inventing a specific. "Wrong-but-unique" is worse than "general-but-true."
5. Do NOT invent business specifics: no made-up warranties, guarantees, response times, license numbers, or prices beyond the provided cost range. Regulatory references must be limited to the provided agency name.

UNIQUENESS RULES:
6. Do NOT reuse a fixed template. Vary the section order, the headings, and the sentence structure from any other page. Two towns must not read like the same article with the name swapped.
7. Ground the uniqueness in THIS town's real stored facts — its specific neighborhoods, housing era, geography, and the county's documented wildlife profile — not in filler.
8. Lead with what is genuinely distinctive about this town for this animal.

OUTPUT: Return ONLY a JSON object: {"intro": "...", "extendedBody": "<h2>...</h2>...", "faqs": [{"q":"...","a":"..."}]}. extendedBody is HTML using <h2>/<h3>/<p>/<ul>/<li>/<strong>. Keep any true internal links from the existing content. Write for a homeowner; licensed-local-contractor framing; reference the agency for regulatory points.`;

// ---------------------------------------------------------------------------
function loadCountyRec(stateSlug, countyName) {
  try {
    const f = path.join(__dirname, '..', 'data', 'states', stateSlug, 'counties.json');
    const j = JSON.parse(fs.readFileSync(f, 'utf8'));
    return (j.counties && j.counties[countyName]) || null;
  } catch { return null; }
}

// page: { stateSlug, countySlug, citySlug?, city?, countyName, animalSlug?, cityRecord, record }
function buildGrounding(page) {
  const a = page.animalSlug ? ANIMALS[page.animalSlug] : null;
  const cr = page.cityRecord || {};
  const co = loadCountyRec(page.stateSlug, page.countyName) || {};
  return {
    place: {
      city: page.city || null,
      county: page.countyName,
      state: 'Georgia',
      county_seat: co.county_seat || null,
      population_tier: cr.population_tier || null,
      housing_era: cr.housing_era || null,
      neighborhoods: cr.neighborhoods || [],
      geographic_features: cr.geographic_features || [],
    },
    county: {
      region: co.region || null,
      largest_cities: co.largest_cities || [],
      natural_features: co.natural_features || [],
      habitat_type: co.habitat_type || null,
      common_wildlife: co.common_wildlife || [],
      regional_wildlife: co.regional_wildlife || null,
      absent_or_rare: co.absent_or_rare || null,
    },
    species: a ? {
      name: a.name, plural: a.plural, shortDesc: a.shortDesc, signs: a.signs,
      services: a.services, urgency: a.urgency, season: a.season,
      costRange: a.costRange, costNote: a.costNote,
    } : null,
    agency: AGENCY,
    existing: { intro: page.record && page.record.intro, extendedBody: page.record && page.record.extendedBody,
                faqs: (page.record && page.record.faqs) || [] },
  };
}

function buildUserPrompt(page, g) {
  const label = page.animalSlug ? `${g.species.name} in ${g.place.city || g.place.county}, GA`
                                : `the ${g.place.city} wildlife-removal hub page`;
  return `Write ${label}.

GROUNDING FACTS (the ONLY local facts you may use as specifics):
${JSON.stringify(g, null, 2)}

Remember: any specific local detail you write MUST be traceable to the facts above. If it is not above, keep that sentence general. Vary structure so this page does not read like other towns' pages. Return the JSON object only.`;
}

// ---- verifier support ------------------------------------------------------
function groundingText(g) {
  // Everything the model was allowed to treat as a local fact, flattened.
  const parts = [];
  const walk = (v) => {
    if (v == null) return;
    if (typeof v === 'string') parts.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(g);
  return parts.join(' \n ').toLowerCase();
}

function stripTags(html) { return String(html || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' '); }
function sentences(text) { return text.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean); }

// Patterns that assert a specific, checkable local fact.
const FACT_PATTERNS = [
  { kind: 'exit',      re: /\bExit\s+\d+\b/gi },
  { kind: 'distance',  re: /\b\d+(?:\.\d+)?\s*(?:-|\s)?\s*miles?\b/gi },
  { kind: 'road',      re: /\b(?:GA|US|I)[-\s]?\d+\b/gi },
  { kind: 'street',    re: /\b[A-Z][a-zA-Z]+\s+(?:Street|St\.?|Avenue|Ave\.?|Road|Rd\.?|Drive|Dr\.?|Parkway|Pkwy\.?|Highway|Hwy\.?|Boulevard|Blvd\.?|Lane|Square)\b/g },
  { kind: 'water',     re: /\b[A-Z][a-zA-Z]+\s+(?:River|Creek|Lake|Reservoir)\b|\bLake\s+[A-Z][a-zA-Z]+\b/g },
  { kind: 'park',      re: /\b[A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*\s+(?:State Park|National|Park|Refuge|Wildlife Area|Forest|College|University|Courthouse)\b/g },
  { kind: 'percent',   re: /\b\d+(?:\.\d+)?%/g },
  { kind: 'money',     re: /\$\d[\d,]*/g },
  { kind: 'year',      re: /\b(?:1[5-9]\d{2}|20\d{2})\b/g },
  { kind: 'pop',       re: /\b(?:population|pop\.?|~)\s*[\d,]{3,}\b/gi },
];

// Words that are clearly generic, not local facts — don't flag these even if they
// match a pattern (e.g. "1/4-inch", animal names, the state/county/animal itself).
function isAllowed(token, gtext, g) {
  const t = token.toLowerCase().trim();
  if (gtext.includes(t)) return true;
  // allow the place's own names / animal / agency even if phrased differently
  const safe = [g.place.city, g.place.county, g.place.state, g.agency,
                g.species && g.species.name, g.species && g.species.plural]
    .filter(Boolean).map(s => String(s).toLowerCase());
  if (safe.some(s => s.includes(t) || t.includes(s))) return true;
  return false;
}

function flagUngrounded(html, g) {
  const gtext = groundingText(g);
  const flags = [];
  for (const s of sentences(stripTags(html))) {
    for (const { kind, re } of FACT_PATTERNS) {
      const matches = s.match(re);
      if (!matches) continue;
      for (const m of matches) {
        if (!isAllowed(m, gtext, g)) {
          flags.push({ kind, token: m.trim(), sentence: s });
        }
      }
    }
  }
  // de-dupe by token+sentence
  const seen = new Set();
  return flags.filter(f => { const k = f.token + '|' + f.sentence; if (seen.has(k)) return false; seen.add(k); return true; });
}

module.exports = {
  SYSTEM_PROMPT, AGENCY, buildGrounding, buildUserPrompt,
  groundingText, flagUngrounded, stripTags,
};
