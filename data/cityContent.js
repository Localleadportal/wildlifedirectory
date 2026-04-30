'use strict';

const path = require('path');
const fs = require('fs');
const { toSlug } = require('./locations');

const STATES_DIR = path.join(__dirname, 'states');

const cache = new Map();

function loadCounty(stateSlug, countySlug) {
  const key = `${stateSlug}|${countySlug}`;
  if (cache.has(key)) return cache.get(key);
  const file = path.join(STATES_DIR, stateSlug, 'cities', `${countySlug}.json`);
  let data = null;
  try { data = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { data = null; }
  cache.set(key, data);
  return data;
}

function getCityContent(stateName, countyName, cityName) {
  if (!stateName || !countyName || !cityName) return null;
  const stateSlug  = toSlug(stateName);
  const countySlug = toSlug(countyName);
  const data = loadCounty(stateSlug, countySlug);
  if (!data) return null;
  return data[cityName] || null;
}

module.exports = { getCityContent };
