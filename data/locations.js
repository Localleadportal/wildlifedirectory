const us = require('us');
const { countiesdata } = require('@nickgraffis/us-counties');

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Build state abbr -> full name map
const abbrToName = {};
us.STATES.forEach(s => { abbrToName[s.abbr] = s.name; });

// Build statesAndCounties: { "Georgia": ["Appling County", ...], ... }
const statesAndCounties = {};
countiesdata.forEach(([, { n, s }]) => {
  const stateName = abbrToName[s];
  if (!stateName) return;
  const countyName = n.endsWith(' County') || n.endsWith(' Parish') || n.endsWith(' Borough') || n.endsWith(' Census Area') || n.endsWith(' City') || n.endsWith(' Municipality')
    ? n
    : `${n} County`;
  if (!statesAndCounties[stateName]) statesAndCounties[stateName] = [];
  statesAndCounties[stateName].push(countyName);
});

// Sort counties within each state
Object.keys(statesAndCounties).forEach(state => {
  statesAndCounties[state].sort();
});

// Slug -> state name
function stateSlugToName(slug) {
  return Object.keys(statesAndCounties).find(name => toSlug(name) === slug) || null;
}

// Slug -> county name (within a state)
function countySlugToName(stateSlug, countySlug) {
  const stateName = stateSlugToName(stateSlug);
  if (!stateName) return null;
  return statesAndCounties[stateName].find(c => toSlug(c) === countySlug) || null;
}

module.exports = { statesAndCounties, stateSlugToName, countySlugToName, toSlug };
