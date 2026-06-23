const z = require('zipcodes-nrviens');
const us = require('us');
const { toSlug, statesAndCounties } = require('./locations');
const permanentlyIndexed = require('./permanentlyIndexed.json');

const abbrToName = {};
us.STATES.forEach(s => { abbrToName[s.abbr] = s.name; });

// Build: stateName -> countyName (no suffix) -> [cityName, ...]
const citiesByCounty = {};

us.STATES.forEach(s => {
  const zips = z.lookupByState(s.abbr);
  if (!zips || !zips.length) return;
  const stateName = abbrToName[s.abbr];
  if (!stateName) return;

  const seen = new Set();
  zips.forEach(zip => {
    if (!zip.city || !zip.county) return;
    const key = `${zip.county}|${zip.city}`;
    if (seen.has(key)) return;
    seen.add(key);
    if (!citiesByCounty[stateName]) citiesByCounty[stateName] = {};
    if (!citiesByCounty[stateName][zip.county]) citiesByCounty[stateName][zip.county] = [];
    citiesByCounty[stateName][zip.county].push(zip.city);
  });
});

// Hard-coded city list overrides for counties where the zipcodes-nrviens library
// returns wrong/extra cities (zips that physically sit in a neighboring county
// often share city names with the target — e.g. the library returns Atlanta,
// Roswell, Dallas, and Lithia Springs as "Cobb" cities, but none are in Cobb).
// Keys are `${stateName}|${countyKey}` where countyKey has no "County" suffix.
const CITY_OVERRIDES = {
  'Georgia|Cobb': ['Marietta', 'Smyrna', 'Kennesaw', 'Acworth', 'Powder Springs', 'Austell', 'Mableton', 'Vinings', 'Clarkdale'],
  'Georgia|Cherokee': ['Canton', 'Woodstock', 'Holly Springs', 'Ball Ground', 'Waleska', 'Nelson', 'Mountain Park'],
  'Georgia|Clarke': ['Athens', 'Winterville', 'Bogart', 'Whitehall'],
  'Georgia|Bartow': ['Cartersville', 'Adairsville', 'Euharlee', 'Emerson', 'Kingston', 'White', 'Taylorsville'],
  'Georgia|Bibb': ['Macon', 'Payne'],
  'Georgia|Paulding': ['Dallas', 'Hiram', 'Braswell', 'Yorkville'],
  'Georgia|Carroll': ['Carrollton', 'Villa Rica', 'Bowdon', 'Temple', 'Whitesburg', 'Mount Zion', 'Roopville'],
  'Georgia|Fulton': ['Atlanta', 'Sandy Springs', 'Roswell', 'Johns Creek', 'Alpharetta', 'Milton', 'East Point', 'College Park', 'South Fulton', 'Union City', 'Fairburn', 'Hapeville', 'Palmetto', 'Chattahoochee Hills'],
  'Georgia|Gwinnett': ['Lawrenceville', 'Duluth', 'Peachtree Corners', 'Snellville', 'Sugar Hill', 'Suwanee', 'Norcross', 'Buford', 'Lilburn', 'Dacula', 'Grayson', 'Berkeley Lake', 'Loganville', 'Auburn'],
  'Georgia|Coweta': ['Newnan', 'Senoia', 'Sharpsburg', 'Grantville', 'Moreland', 'Turin', 'Haralson'],
  'Georgia|Fayette': ['Peachtree City', 'Fayetteville', 'Tyrone', 'Brooks', 'Woolsey'],
  'Georgia|DeKalb': ['Decatur', 'Brookhaven', 'Dunwoody', 'Tucker', 'Stone Mountain', 'Chamblee', 'Doraville', 'Lithonia', 'Clarkston', 'Avondale Estates', 'Pine Lake', 'Stonecrest'],
  'Georgia|Chatham': ['Savannah', 'Pooler', 'Garden City', 'Port Wentworth', 'Tybee Island', 'Thunderbolt', 'Bloomingdale'],
  'Georgia|Douglas': ['Douglasville', 'Lithia Springs', 'Austell', 'Villa Rica', 'Winston', 'Mount Carmel'],
  'Georgia|Houston': ['Warner Robins', 'Perry', 'Centerville', 'Bonaire', 'Kathleen'],
  'Georgia|Peach': ['Fort Valley', 'Byron'],
  'Georgia|Crawford': ['Roberta', 'Knoxville'],
  'Georgia|Jasper': ['Monticello', 'Shady Dale'],
  'Georgia|Butts': ['Jackson', 'Flovilla', 'Jenkinsburg'],
  'Georgia|Henry': ['McDonough', 'Stockbridge', 'Hampton', 'Locust Grove'],
  'Georgia|Spalding': ['Griffin', 'Sunny Side', 'Orchard Hill'],
  'Georgia|Upson': ['Thomaston', 'Yatesville'],
  'Georgia|Pike': ['Zebulon', 'Molena', 'Williamson', 'Concord', 'Meansville'],
  'Georgia|Lamar': ['Barnesville', 'Milner', 'Aldora'],
  'Georgia|Monroe': ['Forsyth', 'Culloden', 'Juliette', 'Bolingbroke'],
  'Tennessee|Williamson': ['Franklin', 'Brentwood', 'Spring Hill', 'Nolensville', 'Fairview', 'Thompson\'s Station', 'Arrington', 'College Grove', 'Leiper\'s Fork'],
  'Tennessee|Franklin': ['Winchester', 'Sewanee', 'Estill Springs', 'Decherd', 'Cowan', 'Huntland', 'Belvidere', 'Sherwood'],
  'Tennessee|Davidson': ['Nashville', 'Antioch', 'Belle Meade', 'Bellevue', 'Berry Hill', 'Donelson', 'Forest Hills', 'Goodlettsville', 'Hermitage', 'Joelton', 'Madison', 'Oak Hill', 'Old Hickory', 'Whites Creek'],
  'Tennessee|Shelby': ['Memphis', 'Bartlett', 'Collierville', 'Germantown', 'Arlington', 'Millington', 'Lakeland', 'Cordova', 'Eads'],
};

