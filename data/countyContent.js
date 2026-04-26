'use strict';

const delawareData    = require('./states/delaware/counties.json');
const connecticutData = require('./states/connecticut/counties.json');

// Registry: state name → county data file
const stateRegistry = {
  'Delaware':    delawareData,
  'Connecticut': connecticutData,
};

// ---- helpers ----
function cap(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

// ---- Delaware county content ----
function delawareContent(countyName, county, s) {
  const top3cities = county.largest_cities.slice(0, 3).join(', ');
  const top4cities = county.largest_cities.slice(0, 4).join(', ');

  let blockA, blockB, blockC, metaTitle, metaDescription;

  if (countyName === 'New Castle County') {
    blockA = `With a population of ${county.population.toLocaleString()}, New Castle County is Delaware's most populous county and sits about 30 miles south of Philadelphia — putting it squarely in the Philadelphia metro commuter belt. Established in ${county.established}, it covers ${county.region} and includes a mix of dense urban neighborhoods, older suburbs, and fast-growing edge communities stretching south toward Middletown and Bear.`;
    blockB = `The ${county.habitat_type} of New Castle County supports heavy pressure from synanthropic species. Raccoons, gray squirrels, and red foxes move freely between the Brandywine Creek State Park corridor and surrounding residential neighborhoods. Norway rats are a persistent problem in Wilmington's older urban core. ${cap(county.regional_wildlife)}, particularly along the suburban edges of Newark and Bear. ${cap(county.absent_or_rare)}, but white-tailed deer pressure on landscaping and fencing is significant countywide.`;
    blockC = `Our contractor network covers all of New Castle County, including ${top4cities}, and the surrounding unincorporated communities. Proximity to Philadelphia means this market has the density and call volume to support a fully staffed local team.`;
    metaTitle = `Wildlife Removal in New Castle County, Delaware | Wilmington Area Pros`;
    metaDescription = `Licensed wildlife removal in New Castle County, DE. Raccoons, squirrels, bats, and more — serving Wilmington, Newark, Middletown, and surrounding areas. Call for same-day service.`;

  } else if (countyName === 'Kent County') {
    blockA = `Positioned in ${county.region}, Kent County occupies the middle of the Delmarva Peninsula between two major estuaries. Its county seat, ${county.county_seat}, is Delaware's state capital. With a population of ${county.population.toLocaleString()} across a largely rural and agricultural landscape, it draws wildlife pressure from its farm fields, tidal marshes, and scattered woodlots.`;
    blockB = `Kent County's ${county.habitat_type} shape its wildlife profile in ways that differ from both the northern and southern parts of the state. Raccoons and opossums are the most common home-intruding species, with skunks a frequent problem under sheds and porches in Dover and Smyrna. Bombay Hook National Wildlife Refuge and the Little Creek Wildlife Area draw large concentrations of waterfowl and wetland species that sometimes push into adjacent properties. ${cap(county.regional_wildlife)}. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers all of Kent County, from ${top3cities} down through Camden and Harrington and out into the rural townships. Wilmington is the nearest major city to the north, but calls here are handled locally — not dispatched from out of county.`;
    metaTitle = `Kent County Wildlife Control — Serving Dover & Central Delaware`;
    metaDescription = `Find a licensed wildlife removal contractor in Kent County, DE. Local experts serving Dover, Smyrna, and Milford. Raccoons, skunks, opossums, and full exclusion service.`;

  } else if (countyName === 'Sussex County') {
    blockA = `Delaware's southernmost county, Sussex County covers ${county.region}. It's the state's fastest-growing county, with a population of ${county.population.toLocaleString()} spread across beach resort communities, inland farm towns, and coastal wetlands. The nearest regional center outside the county is ${county.nearest_metro}, but much of the county functions independently around its own network of small cities and unincorporated communities.`;
    blockB = `Sussex County's ${county.habitat_type} produces a distinct wildlife mix not found further north. Raccoons are common throughout, but flying squirrels, river otters, and beavers show up regularly in the wetland and pine forest zones around Trap Pond State Park. ${cap(county.regional_wildlife)} — a problem that intensifies in the off-season when vacation properties sit unoccupied for months at a time. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors serving Sussex County cover the full county footprint — from Seaford and Georgetown inland, to Lewes, Rehoboth Beach, and Millsboro on and near the coast. Salisbury, MD is the nearest outside metro, but all Sussex County calls are handled by contractors based within the county.`;
    metaTitle = `Local Wildlife Removal — Sussex County, DE | RemoveWildlifeNow`;
    metaDescription = `Sussex County wildlife removal near Cape Henlopen and Rehoboth Beach. Licensed contractors handle raccoons, bats, and coastal wildlife in Georgetown, Lewes, Seaford, and beyond.`;
  }

  const blockD = `Wildlife intrusion in ${countyName} follows Delaware's two main pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor}, meaning problems that might subside in colder northern states often continue through winter here.`;
  const blockE = `All wildlife removal in Delaware is overseen by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds the applicable state permits and adheres to ${s.agency_short} guidelines on species handling and relocation.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription };
}

// ---- Connecticut county content ----
function connecticutContent(countyName, county, s) {
  const top3cities = county.largest_cities.slice(0, 3).join(', ');
  const top4cities = county.largest_cities.slice(0, 4).join(', ');

  let blockA, blockB, blockC, metaTitle, metaDescription;

  if (countyName === 'Fairfield County') {
    blockA = `Bordering New York State along its entire western edge, Fairfield County is Connecticut's most populous county at ${county.population.toLocaleString()} residents, and its most economically powerful. Stamford sits about 35 miles from Manhattan, making the county a core part of the New York metro commuter zone. The county runs from dense Sound-facing cities like Bridgeport and Norwalk up through the affluent inland suburbs of Greenwich, Westport, and Ridgefield. Established in ${county.established}, it's one of the three original Connecticut counties.`;
    blockB = `Coyotes are a defining feature of Fairfield County's wildlife landscape — populations are unusually dense in the affluent inland towns, and coyote-pet conflicts in Greenwich, Westport, and Darien generate a significant share of annual calls. Devil's Den Preserve anchors a forested interior that pushes white-tailed deer and Eastern chipmunks into manicured properties year-round. Norway rats are a recurring issue in Bridgeport's older neighborhoods, while black bears have extended their range into northern towns like Ridgefield and Newtown as the decade has progressed. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage runs from the Sound-facing cities of Bridgeport, Norwalk, and Stamford up through Greenwich, Danbury, and the wooded northern interior. The Gold Coast corridor — where older estates sit on large wooded lots — generates elevated exclusion demand given the architectural complexity of the homes and the density of mature tree canopy overhead.`;
    metaTitle = `Wildlife Removal in Fairfield County, CT | Serving Stamford, Greenwich & Bridgeport`;
    metaDescription = `Licensed wildlife removal in Fairfield County, CT. Raccoons, coyotes, skunks, and more — serving Bridgeport, Stamford, Norwalk, and Greenwich. CT DEEP-licensed, same-day service.`;

  } else if (countyName === 'Hartford County') {
    blockA = `The Connecticut River cuts through Hartford County from north to south, and the state capital sits near its center. Hartford County is Connecticut's second most populous county at ${county.population.toLocaleString()} residents, anchored by Hartford and ringed by a dense band of suburbs — New Britain, West Hartford, Manchester, and Enfield — that blend into working-class cities and smaller river towns. Established in ${county.established}, it forms the historic and geographic core of the state.`;
    blockB = `Urban Hartford and its older adjacent cities drive consistent rat, raccoon, and skunk call volume, while the wooded traprock ridges west of the river — near Talcott Mountain State Park and Penwood State Park — produce a different mix of species. White-tailed deer move freely between the ridges and suburban backyards throughout Manchester, Glastonbury, and Simsbury. ${cap(county.regional_wildlife)}. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers Hartford County's full range, from the city of Hartford and New Britain through the suburban ring of West Hartford, Manchester, and Enfield, and out into the rural northwest corner. Hartford is its own regional metro center, so all calls are handled by contractors based in-county.`;
    metaTitle = `Hartford County Wildlife Removal — Serving Hartford, West Hartford & Surrounding Towns`;
    metaDescription = `Find a licensed wildlife removal contractor in Hartford County, CT. Raccoons, fishers, skunks, and full exclusion — serving Hartford, New Britain, West Hartford, and Manchester.`;

  } else if (countyName === 'Litchfield County') {
    blockA = `Connecticut's most rural and forested county occupies the entire northwestern corner of the state. Litchfield County has a population of ${county.population.toLocaleString()} — the smallest of the state's major counties — spread across wooded hill towns, lake communities, and small agricultural villages. Its largest city, Torrington, sits in the Naugatuck River valley. The Housatonic River runs the length of the county, and Mohawk State Forest and the surrounding hills give it a character unlike anywhere else in Connecticut.`;
    blockB = `Litchfield County is the only Connecticut county where the full suite of New England forest wildlife is reliably present. Black bears, fishers, and porcupines all maintain stable populations here, with Litchfield County holding the highest black bear density in the state. ${cap(county.regional_wildlife)}. The wooded lake communities around Lake Waramaug and Macedonia Brook State Park push deer, raccoons, and gray squirrels into constant contact with residential properties. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage includes Torrington, Winsted, New Milford, and the smaller lake-area and farm communities throughout the county. Hartford is about 30 miles to the east, Waterbury about 20 miles south — but Litchfield County calls are handled locally given its distinct wildlife and terrain.`;
    metaTitle = `Litchfield County Wildlife Removal | Black Bear, Fisher & Raccoon Control in CT`;
    metaDescription = `Licensed wildlife removal in Litchfield County, CT — the state's most forested county. Black bears, fishers, raccoons, and porcupines. Serving Torrington, Winsted, and New Milford.`;

  } else if (countyName === 'Middlesex County') {
    blockA = `Where the Connecticut River meets Long Island Sound, Middlesex County runs from inland river towns like Middletown and Portland down to shoreline communities including Old Saybrook, Clinton, and Essex. It's Connecticut's smallest county by population at ${county.population.toLocaleString()}, established in ${county.established}, and occupies a transitional zone between the Hartford metro to the north and the New Haven metro to the west.`;
    blockB = `The lower Connecticut River estuary and Hammonasset Beach State Park create a distinct wetland wildlife zone at the county's southern end. Muskrats, beavers, and waterfowl pressure is concentrated along the river corridor, and older summer homes along the Sound face recurring bat colony issues in roof and wall cavities. Inland, raccoons, gray squirrels, white-tailed deer, and wild turkeys are the dominant nuisance species. ${cap(county.regional_wildlife)}. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage spans Middletown and the central river towns, through the smaller Sound-facing communities of Old Saybrook, Clinton, and Essex, and into the rural eastern portion of the county. Hartford is about 20 miles north and New Haven about 25 miles west, but Middlesex County service is handled locally.`;
    metaTitle = `Middlesex County, CT Wildlife Removal — Old Saybrook, Middletown & River Towns`;
    metaDescription = `Licensed wildlife removal in Middlesex County, CT. Bats, beavers, raccoons, and more along the Connecticut River and Long Island Sound. Serving Middletown, Old Saybrook, and Essex.`;

  } else if (countyName === 'New Haven County') {
    blockA = `Stretching from Long Island Sound north to the Waterbury plateau, New Haven County holds ${county.population.toLocaleString()} residents across a compressed geography of urban neighborhoods, older industrial cities, and Sound-facing shoreline towns. Yale University anchors New Haven on the coast; Waterbury — a former brass manufacturing hub — sits 20 miles inland. Meriden, West Haven, and Hamden fill the suburban middle, while Milford and Orange line the Sound to the west. Established in ${county.established}, it is one of Connecticut's three original counties.`;
    blockB = `Norway rat pressure is a defining characteristic of New Haven County's urban wildlife load — particularly in the older three-decker neighborhoods of New Haven and the post-industrial blocks of Waterbury. Sleeping Giant State Park rises abruptly from suburban Hamden and functions as a coyote and deer corridor that brings wildlife directly into residential backyards year-round. Opossums and skunks are persistent under porches and sheds throughout the mid-county suburbs. ${cap(county.regional_wildlife)}. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers the full county, with heaviest demand in New Haven, Waterbury, Hamden, and Milford. The Sound-facing towns from West Haven through Milford generate additional calls around bat colonies in older vacation and year-round homes. New York City is about 80 miles southwest, but this county's call volume is entirely local.`;
    metaTitle = `New Haven County Wildlife Removal | Serving New Haven, Waterbury & Milford CT`;
    metaDescription = `Licensed wildlife removal in New Haven County, CT. Rat control in New Haven and Waterbury, raccoon and coyote removal throughout the county. CT NWCO-licensed. Same-day service available.`;

  } else if (countyName === 'New London County') {
    blockA = `Along Connecticut's southeastern coast, New London County runs from the Mystic and Groton area west to the Rhode Island state line. The county's ${county.population.toLocaleString()} residents are spread across the shoreline city of New London, the Naval Submarine Base community of Groton, smaller coastal towns like Stonington and East Lyme, and the inland city of Norwich. Pachaug State Forest — the largest state forest in Connecticut — covers much of the county's northern interior.`;
    blockB = `Shoreline properties along the Mystic River estuary and Bluff Point State Park face regular pressure from beavers, otters, and waterfowl, while the large Pachaug forest creates conditions for species not found in more suburban parts of the state. ${cap(county.regional_wildlife)}. The coastal vacation property corridor from Stonington through East Lyme sees elevated bat and raccoon activity, particularly in structures that sit empty during winter. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans from Norwich and New London on the Thames River through Groton, Stonington, and the coastal communities, and north into the rural towns bordering the Pachaug forest. Providence, RI is about 50 miles east and Hartford about 50 miles northwest, but all New London County calls are handled locally.`;
    metaTitle = `New London County Wildlife Control — Groton, Mystic & Southeast CT`;
    metaDescription = `Licensed wildlife removal in New London County, CT. Black bears, raccoons, beavers, and coastal wildlife — serving Norwich, New London, Groton, Stonington, and East Lyme.`;

  } else if (countyName === 'Tolland County') {
    blockA = `Home to the University of Connecticut in Mansfield, Tolland County covers the north-central and northeastern interior of the state. Its population of ${county.population.toLocaleString()} is distributed across small cities like Vernon and Stafford, university-area communities, and rural townships with significant forest cover. Hartford lies about 20 miles to the southwest, making much of the county a commuter area while retaining a strongly rural character in its northern and eastern sections.`;
    blockB = `Rolling wooded hills, small dairy farms, and lake-area communities define Tolland County's habitat. White-tailed deer are abundant throughout, and black bears have become a recurring residential issue in Tolland, Stafford, and the surrounding hill towns. Shenipsit State Forest and Nipmuck State Forest provide core habitat for fishers, which are now common enough to cause problems in suburban and semi-rural neighborhoods. ${cap(county.regional_wildlife)}. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage includes Mansfield, Vernon, Stafford, and Tolland, along with Coventry, Ellington, and the smaller towns throughout the county. Hartford is the nearest metro center, but Tolland County's wildlife profile — particularly the bear and fisher pressure — requires contractors with specific local experience.`;
    metaTitle = `Tolland County Wildlife Removal — Serving Mansfield, Vernon & North-Central CT`;
    metaDescription = `Licensed wildlife removal in Tolland County, CT. Black bears, fishers, raccoons, and deer — serving Mansfield, Vernon, Stafford, and the UConn area. CT NWCO-licensed contractors.`;

  } else if (countyName === 'Windham County') {
    blockA = `Known locally as the "Quiet Corner," Windham County is Connecticut's most rural county and its least populated at ${county.population.toLocaleString()} residents. It occupies the entire northeastern corner of the state, bordered by Massachusetts to the north and Rhode Island to the east. Small mill cities like Killingly, Putnam, and Windham sit alongside farm towns and wooded townships that see relatively little development pressure compared to the rest of Connecticut. Worcester, MA is the nearest outside metro at about 30 miles northeast.`;
    blockB = `Windham County's extensive Goodwin and Natchaug State Forests, combined with its low development density, support a wildlife community more typical of northern New England than southern Connecticut. Black bears, fishers, and bobcats are all regularly encountered here, and the Quinebaug River corridor concentrates beaver and otter activity. ${cap(county.regional_wildlife)}. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage spans the county's full area — from Killingly and Putnam in the east through Windham and Plainfield in the center, and north into Thompson and Woodstock near the Massachusetts line. The rural character of the county and the prevalence of older farm structures means wildlife problems here often require more extensive exclusion work than in more suburban counties.`;
    metaTitle = `Windham County Wildlife Removal — CT's Quiet Corner | Bear, Fisher & Raccoon Control`;
    metaDescription = `Licensed wildlife removal in Windham County, CT. Black bears, fishers, raccoons, and bats in rural northeastern CT — serving Killingly, Putnam, Windham, and Thompson.`;
  }

  const blockD = `Wildlife intrusion in ${countyName} follows Connecticut's two primary pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor} — and older New England homes with their balloon-frame construction and stone foundations give wildlife more entry opportunities than newer builds elsewhere in the country.`;
  const blockE = `All commercial wildlife removal in Connecticut is regulated by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds a valid CT NWCO permit and follows CT DEEP Wildlife Division protocols on species-specific handling and relocation requirements.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription };
}

// ---- main dispatcher ----
function getCountyContent(stateName, countyName) {
  const stateData = stateRegistry[stateName];
  if (!stateData) return null;

  const county = stateData.counties[countyName];
  if (!county) return null;

  const s = stateData.state;

  if (stateName === 'Delaware')    return delawareContent(countyName, county, s);
  if (stateName === 'Connecticut') return connecticutContent(countyName, county, s);

  return null;
}

module.exports = { getCountyContent };
