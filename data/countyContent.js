'use strict';

const delawareData      = require('./states/delaware/counties.json');
const connecticutData   = require('./states/connecticut/counties.json');
const newHampshireData  = require('./states/new-hampshire/counties.json');

// Registry: state name → county data file
const stateRegistry = {
  'Delaware':      delawareData,
  'Connecticut':   connecticutData,
  'New Hampshire': newHampshireData,
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

// ---- New Hampshire county content ----
function newHampshireContent(countyName, county, s) {
  const top3cities = county.largest_cities.slice(0, 3).join(', ');
  const top4cities = county.largest_cities.slice(0, 4).join(', ');

  let blockA, blockB, blockC, metaTitle, metaDescription;

  if (countyName === 'Rockingham County') {
    blockA = `Southeastern New Hampshire's most developed and densely populated county, Rockingham County runs from the Massachusetts border north to the Great Bay estuary and east to the state's 18-mile Atlantic coastline. Its ${county.population.toLocaleString()} residents are spread across fast-growing commuter towns — Derry, Salem, and Londonderry carry most of the Boston-area traffic — alongside the older seacoast cities of Portsmouth and Exeter with their colonial-era building stock. Established in ${county.established}, it's one of New Hampshire's five original counties.`;
    blockB = `Bat colonies in the older building stock of Portsmouth and Exeter are one of the county's most distinctive wildlife problems — colonial and Federal-era structures with masonry gaps and unscreened soffits provide ideal roost sites, and summer exclusion calls are a consistent part of the seacoast market. The Great Bay estuary and Odiorne Point State Park create coastal wildlife corridors that funnel white-tailed deer, red foxes, and waterfowl into adjacent suburban neighborhoods throughout the year. Coyotes are well-established across every town in the county. ${cap(county.absent_or_rare)} — this is suburban southern New Hampshire, and the wildlife call mix reflects that.`;
    blockC = `Contractors cover all of Rockingham County, from Derry and Salem near the Massachusetts line through Londonderry, Hampton, and Portsmouth on the coast. Boston is about 50 miles south of Portsmouth, which means the county operates within reach of regional-scale contractors — but local knowledge of the seacoast's older building types remains a significant advantage.`;
    metaTitle = `Wildlife Removal in Rockingham County, NH | Serving Derry, Salem & Portsmouth`;
    metaDescription = `Licensed wildlife removal in Rockingham County, NH. Raccoons, skunks, coyotes, and bat colonies — serving Derry, Salem, Londonderry, Portsmouth, and Hampton. NH WCO-licensed.`;

  } else if (countyName === 'Hillsborough County') {
    blockA = `Manchester and Nashua — New Hampshire's two largest cities — both sit in Hillsborough County, making it the most populous county in the state at ${county.population.toLocaleString()} residents. Manchester anchors the county center along the Merrimack River; Nashua sits at the Massachusetts border about 18 miles to the south. Between them, bedroom communities like Bedford, Merrimack, and Hudson have grown rapidly as housing pressure pushes residents north from the Boston area. The county holds more than a quarter of New Hampshire's entire population, established as a county in ${county.established}.`;
    blockB = `Urban Manchester and Nashua generate consistent Norway rat, raccoon, and skunk call volume from their older neighborhoods and commercial corridors. Bear Brook State Park on the county's eastern edge provides core habitat for white-tailed deer and wild turkeys that move freely into surrounding suburban backyards. ${cap(county.regional_wildlife)} — a species that was rare in this area two decades ago and is now reported year-round across the county's residential neighborhoods. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage spans the full county — from Manchester and Nashua through the suburban ring of Merrimack, Hudson, and Bedford, and west into the more rural fringe towns. Boston is about 50 miles south of Nashua, and the county's wildlife call volume is driven by its dense urban and suburban core.`;
    metaTitle = `Hillsborough County Wildlife Control — Manchester, Nashua & Southern NH`;
    metaDescription = `Licensed wildlife removal in Hillsborough County, NH. Fisher cats, raccoons, Norway rats, and more — serving Manchester, Nashua, Merrimack, and Hudson. NH WCO-licensed contractors.`;

  } else if (countyName === 'Merrimack County') {
    blockA = `Concord, New Hampshire's state capital, sits at the geographic and political center of Merrimack County. Established in ${county.established}, the county runs along the Merrimack River valley and occupies a transitional zone between the heavily developed southern tier and the more rural counties to the north and west. Its population of ${county.population.toLocaleString()} is concentrated in and around Concord, with smaller cities like Franklin and Boscawen downstream and quieter rural towns extending into the surrounding hills toward Mount Kearsarge.`;
    blockB = `Black bears entering Concord's residential neighborhoods are a recurring spring and fall management issue — the state capital is not immune to the bear range expansion that has characterized central New Hampshire over the past decade. Beaver dam and flooding problems are common along the Merrimack's smaller tributaries throughout the county, requiring both removal and ongoing dam management. Bear Brook State Park and Mount Kearsarge State Forest Park support fisher populations that have expanded steadily into the surrounding communities. Raccoons and gray squirrels are the baseline residential nuisance species throughout the county's river-valley towns. ${cap(county.absent_or_rare)}.`;
    blockC = `Service runs through Concord and the river-valley communities of Franklin, Boscawen, Hooksett, Bow, and Pembroke. Manchester is about 20 miles south and is the nearest major population center, but Merrimack County's distinct mix of state-capital urban area and rural upland means locally based contractors are better suited than metro-dispatched services.`;
    metaTitle = `Local Wildlife Removal — Merrimack County, NH | Concord & Surrounding Towns`;
    metaDescription = `Licensed wildlife removal in Merrimack County, NH. Black bears, raccoons, beavers, and more — serving Concord, Franklin, Hooksett, and Bow. NH Fish and Game licensed.`;

  } else if (countyName === 'Strafford County') {
    blockA = `Sandwiched between New Hampshire's seacoast and the Lakes Region, Strafford County covers the southeastern interior of the state. Dover is the county seat and its largest city; Rochester is second-largest; and Durham hosts the University of New Hampshire, which generates its own distinct wildlife dynamic. At ${county.population.toLocaleString()} residents, the county has grown steadily as development pressure spreads inland from the Portsmouth corridor, established as a county in ${county.established}.`;
    blockB = `University neighborhoods in Durham see unusually heavy raccoon and skunk pressure — student housing density, outdoor dining debris, and limited wildlife deterrence create ideal conditions for urban-adapted species. The Bellamy River Wildlife Management Area and the Cocheco River corridor channel white-tailed deer, wild turkeys, and red foxes through the residential zones of Dover, Rochester, and Somersworth. ${cap(county.regional_wildlife)}, following the species' broader southward range expansion across the state. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors cover Dover, Rochester, Somersworth, Durham, Barrington, and Farmington, along with the rural towns connecting the county to the Lakes Region. Portsmouth is about 15 miles east of Dover and is the nearest seacoast hub.`;
    metaTitle = `Wildlife Removal in Strafford County, NH | Dover, Rochester & Durham`;
    metaDescription = `Licensed wildlife removal in Strafford County, NH. Raccoons near UNH, skunks, deer, and bear expansion into Rochester — serving Dover, Rochester, Somersworth, and Durham.`;

  } else if (countyName === 'Cheshire County') {
    blockA = `From the slopes of Mount Monadnock south to the Massachusetts line and west to the Connecticut River, Cheshire County covers the southwestern corner of New Hampshire. Keene is the county's dominant city, serving as the commercial center for the Monadnock region. At ${county.population.toLocaleString()} residents across a mix of small towns, hill farms, and river communities, it's one of the less densely populated counties in the southern half of the state — and the transition point where the state's suburban character gives way to something considerably more rural, established as a county in ${county.established}.`;
    blockB = `Black bears are the defining wildlife management challenge in Cheshire County. The combination of forest and small-farm habitat around Mount Monadnock creates prime bear foraging territory, and residential properties near Keene, Jaffrey, and Swanzey see frequent spring and fall conflict. Porcupines are an established nuisance that damage outbuildings and deck structures across the rural towns — less common further south and east. White-tailed deer, wild turkeys, and fishers are common throughout, with Pisgah State Park providing significant habitat along the county's southern tier. ${cap(county.absent_or_rare)}.`;
    blockC = `Service covers Keene and the surrounding Monadnock-region towns of Swanzey, Jaffrey, Walpole, and Winchester. Brattleboro, VT is about 20 miles west and Manchester about 60 miles east, making local contractors essential for timely response.`;
    metaTitle = `Cheshire County, NH Wildlife Removal | Monadnock Region & Keene Area`;
    metaDescription = `Licensed wildlife removal in Cheshire County, NH. Black bears, porcupines, raccoons, and deer in the Monadnock region — serving Keene, Swanzey, Jaffrey, and Walpole.`;

  } else if (countyName === 'Grafton County') {
    blockA = `Sprawling across western New Hampshire from the Connecticut River to the spine of the White Mountains, Grafton County is one of the largest counties in New England by land area. Lebanon and Hanover — home to Dartmouth College — anchor the county's Upper Valley population of ${county.population.toLocaleString()}, while resort and gateway communities like Lincoln, Franconia, and Littleton occupy the mountain interior to the north. Established in ${county.established}, the county encompasses Franconia Notch State Park, vast sections of White Mountain National Forest, and some of the most dramatic terrain in the Northeast.`;
    blockB = `Grafton County's steep mountain terrain, Upper Valley college communities, and resort-property mix produce a wildlife profile dominated by species rarely seen in the state's southern half. Black bears are abundant throughout and conflicts at vacation homes, seasonal camps, and resort communities in Lincoln and the Franconia area are routine from spring through late fall. Moose density is among the highest in New Hampshire — moose-related calls and vehicle strikes are a year-round reality in the county's northern and mountain townships. Fishers and porcupines are both common. White Mountain National Forest and Franconia Notch State Park provide essentially unlimited source habitat for the full suite of northern forest species.`;
    blockC = `Coverage includes Lebanon, Hanover, Plymouth, Littleton, Bristol, and Lincoln, along with the mountain and river communities throughout the county. The Lebanon-Hanover area functions as its own regional hub; Manchester is about 70 miles southeast.`;
    metaTitle = `White Mountains Wildlife Removal — Grafton County, NH | Lebanon & Hanover`;
    metaDescription = `Licensed wildlife removal in Grafton County, NH. Black bears, moose, fishers, and porcupines in the White Mountains area — serving Lebanon, Hanover, Plymouth, and Littleton.`;

  } else if (countyName === 'Belknap County') {
    blockA = `Built around Lake Winnipesaukee, the largest lake in New Hampshire, Belknap County is the heart of the state's Lakes Region. Laconia is the county seat; Gilford, Meredith, and Alton are major lakeshore communities. At ${county.population.toLocaleString()} full-time residents, the county's winter population understates its summer footprint considerably — seasonal residents and visitors push the active population far higher from May through September, and that influx drives a corresponding spike in wildlife conflict calls at camp properties and vacation homes.`;
    blockB = `Lakeshore vacation properties around Lake Winnipesaukee are among the most wildlife-prone structures in the state. Bats roost in attic spaces of seasonal homes that sit unventilated for months; raccoons exploit screened porches and unsecured decks; black bears target unsecured garbage and bird feeders left out year-round. Gunstock Mountain and Belknap Mountain State Forest provide habitat for fishers, white-tailed deer, and river otters that move regularly into lakeshore communities. Overwintering rodents — primarily mice and squirrels — are a persistent issue in camps that go uninspected from October through May. ${cap(county.absent_or_rare)}.`;
    blockC = `Contractors serve Laconia, Gilford, Meredith, Belmont, Tilton, and Alton, along with the smaller lakeshore communities throughout the county. Concord is about 30 miles south and is the nearest administrative center.`;
    metaTitle = `Lake Winnipesaukee & Lakes Region Wildlife Removal | Belknap County NH`;
    metaDescription = `Wildlife removal in Belknap County, NH. Bats, raccoons, bears, and overwintering rodents at seasonal homes — serving Laconia, Gilford, Meredith, and the Lakes Region.`;

  } else if (countyName === 'Carroll County') {
    blockA = `On the eastern side of the White Mountains, Carroll County covers the mountain valleys and lake communities stretching from White Mountain National Forest to the Maine border. Conway and North Conway anchor the county's most active commercial corridor; Wolfeboro on Lake Winnipesaukee's eastern shore is its most prominent lake community. At ${county.population.toLocaleString()} year-round residents, the county's actual population swells substantially during summer and fall foliage season — North Conway is one of the most visited destinations in New England, and that tourism footprint shapes the county's wildlife conflict profile in ways unique to this part of the state.`;
    blockB = `Black bears and moose are year-round management realities in Carroll County in a way that separates it from the state's southern half. The North Conway corridor has constant bear conflict at vacation properties, restaurant dumpsters, and campgrounds — demand for bear-proofing services runs from spring through November. Squam Lake and the Ossipee Valley generate moose-related calls from both residents and visitors who encounter them on rural roads and at edge-of-forest properties. White Mountain National Forest and Mount Chocorua provide an effectively unlimited reservoir of source habitat, keeping pressure on residential and commercial properties consistently high throughout the year. Porcupines are common in the forested interior towns.`;
    blockC = `Coverage spans Conway, Wolfeboro, Ossipee, Wakefield, Tamworth, and Tuftonboro, along with the smaller mountain and lake-area communities. Portland, ME is about 60 miles east and Concord about 70 miles south — both require significant travel, underscoring the value of locally based contractors.`;
    metaTitle = `Carroll County NH Wildlife Removal | White Mountains & Conway Area Bears & Moose`;
    metaDescription = `Licensed wildlife removal in Carroll County, NH. Black bears, moose, fishers, and porcupines in the eastern White Mountains — serving Conway, Wolfeboro, Ossipee, and Tamworth.`;

  } else if (countyName === 'Sullivan County') {
    blockA = `Following the Connecticut River south from Grafton County, Sullivan County occupies western New Hampshire's quieter middle tier. Claremont is the county's largest city, sitting on the river; Newport serves as the county seat inland. At ${county.population.toLocaleString()} residents established in ${county.established}, it's one of New Hampshire's smaller counties by population, shaped by former mill-town economies along the river and wooded hills extending east toward Lake Sunapee and Pillsbury State Park.`;
    blockB = `The Connecticut River floodplain and its Sullivan County tributaries produce consistent beaver dam and flooding issues that affect agricultural land, culverts, and road drainage in the river towns — particularly around Charlestown and Cornish. The Sunapee resort community is a separate pressure zone: seasonal camps and lake homes near Mount Sunapee State Park and Lake Sunapee are targeted by black bears for unsecured garbage from spring through October, and the same structures host overwintering rodents and bat colonies during the off-season. Fishers are common in the wooded interior hills. ${cap(county.absent_or_rare)}.`;
    blockC = `Coverage runs from Claremont on the river east through Newport and Charlestown, up to the Sunapee resort corridor, and into the smaller hill townships throughout the county. Sitting roughly equidistant between Lebanon to the north and Concord to the east, Sullivan County lacks a dominant metro anchor — which is exactly why a contractor based in the county matters more here than elsewhere.`;
    metaTitle = `Sullivan County, NH Wildlife Removal | Claremont, Newport & Sunapee Area`;
    metaDescription = `Licensed wildlife removal in Sullivan County, NH. Black bears, deer, raccoons, and beavers along the Connecticut River and Sunapee area — serving Claremont, Newport, and Charlestown.`;

  } else if (countyName === 'Coos County') {
    blockA = `Everything north of the White Mountains is Coos County — roughly 1,800 square miles of working timberland, mountain terrain, and small mill towns that make it the most remote county in New Hampshire and one of the most sparsely populated in New England. Its ${county.population.toLocaleString()} residents are distributed across Berlin, Gorham, Lancaster, Colebrook, and dozens of small townships, many of which have lost population steadily over recent decades. The Connecticut Lakes near Pittsburg define the Quebec border at the state's northern tip. Mount Washington — the highest peak in the Northeast — rises from the county's southern edge.`;
    blockB = `Moose are the defining species of Coos County wildlife. The Great North Woods hold the highest moose density in New Hampshire, and moose-vehicle collisions, yard intrusions, and agricultural conflicts are year-round realities for the county's residents and camp owners. Black bears are equally common and routinely encountered at camp properties, garbage sites, and rural residences throughout the county. Fishers and porcupines are a persistent nuisance around older agricultural outbuildings and remote camp structures. Raccoons are present but secondary to the large-bodied species that dominate residential wildlife calls here. The scale and character of the forested landscape means wildlife management in Coos County is fundamentally different from anything in southern New Hampshire.`;
    blockC = `Service covers Berlin, Gorham, Lancaster, Colebrook, Whitefield, and Pittsburg, along with the remote townships in between. Portland, ME and Concord are each more than 100 miles away, making locally based coverage essential for timely response throughout the county.`;
    metaTitle = `North Country Wildlife Removal — Coos County, NH | Great North Woods`;
    metaDescription = `Licensed wildlife removal in Coos County, NH. Moose, black bears, fishers, and porcupines in the Great North Woods — serving Berlin, Gorham, Lancaster, and Colebrook.`;
  }

  const blockD = `Wildlife intrusion in ${countyName} follows New Hampshire's three main pressure windows: ${s.peak_intrusion_season}. ${s.climate_factor}.`;
  const blockE = `All commercial wildlife trapping in New Hampshire is regulated by the <strong>${s.agency}</strong>. ${s.permit_note}. Every contractor in our network holds a valid NH Wildlife Control Operator license and operates in compliance with NH Fish and Game protocols on species-specific handling and relocation.`;

  return { blockA, blockB, blockC, blockD, blockE, metaTitle, metaDescription };
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

  return null;
}

module.exports = { getCountyContent };