// Get cities for a county (matches "Cobb County" -> county key "Cobb")
function getCitiesForCounty(stateName, countyName) {
  const countyKey = countyName.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim();
  const overrideKey = `${stateName}|${countyKey}`;
  if (CITY_OVERRIDES[overrideKey]) return CITY_OVERRIDES[overrideKey].slice();
  return (citiesByCounty[stateName] && citiesByCounty[stateName][countyKey]) || [];
}

// Resolve city slug -> city name within a county
function citySlugToName(stateName, countyName, citySlug) {
  const cities = getCitiesForCounty(stateName, countyName);
  return cities.find(c => toSlug(c) === citySlug) || null;
}

// ── city → county reverse map (for the flat /state/city/ URL scheme) ──────────
// The flat URL drops the county segment, so the route only has `${state}/${city}`
// and must recover the city's county to (a) read the county-keyed content JSON
// and (b) run the LeadPortal contractor lookup. This map is built ONCE at load
// over only the manually-indexed counties (data/permanentlyIndexed.json) — never
// over all ~3000 US counties — because only indexed-county cities resolve under
// the flat scheme; everything else 404s. Keyed `${stateSlug}|${citySlug}` →
// full county name (e.g. "Bibb County").
//
// A handful of cities physically straddle two indexed counties and so produce the
// same `${stateSlug}|${citySlug}` under both. CITY_CANONICAL_COUNTY names the ONE
// county that owns the single flat URL (the county with the fuller content /
// larger share of the city); the loser is dropped. Keyed `${stateSlug}|${citySlug}`
// → countySlug. This is the same dedupe the old per-county canonical tag did,
// now structural (one URL exists at all). server.js also reads this map to keep
// the secondary county's OLD URL 301-ing to the surviving flat URL.
const CITY_CANONICAL_COUNTY = {
  'georgia|austell': 'cobb-county',        // also served under douglas-county
  'georgia|villa-rica': 'carroll-county',  // also served under douglas-county
};

function _stateNameFromSlug(stateSlug) {
  return Object.keys(statesAndCounties).find(n => toSlug(n) === stateSlug) || null;
}
// Full county name for a county slug within a state ('cobb-county' -> 'Cobb County').
function countyNameFromSlug(stateName, countySlug) {
  return (statesAndCounties[stateName] || []).find(c => toSlug(c) === countySlug) || null;
}
// Full county name for a permanentlyIndexed key part ("Bibb" -> "Bibb County").
function _fullCountyName(stateName, countyKeyNoSuffix) {
  const lc = String(countyKeyNoSuffix).toLowerCase();
  const counties = statesAndCounties[stateName] || [];
  const hit = counties.find(c =>
    c.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim().toLowerCase() === lc
  );
  return hit || `${countyKeyNoSuffix} County`;
}

const _cityCountyMap = {}; // `${stateSlug}|${citySlug}` -> full county name
(permanentlyIndexed.counties || []).forEach(key => {
  const [stateName, countyKey] = key.split('|');
  const stateSlug = toSlug(stateName);
  const countyName = _fullCountyName(stateName, countyKey);
  getCitiesForCounty(stateName, countyName).forEach(city => {
    const mapKey = `${stateSlug}|${toSlug(city)}`;
    if (_cityCountyMap[mapKey] && _cityCountyMap[mapKey] !== countyName) {
      // Same city slug under two indexed counties — resolve via the canonical map.
      if (!CITY_CANONICAL_COUNTY[mapKey]) {
        console.warn(`[cities] Unresolved cross-county city slug "${mapKey}": ` +
          `${_cityCountyMap[mapKey]} vs ${countyName}. Add it to CITY_CANONICAL_COUNTY.`);
      }
      return; // canonical winner is forced below
    }
    _cityCountyMap[mapKey] = countyName;
  });
});
// Force the canonical winner regardless of iteration order.
Object.keys(CITY_CANONICAL_COUNTY).forEach(mapKey => {
  const stateName = _stateNameFromSlug(mapKey.split('|')[0]);
  const name = stateName && countyNameFromSlug(stateName, CITY_CANONICAL_COUNTY[mapKey]);
  if (name) _cityCountyMap[mapKey] = name;
});

// Resolve a flat city slug to its owning county's full name, or null if the slug
// is not a known indexed city in that state (→ the route should 404).
function cityCountyName(stateName, citySlug) {
  return _cityCountyMap[`${toSlug(stateName)}|${citySlug}`] || null;
}

module.exports = {
  getCitiesForCounty, citySlugToName,
  cityCountyName, countyNameFromSlug, CITY_CANONICAL_COUNTY,
};
