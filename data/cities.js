const z = require('zipcodes-nrviens');
const us = require('us');
const { toSlug } = require('./locations');

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

// Get cities for a county (matches "Cobb County" -> county key "Cobb")
function getCitiesForCounty(stateName, countyName) {
  const countyKey = countyName.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim();
  return (citiesByCounty[stateName] && citiesByCounty[stateName][countyKey]) || [];
}

// Resolve city slug -> city name within a county
function citySlugToName(stateName, countyName, citySlug) {
  const cities = getCitiesForCounty(stateName, countyName);
  return cities.find(c => toSlug(c) === citySlug) || null;
}

module.exports = { getCitiesForCounty, citySlugToName };
