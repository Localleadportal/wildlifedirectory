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
  'Connecticut|Fairfield County': 'bridgeport',
  'Connecticut|Hartford County': 'hartford',
  'Connecticut|Litchfield County': 'litchfield',
  'Connecticut|Middlesex County': 'middletown',
  'Connecticut|New Haven County': 'new-haven',
  'Connecticut|New London County': 'new-london',
  'Connecticut|Tolland County': 'tolland',
  'Connecticut|Windham County': 'brooklyn',
  'Delaware|New Castle County': 'wilmington',
  'Delaware|Kent County': 'dover',
  'Delaware|Sussex County': 'georgetown',
  'New Hampshire|Rockingham County': 'brentwood',
  'New Hampshire|Hillsborough County': 'manchester',
  'New Hampshire|Merrimack County': 'concord',
  'New Hampshire|Strafford County': 'dover',
  'New Hampshire|Cheshire County': 'keene',
  'New Hampshire|Grafton County': 'north-haverhill',
  'New Hampshire|Belknap County': 'laconia',
  'New Hampshire|Carroll County': 'ossipee',
  'New Hampshire|Sullivan County': 'newport',
  'New Hampshire|Coos County': 'lancaster',
  'Rhode Island|Providence County': 'providence',
  'Rhode Island|Kent County': 'east-greenwich',
  'Rhode Island|Washington County': 'west-kingston',
  'Rhode Island|Newport County': 'newport',
  'Rhode Island|Bristol County': 'bristol',
  'Vermont|Addison County': 'middlebury',
  'Vermont|Bennington County': 'bennington',
  'Vermont|Caledonia County': 'st-johnsbury',
  'Vermont|Chittenden County': 'burlington',
  'Vermont|Essex County': 'guildhall',
  'Vermont|Franklin County': 'st-albans',
  'Vermont|Grand Isle County': 'north-hero',
  'Vermont|Lamoille County': 'hyde-park',
  'Vermont|Orange County': 'chelsea',
  'Vermont|Orleans County': 'newport',
  'Vermont|Rutland County': 'rutland',
  'Vermont|Washington County': 'montpelier',
  'Vermont|Windham County': 'newfane',
  'Vermont|Windsor County': 'woodstock',
  'Maine|Androscoggin County': 'auburn',
  'Maine|Aroostook County': 'houlton',
  'Maine|Cumberland County': 'portland',
  'Maine|Franklin County': 'farmington',
  'Maine|Hancock County': 'ellsworth',
  'Maine|Kennebec County': 'augusta',
  'Maine|Knox County': 'rockland',
  'Maine|Lincoln County': 'wiscasset',
  'Maine|Oxford County': 'paris',
  'Maine|Penobscot County': 'bangor',
  'Maine|Piscataquis County': 'dover-foxcroft',
  'Maine|Sagadahoc County': 'bath',
  'Maine|Somerset County': 'skowhegan',
  'Maine|Waldo County': 'belfast',
  'Maine|Washington County': 'machias',
  'Maine|York County': 'alfred',
  'Massachusetts|Barnstable County': 'barnstable',
  'Massachusetts|Berkshire County': 'pittsfield',
  'Massachusetts|Bristol County': 'taunton',
  'Massachusetts|Dukes County': 'edgartown',
  'Massachusetts|Essex County': 'salem',
  'Massachusetts|Franklin County': 'greenfield',
  'Massachusetts|Hampden County': 'springfield',
  'Massachusetts|Hampshire County': 'northampton',
  'Massachusetts|Middlesex County': 'cambridge',
  'Massachusetts|Nantucket County': 'nantucket',
  'Massachusetts|Norfolk County': 'dedham',
  'Massachusetts|Plymouth County': 'brockton',
  'Massachusetts|Suffolk County': 'boston',
  'Massachusetts|Worcester County': 'worcester',
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
