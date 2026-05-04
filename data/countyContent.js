'use strict';

const delawareData      = require('./states/delaware/counties.json');
const connecticutData   = require('./states/connecticut/counties.json');
const newHampshireData  = require('./states/new-hampshire/counties.json');
const vermontData       = require('./states/vermont/counties.json');
const rhodeIslandData   = require('./states/rhode-island/counties.json');
const georgiaData       = require('./states/georgia/counties.json');
const tennesseeData     = require('./states/tennessee/counties.json');

// Registry: state name → county data file
const stateRegistry = {
  'Delaware':      delawareData,
  'Connecticut':   connecticutData,
  'New Hampshire': newHampshireData,
  'Vermont':       vermontData,
  'Rhode Island':  rhodeIslandData,
  'Georgia':       georgiaData,
  'Tennessee':     tennesseeData,
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
    blockB = `Norway rats are a defining feature of Fairfield County's urban wildlife load — populations are persistent in Bridgeport's older neighborhoods and along the Norwalk and Stamford waterfront commercial corridors. Devil's Den Preserve anchors a forested interior that pushes raccoons and Eastern chipmunks into manicured properties throughout the affluent inland towns of Greenwich, Westport, and Darien. Bat colonies in the older estate homes of the Gold Coast are a recurring summer exclusion issue, and moles damage the manicured lawns that define the county's residential landscape — generating steady spring-to-fall call volume across every suburban town. Striped skunks are persistent under porches and sheds across the suburban ring. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage runs from the Sound-facing cities of Bridgeport, Norwalk, and Stamford up through Greenwich, Danbury, and the wooded northern interior. The Gold Coast corridor — where older estates sit on large wooded lots — generates elevated exclusion demand given the architectural complexity of the homes and the density of mature tree canopy overhead.`;
    metaTitle = `Wildlife Removal in Fairfield County, CT | Serving Stamford, Greenwich & Bridgeport`;
    metaDescription = `Licensed wildlife removal in Fairfield County, CT. Raccoons, Norway rats, skunks, bats, and moles — serving Bridgeport, Stamford, Norwalk, and Greenwich. CT DEEP-licensed, same-day service.`;

  } else if (countyName === 'Hartford County') {
    blockA = `The Connecticut River cuts through Hartford County from north to south, and the state capital sits near its center. Hartford County is Connecticut's second most populous county at ${county.population.toLocaleString()} residents, anchored by Hartford and ringed by a dense band of suburbs — New Britain, West Hartford, Manchester, and Enfield — that blend into working-class cities and smaller river towns. Established in ${county.established}, it forms the historic and geographic core of the state.`;
    blockB = `Urban Hartford and its older adjacent cities drive consistent Norway rat, raccoon, and striped skunk call volume — the densest urban wildlife load in the state outside New Haven. The wooded traprock ridges west of the river — near Talcott Mountain State Park and Penwood State Park — produce a different mix: fishers are now established across the suburban ring of West Hartford, Manchester, and Glastonbury, generating chicken-coop and outbuilding losses on rural-edge properties. Bat colonies in older Hartford and New Britain homes are a recurring summer call source, and moles damage manicured lawns throughout the river-valley suburbs. Opossums shelter under porches and sheds across the residential housing stock countywide. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers Hartford County's full range, from the city of Hartford and New Britain through the suburban ring of West Hartford, Manchester, and Enfield, and out into the rural northwest corner. Hartford is its own regional metro center, so all calls are handled by contractors based in-county.`;
    metaTitle = `Hartford County Wildlife Removal — Serving Hartford, West Hartford & Surrounding Towns`;
    metaDescription = `Find a licensed wildlife removal contractor in Hartford County, CT. Raccoons, fishers, skunks, bats, and moles — serving Hartford, New Britain, West Hartford, and Manchester.`;

  } else if (countyName === 'Litchfield County') {
    blockA = `Connecticut's most rural and forested county occupies the entire northwestern corner of the state. Litchfield County has a population of ${county.population.toLocaleString()} — the smallest of the state's major counties — spread across wooded hill towns, lake communities, and small agricultural villages. Its largest city, Torrington, sits in the Naugatuck River valley. The Housatonic River runs the length of the county, and Mohawk State Forest and the surrounding hills give it a character unlike anywhere else in Connecticut.`;
    blockB = `Litchfield County is the most forested county in Connecticut, and the wildlife removal call mix here reflects that — porcupines damage outbuildings, deck boards, and parked vehicles around camps and rural homes throughout the wooded hill towns, generating calls that require both removal and structural exclusion. Fishers cause regular chicken-coop predation and outbuilding damage on rural homesteads across the Mohawk State Forest and Housatonic State Forest area. Bat colonies in older lake-community homes around Lake Waramaug and Macedonia Brook State Park are a recurring summer issue. Raccoons and Eastern gray squirrels are the baseline residential nuisance throughout Torrington, Winsted, and New Milford, and woodchucks burrow under outbuildings across the small-farm landscape. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage includes Torrington, Winsted, New Milford, and the smaller lake-area and farm communities throughout the county. Hartford is about 30 miles to the east, Waterbury about 20 miles south — but Litchfield County calls are handled locally given its distinct wildlife and terrain.`;
    metaTitle = `Litchfield County Wildlife Removal | NW Connecticut Forest Wildlife Pros`;
    metaDescription = `Licensed wildlife removal in Litchfield County, CT — the state's most forested county. Fishers, porcupines, raccoons, and bats. Serving Torrington, Winsted, and New Milford.`;

  } else if (countyName === 'Middlesex County') {
    blockA = `Where the Connecticut River meets Long Island Sound, Middlesex County runs from inland river towns like Middletown and Portland down to shoreline communities including Old Saybrook, Clinton, and Essex. It's Connecticut's smallest county by population at ${county.population.toLocaleString()}, established in ${county.established}, and occupies a transitional zone between the Hartford metro to the north and the New Haven metro to the west.`;
    blockB = `The lower Connecticut River estuary and Hammonasset Beach State Park create a distinct wetland wildlife zone at the county's southern end. Muskrat and beaver pressure is concentrated along the river corridor, Canada goose populations cause persistent damage on shoreline lawns and waterfront properties, and older summer homes along the Sound face recurring bat colony issues in roof and wall cavities. Inland, raccoons, Eastern gray squirrels, and striped skunks are the dominant residential nuisance species, and moles damage manicured lawns throughout the Middletown, Cromwell, and Old Saybrook neighborhoods. Red foxes routinely shelter under decks and outbuildings in the wooded eastern townships. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage spans Middletown and the central river towns, through the smaller Sound-facing communities of Old Saybrook, Clinton, and Essex, and into the rural eastern portion of the county. Hartford is about 20 miles north and New Haven about 25 miles west, but Middlesex County service is handled locally.`;
    metaTitle = `Middlesex County, CT Wildlife Removal — Old Saybrook, Middletown & River Towns`;
    metaDescription = `Licensed wildlife removal in Middlesex County, CT. Bats, beavers, raccoons, and moles along the Connecticut River and Long Island Sound. Serving Middletown, Old Saybrook, and Essex.`;

  } else if (countyName === 'New Haven County') {
    blockA = `Stretching from Long Island Sound north to the Waterbury plateau, New Haven County holds ${county.population.toLocaleString()} residents across a compressed geography of urban neighborhoods, older industrial cities, and Sound-facing shoreline towns. Yale University anchors New Haven on the coast; Waterbury — a former brass manufacturing hub — sits 20 miles inland. Meriden, West Haven, and Hamden fill the suburban middle, while Milford and Orange line the Sound to the west. Established in ${county.established}, it is one of Connecticut's three original counties.`;
    blockB = `Norway rat pressure is a defining characteristic of New Haven County's urban wildlife load — particularly in the older three-decker neighborhoods of New Haven and the post-industrial blocks of Waterbury. The traprock ridges of Sleeping Giant State Park and West Rock Ridge State Park rise abruptly from suburban Hamden and Cheshire, channeling raccoons and striped skunks directly into residential backyards year-round. Opossums and skunks are persistent under porches and sheds throughout the mid-county suburbs, bat colonies in older homes from West Haven through Milford generate consistent summer exclusion calls, and moles damage manicured lawns across the suburban housing stock from Hamden through Cheshire and Meriden. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers the full county, with heaviest demand in New Haven, Waterbury, Hamden, and Milford. The Sound-facing towns from West Haven through Milford generate additional calls around bat colonies in older vacation and year-round homes. New York City is about 80 miles southwest, but this county's call volume is entirely local.`;
    metaTitle = `New Haven County Wildlife Removal | Serving New Haven, Waterbury & Milford CT`;
    metaDescription = `Licensed wildlife removal in New Haven County, CT. Rat control in New Haven and Waterbury, raccoon, skunk, and mole control throughout the county. CT NWCO-licensed. Same-day service available.`;

  } else if (countyName === 'New London County') {
    blockA = `Along Connecticut's southeastern coast, New London County runs from the Mystic and Groton area west to the Rhode Island state line. The county's ${county.population.toLocaleString()} residents are spread across the shoreline city of New London, the Naval Submarine Base community of Groton, smaller coastal towns like Stonington and East Lyme, and the inland city of Norwich. Pachaug State Forest — the largest state forest in Connecticut — covers much of the county's northern interior.`;
    blockB = `Shoreline properties along the Mystic River estuary and Bluff Point State Park face regular pressure from beavers and muskrats along the river corridors, while the large Pachaug forest creates conditions for fishers that move regularly into the surrounding rural towns and cause occasional chicken-coop predation. The coastal vacation property corridor from Stonington through East Lyme sees elevated bat and raccoon activity, particularly in structures that sit empty during winter. Striped skunks and red foxes are the baseline residential nuisance throughout Norwich, New London, and Groton, and Canada goose populations cause property conflicts on waterfront lawns and parks. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans from Norwich and New London on the Thames River through Groton, Stonington, and the coastal communities, and north into the rural towns bordering the Pachaug forest. Providence, RI is about 50 miles east and Hartford about 50 miles northwest, but all New London County calls are handled locally.`;
    metaTitle = `New London County Wildlife Control — Groton, Mystic & Southeast CT`;
    metaDescription = `Licensed wildlife removal in New London County, CT. Beavers, fishers, raccoons, and bats — serving Norwich, New London, Groton, Stonington, and East Lyme.`;

  } else if (countyName === 'Tolland County') {
    blockA = `Home to the University of Connecticut in Mansfield, Tolland County covers the north-central and northeastern interior of the state. Its population of ${county.population.toLocaleString()} is distributed across small cities like Vernon and Stafford, university-area communities, and rural townships with significant forest cover. Hartford lies about 20 miles to the southwest, making much of the county a commuter area while retaining a strongly rural character in its northern and eastern sections.`;
    blockB = `Rolling wooded hills, small dairy farms, and lake-area communities define Tolland County's habitat. University-area neighborhoods in Mansfield see heavy raccoon and striped skunk pressure around student housing, with the same urban-edge species concentrated in Vernon and Stafford. Shenipsit State Forest and Nipmuck State Forest provide core habitat for fishers, which are now common enough to cause regular chicken-coop and outbuilding damage in suburban and semi-rural neighborhoods. Bat colonies in older homes throughout Coventry, Ellington, and the rural townships are a recurring summer call source, and porcupines occur in the more wooded hill towns and cause occasional outbuilding damage. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage includes Mansfield, Vernon, Stafford, and Tolland, along with Coventry, Ellington, and the smaller towns throughout the county. Hartford is the nearest metro center, but Tolland County's wildlife profile — particularly the fisher and porcupine pressure in the wooded hill towns — requires contractors with specific local experience.`;
    metaTitle = `Tolland County Wildlife Removal — Serving Mansfield, Vernon & North-Central CT`;
    metaDescription = `Licensed wildlife removal in Tolland County, CT. Fishers, raccoons, bats, and porcupines — serving Mansfield, Vernon, Stafford, and the UConn area. CT NWCO-licensed contractors.`;

  } else if (countyName === 'Windham County') {
    blockA = `Known locally as the "Quiet Corner," Windham County is Connecticut's most rural county and its least populated at ${county.population.toLocaleString()} residents. It occupies the entire northeastern corner of the state, bordered by Massachusetts to the north and Rhode Island to the east. Small mill cities like Killingly, Putnam, and Windham sit alongside farm towns and wooded townships that see relatively little development pressure compared to the rest of Connecticut. Worcester, MA is the nearest outside metro at about 30 miles northeast.`;
    blockB = `Windham County's extensive Goodwin and Natchaug State Forests, combined with its low development density, support a wildlife removal call profile more typical of northern New England than southern Connecticut. Fishers are widespread throughout the rural townships — chicken-coop predation and outbuilding damage are routine across the small-farm landscape — and porcupines cause regular structural damage at camps and rural homes in the wooded interior. The Quinebaug River corridor concentrates beaver activity, with beaver dams flooding farmland, driveways, and culverts throughout the river towns. Rural barns and outbuildings throughout the Quiet Corner host bat colonies and raccoon families, and Eastern gray squirrels intrude into attics across the older mill-town housing stock. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage spans the county's full area — from Killingly and Putnam in the east through Windham and Plainfield in the center, and north into Thompson and Woodstock near the Massachusetts line. The rural character of the county and the prevalence of older farm structures means wildlife problems here often require more extensive exclusion work than in more suburban counties.`;
    metaTitle = `Windham County Wildlife Removal — CT's Quiet Corner | Fisher, Porcupine & Raccoon Control`;
    metaDescription = `Licensed wildlife removal in Windham County, CT. Fishers, porcupines, raccoons, beavers, and bats in rural northeastern CT — serving Killingly, Putnam, Windham, and Thompson.`;
  }

  const blockD = `Wildlife intrusion in ${countyName} follows Connecticut's two primary pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor} — and older New England homes with their balloon-frame construction and stone foundations give wildlife more entry opportunities than newer builds elsewhere in the country.`;
  const blockE = `All commercial wildlife removal in Connecticut is regulated by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds a valid CT NWCO permit and follows CT DEEP Wildlife Division protocols on species-specific handling and relocation requirements.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription };
}

// ---- New Hampshire county content ----
function newHampshireContent(countyName, county, s) {
  const top3cities = county.largest_cities.slice(0, 3).join(', ');
  const top4cities = county.largest_cities.slice(0, 4).join(', ');

  let blockA, blockB, blockC, metaTitle, metaDescription;

  if (countyName === 'Rockingham County') {
    blockA = `Southeastern New Hampshire's most developed and densely populated county, Rockingham County runs from the Massachusetts border north to the Great Bay estuary and east to the state's 18-mile Atlantic coastline. Its ${county.population.toLocaleString()} residents are spread across fast-growing commuter towns — Derry, Salem, and Londonderry carry most of the Boston-area traffic — alongside the older seacoast cities of Portsmouth and Exeter with their colonial-era building stock. Established in ${county.established}, it's one of New Hampshire's five original counties.`;
    blockB = `Bat colonies in the older building stock of Portsmouth and Exeter are one of the county's most distinctive wildlife problems — colonial and Federal-era structures with masonry gaps and unscreened soffits provide ideal roost sites, and summer exclusion calls are a consistent part of the seacoast market. The Great Bay estuary and Odiorne Point State Park create coastal corridors that funnel red foxes into adjacent suburban neighborhoods, where they routinely shelter under decks and outbuildings. Raccoons and striped skunks are persistent in the commuter towns of Derry, Salem, and Londonderry, and moles damage manicured lawns throughout the county's residential developments — a steady call source from spring through fall. House mice surge into homes countywide every fall as cold weather sets in. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors cover all of Rockingham County, from Derry and Salem near the Massachusetts line through Londonderry, Hampton, and Portsmouth on the coast. Boston is about 50 miles south of Portsmouth, which means the county operates within reach of regional-scale contractors — but local knowledge of the seacoast's older building types remains a significant advantage.`;
    metaTitle = `Wildlife Removal in Rockingham County, NH | Serving Derry, Salem & Portsmouth`;
    metaDescription = `Licensed wildlife removal in Rockingham County, NH. Raccoons, skunks, bats, and moles in suburban yards — serving Derry, Salem, Londonderry, Portsmouth, and Hampton. NH WCO-licensed.`;

  } else if (countyName === 'Hillsborough County') {
    blockA = `Manchester and Nashua — New Hampshire's two largest cities — both sit in Hillsborough County, making it the most populous county in the state at ${county.population.toLocaleString()} residents. Manchester anchors the county center along the Merrimack River; Nashua sits at the Massachusetts border about 18 miles to the south. Between them, bedroom communities like Bedford, Merrimack, and Hudson have grown rapidly as housing pressure pushes residents north from the Boston area. The county holds more than a quarter of New Hampshire's entire population, established as a county in ${county.established}.`;
    blockB = `Urban Manchester and Nashua generate consistent Norway rat, raccoon, and striped skunk call volume from their older neighborhoods and commercial corridors. Bear Brook State Park on the county's eastern edge provides core habitat for fishers that have moved steadily into surrounding suburban backyards — fisher cats are widely reported in residential yards across the county, a pattern that has intensified over the past decade. Bat colonies in the older homes of Manchester and Nashua are a recurring summer call source, and moles damage manicured lawns across the Bedford, Merrimack, and Hudson commuter suburbs throughout the spring-to-fall season. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans the full county — from Manchester and Nashua through the suburban ring of Merrimack, Hudson, and Bedford, and west into the more rural fringe towns. Boston is about 50 miles south of Nashua, and the county's wildlife call volume is driven by its dense urban and suburban core.`;
    metaTitle = `Hillsborough County Wildlife Control — Manchester, Nashua & Southern NH`;
    metaDescription = `Licensed wildlife removal in Hillsborough County, NH. Fisher cats, raccoons, Norway rats, bats, and moles — serving Manchester, Nashua, Merrimack, and Hudson. NH WCO-licensed contractors.`;

  } else if (countyName === 'Merrimack County') {
    blockA = `Concord, New Hampshire's state capital, sits at the geographic and political center of Merrimack County. Established in ${county.established}, the county runs along the Merrimack River valley and occupies a transitional zone between the heavily developed southern tier and the more rural counties to the north and west. Its population of ${county.population.toLocaleString()} is concentrated in and around Concord, with smaller cities like Franklin and Boscawen downstream and quieter rural towns extending into the surrounding hills toward Mount Kearsarge.`;
    blockB = `Beaver dam and flooding problems are common along the Merrimack's smaller tributaries throughout the county, requiring both removal and ongoing dam management. Bear Brook State Park and Mount Kearsarge State Forest Park support fisher populations that have expanded steadily into Concord's residential edge and the surrounding river-valley towns, where they cause occasional chicken-coop and outbuilding damage. Raccoons and Eastern gray squirrels are the baseline residential nuisance species throughout the county, bat colonies in older Concord homes are a recurring summer call source, and moles damage lawns across the developed neighborhoods of Concord, Franklin, and Hooksett. ${cap(county.absent_or_rare)}.`;
    blockC = `Service runs through Concord and the river-valley communities of Franklin, Boscawen, Hooksett, Bow, and Pembroke. Manchester is about 20 miles south and is the nearest major population center, but Merrimack County's distinct mix of state-capital urban area and rural upland means locally based contractors are better suited than metro-dispatched services.`;
    metaTitle = `Local Wildlife Removal — Merrimack County, NH | Concord & Surrounding Towns`;
    metaDescription = `Licensed wildlife removal in Merrimack County, NH. Raccoons, beavers, bats, fishers, and moles — serving Concord, Franklin, Hooksett, and Bow. NH Fish and Game licensed.`;

  } else if (countyName === 'Strafford County') {
    blockA = `Sandwiched between New Hampshire's seacoast and the Lakes Region, Strafford County covers the southeastern interior of the state. Dover is the county seat and its largest city; Rochester is second-largest; and Durham hosts the University of New Hampshire, which generates its own distinct wildlife dynamic. At ${county.population.toLocaleString()} residents, the county has grown steadily as development pressure spreads inland from the Portsmouth corridor, established as a county in ${county.established}.`;
    blockB = `University neighborhoods in Durham see unusually heavy raccoon and striped skunk pressure — student housing density, outdoor dining debris, and limited wildlife deterrence create ideal conditions for urban-adapted species. The Bellamy River Wildlife Management Area and the Cocheco River corridor channel red foxes through the residential zones of Dover, Rochester, and Somersworth, where they routinely shelter under decks and outbuildings. Bat colonies in older homes throughout Dover and Rochester are a recurring summer call source, and moles damage manicured lawns across the residential housing stock countywide. Norway rats are persistent in older Rochester commercial blocks. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors cover Dover, Rochester, Somersworth, Durham, Barrington, and Farmington, along with the rural towns connecting the county to the Lakes Region. Portsmouth is about 15 miles east of Dover and is the nearest seacoast hub.`;
    metaTitle = `Wildlife Removal in Strafford County, NH | Dover, Rochester & Durham`;
    metaDescription = `Licensed wildlife removal in Strafford County, NH. Raccoons near UNH, skunks, bats, and moles in residential lawns — serving Dover, Rochester, Somersworth, and Durham.`;

  } else if (countyName === 'Cheshire County') {
    blockA = `From the slopes of Mount Monadnock south to the Massachusetts line and west to the Connecticut River, Cheshire County covers the southwestern corner of New Hampshire. Keene is the county's dominant city, serving as the commercial center for the Monadnock region. At ${county.population.toLocaleString()} residents across a mix of small towns, hill farms, and river communities, it's one of the less densely populated counties in the southern half of the state — and the transition point where the state's suburban character gives way to something considerably more rural, established as a county in ${county.established}.`;
    blockB = `Porcupines are the defining structural-damage nuisance in Cheshire County's rural hill towns — outbuildings, deck boards, and parked vehicles around camps and second homes are routinely targeted, and porcupine pressure is more pronounced here than in the more developed counties to the south and east. Bat colonies in older Keene and Monadnock-area homes are a recurring summer call source, and fishers cause regular chicken-coop and outbuilding damage on rural homesteads — Pisgah State Park provides significant source habitat along the county's southern tier. Raccoons, striped skunks, and Eastern gray squirrels round out the standard residential nuisance picture, and woodchucks burrow under sheds and barn foundations across the small-farm landscape. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers Keene and the surrounding Monadnock-region towns of Swanzey, Jaffrey, Walpole, and Winchester. Brattleboro, VT is about 20 miles west and Manchester about 60 miles east, making local contractors essential for timely response.`;
    metaTitle = `Cheshire County, NH Wildlife Removal | Monadnock Region & Keene Area`;
    metaDescription = `Licensed wildlife removal in Cheshire County, NH. Porcupines, raccoons, fishers, and bats in the Monadnock region — serving Keene, Swanzey, Jaffrey, and Walpole.`;

  } else if (countyName === 'Grafton County') {
    blockA = `Sprawling across western New Hampshire from the Connecticut River to the spine of the White Mountains, Grafton County is one of the largest counties in New England by land area. Lebanon and Hanover — home to Dartmouth College — anchor the county's Upper Valley population of ${county.population.toLocaleString()}, while resort and gateway communities like Lincoln, Franconia, and Littleton occupy the mountain interior to the north. Established in ${county.established}, the county encompasses Franconia Notch State Park, vast sections of White Mountain National Forest, and some of the most dramatic terrain in the Northeast.`;
    blockB = `Grafton County's steep mountain terrain, Upper Valley college communities, and resort-property mix produce a wildlife removal demand profile dominated by seasonal-occupancy issues. Vacation homes throughout Lincoln, Franconia, and the surrounding mountain communities see heavy bat and overwintering-rodent activity during the long off-season stretches when properties sit unused for months. Fishers cause regular chicken-coop and outbuilding damage at rural Upper Valley homesteads, and porcupines target wooden deck boards and outbuilding components throughout the mountain communities — both species widespread thanks to White Mountain National Forest and Franconia Notch State Park source habitat. House mice surge into year-round Lebanon and Hanover homes every fall, and red squirrels chew their way into attics throughout the older mountain housing stock. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage includes Lebanon, Hanover, Plymouth, Littleton, Bristol, and Lincoln, along with the mountain and river communities throughout the county. The Lebanon-Hanover area functions as its own regional hub; Manchester is about 70 miles southeast.`;
    metaTitle = `White Mountains Wildlife Removal — Grafton County, NH | Lebanon & Hanover`;
    metaDescription = `Licensed wildlife removal in Grafton County, NH. Bats, raccoons, fishers, and porcupines in the White Mountains area — serving Lebanon, Hanover, Plymouth, and Littleton.`;

  } else if (countyName === 'Belknap County') {
    blockA = `Built around Lake Winnipesaukee, the largest lake in New Hampshire, Belknap County is the heart of the state's Lakes Region. Laconia is the county seat; Gilford, Meredith, and Alton are major lakeshore communities. At ${county.population.toLocaleString()} full-time residents, the county's winter population understates its summer footprint considerably — seasonal residents and visitors push the active population far higher from May through September, and that influx drives a corresponding spike in wildlife conflict calls at camp properties and vacation homes.`;
    blockB = `Lakeshore vacation properties around Lake Winnipesaukee are among the most wildlife-prone structures in the state. Bats roost in attic spaces of seasonal homes that sit unventilated for months; raccoons exploit screened porches and unsecured decks; and Norway rats are a steady issue at camp properties with stored food and unsecured trash. Gunstock Mountain and Belknap Mountain State Forest provide habitat for fishers and porcupines that move regularly into lakeshore communities, causing occasional outbuilding damage. Overwintering rodents — primarily house mice and Eastern gray squirrels — are a persistent issue in camps that go uninspected from October through May, and moles damage manicured lawns at year-round residences and second-home properties throughout Gilford and Meredith. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors serve Laconia, Gilford, Meredith, Belmont, Tilton, and Alton, along with the smaller lakeshore communities throughout the county. Concord is about 30 miles south and is the nearest administrative center.`;
    metaTitle = `Lake Winnipesaukee & Lakes Region Wildlife Removal | Belknap County NH`;
    metaDescription = `Wildlife removal in Belknap County, NH. Bats, raccoons, moles, and overwintering rodents at seasonal homes — serving Laconia, Gilford, Meredith, and the Lakes Region.`;

  } else if (countyName === 'Carroll County') {
    blockA = `On the eastern side of the White Mountains, Carroll County covers the mountain valleys and lake communities stretching from White Mountain National Forest to the Maine border. Conway and North Conway anchor the county's most active commercial corridor; Wolfeboro on Lake Winnipesaukee's eastern shore is its most prominent lake community. At ${county.population.toLocaleString()} year-round residents, the county's actual population swells substantially during summer and fall foliage season — North Conway is one of the most visited destinations in New England, and that tourism footprint shapes the county's wildlife conflict profile in ways unique to this part of the state.`;
    blockB = `Vacation-property wildlife issues are the defining management reality in Carroll County. The Conway and North Conway corridor generates constant raccoon, bat, and overwintering-rodent activity at short-term rentals, restaurant areas, and seasonal homes — demand runs from spring through November and again through the off-seasons when properties sit empty. Fishers cause regular chicken-coop predation and outbuilding damage in the Ossipee Valley and the rural townships, and porcupines target wooden deck structures and outbuilding components throughout the forested interior communities. White Mountain National Forest and Mount Chocorua provide an effectively unlimited reservoir of source habitat for these species, keeping residential and commercial wildlife pressure consistently high throughout the year. Red squirrels chew into older attic spaces across the county's seasonal housing stock. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans Conway, Wolfeboro, Ossipee, Wakefield, Tamworth, and Tuftonboro, along with the smaller mountain and lake-area communities. Portland, ME is about 60 miles east and Concord about 70 miles south — both require significant travel, underscoring the value of locally based contractors.`;
    metaTitle = `Carroll County NH Wildlife Removal | Eastern White Mountains & Conway Area`;
    metaDescription = `Licensed wildlife removal in Carroll County, NH. Bats, raccoons, fishers, and porcupines in the eastern White Mountains — serving Conway, Wolfeboro, Ossipee, and Tamworth.`;

  } else if (countyName === 'Sullivan County') {
    blockA = `Following the Connecticut River south from Grafton County, Sullivan County occupies western New Hampshire's quieter middle tier. Claremont is the county's largest city, sitting on the river; Newport serves as the county seat inland. At ${county.population.toLocaleString()} residents established in ${county.established}, it's one of New Hampshire's smaller counties by population, shaped by former mill-town economies along the river and wooded hills extending east toward Lake Sunapee and Pillsbury State Park.`;
    blockB = `The Connecticut River floodplain and its Sullivan County tributaries produce consistent beaver dam and flooding issues that affect agricultural land, culverts, and road drainage in the river towns — particularly around Charlestown and Cornish, where ongoing dam management is a steady contractor workload. The Sunapee resort community is a separate pressure zone: seasonal camps and lake homes near Mount Sunapee State Park and Lake Sunapee experience consistent bat colony issues and overwintering-rodent activity during the off-season when properties sit empty. Fishers are common in the wooded interior hills and cause occasional chicken-coop losses at rural homesteads, porcupines damage outbuildings and deck boards across the camp communities, and raccoons and striped skunks are the baseline residential nuisance throughout Claremont and Newport. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage runs from Claremont on the river east through Newport and Charlestown, up to the Sunapee resort corridor, and into the smaller hill townships throughout the county. Sitting roughly equidistant between Lebanon to the north and Concord to the east, Sullivan County lacks a dominant metro anchor — which is exactly why a contractor based in the county matters more here than elsewhere.`;
    metaTitle = `Sullivan County, NH Wildlife Removal | Claremont, Newport & Sunapee Area`;
    metaDescription = `Licensed wildlife removal in Sullivan County, NH. Beavers, bats, raccoons, and fishers along the Connecticut River and Sunapee area — serving Claremont, Newport, and Charlestown.`;

  } else if (countyName === 'Coos County') {
    blockA = `Everything north of the White Mountains is Coos County — roughly 1,800 square miles of working timberland, mountain terrain, and small mill towns that make it the most remote county in New Hampshire and one of the most sparsely populated in New England. Its ${county.population.toLocaleString()} residents are distributed across Berlin, Gorham, Lancaster, Colebrook, and dozens of small townships, many of which have lost population steadily over recent decades. The Connecticut Lakes near Pittsburg define the Quebec border at the state's northern tip. Mount Washington — the highest peak in the Northeast — rises from the county's southern edge.`;
    blockB = `Coos County's wildlife removal demand is shaped entirely by its remote, working-timberland character — and almost entirely by species that thrive in northern forest. Beavers flood roads, drainage culverts, and low-lying camp properties throughout the Great North Woods, and ongoing dam management is one of the most consistent service requirements in the region. Fishers and porcupines are a year-round nuisance around older agricultural outbuildings and remote camp structures, damaging stored gear, deck boards, and wooden building components. Bat colonies are routine in older mill-town homes and farmhouses across Berlin, Lancaster, Gorham, and Colebrook, and red squirrels chew their way into attic spaces in the same buildings. Muskrats are persistent along the wetland margins of the Connecticut Lakes and the Connecticut River headwaters. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers Berlin, Gorham, Lancaster, Colebrook, Whitefield, and Pittsburg, along with the remote townships in between. Portland, ME and Concord are each more than 100 miles away, making locally based coverage essential for timely response throughout the county.`;
    metaTitle = `North Country Wildlife Removal — Coos County, NH | Great North Woods`;
    metaDescription = `Licensed wildlife removal in Coos County, NH. Beavers, fishers, porcupines, and bats in the Great North Woods — serving Berlin, Gorham, Lancaster, and Colebrook.`;
  }

  const blockD = `Wildlife intrusion in ${countyName} follows New Hampshire's three main pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor}.`;
  const blockE = `All commercial wildlife trapping in New Hampshire is regulated by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds a valid NH Wildlife Control Operator license and operates in compliance with NH Fish and Game protocols on species-specific handling and relocation.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription };
}

// ---- Vermont county content ----
function vermontContent(countyName, county, s) {
  let blockA, blockB, blockC, metaTitle, metaDescription;

  if (countyName === 'Addison County') {
    blockA = `Champlain Valley farmland runs along Addison County's western side, backing up against the eastern slope of the Green Mountains and the Bread Loaf Wilderness. The county stretches from the Lake Champlain shoreline through Middlebury — its largest city and home to Middlebury College — east into Green Mountain National Forest. With ${county.population.toLocaleString()} residents established in ${county.established}, it's a working agricultural county with strong dairy traditions on the valley floor and increasingly wild conditions as the terrain rises east.`;
    blockB = `Dairy operations around Middlebury and Vergennes create persistent raccoon, skunk, and Norway rat pressure at barns, silos, and grain-storage areas — agricultural structures attract these species at predictable intervals and without active management the damage to farm infrastructure compounds. Woodchucks burrow under sheds and outbuildings throughout the valley farms, undermining foundations and creating ongoing exclusion work. Mount Abraham and the Bread Loaf Wilderness provide source habitat for fishers that move regularly into rural neighborhoods across the county. Bat colonies in older barns and farmhouses are a recurring summer maternity-season issue, and Eastern gray squirrels intrude into attics and soffits across both the valley and the upland farms. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors cover Addison County's full range — from Middlebury and Vergennes on the valley floor through Bristol and Brandon east toward the mountains. Burlington is about 35 miles north and serves as the nearest major metro hub.`;
    metaTitle = `Wildlife Removal in Addison County, VT | Middlebury & Champlain Valley`;
    metaDescription = `Licensed wildlife removal in Addison County, VT. Raccoons on dairy farms, fishers, bats, and woodchucks — serving Middlebury, Vergennes, Bristol, and Brandon.`;

  } else if (countyName === 'Bennington County') {
    blockA = `Vermont's southwesternmost county sits at the junction of three states — New York borders it to the west and Massachusetts to the south. Bennington is the county seat and largest city; Manchester is the other major commercial center, known for outlet shopping and proximity to Mount Equinox. At ${county.population.toLocaleString()} residents established in ${county.established}, the county mixes historic mill towns, ski communities, and Green Mountain National Forest across its eastern portions.`;
    blockB = `Vacation properties along Mount Equinox and through the ski resort towns see heavy bat colony pressure in roof and wall cavities — older second homes with masonry gaps and unscreened soffits provide ideal roost sites, and overwintering rodents are equally persistent in the same structures during long off-season vacancies. Porcupines are an established nuisance at outbuildings, deck boards, and wooden vehicle components throughout the rural towns — a species that causes significant structural damage and is more common here than in the more open Champlain Valley counties. Raccoons, striped skunks, and fishers complete the county's regular nuisance picture, and Norway rats are a steady issue in Bennington's older commercial blocks. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers Bennington, Manchester, Pownal, Arlington, and Dorset, along with the ski-area communities in the county's eastern portion. Albany, NY is about 35 miles west and is the nearest outside metro center.`;
    metaTitle = `Bennington County Wildlife Control — Manchester, VT & Southwest Vermont`;
    metaDescription = `Wildlife removal in Bennington County, VT. Bats, porcupines, and raccoons in the Manchester area and Battenkill valley. Vermont Fish & Wildlife certified contractors.`;

  } else if (countyName === 'Caledonia County') {
    blockA = `St. Johnsbury serves as the commercial hub for the Northeast Kingdom's western flank, and Caledonia County radiates outward from it into rolling forested hills, small farms, and working timberlands that define this stretch of northeastern Vermont. Established in ${county.established} with a current population of ${county.population.toLocaleString()}, the county spans between the Connecticut River valley on its eastern edge and Groton State Forest and Willoughby State Forest to the north. Burlington is about 75 miles to the west — distant enough that the region functions largely as its own rural economy.`;
    blockB = `Working timberland defines Caledonia County's character and its residential wildlife pressure profile. Older farmhouses and barns throughout the Northeast Kingdom routinely host little brown bat colonies through the summer maternity season, and raccoon families in outbuildings are a persistent year-round issue. Fishers cause regular chicken-coop predation and damage to remote outbuildings throughout Lyndon, Hardwick, and Danville — a service call profile distinct from southern Vermont. Beaver dams flood culverts, driveways, and low-lying farmland across the county, and ongoing dam management is a steady part of the local contractor workload. Porcupines target wooden deck boards and outbuildings at camps and rural homes, and red squirrels chew their way into attics throughout the older housing stock. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors serve St. Johnsbury, Lyndon, Hardwick, Danville, and Barnet, along with the rural townships throughout the county. Burlington is about 75 miles west, making locally based coverage the only practical option for timely response.`;
    metaTitle = `Northeast Kingdom Wildlife Removal | Caledonia County, VT`;
    metaDescription = `Licensed wildlife removal in Caledonia County, VT. Fishers, porcupines, beavers, and bat colonies in the Northeast Kingdom — serving St. Johnsbury, Lyndon, and Hardwick.`;

  } else if (countyName === 'Chittenden County') {
    blockA = `Burlington is Vermont's largest city, and Chittenden County — the state's most populous at ${county.population.toLocaleString()} residents — runs along Lake Champlain's eastern shore from the city outward into a dense ring of suburbs: South Burlington, Colchester, Essex, and Williston. Established in ${county.established}, the county has an urban character distinct from the rest of Vermont, with the development density and wildlife pressure you'd expect from a mid-sized New England metro. Montreal is about 95 miles north; Boston about 225 miles south.`;
    blockB = `The Burlington metro drives a wildlife call profile more typical of southern New England than the rest of Vermont. Raccoons and striped skunks are the dominant suburban nuisance species, common in every Chittenden County town and consistently present in Burlington's South End and New North End neighborhoods. Norway rats are a recurring issue in Burlington's urban core and commercial areas near the waterfront. Lakeshore properties along Lake Champlain — from Burlington's shoreline through Colchester and into the smaller communities — see recurrent bat colony issues in older structures, particularly those with unscreened soffits and masonry gaps. House mice surge into homes countywide every fall as cold weather sets in, and red foxes show up under decks and outbuildings in the more wooded suburban townships. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Chittenden County — Burlington, South Burlington, Colchester, Essex, Williston, and Winooski, along with the rural eastern townships. Burlington is its own regional metro center; Montreal is the nearest major international city at about 95 miles north.`;
    metaTitle = `Burlington & Chittenden County, VT Wildlife Removal | Licensed Pros`;
    metaDescription = `Licensed wildlife removal in Chittenden County, VT. Raccoons, skunks, Norway rats, and bat colonies — serving Burlington, South Burlington, Colchester, and Essex.`;

  } else if (countyName === 'Essex County') {
    blockA = `Fewer than 6,200 people live in Essex County — Vermont's least populated county and one of the most sparsely settled in New England. The county occupies the extreme northeastern corner of the state, bordered by Quebec to the north, New Hampshire to the east, and vast working timberlands on all other sides. Island Pond is the largest community; Guildhall is the county seat on the Connecticut River. St. Johnsbury, about 35 miles south, is the nearest population center with commercial services.`;
    blockB = `Essex County's wildlife removal demand is shaped entirely by its forested, remote character — and almost entirely by species that thrive in working timberland. Beavers flood roads, drainage culverts, and low-lying camp properties throughout the county's many wetland zones, including within the Nulhegan Basin section of the Silvio O. Conte National Fish and Wildlife Refuge — and ongoing dam management is one of the most consistent service requirements in the region. Fishers and porcupines are a year-round nuisance at hunting camps and seasonal cabins, damaging stored gear, deck structures, and wooden outbuilding components. Bat colonies are routine in older agricultural barns and remote camp structures, and red squirrels chew through wood and intrude into attic spaces in the same buildings. Muskrats are persistent along the wetland margins of the Connecticut River headwaters. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers Island Pond, Concord, Lunenburg, Canaan, and Guildhall, along with the remote townships throughout the county. St. Johnsbury is about 35 miles south and is the nearest population center — distances here and the county's limited year-round population make locally aware contractors essential.`;
    metaTitle = `Essex County VT Wildlife Removal — Northeast Kingdom's Most Remote County`;
    metaDescription = `Wildlife removal in Essex County, VT. Beavers, fishers, porcupines, and bats in Vermont's most remote county — serving Island Pond, Lunenburg, and Canaan.`;

  } else if (countyName === 'Franklin County') {
    blockA = `Pressed against the Canadian border in northwestern Vermont, Franklin County occupies the northern Champlain Valley between Lake Champlain's eastern shore and the Cold Hollow Mountains. St. Albans is the county seat and commercial center; Swanton sits at the Missisquoi National Wildlife Refuge and the shores of Missisquoi Bay. At ${county.population.toLocaleString()} residents established in ${county.established}, the county's economy is anchored by dairy farming and has retained more of its agricultural character than the counties further south.`;
    blockB = `Dairy farm operations throughout Franklin County generate the kind of wildlife pressure that agricultural landscapes produce in concentrated form. Raccoons, striped skunks, and Norway rats target grain storage, silos, and feed areas routinely, and without active management the damage to farm infrastructure compounds season after season. The Missisquoi National Wildlife Refuge and the delta wetlands along Missisquoi Bay concentrate beavers and muskrats in densities that create persistent shoreline damage to adjacent farmland and residential properties. Bat colonies in older farmhouses are a steady summer call source across the county, and Eastern gray squirrels are a persistent attic and soffit nuisance throughout the residential corridors. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage includes St. Albans, Swanton, Enosburg Falls, Richford, and Fairfax, along with the dairy-farming communities throughout the county. Burlington is about 30 miles south and serves as the nearest major regional center.`;
    metaTitle = `Franklin County, VT Wildlife Removal | St. Albans & Canadian Border Region`;
    metaDescription = `Licensed wildlife removal in Franklin County, VT. Raccoons on dairy farms, beavers in the Missisquoi delta — serving St. Albans, Swanton, Enosburg Falls, and Richford.`;

  } else if (countyName === 'Grand Isle County') {
    blockA = `Strung across the northern section of Lake Champlain in a chain of islands connected by causeways and a ferry, Grand Isle County is Vermont's smallest county by area and its most geographically distinctive. South Hero, North Hero, Grand Isle, and Isle La Motte make up the main islands; Alburgh sits on a peninsula that connects to Quebec. At ${county.population.toLocaleString()} residents established in ${county.established}, the county is a mix of year-round farm families, lakeshore residential properties, and a substantial summer-visitor population.`;
    blockB = `Island geography shapes Grand Isle County's wildlife removal call profile in ways that set it apart from every other Vermont county. The water barrier limits most forest mammals common on the mainland, so calls concentrate around the species that thrive in agricultural and shoreline environments: raccoons, striped skunks, Canada geese, and bats. Lake Champlain shoreline farmland and seasonal vacation properties generate consistent raccoon and bat pressure, and Canada goose populations on docks, lawns, and waterfront areas cause regular property conflicts through the summer months. Muskrats are a persistent presence in the island wetland margins near Knight Point State Park and Sand Bar State Park, and house mice surge into year-round homes every fall. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors cover South Hero, North Hero, Grand Isle, Isle La Motte, and Alburgh. Burlington is about 25 miles south via the causeway — island access considerations and the county's small year-round population make local coverage especially important for timely response.`;
    metaTitle = `Lake Champlain Islands Wildlife Removal | Grand Isle County, VT`;
    metaDescription = `Wildlife removal in Grand Isle County, VT. Raccoons, bats, Canada geese, and muskrats on the Lake Champlain islands — serving South Hero, North Hero, Grand Isle, and Alburgh.`;

  } else if (countyName === 'Lamoille County') {
    blockA = `Stowe sits at the base of Mount Mansfield — Vermont's highest peak — and the ski communities of Lamoille County generate a wildlife conflict profile shaped by both resort tourism and the species mix of the northern Green Mountains. The county covers north-central Vermont including Morristown, Johnson, and Cambridge, with Hyde Park as the official county seat despite Stowe being the most widely known community. At ${county.population.toLocaleString()} residents established in ${county.established}, the year-round population significantly understates the management demand created by the large seasonal and tourism economy.`;
    blockB = `Bats and overwintering rodents are the dominant wildlife management issue in Lamoille County's vacation-home corridor, driven by the density of seasonal properties in and around Stowe and the long stretches each year that those structures sit unused and uninspected. Resort development concentrates raccoon contact points — dumpsters at rental properties, screened porches at vacation homes, and unsecured decks at short-term rentals all generate consistent calls from spring through November. House mice surge into ski-area homes every fall, and Eastern gray squirrels intrude into attics and soffits across the year-round housing stock. Fishers and porcupines cause occasional outbuilding and deck damage throughout the surrounding forested communities. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors cover Morristown, Stowe, Johnson, Cambridge, and Hyde Park, along with the ski-area and mountain communities throughout the county. Burlington is about 35 miles west of Stowe and is the nearest major urban center.`;
    metaTitle = `Stowe & Lamoille County Wildlife Removal — VT Ski Country`;
    metaDescription = `Licensed wildlife removal in Lamoille County, VT. Bats and rodents at Stowe vacation homes, raccoons, and fishers — serving Morristown, Stowe, Johnson, and Cambridge.`;

  } else if (countyName === 'Orange County') {
    blockA = `Rolling hill farms and Connecticut River valley communities define Orange County, one of Vermont's quieter and less-trafficked counties. Randolph is the largest town, positioned near the county's geographic center; Bradford and other river towns sit along the New Hampshire border. At ${county.population.toLocaleString()} residents established in ${county.established}, the county is largely rural without a dominant urban center or major ski resort — oriented instead around its own network of small agricultural towns and hill-farm communities that have changed relatively little in character over generations.`;
    blockB = `Agricultural outbuildings and older barns throughout Orange County's hill towns are a recurring site for bat colonies and raccoon families — structures that combine shelter with proximity to farm debris make predictably attractive habitat. Woodchucks burrow under sheds, barn foundations, and field-edge outbuildings across both the farmed valley and the forested uplands, undermining structures and creating ongoing exclusion work. Groton State Forest, straddling the county's northern border with Caledonia, supports fisher populations that move regularly into surrounding communities and cause occasional chicken-coop losses on rural homesteads. Eastern gray squirrels, striped skunks, and porcupines fill out the county's regular nuisance picture, and Eastern chipmunks cause foundation damage throughout the residential housing stock. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers Randolph, Bradford, Chelsea, Tunbridge, and Williamstown, along with the rural hill towns throughout the county. The Lebanon-Hanover area in New Hampshire is just across the Connecticut River from Bradford and serves as the nearest regional hub.`;
    metaTitle = `Wildlife & Pest Removal in Orange County, Vermont | Randolph & Bradford`;
    metaDescription = `Licensed wildlife removal in Orange County, VT. Bats in barns, woodchucks, raccoons, and fishers — serving Randolph, Bradford, Chelsea, and Tunbridge.`;

  } else if (countyName === 'Orleans County') {
    blockA = `Lake Memphremagog runs north across the Canadian border from Newport, Orleans County's seat and its largest city. The county occupies the northern tier of Vermont's Northeast Kingdom, sharing the region's rural character with Caledonia to the south and Essex to the east. At ${county.population.toLocaleString()} residents established in ${county.established}, it covers a mix of lake communities, dairy farms, and forested upland — with Willoughby State Forest and the steep cliffs of Lake Willoughby offering some of the most distinctive terrain in northern New England.`;
    blockB = `Lake Memphremagog and Lake Willoughby shoreline properties face heavy seasonal bat, raccoon, and beaver pressure — particularly in the lakeshore structures that sit unoccupied for extended periods during winter. Beaver dams flood farmland, driveways, and low-lying rural roads throughout the county, and ongoing dam management is a persistent service requirement across the Northeast Kingdom. Fishers and porcupines cause regular outbuilding and deck damage at rural homes, and bat colonies in older farmhouses are a recurring summer maternity-season call. Norway rat pressure is concentrated in Newport's downtown and waterfront commercial areas, and muskrats are persistent in the wetland margins of both lakes. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage includes Newport, Barton, Derby, Albany, and Glover, along with the lake-area and hill-town communities. St. Johnsbury is about 30 miles south and is the nearest population center with commercial services — local coverage matters in this region.`;
    metaTitle = `Orleans County Wildlife Removal | Lake Memphremagog & Northeast Kingdom VT`;
    metaDescription = `Licensed wildlife removal in Orleans County, VT. Beavers, bats, raccoons, and porcupines at Lake Memphremagog — serving Newport, Barton, Derby, and the Northeast Kingdom.`;

  } else if (countyName === 'Rutland County') {
    blockA = `Killington Peak — Vermont's second-highest summit and the largest ski resort in the eastern United States — rises in the eastern part of Rutland County, and the resort developments around it generate wildlife conflict patterns distinct from the rest of the county. Rutland city is the only incorporated city in the county and a small regional commercial center. At ${county.population.toLocaleString()} residents established in ${county.established}, the county spans from the New York border west through the central Green Mountains, including significant sections of Green Mountain National Forest and the Lake Bomoseen recreational corridor.`;
    blockB = `Rutland city and the former mill towns surrounding it produce wildlife calls more typical of a small industrial city than rural Vermont — persistent raccoon, striped skunk, and Norway rat pressure in older residential blocks, with rat activity concentrated in the commercial districts near downtown. West of the city, Lake Bomoseen and the recreational shoreline properties see seasonal bat intrusions in camp structures and overwintering rodents in buildings that get limited attention during cold months. Brandon, Pittsford, and the agricultural towns between the city and the mountains deal with farm-edge raccoons, woodchucks under outbuildings, and steady fisher pressure on chicken coops. The Killington resort corridor runs its own off-season cycle of bat colony issues and rodent intrusions in vacation homes that sit empty between seasons. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors serve Rutland city, Brandon, Castleton, Pittsford, Fair Haven, and Killington, along with the surrounding hill-town and ski-area communities. Albany, NY is about 65 miles southwest and Burlington about 70 miles north — Rutland sits without a nearby dominant metro anchor.`;
    metaTitle = `Killington & Rutland County, VT Wildlife Removal | Licensed Contractors`;
    metaDescription = `Wildlife removal in Rutland County, VT. Bats and rodents at Killington vacation homes, raccoons and skunks in Rutland city — serving Rutland, Brandon, Castleton, and Killington.`;

  } else if (countyName === 'Washington County') {
    blockA = `Montpelier, the smallest state capital in the United States, sits at the center of Washington County. Barre — the larger city directly southeast — was historically the granite quarrying capital of the country and still carries that industrial heritage. At ${county.population.toLocaleString()} residents established in ${county.established}, the county covers central Vermont's hill country west toward Camel's Hump and east toward the Worcester Range, with the Mad River Valley's ski communities of Waitsfield and Warren occupying its western agricultural and resort tier.`;
    blockB = `Bat colonies in the older building stock of Montpelier and Barre are a recurring summer management issue — pre-war residential neighborhoods, historic masonry structures, and granite-construction buildings provide ideal roost access through unscreened gaps and deteriorated pointing. The Mad River Valley vacation properties and ski-area developments at Sugarbush and Mad River Glen experience consistent bat and overwintering-rodent activity in the long off-season stretches when properties sit empty. Norway rats are a steady issue in the older commercial blocks of both small cities, and raccoons and striped skunks are common across the county's hill farms and smaller suburbs. Fishers cause occasional chicken-coop and outbuilding losses in the surrounding rural towns, and house mice surge into year-round homes every fall. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans Barre, Montpelier, Waterbury, Northfield, Berlin, and Waitsfield, along with the surrounding rural and ski-area communities. Burlington is about 40 miles northwest and serves as the nearest major urban center.`;
    metaTitle = `Montpelier & Washington County Wildlife Removal | Central Vermont`;
    metaDescription = `Wildlife removal in Washington County, VT. Bats in old Montpelier homes, raccoons, skunks, and fishers — serving Barre, Montpelier, Waterbury, and Waitsfield.`;

  } else if (countyName === 'Windham County') {
    blockA = `Brattleboro anchors the southeastern corner of Vermont where the Connecticut River makes its long southward run toward Massachusetts. Windham County extends north from Brattleboro through the farming communities of Putney and Townshend, west into the ski resort towns of Wilmington and the Mount Snow corridor, and through the wooded hills of Green Mountain National Forest's southern section. At ${county.population.toLocaleString()} residents established in ${county.established}, it's a county of contrasts: working-class Brattleboro is an hour's drive from the affluent ski-resort development around Mount Snow and Stratton.`;
    blockB = `Porcupines are a more visible and destructive nuisance in Windham County's interior hill towns than in most other Vermont counties — deck boards, outbuilding siding, and vehicle components near camps where they shelter are commonly targeted, generating calls that require both removal and exclusion. Brattleboro's dense pre-war neighborhood blocks along the Connecticut River produce heavy raccoon and striped skunk pressure year-round — an urban-edge wildlife problem that, for Vermont, is second in scale only to Burlington. Mount Snow and Stratton's resort corridor generates consistent bat intrusions and overwintering-rodent calls in uninspected seasonal structures from the late shoulder season into early winter. Fishers are well-established throughout the southern Green Mountains and cause occasional outbuilding and chicken-coop damage, and Norway rats are persistent in Brattleboro's older commercial buildings. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors serve Brattleboro, Wilmington, Putney, Bellows Falls, and Townshend, along with the ski-area and mountain communities. Springfield, MA is about 60 miles south; Brattleboro functions as a small regional hub for the county's own call volume.`;
    metaTitle = `Windham County VT Wildlife Removal | Brattleboro & Mount Snow Area`;
    metaDescription = `Wildlife removal in Windham County, VT. Bats at Mount Snow vacation homes, urban raccoons in Brattleboro, fishers, and porcupines — serving Wilmington, Putney, and Bellows Falls.`;

  } else if (countyName === 'Windsor County') {
    blockA = `From Woodstock and Quechee in the county's north to Springfield and Windsor along the Connecticut River in the south, Windsor County covers a broad swath of east-central Vermont. Hartford — at the White River Junction convergence of interstate and rail — is technically the county's largest community. At ${county.population.toLocaleString()} residents established in ${county.established}, the county reaches from the Connecticut River valley west through Okemo Mountain and Killington's eastern slopes into the forested upland of Calvin Coolidge State Forest, spanning both river-valley agriculture and mountain resort development.`;
    blockB = `Woodstock and Quechee concentrate affluent second-home development in a landscape of mature forest and managed farmland — properties here have high bat exposure given the combination of tree canopy, seasonal occupancy patterns, and proximity to Calvin Coolidge State Forest and Mount Ascutney State Park. The Okemo ski community generates its own resort-area bat colony and overwintering-rodent cycle, similar to the Killington corridor to the northwest. Rural barns throughout Springfield, Weathersfield, and the river-valley agricultural towns host raccoon families and Eastern gray squirrel intrusions at rates typical of working-farm landscapes. Fishers and porcupines are well-established throughout the upland forest, and striped skunks are a steady year-round nuisance under decks and porches across the county's residential housing stock. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans Hartford, Springfield, Windsor, Woodstock, Ludlow, and Weathersfield, along with the ski-area and river-valley communities throughout the county. The Lebanon-Hanover area in New Hampshire is just across the Connecticut River from White River Junction and serves as a nearby regional reference point.`;
    metaTitle = `Local Wildlife Removal — Windsor County, VT | Woodstock & Quechee Area`;
    metaDescription = `Licensed wildlife removal in Windsor County, VT. Bats near Woodstock and Okemo, fishers, raccoons in farm barns — serving Hartford, Springfield, Woodstock, and Ludlow.`;
  }

  const blockD = `Wildlife intrusion in ${countyName} follows Vermont's three main pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor}.`;
  const blockE = `All commercial wildlife removal in Vermont is regulated by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds a valid Vermont NWCO certification and operates within Vermont Fish and Wildlife guidelines on species-specific handling and relocation.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription };
}

// ---- Rhode Island county content ----
function rhodeIslandContent(countyName, county, s) {
  let blockA, blockB, blockC, metaTitle, metaDescription;

  if (countyName === 'Providence County') {
    blockA = `Providence anchors Rhode Island's most populous county and the densest urban concentration in the smallest state. With ${county.population.toLocaleString()} residents established in ${county.established}, Providence County stretches north from the capital through the older mill cities of Pawtucket and Woonsocket and out into wooded suburbs and small river valleys. Boston is about 50 miles north, but Providence functions as its own regional metro center with the housing stock, urban density, and commercial corridors of a mid-sized New England city.`;
    blockB = `Norway rat pressure is the defining urban wildlife load in Providence County — populations are dense in the older three-decker neighborhoods of Providence, Pawtucket, and Woonsocket, and rat activity in commercial alleys and waterfront blocks generates a steady share of the county's call volume. Raccoons routinely raid attics, dumpsters, and screened porches across the urban core and the inner-ring suburbs of Cranston, North Providence, and East Providence. Bat colonies in older multifamily homes — particularly the wood-frame triple-deckers of the Federal Hill, West End, and South Providence neighborhoods — are a recurring summer maternity-season exclusion issue. Eastern gray squirrels intrude into attics and soffits across the entire residential housing stock, striped skunks and opossums shelter under porches and sheds throughout the suburban townships, and house mice surge into homes countywide every fall as cold weather sets in. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractor coverage spans Providence and the surrounding mill cities of Pawtucket, Woonsocket, Cranston, and East Providence, along with the wooded suburban towns of Lincoln, Smithfield, and Glocester to the north and west. Boston is about 50 miles north and Hartford about 70 miles west, but Providence County calls are handled locally given the urban density and the specific demands of the older multi-family housing stock.`;
    metaTitle = `Wildlife Removal in Providence County, RI | Serving Providence, Pawtucket & Woonsocket`;
    metaDescription = `Licensed wildlife removal in Providence County, RI. Norway rats, raccoons, bats, and skunks in older urban neighborhoods — serving Providence, Pawtucket, Cranston, and Woonsocket. RI-permitted contractors.`;

  } else if (countyName === 'Kent County') {
    blockA = `Sitting between the Narragansett Bay shoreline and Rhode Island's wooded interior, Kent County combines the suburban density of Warwick and East Greenwich with the more rural character of Coventry and West Greenwich to the west. Established in ${county.established} with a current population of ${county.population.toLocaleString()}, the county runs west from Greenwich Bay through the bay-shore commuter towns and into the working forest and small-farm landscape of the Big River Management Area. Providence is about 10 miles north, putting Kent firmly in the Providence metro commuter belt.`;
    blockB = `Warwick and the Greenwich Bay shoreline communities generate the highest residential nuisance call volume in the county — raccoons routinely intrude into attics and screened porches across the suburban housing stock, striped skunks shelter under decks and sheds throughout the residential neighborhoods, and bat colonies in older homes from East Greenwich through Warwick are a recurring summer maternity-season call source. Moles damage manicured lawns across the bay-shore residential developments, generating steady spring-to-fall demand. The wooded interior of Coventry and West Greenwich shifts the wildlife profile toward fisher and porcupine activity — fishers cause occasional chicken-coop and outbuilding damage on the rural homesteads, and porcupines target deck boards and outbuilding components at camps near Big River Management Area. Opossums and Eastern gray squirrels round out the county's regular nuisance picture. ${cap(county.absent_or_rare)}.`;
    blockC = `Service spans the bay-shore communities of Warwick, East Greenwich, and West Warwick, the larger inland town of Coventry, and the rural townships of West Greenwich and the Big River area. Providence is about 10 miles north and is the nearest major metro hub, but local Kent County contractors are essential for the mix of suburban exclusion and rural outbuilding work.`;
    metaTitle = `Kent County RI Wildlife Removal — Warwick, Coventry & East Greenwich`;
    metaDescription = `Licensed wildlife removal in Kent County, RI. Raccoons, skunks, bats, moles, and fishers — serving Warwick, Coventry, West Warwick, and East Greenwich. RI-permitted contractors.`;

  } else if (countyName === 'Washington County') {
    blockA = `Stretching from the Atlantic coast and the Block Island Sound shoreline north through the salt ponds and inland into Rhode Island's largest blocks of working forest, Washington County is the most rural county in the smallest state. Established in ${county.established} with a population of ${county.population.toLocaleString()}, the county includes the coastal communities of South Kingstown, Narragansett, and Westerly, the salt-pond villages of Charlestown, and the inland forest townships of Hopkinton and Richmond. Providence is about 30 miles north, distant enough that the county functions largely as its own rural-coastal economy.`;
    blockB = `Coastal vacation homes near the salt ponds and around Burlingame State Park, Trustom Pond National Wildlife Refuge, and Ninigret National Wildlife Refuge generate heavy bat colony activity — older shoreline homes that sit empty for months at a time provide ideal roosting conditions, and summer maternity-season exclusion work is a major part of the local market. Fishers cause regular chicken-coop and outbuilding damage in the pine and oak forest of the inland townships, and beavers flood streams, culverts, and low-lying farmland across the rural waterways. Raccoons are persistent at second homes near the salt ponds and at coastal vacation properties, moles damage manicured lawns at coastal residential developments throughout South Kingstown, North Kingstown, and Westerly, and Eastern gray squirrels intrude into attics across the older shoreline housing stock. Muskrats are persistent along the salt-pond margins and inland wetland edges. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage runs from Westerly on the Connecticut border east through Charlestown, South Kingstown, and Narragansett along the coast, and inland to North Kingstown and the rural townships of Hopkinton, Richmond, and Exeter. Providence is about 30 miles north, but the rural-coastal character of the county and the prevalence of seasonal-occupancy properties means locally based contractors are essential for the off-season exclusion work that defines this market.`;
    metaTitle = `Washington County RI Wildlife Removal — South County Coast & Salt Ponds`;
    metaDescription = `Licensed wildlife removal in Washington County, RI. Bats in coastal homes, fishers, beavers, and moles — serving South Kingstown, Narragansett, Westerly, and Charlestown.`;

  } else if (countyName === 'Newport County') {
    blockA = `Built around Aquidneck Island and Conanicut Island in Narragansett Bay, Newport County is Rhode Island's only true island county — Newport itself sits at the south end of Aquidneck Island, with Middletown and Portsmouth running north and Jamestown across the West Passage on Conanicut Island. Tiverton and Little Compton occupy a separate small mainland section to the east. With ${county.population.toLocaleString()} residents established in ${county.established}, the county combines the historic-mansion district of Newport with suburban neighborhoods on Middletown and Portsmouth and undeveloped shoreline along the Cliff Walk and the protected Sachuest Point and Norman Bird Sanctuary areas.`;
    blockB = `Newport's historic mansions and the older Federal-era and Victorian housing stock throughout Aquidneck Island host some of the largest and longest-established bat colonies in Rhode Island — masonry gaps, deteriorated pointing, and unscreened soffits in pre-war structures provide ideal roost access, and summer maternity-season exclusion work is a defining part of the local market. Raccoons are persistent at waterfront properties throughout Newport, Middletown, and Portsmouth, and Norway rats are concentrated in the downtown Newport waterfront commercial blocks and at the active wharfside areas. Pigeon nuisance issues are widespread on Newport's historic building stock, requiring exclusion and deterrent work on architectural ledges and ornamental masonry. Canada goose populations cause persistent property conflicts on Aquidneck Island lawns and waterfront parks, striped skunks shelter under decks and historic-home foundations across the year-round residential housing, and Eastern gray squirrels intrude into attics across the older buildings. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage includes Newport, Middletown, and Portsmouth on Aquidneck Island, Jamestown on Conanicut Island, and the mainland communities of Tiverton and Little Compton. Providence is about 30 miles north, but Newport County's island geography and historic building stock require contractors with specific local experience — particularly for the mansion-district bat colony work and the dockside Norway rat control that define the seasonal call profile.`;
    metaTitle = `Newport County RI Wildlife Removal — Newport Mansions, Aquidneck Island & Jamestown`;
    metaDescription = `Licensed wildlife removal in Newport County, RI. Bat colonies in historic mansions, waterfront raccoons, downtown rats, and pigeons — serving Newport, Middletown, Portsmouth, and Jamestown.`;

  } else if (countyName === 'Bristol County') {
    blockA = `Bristol County is the smallest county in Rhode Island — itself the smallest state — covering a single small peninsula that runs south from East Providence between the Providence River and Mount Hope Bay. Just three towns make up the entire county: Bristol at the southern tip with its colonial-era harbor and historic main street, Warren midway up the peninsula along the Warren River, and Barrington at the north end with its bay-side suburban character. With ${county.population.toLocaleString()} residents established in ${county.established}, the county is fully developed and tightly connected to Providence — about 15 miles to the northwest.`;
    blockB = `Raccoons, striped skunks, and opossums are persistent residential nuisance species across the fully developed peninsula, with the highest call volume coming from the suburban Barrington bay-side and the residential neighborhoods of Warren and Bristol. Bat colonies in older homes throughout Bristol's colonial-era housing stock and along Warren's historic Main Street are a recurring summer maternity-season exclusion issue. Norway rats are concentrated in the Mount Hope Bay waterfront commercial blocks and in Bristol's downtown corridor near the harbor. Moles damage manicured lawns throughout the residential neighborhoods of Barrington, Warren, and Bristol — generating steady spring-to-fall service demand on the bay-side properties. Eastern gray squirrels intrude into attics and soffits across the older housing stock, and house mice surge into homes countywide every fall. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers all three Bristol County towns — Bristol, Warren, and Barrington — and the surrounding bay-side communities. Providence is about 15 miles to the northwest, but the small-county scale and the specific demands of the older Bristol and Warren housing stock mean local contractors are best suited for both routine residential exclusion and the historic-building bat work that defines this market.`;
    metaTitle = `Bristol County RI Wildlife Removal — Bristol, Warren & Barrington`;
    metaDescription = `Licensed wildlife removal in Bristol County, RI. Raccoons, skunks, bats in historic homes, Norway rats at the waterfront, and moles in residential lawns — serving Bristol, Warren, and Barrington.`;
  }

  const blockD = `Wildlife intrusion in ${countyName} follows Rhode Island's two main pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor}.`;
  const blockE = `All commercial wildlife removal in Rhode Island is regulated by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds a valid Rhode Island Nuisance Wildlife Control permit and operates within RI DEM Fish and Wildlife guidelines on species-specific handling and relocation.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription };
}

// ---- Georgia county content ----
function georgiaContent(countyName, county, s) {
  const top4cities = county.largest_cities.slice(0, 4).join(', ');

  let blockA, blockB, blockC, metaTitle, metaDescription;
  let extendedBody = null;
  let faqs = null;
  let neighboringCounties = null;
  let geo = null;
  let sameAs = null;

  if (countyName === 'Cobb County') {
    blockA = `Cobb County sits in the northwestern Atlanta metro area immediately north of the Chattahoochee River, with downtown Atlanta about 20 miles southeast of the county seat in Marietta. With a population of ${county.population.toLocaleString()} — making it one of Georgia's largest counties — Cobb runs from the older inner-ring neighborhoods of Smyrna, Marietta, and Vinings out through the dense suburban corridors of East Cobb, Kennesaw, and Acworth, with the Kennesaw Mountain National Battlefield Park anchoring the county's center and the Chattahoochee River corridor forming the southern boundary. Established in ${county.established}, the county combines Civil War-era historic districts, post-war ranch suburbs, and late-20th-century subdivisions under heavy oak-hickory canopy.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across the wooded subdivisions countywide where mature trees touch rooflines, and Virginia opossums shelter under decks and porches across the older inner-ring housing stock. Snake calls — primarily rat snakes and the occasional copperhead — concentrate around the wooded properties along the Chattahoochee corridor and the Kennesaw Mountain ridgeline, particularly in spring and fall. Striped skunks are persistent under sheds and crawl spaces in the suburban-edge subdivisions, and dead-animal calls run year-round given Cobb's near-continuous wildlife activity. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Cobb County including ${top4cities}, plus Powder Springs, Vinings, Mableton, Austell, and Clarkdale, and the unincorporated subdivisions across East and West Cobb. The county's mix of historic Marietta neighborhoods, dense suburban housing stock, and wooded subdivisions along the Chattahoochee and Kennesaw Mountain — combined with the year-round wildlife activity that defines the Atlanta metro — means contractors here handle a continuous mix of attic exclusion, armadillo lawn damage, and emergency snake and bat calls.`;
    metaTitle = `Cobb County Wildlife Removal — Marietta, Smyrna, Kennesaw GA`;
    metaDescription = `Licensed wildlife removal in Cobb County, GA — Marietta, Smyrna, Kennesaw, Acworth & Powder Springs. Raccoons, bats, snakes, coyotes — call for same-day.`;

    geo = { lat: 33.94, lon: -84.58 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Cobb_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Fulton County',   slug: 'fulton-county',   anchor: 'Wildlife removal in Fulton County',   blurb: 'south and east border' },
      { name: 'Cherokee County', slug: 'cherokee-county', anchor: 'Cherokee County animal services',     blurb: 'directly to the north' },
      { name: 'Paulding County', slug: 'paulding-county', anchor: 'Paulding County wildlife services',   blurb: 'to the west' },
      { name: 'Bartow County',   slug: 'bartow-county',   anchor: 'Bartow County wildlife removal',      blurb: 'to the northwest, sharing Lake Allatoona' },
      { name: 'Douglas County',  slug: 'douglas-county',  anchor: 'Animal removal in Douglas County',    blurb: 'to the southwest, across Sweetwater Creek' },
    ];

    extendedBody = `
      <h2>Cobb County's Geography Shapes Its Wildlife Activity</h2>
      <p>Cobb County sits in the rolling Piedmont uplands of north Georgia, hemmed in by the <strong>Chattahoochee River</strong> along its southern and eastern borders and crowned by <strong>Lake Allatoona</strong> on the north. Between those two waters runs a string of monadnocks — <strong>Kennesaw Mountain</strong> (1,808 feet), <strong>Pine Mountain</strong>, <strong>Lost Mountain</strong>, and <strong>Brushy Mountain</strong> — small isolated peaks that interrupt an otherwise gently rolling landscape and concentrate the kind of mature mast-producing oak-hickory forest that supports dense local wildlife populations.</p>
      <p>Within or directly bordering the county sit several major public conservation lands: <strong>Kennesaw Mountain National Battlefield Park</strong>, multiple riverside units of the <strong>Chattahoochee River National Recreation Area</strong> (Cochran Shoals, Sope Creek, East and West Palisades, Powers Island, Paces Mill), <strong>Red Top Mountain State Park</strong> on the Lake Allatoona shore, and <strong>Sweetwater Creek State Park</strong> just across the southwestern county line. The result is a metro Atlanta county where protected habitat sits directly against subdivisions, golf courses, and corporate office parks — and that interface is what drives Cobb's residential wildlife removal call volume.</p>

      <h3>Waterways That Move Wildlife Through the County</h3>
      <p>The Chattahoochee corridor is the dominant ecological feature, but Cobb is also drained by <strong>Sweetwater Creek</strong>, <strong>Nickajack Creek</strong>, <strong>Sope Creek</strong>, <strong>Allatoona Creek</strong>, <strong>Noses Creek</strong>, and <strong>Rottenwood Creek</strong> — every one of which functions as a wildlife travel corridor. Beavers move through these tributaries and routinely flood storm-detention ponds and low-lying yards in the West Cobb subdivisions along Allatoona and Noses Creek. River otters use the Chattahoochee corridor and the lower reaches of Sope and Sweetwater. Around <strong>Lake Allatoona</strong> and the smaller <strong>Lake Acworth</strong> at the county's northern edge, bald eagles have established active nesting pairs — Allatoona is one of the more reliable bald eagle viewing spots in the metro.</p>

      <h2>Wildlife Species Present in Cobb County</h2>
      <p>Cobb residents most frequently call about animals that have moved from these natural corridors into the residential edge:</p>
      <ul class="tips-list">
        <li><strong>White-tailed deer</strong> — densities are particularly high in and around the Kennesaw Mountain area</li>
        <li><strong>Coyotes</strong> — significant established presence in East Cobb, Smyrna, and Vinings</li>
        <li><strong>Red and gray fox</strong>, <strong>eastern cottontail rabbits</strong>, <strong>raccoons</strong>, <strong>Virginia opossums</strong>, <strong>eastern gray squirrels</strong>, <strong>fox squirrels</strong></li>
        <li><strong>Beavers and river otters</strong> in the Chattahoochee tributaries</li>
        <li><strong>Eastern wild turkey</strong> on Kennesaw Mountain</li>
        <li><strong>Bald eagles</strong> nesting at Lake Allatoona; <strong>red-tailed hawks</strong>, <strong>broad-winged hawks</strong> (conspicuous in fall migration over the Kennesaw ridge)</li>
        <li><strong>Barred owls</strong>, <strong>great horned owls</strong>, <strong>pileated woodpeckers</strong></li>
        <li><strong>Eastern box turtles</strong> and <strong>snapping turtles</strong></li>
        <li>Snakes encountered residentially are dominated by the <strong>eastern rat snake</strong> (frequently mistaken for venomous) and the <strong>northern copperhead</strong>, with <strong>brown watersnakes</strong> along river and creek corridors. <strong>Timber rattlesnakes</strong> occur but are essentially restricted to the rugged ridgeline habitat around Kennesaw Mountain — encounters at residential properties are uncommon.</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Cobb Job Mix</h2>
      <p>Several patterns in Cobb's call volume are distinctive enough to call out:</p>

      <h3>Urban coyote management in East Cobb and Smyrna</h3>
      <p>Coyote sightings now occur in nearly every subdivision east of I-75. Most calls are driven by missing cats, daytime sightings near schools, or den activity in stormwater easements. Coyotes are using the small woodlots, golf courses, and creek corridors that run between subdivisions as travel routes and den sites. Removal is rarely lethal — most resolutions involve hazing, exclusion of food sources, and den-site disturbance.</p>

      <h3>Bats in older Marietta-area homes</h3>
      <p>The pre-1970s housing stock in the <strong>Marietta Square historic district</strong> and the inner Smyrna neighborhoods is the classic substrate for big brown bat maternity colonies — louvered gable vents, original wood-shake roofing, and decades of unmaintained soffits. Georgia DNR restricts active exclusion during the maternity period (roughly May through July) to protect non-volant pups, so most exclusion work is scheduled August through April.</p>

      <h3>Beaver flooding in West Cobb subdivisions</h3>
      <p>Subdivisions along Allatoona Creek, Noses Creek, and the smaller tributaries west of US-41 see recurring beaver-related flooding of yards, walking paths, and culverts. Most resolutions are some combination of trapping and the installation of dam-leveler devices to manage water levels rather than full beaver removal.</p>

      <h3>Deer-vehicle collisions</h3>
      <p>Cobb has consistently ranked among the higher Georgia counties for deer-vehicle collisions, with hotspots along Old Highway 41, Sandy Plains Road, Burnt Hickory Road, and the corridors bordering Kennesaw Mountain Park.</p>

      <h3>Canada goose overpopulation at corporate ponds and Lake Allatoona</h3>
      <p>Resident (non-migratory) Canada geese on corporate retention ponds along the I-75 corridor, Cumberland-area office parks, and the Lake Allatoona shoreline produce enough fecal volume to be a real water-quality and slip-and-fall liability. Most management is non-lethal — egg addling, habitat modification, dog-based hazing — though USDA permits for population reduction are issued in some cases.</p>

      <h2>Federally Protected Species in the Cobb Watersheds</h2>
      <p>Two federally listed fish — the <strong>Cherokee darter</strong> (federally threatened) and the <strong>Etowah darter</strong> (federally endangered) — occur in the Etowah and Allatoona Creek systems draining the northern part of the county. They have no direct relevance to residential wildlife removal, but any work in those creek corridors is subject to federal habitat protections, and licensed contractors operating there should be aware of the listing. The <strong>bald eagle</strong> remains protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act; Lake Allatoona's nesting pairs are surveyed annually by Georgia DNR.</p>

      <h2>Local Authorities and Regulations</h2>
      <p><strong>Cobb County Animal Services</strong> handles domestic-animal complaints — stray dogs, cat colonies, bite reports — but does not respond to most nuisance wildlife calls. Raccoons, squirrels, bats, snakes, beavers, coyotes, and similar species are referred to private licensed wildlife control operators. State-level oversight comes from <strong>Georgia DNR Wildlife Resources Division Region 1</strong> (Armuchee office), which issues the Trapping License and Nuisance Wildlife Control Permit required of commercial operators. Federal protections apply to bats during maternity periods, all migratory birds (Canada geese, owls, hawks, woodpeckers), and the federally listed fish species above. Every contractor in this directory operating in Cobb County is required to hold the applicable state and federal credentials.</p>
    `;

    faqs = [
      {
        q: 'What wildlife is most common in Cobb County, Georgia?',
        a: 'In residential calls across Cobb County, eastern gray squirrels, raccoons, Virginia opossums, big brown bats, and armadillos make up the bulk of attic and yard intrusions. Snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate along the Chattahoochee corridor and around Kennesaw Mountain. Coyotes are now firmly established across East Cobb, Smyrna, and Vinings. Beavers and Canada geese drive most of the water-related complaints in West Cobb subdivisions and around corporate retention ponds. Larger species — white-tailed deer, the occasional black bear that wanders through Kennesaw Mountain, and alligators in the Chattahoochee — fall under direct Georgia DNR Wildlife Resources Division management rather than the private removal industry.'
      },
      {
        q: 'Are coyotes a problem in East Cobb and Smyrna?',
        a: 'Coyote sightings are routine in East Cobb and Smyrna, with most subdivisions east of I-75 reporting at least seasonal activity. Coyotes use the small woodlots, golf courses, and creek corridors that run between subdivisions as travel routes and den sites. The most common reasons residents call are missing cats, daytime sightings near schools, and den activity in stormwater easements. Resolutions are rarely lethal — they typically involve some combination of hazing, removing food sources (pet food left out, accessible trash, fallen fruit), and disrupting den sites. A licensed contractor can also work the food-source side of the problem at neighboring properties when the issue is community-wide.'
      },
      {
        q: 'What should I do about bats in my Marietta attic?',
        a: 'Don\'t try to handle a bat colony yourself. Bats in Georgia carry rabies risk, are protected by federal law during the maternity period, and require specialized exclusion technique to remove without sealing pups inside the structure. Cobb\'s pre-1970s housing stock — the Marietta Square historic district, inner Smyrna, and older sections of Vinings — is the classic substrate for big brown bat maternity colonies forming in louvered gable vents and original wood-shake roofing. Georgia DNR restricts active exclusion during the maternity period (roughly May through July). A licensed contractor will typically schedule work for August through April, install one-way exit devices, and seal the structure once the colony is confirmed to have left.'
      },
      {
        q: 'Is wildlife removal regulated in Cobb County?',
        a: 'Yes. Wildlife removal in Cobb County operates under three layers of regulation. State-level oversight comes from the Georgia Department of Natural Resources, Wildlife Resources Division (Region 1, Armuchee office), which issues the Trapping License and Nuisance Wildlife Control Permit required for commercial operators. Federal protections apply to bats, all migratory birds (Canada geese, owls, hawks, woodpeckers), and federally listed species in the local watersheds. Cobb County Animal Services handles domestic-animal calls but does not respond to most nuisance wildlife — those calls are referred to licensed private operators. Every contractor in this directory holds the applicable state and federal credentials.'
      },
      {
        q: 'How much does wildlife removal cost in Cobb County?',
        a: 'Pricing varies significantly with the species, the extent of the intrusion, and how much exclusion work is needed to keep the animal out. A single squirrel or raccoon removal on a clean attic might run a few hundred dollars; a full bat colony exclusion with attic remediation, sanitization, and sealed entry points can run several thousand. Beaver and coyote work is priced by trap-set count and visit frequency. The most accurate way to get a number is a free phone consult with a Cobb-based contractor — most quote at no cost over the phone once they understand the species and the property.'
      },
      {
        q: 'When is the best time to handle wildlife exclusion in Georgia?',
        a: 'For most species in the Cobb County area, the best window for exclusion work is late summer through early spring — roughly August through April. Bat exclusion in particular must be scheduled outside the maternity period (May through July) to avoid trapping non-volant pups inside. Squirrel and raccoon exclusion is best handled outside their main denning seasons (February through April for both species in north Georgia), though urgent intrusions can be addressed any time of year using one-way doors that allow animals to exit but not return. Snake calls and emergency removals run year-round. Cobb\'s mild winters keep wildlife active twelve months a year.'
      },
      {
        q: 'Are there protected species in Cobb County I should be aware of?',
        a: 'Two federally listed fish — the Cherokee darter (threatened) and the Etowah darter (endangered) — occur in the Etowah and Allatoona Creek systems draining the northern part of the county. Bald eagles nest on Lake Allatoona and are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act. Bats are protected by both state and federal regulations during their maternity period. Canada geese require federal Migratory Bird Treaty Act permits for any active take, even though they are often regarded as a nuisance. Licensed contractors are required to know which species can be handled directly and which require specific federal or state permitting before work begins.'
      },
      {
        q: 'What\'s the difference between county animal control and a wildlife removal contractor?',
        a: 'Cobb County Animal Services responds to domestic-animal calls — stray and aggressive dogs, cat colonies, bite reports, animal cruelty — and handles licensing, vaccination compliance, and shelter operations. They do not respond to most nuisance wildlife situations. Raccoons in attics, bats in walls, snakes in yards, squirrels in chimneys, coyote sightings, beaver flooding, and similar calls are referred to private licensed wildlife removal contractors. The reason is that wild-animal handling requires specialized state DNR licensing, exclusion work falls outside animal control\'s mandate, and the work is typically property-specific (sealing buildings, installing one-way doors, repairing damage) rather than animal-pickup-and-relocate.'
      }
    ];

  } else if (countyName === 'Fulton County') {
    blockA = `Fulton County is the most populous county in Georgia at ${county.population.toLocaleString()} residents and the geographic and economic center of metro Atlanta. The county runs from the Chattahoochee River along its western boundary through the city of Atlanta — including Buckhead, Midtown, Downtown, the West End, and Cabbagetown's Fulton-side blocks — and continues north through Sandy Springs, Roswell, Alpharetta, Johns Creek, and Milton, then south through East Point, College Park, and the recently incorporated South Fulton. Established in ${county.established}, Fulton combines Atlanta's pre-1940 historic intown housing, mid-century suburban Sandy Springs and Roswell, the Roswell historic mill village, and the 1990s-2010s tech-corridor subdivisions of north Fulton — the widest residential housing-era range in metro Atlanta.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across Fulton's mature canopy, with twin breeding-cycle peaks in February-March and August-September driving twin call peaks. Southern flying squirrels appear with notable frequency in older Atlanta intown housing — Buckhead older estate areas, the West End historic district, Cabbagetown row housing, and the Atlanta BeltLine corridor. Virginia opossums shelter under decks and porches across the older Atlanta intown housing stock and the East Point mid-century neighborhoods. Coyotes are firmly established across Atlanta intown and increasingly common in north Fulton subdivisions. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Fulton County including ${top4cities}, plus Milton, East Point, College Park, South Fulton, Union City, Fairburn, Hapeville, Palmetto, and Chattahoochee Hills. The county's mix of dense Atlanta urban core, pre-1940 historic intown neighborhoods, mid-century suburban Sandy Springs and Roswell, the Roswell historic mill village, and the 1990s-2010s north-Fulton tech-corridor subdivisions — combined with the Chattahoochee River corridor source population and the Atlanta BeltLine ecology — means contractors here handle the widest mix of urban Norway-rat work, intown bat-colony exclusion, suburban roof-rat exclusion, and continuous raccoon-and-squirrel residential pressure.`;
    metaTitle = `Fulton County Wildlife Removal — Atlanta, Sandy Springs, Roswell GA`;
    metaDescription = `Licensed wildlife removal in Fulton County, GA — Atlanta, Sandy Springs, Roswell, Alpharetta, Johns Creek, Milton & East Point. Same-day humane service.`;

    geo = { lat: 33.8044, lon: -84.4699 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Fulton_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Cobb County',     slug: 'cobb-county',     anchor: 'Cobb County wildlife removal',        blurb: 'directly to the northwest' },
      { name: 'DeKalb County',   slug: 'dekalb-county',   anchor: 'DeKalb County wildlife services',     blurb: 'directly to the east, sharing Atlanta\'s eastern half' },
      { name: 'Cherokee County', slug: 'cherokee-county', anchor: 'Cherokee County animal removal',      blurb: 'to the north' },
      { name: 'Forsyth County',  slug: 'forsyth-county',  anchor: 'Forsyth County wildlife removal',     blurb: 'to the northeast' },
      { name: 'Clayton County',  slug: 'clayton-county',  anchor: 'Wildlife removal in Clayton County',  blurb: 'to the south' },
      { name: 'Douglas County',  slug: 'douglas-county',  anchor: 'Douglas County wildlife removal',     blurb: 'to the southwest, across the Chattahoochee River' },
    ];

    extendedBody = `
      <h2>Fulton County's Geography Shapes Atlanta-Metro Wildlife Activity</h2>
      <p>Fulton County is unique within metro Atlanta because of how its housing-and-habitat range stretches from one of the densest urban cores in the southeast through suburban canopy to large-lot estate properties — all within a single county. The <strong>Chattahoochee River</strong> forms the western boundary, with multiple <strong>Chattahoochee River National Recreation Area</strong> units (Cochran Shoals, Powers Island, Vickery Creek, Jones Bridge, Island Ford) sustaining a continuous riverside source population. The <strong>Atlanta BeltLine</strong> — a 22-mile loop converted from former rail right-of-way — runs through the county's intown core and now functions as both a wildlife travel corridor and a major Norway-rat habitat. <strong>Big Creek</strong> and the <strong>Big Creek Greenway</strong> cut through Roswell and Alpharetta; <strong>Vickery Creek</strong> runs through the Roswell historic mill village; and <strong>Foe Killer Creek</strong>, <strong>Marsh Creek</strong>, and <strong>Tanyard Creek</strong> form a network of intown tributaries.</p>
      <p>The result is a county where Atlanta's urban food density, the BeltLine's restaurant-and-dumpster ecology, the Chattahoochee corridor's source population, and the canopy of north-Fulton's 1990s-2010s subdivisions all combine to produce continuous year-round residential wildlife call volume. Fulton has the highest absolute residential wildlife call count in Georgia.</p>

      <h3>Atlanta Intown Housing as Wildlife Habitat</h3>
      <p>Atlanta's pre-1940 intown housing — Buckhead older estate areas, the West End historic district, Cabbagetown's Fulton-side row housing, Old Fourth Ward, the streets around the State Capitol — is the metro's most concentrated multi-decade big-brown-bat maternity habitat. Original masonry chimneys without modern caps, hand-laid brick foundations with pointing failures, original wood soffits with corner separation, and pre-modern gable louvers without screen backing all support continuous colony occupation spanning 30-60+ years. Pre-1940 Atlanta wiring runs (knob-and-tube remnants, early Romex, undersized neutrals) are particularly vulnerable to chew damage, making chewed-Romex fire risk a more urgent concern in Atlanta intown housing than in suburban Fulton.</p>

      <h2>Wildlife Species Present in Fulton County</h2>
      <p>Fulton residents most frequently call about animals that have moved from the Chattahoochee corridor, the BeltLine, the Atlanta urban core, or the north-Fulton wooded subdivisions into residential structures:</p>
      <ul class="tips-list">
        <li><strong>Norway rats</strong> — highest urban density in the metro, concentrated along the BeltLine, Buckhead Village, Midtown, Old Fourth Ward (Ponce City Market, Krog Street Market), Centennial Olympic Park downtown, and the West End commercial blocks</li>
        <li><strong>Roof rats</strong> — dominant species in suburban Sandy Springs, Roswell, Alpharetta, Johns Creek, and Milton; entered the metro via I-75 / GA-400 corridors during the 2000s-2010s</li>
        <li><strong>Big brown bats</strong> — long-established colonies in pre-1940 Atlanta intown chimneys</li>
        <li><strong>Evening bats</strong> in older Atlanta intown housing</li>
        <li><strong>Tricolored bats</strong> (federally proposed for listing under the Endangered Species Act) along the Chattahoochee corridor</li>
        <li><strong>Eastern gray squirrels</strong> across the entire county; <strong>Southern flying squirrels</strong> in older intown housing and along the Chattahoochee</li>
        <li><strong>Raccoons</strong> — heaviest densities along the Chattahoochee corridor; 15-25+ lb adults common in shoreline-adjacent properties</li>
        <li><strong>Virginia opossums</strong>, <strong>striped skunks</strong>, <strong>red and gray fox</strong></li>
        <li><strong>Urban coyotes</strong> — firmly established across Atlanta intown (Buckhead, West End, Old Fourth Ward) and increasingly common in north Fulton</li>
        <li><strong>White-tailed deer</strong> — high densities in Milton's large-lot estate properties and along the Chattahoochee corridor</li>
        <li>Snakes encountered residentially are dominated by the <strong>eastern rat snake</strong> and the occasional <strong>northern copperhead</strong>; <strong>brown watersnakes</strong> along the Chattahoochee and BeltLine creek tributaries</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Fulton Job Mix</h2>
      <p>Several patterns in Fulton's call volume are distinctive enough to call out:</p>

      <h3>Atlanta BeltLine Norway rat pressure</h3>
      <p>The Atlanta BeltLine corridor has become one of the most active Norway rat habitats in the metro. Properties within a quarter-mile of the corridor see consistent year-round pressure from the dumpster ecology at commercial nodes (Ponce City Market, Krog Street Market) and the continuous travel route the corridor provides between adjacent neighborhoods. BeltLine-adjacent residential properties often need expanded-perimeter exclusion plans rather than standard single-property treatment.</p>

      <h3>Pre-1940 Atlanta intown bat colonies</h3>
      <p>Buckhead older estate areas, West End historic district, Cabbagetown row housing, and the Capitol-area streets all support continuously-occupied big-brown-bat maternity colonies spanning 30-60+ years. Daughters return to natal roosts to whelp, so colony memory is multigenerational. Long-established colonies produce inches of accumulated guano, and decontamination is the dominant scope item on Atlanta intown bat jobs. Tricolored-bat encounters along the Chattahoochee corridor carry federal-status concerns.</p>

      <h3>Roof rat establishment in north Fulton subdivisions</h3>
      <p>Sandy Springs, Roswell, Alpharetta, Johns Creek, and Milton all see consistent roof-rat pressure from the suburban canopy and overhead utility infrastructure. Same-era 1990s-2010s subdivision construction means failure modes (gable-vent screens, attic-fan housings, builder-grade chase caps) appear simultaneously across blocks. Neighbor-to-neighbor reinfestation via overhead utility runs is the rule.</p>

      <h3>Multi-structure exclusion in Milton estate properties</h3>
      <p>Milton's large-lot equestrian-and-estate residential pattern (3-10+ acres typical) means most properties have multiple structures: main house, barn, detached garage, equestrian outbuildings. Each is a separate possible wildlife access route. Effective Milton exclusion plans inspect every structure and schedule simultaneous treatment.</p>

      <h3>Atlanta urban coyote management</h3>
      <p>Coyote sightings are now routine across Atlanta intown — Buckhead, West End, Old Fourth Ward, Cabbagetown, the Atlanta BeltLine corridor — and increasingly common in north Fulton subdivisions. Most calls are driven by missing cats, daytime sightings near schools, or den activity in stormwater easements. Resolutions typically combine hazing, food-source removal, and den-site disturbance.</p>

      <h2>Federally Protected Species in Fulton's Watersheds</h2>
      <p>The <strong>tricolored bat</strong> (<em>Perimyotis subflavus</em>) is federally proposed for listing under the Endangered Species Act and appears with notable regularity along the Chattahoochee corridor; any encounter requires careful protocol. <strong>Bald eagles</strong> remain protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act; they appear along the Chattahoochee corridor occasionally. <strong>Migratory birds</strong> including Canada geese, hawks, owls, and woodpeckers are protected under the Migratory Bird Treaty Act and require federal permits for any active take.</p>

      <h2>Local Authorities and Regulations</h2>
      <p>Public-health authority for Fulton County rabies-vector exposure runs through the <strong>Fulton County Board of Health</strong>; <strong>LifeLine Animal Project / Atlanta Animal Services</strong> handles domestic-animal complaints in the city of Atlanta but does not respond to most nuisance wildlife. Commercial wildlife removal in Georgia operates under <strong>Georgia DNR Wildlife Resources Division</strong> licensing — Region 2 (Gainesville office) handles north Fulton; Region 4 handles south Fulton. Federal protections apply to bats during maternity periods (May-August exclusion restrictions), all migratory birds, and the federally proposed tricolored bat. Every contractor in this directory operating in Fulton County holds the applicable state and federal credentials.</p>
    `;

    faqs = [
      {
        q: 'What wildlife is most common in Fulton County, Georgia?',
        a: 'Fulton has the metro\'s most diverse residential wildlife profile. Norway rats are the dominant species in Atlanta intown commercial corridors and along the BeltLine. Roof rats dominate north-Fulton suburban subdivisions (Sandy Springs, Roswell, Alpharetta, Johns Creek, Milton). Big brown bat colonies are long-established in pre-1940 Atlanta intown chimneys (30-60+ years old). Eastern gray squirrels are constant across the county, with flying squirrels notable in older intown housing. Raccoons are heaviest along the Chattahoochee corridor. Urban coyotes are firmly established in Atlanta intown. Tricolored bats (federally proposed for listing) appear along the Chattahoochee corridor.'
      },
      {
        q: 'Is the Atlanta BeltLine making Norway rat problems worse for nearby residents?',
        a: 'Yes, demonstrably for properties within about a quarter-mile of the corridor. The BeltLine\'s dumpster ecology at commercial nodes (Ponce City Market, Krog Street Market) plus the continuous travel route the corridor provides between neighborhoods has driven measurable Norway-rat-pressure increases in adjacent residential blocks since the BeltLine opened. Properties along the corridor often need expanded-perimeter exclusion plans rather than standard single-property treatment.'
      },
      {
        q: 'How old are the bat colonies in Atlanta historic homes?',
        a: 'Atlanta intown pre-1940 chimney colonies are routinely 30-60+ years old by the time homeowners first notice activity. Big brown bat daughters return to their natal roosts to whelp, so colony memory is multigenerational and persists across changes in property ownership. The first noticeable sign is typically guano accumulation on siding below an entry point or a single bat appearing in living space — and by that point, the colony has been there for decades. Buckhead, West End, Cabbagetown, and the Capitol-area streets all support continuously-occupied multi-decade colonies.'
      },
      {
        q: 'Why do roof rats keep returning to my north Fulton home?',
        a: 'North Fulton\'s continuous mature canopy plus overhead utility infrastructure means roof rats from neighboring properties travel along overhead utility runs without ground contact and replace any rats killed in DIY trapping within weeks. Same-era 1990s-2010s subdivision construction means failure modes (gable-vent screens, attic-fan housings, builder-grade chimney chase caps) appear simultaneously across blocks. Durable resolution requires structural exclusion combined with trapping — and sometimes coordinated treatment with adjacent properties for connected-canopy neighborhoods.'
      },
      {
        q: 'Are coyotes a problem in Atlanta intown?',
        a: 'Yes — coyote sightings are now routine across Atlanta intown. Buckhead, West End, Old Fourth Ward, Cabbagetown, and the Atlanta BeltLine corridor all report regular activity. Coyotes use the small woodlots, the BeltLine\'s green corridor, and the creek tributaries that run between intown neighborhoods as travel routes and den sites. The most common reasons residents call are missing cats, daytime sightings near schools, and den activity in stormwater easements. Resolutions typically combine hazing, removing food sources, and disrupting den sites.'
      },
      {
        q: 'What are the legal restrictions on bat removal in Fulton County?',
        a: 'Georgia DNR Wildlife Resources Division regulations restrict bat exclusion during the maternity season — typically May through August — when non-flying pups are present and would be trapped inside the structure to die if exclusion went forward. All bat exclusion in Georgia must use one-way valves, not trapping; trapping bats is essentially banned because the species are protected under both state and federal regulations. Tricolored bat encounters along the Chattahoochee corridor carry additional federal-status concerns. Atlanta intown contractors hold the required Georgia DNR licensing and follow the legal exclusion calendar (April or September-October only).'
      },
      {
        q: 'How much does wildlife removal cost in Fulton County?',
        a: 'Pricing varies by species, the extent of intrusion, and exclusion scope. Atlanta intown pre-1940 historic-district raccoon jobs run $700-$1,800+ because of multi-entry-point profiles. Long-established Atlanta bat colonies run $2,500-$6,000+ once full guano remediation is included. North-Fulton suburban roof-rat jobs typically run $400-$1,000+. Multi-structure Milton estate jobs run higher because each outbuilding represents a separate exclusion target. The variable is exclusion scope and remediation, not trapping itself. A Fulton-licensed contractor will quote the property-specific cost during inspection.'
      },
      {
        q: 'Are there protected species in Fulton County I should be aware of?',
        a: 'The tricolored bat (Perimyotis subflavus) is federally proposed for listing under the Endangered Species Act and appears along the Chattahoochee corridor with some regularity. Bald eagles are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act. All bats are protected by Georgia DNR regulations during maternity season (May-August). Migratory birds (Canada geese, owls, hawks, woodpeckers) require federal Migratory Bird Treaty Act permits for any active take. Licensed contractors are required to know which species can be handled directly and which require specific federal or state permitting.'
      }
    ];

  } else if (countyName === 'Cherokee County') {
    blockA = `Cherokee County sits in the northern metropolitan Atlanta exurban arc, in the rolling Piedmont uplands where the landscape transitions toward the Blue Ridge foothills. With a population of ${county.population.toLocaleString()} residents and rapidly growing, Cherokee runs from the Lake Allatoona shoreline along its southwestern boundary up through the explosive Woodstock and Holly Springs subdivision growth corridor and into the older small-town historic districts of Canton, Ball Ground, and Waleska. Established in ${county.established}, the county combines pre-1900 mill housing in the Canton historic district, 1840s-era small-town housing in Ball Ground, the Reinhardt University-anchored Waleska area, and the massive 1990s-2010s subdivision boom that transformed Woodstock from a small town into one of metro Atlanta's fastest-growing exurban centers.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across Cherokee's mature canopy, with twin breeding-cycle peaks driving twin call peaks. Southern flying squirrels appear with notable frequency in older Canton mill housing and along Sharp Mountain's wooded ridges. Virginia opossums shelter under decks and porches across the older Canton and Ball Ground inner-town housing. Striped skunks are persistent under sheds and crawl spaces in the wooded subdivisions, and snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate around the wooded properties along the Etowah River corridor and the Sharp Mountain ridgeline. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Cherokee County including ${top4cities}, plus Mountain Park, Nelson, and the unincorporated subdivisions throughout the county and along the Hwy 92, Hwy 20, and Hwy 5 corridors. The county's mix of historic Canton mill-housing, the 1840s-era Ball Ground downtown, the Reinhardt University-anchored Waleska area, and the rapidly-grown Woodstock and Holly Springs subdivisions — combined with the Lake Allatoona and Etowah River source populations — means contractors here handle a continuous mix of historic-district multi-entry-point exclusion, suburban roof-rat work, and continuous raccoon-and-squirrel residential pressure.`;
    metaTitle = `Cherokee County Wildlife Removal — Canton, Woodstock, Holly Springs GA`;
    metaDescription = `Licensed wildlife removal in Cherokee County, GA — Canton, Woodstock, Holly Springs, Ball Ground & Waleska. Same-day humane service. Call now.`;

    geo = { lat: 34.2502, lon: -84.4742 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Cherokee_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Cobb County',     slug: 'cobb-county',     anchor: 'Cobb County wildlife removal',        blurb: 'directly to the south' },
      { name: 'Bartow County',   slug: 'bartow-county',   anchor: 'Bartow County wildlife services',     blurb: 'to the west, sharing Lake Allatoona' },
      { name: 'Forsyth County',  slug: 'forsyth-county',  anchor: 'Forsyth County animal removal',       blurb: 'to the east' },
      { name: 'Pickens County',  slug: 'pickens-county',  anchor: 'Pickens County wildlife removal',     blurb: 'to the north' },
      { name: 'Fulton County',   slug: 'fulton-county',   anchor: 'Wildlife removal in Fulton County',   blurb: 'to the south, near Roswell' },
    ];

    extendedBody = `
      <h2>Cherokee County's Geography Shapes Wildlife Activity</h2>
      <p>Cherokee sits at the transition between metro Atlanta's outer suburbs and the Blue Ridge foothills, with the <strong>Etowah River</strong> cutting east-to-west across the southern half of the county and <strong>Lake Allatoona</strong>'s shoreline forest along the southwestern boundary (shared with Bartow and Cobb). The Etowah corridor supports federally listed darter populations — the <strong>Cherokee darter</strong> (federally threatened) and the <strong>Etowah darter</strong> (federally endangered) — and a continuous year-round raccoon source population. Tributary creeks (<strong>Long Swamp Creek</strong>, <strong>Hightower Creek</strong>, <strong>Woodstock Creek</strong>, <strong>Allatoona Creek</strong>) reinforce wildlife travel habitat throughout the county.</p>
      <p>The eastern third of the county runs up against <strong>Sharp Mountain</strong> and the smaller monadnocks scattered across the Pickens County boundary, while <strong>Blackjack Mountain</strong> anchors the southern boundary. Cherokee's residential subdivisions fill the lower elevations between these features, and the canopy has grown over the past two decades to connect almost every residential street to broader forest habitat. Reinhardt University's 600-acre Waleska campus carries continuous mature canopy that hosts year-round wildlife populations.</p>

      <h2>Wildlife Species Present in Cherokee County</h2>
      <p>Cherokee residents most frequently call about animals that have moved from these natural corridors into the residential edge:</p>
      <ul class="tips-list">
        <li><strong>Raccoons</strong> — heaviest densities along the Etowah corridor and Lake Allatoona shoreline; female raccoons whelp in Canton historic-district masonry chimneys February through April every year</li>
        <li><strong>Eastern gray squirrels</strong> — constant across the county's mature canopy, with twin breeding-cycle peaks (February-March, August-September)</li>
        <li><strong>Southern flying squirrels</strong> — notable in older Canton mill housing and along Sharp Mountain's wooded ridges; nocturnal and often mistaken for rats</li>
        <li><strong>Roof rats</strong> — dominant species in suburban Woodstock, Holly Springs, and the Hwy 92 corridor; entered the metro via I-575 during the 2000s-2010s</li>
        <li><strong>Norway rats</strong> — concentrated in the Canton historic-square commercial blocks and older Ball Ground downtown</li>
        <li><strong>Big brown bats</strong> — long-established colonies in the original 1899 Canton Mill complex, the surrounding pre-1940 worker housing, and the older Reinhardt-area homes in Waleska</li>
        <li><strong>Evening bats</strong> in older Canton mill housing</li>
        <li><strong>Tricolored bats</strong> (federally proposed for listing) along the Sharp Mountain ridgeline and the Etowah corridor</li>
        <li><strong>Virginia opossums</strong>, <strong>striped skunks</strong>, <strong>armadillos</strong> in residential and rural-edge areas</li>
        <li>Snakes encountered residentially are dominated by the <strong>eastern rat snake</strong> with the occasional <strong>northern copperhead</strong>; <strong>brown watersnakes</strong> along the Etowah corridor</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Cherokee Job Mix</h2>
      <p>Several patterns in Cherokee's call volume are distinctive enough to call out:</p>

      <h3>Pre-1900 Canton mill-housing multi-entry-point raccoon and bat work</h3>
      <p>The surviving worker housing around the original 1899 Canton Mill complex and the historic blocks around the Cherokee County Courthouse have structural features — original masonry chimneys without modern caps, hand-laid brick foundations with pointing failures, original wood soffits and pre-modern gable louvers — that produce 4-5+ raccoon and bat entry points per property. Long-established big-brown-bat colonies in Canton historic-district chimneys span 30-50+ years of continuous occupation.</p>

      <h3>Rapid Woodstock and Holly Springs roof-rat establishment</h3>
      <p>The 1990s-2010s subdivision growth across Woodstock and Holly Springs occurred during exactly the period when roof rats moved up the I-575 corridor from peninsular Florida. The result is now-mature subdivision canopy plus overhead utility infrastructure providing the connectivity roof rats need to move between properties. Neighbor-to-neighbor reinfestation via overhead utility runs is the defining suburban Cherokee rat-call pattern.</p>

      <h3>Sharp Mountain edge raccoon and squirrel pressure</h3>
      <p>The Sharp Mountain elevation-edge habitat sustains a regional source population that disperses westward into adjacent Holly Springs and inner-Cherokee subdivisions. Properties within a half-mile of the wooded eastern edge take continuous fall dispersal pressure (September-November).</p>

      <h3>Lake Allatoona shoreline raccoon source population</h3>
      <p>Cherokee's southwestern boundary along Lake Allatoona's shoreline forest produces continuous raccoon dispersal pressure into Holly Springs and southern Cherokee subdivisions. Year-round protein subsidy from shoreline foraging produces 15-25+ lb adults common in lake-adjacent properties.</p>

      <h2>Federally Protected Species in the Etowah Watershed</h2>
      <p>The <strong>Cherokee darter</strong> (federally threatened) and the <strong>Etowah darter</strong> (federally endangered) occur in the Etowah River system that drains the southern half of Cherokee County. Any work along the river corridor is subject to federal habitat protections. The federally proposed <strong>tricolored bat</strong> (<em>Perimyotis subflavus</em>) appears along the Sharp Mountain ridgeline and the Etowah corridor; any encounter requires careful protocol because of the federal status.</p>

      <h2>Local Authorities and Regulations</h2>
      <p>Public-health authority for Cherokee County rabies-vector exposure runs through the <strong>Cherokee County Health Department</strong>; <strong>Cherokee County Animal Services</strong> handles domestic-animal complaints but does not respond to most nuisance wildlife. Commercial wildlife removal in Georgia operates under <strong>Georgia DNR Wildlife Resources Division Region 1</strong> (Armuchee office). Federal protections apply to bats during maternity periods (May-August exclusion restrictions), all migratory birds, and the federally listed darters and proposed-for-listing tricolored bat.`;

    faqs = [
      {
        q: 'What wildlife is most common in Cherokee County, Georgia?',
        a: 'In residential calls across Cherokee County, eastern gray squirrels, raccoons, Virginia opossums, and big brown bats make up the bulk of attic and yard intrusions. Roof rats are increasingly dominant in the suburban subdivisions of Woodstock and Holly Springs. Pre-1900 Canton mill housing and the 1840s-era Ball Ground downtown host long-established big-brown-bat colonies. Snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate along the Etowah River corridor and the Sharp Mountain ridgeline. Federally protected species include the Cherokee darter and Etowah darter in the river system.'
      },
      {
        q: 'Why are bat colonies so common in Canton historic homes?',
        a: 'The pre-1940 housing around the original 1899 Canton Mill complex provides classic big-brown-bat maternity habitat. Original masonry chimneys without modern caps, pre-modern gable louvers, original wood soffits with corner separation, and hand-laid brick foundations all support continuous colony occupation. Many Canton historic-district chimney colonies span 30-50+ years; daughters return to natal roosts to whelp, so colony memory is multigenerational. Long-established colonies produce inches of accumulated guano, requiring HEPA-equipped decontamination.'
      },
      {
        q: 'Is roof rat pressure worse in Woodstock than other Cherokee cities?',
        a: 'Yes — Woodstock has the highest residential roof-rat call density in Cherokee. The 1990s-2010s subdivision growth occurred during exactly the period when roof rats moved up the I-575 corridor from peninsular Florida, and the resulting now-mature canopy plus overhead utility infrastructure provides the connectivity roof rats need. Subdivision tree planting from 20-30 years ago now provides unbroken tree-to-roof bridges across most neighborhoods. Holly Springs sees similar pressure; Canton, Ball Ground, and Waleska are mostly Norway-rat-dominant in their older inner-town blocks.'
      },
      {
        q: 'Are raccoons more common near Lake Allatoona or the Etowah River?',
        a: 'Both — but the patterns differ. Lake Allatoona shoreline produces year-round protein subsidy from shoreline foraging, resulting in heavier 15-25+ lb adult raccoons in lake-adjacent Holly Springs and southwestern Cherokee properties. The Etowah River corridor sustains the broader county-wide source population with consistent fall dispersal pressure (September-November) reaching most Cherokee subdivisions. Properties within a half-mile of either water feature take heaviest pressure.'
      },
      {
        q: 'When can I evict raccoons from my Cherokee County attic?',
        a: 'Female raccoons in Cherokee County whelp late February through early May, and kits are immobile and dependent until roughly 8-10 weeks of age. Performing exclusion during that window risks separating mother from kits and trapping kits inside the structure. Right approach during kit season is one-way doors that let the family exit but not re-enter, deployed once kits are mobile. Inspections and entry-point identification can happen any time of year.'
      },
      {
        q: 'What are the legal restrictions on bat removal in Cherokee County?',
        a: 'Georgia DNR Wildlife Resources Division regulations restrict bat exclusion during the maternity season — typically May through August — when non-flying pups are present. All bat exclusion in Georgia must use one-way valves, not trapping; trapping bats is essentially banned because the species are protected under both state and federal regulations. Tricolored bat encounters along the Sharp Mountain ridgeline and the Etowah corridor carry additional federal-status concerns. Cherokee contractors hold the required Georgia DNR Region 1 licensing and follow the legal exclusion calendar (April or September-October only).'
      },
      {
        q: 'How much does wildlife removal cost in Cherokee County?',
        a: 'Pricing varies by species and exclusion scope. Pre-1900 Canton historic-district raccoon jobs run $700-$1,800+ because of multi-entry-point profiles. Long-established Canton bat colonies run $2,500-$5,000+ once full guano remediation is included. Suburban Woodstock and Holly Springs roof-rat jobs typically run $400-$1,000+. Single-animal squirrel trap-and-release at one-entry-point homes is the floor. The variable is exclusion scope and remediation, not trapping itself. A Cherokee-licensed contractor will quote the property-specific cost during inspection.'
      },
      {
        q: 'Are there protected species in Cherokee County I should be aware of?',
        a: 'Yes. The Cherokee darter (federally threatened) and the Etowah darter (federally endangered) occur in the Etowah River system. Any work along the river corridor is subject to federal habitat protections. The federally proposed tricolored bat (Perimyotis subflavus) appears along the Sharp Mountain ridgeline and the Etowah corridor. Bald eagles and migratory birds are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act. Bats are protected by both state and federal regulations during maternity season.'
      }
    ];

  } else if (countyName === 'Bartow County') {
    blockA = `Bartow County sits in the northwestern metropolitan Atlanta exurban arc, with Lake Allatoona's main basin along its eastern boundary and the Etowah River cutting through the county center. With a population of ${county.population.toLocaleString()} residents, Bartow runs from the Lake Allatoona shoreline through Cartersville (the county seat) down to the Etowah Indian Mounds State Historic Site and out to the historic 1840s-era Adairsville downtown around the Train Depot. Established in ${county.established}, the county combines pre-1940 Cartersville mill housing, the 1840s-era Adairsville historic-downtown, mid-century rural-suburban housing, and 1990s-2010s subdivision growth in southern Bartow toward the Cobb boundary. Pine Mountain and Red Top Mountain State Park anchor the eastern boundary along Lake Allatoona.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across Bartow's mature canopy. Southern flying squirrels appear with notable frequency in older Cartersville mill housing and along Pine Mountain's wooded ridges. Virginia opossums shelter under decks and porches across the older Cartersville and Adairsville inner-town housing. Striped skunks are persistent under sheds and crawl spaces in the rural-edge subdivisions, and snake calls concentrate around the wooded properties along the Etowah River corridor and the Pumpkinvine Creek tributary system. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Bartow County including ${top4cities}, plus Kingston, White, and Taylorsville, and the unincorporated subdivisions throughout the county. The county's mix of pre-1940 Cartersville mill housing, the 1840s-era Adairsville historic-downtown, the Lake Allatoona shoreline lakefront properties, and the rural-suburban transition subdivisions — combined with the Etowah River corridor source population and the proximity to Sweetwater Creek State Park — means contractors here handle a continuous mix of historic-district multi-entry-point exclusion, lakefront multi-structure outbuilding work, and continuous suburban raccoon-and-squirrel residential pressure.`;
    metaTitle = `Bartow County Wildlife Removal — Cartersville, Adairsville GA`;
    metaDescription = `Licensed wildlife removal in Bartow County, GA — Cartersville, Adairsville, Euharlee, Emerson & Kingston. Lake Allatoona coverage. Same-day service.`;

    geo = { lat: 34.2435, lon: -84.8407 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Bartow_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Cobb County',     slug: 'cobb-county',     anchor: 'Cobb County wildlife removal',        blurb: 'directly to the south' },
      { name: 'Cherokee County', slug: 'cherokee-county', anchor: 'Cherokee County wildlife services',   blurb: 'to the east, sharing Lake Allatoona' },
      { name: 'Floyd County',    slug: 'floyd-county',    anchor: 'Floyd County wildlife removal',       blurb: 'to the west' },
      { name: 'Polk County',     slug: 'polk-county',     anchor: 'Polk County animal removal',          blurb: 'to the southwest' },
      { name: 'Gordon County',   slug: 'gordon-county',   anchor: 'Wildlife removal in Gordon County',   blurb: 'to the north' },
    ];

    extendedBody = `
      <h2>Bartow County's Geography Shapes Wildlife Activity</h2>
      <p>Bartow has the largest <strong>Lake Allatoona</strong> shoreline footprint of any county — the lake's main basin runs along the eastern boundary, with <strong>Red Top Mountain State Park</strong> on the lake's eastern shore providing protected hardwood forest habitat. The <strong>Etowah River</strong> cuts east-to-west through the county center, passing the <strong>Etowah Indian Mounds State Historic Site</strong> just south of Cartersville (one of the largest pre-Columbian Mississippian cultural sites in the southeast). The <strong>Allatoona Creek</strong>, <strong>Pumpkinvine Creek</strong>, and Sweetwater Creek (the north-Bartow tributary, distinct from the south-Cobb one) provide additional wildlife travel corridors throughout the county.</p>
      <p>The <strong>Pine Mountain</strong> monadnock anchors the southeastern part of the county, and <strong>Cooper's Furnace Day Use Area</strong> at the south end of Lake Allatoona is one of north Georgia's better bald eagle viewing sites. Bartow's residential housing range — pre-1940 Cartersville mill housing in the original textile-mill area, the 1840s-era Adairsville historic-downtown around the Train Depot, mid-century rural-suburban housing, and the 1990s-2010s subdivision growth in southern Bartow toward the Cobb boundary — produces a wide range of residential wildlife pressure profiles.</p>

      <h2>Wildlife Species Present in Bartow County</h2>
      <p>Bartow residents most frequently call about animals that have moved from the Lake Allatoona shoreline, the Etowah corridor, or the Pumpkinvine Creek tributary system into residential structures:</p>
      <ul class="tips-list">
        <li><strong>Raccoons</strong> — heaviest densities along Lake Allatoona's main basin and the Etowah corridor; female raccoons whelp in Cartersville historic mill-housing chimneys February through April every year</li>
        <li><strong>Eastern gray squirrels</strong> — constant across Bartow's mature canopy</li>
        <li><strong>Southern flying squirrels</strong> — notable in older Cartersville mill housing and along Pine Mountain's wooded ridges</li>
        <li><strong>Roof rats</strong> — establishing in southern Bartow subdivisions and the Hwy 41 corridor as the species expands northward via I-75</li>
        <li><strong>Norway rats</strong> — concentrated in the Cartersville historic-district commercial blocks and the 1840s-era Adairsville historic-downtown around the Train Depot</li>
        <li><strong>Big brown bats</strong> — long-established colonies in pre-1940 Cartersville mill housing and the historic Adairsville Train Depot area</li>
        <li><strong>Evening bats</strong> in older mill-housing blocks</li>
        <li><strong>Virginia opossums</strong>, <strong>striped skunks</strong>, <strong>armadillos</strong> across residential and rural-edge areas</li>
        <li><strong>Bald eagles</strong> nesting at Lake Allatoona's main basin, particularly viewable from Cooper's Furnace Day Use Area</li>
        <li>Snakes encountered residentially are dominated by the <strong>eastern rat snake</strong> and the occasional <strong>northern copperhead</strong>; <strong>brown watersnakes</strong> along the Etowah and Pumpkinvine Creek corridors</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Bartow Job Mix</h2>
      <p>Several patterns in Bartow's call volume are distinctive enough to call out:</p>

      <h3>Lake Allatoona shoreline multi-structure work in Euharlee</h3>
      <p>Euharlee sits directly on Lake Allatoona's southern shore, with lakefront properties having boathouses, dock-side sheds, detached lakefront garages, and screened porches that each represent a separate possible wildlife access route. Effective Euharlee exclusion plans inspect every structure on the property; a colony excluded from one structure frequently relocates to another on the same property.</p>

      <h3>Pre-1940 Cartersville mill-housing multi-entry-point work</h3>
      <p>The original textile-mill housing around the Cartersville mill site, the historic blocks along Tennessee Street, and the older homes along Cherokee Avenue have structural features — original masonry chimneys, hand-laid brick foundations with pointing failures, original wood soffits with corner separation, pre-modern gable louvers — that produce 4-5+ raccoon, bat, and squirrel entry points per property. Long-established big-brown-bat colonies span 30-50+ years.</p>

      <h3>1840s-era Adairsville Train Depot bat colonies</h3>
      <p>The historic 1840s-era downtown around the Adairsville Train Depot and the surrounding pre-1900 brick storefronts and adjacent housing host some of the longest-established big-brown-bat colonies in metro Atlanta — many spanning 50+ years of continuous occupation in original brick storefront construction.</p>

      <h3>Roof rat range expansion in southern Bartow</h3>
      <p>Southern Bartow subdivisions along the Hwy 41 corridor (toward the Cobb boundary) are at the leading edge of roof rat range expansion as the species moves north along I-75. Properties here are seeing roof-rat establishment for the first time, often without homeowners recognizing the species.</p>

      <h2>Federally Protected Species in Bartow's Watersheds</h2>
      <p>The <strong>Cherokee darter</strong> (federally threatened) and the <strong>Etowah darter</strong> (federally endangered) occur in the Etowah and Allatoona Creek systems draining Bartow County. Any work along these corridors is subject to federal habitat protections. <strong>Bald eagles</strong> nest at Lake Allatoona's main basin and are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act; Cooper's Furnace Day Use Area is one of north Georgia's better viewing sites.</p>

      <h2>Local Authorities and Regulations</h2>
      <p>Public-health authority for Bartow County rabies-vector exposure runs through the <strong>Bartow County Health Department</strong>; <strong>Bartow County Animal Services</strong> handles domestic-animal complaints but does not respond to most nuisance wildlife. Commercial wildlife removal in Georgia operates under <strong>Georgia DNR Wildlife Resources Division Region 1</strong> (Armuchee office). Federal protections apply to bats during maternity periods (May-August exclusion restrictions), bald eagles, and the federally listed Cherokee and Etowah darters.`;

    faqs = [
      {
        q: 'What wildlife is most common in Bartow County, Georgia?',
        a: 'In residential calls across Bartow County, eastern gray squirrels, raccoons, Virginia opossums, and big brown bats make up the bulk of attic and yard intrusions. Roof rats are establishing in southern Bartow subdivisions; Norway rats remain dominant in older Cartersville and Adairsville commercial corridors. Lake Allatoona shoreline properties see heavy raccoon and bat pressure from the wooded shoreline source population. Long-established big-brown-bat colonies span 30-50+ years in pre-1940 Cartersville mill housing and the 1840s-era Adairsville Train Depot area. Snake calls concentrate along the Etowah corridor and Pumpkinvine Creek.'
      },
      {
        q: 'Are raccoons more common on Lake Allatoona properties in Euharlee?',
        a: 'Yes, measurably. Lake Allatoona\'s shoreline forest sustains one of the densest year-round raccoon source populations in north Georgia, and Euharlee lakefront properties take continuous pressure from this source. Year-round protein subsidy from shoreline foraging produces 15-25+ lb adult raccoons. Female raccoons specifically select lakefront attics over natural den sites during spring whelping. Properties with boathouses, screened porches, and dock-attached structures see raccoon presence even when the main house is well sealed — multi-structure exclusion is the rule for Euharlee lakefront work.'
      },
      {
        q: 'How old are bat colonies in Cartersville mill housing?',
        a: 'Cartersville pre-1940 mill-housing chimney colonies are routinely 30-50+ years old by the time homeowners first notice activity. Big brown bat daughters return to their natal roosts to whelp, so colony memory is multigenerational and persists across changes in property ownership. The first noticeable sign is typically guano accumulation on siding below an entry point, a single bat appearing in living space, or summer-time odor from the attic. The 1840s-era Adairsville Train Depot area hosts colonies that span 50+ years of continuous occupation in some original brick storefronts.'
      },
      {
        q: 'Is roof rat pressure new to southern Bartow?',
        a: 'Relatively. Roof rats moved up the I-75 corridor from peninsular Florida during the 2000s-2010s and are now establishing in southern Bartow subdivisions along the Hwy 41 corridor. Properties here are seeing roof-rat presence for the first time, often without homeowners recognizing the species — they assume the activity is squirrels or Norway rats. The defining diagnostic is pointed-end half-inch droppings (versus blunt 3/4-inch Norway droppings) and overhead activity in attics and ceiling cavities (versus Norway rat ground-level activity).'
      },
      {
        q: 'When can I evict raccoons from my Bartow County attic?',
        a: 'Female raccoons in Bartow County whelp late February through early May, and kits are immobile and dependent until roughly 8-10 weeks of age. Performing exclusion during that window risks separating mother from kits and trapping kits inside the structure. Right approach during kit season is one-way doors that let the family exit but not re-enter, deployed once kits are mobile. Inspections and entry-point identification can happen any time of year. Lake Allatoona shoreline properties may need wider perimeter exclusion than typical because of the continuous source-population pressure.'
      },
      {
        q: 'What are the legal restrictions on bat removal in Bartow County?',
        a: 'Georgia DNR Wildlife Resources Division regulations restrict bat exclusion during the maternity season — typically May through August — when non-flying pups are present. All bat exclusion in Georgia must use one-way valves, not trapping; trapping bats is essentially banned because the species are protected under both state and federal regulations. Long-established Cartersville mill-housing colonies and Adairsville Train Depot-area colonies require careful staged exclusion in the legal April or September-October windows. Bartow contractors hold the required Georgia DNR Region 1 licensing.'
      },
      {
        q: 'How much does wildlife removal cost in Bartow County?',
        a: 'Pricing varies by species and exclusion scope. Pre-1940 Cartersville mill-housing raccoon jobs run $700-$1,800+ because of multi-entry-point profiles. Long-established Cartersville and Adairsville bat colonies run $2,500-$5,000+ once full guano remediation is included. Euharlee lakefront multi-structure jobs (main house plus boathouse plus detached garage) frequently run $3,000-$6,000+. Newer southern Bartow subdivision roof-rat jobs typically run $400-$900+. The variable is exclusion scope and remediation.'
      },
      {
        q: 'Are there protected species in Bartow County I should be aware of?',
        a: 'Yes. The Cherokee darter (federally threatened) and the Etowah darter (federally endangered) occur in the Etowah and Allatoona Creek systems. Any work along these corridors is subject to federal habitat protections. Bald eagles nest at Lake Allatoona\'s main basin and are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act — Cooper\'s Furnace Day Use Area is one of north Georgia\'s better viewing sites. All bats are protected by Georgia DNR regulations during maternity season (May-August). Migratory birds require federal Migratory Bird Treaty Act permits for any active take.'
      }
    ];

  } else if (countyName === 'Coweta County') {
    blockA = `Coweta County sits in the southwestern metropolitan Atlanta exurban arc, with the Chattahoochee River along its western boundary and I-85 cutting north-south through the county center. With a population of ${county.population.toLocaleString()} residents, Coweta runs from the historic Newnan downtown core (locally known as the "City of Homes" for its exceptional density of antebellum and Victorian residences) through the surrounding 1990s-2010s subdivision growth corridor and out to Senoia's pre-1900 brick storefronts (used as a filming location for The Walking Dead). Established in ${county.established}, the county combines pre-1860 Newnan historic housing, mid-century Senoia and rural-edge construction, and the explosive I-85 corridor subdivision growth from the past 30 years.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across Coweta's mature canopy, with twin breeding-cycle peaks driving twin call peaks. Southern flying squirrels appear with notable frequency in older Newnan and Senoia historic-district housing. Virginia opossums shelter under decks and porches across the older inner-Newnan housing stock. Striped skunks are persistent under sheds and crawl spaces in the rural-edge subdivisions, and snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate around the wooded properties along the Chattahoochee River corridor. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Coweta County including ${top4cities}, plus Moreland, Turin, and Haralson, and the unincorporated subdivisions throughout the county. The county's mix of pre-1860 Newnan "City of Homes" antebellum and Victorian historic housing, the pre-1900 Senoia historic district, mid-century rural-edge construction, and the 1990s-2010s I-85 corridor subdivision growth — combined with the Chattahoochee River source population — means contractors here handle a continuous mix of historic-district multi-entry-point exclusion, suburban roof-rat work, and continuous raccoon-and-squirrel residential pressure.`;
    metaTitle = `Coweta County Wildlife Removal — Newnan, Senoia GA`;
    metaDescription = `Licensed wildlife removal in Coweta County, GA — Newnan, Senoia, Sharpsburg, Grantville. Same-day humane service. Call now.`;

    geo = { lat: 33.3793, lon: -84.7641 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Coweta_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Fulton County',     slug: 'fulton-county',     anchor: 'Fulton County wildlife removal',      blurb: 'directly to the north' },
      { name: 'Douglas County',    slug: 'douglas-county',    anchor: 'Douglas County wildlife services',    blurb: 'to the northwest' },
      { name: 'Fayette County',    slug: 'fayette-county',    anchor: 'Fayette County wildlife services',    blurb: 'to the east' },
      { name: 'Carroll County',    slug: 'carroll-county',    anchor: 'Carroll County animal removal',       blurb: 'to the west' },
      { name: 'Heard County',      slug: 'heard-county',      anchor: 'Heard County wildlife removal',       blurb: 'to the southwest' },
      { name: 'Meriwether County', slug: 'meriwether-county', anchor: 'Wildlife removal in Meriwether County', blurb: 'to the south' },
    ];

    extendedBody = `
      <h2>Coweta County's Geography Shapes Wildlife Activity</h2>
      <p>Coweta sits at the southwestern edge of metro Atlanta's commuter belt, with the <strong>Chattahoochee River</strong> forming the entire western boundary and <strong>I-85</strong> cutting north-south through the county center. The river corridor sustains a continuous year-round raccoon source population that disperses into adjacent western Coweta subdivisions; tributary creeks (<strong>Whitewater Creek</strong>, <strong>Yellow Jacket Creek</strong>, <strong>Cedar Creek</strong>) reinforce wildlife travel habitat throughout the county.</p>
      <p>Newnan's historic downtown — the central <strong>Newnan square</strong> and the surrounding antebellum and Victorian residences that earned the city the local nickname "<strong>City of Homes</strong>" — has one of metro Atlanta's highest concentrations of pre-1860 substantially-built housing. The pre-1900 <strong>Senoia historic district</strong> in the eastern part of the county (used as a filming location for <em>The Walking Dead</em>) provides similar pre-1900 brick storefront and worker housing. The combination of these two historic cores plus 1990s-2010s I-85 corridor subdivision growth produces metro Atlanta's widest residential wildlife-pressure profile range in a southern county.</p>

      <h2>Wildlife Species Present in Coweta County</h2>
      <p>Coweta residents most frequently call about animals that have moved from the Chattahoochee corridor or the Whitewater/Yellow Jacket Creek tributary system into residential structures:</p>
      <ul class="tips-list">
        <li><strong>Raccoons</strong> — heaviest densities along the Chattahoochee corridor; female raccoons whelp in Newnan "City of Homes" antebellum-era masonry chimneys February through April every year</li>
        <li><strong>Eastern gray squirrels</strong> — constant across the county's mature canopy; <strong>Southern flying squirrels</strong> in older Newnan and Senoia historic-district housing</li>
        <li><strong>Roof rats</strong> — establishing in southern Coweta subdivisions and along the I-85 corridor as the species expands northward</li>
        <li><strong>Norway rats</strong> — concentrated in pre-1860 Newnan historic-square commercial blocks and pre-1900 Senoia historic-downtown</li>
        <li><strong>Big brown bats</strong> — long-established colonies in pre-1860 Newnan "City of Homes" antebellum chimneys (some 30-50+ years of continuous occupation) and pre-1900 Senoia historic brick storefronts</li>
        <li><strong>Evening bats</strong> in older Newnan and Senoia housing</li>
        <li><strong>Virginia opossums</strong>, <strong>striped skunks</strong>, <strong>armadillos</strong> across residential and rural-edge areas</li>
        <li>Snakes encountered residentially are dominated by the <strong>eastern rat snake</strong> with the occasional <strong>northern copperhead</strong>; <strong>brown watersnakes</strong> along the Chattahoochee corridor</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Coweta Job Mix</h2>
      <p>Several patterns in Coweta's call volume are distinctive enough to call out:</p>

      <h3>Newnan "City of Homes" antebellum and Victorian multi-entry-point work</h3>
      <p>Newnan's historic-downtown housing has structural features — original masonry chimneys without modern caps, hand-laid brick foundations with pointing failures, original wood soffits, pre-modern gable louvers without screen backing — that produce 4-5+ raccoon, bat, and squirrel entry points per property. Custom-fabricated stainless-steel chimney caps for pre-1860 chimneys are typical scope items, and licensed-electrician follow-up is required where chewed wiring is found on the older Romex.</p>

      <h3>Senoia pre-1900 historic district bat and Norway rat work</h3>
      <p>The Senoia historic district's pre-1900 brick storefronts and adjacent worker housing host long-established big-brown-bat colonies and persistent Norway rat populations. The historic-district housing-and-commercial mix produces the same multi-decade colony profile as Newnan's downtown core.</p>

      <h3>I-85 corridor roof-rat establishment</h3>
      <p>Southern Coweta subdivisions along the I-85 corridor (toward the Cobb and Fulton boundaries) are at the leading edge of roof rat range expansion as the species moves north along I-85. Properties along the corridor are seeing roof-rat establishment in 1990s-2010s subdivision construction.</p>

      <h2>Local Authorities and Regulations</h2>
      <p>Public-health authority for Coweta County rabies-vector exposure runs through the <strong>Coweta County Health Department</strong>; <strong>Coweta County Animal Control</strong> handles domestic-animal complaints but does not respond to most nuisance wildlife. Commercial wildlife removal in Georgia operates under <strong>Georgia DNR Wildlife Resources Division Region 4</strong> (Fort Valley office) for southern Coweta and Region 1 for the northern portions. Federal protections apply to bats during maternity periods (May-August exclusion restrictions) and all migratory birds.`;

    faqs = [
      {
        q: 'What wildlife is most common in Coweta County, Georgia?',
        a: 'In residential calls across Coweta County, eastern gray squirrels, raccoons, Virginia opossums, and big brown bats make up the bulk of attic and yard intrusions. Pre-1860 Newnan "City of Homes" antebellum and Victorian housing hosts long-established big-brown-bat colonies in original masonry chimneys. Roof rats are establishing in southern Coweta subdivisions along the I-85 corridor; Norway rats remain dominant in Newnan and Senoia historic-downtown commercial blocks. Snake calls concentrate along the Chattahoochee corridor.'
      },
      {
        q: 'Why is Newnan called the "City of Homes"?',
        a: "Newnan has one of metro Atlanta's highest concentrations of pre-1860 substantially-built housing — antebellum and Victorian residences clustered around the central courthouse square and along the surrounding streets. The historic-district housing density is unusual in metro Atlanta, and the structural features of pre-1860 housing (original masonry chimneys, hand-laid brick foundations, original wood soffits, pre-modern gable louvers) make Newnan a wildlife-pressure pocket that's closer to Marietta or Roswell historic district patterns than to typical Coweta suburban housing."
      },
      {
        q: 'How old are the bat colonies in Newnan historic homes?',
        a: 'Newnan "City of Homes" antebellum-era chimney colonies are routinely 30-50+ years old by the time homeowners first notice activity. Big brown bat daughters return to their natal roosts to whelp, so colony memory is multigenerational and persists across changes in property ownership. Senoia historic-district colonies span similar timeframes. Long-established colonies produce inches of accumulated guano, requiring HEPA-equipped decontamination.'
      },
      {
        q: 'Are roof rats new to Coweta County?',
        a: 'Relatively. Roof rats moved up the I-85 corridor from peninsular Florida during the 2010s and are now establishing in southern Coweta subdivisions. Properties here are seeing roof-rat presence for the first time, often without homeowners recognizing the species — they assume the activity is squirrels or Norway rats. The defining diagnostic is pointed-end half-inch droppings (versus blunt 3/4-inch Norway droppings) and overhead activity in attics and ceiling cavities.'
      },
      {
        q: 'When can I evict raccoons from my Coweta County attic?',
        a: 'Female raccoons in Coweta County whelp late February through early May, and kits are immobile and dependent until roughly 8-10 weeks of age. Performing exclusion during that window risks separating mother from kits and trapping kits inside the structure. Right approach during kit season is one-way doors that let the family exit but not re-enter, deployed once kits are mobile. Inspections and entry-point identification can happen any time of year.'
      },
      {
        q: 'How much does wildlife removal cost in Coweta County?',
        a: 'Pre-1860 Newnan "City of Homes" historic-district raccoon jobs run $700-$1,800+ because of multi-entry-point profiles. Long-established Newnan and Senoia bat colonies run $2,500-$5,000+ once full guano remediation is included. Suburban roof-rat jobs in southern Coweta subdivisions typically run $400-$900+. Single-animal squirrel trap-and-release at one-entry-point homes is the floor.'
      },
      {
        q: 'Is wildlife removal regulated in Coweta County?',
        a: 'Yes. State-level oversight comes from the Georgia DNR Wildlife Resources Division (Region 4 Fort Valley office for southern Coweta, Region 1 for northern portions), which issues the Trapping License and Nuisance Wildlife Control Permit required for commercial operators. Federal protections apply to bats during maternity periods and all migratory birds. Coweta County Animal Control handles domestic-animal calls but does not respond to most nuisance wildlife — those calls are referred to licensed private operators.'
      }
    ];

  } else if (countyName === 'Fayette County') {
    blockA = `Fayette County sits in the southern metropolitan Atlanta suburban arc, anchored by the distinctive planned community of Peachtree City and the historic county seat of Fayetteville. With a population of ${county.population.toLocaleString()} residents, Fayette runs from the multiple-reservoir geography of Peachtree City (Lake Peachtree, Lake Kedron, Lake McIntosh) and its 100+ mile golf-cart path network through Fayetteville's older historic-downtown core out to the smaller communities of Tyrone, Brooks, and Woolsey. Established in ${county.established}, the county combines pre-1900 Fayetteville historic housing, the highly distinctive Peachtree City master-planned community pattern (1970s-1990s development around three reservoirs), and mid-century rural housing in Tyrone and southern Fayette.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across Fayette's mature canopy. Southern flying squirrels appear with notable frequency in older Fayetteville historic-district housing. Virginia opossums shelter under decks and porches across the older Fayetteville inner-town housing and along the Peachtree City greenspace network. Striped skunks are persistent in the wooded greenspace edges, and snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate around the lake-edge properties and along the Whitewater Creek corridor. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Fayette County including ${top4cities}, plus Brooks and Woolsey, and the unincorporated areas across the county. The county's mix of the Peachtree City master-planned community geography (multiple reservoirs, 100+ mile golf-cart path greenspace network), Fayetteville's pre-1900 historic-downtown core, and the smaller mid-century communities — combined with the lake-edge raccoon source populations and the cart-path-corridor wildlife travel network — means contractors here handle a uniquely mixed call profile compared to typical south-metro counties.`;
    metaTitle = `Fayette County Wildlife Removal — Peachtree City, Fayetteville GA`;
    metaDescription = `Licensed wildlife removal in Fayette County, GA — Peachtree City, Fayetteville, Tyrone & Brooks. Lake corridor coverage. Same-day service.`;

    geo = { lat: 33.4115, lon: -84.4940 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Fayette_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Fulton County',  slug: 'fulton-county',  anchor: 'Fulton County wildlife removal',      blurb: 'directly to the north' },
      { name: 'Clayton County', slug: 'clayton-county', anchor: 'Clayton County wildlife services',    blurb: 'to the northeast' },
      { name: 'Henry County',   slug: 'henry-county',   anchor: 'Henry County animal removal',         blurb: 'to the east' },
      { name: 'Spalding County',slug: 'spalding-county',anchor: 'Spalding County wildlife removal',    blurb: 'to the south' },
      { name: 'Coweta County',  slug: 'coweta-county',  anchor: 'Wildlife removal in Coweta County',   blurb: 'to the west' },
    ];

    extendedBody = `
      <h2>Fayette County's Distinctive Geography Shapes Wildlife Activity</h2>
      <p>Fayette has metro Atlanta's most distinctive planned-community geography. <strong>Peachtree City</strong> — incorporated in 1959 and developed as a master-planned community through the 1970s-1990s — has three reservoirs (<strong>Lake Peachtree</strong>, <strong>Lake Kedron</strong>, <strong>Lake McIntosh</strong>) integrated into the residential pattern, plus a famous <strong>100+ mile golf-cart path network</strong> that cuts through preserved greenspace connecting most of the city's homes to the lakes. From a wildlife perspective, the cart-path system effectively functions as a continuous wildlife travel corridor — raccoons, bats, squirrels, and roof rats all use the connected canopy and overhead utility lines along the paths to move between properties without ground contact.</p>\n      <p>Beyond Peachtree City, <strong>Fayetteville</strong> (the county seat) has a pre-1900 historic-downtown core around the Fayette County Courthouse, with surrounding historic housing that hosts long-established big-brown-bat colonies. The smaller communities of Tyrone, Brooks, and Woolsey have a mid-century rural-suburban housing profile.</p>

      <h2>Wildlife Species Present in Fayette County</h2>
      <p>Fayette residents most frequently call about animals that have moved from the Peachtree City lake corridors, the Whitewater Creek system, or the Fayetteville historic district into residential structures:</p>
      <ul class="tips-list">
        <li><strong>Raccoons</strong> — heaviest densities along Lake Peachtree, Lake Kedron, and Lake McIntosh shorelines; year-round protein subsidy from shoreline foraging produces 15-25+ lb adults common in lakefront properties</li>
        <li><strong>Eastern gray squirrels</strong> — constant across the county; <strong>Southern flying squirrels</strong> in older Fayetteville historic-district housing and along the Peachtree City cart-path greenspace</li>
        <li><strong>Roof rats</strong> — dominant species in Peachtree City's now-mature 1970s-1990s subdivision construction; the cart-path canopy plus overhead utility infrastructure provides ideal connectivity</li>
        <li><strong>Norway rats</strong> — concentrated in pre-1900 Fayetteville historic-downtown commercial blocks</li>
        <li><strong>Big brown bats</strong> — long-established colonies in pre-1900 Fayetteville historic-downtown housing; multi-decade colonies common</li>
        <li><strong>Virginia opossums</strong>, <strong>striped skunks</strong>, <strong>armadillos</strong> across residential and rural-edge areas</li>
        <li><strong>White-tailed deer</strong> at exceptional densities throughout Peachtree City because of the preserved greenspace and limited deer hunting</li>
        <li><strong>Urban coyotes</strong> firmly established in the Peachtree City greenspace network</li>
        <li>Snakes encountered residentially are dominated by the <strong>eastern rat snake</strong> with the occasional <strong>northern copperhead</strong>; <strong>brown watersnakes</strong> along the lake corridors</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Fayette Job Mix</h2>
      <p>Several patterns in Fayette's call volume are distinctive enough to call out:</p>

      <h3>Peachtree City lake-corridor raccoon and roof-rat work</h3>
      <p>The three Peachtree City reservoirs (Lake Peachtree, Lake Kedron, Lake McIntosh) sustain dense year-round raccoon source populations along the lakeshore forest. Lake-adjacent properties take continuous fall dispersal pressure during the September-November window. The same lakefront construction features that support raccoons (boathouses, screened porches, dock-side outbuildings) also host bat colonies and roof-rat populations.</p>

      <h3>Cart-path greenspace as a wildlife travel corridor</h3>
      <p>Peachtree City's 100+ miles of golf-cart paths cut through preserved greenspace connecting the city's residential subdivisions to the lakes. From a wildlife perspective, this greenspace network functions as a continuous travel corridor — roof rats, raccoons, opossums, and skunks all use the connected canopy and overhead utility lines to move between properties without ground contact. Neighbor-to-neighbor reinfestation along the cart-path corridor is the defining Peachtree City rat-call pattern.</p>

      <h3>Pre-1900 Fayetteville historic-downtown bat colonies</h3>
      <p>The pre-1900 Fayetteville historic-downtown housing around the Fayette County Courthouse hosts long-established big-brown-bat colonies, with many spanning 30-50+ years of continuous occupation in original masonry chimneys and pre-modern gable louvers.</p>

      <h3>Peachtree City white-tailed deer overpopulation</h3>
      <p>The combination of preserved greenspace, the cart-path network providing safe nighttime browsing routes, and limited deer hunting in the master-planned community has produced exceptional white-tailed deer densities in Peachtree City. Most management is non-lethal — habitat modification, deterrent fencing, fertility control studies — though USDA permits for population reduction are issued in some cases.</p>

      <h2>Local Authorities and Regulations</h2>
      <p>Public-health authority for Fayette County rabies-vector exposure runs through the <strong>Fayette County Department of Public Health</strong>; <strong>Fayette County Animal Control</strong> handles domestic-animal complaints but does not respond to most nuisance wildlife. Commercial wildlife removal in Georgia operates under <strong>Georgia DNR Wildlife Resources Division Region 4</strong> (Fort Valley office). Federal protections apply to bats during maternity periods (May-August exclusion restrictions) and all migratory birds.`;

    faqs = [
      {
        q: 'What wildlife is most common in Fayette County, Georgia?',
        a: "In residential calls across Fayette County, eastern gray squirrels, raccoons, Virginia opossums, and big brown bats make up the bulk of attic and yard intrusions. Peachtree City's lake corridors (Lake Peachtree, Lake Kedron, Lake McIntosh) sustain dense raccoon and bat populations. Roof rats dominate Peachtree City's 1970s-1990s subdivision construction. White-tailed deer reach exceptional densities throughout Peachtree City because of the preserved greenspace. Pre-1900 Fayetteville historic-downtown housing hosts long-established big-brown-bat colonies."
      },
      {
        q: 'Why is wildlife pressure so high in Peachtree City?',
        a: 'Three reasons. First, the three reservoirs (Lake Peachtree, Lake Kedron, Lake McIntosh) sustain dense year-round source populations along the lakeshore forest. Second, the 100+ mile golf-cart path network cuts through preserved greenspace and effectively functions as a continuous wildlife travel corridor — roof rats, raccoons, opossums, and skunks use the connected canopy and overhead utility lines to move between properties without ground contact. Third, the master-planned community design has limited deer hunting and produces exceptional white-tailed deer densities.'
      },
      {
        q: 'How old are the bat colonies in Fayetteville historic homes?',
        a: 'Pre-1900 Fayetteville historic-downtown chimney colonies are routinely 30-50+ years old by the time homeowners first notice activity. Big brown bat daughters return to their natal roosts to whelp, so colony memory is multigenerational and persists across changes in property ownership. The first noticeable sign is typically guano accumulation on siding below an entry point, a single bat appearing in living space, or summer-time odor from the attic.'
      },
      {
        q: 'Are raccoons more common on Peachtree City lake properties?',
        a: 'Yes, measurably. Lake Peachtree, Lake Kedron, and Lake McIntosh shoreline forests sustain dense year-round raccoon source populations, and lake-adjacent properties take continuous pressure from this source. Year-round protein subsidy from shoreline foraging produces heavier-than-typical adult raccoons (15-25+ lbs). Female raccoons specifically select lakefront attics over natural den sites during spring whelping. Properties with boathouses, screened porches, and dock-attached structures see raccoon presence even when the main house is well sealed.'
      },
      {
        q: 'When can I evict raccoons from my Fayette County attic?',
        a: 'Female raccoons in Fayette County whelp late February through early May, and kits are immobile and dependent until roughly 8-10 weeks of age. Performing exclusion during that window risks separating mother from kits and trapping kits inside the structure. Right approach during kit season is one-way doors that let the family exit but not re-enter, deployed once kits are mobile. Inspections and entry-point identification can happen any time of year.'
      },
      {
        q: 'Are coyotes a problem in Peachtree City?',
        a: 'Yes — urban coyotes are now firmly established in the Peachtree City greenspace network. The combination of preserved greenspace, the cart-path corridor system, and the limited deer hunting that has produced exceptional white-tailed deer densities has also produced ideal coyote habitat. Most calls are driven by missing cats, daytime sightings near the cart paths, or den activity in stormwater easements. Resolutions typically combine hazing, removing food sources, and disrupting den sites.'
      },
      {
        q: 'How much does wildlife removal cost in Fayette County?',
        a: 'Pricing varies by species and exclusion scope. Pre-1900 Fayetteville historic-downtown raccoon jobs run $700-$1,800+ because of multi-entry-point profiles. Long-established Fayetteville bat colonies run $2,500-$5,000+ once full guano remediation is included. Peachtree City lakefront properties with multi-structure colonies (main house plus boathouse) frequently run $3,000-$6,000+. Suburban Peachtree City roof-rat jobs typically run $400-$1,000+.'
      },
      {
        q: 'Is wildlife removal regulated in Fayette County?',
        a: 'Yes. State-level oversight comes from the Georgia DNR Wildlife Resources Division (Region 4, Fort Valley office), which issues the Trapping License and Nuisance Wildlife Control Permit required for commercial operators. Federal protections apply to bats during maternity periods (May-August exclusion restrictions) and all migratory birds (Canada geese, owls, hawks, woodpeckers). Fayette County Animal Control handles domestic-animal calls but does not respond to most nuisance wildlife.'
      }
    ];

  } else if (countyName === 'Gwinnett County') {
    blockA = `Gwinnett County is the second-most populous county in Georgia at ${county.population.toLocaleString()} residents and the geographic center of metro Atlanta's eastern arc. The county runs from <strong>Lake Lanier</strong> on the northern boundary down through the major suburban cities of Sugar Hill, Suwanee, Duluth, Lawrenceville (the county seat), and Peachtree Corners to Snellville and Norcross at the southern edges. The <strong>Yellow River</strong> cuts diagonally through the county center, the <strong>Chattahoochee River</strong> forms the western boundary, and <strong>Buford Dam</strong> at the southern end of Lake Lanier is one of the more important wildlife-corridor anchors in north Georgia. Established in ${county.established}, Gwinnett combines the pre-1900 Lawrenceville historic-square housing, the 1870-established Norcross historic-downtown, mid-century post-war ranches, and the massive 1980s-2010s subdivision growth that transformed the county into one of metro Atlanta's largest residential markets.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across Gwinnett's mature canopy. Southern flying squirrels appear with notable frequency in older Lawrenceville and Norcross historic-district housing. Virginia opossums shelter under decks and porches across the older inner-town housing stock and mid-century post-war ranches. Striped skunks are persistent under sheds and crawl spaces, and snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate along the Yellow River corridor, the Chattahoochee corridor, and the Buford Highway commercial-residential transition zones. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Gwinnett County including ${top4cities}, plus Sugar Hill, Suwanee, Norcross, Lilburn, Dacula, Grayson, Berkeley Lake, Loganville, and Auburn. The county's mix of pre-1900 Lawrenceville historic-square housing, 1870-established Norcross historic-downtown, mid-century post-war ranch housing, and the 1980s-2010s tech-corridor and growth-era subdivisions — combined with the Lake Lanier and Yellow River source populations and the Buford Highway commercial corridor's restaurant ecology — means contractors here handle the metro's most diverse residential wildlife call profile.`;
    metaTitle = `Gwinnett County Wildlife Removal — Lawrenceville, Duluth GA`;
    metaDescription = `Licensed wildlife removal in Gwinnett County, GA — Lawrenceville, Duluth, Peachtree Corners, Sugar Hill, Suwanee & Snellville. Same-day humane service.`;

    geo = { lat: 33.9598, lon: -84.0231 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Gwinnett_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Fulton County',   slug: 'fulton-county',   anchor: 'Fulton County wildlife removal',      blurb: 'directly to the west' },
      { name: 'DeKalb County',   slug: 'dekalb-county',   anchor: 'DeKalb County wildlife services',     blurb: 'to the southwest' },
      { name: 'Forsyth County',  slug: 'forsyth-county',  anchor: 'Forsyth County animal removal',       blurb: 'to the north, sharing Lake Lanier' },
      { name: 'Hall County',     slug: 'hall-county',     anchor: 'Hall County wildlife removal',        blurb: 'to the north, sharing Lake Lanier' },
      { name: 'Walton County',   slug: 'walton-county',   anchor: 'Wildlife removal in Walton County',   blurb: 'to the southeast' },
    ];

    extendedBody = `
      <h2>Gwinnett County's Geography Shapes Wildlife Activity</h2>
      <p>Gwinnett's geography combines three major water-corridor source populations with the densest restaurant-corridor commercial ecology in metro Atlanta. <strong>Lake Lanier</strong> on the northern boundary (with Buford Dam at the southern end of the lake) sustains a substantial year-round shoreline raccoon and bat source population. The <strong>Chattahoochee River</strong> forms the western boundary, with the <strong>Chattahoochee River National Recreation Area's Jones Bridge and Holcomb Bridge units</strong> directly on the Gwinnett-Fulton boundary. The <strong>Yellow River</strong> cuts diagonally through the county center, and tributary creeks (<strong>Suwanee Creek</strong>, <strong>Big Haynes Creek</strong>, the north-Gwinnett <strong>Sweetwater Creek</strong>) reinforce wildlife travel habitat throughout the county.</p>
      <p>The <strong>Buford Highway corridor</strong> running through the southwestern portion of the county is one of the most ethnically diverse restaurant rows in the southeast — Korean, Vietnamese, Mexican, Chinese, Indian, Ethiopian, and Latin American restaurants serving the broader Gwinnett population. The corridor's continuous canopy and dumpster ecology sustain year-round Norway rat populations at densities significantly above the suburban-Georgia average. Gwinnett's residential housing range — pre-1900 Lawrenceville historic-square housing, 1870-established Norcross historic-downtown, mid-century post-war ranches, and the 1980s-2010s tech-corridor subdivisions — produces metro Atlanta's most diverse residential wildlife pressure profile.</p>

      <h2>Wildlife Species Present in Gwinnett County</h2>
      <p>Gwinnett residents most frequently call about animals that have moved from the Lake Lanier shoreline, the Yellow River corridor, the Chattahoochee corridor, or the Buford Highway commercial ecology into residential structures:</p>
      <ul class="tips-list">
        <li><strong>Raccoons</strong> — heaviest densities along Lake Lanier and the Chattahoochee corridor; female raccoons whelp in Lawrenceville historic-square chimneys February through April every year</li>
        <li><strong>Eastern gray squirrels</strong> — constant across the entire county; <strong>Southern flying squirrels</strong> in older Lawrenceville and Norcross historic-district housing</li>
        <li><strong>Roof rats</strong> — dominant species in suburban Sugar Hill, Suwanee, Peachtree Corners, Dacula, and most of Duluth; entered the metro via I-85 during the 2000s-2010s</li>
        <li><strong>Norway rats</strong> — highest density along the Buford Highway corridor; also concentrated in pre-1900 Lawrenceville historic-square commercial blocks and 1870-established Norcross historic-downtown</li>
        <li><strong>Big brown bats</strong> — long-established colonies in pre-1900 Lawrenceville historic-square housing and 1870 Norcross historic-downtown; many spanning 30-50+ years</li>
        <li><strong>Evening bats</strong> in older Lawrenceville and Norcross housing</li>
        <li><strong>Tricolored bats</strong> (federally proposed for listing) along the Lake Lanier shoreline and the Chattahoochee corridor</li>
        <li><strong>Virginia opossums</strong>, <strong>striped skunks</strong>, <strong>armadillos</strong> across residential and rural-edge areas</li>
        <li><strong>Urban coyotes</strong> increasingly common in older inner-Norcross and Lawrenceville blocks</li>
        <li>Snakes encountered residentially are dominated by the <strong>eastern rat snake</strong> with the occasional <strong>northern copperhead</strong>; <strong>brown watersnakes</strong> along the Yellow River and Chattahoochee corridors</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Gwinnett Job Mix</h2>
      <p>Several patterns in Gwinnett's call volume are distinctive enough to call out:</p>

      <h3>Buford Highway corridor Norway rat ecology</h3>
      <p>The Buford Highway corridor running through Norcross, Doraville (DeKalb), and Duluth's southern edge is one of the densest restaurant-and-commercial corridors in the southeast. Year-round Norway rat populations in restaurant dumpster ecology behind Korean, Vietnamese, Mexican, Chinese, Indian, Ethiopian, and Latin American restaurants disperse into adjacent residential blocks within a quarter-mile of the corridor. BC corridor-adjacent properties often need expanded-perimeter exclusion plans rather than standard single-property treatment.</p>

      <h3>Pre-1900 Lawrenceville historic-square multi-decade bat colonies</h3>
      <p>The Lawrenceville historic-square area around the original Gwinnett Historic Courthouse hosts long-established big-brown-bat maternity colonies in pre-1900 housing — many spanning 30-50+ years of continuous occupation. Original masonry chimneys without modern caps, pre-modern gable louvers, original wood soffits, and original lath-and-plaster wall framing voids all support continuous colony occupation. Long-established colonies produce inches of accumulated guano.</p>

      <h3>1870-established Norcross historic-downtown bat and Norway rat work</h3>
      <p>Norcross was established in 1870 as a railroad town, and the surviving pre-1880 housing along Brunswick Avenue and the surrounding original commercial-and-housing complex hosts both multi-decade big-brown-bat colonies and persistent Norway rat populations. Hand-laid brick foundations with pointing failures, original masonry foundation vents without modern hardware-cloth backing, and the connected canopy across the historic district all support continuous wildlife occupation.</p>

      <h3>Lake Lanier shoreline source-population pressure</h3>
      <p>Lake Lanier's wooded shoreline forest sustains a substantial regional source population that disperses south into Sugar Hill, Suwanee, and Buford properties throughout the active season. Year-round protein subsidy from shoreline foraging produces heavier-than-typical adult raccoons in lake-adjacent properties. Tricolored bats (federally proposed for listing) appear along the lake shoreline with notable regularity.</p>

      <h3>Suburban Gwinnett roof-rat establishment</h3>
      <p>Sugar Hill, Suwanee, Peachtree Corners, Dacula, and most of Duluth saw their major subdivision growth during exactly the period when roof rats moved up the I-85 corridor from peninsular Florida (2000s-2010s). The result is now-mature subdivision canopy plus overhead utility infrastructure providing the connectivity roof rats need. Neighbor-to-neighbor reinfestation via overhead utility runs is the defining suburban Gwinnett rat-call pattern.</p>

      <h2>Federally Protected Species in Gwinnett's Watersheds</h2>
      <p>The federally proposed-for-listing <strong>tricolored bat</strong> (<em>Perimyotis subflavus</em>) appears along the Lake Lanier shoreline and the Chattahoochee corridor with notable regularity; any encounter requires careful protocol because of the federal status. <strong>Bald eagles</strong> remain protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act; they appear along Lake Lanier and the Chattahoochee occasionally. <strong>Migratory birds</strong> including Canada geese, hawks, owls, and woodpeckers are protected under the Migratory Bird Treaty Act.</p>

      <h2>Local Authorities and Regulations</h2>
      <p>Public-health authority for Gwinnett County rabies-vector exposure runs through the <strong>Gwinnett County Health Department</strong>; <strong>Gwinnett County Animal Welfare and Enforcement</strong> handles domestic-animal complaints but does not respond to most nuisance wildlife. Commercial wildlife removal in Georgia operates under <strong>Georgia DNR Wildlife Resources Division Region 2</strong> (Gainesville office). Federal protections apply to bats during maternity periods (May-August exclusion restrictions), all migratory birds, and the federally proposed tricolored bat.`;

    faqs = [
      {
        q: 'What wildlife is most common in Gwinnett County, Georgia?',
        a: 'Gwinnett has the metro\'s most diverse residential wildlife profile because of the Buford Highway corridor commercial ecology, the Lake Lanier shoreline source population, and the wide housing-era range. Norway rats are the dominant species along Buford Highway, in the pre-1900 Lawrenceville historic-square commercial blocks, and in the 1870-established Norcross historic-downtown. Roof rats dominate suburban Sugar Hill, Suwanee, Peachtree Corners, Dacula, and most of Duluth. Big brown bat colonies are long-established in pre-1900 Lawrenceville and Norcross historic-district housing (30-50+ years). Eastern gray squirrels are constant across the county. Tricolored bats appear along Lake Lanier and the Chattahoochee corridor.'
      },
      {
        q: 'Is the Buford Highway corridor making rat problems worse for nearby Gwinnett residents?',
        a: 'Yes, demonstrably for properties within about a quarter-mile of the corridor. Buford Highway\'s restaurant density (Korean, Vietnamese, Mexican, Chinese, Indian, Ethiopian, and Latin American restaurants) sustains year-round Norway rat populations in dumpster ecology behind the restaurants. The corridor\'s continuous travel route between adjacent residential blocks means populations spread laterally even when individual properties are sealed. Properties along the corridor often need expanded-perimeter exclusion plans rather than standard single-property treatment.'
      },
      {
        q: 'How old are bat colonies in Lawrenceville and Norcross historic homes?',
        a: 'Lawrenceville historic-square pre-1900 chimney colonies and Norcross historic-downtown 1870-established commercial-and-housing complex colonies are routinely 30-50+ years old by the time homeowners first notice activity. Big brown bat daughters return to their natal roosts to whelp, so colony memory is multigenerational. The first noticeable sign is typically guano accumulation on siding below an entry point or a single bat appearing in living space. Long-established colonies produce inches of accumulated guano, requiring HEPA-equipped decontamination.'
      },
      {
        q: 'Why do roof rats keep returning to my Gwinnett home?',
        a: 'Suburban Gwinnett\'s continuous mature canopy plus overhead utility infrastructure means roof rats from neighboring properties travel along overhead utility runs without ground contact and replace any rats killed in DIY trapping within weeks. Same-era 1990s-2010s subdivision construction in Sugar Hill, Suwanee, Peachtree Corners, and Dacula means failure modes (gable-vent screens, attic-fan housings, builder-grade chimney chase caps) appear simultaneously across blocks. Durable resolution requires structural exclusion combined with trapping — and sometimes coordinated treatment with adjacent properties for connected-canopy neighborhoods.'
      },
      {
        q: 'Are raccoons more common around Lake Lanier?',
        a: 'Yes — Lake Lanier\'s wooded shoreline forest sustains one of the densest year-round raccoon source populations in north Georgia. Sugar Hill, Suwanee, and Buford properties within a mile of the lake take continuous fall dispersal pressure during the September-November window. Year-round protein subsidy from shoreline foraging produces heavier-than-typical adult raccoons. Female raccoons specifically select lakefront residential attics over natural den sites because residential structures provide better climate stability than tree-cavity dens along an actively-used corridor.'
      },
      {
        q: 'When can I evict raccoons from my Gwinnett County attic?',
        a: 'Female raccoons in Gwinnett County whelp late February through early May, and kits are immobile and dependent until roughly 8-10 weeks of age. Performing exclusion during that window risks separating mother from kits and trapping kits inside the structure. Right approach during kit season is one-way doors that let the family exit but not re-enter, deployed once kits are mobile. Inspections and entry-point identification can happen any time of year. Lawrenceville historic-square pre-1900 homes especially require careful timing because the lath-and-plaster construction makes kit-recovery particularly difficult.'
      },
      {
        q: 'How much does wildlife removal cost in Gwinnett County?',
        a: 'Pricing varies by species and exclusion scope. Pre-1900 Lawrenceville historic-square and Norcross historic-downtown raccoon jobs run $700-$1,800+ because of multi-entry-point profiles. Long-established Lawrenceville and Norcross bat colonies run $2,500-$5,000+ once full guano remediation is included. Buford Highway-adjacent Norway rat work with expanded-perimeter exclusion runs $1,500-$3,000+. Suburban roof-rat jobs in Sugar Hill, Suwanee, Peachtree Corners, and Dacula typically run $400-$1,000+. Single-animal squirrel trap-and-release at one-entry-point homes is the floor.'
      },
      {
        q: 'Are there protected species in Gwinnett County I should be aware of?',
        a: 'Yes. The federally proposed tricolored bat (Perimyotis subflavus) appears along Lake Lanier and the Chattahoochee corridor; any encounter requires careful protocol. Bald eagles are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act and appear occasionally along Lake Lanier. All bats are protected by Georgia DNR regulations during maternity season (May-August). Migratory birds (Canada geese, owls, hawks, woodpeckers) require federal Migratory Bird Treaty Act permits for any active take. Licensed contractors are required to know which species can be handled directly and which require specific federal or state permitting.'
      }
    ];

  } else if (countyName === 'DeKalb County') {
    blockA = `DeKalb County sits on the eastern half of the Atlanta metro and shares the city of Atlanta itself with Fulton County. With a population of ${county.population.toLocaleString()}, DeKalb runs from Brookhaven and Dunwoody on the northern Perimeter down through the historic Decatur and Druid Hills core, out to the established 1960s-1980s suburbs of Tucker and Stone Mountain, and into the newer 1990s-2010s subdivisions of Stonecrest and Lithonia in the southeast. Established in ${county.established} and named for Revolutionary War general Baron Johann de Kalb, the county combines metro Atlanta's densest concentration of pre-WWII intown housing — including the Olmsted-designed Druid Hills district and the 1920s craftsman-bungalow neighborhoods of Decatur, Oakhurst, Avondale Estates, Candler Park, Kirkwood, and East Atlanta — with the granite-outcrop habitat of Stone Mountain Park and the Davidson-Arabia Mountain National Heritage Area on the eastern and southern edges.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across the century-old Olmsted canopy in Druid Hills and Decatur, with twin breeding-cycle peaks in February-March and August-September driving twin call peaks. Southern flying squirrels are a notably well-established secondary population in the older attic spaces through Druid Hills, Decatur, Avondale Estates, Candler Park, and Kirkwood — and homeowners frequently don't know the colonies are there until a contractor's inspection finds them. Big brown bat maternity colonies routinely form in the pre-WWII brick-and-frame housing stock around the Decatur historic district, the Druid Hills core, the Avondale Estates English Tudor blocks, and the older Brookhaven sections. Roof rat pressure across intown DeKalb is among the highest in metro Atlanta, driven by restaurant-district food density in Decatur Square, Avondale Estates, East Atlanta Village, and Brookhaven Village. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of DeKalb County including ${top4cities}, plus Doraville, Clarkston, Avondale Estates, Pine Lake, Lithonia, and Stonecrest, and the unincorporated DeKalb portions of Druid Hills, Candler Park, Kirkwood, East Atlanta, and Lake Claire. The county's mix of pre-WWII intown historic housing, mature Olmsted canopy, granite-outcrop habitat at Stone Mountain and Arabia Mountain, and dense restaurant-district food pressure — combined with the year-round wildlife activity that defines metro Atlanta — means contractors here handle a continuous mix of attic exclusion, flying squirrel colony work, big brown bat exclusion, and high-volume roof rat remediation.`;
    metaTitle = `DeKalb County Wildlife Removal — Decatur, Brookhaven, Dunwoody GA`;
    metaDescription = `Licensed wildlife removal in DeKalb County, GA — Decatur, Brookhaven, Dunwoody, Tucker & Stone Mountain. Raccoons, bats, rats, flying squirrels — call for same-day.`;

    geo = { lat: 33.77, lon: -84.23 };
    sameAs = [
      'https://en.wikipedia.org/wiki/DeKalb_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Fulton County',   slug: 'fulton-county',   anchor: 'Wildlife removal in Fulton County',   blurb: 'shares the city of Atlanta along the western boundary' },
      { name: 'Gwinnett County', slug: 'gwinnett-county', anchor: 'Gwinnett County animal services',     blurb: 'directly to the northeast' },
      { name: 'Rockdale County', slug: 'rockdale-county', anchor: 'Rockdale County wildlife services',   blurb: 'to the east, across the Yellow River' },
      { name: 'Henry County',    slug: 'henry-county',    anchor: 'Henry County wildlife removal',       blurb: 'to the southeast' },
      { name: 'Clayton County',  slug: 'clayton-county',  anchor: 'Animal removal in Clayton County',    blurb: 'to the south' },
    ];

    extendedBody = `
      <h2>DeKalb County's Geography Shapes Its Wildlife Activity</h2>
      <p>DeKalb County sits in the rolling Piedmont uplands of the eastern Atlanta metro, anchored on the east by the granite monadnock of <strong>Stone Mountain</strong> (825 feet of exposed granite, the largest exposed granite outcrop in the world) and on the south-southeast by the <strong>Davidson-Arabia Mountain National Heritage Area</strong>, a 2,500-acre granite-outcrop preserve. Between those two granite landmarks runs a residential landscape unlike any other in metro Atlanta — Olmsted-designed neighborhoods from the early 1900s sit directly against 1920s-1940s craftsman bungalows, against 1960s-1980s suburbs ringing Stone Mountain Park, against newer 1990s-2010s subdivisions in Stonecrest and Lithonia. The result is metro Atlanta's most varied housing-era profile, and the wildlife pressure profile varies with it.</p>
      <p>Within or directly bordering the county sit several major public conservation lands: <strong>Stone Mountain Park</strong> (3,200 acres, the most-visited attraction in Georgia), <strong>Davidson-Arabia Mountain National Heritage Area</strong>, <strong>Mason Mill Park</strong> in Decatur, <strong>Lullwater Preserve</strong> at Emory University, the Olmsted-designed <strong>Druid Hills Linear Parks</strong>, and the <strong>Atlanta BeltLine</strong> Eastside trail running through Kirkwood and Lake Claire. The result is a metro Atlanta county where protected habitat sits directly against historic residential blocks, college campuses, and dense restaurant districts — and that interface is what drives DeKalb's residential wildlife removal call volume.</p>

      <h3>Waterways That Move Wildlife Through the County</h3>
      <p>The dominant ecological features running through DeKalb are the <strong>South Fork Peachtree Creek</strong> and <strong>North Fork Peachtree Creek</strong>, which bisect the central county and flow west into the Chattahoochee. The <strong>South River</strong> drains the southern third of the county and ultimately flows into the Ocmulgee. The <strong>Yellow River</strong> forms the eastern boundary with Rockdale County. <strong>Snapfinger Creek</strong>, <strong>Pole Bridge Creek</strong>, and <strong>Stone Mountain Creek</strong> are smaller tributaries that function as residential-edge wildlife corridors. Beavers move through the South River and Snapfinger Creek systems and routinely flood storm-detention infrastructure in the Stonecrest and Lithonia subdivisions. River otters use the lower South River corridor. Around <strong>Stone Mountain Park's</strong> lake and the <strong>Arabia Mountain</strong> ponds, herons, egrets, and migrating waterfowl concentrate seasonally.</p>

      <h2>Wildlife Species Present in DeKalb County</h2>
      <p>DeKalb residents most frequently call about animals that have moved from these natural corridors and granite-outcrop habitats into the residential edge:</p>
      <ul class="tips-list">
        <li><strong>Raccoons</strong> and <strong>Eastern gray squirrels</strong> — the year-round backbone of attic exclusion work countywide</li>
        <li><strong>Southern flying squirrels</strong> — colonial, nocturnal, well-established in the older attic spaces of Druid Hills, Decatur, Avondale Estates, Candler Park, and Kirkwood</li>
        <li><strong>Roof rats</strong> (<em>Rattus rattus</em>) — dominant rodent in intown DeKalb, driven by mature canopy and restaurant-district food density</li>
        <li><strong>Norway rats</strong> (<em>Rattus norvegicus</em>) — heavier in storm-sewer and crawl-space infestations, particularly along the MARTA rail corridor and the South River drainage</li>
        <li><strong>Big brown bats</strong> and <strong>evening bats</strong> — long-established maternity colonies in pre-WWII intown housing</li>
        <li><strong>Tricolored bats</strong> (<em>Perimyotis subflavus</em>, federally proposed for listing) — documented in the Stone Mountain and Arabia Mountain area</li>
        <li><strong>Virginia opossums</strong>, <strong>striped skunks</strong>, <strong>armadillos</strong> — armadillos in particular are a rapidly growing problem in the southern subdivisions</li>
        <li><strong>Coyotes</strong> — firmly established in Druid Hills, Decatur, the South Fork Peachtree Creek corridor, and the wooded edges around Stone Mountain Park</li>
        <li><strong>White-tailed deer</strong> — abundant in Stone Mountain Park and the wooded edges of Tucker and Stonecrest</li>
        <li>Snakes — primarily the <strong>eastern rat snake</strong> (frequently mistaken for venomous) and the <strong>northern copperhead</strong>, with copperhead encounters concentrated around Stone Mountain Park, Arabia Mountain, and the Lullwater Preserve area at Emory</li>
      </ul>

      <h2>Common Wildlife Issues That Define the DeKalb Job Mix</h2>
      <p>Several patterns in DeKalb's call volume are distinctive enough to call out:</p>

      <h3>Pre-WWII intown attic exclusion in Decatur, Druid Hills, and Avondale Estates</h3>
      <p>The 1900s-1940s craftsman, Tudor, and Colonial Revival housing stock through Decatur, Druid Hills, Avondale Estates, Oakhurst, Candler Park, and Kirkwood is the highest-density historic residential zone in metro Atlanta and the highest-pressure submarket for raccoon, squirrel, and bat work in DeKalb. Brick chimneys with deteriorated mortar, wood gable vents, original slate or wood-shingle roofs with gaps at flashing, and complex pre-war architectural detail combine to produce entry-point profiles that look nothing like new construction. <strong>Most exclusion jobs in this submarket find 4-6+ entry points</strong>, and structural repair beyond standard sealing is usually required.</p>

      <h3>Flying squirrel colonies in older intown housing</h3>
      <p>Southern flying squirrel (<em>Glaucomys volans</em>) colonies are well-established across the older intown housing through Druid Hills, Decatur, Avondale Estates, Candler Park, and Kirkwood. They're nocturnal and colonial, and homeowners frequently don't know they're there until an inspection finds the colony — or until a fire investigation traces ignition to chewed wiring. Any DeKalb attic inspection should explicitly look for both gray squirrel and flying squirrel sign.</p>

      <h3>Big brown bat maternity colonies in historic chimneys and gable vents</h3>
      <p>Long-established big brown bat colonies of 10-50 individuals are routine in the pre-WWII Decatur, Druid Hills, Brookhaven, and Avondale Estates housing stock — many colonies have been continuous in the same chimney or attic for 20-30+ years. Georgia DNR restricts active exclusion during the maternity period (roughly May through August) to protect non-volant pups, so most exclusion work is scheduled in April or September-October.</p>

      <h3>Roof rat pressure from intown restaurant districts</h3>
      <p><strong>Roof rats</strong> (<em>Rattus rattus</em>) drive most of intown DeKalb's rodent call volume. Restaurant-district concentrations at Decatur Square, Avondale Estates, East Atlanta Village, Brookhaven Village, and the Emory Village commercial node sustain heavy populations that move along mature canopy into adjacent residential blocks. Mixed-species infestations (roof rats in the attic, Norway rats in the basement or crawl space) are routine in older Decatur and Druid Hills properties.</p>

      <h3>Coyote management in Druid Hills, Decatur, and the Peachtree Creek corridor</h3>
      <p>Coyote sightings have become routine across Druid Hills, the Decatur city limits, and the South Fork Peachtree Creek corridor through Lake Claire and Candler Park. Coyotes use the Olmsted-designed park corridors, the BeltLine Eastside trail, and the creek systems as travel routes between intown neighborhoods. Most calls are driven by missing cats, daytime sightings near schools, or den activity in stormwater easements; resolutions typically involve hazing, food-source removal, and den-site disruption rather than lethal control.</p>

      <h2>Federally Protected Species in DeKalb</h2>
      <p>The <strong>tricolored bat</strong> (<em>Perimyotis subflavus</em>), federally proposed for listing under the Endangered Species Act because of white-nose syndrome impact, is documented in the Stone Mountain and Davidson-Arabia Mountain habitats. The <strong>little brown bat</strong> (<em>Myotis lucifugus</em>) was historically common across DeKalb but has been drastically reduced by white-nose syndrome and is treated as significant on any encounter. <strong>Bald eagles</strong> are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act and occasionally appear along the South River and Stone Mountain Lake. All migratory birds — Canada geese, owls, hawks, woodpeckers — require federal Migratory Bird Treaty Act permits for any active take.</p>

      <h2>Local Authorities and Regulations</h2>
      <p><strong>DeKalb County Animal Services</strong> handles domestic-animal complaints — stray dogs, cat colonies, bite reports — but does not respond to most nuisance wildlife calls. Raccoons, squirrels, bats, snakes, beavers, coyotes, and similar species are referred to private licensed wildlife control operators. The <strong>DeKalb County Board of Health</strong> handles rabies-exposure investigations and coordinates with the Georgia Department of Public Health on potential rabies cases. State-level oversight comes from <strong>Georgia DNR Wildlife Resources Division Region 1</strong> (Armuchee office), which issues the Trapping License and Nuisance Wildlife Control Permit required of commercial operators. Federal protections apply to bats during maternity periods, all migratory birds, and the federally proposed tricolored bat. Every contractor in this directory operating in DeKalb County is required to hold the applicable state and federal credentials.</p>
    `;

    faqs = [
      {
        q: 'What wildlife is most common in DeKalb County, Georgia?',
        a: 'In residential calls across DeKalb County, eastern gray squirrels, raccoons, big brown bats, roof rats, and Virginia opossums make up the bulk of attic and yard intrusions. Southern flying squirrel colonies are a notable secondary species in the older intown housing through Druid Hills, Decatur, Avondale Estates, Candler Park, and Kirkwood. Snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate around Stone Mountain Park, Arabia Mountain, and the Lullwater Preserve area at Emory. Coyotes are firmly established in Druid Hills, Decatur, and the South Fork Peachtree Creek corridor. Larger species — white-tailed deer at Stone Mountain Park, the occasional black bear that wanders through, and alligators along the lower South River — fall under direct Georgia DNR Wildlife Resources Division management rather than the private removal industry.'
      },
      {
        q: 'Why are flying squirrel colonies so common in older Decatur and Druid Hills attics?',
        a: 'Southern flying squirrels (<em>Glaucomys volans</em>) are well-established across the pre-WWII intown housing stock because that era of construction provides exactly the structural conditions they need — accessible attic spaces, mature canopy connecting house to house, and small entry points (a flying squirrel can use a 1-inch gap) that decay over a century of weather exposure. They are nocturnal and colonial, so homeowners frequently don\'t know they\'re there until a contractor inspection finds the colony. Any DeKalb attic inspection should explicitly look for both gray squirrel and flying squirrel sign — finding only one species does not rule out the other in the same attic.'
      },
      {
        q: 'How do I handle a bat in my Decatur or Druid Hills attic?',
        a: 'Don\'t try to handle a bat colony yourself. Bats in Georgia carry rabies risk, are protected by state and federal law during the maternity period, and require specialized exclusion technique to remove without sealing pups inside the structure. DeKalb\'s pre-WWII intown housing — Decatur, Druid Hills, Avondale Estates, Brookhaven historic — is the classic substrate for big brown bat maternity colonies forming in masonry chimneys, wood gable vents, and decayed soffits. Georgia DNR restricts active exclusion during the maternity period (roughly May through August). A licensed contractor will typically schedule work for April or September-October, install one-way exit devices, and seal the structure once the colony is confirmed to have left. Long-established colonies (20-30+ years in the same chimney is not unusual in this submarket) can produce substantial guano accumulation that requires HEPA-equipped decontamination after exclusion.'
      },
      {
        q: 'Why is roof rat pressure so heavy in intown DeKalb?',
        a: 'Three things compound. Mature Olmsted canopy through Druid Hills and Decatur provides continuous arboreal travel routes between properties — roof rats travel through trees the way most homeowners imagine squirrels do. Restaurant-district dumpster pressure in Decatur Square, Avondale Estates, East Atlanta Village, and Brookhaven Village provides concentrated food sources. Pre-WWII housing with original soffit construction, decayed gable-vent screening, and accessible attic spaces provides extensive structural entry-point inventory. The combination puts central DeKalb among the highest roof-rat-pressure submarkets in the metro Atlanta area, with mixed-species infestations (roof rats above, Norway rats below) routine in older properties.'
      },
      {
        q: 'Is wildlife removal regulated in DeKalb County?',
        a: 'Yes. Wildlife removal in DeKalb County operates under three layers of regulation. State-level oversight comes from the Georgia Department of Natural Resources, Wildlife Resources Division (Region 1, Armuchee office), which issues the Trapping License and Nuisance Wildlife Control Permit required for commercial operators. Federal protections apply to bats, all migratory birds (Canada geese, owls, hawks, woodpeckers), and the federally proposed tricolored bat documented in the Stone Mountain and Arabia Mountain habitats. DeKalb County Animal Services handles domestic-animal calls but does not respond to most nuisance wildlife — those calls are referred to licensed private operators. The DeKalb County Board of Health handles rabies-exposure investigations. Every contractor in this directory holds the applicable state and federal credentials.'
      },
      {
        q: 'How much does wildlife removal cost in DeKalb County?',
        a: 'Pricing varies significantly with species and exclusion scope. Pre-WWII Decatur and Druid Hills raccoon work runs $400-$1,200+ because of the multi-entry-point profiles typical in century-old housing. Long-established big brown bat colonies in historic intown chimneys run $1,200-$3,000+ once full guano remediation is included. Mixed-species roof-rat-plus-Norway-rat work in older intown housing runs $800-$2,500+. Flying squirrel colony remediation typically runs $700-$1,800+ because of the larger contaminated insulation footprint. Squirrel and routine raccoon work in newer Stonecrest, Lithonia, and Dunwoody construction runs at the lower end. Estimates are property-specific and free.'
      },
      {
        q: 'When is the best time to handle wildlife exclusion in DeKalb?',
        a: 'For most species in the DeKalb area, the best window for exclusion work is late summer through early spring — roughly August through April. Bat exclusion in particular must be scheduled outside the maternity period (May through August); the two legal windows are April and September through mid-October. Squirrel and raccoon exclusion is best handled outside their main denning seasons, though urgent intrusions can be addressed any time of year using one-way doors that allow animals to exit but not return. Rat work and snake calls run year-round. DeKalb\'s mild winters and dense mature canopy keep wildlife active twelve months a year, particularly in the intown core.'
      },
      {
        q: 'Are there protected species in DeKalb County I should be aware of?',
        a: 'Yes. The federally proposed tricolored bat (<em>Perimyotis subflavus</em>) is documented in the Stone Mountain Park and Davidson-Arabia Mountain habitats; any encounter requires careful protocol. The little brown bat (<em>Myotis lucifugus</em>) has been drastically reduced by white-nose syndrome and is treated as significant on any encounter. Bald eagles are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act. All bats are protected by Georgia DNR regulations during maternity season (May-August). Migratory birds (Canada geese, owls, hawks, woodpeckers) require federal Migratory Bird Treaty Act permits for any active take. Licensed contractors are required to know which species can be handled directly and which require specific federal or state permitting.'
      }
    ];

  } else if (countyName === 'Douglas County') {
    blockA = `Douglas County sits in the western metropolitan Atlanta suburban arc, about 25 miles west of downtown along the I-20 corridor, with the Chattahoochee River forming its eastern boundary and Sweetwater Creek cutting through the county center. With a population of ${county.population.toLocaleString()} residents, Douglas runs from the I-20 corridor and Douglasville's historic downtown south through Sweetwater Creek State Park to the Carroll County line, and includes Lithia Springs, the Douglas portions of Austell and Villa Rica, plus the smaller Winston and Mount Carmel CDPs. Established in ${county.established}, Douglas is predominantly a middle-class suburban county with housing stock dominated by 1980s-2010s subdivisions, a smaller pre-WWII inventory concentrated in Douglasville's Historic Downtown, and significant wooded acreage anchored by Sweetwater Creek State Park.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across Douglas's suburban canopy, with twin breeding-cycle peaks in February-March and August-September. Virginia opossums shelter under decks and porches across the older Historic Downtown Douglasville housing and the 1980s-1990s subdivision stock. Striped skunks are persistent under sheds and crawl spaces in the wooded subdivisions along the Sweetwater corridor, and snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate around the wooded properties along Sweetwater Creek, Annewakee Creek, and the Chattahoochee edge. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Douglas County including ${top4cities}, plus Winston and Mount Carmel and the unincorporated subdivisions across Mirror Lake, Tributary, Chapel Hill, Anneewakee Forest, Stewart Mill Estates, and the New Manchester area. The county's mix of Historic Downtown Douglasville pre-WWII housing, dense 1980s-2010s I-20 corridor subdivisions, the wooded Sweetwater Creek State Park edge, and the Chattahoochee River corridor — combined with the year-round wildlife activity that defines metro Atlanta — means contractors here handle a continuous mix of suburban roof-rat exclusion, raccoon kit-season chimney work, and steady gray squirrel attic intrusions.`;
    metaTitle = `Douglas County Wildlife Removal — Douglasville, Lithia Springs GA`;
    metaDescription = `Licensed wildlife removal in Douglas County, GA — Douglasville, Lithia Springs, Austell, Villa Rica & Winston. Sweetwater Creek coverage. Same-day service.`;

    geo = { lat: 33.7515, lon: -84.7677 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Douglas_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Cobb County',     slug: 'cobb-county',     anchor: 'Cobb County wildlife removal',        blurb: 'directly to the north' },
      { name: 'Fulton County',   slug: 'fulton-county',   anchor: 'Fulton County wildlife services',     blurb: 'to the east, across the Chattahoochee River' },
      { name: 'Carroll County',  slug: 'carroll-county',  anchor: 'Carroll County animal removal',       blurb: 'to the west' },
      { name: 'Coweta County',   slug: 'coweta-county',   anchor: 'Coweta County wildlife removal',      blurb: 'to the south' },
      { name: 'Paulding County', slug: 'paulding-county', anchor: 'Wildlife removal in Paulding County', blurb: 'to the northwest' },
    ];

    extendedBody = `
      <h2>Douglas County's Geography Shapes Wildlife Activity</h2>
      <p>Douglas sits in the rolling Piedmont uplands of west-metro Atlanta, hemmed in by the <strong>Chattahoochee River</strong> along its eastern boundary against Fulton County and traversed by <strong>Sweetwater Creek</strong>, which cuts diagonally through the county on its way to the Chattahoochee. <strong>Sweetwater Creek State Park</strong> — the 2,500+ acre state park surrounding the New Manchester Mill ruins — is the county's signature natural feature and functions as the dominant regional wildlife corridor. Additional creek systems (<strong>Dog River</strong> and <strong>Dog River Reservoir</strong>, <strong>Annewakee Creek</strong>, and <strong>Bear Creek</strong>) reinforce wildlife travel routes throughout the county.</p>
      <p>The <strong>I-20 corridor</strong> bisects the county east-to-west and drives the residential-development pattern: 1980s-2010s subdivisions cluster along the corridor between Lithia Springs and the Carroll County line, with the Mirror Lake, Tributary, Chapel Hill, and Anneewakee Forest neighborhoods filling the spaces between Sweetwater Creek State Park and the Chattahoochee. Douglasville's Historic Downtown anchors the older housing stock — the only substantial pre-WWII inventory in the county — while Stewart Mill Estates, New Manchester, and the smaller CDPs of Winston and Mount Carmel round out the residential landscape.</p>

      <h2>Wildlife Species Present in Douglas County</h2>
      <p>Douglas residents most frequently call about animals that have moved from the Sweetwater Creek corridor, the Chattahoochee edge, or the wooded subdivision interiors into residential structures:</p>
      <ul class="tips-list">
        <li><strong>Raccoons</strong> — heaviest densities along Sweetwater Creek and the Chattahoochee corridor; female raccoons whelp in suburban attics and the older Historic Downtown chimneys February through April every year</li>
        <li><strong>Eastern gray squirrels</strong> — constant across Douglas's mature suburban canopy, with twin breeding-cycle peaks (February-March, August-September)</li>
        <li><strong>Roof rats</strong> — establishing in 2000s-era I-20 corridor subdivisions; younger establishment than Fulton because of less commercial density</li>
        <li><strong>Norway rats</strong> — concentrated in the older Historic Downtown Douglasville commercial blocks and around aging municipal infrastructure in Lithia Springs</li>
        <li><strong>Big brown bats</strong> — colonies in pre-WWII Historic Downtown Douglasville chimneys; smaller-colony presence in 1990s-era housing chimney chases</li>
        <li><strong>Evening bats</strong> in older Historic Downtown housing</li>
        <li><strong>Tricolored bats</strong> (federally proposed for listing) along the Chattahoochee corridor</li>
        <li><strong>Virginia opossums</strong>, <strong>striped skunks</strong>, <strong>armadillos</strong> (encroaching from Carroll County), <strong>groundhogs</strong></li>
        <li><strong>Coyotes</strong> — firmly established along Sweetwater Creek and the Chattahoochee corridor; routine across the county</li>
        <li>Snakes encountered residentially are dominated by the <strong>eastern rat snake</strong> with the occasional <strong>northern copperhead</strong>; <strong>brown watersnakes</strong> along Sweetwater Creek and the Chattahoochee</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Douglas Job Mix</h2>
      <p>Several patterns in Douglas's call volume are distinctive enough to call out:</p>

      <h3>Sweetwater Creek State Park edge raccoon and opossum dispersal</h3>
      <p>The 2,500+ acre Sweetwater Creek State Park sustains one of west-metro Atlanta's largest residential wildlife source populations. The Mirror Lake, Tributary, and New Manchester subdivisions adjacent to the park boundary take continuous fall dispersal pressure (September-November) and steady year-round raccoon and opossum activity. Properties within a half-mile of the park boundary frequently need wider-perimeter exclusion than typical Douglas suburban work.</p>

      <h3>I-20 corridor 2000s-subdivision roof rat establishment</h3>
      <p>The 1990s-2010s subdivision growth along I-20 between Lithia Springs and the Carroll County line occurred during exactly the period when roof rats moved up the I-20 and I-285 corridors from peninsular Florida and metro Atlanta. The result is now-mature subdivision canopy connected by overhead utility runs — exactly the infrastructure roof rats need. Establishment here is younger than Fulton's, but the trajectory is similar: ceiling-cavity activity through soffit-corner chew-throughs and chase-cap gaps.</p>

      <h3>Historic Downtown Douglasville pre-WWII bat and raccoon work</h3>
      <p>The pre-WWII housing concentrated in Historic Downtown Douglasville — the only substantial pre-1940 inventory in Douglas — produces a small but distinct submarket of multi-entry historic-attic work. Original masonry chimneys, hand-laid brick foundations, and original wood soffits all support multi-decade raccoon and bat use. The historic-downtown block is far smaller than Marietta or Cartersville's, but the structural patterns match.</p>

      <h3>Coyote management along Sweetwater and the Chattahoochee</h3>
      <p>Coyote sightings are now routine in subdivisions backing up to Sweetwater Creek State Park, the Annewakee Creek corridor, and the Chattahoochee edge. Most calls are driven by missing cats, daytime sightings near schools in Mirror Lake and Chapel Hill, and den activity in stormwater easements. Resolutions typically combine hazing, food-source removal, and den-site disturbance.</p>

      <h2>Federally Protected Species in Douglas's Watersheds</h2>
      <p>The <strong>tricolored bat</strong> (<em>Perimyotis subflavus</em>) is federally proposed for listing under the Endangered Species Act and appears along the Chattahoochee corridor; any encounter requires careful protocol. <strong>Bald eagles</strong> remain protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act and occasionally appear along the Chattahoochee. <strong>Migratory birds</strong> including hawks, owls, and woodpeckers are protected under the Migratory Bird Treaty Act and require federal permits for any active take.</p>

      <h2>Local Authorities and Regulations</h2>
      <p>Public-health authority for Douglas County rabies-vector exposure runs through the <strong>West Central Health District</strong>; <strong>Douglas County Animal Services</strong> handles domestic-animal complaints but does not respond to most nuisance wildlife. Sweetwater Creek State Park is administered by the <strong>Georgia State Parks division of Georgia DNR</strong>, and any wildlife-related work within the park boundary coordinates through that authority. Commercial wildlife removal in Georgia operates under <strong>Georgia DNR Wildlife Resources Division Region 1</strong> (Armuchee office). Federal protections apply to bats during maternity periods (May-August exclusion restrictions), all migratory birds, and the federally proposed tricolored bat. Every contractor in this directory operating in Douglas County holds the applicable state and federal credentials.`;

    faqs = [
      {
        q: 'What wildlife is most common in Douglas County, Georgia?',
        a: 'In residential calls across Douglas County, eastern gray squirrels, raccoons, Virginia opossums, and big brown bats make up the bulk of attic and yard intrusions. Roof rats are establishing in the 2000s-era I-20 corridor subdivisions; Norway rats remain concentrated in the older Historic Downtown Douglasville commercial blocks. Coyotes are firmly established along the Sweetwater Creek and Chattahoochee corridors. Armadillos are encroaching from Carroll County and now turn up routinely in western Douglas yards. Snake calls — primarily eastern rat snakes and the occasional copperhead — concentrate along Sweetwater Creek, Annewakee Creek, and the Chattahoochee edge.'
      },
      {
        q: 'Why do Sweetwater Creek State Park properties see heavier wildlife pressure?',
        a: 'The 2,500+ acre Sweetwater Creek State Park sustains one of west-metro Atlanta\'s largest residential wildlife source populations — raccoons, opossums, gray squirrels, bats, skunks, and snakes all use the park\'s wooded watershed as continuous habitat. Adjacent Mirror Lake, Tributary, and New Manchester subdivisions take continuous fall dispersal pressure (September-November) and steady year-round activity. Properties within a half-mile of the park boundary frequently need wider-perimeter exclusion plans rather than standard single-property treatment because the surrounding source population fills any sealed entry point within weeks.'
      },
      {
        q: 'Is roof rat pressure new to Douglas County?',
        a: 'Relatively. Roof rats moved up the I-20 and I-285 corridors during the 2000s-2010s and are now establishing in the I-20 corridor subdivisions between Lithia Springs and the Carroll County line. Establishment here is younger than in Fulton or Cobb because Douglas has less commercial-corridor density to sustain mature populations. Properties are seeing roof rat presence for the first time, often without homeowners recognizing the species — they assume the activity is squirrels. Diagnostic: pointed half-inch droppings (not blunt 3/4-inch Norway droppings) and overhead activity in attics and ceiling cavities.'
      },
      {
        q: 'When can I evict raccoons from my Douglas County attic?',
        a: 'Female raccoons in Douglas County whelp late February through early May, and kits are immobile and dependent until roughly 8-10 weeks of age. Performing exclusion during that window risks separating mother from kits and trapping kits inside the structure — a guaranteed dead-animal callback within 1-2 weeks. Right approach during kit season is one-way doors that let the family exit but not re-enter, deployed once kits are mobile. Inspections and entry-point identification can happen any time of year. Sweetwater Creek-adjacent properties may need wider perimeter exclusion than typical because of the continuous source-population pressure from the state park.'
      },
      {
        q: 'Are coyotes a problem in Douglasville and the Mirror Lake area?',
        a: 'Yes — coyote sightings are now routine in Douglas subdivisions backing up to Sweetwater Creek State Park, the Annewakee Creek corridor, and the Chattahoochee edge. Mirror Lake, Chapel Hill, and Tributary all report regular activity. Most calls are driven by missing cats, daytime sightings near schools, and den activity in stormwater easements. Resolutions typically combine hazing, removing food sources (pet food left out, accessible trash, fallen fruit), and disrupting den sites rather than lethal control. A licensed contractor can also work the food-source side of the problem at neighboring properties.'
      },
      {
        q: 'What are the legal restrictions on bat removal in Douglas County?',
        a: 'Georgia DNR Wildlife Resources Division regulations restrict bat exclusion during the maternity season — typically May through August — when non-flying pups are present and would be trapped inside the structure to die if exclusion went forward. All bat exclusion in Georgia must use one-way valves, not trapping; trapping bats is essentially banned because the species are protected under both state and federal regulations. Tricolored bat encounters along the Chattahoochee corridor carry additional federal-status concerns because the species is proposed for ESA listing. Douglas contractors hold the required Georgia DNR Region 1 licensing and follow the legal April or September-October exclusion calendar.'
      },
      {
        q: 'How much does wildlife removal cost in Douglas County?',
        a: 'Pricing varies by species and exclusion scope. Suburban subdivision raccoon jobs (Mirror Lake, Tributary, Chapel Hill 1990s-2010s housing) typically run $400-$1,200+. Roof rat work in I-20 corridor subdivisions runs $400-$1,000+. Historic Downtown Douglasville pre-WWII multi-entry raccoon and bat work runs $700-$1,800+. Long-established bat colony remediation in older chimneys can run $2,000-$4,000+ once full guano removal is included. Multi-structure jobs on rural and semi-rural Douglas properties (main house plus barns or outbuildings) run higher. The variable is exclusion scope and remediation, not trapping itself. A Douglas-licensed contractor will quote the property-specific cost during inspection.'
      },
      {
        q: 'Are there protected species in Douglas County I should be aware of?',
        a: 'Yes. The federally proposed tricolored bat (Perimyotis subflavus) appears along the Chattahoochee corridor and any encounter requires careful protocol because of the federal status. Bald eagles are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act. All bats are protected by Georgia DNR regulations during maternity season (May-August). Migratory birds (hawks, owls, woodpeckers, Canada geese) require federal Migratory Bird Treaty Act permits for any active take. Sweetwater Creek State Park, administered by Georgia State Parks, has its own internal wildlife protocols for any work within the park boundary.'
      }
    ];

  } else if (countyName === 'Chatham County') {
    blockA = `Chatham County sits at the mouth of the Savannah River where Georgia meets the Atlantic Ocean, anchored by the historic city of Savannah — one of the oldest and most architecturally significant cities in the American South. With a population of ${county.population.toLocaleString()}, Chatham runs from the Savannah River along its northern boundary down through the Historic District, Ardsley Park, and the inner-city neighborhoods, out to the suburban developments of Pooler and Garden City near the airport, across the islands of Wilmington, Whitemarsh, Skidaway, and Tybee, and south to the Ogeechee River boundary. Established in ${county.established} as one of the original eight Georgia counties and named for William Pitt, 1st Earl of Chatham, the county combines the 1700s-1800s historic-district housing stock under Savannah's iconic live oak canopy with Atlantic coastal salt marsh, tidal creek systems, barrier-island maritime forest, and the suburban-industrial corridor along I-95.`;
    blockB = `${cap(county.regional_wildlife)}. Eastern gray squirrel intrusions are constant across Savannah's Historic District and the older Ardsley Park / Chatham Crescent neighborhoods where mature live oaks touch rooflines, and Virginia opossums shelter under decks and porches across the older inner-city housing stock. Snake calls in Chatham are unlike anything inland Georgia counties handle — the salt marsh edge, tidal creek banks, and waterfront properties produce a steady volume of cottonmouth (water moccasin) encounters that Atlanta-metro counties never see, alongside the rat snake and copperhead calls common across the state. Striped skunks are persistent under sheds and crawl spaces in the suburban-edge subdivisions, and dead-animal calls run year-round given Chatham's near-continuous coastal wildlife activity. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Chatham County including ${top4cities}, plus Tybee Island, Thunderbolt, Bloomingdale, and the unincorporated areas across Wilmington Island, Whitemarsh Island, Skidaway Island, and Isle of Hope. The county's combination of pre-Revolutionary historic housing, Atlantic coastal habitat, alligator-bearing standing water on virtually every property type, and tourism-district food density in the Historic District — combined with the year-round wildlife activity that defines coastal Georgia — means contractors here handle a continuous mix of historic-attic exclusion, alligator referral and removal, big bat colony work in cupolas and steeples, and emergency snake calls along the salt marsh edge.`;
    metaTitle = `Chatham County Wildlife Removal — Savannah, Tybee, Pooler GA`;
    metaDescription = `Licensed wildlife removal in Chatham County, GA — Savannah, Pooler, Tybee Island, Garden City. Alligators, bats, raccoons, snakes — call for same-day service.`;

    geo = { lat: 32.07, lon: -81.10 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Chatham_County,_Georgia',
    ];

    neighboringCounties = [
      { name: 'Effingham County', slug: 'effingham-county', anchor: 'Wildlife removal in Effingham County', blurb: 'directly to the west' },
      { name: 'Bryan County',     slug: 'bryan-county',     anchor: 'Bryan County animal services',        blurb: 'to the south, across the Ogeechee River' },
      { name: 'Liberty County',   slug: 'liberty-county',   anchor: 'Liberty County wildlife services',    blurb: 'to the southwest, along the coastal corridor' },
    ];

    extendedBody = `
      <h2>Chatham County's Coastal Geography Shapes Its Wildlife Activity</h2>
      <p>Chatham County is fundamentally a coastal county, and that single fact distinguishes its residential wildlife removal work from every Georgia county outside the Coastal Region. The county sits at the mouth of the <strong>Savannah River</strong>, with the river forming the northern boundary against South Carolina and the <strong>Ogeechee River</strong> defining the southern boundary. Between the two rivers, Chatham is laced with tidal creeks, salt marsh, and freshwater wetlands that sustain American alligator populations on virtually every property type — golf course ponds, residential retention basins, drainage ditches, and tidal creek banks. The Atlantic Ocean borders the county to the east across the <strong>Tybee Island</strong>, <strong>Wassaw Island</strong>, and <strong>Skidaway Island</strong> barrier system.</p>
      <p>Within or directly bordering the county sit several major public conservation lands: the <strong>Savannah National Wildlife Refuge</strong> on the northern boundary, the <strong>Wassaw Island National Wildlife Refuge</strong> just offshore, <strong>Skidaway Island State Park</strong>, <strong>Fort Pulaski National Monument</strong> on Cockspur Island, and the <strong>Ossabaw Island Heritage Preserve</strong> directly south of the county line. The result is a coastal Georgia county where federally protected habitat sits directly against historic neighborhoods, beach communities, and the suburban-industrial corridor along I-95 — and that interface drives a wildlife-removal call profile that no inland county shares.</p>

      <h3>The Live Oak Canopy and the Salt Marsh Edge</h3>
      <p>Two ecological features dominate the residential wildlife pressure profile. First, the <strong>Savannah Historic District live oak canopy</strong> — a continuous maritime forest of 200- to 300-year-old live oaks draped in Spanish moss running through the city's iconic 22-square grid. That canopy gives gray squirrels, raccoons, and roof rats continuous arboreal travel routes between properties, and the 1700s-1800s housing stock underneath provides extensive structural entry-point inventory. Second, the <strong>salt marsh edge</strong> — every waterfront and tidal-edge property in the county sits against habitat that supports cottonmouths, alligators, raccoons foraging on shellfish, and otters. Chatham's job mix runs heavy on both submarkets simultaneously.</p>

      <h2>Wildlife Species Present in Chatham County</h2>
      <p>Chatham residents call about a wildlife mix that includes coastal-specific species not found inland:</p>
      <ul class="tips-list">
        <li><strong>American alligator</strong> (<em>Alligator mississippiensis</em>) — present in any standing water across the county, including residential ponds, golf-course retention, and drainage infrastructure. Alligators over 4 feet are referred to Georgia DNR rather than removed by private operators</li>
        <li><strong>Raccoons</strong>, <strong>Virginia opossums</strong>, <strong>Eastern gray squirrels</strong>, <strong>Eastern cottontail rabbits</strong> — the year-round residential backbone</li>
        <li><strong>Fox squirrels</strong> — larger and more habitat-specialized than gray squirrels, persisting on the barrier-island and longleaf-pine fragments</li>
        <li><strong>Roof rats</strong> (<em>Rattus rattus</em>) — dominant rodent in the Savannah Historic District; <strong>Norway rats</strong> (<em>Rattus norvegicus</em>) heavier in industrial-corridor and storm-sewer infestations</li>
        <li><strong>Big brown bats</strong>, <strong>evening bats</strong>, and <strong>Brazilian free-tailed bats</strong> (<em>Tadarida brasiliensis</em>) — the Brazilian free-tailed bat is a coastal-specific addition to the bat call mix and forms larger colonies than the inland species</li>
        <li>Snakes — <strong>cottonmouths</strong> (<em>Agkistrodon piscivorus</em>) drive a distinctive call profile in waterfront and tidal-edge properties, alongside <strong>eastern rat snakes</strong>, <strong>copperheads</strong>, and the occasional <strong>eastern diamondback rattlesnake</strong> (the largest venomous snake in North America, present at lower density)</li>
        <li><strong>White-tailed deer</strong> — common in suburban edges and barrier islands</li>
        <li><strong>Striped skunks</strong>, <strong>armadillos</strong> (rapidly expanding), and <strong>feral hogs</strong> in the western rural portions</li>
        <li>Coastal protected species — <strong>sea turtles</strong> nesting on Tybee and Wassaw under federal ESA protection, <strong>bald eagles</strong>, <strong>wood storks</strong>, <strong>painted buntings</strong>, and migratory shorebirds</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Chatham Job Mix</h2>
      <p>Several patterns in Chatham's call volume are distinctive enough to call out:</p>

      <h3>Alligator pressure across the county</h3>
      <p>American alligators are present in essentially every standing-water habitat in Chatham — residential ponds, golf-course retention basins, drainage ditches, retention ponds along I-95, and tidal creek banks. Encounters are routine; lethal control requires Georgia DNR coordination, and any alligator over 4 feet typically requires the DNR Coastal Region office to authorize removal. Most calls are referred for assessment rather than handled in the way an inland raccoon job is. A licensed contractor in this directory will triage the situation, advise on safe distance and avoidance, and coordinate with Georgia DNR when removal is required.</p>

      <h3>Historic District attic exclusion in 1700s-1800s housing</h3>
      <p>The Savannah Historic District is the highest-density historic residential zone in Georgia and one of the highest-density in the country. The 1700s-1800s housing stock — brick row houses, federal-style townhomes, antebellum mansions, and the Victorian-era Ardsley Park / Chatham Crescent expansion — produces entry-point profiles that look nothing like new construction. <strong>Most exclusion jobs in this submarket find 5+ entry points</strong>, structural repair beyond standard sealing is routine, and any work has to coordinate with the <strong>Historic Savannah Foundation</strong> and city historic-preservation review for visible structural changes.</p>

      <h3>Big brown and Brazilian free-tailed bat colonies in historic structures</h3>
      <p>Long-established bat colonies in the Historic District's brick row houses, attic cupolas, and church steeples are routine — many have been continuous in the same structure for 50-100+ years. Big brown bats are the dominant species, but <strong>Brazilian free-tailed bats form larger colonies (sometimes 100-500 individuals) than any inland Georgia bat species</strong>, and the guano accumulation in long-occupied historic-building roosts can be substantial. Georgia DNR restricts active exclusion during the maternity period (roughly May through August); the legal windows are April and September through mid-October.</p>

      <h3>Cottonmouth encounters along the salt marsh edge</h3>
      <p>Cottonmouths (water moccasins) are present at significant density along Chatham's tidal creeks, salt marsh edges, and freshwater wetlands. Waterfront and tidal-edge properties produce a steady volume of cottonmouth calls that Atlanta-metro counties never see. Any snake call on a Chatham waterfront property has to be approached as potentially venomous and identified before handling.</p>

      <h3>Roof rat colonies in the Historic District tourism corridor</h3>
      <p><strong>Roof rats</strong> (<em>Rattus rattus</em>) drive the dominant rodent call volume in the Savannah Historic District, sustained by tourism-district food density (River Street, Bay Street, Broughton Street, Forsyth Park edge) and the 1700s-1800s structural entry-point inventory. Mixed-species infestations (roof rats above, Norway rats below in basements and crawl spaces) are routine in older properties.</p>

      <h2>Federally Protected Species in Chatham County</h2>
      <p>Chatham has more federally protected wildlife than any inland Georgia county. <strong>Sea turtles</strong> — loggerhead, green, leatherback, and Kemp's ridley — nest on Tybee Island, Wassaw Island, and other barrier islands under federal Endangered Species Act protection; nest disturbance is a federal offense. <strong>Wood storks</strong> are federally threatened and use the freshwater wetlands and rookeries countywide. <strong>Bald eagles</strong> are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act. The <strong>tricolored bat</strong> (<em>Perimyotis subflavus</em>) is federally proposed for listing under the ESA and is documented in the coastal Georgia bat community. <strong>Piping plovers</strong> and other migratory shorebirds use the barrier-island beach habitat. American alligators are protected under state law and the federal Endangered Species Act's similarity-of-appearance provisions.</p>

      <h2>Local Authorities and Regulations</h2>
      <p><strong>Chatham County Animal Services</strong> handles domestic-animal complaints — stray dogs, cat colonies, bite reports — but does not respond to most nuisance wildlife calls. Raccoons, squirrels, bats, snakes, alligators, and similar species are referred to private licensed wildlife control operators (and, for alligators over 4 feet, to Georgia DNR directly). The <strong>Coastal Health District (Chatham County Health Department)</strong> handles rabies-exposure investigations and coordinates with the Georgia Department of Public Health. State-level oversight comes from <strong>Georgia DNR Wildlife Resources Division Coastal Region (Brunswick office)</strong>, which issues the Trapping License and Nuisance Wildlife Control Permit required of commercial operators. Federal protections apply to bats during maternity periods, all migratory birds, sea turtles, wood storks, and the federally proposed tricolored bat. Every contractor in this directory operating in Chatham County is required to hold the applicable state and federal credentials.</p>
    `;

    faqs = [
      {
        q: 'What wildlife is most common in Chatham County, Georgia?',
        a: 'In residential calls across Chatham County, raccoons, eastern gray squirrels, Virginia opossums, roof rats, big brown bats, and snakes (rat snakes plus the regionally distinctive cottonmouth on waterfront properties) make up the bulk of attic and yard intrusions. American alligator calls are routine across the county on properties with standing water — golf courses, retention ponds, tidal creek banks. Brazilian free-tailed bat colonies are a coastal-specific call type in the Savannah Historic District. Larger species — sea turtles on the barrier islands, the occasional eastern diamondback rattlesnake, wood storks, and feral hogs in the rural west — fall under direct Georgia DNR or federal management rather than the private removal industry.'
      },
      {
        q: 'How are alligators handled in Chatham County?',
        a: 'American alligators are protected under Georgia state law and the federal Endangered Species Act\'s similarity-of-appearance provisions. Encounters of alligators under 4 feet may be handled by private licensed nuisance wildlife operators in some situations; <strong>any alligator over 4 feet typically requires Georgia DNR Coastal Region office coordination before removal</strong>. A licensed contractor in this directory will triage the situation, advise on safe distance and avoidance, and coordinate with Georgia DNR when removal is required. Self-attempts at handling or relocation are illegal and dangerous — alligators can move surprisingly quickly on land and are responsible for occasional fatal attacks in coastal Georgia.'
      },
      {
        q: 'How do I handle a bat in my Savannah Historic District home?',
        a: 'Don\'t try to handle a bat colony yourself. Bats in Georgia carry rabies risk, are protected by state and federal law during the maternity period, and require specialized exclusion technique to remove without sealing pups inside the structure. The Savannah Historic District\'s 1700s-1800s housing — brick row houses, federal-style townhomes, antebellum mansions with attic cupolas — is the classic substrate for big brown bat and Brazilian free-tailed bat colonies, many of which have been continuous in the same structure for 50-100+ years. Georgia DNR restricts active exclusion during the maternity period (May-August). A licensed contractor will typically schedule work for April or September through mid-October, install one-way exit devices, and seal the structure once the colony has left. Long-established colonies can produce substantial guano accumulation that requires HEPA-equipped decontamination after exclusion. Historic-district work also has to coordinate with city historic-preservation review for any visible structural changes.'
      },
      {
        q: 'What snakes should I be worried about in Chatham County?',
        a: 'Chatham residents should be aware of the venomous species the county supports. Cottonmouths (water moccasins) are present at significant density along tidal creeks, salt marsh edges, and freshwater wetlands — encounters are routine on waterfront properties. Copperheads occur in wooded suburban edges and historic district yards. The eastern diamondback rattlesnake — the largest venomous snake in North America — is present at lower density and is treated as a serious encounter when it occurs. The most common non-venomous species, the eastern rat snake, is frequently mistaken for a venomous species and accounts for many calls that turn out to be harmless. A licensed contractor will identify the species before handling and coordinate with the Coastal Health District for any envenomation risk.'
      },
      {
        q: 'Is wildlife removal regulated in Chatham County?',
        a: 'Yes. Wildlife removal in Chatham County operates under three layers of regulation. State-level oversight comes from the Georgia Department of Natural Resources, Wildlife Resources Division Coastal Region (Brunswick office), which issues the Trapping License and Nuisance Wildlife Control Permit required for commercial operators. Federal protections apply to bats, all migratory birds, sea turtles nesting on the barrier islands, wood storks, and the federally proposed tricolored bat. American alligator handling has additional state-coordinated protocols, and any alligator over 4 feet generally requires DNR coordination. Chatham County Animal Services handles domestic-animal calls but does not respond to most nuisance wildlife — those calls are referred to licensed private operators. The Coastal Health District handles rabies-exposure investigations.'
      },
      {
        q: 'How much does wildlife removal cost in Chatham County?',
        a: 'Pricing varies significantly with species and the scope of exclusion work. Historic District raccoon and squirrel work runs $500-$1,500+ because of the multi-entry-point profiles typical in 1700s-1800s housing. Long-established big brown and Brazilian free-tailed bat colonies in historic structures run $1,500-$4,000+ once full guano remediation is included; multi-decade colonies in church steeples or historic cupolas can run higher. Roof rat work in the Historic District tourism corridor runs $800-$2,500+. Alligator removal is priced separately and may be referred to Georgia DNR. Snake calls are typically a flat per-visit charge. Estimates are property-specific and free.'
      },
      {
        q: 'When is the best time to handle wildlife exclusion in Chatham?',
        a: 'For most species in coastal Georgia, the best window for exclusion work is late summer through early spring — roughly August through April. Bat exclusion in particular must be scheduled outside the maternity period (May through August); the two legal windows are April and September through mid-October. Sea turtle nesting season (May-October on Tybee and the barrier islands) restricts certain coastal work. Squirrel and raccoon exclusion is best handled outside their main denning seasons, though urgent intrusions can be addressed any time of year using one-way doors. Snake and alligator calls run year-round; alligator activity peaks in spring breeding season (April-June) and during summer warmth. Coastal Georgia\'s mild winters keep wildlife active twelve months a year.'
      },
      {
        q: 'Are there protected species in Chatham County I should be aware of?',
        a: 'Yes — more than any inland Georgia county. Sea turtles (loggerhead, green, leatherback, Kemp\'s ridley) nest on Tybee Island, Wassaw, and the other barrier islands under federal Endangered Species Act protection; nest disturbance is a federal offense. Wood storks are federally threatened. Bald eagles are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act. The federally proposed tricolored bat is documented in the coastal Georgia bat community. Piping plovers and other migratory shorebirds use the barrier-island beach habitat. American alligators are protected under state law and federal ESA similarity-of-appearance provisions. All bats are protected by Georgia DNR regulations during maternity season. Migratory birds (Canada geese, owls, hawks, woodpeckers, herons, egrets) require federal Migratory Bird Treaty Act permits for any active take. Licensed contractors are required to know which species can be handled directly and which require specific federal or state permitting.'
      }
    ];
  }

  const blockD = `Wildlife intrusion in ${countyName} follows Georgia's main pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor}.`;
  const blockE = `All commercial wildlife removal in Georgia is regulated by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds the applicable Georgia DNR licensing and operates within Wildlife Resources Division guidelines on species-specific handling and relocation.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription, extendedBody, faqs, neighboringCounties, geo, sameAs };
}

// ---- Tennessee county content ----
function tennesseeContent(countyName, county, s) {
  const top4cities = county.largest_cities.slice(0, 4).join(', ');

  let blockA, blockB, blockC, metaTitle, metaDescription;
  let extendedBody = null;
  let faqs = null;
  let neighboringCounties = null;
  let geo = null;
  let sameAs = null;

  if (countyName === 'Williamson County') {
    blockA = `Williamson County sits in the heart of Middle Tennessee's Nashville Basin, immediately south of Davidson County and the city of Nashville, with downtown Nashville about 20 miles north of the county seat in Franklin. With a population of ${county.population.toLocaleString()} — and consistently ranking among the wealthiest counties in the United States by median household income — Williamson runs from the affluent post-1990s subdivisions of Brentwood at the Davidson County line, through the historic Civil War-era core of downtown Franklin, the rapidly growing Cool Springs and Berry Farms commercial-residential corridors, and out into the rural Leiper's Fork, College Grove, Arrington, and Bethesda horse-country valleys, with Spring Hill, Thompson's Station, Nolensville, and Fairview filling the suburban edges. Established in ${county.established} and named for Founding Father Hugh Williamson, the county combines the Battle of Franklin's preserved 1864 battlefield landscape, antebellum farms in the western rural townships, and three decades of explosive suburban growth into one of the most distinctive residential wildlife removal markets in the Southeast.`;
    blockB = `${cap(county.regional_wildlife)}. Virginia opossums shelter under decks, porches, and crawl spaces across the older Brentwood and Franklin housing stock, and dead-animal calls run year-round given Williamson's near-continuous wildlife activity. Striped skunks are persistent under sheds and outbuildings throughout the rural and suburban-edge properties, and red and gray foxes routinely den under porches and storage buildings on the larger Leiper's Fork and Arrington properties. Snake calls beyond copperheads — primarily Eastern rat snakes (frequently mistaken for venomous), garter snakes, and brown watersnakes along the Harpeth corridor — concentrate in spring and fall around the wooded properties throughout the county. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans all of Williamson County including ${top4cities}, plus Thompson's Station, Fairview, Arrington, College Grove, Leiper's Fork, and the unincorporated Bethesda, Triune, Grassland, and Cool Springs communities. The county's mix of high-end Brentwood subdivisions, the historic Franklin downtown core, the rapidly growing Cool Springs and Berry Farms commercial-residential districts, and the rural horse-country valleys of Leiper's Fork and College Grove — combined with the year-round wildlife activity that defines middle Tennessee's mild-winter climate — means contractors here handle a continuous mix of attic exclusion, copperhead and bat colony work, beaver flooding along the Harpeth, and aggressive coyote-management calls in the suburban greenways.`;
    metaTitle = `Williamson County Wildlife Removal — Franklin, Brentwood, Spring Hill TN`;
    metaDescription = `Licensed wildlife removal in Williamson County, TN — Franklin, Brentwood, Spring Hill, Nolensville & Fairview. Bats, coyotes, copperheads, raccoons. Same-day service.`;

    geo = { lat: 35.92, lon: -86.87 };
    sameAs = [
      'https://en.wikipedia.org/wiki/Williamson_County,_Tennessee',
    ];

    neighboringCounties = [
      { name: 'Davidson County',  slug: 'davidson-county',  anchor: 'Wildlife removal in Davidson County',  blurb: 'directly to the north — the city of Nashville and Metro Nashville suburbs' },
      { name: 'Rutherford County', slug: 'rutherford-county', anchor: 'Rutherford County wildlife services',  blurb: 'to the east, anchored by Murfreesboro' },
      { name: 'Maury County',     slug: 'maury-county',     anchor: 'Maury County animal removal',           blurb: 'to the south, sharing the rapidly growing Spring Hill corridor' },
      { name: 'Hickman County',   slug: 'hickman-county',   anchor: 'Hickman County wildlife removal',       blurb: 'to the west, the rural Western Highland Rim' },
      { name: 'Cheatham County',  slug: 'cheatham-county',  anchor: 'Cheatham County wildlife services',     blurb: 'to the northwest, along the lower Harpeth River' },
    ];

    extendedBody = `
      <h2>Williamson County's Geography Shapes Its Wildlife Activity</h2>
      <p>Williamson County sits squarely in the <strong>Nashville Basin</strong> — the limestone-floored interior lowland of Middle Tennessee — with the <strong>Western Highland Rim</strong> rising along the western edge of the county toward Hickman and the <strong>Harpeth River</strong> cutting from southeast to northwest directly through Franklin and Brentwood. The Harpeth is a designated Tennessee state scenic river, and its corridor — together with the smaller <strong>West Harpeth</strong> and <strong>Little Harpeth</strong> tributaries — is the dominant ecological feature of the county's residential landscape. Cedar-glade limestone outcrops along the Harpeth bluffs and the rugged hillsides of Leiper's Fork support the kind of rocky, brushy habitat that copperheads and timber rattlesnakes use, and the mature oak-hickory forest covering Brentwood's hill country and the rural western valleys produces the dense canopy that drives Williamson's heavy raccoon, squirrel, and bat call volume.</p>
      <p>Within or directly bordering the county sit several major public conservation lands and corridors: <strong>Timberland Park</strong> on the Natchez Trace Parkway, the <strong>Natchez Trace Parkway</strong> federal scenic byway across the southwest portion of the county, the <strong>Harpeth River State Park</strong> units strung along the river corridor (including Hidden Lake, Narrows of the Harpeth, and Newsom's Mill in adjacent Cheatham), and the city of Franklin's <strong>Pinkerton Park</strong> and <strong>Bicentennial Park</strong> green corridors along the Harpeth. The Civil War battlefield landscape of <strong>Carnton</strong>, the <strong>Carter House</strong>, and the preserved Franklin battlefield acreage adds another layer of wooded, low-density habitat directly inside the city limits — habitat that pushes wildlife squarely into the surrounding residential blocks.</p>

      <h3>Waterways That Move Wildlife Through the County</h3>
      <p>The Harpeth corridor is the dominant wildlife travel route, but Williamson is also drained by <strong>Spencer Creek</strong>, <strong>Murfree Branch</strong>, <strong>Mill Creek</strong> (headwaters), <strong>Wilson Creek</strong>, <strong>Brown's Creek</strong>, and <strong>Flat Creek</strong> — every one of which functions as a wildlife travel corridor connecting the rural western valleys to the dense suburban interior. <strong>Beavers</strong> move through these tributaries and routinely flood storm-detention ponds, walking-path culverts, and low-lying yards in the Brentwood subdivisions along the Little Harpeth and in the Cool Springs basin. River otters use the Harpeth corridor and the lower Harpeth tributaries. The Harpeth's clear-water riffle stretches and the cedar-glade pools along the river support a regionally significant freshwater mussel and darter fauna, and several of those species are federally listed — meaning any in-stream or bank work near the river corridor is subject to additional federal habitat protections.</p>

      <h2>Wildlife Species Present in Williamson County</h2>
      <p>Williamson residents most frequently call about animals that have moved from these natural corridors into the residential edge:</p>
      <ul class="tips-list">
        <li><strong>Raccoons</strong> — the dominant attic and chimney intruder across Brentwood, Franklin, and the suburban subdivisions</li>
        <li><strong>Eastern gray squirrels</strong> — constant pressure across the mature oak-hickory canopy in Brentwood, the older Franklin neighborhoods, and the Cool Springs subdivisions</li>
        <li><strong>Big brown bats, Mexican (Brazilian) free-tailed bats, and evening bats</strong> — maternity colonies in older brick housing in downtown Franklin and the original 1950s-1970s Brentwood subdivisions, plus Mexican free-tailed colonies in larger Cool Springs commercial structures</li>
        <li><strong>Eastern coyotes</strong> — now firmly established in every subdivision from Brentwood through Franklin and Cool Springs, using the greenways, golf courses, and creek corridors as travel routes and den sites</li>
        <li><strong>Copperheads</strong> — the dominant venomous snake call, concentrated in Leiper's Fork, the wooded Brentwood hillsides off Old Hickory Boulevard and Concord Road, and the Harpeth River bluff properties</li>
        <li><strong>Beavers and river otters</strong> in the Harpeth and Little Harpeth tributaries</li>
        <li><strong>Woodchucks (groundhogs)</strong> — burrow damage to lawns, foundation plantings, and equestrian outbuildings across the rural-edge properties of Leiper's Fork, College Grove, and Arrington</li>
        <li><strong>Striped skunks, red foxes, and gray foxes</strong> — denning under porches, sheds, and storage buildings throughout the rural and suburban-edge properties</li>
        <li><strong>Norway rats</strong> — persistent in the older commercial corridors of downtown Franklin and the food-service blocks of Cool Springs</li>
        <li><strong>White-tailed deer</strong> — exceptionally high density across the wooded subdivisions and rural valleys; vehicle-collision rates rank among the highest in middle Tennessee, but deer fall under TWRA management rather than the private removal industry</li>
        <li>Snakes encountered residentially are dominated by the <strong>Eastern rat snake</strong> (frequently mistaken for venomous), the <strong>northern copperhead</strong>, <strong>brown watersnakes</strong> along the Harpeth, and common <strong>garter snakes</strong>. <strong>Timber rattlesnakes</strong> occur but are essentially restricted to the rugged ridgeline habitat on the western edge of the county — encounters at residential properties are uncommon.</li>
      </ul>

      <h2>Common Wildlife Issues That Define the Williamson Job Mix</h2>
      <p>Several patterns in Williamson's call volume are distinctive enough to call out:</p>

      <h3>Coyote management in Brentwood and Franklin greenways</h3>
      <p>Coyote sightings now occur in nearly every subdivision in the county, with the heaviest call density in Brentwood east of I-65, the Cool Springs basin, and the Franklin subdivisions along the Harpeth greenway system. Most calls are driven by missing cats, daytime sightings near schools and parks, or visible den activity in the stormwater easements that thread between developments. Coyotes are using the city of Brentwood's extensive greenway network, the Cool Springs creek corridors, and the wooded edges of the Carnton and Carter House battlefield landscape as travel routes and den sites. Removal is rarely lethal — most resolutions involve hazing, exclusion of food sources (pet food left out, accessible trash, fallen fruit), and disturbance of confirmed den sites. A licensed contractor can also work the food-source side of the problem at neighboring properties when the issue is community-wide.</p>

      <h3>Bats in historic downtown Franklin and original Brentwood subdivisions</h3>
      <p>The pre-1970s housing stock in <strong>downtown Franklin's historic district</strong>, the original Brentwood subdivisions along Old Hickory Boulevard and Granny White Pike, and the older Cool Springs farmhouse remnants is the classic substrate for big brown bat maternity colonies — louvered gable vents, original wood-shake roofing, and decades of unmaintained soffits. Mexican free-tailed bats form larger colonies (sometimes 100-500 individuals) in larger commercial structures and historic public buildings throughout downtown Franklin and the Cool Springs corridor, and the guano accumulation in long-occupied roosts can be substantial. TWRA restricts active exclusion during the bat maternity period (roughly mid-May through early August) to protect non-volant pups, so most exclusion work is scheduled outside that window.</p>

      <h3>Copperhead removal in Leiper's Fork and Harpeth bluff properties</h3>
      <p>Copperhead encounters are routine in the wooded properties of Leiper's Fork, the Brentwood hillside subdivisions backing onto the Harpeth bluffs, and the limestone-outcrop edges along the river corridor — terrain that produces the rocky, brushy habitat copperheads use. Encounters peak in spring and early fall when daytime temperatures drive snakes to bask on warm surfaces (rock retaining walls, brick patios, mulch beds, paved walkways). A licensed contractor will identify the species before handling — the Eastern rat snake is the most frequently mis-identified non-venomous species in this county — and coordinate with local emergency services for any envenomation concern.</p>

      <h3>Beaver flooding along the Harpeth tributaries</h3>
      <p>Subdivisions along the Little Harpeth, Spencer Creek, and the smaller Brentwood and Cool Springs tributaries see recurring beaver-related flooding of yards, walking paths, greenway culverts, and storm-detention ponds. Most resolutions involve some combination of trapping and the installation of dam-leveler devices to manage water levels rather than full beaver removal. Work in or directly adjacent to the Harpeth main stem may require coordination with TWRA and the Tennessee Department of Environment and Conservation given the river's state scenic designation and the federally listed mussel and darter species that occur in the system.</p>

      <h3>Groundhog damage on the Leiper's Fork and College Grove estates</h3>
      <p>Woodchucks (groundhogs) burrow under outbuildings, equestrian sheds, foundation plantings, and the manicured turf of the larger residential estates throughout the rural western half of the county. The resulting holes are an active liability on horse-property and pasture work — a stepped-in groundhog burrow can lame a horse or break an ankle. Most management involves trapping and burrow exclusion rather than relocation.</p>

      <h2>Federally Protected Species in the Williamson Watersheds</h2>
      <p>The Harpeth River and its tributaries support several federally protected aquatic species that affect any in-stream or bank work in the county. The <strong>Nashville crayfish</strong> (federally endangered) is documented in several Mill Creek-system tributaries on the eastern edge of Williamson, and several federally listed <strong>freshwater mussels and darters</strong> occur in the Harpeth proper. The <strong>gray bat</strong> (federally endangered) and <strong>Indiana bat</strong> (federally endangered) have documented summer feeding flights over the Harpeth and may roost in caves on the western edge of the county — bat handling near these populations requires TWRA and U.S. Fish & Wildlife Service coordination. The <strong>tricolored bat</strong> (<em>Perimyotis subflavus</em>) is federally proposed for listing and is documented in middle Tennessee. <strong>Bald eagles</strong> remain protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act and are nesting at increasing density on the larger Tennessee impoundments within driving range. None of this affects most residential work — but contractors operating in the county are required to know which species can be handled directly and which require state or federal coordination.</p>

      <h2>Local Authorities and Regulations</h2>
      <p><strong>Williamson County Animal Center</strong> handles domestic-animal complaints — stray dogs, cat colonies, bite reports — but does not respond to most nuisance wildlife calls. Raccoons, squirrels, bats, snakes, beavers, coyotes, groundhogs, and similar species are referred to private licensed wildlife control operators. State-level oversight comes from the <strong>Tennessee Wildlife Resources Agency (TWRA) Region II — Nashville office</strong>, which administers the Nuisance Wildlife Control Operator (NWCO) certification required of commercial operators and enforces species-specific handling and disposition rules. Federal protections apply to bats during maternity periods, all migratory birds (Canada geese, owls, hawks, woodpeckers), and the federally listed bats, mussels, darters, and crayfish in the local watersheds. The cities of Franklin and Brentwood maintain their own municipal codes that affect wildlife work — particularly around discharge of firearms and trapping inside city limits — and the historic districts of downtown Franklin require coordination with city historic-preservation review for any visible structural changes during exclusion work. Every contractor in this directory operating in Williamson County is required to hold the applicable state and federal credentials.</p>
    `;

    faqs = [
      {
        q: 'What wildlife is most common in Williamson County, Tennessee?',
        a: 'In residential calls across Williamson County, raccoons, Eastern gray squirrels, Virginia opossums, big brown bats, and woodchucks (groundhogs) make up the bulk of attic and yard intrusions. Snake calls — primarily Eastern rat snakes and northern copperheads — concentrate around the wooded properties of Leiper\'s Fork, the Brentwood hillside subdivisions, and the Harpeth River bluffs. Coyotes are now firmly established across Brentwood, Franklin, and the Cool Springs corridor. Beavers drive most of the water-related complaints in the Brentwood and Cool Springs subdivisions along the Harpeth tributaries. Mexican free-tailed bat colonies in larger commercial structures throughout Cool Springs and downtown Franklin are a regionally distinctive call type. Larger species — white-tailed deer, the occasional black bear that wanders through the western Hickman County edge, and migratory waterfowl — fall under direct TWRA management rather than the private removal industry.'
      },
      {
        q: 'Are coyotes a problem in Brentwood and Franklin?',
        a: 'Yes — coyote sightings are now routine across nearly every subdivision in Brentwood, Franklin, and the Cool Springs corridor, with the heaviest activity in the greenway-adjacent neighborhoods east of I-65 and the Cool Springs basin. Coyotes use the city of Brentwood\'s greenway network, the Cool Springs creek corridors, and the wooded battlefield landscape around Carnton and the Carter House as travel routes and den sites. The most common reasons residents call are missing cats, daytime sightings near schools and parks, and visible den activity in stormwater easements. Resolutions are rarely lethal — they typically involve hazing, removing food sources (pet food left out, accessible trash, fallen fruit), and disrupting confirmed den sites. A licensed contractor can also work the food-source side of the problem at neighboring properties when the issue is community-wide.'
      },
      {
        q: 'What should I do about bats in my Franklin or Brentwood attic?',
        a: 'Don\'t try to handle a bat colony yourself. Bats in Tennessee carry rabies risk, are protected by state and federal regulations during the maternity period, and require specialized exclusion technique to remove without sealing pups inside the structure. Williamson\'s pre-1970s housing stock — downtown Franklin\'s historic district, the original Brentwood subdivisions along Old Hickory Boulevard and Granny White Pike, and the older Cool Springs farmhouse remnants — is the classic substrate for big brown bat maternity colonies forming in louvered gable vents and original wood-shake roofing. Mexican free-tailed bat colonies in larger commercial structures can produce substantial guano accumulation that requires HEPA-equipped decontamination after exclusion. TWRA restricts active exclusion during the maternity period (roughly mid-May through early August) to protect non-volant pups. A licensed contractor will typically schedule work for August through April, install one-way exit devices, and seal the structure once the colony has been confirmed to have left.'
      },
      {
        q: 'How do I handle a copperhead at my Leiper\'s Fork or Brentwood property?',
        a: 'Copperhead encounters are routine in the wooded properties of Leiper\'s Fork, the Brentwood hillside subdivisions backing onto the Harpeth bluffs, and the limestone-outcrop edges along the river — terrain that produces the rocky, brushy habitat copperheads use. Stay back, keep pets and children well away, and call a licensed wildlife contractor for identification and removal. The Eastern rat snake is by far the most frequently mis-identified non-venomous species in this county and accounts for many calls that turn out to be harmless. A licensed contractor will identify the species before handling. If a bite has occurred, treat it as a medical emergency — call 911 and get to a hospital with antivenom availability. Do not attempt cut-and-suck treatments, tourniquets, or self-relocation.'
      },
      {
        q: 'Is wildlife removal regulated in Williamson County?',
        a: 'Yes. Wildlife removal in Williamson County operates under three layers of regulation. State-level oversight comes from the Tennessee Wildlife Resources Agency (TWRA) Region II, Nashville office, which administers the Nuisance Wildlife Control Operator (NWCO) certification required for commercial operators and enforces species-specific handling and disposition rules. Federal protections apply to bats, all migratory birds (Canada geese, owls, hawks, woodpeckers), and the federally listed bats, mussels, darters, and crayfish in the local watersheds. The cities of Franklin and Brentwood maintain their own municipal codes that affect trapping and firearm discharge within city limits, and historic-district work in downtown Franklin requires coordination with city historic-preservation review for any visible structural changes. Williamson County Animal Center handles domestic-animal calls but does not respond to most nuisance wildlife — those calls are referred to licensed private operators. Every contractor in this directory holds the applicable state and federal credentials.'
      },
      {
        q: 'How much does wildlife removal cost in Williamson County?',
        a: 'Pricing varies significantly with the species, the extent of the intrusion, and how much exclusion work is needed to keep the animal out. A single squirrel or raccoon removal on a clean attic typically runs a few hundred dollars; a full bat colony exclusion with attic remediation, sanitization, and sealed entry points can run several thousand. Long-established Mexican free-tailed bat colonies in larger commercial structures, with full guano remediation, run higher. Beaver and coyote work is priced by trap-set count and visit frequency, and copperhead removal is typically a flat per-visit charge. Historic-district work in downtown Franklin can run higher because of the multi-entry-point profiles typical in pre-1900s housing and the coordination required with city historic-preservation review. The most accurate way to get a number is a free phone consult with a Williamson-based contractor — most quote at no cost over the phone once they understand the species and the property.'
      },
      {
        q: 'When is the best time to handle wildlife exclusion in Tennessee?',
        a: 'For most species in Williamson County, the best window for exclusion work is late summer through early spring — roughly August through April. Bat exclusion in particular must be scheduled outside the maternity period (roughly mid-May through early August) to avoid trapping non-volant pups inside the structure. Squirrel and raccoon exclusion is best handled outside their main denning seasons (February through April for both species in middle Tennessee), though urgent intrusions can be addressed any time of year using one-way doors that allow animals to exit but not return. Snake calls and emergency removals run year-round; copperhead activity peaks in spring (April-June) and again in early fall. Tennessee\'s mild winters keep wildlife active twelve months a year across the Nashville Basin.'
      },
      {
        q: 'Are there protected species in Williamson County I should be aware of?',
        a: 'Yes. The Harpeth River and its tributaries support several federally protected aquatic species including federally listed freshwater mussels, darters, and the Nashville crayfish (in the eastern Mill Creek tributaries). The federally endangered gray bat and Indiana bat have documented summer feeding flights over the Harpeth corridor and may roost in caves on the county\'s western edge — any bat handling near these populations requires TWRA and U.S. Fish & Wildlife Service coordination. The tricolored bat is federally proposed for listing and is documented in middle Tennessee. Bald eagles are protected under the Bald and Golden Eagle Protection Act and the Migratory Bird Treaty Act. All bats are protected by TWRA regulations during maternity season. Migratory birds (Canada geese, owls, hawks, woodpeckers, herons) require federal Migratory Bird Treaty Act permits for any active take. Licensed contractors are required to know which species can be handled directly and which require specific federal or state permitting.'
      }
    ];
  }

  const blockD = `Wildlife intrusion in ${countyName} follows Tennessee's main pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor}.`;
  const blockE = `All commercial wildlife removal in Tennessee is regulated by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds the applicable TWRA certification and operates within ${s.agency_short} guidelines on species-specific handling and relocation.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription, extendedBody, faqs, neighboringCounties, geo, sameAs };
}

// ---- main dispatcher ----
function getCountyContent(stateName, countyName) {
  const stateData = stateRegistry[stateName];
  if (!stateData) return null;

  const county = stateData.counties[countyName];
  if (!county) return null;

  const s = stateData.state;

  if (stateName === 'Delaware')      return delawareContent(countyName, county, s);
  if (stateName === 'Connecticut')   return connecticutContent(countyName, county, s);
  if (stateName === 'New Hampshire') return newHampshireContent(countyName, county, s);
  if (stateName === 'Vermont')       return vermontContent(countyName, county, s);
  if (stateName === 'Rhode Island')  return rhodeIslandContent(countyName, county, s);
  if (stateName === 'Georgia')       return georgiaContent(countyName, county, s);
  if (stateName === 'Tennessee')     return tennesseeContent(countyName, county, s);

  return null;
}

module.exports = { getCountyContent };
