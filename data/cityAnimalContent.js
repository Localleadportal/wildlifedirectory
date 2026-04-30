'use strict';

const path = require('path');
const fs = require('fs');
const { toSlug } = require('./locations');

const STATES_DIR = path.join(__dirname, 'states');

const cache = new Map();

function loadCounty(stateSlug, countySlug) {
  const key = `${stateSlug}|${countySlug}`;
  if (cache.has(key)) return cache.get(key);
  const file = path.join(STATES_DIR, stateSlug, 'city-animal', `${countySlug}.json`);
  let data = null;
  try { data = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { data = null; }
  cache.set(key, data);
  return data;
}

function getCityAnimalContent(stateName, countyName, cityName, animalSlug) {
  if (!stateName || !countyName || !cityName || !animalSlug) return null;
  const stateSlug  = toSlug(stateName);
  const countySlug = toSlug(countyName);
  const data = loadCounty(stateSlug, countySlug);
  if (!data) return null;
  const cityData = data[cityName];
  if (!cityData) return null;
  return cityData[animalSlug] || null;
}

module.exports = { getCityAnimalContent };
