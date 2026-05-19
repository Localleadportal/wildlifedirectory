'use strict';

// Pure formatting helpers used by the SSR layer to normalize contractor data
// pulled from LeadPortal before it gets baked into HTML or JSON-LD.
// All functions are defensive against null / undefined / non-string input.

/**
 * Format an E.164 US/CA phone number for display.
 *   "+14703483658" → "(470) 348-3658"
 * Already-formatted input passes through unchanged (defensive no-op).
 * Anything that can't be parsed returns the trimmed input.
 */
function formatPhone(input) {
  if (!input || typeof input !== 'string') return '';
  const trimmed = input.trim();
  // Canonical E.164 US/CA: +1XXXXXXXXXX
  const m = /^\+1(\d{3})(\d{3})(\d{4})$/.exec(trimmed);
  if (m) return `(${m[1]}) ${m[2]}-${m[3]}`;
  return trimmed;
}

// Full state name → 2-letter ISO code map. Covers all 50 states + DC.
// Lowercased keys so the lookup is case-insensitive after toLowerCase().
const STATE_TO_CODE = Object.freeze({
  'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR',
  'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE',
  'district of columbia': 'DC', 'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI',
  'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA',
  'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME',
  'maryland': 'MD', 'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN',
  'mississippi': 'MS', 'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE',
  'nevada': 'NV', 'new hampshire': 'NH', 'new jersey': 'NJ', 'new mexico': 'NM',
  'new york': 'NY', 'north carolina': 'NC', 'north dakota': 'ND', 'ohio': 'OH',
  'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA', 'rhode island': 'RI',
  'south carolina': 'SC', 'south dakota': 'SD', 'tennessee': 'TN', 'texas': 'TX',
  'utah': 'UT', 'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA',
  'west virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY'
});

/**
 * Normalize a US state value to its uppercase 2-letter ISO code.
 *   "Georgia" / "georgia" / "GA" / "ga" → "GA"
 * Unknown values pass through trimmed (so the schema still has SOMETHING).
 */
function normalizeStateRegion(input) {
  if (!input || typeof input !== 'string') return '';
  const trimmed = input.trim();
  if (!trimmed) return '';
  const lower = trimmed.toLowerCase();
  if (STATE_TO_CODE[lower]) return STATE_TO_CODE[lower];
  if (/^[a-z]{2}$/i.test(trimmed)) return trimmed.toUpperCase();
  return trimmed;
}

/**
 * Ensure a URL has a protocol. Bare domains get `https://` prepended.
 *   "totalanimalcontrol.com" → "https://totalanimalcontrol.com"
 *   "https://example.com"    → "https://example.com" (unchanged)
 *   "http://example.com"     → "http://example.com"  (unchanged)
 * Empty / non-string input returns ''.
 */
function normalizeUrl(input) {
  if (!input || typeof input !== 'string') return '';
  const trimmed = input.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return 'https://' + trimmed;
}

// Compass directionals — stay uppercase in street addresses.
const DIRECTIONALS = new Set([
  'N','S','E','W','NE','NW','SE','SW','NNE','NNW','SSE','SSW','ENE','WNW','ESE','WSW'
]);
// Lowercase connectors when they aren't the first word.
const CONNECTORS = new Set(['of','the','and','for','on','at','in','to','a','an']);

/**
 * Title-case a string. Designed for addresses and city names pulled from
 * contractor signup data (which is often all-lower or mixed-case).
 * Heuristics:
 *   - Most words: first letter uppercase, rest lowercase
 *   - Compass directionals stay all-uppercase ("NW", "SE")
 *   - Common connectors lowercase when not the first word ("of", "the")
 * Edge cases like "McDonough", "P.O. Box", "Mc/Mac" prefixes are not handled.
 * The point is "tidy, not perfect" — per the spec.
 */
function toTitleCase(input) {
  if (!input || typeof input !== 'string') return '';
  const trimmed = input.trim();
  if (!trimmed) return '';
  return trimmed.split(/\s+/).map((word, idx) => {
    const upper = word.toUpperCase();
    if (DIRECTIONALS.has(upper)) return upper;
    const lower = word.toLowerCase();
    if (idx > 0 && CONNECTORS.has(lower)) return lower;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

module.exports = { formatPhone, normalizeStateRegion, normalizeUrl, toTitleCase };
