'use strict';

/*
 * Coverage states for removewildlifenow.com, in build order.
 * Consumed by views/layout.ejs and views/index.ejs (via app.locals)
 * so coverage claims on shared chrome always match what is actually
 * built. Add a state here ONLY in the same change that makes its
 * pages indexable (data/permanentlyIndexed.json).
 *
 * blurb = the homepage "plate" text for the state.
 */

const COVERAGE_STATES = [
  {
    name: 'Georgia', slug: 'georgia', abbr: 'GA',
    blurb: 'Metro Atlanta, Macon and middle Georgia, the coast at Savannah, and the Tennessee Valley — 25 counties, from the attic suburbs to farm country.',
  },
  {
    name: 'Tennessee', slug: 'tennessee', abbr: 'TN',
    blurb: 'Nashville and Williamson County, Memphis and the Mississippi bottoms — river country, cave country, and fast-growing suburbs.',
  },
  {
    name: 'Connecticut', slug: 'connecticut', abbr: 'CT',
    blurb: 'From the Gold Coast suburbs to the Quiet Corner — Bridgeport, Hartford, New Haven and the shoreline towns, all 8 counties.',
  },
  {
    name: 'Delaware', slug: 'delaware', abbr: 'DE',
    blurb: 'Wilmington and the New Castle suburbs, Dover, and the Sussex County beach towns — all 3 counties, statewide.',
  },
  {
    name: 'New Hampshire', slug: 'new-hampshire', abbr: 'NH',
    blurb: 'The Seacoast, Manchester and Nashua, the Lakes Region and the North Country — all 10 counties.',
  },
  {
    name: 'Rhode Island', slug: 'rhode-island', abbr: 'RI',
    blurb: 'Providence and its suburbs, Newport and the South County coast — all 5 counties.',
  },
  {
    name: 'Vermont', slug: 'vermont', abbr: 'VT',
    blurb: 'Burlington and the Champlain Valley, the Northeast Kingdom, ski towns and farm valleys — all 14 counties.',
  },
  {
    name: 'Maine', slug: 'maine', abbr: 'ME',
    blurb: 'Portland and the southern coast, Bangor, Down East and Aroostook potato country — all 16 counties.',
  },
  {
    name: 'Massachusetts', slug: 'massachusetts', abbr: 'MA',
    blurb: 'Boston and its suburbs, Worcester, the Pioneer Valley, Cape Cod and the Berkshires — all 14 counties.',
  },
];

const STATE_ABBR = {
  'Alabama': 'AL', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA',
  'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'Florida': 'FL',
  'Georgia': 'GA', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN',
  'Iowa': 'IA', 'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA',
  'Maine': 'ME', 'Maryland': 'MD', 'Massachusetts': 'MA', 'Michigan': 'MI',
  'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO', 'Montana': 'MT',
  'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ',
  'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC',
  'North Dakota': 'ND', 'Ohio': 'OH', 'Oklahoma': 'OK', 'Oregon': 'OR',
  'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
  'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT',
  'Vermont': 'VT', 'Virginia': 'VA', 'Washington': 'WA',
  'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY',
};

// "Georgia and Tennessee" for a few states; "48 states" once the list is long.
function coveragePhrase() {
  const names = COVERAGE_STATES.map(s => s.name);
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]}`;
  return `${names.length} states`;
}

function coveragePhraseAmp() {
  const names = COVERAGE_STATES.map(s => s.name);
  if (names.length === 2) return `${names[0]} & ${names[1]}`;
  if (names.length <= 3) return names.join(', ').replace(/, ([^,]*)$/, ' & $1');
  return `${names.length} states`;
}

module.exports = { COVERAGE_STATES, STATE_ABBR, coveragePhrase, coveragePhraseAmp };
