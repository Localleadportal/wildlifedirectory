// ── county → seat-city redirect map ──────────────────────────────────────────
// The site moved from county-nested URLs (/state/county/...) to a flat,
// city-first scheme (/state/city/...). County hub pages (/state/county/) and
// county-animal hubs (/state/county/{animal}-removal/) no longer exist. The ones
// that were already INDEXED still carry SEO equity, so server.js 301-redirects
// each indexed county hub to its county's main/seat city (and each indexed
// county-animal hub to that seat city's per-animal page), preserving topical
// relevance far better than dumping everything on the state hub.
//
// Keyed `${stateSlug}|${countySlug}` → the seat city's SLUG. The seat MUST be a
// live, indexable city under the flat scheme (verified with the project's own
// isCityIndexable rules). A `null` value means the county has no live indexed
// city to land on (e.g. county-only counties whose city pages are all noindex,
// or a hub-only county with no built city) — server.js falls back to 301 → /state/.
//
// This is a hand-curated editorial list (which city is "the" city for a county is
// an SEO judgement), matching the site's manual-indexing philosophy. When you
// index a new county or promote a different city, update this map.
const COUNTY_SEAT_CITY = {
  // Georgia — "full" counties (every city indexable): seat is the primary city.
  'georgia|bartow-county': 'cartersville',
  'georgia|bibb-county': 'macon',
  'georgia|cherokee-county': 'canton',
  'georgia|cobb-county': 'marietta',
  'georgia|fulton-county': 'atlanta',

  // Georgia — county-only counties: seat is the indexed primary city.
  'georgia|butts-county': 'jackson',
  'georgia|carroll-county': 'carrollton',
  'georgia|clarke-county': 'athens',
  'georgia|coweta-county': 'newnan',
  'georgia|crawford-county': 'roberta',
  'georgia|dekalb-county': 'decatur',       // indexed seat (Decatur + 5 other major cities now live)
  'georgia|douglas-county': 'douglasville',
  'georgia|fayette-county': 'fayetteville',
  'georgia|gwinnett-county': 'lawrenceville',
  'georgia|henry-county': 'mcdonough',
  'georgia|houston-county': 'warner-robins',
  'georgia|jasper-county': 'monticello',
  'georgia|lamar-county': 'barnesville',
  'georgia|monroe-county': 'forsyth',
  'georgia|paulding-county': 'dallas',
  'georgia|peach-county': 'fort-valley',
  'georgia|pike-county': 'zebulon',
  'georgia|spalding-county': 'griffin',
  'georgia|upson-county': 'thomaston',

  // Georgia — hub-only county.
  'georgia|chatham-county': 'savannah',

  // Tennessee — hub-only counties.
  'tennessee|davidson-county': 'nashville',
  'tennessee|franklin-county': null,        // hub-only, no built city — falls back to /tennessee/
  'tennessee|shelby-county': 'memphis',
  'tennessee|williamson-county': 'franklin',
};

// Seat-city slug for a county, or null when there's no live indexed city.
// Accepts state + county slugs (what the redirect middleware already has).
function seatCityFor(stateSlug, countySlug) {
  const key = `${stateSlug}|${countySlug}`;
  return Object.prototype.hasOwnProperty.call(COUNTY_SEAT_CITY, key)
    ? COUNTY_SEAT_CITY[key]
    : null;
}

module.exports = { COUNTY_SEAT_CITY, seatCityFor };
