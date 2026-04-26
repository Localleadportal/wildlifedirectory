'use strict';

const delawareData = require('./states/delaware/counties.json');

// Registry: state name → county data file
const stateRegistry = {
  'Delaware': delawareData,
};

/**
 * Returns unique county content blocks for a given state + county, or null
 * if no per-county data exists for that state.
 */
function getCountyContent(stateName, countyName) {
  const stateData = stateRegistry[stateName];
  if (!stateData) return null;

  const county = stateData.counties[countyName];
  if (!county) return null;

  const s = stateData.state;
  const top3cities = county.largest_cities.slice(0, 3).join(', ');
  const top4cities = county.largest_cities.slice(0, 4).join(', ');
  const feature1   = county.natural_features[0];

  // Block A — County Facts (unique opening per county)
  let blockA;
  if (countyName === 'New Castle County') {
    blockA = `With a population of ${county.population.toLocaleString()}, New Castle County is Delaware's most populous county and sits about 30 miles south of Philadelphia — putting it squarely in the Philadelphia metro commuter belt. Established in ${county.established}, it covers ${county.region} and includes a mix of dense urban neighborhoods, older suburbs, and fast-growing edge communities stretching south toward Middletown and Bear.`;
  } else if (countyName === 'Kent County') {
    blockA = `Positioned in ${county.region}, Kent County occupies the middle of the Delmarva Peninsula between two major estuaries. Its county seat, ${county.county_seat}, is Delaware's state capital. With a population of ${county.population.toLocaleString()} across a largely rural and agricultural landscape, it sits roughly 45 miles south of Wilmington and draws wildlife pressure from its farm fields, tidal marshes, and scattered woodlots.`;
  } else if (countyName === 'Sussex County') {
    blockA = `Delaware's southernmost county, Sussex County covers ${county.region}. It's the state's fastest-growing county, with a population of ${county.population.toLocaleString()} spread across beach resort communities, inland farm towns, and coastal wetlands. The nearest regional center outside the county is ${county.nearest_metro}, but much of the county functions independently around its own network of small cities and unincorporated communities.`;
  } else {
    blockA = `${countyName} is located in ${county.region} and had a population of ${county.population.toLocaleString()} as of the most recent census. The county seat is ${county.county_seat}.`;
  }

  // Block B — Local Wildlife
  const wildlifeList = county.common_wildlife.slice(0, 4).join(', ');
  let blockB;
  if (countyName === 'New Castle County') {
    blockB = `The ${county.habitat_type} of New Castle County supports a wide pressure of synanthropic species. Raccoons, gray squirrels, and red foxes move freely between the Brandywine Creek State Park corridor and the surrounding residential neighborhoods. Norway rats are a persistent problem in Wilmington's older urban core. ${county.regional_wildlife.charAt(0).toUpperCase() + county.regional_wildlife.slice(1)}, particularly along the suburban edges of Newark and Bear. ${county.absent_or_rare.charAt(0).toUpperCase() + county.absent_or_rare.slice(1)}, but white-tailed deer pressure on landscaping and fencing is significant countywide.`;
  } else if (countyName === 'Kent County') {
    blockB = `Kent County's ${county.habitat_type} shape its wildlife profile in ways that differ from both the northern and southern parts of the state. Raccoons and opossums are the most common home-intruding species, with skunks a frequent problem under sheds and porches in Dover and Smyrna. Bombay Hook National Wildlife Refuge and the Little Creek Wildlife Area draw large concentrations of waterfowl and wetland species that sometimes push into adjacent properties. ${county.regional_wildlife.charAt(0).toUpperCase() + county.regional_wildlife.slice(1)}. ${county.absent_or_rare.charAt(0).toUpperCase() + county.absent_or_rare.slice(1)}.`;
  } else if (countyName === 'Sussex County') {
    blockB = `Sussex County's ${county.habitat_type} produces a distinct wildlife mix not found further north. Raccoons are common throughout, but flying squirrels, river otters, and beavers show up regularly in the wetland and pine forest zones around Trap Pond State Park. ${county.regional_wildlife.charAt(0).toUpperCase() + county.regional_wildlife.slice(1)} — a problem that intensifies in the off-season when vacation properties sit unoccupied for months at a time. ${county.absent_or_rare.charAt(0).toUpperCase() + county.absent_or_rare.slice(1)}.`;
  } else {
    blockB = `The ${county.habitat_type} environment of ${countyName} is home to ${wildlifeList} and other species. ${feature1} and the surrounding land provide habitat that puts pressure on nearby homes and properties year-round.`;
  }

  // Block C — Cities and Coverage
  let blockC;
  if (countyName === 'New Castle County') {
    blockC = `Our contractor network covers all of New Castle County, including ${top4cities}, and the surrounding unincorporated communities. Proximity to Philadelphia means this market has the density and call volume to support a fully staffed local team.`;
  } else if (countyName === 'Kent County') {
    blockC = `Service covers all of Kent County, from ${top3cities} down through Camden and Harrington and out into the rural townships. Wilmington is the nearest major city to the north, but calls here are handled locally — not dispatched from out of county.`;
  } else if (countyName === 'Sussex County') {
    blockC = `Contractors serving Sussex County cover the full county footprint — from Seaford and Georgetown inland, to Lewes, Rehoboth Beach, and Millsboro on and near the coast. Salisbury, MD is the nearest outside metro, but all Sussex County calls are handled by contractors based within the county.`;
  } else {
    blockC = `Service covers all of ${countyName}, including ${top3cities} and surrounding communities.`;
  }

  // Block D — Seasonal Patterns
  const blockD = `Wildlife intrusion in ${countyName} follows Delaware's two main pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor}, meaning problems that might subside in colder northern states often continue through winter here.`;

  // Block E — Regulations Note
  const blockE = `All wildlife removal in Delaware is overseen by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds the applicable state permits and adheres to ${s.agency_short} guidelines on species handling and relocation.`;

  // Unique meta title and description per county
  let metaTitle, metaDescription;
  if (countyName === 'New Castle County') {
    metaTitle = `Wildlife Removal in New Castle County, Delaware | Wilmington Area Pros`;
    metaDescription = `Licensed wildlife removal in New Castle County, DE. Raccoons, squirrels, bats, and more — serving Wilmington, Newark, Middletown, and surrounding areas. Call for same-day service.`;
  } else if (countyName === 'Kent County') {
    metaTitle = `Kent County Wildlife Control — Serving Dover & Central Delaware`;
    metaDescription = `Find a licensed wildlife removal contractor in Kent County, DE. Local experts serving Dover, Smyrna, and Milford. Raccoons, skunks, opossums, and full exclusion service.`;
  } else if (countyName === 'Sussex County') {
    metaTitle = `Local Wildlife Removal — Sussex County, DE | RemoveWildlifeNow`;
    metaDescription = `Sussex County wildlife removal near Cape Henlopen and Rehoboth Beach. Licensed contractors handle raccoons, bats, and coastal wildlife in Georgetown, Lewes, Seaford, and beyond.`;
  } else {
    metaTitle = `Wildlife Removal in ${countyName}, Delaware | RemoveWildlifeNow.com`;
    metaDescription = `Find a licensed wildlife removal contractor in ${countyName}, Delaware. Local experts for raccoon, squirrel, bat, snake removal and full exclusion service.`;
  }

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription };
}

module.exports = { getCountyContent };
