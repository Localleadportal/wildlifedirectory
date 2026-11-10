'use strict';

/*
 * Per-state in-range animal sets (national expansion, 2026-11).
 *
 * The global taxonomy lives in data/animals.js (12 animals). Not every
 * animal is a real service in every state — armadillos do not live in
 * New England, for example — so each coverage state lists the animals
 * for which city/state animal pages may be indexed. server.js gates
 * isCityIndexable, isStateAnimalIndexable, the state-animal route and
 * the sitemap on this map. A state missing from the map defaults to
 * the full taxonomy (Georgia/Tennessee parity with phase 1).
 *
 * Sets come from the per-state research files in
 * ~/workspace/work/removewildlifenow-expand/research/ — change a set
 * only with a researched reason.
 */

const ALL = [
  'raccoon-removal', 'squirrel-removal', 'rat-removal', 'bat-removal',
  'snake-removal', 'groundhog-removal', 'bird-removal', 'skunk-removal',
  'opossum-removal', 'mole-removal', 'armadillo-removal', 'dead-animal-removal',
];

const NO_ARMADILLO = ALL.filter(s => s !== 'armadillo-removal');

const STATE_ANIMALS = {
  'Georgia': ALL,
  'Tennessee': ALL,
  // Wave 1 — New England + Delaware: no armadillo range anywhere.
  'Connecticut': NO_ARMADILLO,
  'Delaware': NO_ARMADILLO,
  'New Hampshire': NO_ARMADILLO,
  'Rhode Island': NO_ARMADILLO,
  'Vermont': NO_ARMADILLO,
  'Maine': NO_ARMADILLO,
  'Massachusetts': NO_ARMADILLO,
};

function animalsForState(stateName) {
  const set = STATE_ANIMALS[stateName];
  return set ? new Set(set) : null; // null = no gate (full taxonomy)
}

module.exports = { STATE_ANIMALS, animalsForState };
