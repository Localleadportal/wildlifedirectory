// countyTexture.js — per-county field notes for removewildlifenow.com
// Keyed `${stateName}|${countyName}`. Plain factual tone, no marketing voice.

const COUNTY_TEXTURE = {
  "Georgia|Bartow County": {
    terrain: "Lake Allatoona and Red Top Mountain anchor the east, while the Etowah River cuts through the center. Piedmont ridges, red clay, and pine-hardwood forest fill the ground between the water corridors.",
    housing: "Cartersville holds pre-1940 mill housing near downtown, with 1990s-2010s subdivisions across southern Bartow. Rural and lake homes sit on wooded lots, often with aging soffits and open eaves.",
    pressure: "The Allatoona shoreline forest sustains one of north Georgia's densest raccoon populations, moving nightly into nearby homes. Big brown bats hold long-established colonies in older mill housing, and roof rats have pushed up the I-75 corridor."
  },
  "Georgia|Bibb County": {
    terrain: "Macon sits on the Fall Line where Piedmont meets Coastal Plain, with the Ocmulgee River bisecting the county and Lake Tobesofkee to the west. Tobesofkee and Walnut creeks drain wooded bottomland through much of the area.",
    housing: "Pre-1860 antebellum homes dominate Vineville, In-Town, and Beall's Hill, alongside pre-1900 Pleasant Hill blocks and mid-century Ingleside homes. Newer subdivisions ring the northern and western edges.",
    pressure: "Antebellum chimneys host bat colonies occupied for decades, and the Ocmulgee corridor feeds raccoons and opossums intown. Fox squirrels, Brazilian free-tailed bats, and long-established armadillos reflect the warmer southern mix."
  },
  "Georgia|Butts County": {
    terrain: "Piedmont hills midway between Atlanta and Macon, with Lake Jackson on the eastern boundary where the Yellow and South rivers meet. The Towaliga River runs through Indian Springs State Park, and I-75 cuts the center.",
    housing: "Jackson's pre-1900 courthouse-square homes form the oldest core, with lakefront houses along Lake Jackson. Most other housing is rural-residential on acreage, plus subdivisions near the I-75 exits.",
    pressure: "Indian Springs and the Lake Jackson shoreline sustain raccoon, opossum, and bat pressure into nearby homes, with lakefront raccoons often food-subsidized. Jackson chimneys hold old bat colonies, while I-75 restaurants support Norway rats."
  },
  "Georgia|Carroll County": {
    terrain: "West Georgia Piedmont on the Alabama line, bounded east by the Chattahoochee River and crossed by the Little Tallapoosa. Farmland and pine-hardwood forest cover the west, and I-20 runs across the north.",
    housing: "Carrollton's Maple Street district holds antebellum and Victorian homes, Bowdon keeps an 1850s core, and Whitesburg retains mill-town housing. Mid-century rural homes and I-20 subdivisions make up much of the rest.",
    pressure: "Carroll is a long-established armadillo source county, with animals dispersing east and north from here. Old Carrollton chimneys hold decades-old bat colonies, beavers flood rural roads in the Tallapoosa basin, and the Chattahoochee corridor supplies raccoons year-round."
  },
  "Georgia|Chatham County": {
    terrain: "Coastal Plain at the mouth of the Savannah River, with the Ogeechee River south and the ocean east. Salt marsh, tidal creeks, and live-oak forest under Spanish moss shape nearly every neighborhood edge.",
    housing: "Savannah's Historic District holds 1700s-1800s brick row houses and cottages with old chimneys. Pooler is far newer subdivisions, while Tybee and Skidaway mix beach and marsh-front houses.",
    pressure: "Roof rat pressure in the historic district is among the Southeast's highest, fed by dense food service and old structural gaps. Bats roost in row-house attics, raccoons work the marsh edge, and cottonmouths appear on tidal properties."
  },
  "Georgia|Cherokee County": {
    terrain: "Piedmont uplands rising toward the Blue Ridge foothills, crossed by the Etowah River. Lake Allatoona borders the southwest, and Sharp and Blackjack mountains add unbroken forest to the north.",
    housing: "Stock ranges from pre-1900 mill housing in Canton to small-town homes in Ball Ground. The bulk is 1990s-2010s subdivision growth in Woodstock and Holly Springs, much of it backing onto woods and creeks.",
    pressure: "The Etowah corridor holds a continuous raccoon population, and Allatoona shoreline forest supports bats along the southern boundary. Roof rats followed I-575 into Woodstock subdivisions, while forest-edge homes see steady squirrels, opossums, and armadillos."
  },
  "Georgia|Clarke County": {
    terrain: "Northeastern Piedmont at Athens, one of Georgia's smallest counties, split by the North and Middle Oconee rivers. Sandy Creek, the State Botanical Garden, and the University of Georgia canopy preserve wooded blocks inside the city.",
    housing: "Antebellum and Victorian homes concentrate in Cobbham, Boulevard, Bloomfield, and Five Points, with mill villages in East Athens. Mid-century neighborhoods and newer subdivisions fill the eastern and northern edges.",
    pressure: "Antebellum chimneys host bat colonies documented for 50 years or more, among north Georgia's longest-established. Norway rats center on downtown and campus food service, squirrels work the oak canopy, and the Oconee corridors move raccoons nightly."
  },
  "Georgia|Cobb County": {
    terrain: "Northwestern metro Atlanta north of the Chattahoochee River, with the river corridor along the south and west. Kennesaw Mountain, Sweetwater Creek, and Lake Allatoona's northern edge break up otherwise continuous suburbs.",
    housing: "Older brick-and-frame homes cluster around Marietta Square and inner Smyrna, with mature oak-hickory canopy over East Cobb and Vinings. Much of the county is 1960s-1990s subdivisions whose trees now overhang roofs directly.",
    pressure: "Mature canopy gives squirrels and raccoons direct roof access across older neighborhoods, and bats colonize the historic Marietta and Smyrna stock. Armadillos root lawns along the Chattahoochee corridor, and Norway rats persist in older commercial strips."
  },
  "Georgia|Coweta County": {
    terrain: "Southwestern metro exurbs with the Chattahoochee River west and I-85 through the center. Whitewater, Yellow Jacket, and Cedar creeks drain Piedmont farmland and forest between Newnan and the smaller towns.",
    housing: "Newnan, the 'City of Homes,' holds an exceptional concentration of antebellum and Victorian houses, and Senoia keeps a pre-1900 district. Substantial 1990s-2010s subdivisions fill the I-85 corridor, with rural homes across the south.",
    pressure: "Pre-1900 Newnan and Senoia chimneys hold bat colonies spanning decades, and the Chattahoochee corridor supplies raccoons into western subdivisions. Roof rats followed I-85 into southern neighborhoods, while Norway rats center on the older commercial blocks."
  },
  "Georgia|Crawford County": {
    terrain: "Middle Georgia on the Fall Line, Piedmont uplands north giving way to Coastal Plain sandhills south. The Flint River forms the western boundary and Echeconnee Creek the eastern, with pine-hardwood forest over most acreage.",
    housing: "Knoxville, the small seat, and Roberta hold pre-1900 homes along US 80, near the pre-Civil War courthouse. Most other homes are 1950s-2000s rural houses on farmland and hunting acreage.",
    pressure: "The Flint corridor sustains raccoons, opossums, beavers, and cottonmouths in slack-water reaches, heavier here than in neighboring counties. Fox squirrels are routine in pine-hardwood, armadillos are established countywide, and Knoxville chimneys hold bat colonies."
  },
  "Georgia|DeKalb County": {
    terrain: "Eastern metro Atlanta, bisected by Peachtree Creek's forks and the South River. Stone Mountain and Arabia Mountain granite outcrops anchor large preserved woodlands, with the Yellow River on the eastern boundary.",
    housing: "The county holds metro Atlanta's densest pre-WWII intown stock — Decatur, Druid Hills, and East Atlanta homes from the 1900s-1940s under old canopy. Established 1960s-1980s suburbs ring Stone Mountain.",
    pressure: "Old intown attics sustain bat colonies, flying squirrels, and heavy roof rat pressure fed by restaurant districts. Druid Hills canopy produces some of the metro's highest squirrel densities, and Stone Mountain disperses raccoons into surrounding streets."
  },
  "Georgia|Douglas County": {
    terrain: "Western metro Atlanta along I-20, with the Chattahoochee River east and Sweetwater Creek and its state park cutting through the county. The Dog River watershed and Piedmont uplands fill the west.",
    housing: "Most housing is 1980s-2010s subdivisions along the I-20 corridor in Douglasville and Lithia Springs, much of it backing onto creek woods. A smaller pre-WWII inventory remains in Douglasville's historic downtown.",
    pressure: "Sweetwater Creek State Park and the Chattahoochee corridor sustain raccoons, opossums, and bats that disperse into subdivisions built against the woods. Roof rats entered 2000s-era I-20 subdivisions, squirrels work the canopy, and armadillos arrive from the Carroll side."
  },
  "Georgia|Fayette County": {
    terrain: "Southern metro Atlanta anchored by Peachtree City's three lakes — Peachtree, Kedron, and McIntosh — fed by Flat and Whitewater creeks. 100-plus miles of golf-cart paths run through greenspace connecting neighborhoods to the lakeshores.",
    housing: "Peachtree City is master-planned 1970s-1990s subdivisions woven through greenspace, while Fayetteville holds a pre-1900 historic downtown core. Tyrone and the smaller communities carry mid-century rural-suburban homes on larger lots.",
    pressure: "The lakes and cart-path greenspace function as a continuous travel corridor, moving raccoons and bats from shoreline forest straight to homes. Roof rats dominate in Peachtree City's mature subdivisions, and old Fayetteville housing holds long-established bat colonies."
  },
  "Georgia|Fulton County": {
    terrain: "Central metro Atlanta along the Chattahoochee River on its western boundary, from Milton to South Fulton. Big Creek, Vickery Creek, and the BeltLine corridor cut green threads through dense urban ground.",
    housing: "The mix is the metro's widest: pre-1940 intown neighborhoods like Buckhead, Inman Park, and West End, mid-century ranches in Sandy Springs and Roswell, and 1990s-2010s subdivisions across Alpharetta, Johns Creek, and Milton.",
    pressure: "Fulton carries metro Atlanta's highest Norway rat density along the BeltLine and downtown food corridors, while pre-1940 chimneys hold bat colonies occupied for decades. Roof rats drive most north Fulton calls, and Chattahoochee raccoons run large year-round."
  },
  "Georgia|Gwinnett County": {
    terrain: "Northeastern metro Atlanta from Lake Lanier's shoreline north to the Yellow River through the center. The Chattahoochee River forms the western boundary, and Suwanee and Big Haynes creeks drain the interior.",
    housing: "Most of the county is 1980s-2010s subdivisions across Peachtree Corners, Suwanee, Duluth, and Snellville. Older cores remain at Lawrenceville's pre-1900 square and Norcross's 1870 historic downtown, both under mature canopy.",
    pressure: "Roof rats followed I-85 and now drive most suburban call volume, while the Buford Highway food corridor sustains year-round Norway rats. Lanier shoreline forest disperses raccoons and bats south in fall, and old Lawrenceville homes hold decades-old bat colonies."
  },
  "Georgia|Henry County": {
    terrain: "South metro Atlanta along I-75 through Stockbridge, McDonough, and Locust Grove, with Atlanta Motor Speedway at Hampton west. The South River runs along the east, and Panola Mountain preserves northwestern woodland.",
    housing: "Henry has been one of metro Atlanta's fastest-growing counties, dominated by 1990s-2020s subdivisions on former rural land. McDonough keeps a small pre-1900 courthouse-square core, one of few older pockets.",
    pressure: "Three I-75 commercial clusters and speedway weekends produce Norway rat pressure spilling into nearby subdivisions. Roof rats are established in subdivision canopy, armadillos work rural-edge yards, and McDonough chimneys hold decades-old bat colonies."
  },
  "Georgia|Houston County": {
    terrain: "Middle Georgia Coastal Plain south of the Fall Line, with the Ocmulgee River east and sandy soils under pine remnants. Robins Air Force Base buffer acreage leaves a large undeveloped block centrally.",
    housing: "Warner Robins is almost entirely post-1942 housing built around the base, while Perry holds antebellum homes around its courthouse square. Bonaire and Kathleen mix subdivisions with rural homes near Houston Lake.",
    pressure: "The base buffer disperses raccoons, opossums, and fox squirrels into Warner Robins neighborhoods, and Perry's chimneys hold bat colonies spanning decades. Free-tailed bats use commercial structures, and armadillos are long established."
  },
  "Georgia|Jasper County": {
    terrain: "Central Piedmont east of the Ocmulgee River, with Lake Jackson west. The Charlie Elliott Wildlife Center, Cedar Creek WMA, and Oconee National Forest cover large portions in preserved forest.",
    housing: "Monticello, the small antebellum seat, holds pre-1900 homes around its courthouse square with newer homes on the edges. The rest is rural and farm homes across a large, thinly populated land base.",
    pressure: "With so much managed land per resident, raccoon, opossum, fox squirrel, and bat source populations are unusually large for the housing stock. Monticello chimneys hold decades-old bat colonies, and lake corridors add pressure."
  },
  "Georgia|Lamar County": {
    terrain: "Southern exurban Piedmont crossed by the Towaliga River, with High Falls State Park just over the northern boundary. Farm and pine-hardwood land surrounds Barnesville, and I-75 clips the east near Aldora.",
    housing: "Barnesville, the 'Buggy Capital of the South,' holds one of central Georgia's more intact pre-1900 housing inventories. Gordon State College adds campus-area housing, with rural homes across the rest.",
    pressure: "Pre-1900 Barnesville chimneys host bat colonies occupied for many decades, and Gordon State's mature canopy supports raccoons, opossums, and squirrels dispersing into nearby blocks. The Towaliga corridor adds steady pressure, and fox squirrels are routine on rural acreage."
  },
  "Georgia|Monroe County": {
    terrain: "Central Piedmont between Atlanta and Macon, with the Towaliga River and High Falls north and the Ocmulgee River east. Lake Juliette and Plant Scherer dominate the east with shoreline forest.",
    housing: "Forsyth holds a substantial pre-1900 core around its courthouse square, plus homes near the former Tift College campus. Bolingbroke is an upscale corridor toward Macon, and rural homes fill the rest.",
    pressure: "Forsyth's old chimneys hold bat colonies spanning many decades, while the I-75 exit cluster sustains Norway rats dispersing into nearby blocks. Lake Juliette's shoreline supports raccoons and bats, including free-tailed colonies using plant structures nearby."
  },
  "Georgia|Paulding County": {
    terrain: "Northwestern exurbs where the 25,000-acre Paulding Forest WMA and Sheffield WMA dominate the west. The Silver Comet Trail runs through Hiram, and Pumpkinvine Creek and Etowah tributaries drain the Piedmont.",
    housing: "Dallas holds mature-canopy older neighborhoods and a pre-1900 courthouse-square downtown, while Hiram is a fast-growing retail and subdivision corridor. Explosive 2000s-2020s subdivisions now press directly against the WMA's eastern and southern edges.",
    pressure: "The WMA holds one of the metro fringe's densest raccoon, opossum, and bat populations, dispersing into edge subdivisions. The Silver Comet canopy moves wildlife between neighborhoods, Dallas blocks sustain Norway rats, and armadillos arrive from the south."
  },
  "Georgia|Peach County": {
    terrain: "Middle Georgia Coastal Plain south of the Fall Line, defined by thousands of acres of peach orchards. Big Indian and Echeconnee creeks cross sandhill and longleaf remnants, and I-75 runs through Byron.",
    housing: "Fort Valley holds pre-1900 courthouse-square homes and 1920s-1960s neighborhoods around Fort Valley State University. Byron is mostly 1980s-2010s I-75 corridor housing, newer than the seat.",
    pressure: "The May-August peach harvest feeds raccoons, opossums, and fox squirrels at high density, and that pressure spills into adjacent Fort Valley homes each summer. Old Fort Valley chimneys hold decades-old bat colonies, and armadillos are long established."
  },
  "Georgia|Pike County": {
    terrain: "Rural southern exurbs on the Flint River's western corridor, crossed by Elkins and Beaver creeks and US 19. Peach orchards, blueberry operations, and pine-hardwood remnants cover much of the farmland.",
    housing: "Zebulon's pre-1900 core around its 1822 courthouse square is the seat, and Molena, Williamson, Concord, and Meansville each keep small old downtowns. Most homes are rural-residential on acreage, not subdivision lots.",
    pressure: "With so much farmland per home, properties absorb continuous pressure from surrounding rural land, including high fox squirrel and raccoon activity. Zebulon chimneys hold decades-old bat colonies, orchards spike summer pressure, and the Flint carries cottonmouths."
  },
  "Georgia|Spalding County": {
    terrain: "South metro exurbs along US 19/41 through Griffin, with Cabin Creek and the Towaliga drainage crossing the county. Farmland — peach orchards, blueberries, research plots — fills the south.",
    housing: "Griffin holds a substantial pre-1900 inventory around its 1851 courthouse square, more intact than many south-metro towns. Northern Spalding is suburban-edge growth, while the south is rural and agricultural.",
    pressure: "Griffin's old chimneys host bat colonies occupied for many decades, and the University of Georgia Griffin Campus supports raccoons, opossums, and squirrels dispersing into nearby blocks. Roof rats follow US 19/41, and armadillos are established on rural edges."
  },
  "Georgia|Upson County": {
    terrain: "Piedmont on the Flint River, which forms the western boundary and runs through Sprewell Bluff State Park. Farm and pine-hardwood land covers most of the county, with US 19 through Thomaston.",
    housing: "Thomaston combines pre-1900 courthouse-square blocks with mill-village housing around the historic Thomaston Mills textile site. Yatesville is a small older community, and the rest is rural-residential on acreage.",
    pressure: "Thomaston's old chimneys hold bat colonies spanning many decades, and the mill-village stock adds worn rooflines and entry gaps. The Flint corridor sustains raccoons, opossums, beavers, and cottonmouths, and fox squirrels are routine in pine-hardwood."
  },
  "Tennessee|Davidson County": {
    terrain: "Nashville sits in the Cumberland River basin, the river looping through the city with wooded ridges west and south. Creek corridors and bottomland thread through otherwise dense urban ground.",
    housing: "The county mixes dense urban blocks and older pre-war neighborhoods with aging inner-ring suburbs and newer infill. Older attics, chimneys, and crawl spaces are common entry terrain across the established residential core.",
    pressure: "Big brown bats and raccoons are the signature attic pressure in older Nashville housing, working chimneys and rooflines along the river corridors. Rats follow dense commercial ground, and squirrels use the mature street canopy for roof access."
  },
  "Tennessee|Franklin County": {
    terrain: "Winchester and Sewanee sit at the Cumberland Plateau edge, with Tims Ford Lake's shoreline west. Wooded slopes, hollows, and creek bottoms give the county a heavily forested character outside its towns.",
    housing: "Housing is small-town and rural: older Winchester homes, wooded lake lots, and mountain-adjacent homes near Sewanee. Many properties back onto unbroken woods, with decks and crawl spaces close to cover.",
    pressure: "Wooded lots produce steady groundhog burrowing, bats in older rooflines, and snakes around lake and creek edges. Raccoons and squirrels move from plateau forest to homes with little barrier, especially near the lake and Sewanee."
  },
  "Tennessee|Shelby County": {
    terrain: "Memphis occupies Mississippi River bluffs above broad floodplain, with the Wolf and Loosahatchie rivers crossing the county. River-corridor woods, bayous, and drainage channels run through and behind many older neighborhoods.",
    housing: "The housing stock skews older across Memphis, with large early-1900s and mid-century neighborhoods, aging rooflines, and older crawl spaces. Newer subdivisions fill the eastern suburbs, but the city's core stock is among Tennessee's oldest.",
    pressure: "River-corridor raccoons are persistent across Memphis, and the older housing stock gives bats, squirrels, and rats ready entry. Armadillos are established here and root lawns in the southern and river-adjacent neighborhoods."
  },
  "Tennessee|Williamson County": {
    terrain: "Franklin and Brentwood sit in the Harpeth River valley south of Nashville, with wooded ridges and creek bottoms between subdivisions. Large preserved lots and mature hardwood canopy define much of the residential landscape.",
    housing: "Housing is predominantly affluent, large-lot suburban homes, many with big attics, complex rooflines, and mature trees overhanging the roof. Older homes remain in Franklin's historic core, with newer large subdivisions across Brentwood.",
    pressure: "Groundhogs burrow under decks, sheds, and foundations on large lots, and squirrels work the mature canopy straight onto roofs. Raccoons and bats use the Harpeth corridor and wooded lot edges, keeping pressure steady year-round."
  },
  "Connecticut|Fairfield County": {"terrain":"Long Island Sound shoreline and Sherwood Island marshes give way to wooded interior hills around Devil's Den Preserve and the Greenwich backcountry.","housing":"Gold Coast colonials and large suburban homes line the Sound towns, while Bridgeport and Danbury hold older multifamily and mill-era blocks with aging rooflines.","pressure":"Norway rats persist in Bridgeport's older blocks year-round, raccoons and skunks work Gold Coast yards nightly, and moles tear up manicured lawns each spring."},
  "Connecticut|Hartford County": {"terrain":"The Connecticut River floodplain runs the county center, with Talcott Mountain and Penwood traprock ridges rising through wooded suburbs to the west.","housing":"Hartford and New Britain mix brick multifamily housing with older single-family blocks, ringed by West Hartford and Manchester colonials under mature street canopy.","pressure":"Norway rats anchor calls in Hartford and New Britain, bats colonize older valley homes in summer, and moles damage suburban lawns from spring onward."},
  "Connecticut|Litchfield County": {"terrain":"Connecticut's most forested county climbs into wooded hills and small mountains around Mohawk and Housatonic state forests, Lake Waramaug, and Macedonia Brook.","housing":"Torrington and Winsted keep mill-town multifamily stock, while lake camps, farmhouses, and second homes scatter across wooded lots in the hill towns.","pressure":"Porcupines gnaw camps, decks, and vehicles through the hills, fishers take chickens on small farms, and bats settle older lake homes each summer."},
  "Connecticut|Middlesex County": {"terrain":"The lower Connecticut River and its estuary meet Long Island Sound at Hammonasset Beach, backed by Cockaponset State Forest and inland river woods.","housing":"Middletown holds older river-town homes and multifamily blocks, while Old Saybrook, Essex, and Clinton mix shoreline cottages with year-round colonials.","pressure":"Muskrats and beavers press shoreline properties along the river corridor, bats return to older shore homes in summer, and moles work Middletown lawns steadily."},
  "Connecticut|New Haven County": {"terrain":"Sleeping Giant and West Rock traprock ridges cut through dense suburbs between the New Haven and Waterbury cores and the Long Island Sound shore.","housing":"New Haven's triple-deckers and Waterbury's post-industrial blocks hold the oldest stock, with Hamden, Cheshire, and Milford suburbs under heavy tree canopy.","pressure":"Norway rats run heavy in New Haven and Waterbury's older housing, raccoons and skunks work the suburban ring, and moles damage lawns all season."},
  "Connecticut|New London County": {"terrain":"Pachaug State Forest's timberland fills the north, while the Mystic and Thames river estuaries and Bluff Point shape the southeastern Sound shoreline.","housing":"Norwich and New London keep older mill and port housing, Groton adds dense suburban stock, and Stonington mixes coastal cottages with farmhouses.","pressure":"Fishers work the Pachaug-edge farm towns, beavers and muskrats press Mystic and Thames waterfronts, and bats colonize older Stonington and East Lyme homes."},
  "Connecticut|Tolland County": {"terrain":"Rolling wooded hills around Shenipsit and Nipmuck state forests and Mansfield Hollow give this county a quiet, heavily treed, farm-dotted character.","housing":"Mansfield centers on student rentals near the university, Vernon holds denser suburban homes, and Stafford and Coventry mix farmhouses with lake cottages.","pressure":"Raccoons and skunks concentrate around Mansfield student housing, fishers reach coops in Tolland and Stafford, and bats recur in Vernon and Coventry homes."},
  "Connecticut|Windham County": {"terrain":"The Quiet Corner's Natchaug and Goodwin state forests and the Quinebaug River corridor run through Connecticut's most rural, hill-farm landscape.","housing":"Small mill villages like Putnam and Willimantic hold the older multifamily stock, surrounded by farmhouses, barns, and rural homes on large wooded lots.","pressure":"Fishers are routine across the wooded townships, barns host raccoon families and bat colonies, and beavers flood low ground along the Quinebaug corridor."},
  "Delaware|New Castle County": {"terrain":"Northern Delaware Piedmont woodland follows White Clay Creek and Brandywine Creek down to the Delaware River corridor above Wilmington.","housing":"Wilmington rowhouses and older city blocks give way to Newark and Middletown subdivisions, with colonials and ranches across the Bear and Glasgow suburbs.","pressure":"Groundhogs burrow suburban edges all season, raccoons and gray squirrels work the creek woodlands, and Norway rats persist in Wilmington's oldest neighborhoods."},
  "Delaware|Kent County": {"terrain":"Central Delaware is flat agricultural lowland and coastal marsh between the two bays, anchored by Bombay Hook refuge and Killens Pond.","housing":"Dover mixes older capital-city homes with newer subdivisions, while Smyrna, Milford, and Harrington hold small-town single-family stock amid farmland.","pressure":"Muskrats and raccoons work farm ponds and tidal ditches, snapping turtles appear around pond edges, and squirrels stay thinner than in wooded New Castle."},
  "Delaware|Sussex County": {"terrain":"Southern Delaware pairs Atlantic beach and Delaware Bay shore at Cape Henlopen and Prime Hook with coastal pine forest and Trap Pond inland.","housing":"Lewes and Rehoboth Beach mix beach cottages and vacation homes with year-round subdivisions, while Seaford and Georgetown hold older inland town housing.","pressure":"Bats roost heavily in coastal vacation homes left closed off-season, raccoons and red foxes work marsh-edge yards, and squirrels fill the pine woods."},
  "New Hampshire|Rockingham County": {"terrain":"New Hampshire's short Atlantic coast and Great Bay tidal estuary meet Pawtuckaway's wooded interior in the state's most developed southeastern county.","housing":"Portsmouth and Exeter hold colonial-era homes and older multifamily blocks, while Derry, Salem, and Londonderry are dense commuter subdivisions.","pressure":"Bats recur in older Portsmouth and Exeter homes each summer, raccoons and skunks persist in commuter yards, and moles damage lawns across the suburbs."},
  "New Hampshire|Hillsborough County": {"terrain":"The Merrimack River corridor links the Manchester and Nashua cores to heavily wooded western towns toward Pisgah and Bear Brook country.","housing":"Manchester and Nashua mix mill-era multifamily housing with older single-family blocks, ringed by Bedford, Merrimack, and Hudson commuter subdivisions.","pressure":"Norway rats, raccoons, and skunks stay steady in the mill cities, fishers appear in suburban yards, and moles work Bedford and Merrimack lawns."},
  "New Hampshire|Merrimack County": {"terrain":"The Merrimack River valley runs past Concord through river suburbs, with forested hills and Mount Kearsarge rising behind the capital.","housing":"Concord holds older in-town homes and small multifamily blocks, Hooksett and Bow add river-valley subdivisions, and Franklin keeps mill-town housing.","pressure":"Raccoons, skunks, and squirrels press Concord neighborhoods year-round, beavers flood Merrimack tributaries and culverts, and moles damage lawns across the valley towns."},
  "New Hampshire|Strafford County": {"terrain":"The Cocheco River corridor and Bellamy River lowlands link Dover and Rochester to Durham's campus woodlands on the way toward the lakes.","housing":"Dover, Rochester, and Somersworth hold older mill-city homes and multifamily stock, while Durham mixes student rentals with small-town single-family housing.","pressure":"Raccoons and skunks concentrate around Durham student housing, bats recur in older Dover and Rochester homes, and moles work lawns across the county."},
  "New Hampshire|Cheshire County": {"terrain":"Mount Monadnock and Pisgah State Park anchor wooded hills and farmland above the Connecticut River valley in New Hampshire's southwestern corner.","housing":"Keene holds older college-town homes and small multifamily blocks, while Swanzey, Jaffrey, and Walpole mix farmhouses with rural homes on wooded lots.","pressure":"Porcupines damage outbuildings, decks, and vehicles across the Monadnock towns, bats settle older Keene homes, and fishers take chickens on rural homesteads."},
  "New Hampshire|Grafton County": {"terrain":"Franconia Notch, Mount Moosilauke, and White Mountain National Forest dominate the north, with the Upper Connecticut River valley and Dartmouth country south.","housing":"Hanover and Lebanon hold college and medical-center housing, Plymouth and Littleton keep small-town stock, and Lincoln is dense with vacation condos and camps.","pressure":"Bats and overwintering rodents fill White Mountain vacation homes left empty for months, fishers hit Upper Valley coops, and porcupines gnaw mountain decks."},
  "New Hampshire|Belknap County": {"terrain":"Lake Winnipesaukee's shoreline and the Gunstock and Belknap Mountain slopes define this compact Lakes Region county of wooded hills and coves.","housing":"Laconia mixes year-round homes with lake cottages, while Gilford, Meredith, and Alton are heavy with seasonal camps and second homes on the water.","pressure":"Bats and mice move into Winnipesaukee camps closed all winter, raccoons raid screened porches and decks, and moles damage Gilford and Meredith lawns."},
  "New Hampshire|Carroll County": {"terrain":"The eastern White Mountains, Mount Chocorua, and Squam Lake frame mountain valleys running from Conway down to Winnipesaukee's eastern shore.","housing":"Conway and North Conway mix year-round homes with rentals and motels, Wolfeboro holds lake cottages, and Tamworth keeps rural farmhouses and camps.","pressure":"Raccoons and bats press Conway vacation properties and rentals constantly, fishers and porcupines damage mountain outbuildings, and rodents overwinter in seasonal camps."},
  "New Hampshire|Sullivan County": {"terrain":"The Connecticut River floodplain and its tributaries run below Mount Sunapee and Pillsbury State Park's wooded hills in western New Hampshire.","housing":"Claremont and Newport hold mill-town multifamily and older single-family stock, while Sunapee mixes lake homes with seasonal cottages around the mountain.","pressure":"Beavers dam tributaries and flood fields, culverts, and roads in the river towns, bats use Sunapee lake homes off-season, and fishers reach interior coops."},
  "New Hampshire|Coos County": {"terrain":"The Great North Woods, Mount Washington, and the Connecticut Lakes cover New Hampshire's remote northern tip in vast working timberland and mountains.","housing":"Berlin, Lancaster, and Colebrook keep older mill-town and farmhouse stock, surrounded by hunting camps and seasonal cabins scattered through the forest.","pressure":"Beavers flood woods roads and camp properties, fishers and porcupines persist at remote camps, and bats recur in Berlin and Colebrook's older homes."},
  "Rhode Island|Providence County": {"terrain":"The Blackstone River corridor and Lincoln Woods cut green threads through dense Providence, Pawtucket, and Woonsocket mill-city ground in northern Rhode Island.","housing":"Providence, Pawtucket, and Woonsocket hold triple-deckers, mill-era multifamily blocks, and older single-family homes, with wooded suburbs to the north and west.","pressure":"Norway rats run dense in the older mill neighborhoods, raccoons work attics and dumpsters citywide, and bats colonize older multifamily homes each summer."},
  "Rhode Island|Kent County": {"terrain":"Greenwich Bay's shoreline and Goddard Park give way westward to the Big River Management Area's woods across Coventry and West Greenwich.","housing":"Warwick is dense postwar suburbia along the bay, East Greenwich holds older village homes, and the western towns mix farmhouses with wooded-lot homes.","pressure":"Raccoons and skunks press Warwick attics and decks, moles damage East Greenwich lawns, and fishers occasionally damage outbuildings in the wooded western interior."},
  "Rhode Island|Washington County": {"terrain":"South County's salt ponds, Trustom Pond and Ninigret refuges, and Burlingame pine-oak forest make southern Rhode Island the state's most rural coastal stretch.","housing":"Narragansett and Westerly mix beach cottages and vacation homes with year-round housing, while South Kingstown and Hopkinton hold farmhouses and rural homes.","pressure":"Bats fill coastal vacation homes left empty off-season, fishers take chickens in the inland forest, and beavers flood rural streams and culverts."},
  "Rhode Island|Newport County": {"terrain":"Aquidneck and Conanicut islands face Narragansett Bay and Block Island Sound, with Sachuest Point and the Norman Bird Sanctuary holding open shoreline.","housing":"Newport mixes Gilded Age mansions, historic colonials, and older multifamily blocks, while Middletown and Portsmouth add suburban homes and Tiverton farmhouses.","pressure":"Bats colonize Newport's historic homes and mansions, raccoons persist at waterfront properties, Norway rats concentrate downtown, and pigeons roost on historic buildings."},
  "Rhode Island|Bristol County": {"terrain":"A narrow, fully developed peninsula between the Providence River and Mount Hope Bay, edged by Colt State Park and Touisset Marsh shoreline.","housing":"Bristol and Warren hold historic waterfront homes and older multifamily blocks, while Barrington is manicured suburbia on small wooded and tidal lots.","pressure":"Raccoons, skunks, and opossums are constant across the peninsula, bats recur in older Bristol and Warren homes, and Norway rats hold the waterfront blocks."},
  "Vermont|Addison County": {"terrain":"Champlain Valley dairy farmland along Lake Champlain rises east into the Green Mountains at Mount Abraham and the Bread Loaf Wilderness.","housing":"Middlebury holds college-town homes and older village blocks, Vergennes is Vermont's smallest city, and farmhouses with barns dominate the valley towns.","pressure":"Raccoons, skunks, and Norway rats press Middlebury and Vergennes barns and feed storage, while woodchucks dig under sheds across the dairy valley."},
  "Vermont|Bennington County": {"terrain":"The Battenkill River valley runs below Mount Equinox and the Lye Brook Wilderness in Vermont's southwestern Green Mountain corner.","housing":"Bennington keeps older town homes and small multifamily stock, Manchester mixes village homes with second homes, and Pownal and Arlington hold farmhouses.","pressure":"Bats and rodents fill Manchester second homes left empty off-season, and porcupines gnaw outbuildings, decks, and vehicles throughout the rural towns."},
  "Vermont|Caledonia County": {"terrain":"Northeast Kingdom rolling hills, Groton State Forest, and the Connecticut River corridor frame small farms and large blocks of working forest.","housing":"St. Johnsbury holds Victorian-era homes and mill-era blocks, Lyndon adds college-town housing, and farmhouses with aging barns scatter across the hill towns.","pressure":"Fishers take chickens on rural properties, beavers flood culverts and farm roads, and small surviving bat colonies still use older farmhouses and barns."},
  "Vermont|Chittenden County": {"terrain":"Lake Champlain's shoreline and the Winooski River corridor anchor Vermont's most populous county, with Mount Mansfield's eastern slope rising behind Burlington.","housing":"Burlington mixes older urban homes and multifamily blocks with dense suburbs in South Burlington, Colchester, and Essex, plus lakeshore cottages.","pressure":"Raccoons and skunks run unusually heavy for Vermont around Burlington, Norway rats persist along the waterfront, and bats recur in older lakeshore homes."},
  "Vermont|Essex County": {"terrain":"The Nulhegan Basin, Silvio O. Conte refuge wetlands, and Connecticut River headwaters cover Vermont's most remote county in vast working timberland.","housing":"Island Pond, Concord, and Canaan hold a handful of small mill-town homes, surrounded by hunting camps and seasonal cabins in the forest.","pressure":"Beavers flood roads and camp properties across the wetlands, fishers and porcupines damage remote camps, and bats use older farm outbuildings each summer."},
  "Vermont|Franklin County": {"terrain":"Missisquoi Bay and its delta wetlands meet Champlain Valley dairy farms, with the Cold Hollow Mountains' forested foothills rising inland.","housing":"St. Albans holds older rail-town homes and small multifamily blocks, while Swanton, Enosburg Falls, and Richford mix village homes with dairy farmhouses.","pressure":"Raccoons, skunks, and rats press dairy barns, silos, and feed storage constantly, while beavers and muskrats work the Missisquoi delta shoreline farms."},
  "Vermont|Grand Isle County": {"terrain":"A chain of Lake Champlain islands at Knight Point and the Sand Bar causeway, surrounded by open water in Vermont's smallest county.","housing":"South Hero, North Hero, and Isle La Motte mix summer cottages and lake camps with a smaller stock of year-round island farmhouses.","pressure":"Raccoons and bats press lakeshore vacation homes each season, Canada geese foul docks and shoreline lawns all summer, and muskrats work the marsh edges."},
  "Vermont|Lamoille County": {"terrain":"Mount Mansfield and Smugglers' Notch dominate north-central Vermont, with state forest wrapping the Stowe ski country and mountain villages below.","housing":"Stowe mixes resort condos, second homes, and village housing, while Johnson, Cambridge, and Hyde Park hold farmhouses and small-town single-family stock.","pressure":"Bats and overwintering rodents fill Stowe vacation homes empty between seasons, and raccoons raid dumpsters, porches, and decks at short-term rentals."},
  "Vermont|Orange County": {"terrain":"Rolling hill farms and the Connecticut River corridor run below Groton State Forest and Allis State Park in east-central Vermont.","housing":"Randolph and Bradford hold small village centers with older homes, while Chelsea, Tunbridge, and Williamstown are farmhouses and barns on hill roads.","pressure":"Barns host raccoon families and bat colonies across the hill towns, woodchucks burrow under sheds and barn foundations, and fishers reach homestead coops."},
  "Vermont|Orleans County": {"terrain":"Lake Memphremagog and Lake Willoughby anchor Northeast Kingdom lake country, ringed by dairy farms and Willoughby State Forest in northern Vermont.","housing":"Newport holds older lakeside homes and small-town blocks, Derby and Barton add village housing, and seasonal lake cottages line both big lakes.","pressure":"Bats and raccoons press Memphremagog and Willoughby shoreline homes left empty in winter, and beavers flood farmland, driveways, and rural roads countywide."},
  "Vermont|Rutland County": {"terrain":"Killington Peak and central Green Mountain National Forest rise above the Rutland valley, with Lake Bomoseen's camp shoreline to the west.","housing":"Rutland city holds older residential blocks and small multifamily stock, Killington is dense with ski condos, and Brandon and Pittsford keep farmhouses.","pressure":"Bats and rodents overwinter in Killington vacation homes, raccoons, skunks, and Norway rats stay steady in Rutland's older blocks, and Bomoseen camps host bats."},
  "Vermont|Washington County": {"terrain":"Camel's Hump, the Worcester Range, and the Mad River valley frame central Vermont's capital country of hill farms and small urban centers.","housing":"Montpelier and Barre hold pre-war homes and granite-town multifamily blocks, while Waterbury and the Mad River towns mix farmhouses with ski homes.","pressure":"Bats recur in Montpelier and Barre's older building stock each summer, and Mad River vacation homes cycle through bats and overwintering rodents off-season."},
  "Vermont|Windham County": {"terrain":"The Connecticut River corridor and southern Green Mountain National Forest surround Mount Snow and Stratton in southeastern Vermont's ski and river country.","housing":"Brattleboro holds older urban-edge homes and multifamily blocks, Wilmington and Dover mix ski condos with second homes, and hill towns keep farmhouses.","pressure":"Porcupines hit decks, siding, and vehicles in the hill towns, bats press Mount Snow and Stratton properties off-season, and raccoons work Brattleboro blocks."},
  "Vermont|Windsor County": {"terrain":"Quechee Gorge, Mount Ascutney, and the Connecticut River run through east-central Vermont's river towns, Woodstock hills, and Okemo mountain country.","housing":"Woodstock and Quechee hold affluent second homes under mature canopy, Springfield keeps mill-town housing, and Ludlow mixes ski condos with village homes.","pressure":"Bats and rodents fill Woodstock second homes between visits, Okemo properties run the same off-season cycle, and Springfield barns host raccoons and squirrels."},
  "Maine|Androscoggin County": {"terrain":"The Androscoggin River links the Lewiston-Auburn twin cities to Lake Auburn, Range Ponds, and farmland and lake towns to the north and west.","housing":"Lewiston and Auburn hold dense mill-era triple-deckers and mill-worker housing, with commuter subdivisions in Lisbon, Poland, and Turner on larger lots.","pressure":"Norway rats persist in Lewiston's mill neighborhoods, bats recur in the twin cities' older stock, and raccoons and skunks stay steady across the suburbs."},
  "Maine|Aroostook County": {"terrain":"Maine's largest county runs from open potato farmland and the St. John River to vast commercial forest and the Fish River lake chain north.","housing":"Presque Isle, Caribou, and Houlton hold older farm-town homes and farmhouses, surrounded by camps and rural homes along US-1 and the woods roads.","pressure":"Porcupines gnaw camps and vehicle lines, groundhogs burrow potato-field edges and farmyards, beavers flood woods roads, and bats use older farmhouses in summer."},
  "Maine|Cumberland County": {"terrain":"Casco Bay's working waterfront and the Presumpscot River meet Sebago Lake's camp country inland in Maine's most populous, Portland-centered county.","housing":"Portland mixes older city homes and multifamily blocks with dense suburbs in South Portland and Westbrook, plus seasonal camps around Sebago Lake.","pressure":"Norway rats hold Portland's waterfront and older housing, raccoons and skunks run heavy in Scarborough and Falmouth, and bats use Portland and Sebago camps."},
  "Maine|Franklin County": {"terrain":"The Farmington valley and Sandy River rise west into Rangeley Lake, Mount Blue, and Sugarloaf ski and sporting-camp country in the foothills.","housing":"Farmington holds college-town homes and valley farmhouses, while Rangeley and Carrabassett Valley mix seasonal camps, lake homes, and ski properties.","pressure":"Porcupines damage Rangeley camps and outbuildings, bats recur in camps closed all winter, and beavers flood camp roads along the Sandy River tributaries."},
  "Maine|Hancock County": {"terrain":"Acadia and Mount Desert Island face Frenchman Bay, with the Union River, blueberry barrens, and fishing peninsulas filling coastal Hancock County.","housing":"Ellsworth holds older town housing, Bar Harbor and Southwest Harbor mix seasonal island homes with year-round stock, and villages keep fishing-family homes.","pressure":"Raccoons move into Bar Harbor seasonal homes empty off-season, porcupines gnaw inland camp woodwork, and bats recur in older Ellsworth and island houses."},
  "Maine|Kennebec County": {"terrain":"The Kennebec River valley runs through Augusta and Waterville, ringed by Cobbosseecontee and Messalonskee lake-camp communities and central Maine farmland.","housing":"Augusta and Waterville mix older city homes and mill-era blocks with river-valley suburbs, plus dense seasonal camps on the Belgrade-area lakes.","pressure":"Norway rats and raccoons stay steady in Augusta and Waterville, bats use valley homes and lake camps, and groundhogs work Winthrop and Gardiner gardens."},
  "Maine|Knox County": {"terrain":"Penobscot Bay peninsulas, Camden Hills, and the St. George River shape midcoast Knox County, including the Vinalhaven and North Haven island towns.","housing":"Rockland holds working-waterfront and older town housing, Camden and Rockport mix seasonal homes with year-round stock, and inland towns keep farmhouses and camps.","pressure":"Raccoons and bats recur in Camden-area seasonal homes closed for winter, Norway rats persist on Rockland's waterfront, and porcupines damage inland camps."},
  "Maine|Lincoln County": {"terrain":"Long tidal peninsulas between the Kennebec and Damariscotta rivers end at Pemaquid Point, lined with fishing villages and Sheepscot River coves.","housing":"Wiscasset and Damariscotta hold historic river-town homes, Boothbay Harbor mixes cottages with year-round housing, and Waldoboro keeps inland farmhouses and camps.","pressure":"Raccoons and bats move into Boothbay-area cottages over the long off-season, opossums hold this mild coast, and porcupines work the wooded interior towns."},
  "Maine|Oxford County": {"terrain":"Western Maine runs from eastern farm towns to White Mountain foothills, Grafton Notch, and Lake Umbagog along the New Hampshire border.","housing":"Rumford holds dense mill-town housing, Norway and Paris keep older village homes, and Bethel mixes ski and second homes with lake camps.","pressure":"Porcupines and beavers are the steady camp nuisances around Bethel and Fryeburg, bats recur in Rumford housing and camps, and fishers reach Oxford Hills coops."},
  "Maine|Penobscot County": {"terrain":"The Penobscot River runs from Bangor's urban core past Pushaw Lake and Sunkhaze Meadows north into extensive working forest and mill towns.","housing":"Bangor and Brewer mix older city homes and multifamily blocks, Orono adds university rentals, and upriver towns hold mill housing and forest camps.","pressure":"Norway rats and raccoons persist in Bangor's older neighborhoods, bats recur across Bangor and Old Town, and beavers and porcupines work upriver camps."},
  "Maine|Piscataquis County": {"terrain":"Moosehead Lake, Baxter State Park, and Gulf Hagas dominate Maine's least populous county in vast commercial and conservation forest in the Highlands.","housing":"Dover-Foxcroft and Greenville hold the small service-town stock, surrounded by lake camps, sporting camps, and seasonal cabins across the interior ponds.","pressure":"Porcupines gnaw Moosehead camp siding and equipment, beavers flood tote roads, red squirrels work camp attics, and bats are found when camps open in spring."},
  "Maine|Sagadahoc County": {"terrain":"Maine's smallest county wraps Merrymeeting Bay and the lower Kennebec estuary, with Reid State Park peninsulas at Phippsburg and Georgetown.","housing":"Bath holds shipyard-town homes and older multifamily blocks near the yard, Topsham is fast-growing suburbia, and the peninsulas mix cottages with farmhouses.","pressure":"Raccoons, skunks, and opossums stay steady in Topsham suburbs, bats recur in Bath's older housing, and raccoons enter Phippsburg cottages over winter."},
  "Maine|Somerset County": {"terrain":"The upper Kennebec River, Wyman Lake, and the Dead River run from southern mill and farm towns north through logging forest to Jackman.","housing":"Skowhegan, Fairfield, and Pittsfield hold mill and farm-town housing, while Bingham to Jackman mixes sporting camps and seasonal homes along the rivers.","pressure":"Groundhogs and skunks are routine in the southern farm country, porcupines and beavers work northern camps and roads, and bats use mill-town homes and camps."},
  "Maine|Waldo County": {"terrain":"Penobscot Bay's western shore at Belfast and Searsport backs onto Lake St. George, the Passagassawakeag River, and small-farm country inland.","housing":"Belfast mixes harbor-town homes with seasonal properties, Searsport holds older port housing, and Unity and Monroe are farmhouses on wooded rural lots.","pressure":"Raccoons and bats recur in Belfast and Searsport homes, groundhogs burrow Unity and Monroe farm gardens, and porcupines and beavers work the inland woods."},
  "Maine|Washington County": {"terrain":"Downeast Maine's rugged Cobscook Bay coast, Quoddy Head, and Moosehorn refuge sit above wild blueberry barrens and low-density forest inland.","housing":"Eastport, Lubec, and Machias hold older port and fishing-village homes, Calais adds border-town stock, and seasonal cottages scatter along both bays.","pressure":"Porcupines damage inland camps, beavers flood roads and blueberry land, bats recur in Eastport and Lubec housing, and raccoons work fishing-village homes."},
  "Maine|York County": {"terrain":"Southern Maine's Saco River, Mount Agamenticus, and Rachel Carson refuge marshes run behind dense beach towns from Kittery to Old Orchard Beach.","housing":"Biddeford and Sanford hold mill-era multifamily and single-family stock, beach towns mix rentals with year-round homes, and inland towns keep farmhouses.","pressure":"Opossums thrive in Maine's mildest winters here, Norway rats persist in mill neighborhoods, raccoons work the beach rentals, and bats use old farmhouses and cottages."},
  "Massachusetts|Barnstable County": {"terrain":"All of Cape Cod stretches between Cape Cod Bay and Nantucket Sound as a narrow glacial peninsula of pitch pine, kettle ponds, and salt marsh.","housing":"Cape cottages, seasonal rentals, and older capes and ranches dominate from Bourne to Harwich, many closed for long stretches outside summer.","pressure":"Raccoons use chimneys and attics in dense cottage housing, skunks den under porches and sheds, and bats form colonies in summer homes left closed."},
  "Massachusetts|Berkshire County": {"terrain":"Massachusetts' most rural, mountainous county climbs to Mount Greylock and October Mountain above the Housatonic valley's farms, lakes, and mill towns.","housing":"Pittsfield and North Adams hold mill-city homes and multifamily blocks, Great Barrington mixes resort-town housing, and lake communities scatter farmhouses and camps.","pressure":"Porcupines damage rural outbuildings and vehicles, beavers flood Housatonic tributary roads and farmland, and bats recur in older farmhouses and lake homes."},
  "Massachusetts|Bristol County": {"terrain":"The Taunton River and Buzzards Bay edge older mill cities, with Freetown-Fall River forest and Horseneck Beach shoreline filling southeastern Massachusetts.","housing":"Fall River and New Bedford hold dense triple-deckers and mill-era multifamily housing, while Attleboro, Taunton, and Dartmouth add suburbs and farmhouses.","pressure":"Norway rats persist in Fall River and New Bedford's mill neighborhoods, raccoons and skunks stay steady in the suburbs, and beavers flood Taunton tributaries."},
  "Massachusetts|Dukes County": {"terrain":"Martha's Vineyard and the Elizabeth Islands combine oak and pine woodland, coastal ponds, and up-island farmland south of Cape Cod.","housing":"Oak Bluffs, Edgartown, and Tisbury mix gingerbread cottages, historic homes, and a large stock of seasonal and second homes closed in winter.","pressure":"Bats and overwintering rodents fill Vineyard homes closed for winter, while raccoons and skunks persist around the down-island towns year-round."},
  "Massachusetts|Essex County": {"terrain":"The lower Merrimack Valley and North Shore run from Lawrence and Lynn to Parker River refuge marshes, Crane Beach, and Ipswich River woods.","housing":"Lawrence, Lynn, and Haverhill hold dense triple-decker mill housing, while Peabody, Danvers, and North Andover mix coastal suburbs with older village homes.","pressure":"Norway rats run heavy in the Merrimack mill cities, raccoons and skunks press the suburbs, beavers flood Ipswich River roads, and bats use North Shore homes."},
  "Massachusetts|Franklin County": {"terrain":"The upper Pioneer Valley's Connecticut River farmland and mill villages sit below heavily forested hill towns, Mount Sugarloaf, and Erving State Forest.","housing":"Greenfield, Montague, and Orange hold older farmhouses and mill-village homes, with small multifamily blocks in the valley towns and rural hill housing.","pressure":"Beavers flood Connecticut, Deerfield, and Millers river roads and fields, porcupines damage hill-town outbuildings, and bats and raccoons fill valley farmhouses."},
  "Massachusetts|Hampden County": {"terrain":"The southern Pioneer Valley follows the Connecticut River below Mount Tom and Robinson State Park, with forested hill towns east and west.","housing":"Springfield, Holyoke, and Chicopee hold dense older city homes and multifamily blocks, ringed by West Springfield, Agawam, and Ludlow suburbs.","pressure":"Norway rats persist in Springfield and Holyoke, raccoons and skunks press the valley suburbs, and beavers flood Westfield and Chicopee river properties."},
  "Massachusetts|Hampshire County": {"terrain":"The middle Pioneer Valley pairs Connecticut River farmland and the Holyoke Range at Skinner State Park with Quabbin forests and hill towns.","housing":"Amherst and Northampton mix college-town homes, student rentals, and older valley housing, while Hadley and Hatfield hold farmhouses amid working farmland.","pressure":"Raccoons and skunks concentrate around Amherst and Northampton rentals, woodchucks work Hadley farm gardens, beavers flood tributaries, and bats use valley homes."},
  "Massachusetts|Middlesex County": {"terrain":"Massachusetts' most populous county runs from Cambridge and the Middlesex Fells to Great Meadows, Walden Pond, and the Sudbury and Concord rivers.","housing":"Cambridge, Somerville, and Lowell hold dense older multifamily housing, Newton and Lexington are leafy postwar suburbs, and Framingham mixes both patterns.","pressure":"Raccoons, squirrels, and skunks drive the state's highest suburban call volume, Norway rats hold the older cities, and beavers flood Concord-area rivers."},
  "Massachusetts|Nantucket County": {"terrain":"A single-town island thirty miles off Cape Cod, built on sandplain grassland and heathland around Coskata-Coatue, coastal ponds, and the harbor.","housing":"Historic harbor-side homes and shingled cottages dominate the town, backed by a very large stock of seasonal homes closed outside summer.","pressure":"Bats, mice, and squirrels are discovered at spring openings in closed seasonal homes, while raccoons and skunks persist around the historic town center."},
  "Massachusetts|Norfolk County": {"terrain":"The Blue Hills Reservation and Neponset River corridor anchor suburban Boston's south side, with Ponkapoag Pond and dense development around the forest.","housing":"Quincy, Weymouth, and Braintree hold older city and multifamily housing, Brookline mixes rowhouses with large homes, and Dedham and Needham are postwar suburbs.","pressure":"Raccoons and squirrels persist in the older inner suburbs, Norway rats hold denser multifamily areas, and moles damage Dedham, Needham, and Wellesley lawns."},
  "Massachusetts|Plymouth County": {"terrain":"The South Shore meets inland cranberry country at Myles Standish pine barrens, Ellisville Harbor, and the North River's ponds and wetlands.","housing":"Brockton holds older city homes and multifamily blocks, Marshfield and Hingham are coastal suburbs, and Plymouth mixes historic homes with bog-country housing.","pressure":"Beavers flood cranberry bogs, ponds, and low roads around Carver and Middleborough, raccoons press coastal suburbs, and bats fill older South Shore homes."},
  "Massachusetts|Suffolk County": {"terrain":"Boston Harbor, the Charles River Reservation, and Franklin Park are nearly the only open ground in Massachusetts' densest, most built-up county.","housing":"Boston, Chelsea, and Revere are rowhouses, triple-deckers, and brick apartment blocks with old chimneys, shared attics, and aging rooflines throughout.","pressure":"Norway rats dominate the dense rowhouse neighborhoods, raccoons use chimneys and harbor green space, and big brown bats roost in older brick buildings."},
  "Massachusetts|Worcester County": {"terrain":"Massachusetts' largest county runs from Wachusett Mountain and Purgatory Chasm to Quabbin Reservoir forest, spanning mill cities, suburbs, and hill country.","housing":"Worcester, Fitchburg, and Leominster hold older mill-city homes and multifamily blocks, with Shrewsbury and Westborough suburbs and western farmhouses beyond.","pressure":"Norway rats persist in the mill cities, raccoons and skunks press the eastern suburbs, beavers flood western streams, and bats use mill-city and farm housing."},
  "New Jersey|Atlantic County": {
    "terrain": "Atlantic marsh and back bays in the east give way to flat Pine Barrens sand and pine-oak forest toward Hammonton.",
    "housing": "Atlantic City and Pleasantville hold older brick and wood-frame blocks, the Shore towns mix raised beach houses and rentals, and inland Egg Harbor, Galloway and Hammonton are postwar and newer single-family subdivisions near the pines.",
    "pressure": "Raccoons and bats turn up constantly in Shore homes that sit closed between rentals, skunks work the sandy back-bay neighborhoods, and Pine Barrens-edge properties in Galloway and Hammonton see snakes and groundhogs along the tree line."
  },
  "New Jersey|Bergen County": {
    "terrain": "The Hudson Palisades cliff and river edge in the east flatten into the Hackensack meadowlands and older suburbs, then rise to Ramapo foothills in the northwest.",
    "housing": "Bergen mixes pre-war colonials and tudors in Ridgewood and Teaneck, brick apartment blocks and co-ops in Fort Lee and Hackensack, postwar capes in Fair Lawn and Paramus, and large wooded colonials toward Mahwah and the Ramapos.",
    "pressure": "Norway rats run the older commercial and multifamily blocks of Hackensack, Englewood and Fort Lee, raccoons and squirrels are relentless in the mature-canopy suburbs of Ridgewood and Teaneck, and groundhogs burrow the Ramapo-edge yards in the northwest towns."
  },
  "New Jersey|Burlington County": {
    "terrain": "The Delaware River lowland in the west rises gently into farmland and suburbs, then gives way to the flat, sandy, pine-oak Wharton and Byrne forests that cover the eastern half.",
    "housing": "Mount Holly and Burlington City keep 18th- and 19th-century brick rowhouses and Victorians, Moorestown and Medford hold historic colonials and farmhouses, and Willingboro and Marlton are postwar subdivision towns with mature trees.",
    "pressure": "The suburban northwest — Moorestown, Marlton and Mount Laurel side streets — produces steady squirrel, raccoon and mole work, while the Barrens towns around Medford and Tabernacle add groundhogs, snakes in the pines, and bats in older farmhouses and lake cabins."
  },
  "New Jersey|Camden County": {
    "terrain": "The Cooper River and Newton Lake cut green corridors through the northern suburbs, the center is flat postwar subdivision land, and the southeast fades into Pine Barrens sand and scrub oak.",
    "housing": "Camden City holds pre-war rowhouses and twins, Haddonfield and Collingswood keep Victorian and colonial stock, and Cherry Hill, Voorhees and Gloucester Township are postwar and 1970s subdivisions now under mature trees.",
    "pressure": "Norway rats are entrenched in Camden City's older blocks and the Pennsauken industrial edges, raccoons and squirrels fill Cherry Hill and Haddonfield attics under heavy canopy, and Winslow's Barrens-edge homes add groundhogs and the occasional pine snake sighting."
  },
  "New Jersey|Cape May County": {
    "terrain": "Barrier islands and wide tidal marsh front both coasts, the Delaware Bayshore is low and marshy, and the mainland spine carries Belleplain's oak-pine forest.",
    "housing": "Barrier-island stock runs from Victorian Cape May and older Ocean City cottages to raised post-storm beach houses, while the mainland holds year-round single-family homes, farmhouses and bayshore villages in the Villas and Del Haven.",
    "pressure": "Raccoons, skunks and bats are the standing problem in beach houses and rentals that sit empty for weeks in Ocean City, Wildwood and Cape May, and mainland towns around Cape May Court House and Belleplain add squirrels and groundhogs at the forest edge."
  },
  "New Jersey|Cumberland County": {
    "terrain": "The Maurice River winds through tidal marsh to Delaware Bay, Union Lake anchors the Millville woods, and the rest is flat, open farmland cut by drainage ditches.",
    "housing": "Bridgeton, Vineland and Millville keep Victorian and early-1900s worker housing and brick downtowns, surrounded by farmhouses, labor housing and postwar ranches across Deerfield and Upper Deerfield.",
    "pressure": "Groundhogs work the farm edges and outbuildings that define Cumberland County, rats follow the older commercial blocks and food businesses in Bridgeton, Vineland and Millville, and raccoons and bats settle the bayshore villages around Port Norris and Mauricetown."
  },
  "New Jersey|Essex County": {
    "terrain": "Branch Brook Park and the Passaic River edge thread the urban east, while the First Watchung ridge — Eagle Rock and South Mountain — lifts the wooded western suburbs.",
    "housing": "Newark, East Orange and Irvington are dense brick multifamily, triple-deckers and pre-war apartment blocks; Montclair and the Oranges westward hold Victorians, tudors and colonials, and Livingston is postwar suburbia.",
    "pressure": "Norway rats are the dominant call in Newark, East Orange and Irvington, where older multifamily blocks, alleys and sewers sit wall to wall, while the Watchung towns — Montclair, West Orange, Livingston — produce raccoon, squirrel and bat work in large older homes under heavy canopy."
  },
  "New Jersey|Gloucester County": {
    "terrain": "Mantua Creek and Scotland Run drain flat farmland and new subdivisions, Tall Pines preserves a pocket of pine-oak woods, and the Delaware River fronts the northwest corner.",
    "housing": "Woodbury and Glassboro keep older Victorian and colonial cores, Deptford and Washington Township are postwar and growth-era subdivisions, and the south stays farmhouses and rural homes on large lots.",
    "pressure": "Groundhogs burrow under sheds and decks across the farm-edge subdivisions of Washington Township, Monroe and Harrison, squirrels and raccoons fill attics in Deptford and Woodbury's older stock, and moles work the big new-subdivision lawns in Mantua and Woolwich."
  },
  "New Jersey|Hudson County": {
    "terrain": "The Palisades ridge runs the county's spine above the Hudson waterfront, the west side drops to the Hackensack Meadowlands marshes, and nearly everything between is fully built.",
    "housing": "Jersey City and Hoboken mix brownstones, pre-war walk-ups and modern high-rises, Union City and North Bergen are dense brick multifamily on the Palisades, and Bayonne and Secaucus add older single-family and industrial-edge blocks.",
    "pressure": "Norway rats are the defining Hudson County call — older sewers, restaurant rows and shared-wall buildings in Jersey City, Hoboken, Union City and Bayonne let them travel block to block — with raccoons in chimneys and starlings and sparrows nesting in signs and vents along the commercial strips."
  },
  "New Jersey|Hunterdon County": {
    "terrain": "The South Branch of the Raritan cuts a valley through rolling farm plateau, Round Valley and Spruce Run reservoirs anchor the center, and the Delaware River towns sit low along the western border.",
    "housing": "Flemington, Clinton and Lambertville keep Victorian and Federal river-town stock, Readington and Raritan are farmhouses and estate homes on large lots, and High Bridge adds older mill-town housing.",
    "pressure": "Groundhogs under barns and shed foundations are the everyday Hunterdon call, bats colonize the attics of Flemington, Clinton and Lambertville's older homes every summer, and the Sourland and Cushetunk edges add black rat snakes in barns and the isolated copperhead colonies the county is known for."
  },
  "New Jersey|Mercer County": {
    "terrain": "The Delaware River and the D&R Canal run the western edge, the center is flat suburb and farmland, and Sourland Mountain's rocky woods rise in the northeast corner.",
    "housing": "Trenton is pre-war rowhouses and twins, Hamilton and Ewing are postwar suburbs, Princeton mixes colonial and Victorian stock with university buildings, and Hightstown and Hopewell keep small-town older homes and farmhouses.",
    "pressure": "Norway rats hold Trenton's older rowhouses and commercial blocks, raccoons and squirrels work the big-canopy neighborhoods of Princeton and Lawrence, and the Sourland edge in Hopewell adds copperhead sightings — state-Threatened, look-don't-touch — alongside groundhogs and bats in farmhouses."
  },
  "New Jersey|Middlesex County": {
    "terrain": "The Raritan River bends through the county to Raritan Bay at Perth Amboy and South Amboy, Cheesequake's marsh and woods sit in the southeast, and the rest is heavily built suburb and warehouse land.",
    "housing": "New Brunswick and Perth Amboy hold older multifamily and worker housing, Edison, Piscataway and Old Bridge are sprawling postwar and growth-era subdivisions, and Woodbridge mixes older village centers with dense suburbs.",
    "pressure": "Norway rats follow the older housing and food corridors of New Brunswick, Perth Amboy and the Route 1 and 9 strips, raccoons and squirrels are constant in Edison, Woodbridge and East Brunswick's canopy suburbs, and Cheesequake-edge homes add skunks, opossums and marsh-side raccoons."
  },
  "New Jersey|Monmouth County": {
    "terrain": "Sandy Hook and the bayshore frame the northeast, the Manasquan Reservoir and Turkey Swamp woods anchor the west, and the Navesink highlands give Middletown the Shore's only real hills.",
    "housing": "Long Branch and Asbury Park keep Victorian and early-1900s Shore stock, Middletown and Manalapan are large-lot commuter suburbs, Freehold is a historic county-seat town, and Howell mixes subdivisions with farms.",
    "pressure": "Raccoons and bats are the standing call in Shore homes in Long Branch, Asbury Park and the Middletown bayside that sit quiet between seasons, squirrels and moles work the Howell and Manalapan subdivisions, and Freehold-area farms add groundhogs and barn bats."
  },
  "New Jersey|Morris County": {
    "terrain": "The Great Swamp basin sits in the southeast, the east is commuter suburb, and the west rises into the forested Highlands around Lake Hopatcong and the Black River.",
    "housing": "Morristown, Madison and Chatham keep colonial and Victorian commuter-town stock, Parsippany and Randolph are postwar and growth-era suburbs, Dover is an older mill and mining town, and the lakes hold cottages and year-round conversions.",
    "pressure": "Bats are a signature Morris County job — the county's two abandoned mine complexes are the state's documented bat hibernation sites, and older homes in Morristown, Madison and Chatham host summer colonies — while lake homes on Hopatcong add raccoons and squirrels, and the Highlands add black snakes and the occasional copperhead report."
  },
  "New Jersey|Ocean County": {
    "terrain": "Barnegat Bay and its lagoon developments line the east behind Island Beach, the center is flat suburban growth, and the west is Double Trouble and Brendan Byrne Pine Barrens forest.",
    "housing": "Toms River, Brick and Berkeley mix postwar lagoon homes, ranches and retirement communities like Leisure Village, Lakewood adds dense older and newer blocks, and Jackson and Manchester are wooded subdivisions against the Barrens.",
    "pressure": "Raccoons, skunks and bats move into lagoon and beach homes in Brick, Berkeley and Barnegat that sit empty between visits, Lakewood and Jackson's wooded subdivisions produce heavy squirrel and raccoon volume, and the Barrens edge adds groundhogs and pine snakes in the western townships."
  },
  "New Jersey|Passaic County": {
    "terrain": "The Passaic River and Great Falls anchor the industrial south, suburbs fill the center, and the north is Highlands forest, reservoirs and Greenwood Lake.",
    "housing": "Paterson, Passaic and Clifton are mill-era multifamily, triple-deckers and brick blocks, Wayne and Hawthorne are postwar suburbs, and West Milford holds lake cottages, cabins and rural homes in deep woods.",
    "pressure": "Norway rats run Paterson, Passaic and Clifton's older multifamily and commercial blocks, raccoons and squirrels work Wayne's canopy suburbs, and West Milford and Ringwood lake homes add bats, raccoons and black snakes around the reservoirs."
  },
  "New Jersey|Salem County": {
    "terrain": "The Salem River and Alloway Creek cut through flat farm country to wide Delaware Bay marsh, with Parvin's woods and lakes as the county's one forest block.",
    "housing": "Salem City and Woodstown keep 17th- and 18th-century brick and Victorian stock, Pennsville and Carneys Point are riverfront postwar towns, and Pittsgrove and Alloway are farmhouses and rural homes.",
    "pressure": "Groundhogs and raccoons around barns, grain storage and farmhouses are the everyday Salem County call, bats roost in Salem City and Woodstown's older homes, and rats concentrate in the older riverfront blocks of Salem and Pennsville."
  },
  "New Jersey|Somerset County": {
    "terrain": "The Raritan River and canal run the center, the Watchung ridges lift the Bernardsville north, Great Swamp wetlands sit in the northeast corner, and Sourland Mountain's rocky woods fill the southwest.",
    "housing": "Somerville and Bound Brook keep older borough stock, Bridgewater and Hillsborough are growth-era subdivisions, Bernardsville holds estate homes in the Somerset Hills, and Franklin mixes farms with dense suburbs.",
    "pressure": "Squirrels, raccoons and moles are steady across Bridgewater, Hillsborough and Franklin's subdivision lawns and canopy streets, Great Swamp-edge towns add bats in older homes, and the Sourlands add groundhogs, black snakes and the county's isolated copperhead colonies."
  },
  "New Jersey|Sussex County": {
    "terrain": "Kittatinny Ridge runs the western border above the Delaware River, glacial lakes dot the center around Sparta and Vernon, and dairy valleys fill the east.",
    "housing": "Newton, Franklin and Sussex Borough keep older mill and mining-town stock, Sparta and Vernon hold lake cottages and ski-area condos and homes, and the valleys are farmhouses and rural homes on large wooded lots.",
    "pressure": "Bats and raccoons in lake homes around Mohawk, Hopatcong and Culver are the summer staple, groundhogs work the farm valleys around Newton and Wantage, and the Kittatinny Ridge holds the state's best-known timber rattlesnake country — state-Endangered, strictly referral."
  },
  "New Jersey|Union County": {
    "terrain": "The Arthur Kill and Elizabeth River frame the industrial east, Watchung Reservation's woods anchor the center-west, and everything else is densely built suburb under mature canopy.",
    "housing": "Elizabeth, Linden and Plainfield hold pre-war multifamily, rowhouses and twins, Westfield and Cranford keep Victorian and colonial commuter stock, and Union and Springfield-side streets are postwar capes and colonials.",
    "pressure": "Norway rats follow the older multifamily and commercial blocks of Elizabeth, Linden and Rahway, raccoons and squirrels are constant in Westfield, Cranford and Union's canopy suburbs, and Watchung Reservation-edge homes add skunks, opossums and groundhogs."
  },
  "New Jersey|Warren County": {
    "terrain": "The Delaware River runs the western border, the Pequest and Musconetcong valleys cut the farm center, and Jenny Jump and the Kittatinny foothills rise in the north.",
    "housing": "Belvidere and Washington keep Victorian river and rail towns, Phillipsburg is an older industrial river city, Hackettstown mixes older stock with growth-era suburbs, and the townships are farmhouses and rural homes.",
    "pressure": "Groundhogs under barns and outbuildings lead in the farm valleys around Hope, Blairstown and Allamuchy, bats settle older homes in Belvidere, Washington and Hackettstown, and the Jenny Jump and Kittatinny edges add black snakes and rattlesnake country at the county's northern tip."
  },
  "New York|Bronx County": {
    "terrain": "The Bronx River and two big parks — Pelham Bay and Van Cortlandt — cut wooded corridors through a dense mainland borough between the Harlem and East rivers.",
    "housing": "Pre-war five- and six-story apartment buildings dominate the south and center, with postwar complexes and single-family pockets in Riverdale, Pelham Parkway, and City Island.",
    "pressure": "Norway rats run the older apartment blocks year-round, raccoons work the park edges into yards and roofs, and pigeons nest in bridges and roof structures."
  },
  "New York|Kings County": {
    "terrain": "Brooklyn fills the western end of Long Island between the East River, Jamaica Bay marshes, and the Coney Island shore, with Prospect Park as its wooded center.",
    "housing": "Brownstones and limestone rowhouses, pre-war apartment buildings, converted warehouses, and postwar attached homes — most of it sharing walls and rooflines with the building next door.",
    "pressure": "Norway rats are the borough's constant, moving through basements and restaurant blocks; pigeons and sparrows nest in signs and cornices, and raccoons press in from the park edges."
  },
  "New York|New York County": {
    "terrain": "Manhattan is a narrow island between the Hudson and East rivers, with Central Park's 843 acres as its one large block of habitat.",
    "housing": "Pre-war high-rises, brownstones, tenements, and towers over shared basements and trash rooms — the densest housing in America.",
    "pressure": "Norway rats travel basements and utility runs in every neighborhood, pigeons own the ledges and AC units, and raccoons and squirrels work the Central Park edges into rooflines."
  },
  "New York|Queens County": {
    "terrain": "Queens stretches from Flushing Bay and the East River across Forest Park's wooded ridge to the Jamaica Bay marshes.",
    "housing": "Attached brick rowhouses, garden apartments, two-family homes, and pre-war buildings along the elevated lines, much of it sharing walls and bulkheads.",
    "pressure": "Norway rats run the commercial corridors and attached housing, raccoons and squirrels come off the Forest Park canopy, and pigeons nest in train structures and roof bulkheads."
  },
  "New York|Richmond County": {
    "terrain": "Staten Island is a suburban island across the harbor, split by the Greenbelt's nearly 3,000 acres of forest and ringed by bay and kill waterfronts.",
    "housing": "Postwar single-family homes and townhouses across the South Shore and mid-island, with older Victorians and apartments on the North Shore.",
    "pressure": "Raccoons and squirrels dominate the single-family neighborhoods, Norway rats hold the older North Shore, and opossums and bats work the Greenbelt-edge streets."
  },
  "New York|Nassau County": {
    "terrain": "Western Long Island between the Sound and the Atlantic — flat, fully built, with Hempstead Lake and the barrier beaches as its habitat anchors.",
    "housing": "Dense post-war subdivisions, Gold Coast estates on the North Shore, and older downtown villages like Hempstead, Freeport, and Glen Cove.",
    "pressure": "Raccoons and squirrels are relentless in the canopy suburbs, Norway rats hold the older downtowns, and opossums and bats are steady across the post-war streets."
  },
  "New York|Suffolk County": {
    "terrain": "The eastern two-thirds of Long Island — Sound bluffs and twin forks in the east, Great South Bay and Fire Island along the south, and the Pine Barrens through the middle.",
    "housing": "Dense western suburbs in Huntington, Babylon, and Islip give way to farm, estate, and summer-home country in Riverhead and Southampton.",
    "pressure": "Raccoons and squirrels dominate the western suburbs, rats hold the older downtowns and ports, groundhogs work the eastern farm edges, and bats settle summer homes that sit empty for months."
  },
  "New York|Westchester County": {
    "terrain": "Between the Hudson River and Long Island Sound, rising from dense southern cities to wooded northern estate towns and the Croton watershed.",
    "housing": "Yonkers, Mount Vernon, and New Rochelle hold older apartments and attached homes; the north is colonials and estates under deep canopy in towns like Pound Ridge and Bedford's edge.",
    "pressure": "Norway rats hold the southern downtowns, raccoons and squirrels run every canopy suburb, and groundhogs, skunks, and bats are steady in the wooded northern towns."
  },
  "New York|Rockland County": {
    "terrain": "The state's smallest mainland county, squeezed between the Hudson River and the Harriman and Bear Mountain state-park forest.",
    "housing": "Dense commuter suburbs and village centers — Clarkstown, Spring Valley, Nyack, Suffern — pressed right against park woods.",
    "pressure": "Raccoons and squirrels move straight from state-park forest onto roofs, rats hold the older village blocks, and skunks and groundhogs work the yard edges."
  },
  "New York|Putnam County": {
    "terrain": "Rocky Hudson Highlands on the river, Fahnestock State Park in the center, and New York City watershed reservoirs and the Great Swamp filling the east.",
    "housing": "Wooded commuter towns — Carmel, Mahopac, Brewster, Cold Spring — of single-family homes on large, treed lots, with older village housing in Cold Spring and Brewster.",
    "pressure": "Raccoons and squirrels are the steady attic calls, bats settle the older village homes, and skunks and groundhogs work the big wooded lots."
  },
  "New York|Orange County": {
    "terrain": "The Wallkill River farm valley runs between the Shawangunk Ridge and the Hudson Highlands, with Harriman State Park at the eastern edge.",
    "housing": "Fast-growing commuter subdivisions around Monroe, Warwick, and Goshen, older small-city housing in Newburgh, Middletown, and Port Jervis, and farm properties across the valley.",
    "pressure": "Rats hold the older city blocks, raccoons and squirrels run the new subdivisions, and groundhogs and skunks work the Wallkill farm edges."
  },
  "New York|Dutchess County": {
    "terrain": "The east bank of the Hudson from the Highlands to the Taconic hills, with Wappinger Creek and estate and horse-farm country inland.",
    "housing": "Poughkeepsie's older city blocks, Beacon and Fishkill commuter suburbs, Hyde Park and Rhinebeck village homes, and large farm and estate properties.",
    "pressure": "Rats and pigeons hold older Poughkeepsie, raccoons and squirrels run the commuter suburbs, and bats and groundhogs are steady on the farm and estate properties."
  },
  "New York|Ulster County": {
    "terrain": "The west bank of the Hudson between the Catskill escarpment and the Shawangunk Ridge, with the Ashokan Reservoir in the mountains.",
    "housing": "Kingston's port and uptown housing, New Paltz college rentals, Saugerties and Ellenville village homes, and mountain second homes around Woodstock.",
    "pressure": "Rats hold Kingston's older wards, raccoons and squirrels settle second homes left empty for weeks, and groundhogs work the Wallkill valley farms."
  },
  "New York|Albany County": {
    "terrain": "The upper Hudson at the Mohawk confluence, with the Albany Pine Bush barrens at the western edge and the Helderberg escarpment to the south.",
    "housing": "Albany's brownstones and older wards, Cohoes and Watervliet mill housing, and dense suburbs in Colonie, Bethlehem, and Guilderland.",
    "pressure": "Rats hold the older river cities, raccoons and squirrels work the Pine Bush-edge suburbs, and bats return to the big older homes each summer."
  },
  "New York|Saratoga County": {
    "terrain": "The upper Hudson and Saratoga Lake below the southern Adirondack foothills — one of the state's fastest-growing counties.",
    "housing": "New subdivisions across Clifton Park, Halfmoon, and Malta, older resort-city housing in Saratoga Springs, mill blocks in Mechanicville, and horse-farm properties.",
    "pressure": "Raccoons and squirrels fill attics in the new subdivisions, rats hold the older blocks, and bats and groundhogs are steady around the lake and horse farms."
  },
  "New York|Schenectady County": {
    "terrain": "A compact Mohawk River county at the Capital District's western edge, with the Plotter Kill ravine cutting its western towns.",
    "housing": "Schenectady's Stockade historic homes and older industrial wards, with leafy postwar suburbs in Niskayuna, Rotterdam, and Glenville.",
    "pressure": "Rats and pigeons hold the older downtown, raccoons and squirrels run the suburbs, and bats return to the big older homes each summer."
  },
  "New York|Rensselaer County": {
    "terrain": "The east bank of the Hudson across from Albany, climbing from Troy's river flats to the Grafton hill towns.",
    "housing": "Troy's brownstones, mill blocks, and college rentals, commuter suburbs in East Greenbush and Brunswick, and rural homes in the eastern hills.",
    "pressure": "Rats and pigeons hold Troy's older wards, raccoons and squirrels run the suburbs, and groundhogs and bats are steady in the hill towns."
  },
  "New York|Columbia County": {
    "terrain": "Hudson River frontage on the west, Kinderhook Creek farm valleys in the center, and the Taconic foothills along the Massachusetts line.",
    "housing": "Hudson's older city housing, Kinderhook, Chatham, and Valatie village homes, and farm and second-home properties across the valleys.",
    "pressure": "Raccoons, squirrels, and bats fill the older and weekend homes, groundhogs burrow the farm edges, and skunks den under barns and porches."
  },
  "New York|Erie County": {
    "terrain": "Lake Erie and the Niagara River meet the Buffalo River and creek corridors, under some of the heaviest lake-effect snow in the country.",
    "housing": "Buffalo's Victorian and industrial-era neighborhoods and doubles, ringed by dense postwar suburbs in Amherst, Tonawanda, Cheektowaga, and West Seneca.",
    "pressure": "Rats hold the older industrial blocks, raccoons and squirrels run the suburbs, and groundhogs, skunks, and bats are steady across the metro."
  },
  "New York|Niagara County": {
    "terrain": "The Niagara River and gorge along the east, Lake Ontario across the north, and flat fruit-belt farmland through the middle.",
    "housing": "Niagara Falls' older downtown and postwar streets, Lockport's canal-town housing, and farm and village homes in Lewiston and Newfane.",
    "pressure": "Rats and pigeons hold the older city blocks, raccoons and squirrels run the canal towns, and groundhogs and skunks work the fruit-belt farm edges."
  },
  "New York|Monroe County": {
    "terrain": "Lake Ontario shore and Braddock Bay across the north, the Genesee River gorge through Rochester, and the Erie Canal along the south.",
    "housing": "Rochester's older brick and frame neighborhoods and doubles, with leafy suburbs in Greece, Irondequoit, Henrietta, Webster, and Pittsford.",
    "pressure": "Rats persist in the older neighborhoods, raccoons and squirrels fill suburban attics, and bats and groundhogs are steady across the metro."
  },
  "New York|Onondaga County": {
    "terrain": "Onondaga Lake and the Seneca River in the northwest, the Erie Canal across the north, and wooded hills rising east and south of Syracuse.",
    "housing": "Syracuse's salt-era blocks and hillside rentals, with sprawling suburbs in Clay, Cicero, and Manlius and older village homes in Baldwinsville and Liverpool.",
    "pressure": "Rats hold the older city blocks, raccoons and squirrels run the suburbs, and groundhogs, skunks, and bats are steady county-wide under heavy lake-effect winters."
  },
  "New York|Oneida County": {
    "terrain": "The Mohawk River valley runs east-west, with Oneida Lake at the western edge, Delta Reservoir in the north, and foothills rising to the Tug Hill and Adirondacks.",
    "housing": "Utica and Rome's older industrial housing and doubles, with postwar suburbs in New Hartford, Whitesboro, and Clinton and farm towns beyond.",
    "pressure": "Rats persist in the older mill neighborhoods, raccoons and squirrels fill suburban attics, and groundhogs and skunks work the farm edges."
  },
  "New York|Oswego County": {
    "terrain": "The southeastern Lake Ontario shore, the Oswego and Salmon river corridors, and Tug Hill-edge farm country under extreme lake-effect snow.",
    "housing": "Oswego and Fulton's older river-city housing, with smaller homes and farm properties in Mexico, Pulaski, and Phoenix.",
    "pressure": "Rats hold the older river blocks, raccoons and squirrels take homes across the county, and groundhogs and skunks work the farm edges."
  },
  "New York|Broome County": {
    "terrain": "The Susquehanna and Chenango rivers meet at Binghamton in a valley ringed by wooded hills.",
    "housing": "The Triple Cities' mill and shoe-factory housing — Binghamton, Johnson City, Endicott — with hillside and suburban streets in Vestal and Chenango.",
    "pressure": "Rats persist in the older river wards, raccoons and squirrels fill attics each fall, and groundhogs burrow the hillside yards."
  },
  "New York|Tompkins County": {
    "terrain": "The southern end of Cayuga Lake, cut by the Fall Creek, Six Mile Creek, and Cascadilla gorges and ringed by farm towns.",
    "housing": "Ithaca's student rentals and gorge-side older homes, faculty neighborhoods in Cayuga Heights, and farm and village homes in Dryden, Lansing, and Trumansburg.",
    "pressure": "Rats hold the rental blocks, raccoons and squirrels work the gorge canopy, and groundhogs and bats are steady in the farm towns."
  },
  "New York|Chemung County": {
    "terrain": "The Chemung River valley in the central Southern Tier, with wooded hillsides rising straight out of Elmira.",
    "housing": "Elmira's older industrial and Victorian housing on the flats, Horseheads and Big Flats suburbs, and hillside streets in Elmira Heights and Southport.",
    "pressure": "Rats persist on the flats, raccoons and squirrels take the hillside attics, and groundhogs and skunks work the garden suburbs."
  },
  "New York|Jefferson County": {
    "terrain": "Lake Ontario and the St. Lawrence River's Thousand Islands across the north, the Black River through Watertown, and farm interior to the south.",
    "housing": "Watertown's mill-era housing and Fort Drum-driven suburbs, island and river cottages in Clayton and Alexandria Bay, and farm homes inland.",
    "pressure": "Raccoons, squirrels, and bats settle city homes and island cottages, rats hold Watertown's older blocks, and groundhogs burrow the farm interior."
  },
  "New York|Chautauqua County": {
    "terrain": "Lake Erie's grape belt across the north, Chautauqua Lake through the center, and forested farm hills in the south.",
    "housing": "Jamestown's furniture-era blocks, Dunkirk and Fredonia's lake-town housing, and cottage communities around Chautauqua Lake.",
    "pressure": "Rats and pigeons hold the older city blocks, raccoons and squirrels work the lake cottages, and groundhogs burrow the grape-farm edges."
  },
  "New York|Genesee County": {
    "terrain": "Flat, rich farm plain between Buffalo and Rochester, drained by Tonawanda and Oak Orchard creeks toward the Iroquois refuge marshes.",
    "housing": "Batavia's older small-city housing and postwar streets, with farm and village homes in Le Roy, Bergen, Oakfield, and Pavilion.",
    "pressure": "Groundhogs burrow the farm and ditch-bank edges, raccoons and squirrels take Batavia attics, and rats persist in the older commercial core."
  },
  "Pennsylvania|Philadelphia County": {
    "terrain": "The Delaware and Schuylkill rivers frame the city, with Fairmount Park, the Wissahickon gorge, and the Pennypack and Cobbs Creek corridors threading deep woods through dense neighborhoods.",
    "housing": "Brick rowhouses and twins from the 1800s and early 1900s dominate most districts, with postwar twins in the Northeast and stone homes in the Northwest. Shared walls and parapet roofs are the defining entry problem.",
    "pressure": "Norway rats are entrenched in the older row blocks and sewer system year-round, raccoons den in chimneys across the outer districts, and the park corridors sustain skunks and opossums deep inside the city."
  },
  "Pennsylvania|Delaware County": {
    "terrain": "Ridley Creek State Park and the Darby and Chester creek corridors cut wooded valleys through some of Pennsylvania's densest suburbs, with the Delaware River waterfront at Chester.",
    "housing": "Early-1900s twins, singles, and brick rowhouses fill the inner townships, with postwar suburbs toward Marple and Radnor. Mature street trees overhang most rooflines.",
    "pressure": "Raccoons and squirrels work the canopy suburbs continuously, rats hold Chester's older blocks, and the creek valleys feed skunks and groundhogs into yards across the county."
  },
  "Pennsylvania|Chester County": {
    "terrain": "The Brandywine Creek corridor runs the county's center, with Marsh Creek and French Creek in the north and mushroom country in the south.",
    "housing": "Historic boroughs like West Chester and Kennett Square hold 1800s stone and brick homes, while the east is fast-growing subdivisions and the south is working farms.",
    "pressure": "Groundhogs burrow farm and fence-line edges countywide, raccoons and squirrels fill borough and suburban attics, and big brown bats hold old colonies in stone farmhouses and barns."
  },
  "Pennsylvania|Montgomery County": {
    "terrain": "The Schuylkill River forms the southern border, Valley Forge's woods anchor the west, and the Perkiomen Creek runs the rural northwest.",
    "housing": "Main Line stone colonials, Norristown and Pottstown row blocks, and postwar suburbs fill the south and east; farm townships spread northwest.",
    "pressure": "Squirrels and raccoons are constant under the mature suburban canopy, rats persist in the river boroughs, and groundhogs and moles work the northwestern lawns and farm edges."
  },
  "Pennsylvania|Bucks County": {
    "terrain": "The Delaware River and canal form the eastern edge, Lake Nockamixon anchors the north, and Neshaminy Creek drains the center.",
    "housing": "Levittown's 1950s sections fill the south, historic boroughs and horse farms the center, and wooded river-hill communities the north.",
    "pressure": "Gray squirrels and raccoons dominate from Levittown to Doylestown, groundhogs hold the central farm edges, and the creek and river corridors move skunks through every township."
  },
  "Pennsylvania|Lancaster County": {
    "terrain": "The Conestoga River winds through some of the East's most productive farmland, with the Susquehanna River forming the western border.",
    "housing": "A dense small city of brick rowhouses, Plain Sect farmsteads with bank barns, and fast-growing suburbs around Lititz and Ephrata.",
    "pressure": "Groundhogs are a daily farm fact along fence rows and barns, raccoons raid feed rooms and city chimneys, and bats hold decades-old colonies in stone farmhouses."
  },
  "Pennsylvania|Berks County": {
    "terrain": "The Schuylkill River valley runs the county's center, with Blue Mountain and Hawk Mountain forming the northern wall and farm valleys in between.",
    "housing": "Reading's dense row-home grid, Wyomissing's streetcar suburbs, and Pennsylvania Dutch farm boroughs like Kutztown and Hamburg.",
    "pressure": "Rats persist in Reading's older blocks, raccoons and squirrels work the boroughs, and groundhogs and skunks fill the farm valleys under Blue Mountain."
  },
  "Pennsylvania|Lehigh County": {
    "terrain": "The Lehigh River cuts the county's east, South Mountain rises over Allentown's south side, and farm townships fill the west.",
    "housing": "Allentown's row-home districts, cement-belt borough housing in Whitehall and Catasauqua, and warehouse-corridor suburbs spreading over former farmland.",
    "pressure": "Raccoons and squirrels are heavy across the city and borough ring, rats hold older commercial blocks, and groundhogs and moles work the western lawns and farm edges."
  },
  "Pennsylvania|Northampton County": {
    "terrain": "The Lehigh meets the Delaware at Easton, Jacobsburg's woods sit in the center, and Blue Mountain walls the slate belt's north.",
    "housing": "Easton and Bethlehem's historic and steel-era housing, slate-belt row boroughs like Bangor, and suburbs spreading along both rivers.",
    "pressure": "Raccoons and squirrels work the older rooflines of both cities and the slate belt, rats persist at the riverfronts, and groundhogs burrow the farm and quarry edges."
  },
  "Pennsylvania|York County": {
    "terrain": "The Susquehanna River forms the eastern border, Codorus Creek drains the center past York city, and farm country rolls to the Maryland line.",
    "housing": "York's industrial row-home grid, snack-manufacturing boroughs like Hanover, and postwar suburbs across the central townships.",
    "pressure": "Groundhogs burrow farm edges countywide, raccoons and squirrels fill city and suburban attics, and rats persist in York's and Spring Grove's older industrial blocks."
  },
  "Pennsylvania|Dauphin County": {
    "terrain": "The Susquehanna River and City Island form the western edge, Blue and Peters mountains wall the north, and Swatara Creek drains the east past Hershey.",
    "housing": "The capital city's row-home districts, Hershey's planned company streets, and ridge-foot suburbs like Linglestown.",
    "pressure": "Raccoons and squirrels run the mature street trees of the capital and Hershey, rats hold Steelton's and Middletown's older blocks, and groundhogs work the northern farm edges."
  },
  "Pennsylvania|Cumberland County": {
    "terrain": "The Conodoguinet Creek winds the county's center, the Susquehanna's west shore forms the east, and South Mountain's foothills rise in the southwest.",
    "housing": "Fast-growing capital suburbs in the east, Carlisle's colonial stone and brick core, and farm valley toward Shippensburg.",
    "pressure": "Squirrels and raccoons are steady in the mature eastern suburbs, groundhogs burrow valley farms and new-subdivision lots, and bats roost in Carlisle's older housing."
  },
  "Pennsylvania|Lebanon County": {
    "terrain": "Swatara Creek drains the Lebanon Valley, with South Mountain foothills in the south and farm country throughout.",
    "housing": "A small industrial city of row homes, Pennsylvania Dutch farm boroughs like Myerstown and Annville, and commuter suburbs toward Hershey.",
    "pressure": "Groundhogs and skunks work the farm valley everywhere, raccoons den in the city's older homes, and bats use stone farmhouses and barns along the Swatara."
  },
  "Pennsylvania|Adams County": {
    "terrain": "Gettysburg's battlefield parkland rings the county seat, orchard country covers the northwest around Biglerville, and Conewago Creek drains the east.",
    "housing": "Battle-era brick and stone borough homes, orchard farmsteads, and rural-residential growth along the Route 30 and Route 15 corridors.",
    "pressure": "Groundhogs burrow orchard and battlefield fence lines, raccoons and skunks work the boroughs, and bats roost in stone houses and barns across the orchard country."
  },
  "Pennsylvania|Franklin County": {
    "terrain": "The Conococheague Creek drains the Cumberland Valley floor, walled by Michaux State Forest and Tuscarora Mountain on either side.",
    "housing": "Valley boroughs like Chambersburg and Waynesboro hold 1800s brick and stone homes amid warehouse-corridor growth and working farms.",
    "pressure": "Groundhogs burrow farm and orchard edges valley-wide, raccoons and squirrels fill the boroughs, and mountain-edge communities take steady pressure from the state forest."
  },
  "Pennsylvania|Luzerne County": {
    "terrain": "The Susquehanna River runs the Wyoming Valley's center, with mine-scarred mountains, Frances Slocum, and Ricketts Glen at the edges.",
    "housing": "Dense anthracite-era cities and boroughs — rowhouses, doubles, and singles — fill the valley floor, with mountain suburbs like Mountain Top above.",
    "pressure": "Raccoons, squirrels, rats, and bats run the valley's older housing continuously, while skunks and groundhogs work the mountain and township edges."
  },
  "Pennsylvania|Lackawanna County": {
    "terrain": "The Lackawanna River runs the valley's length, Nay Aug gorge cuts Scranton's east side, and Moosic Mountain walls the east.",
    "housing": "Scranton's anthracite-era doubles and singles, valley borough grids like Old Forge and Carbondale, and the leafy Abington suburbs on the heights.",
    "pressure": "Rats and raccoons persist in Scranton's older districts and along the river, squirrels and bats fill the boroughs, and the Abingtons add groundhogs on larger lots."
  },
  "Pennsylvania|Monroe County": {
    "terrain": "The Delaware Water Gap and Brodhead Creek anchor the east, Tobyhanna's plateau lakes the west, in unbroken Pocono forest.",
    "housing": "Resort and vacation communities, lake developments of second homes, and fast-growing commuter subdivisions in deep woods.",
    "pressure": "Raccoons and bats are the signature problem in homes that sit empty between visits, squirrels chew into lake-community roofs, and bears — Game Commission-managed — set the background pressure."
  },
  "Pennsylvania|Centre County": {
    "terrain": "Mount Nittany and Tussey Ridge frame Happy Valley, Spring Creek threads Bellefonte and State College, and long farm valleys run between forested ridges.",
    "housing": "A university borough of student rentals and College Heights homes, Victorian Bellefonte, and Penns Valley farm villages.",
    "pressure": "Squirrels and raccoons run the rental and older housing, groundhogs burrow the farm valleys, and bats roost in Victorian Bellefonte and valley farmhouses."
  },
  "Pennsylvania|Blair County": {
    "terrain": "Brush Mountain and the Allegheny Front wall Altoona's bowl, with the Juniata River and its Frankstown Branch draining the valleys.",
    "housing": "Altoona's dense railroad-city hillside housing, historic Hollidaysburg, and farm-valley boroughs like Tyrone and Bellwood.",
    "pressure": "Raccoons, squirrels, rats, and bats run Altoona's older districts, groundhogs and skunks work the valley farms, and mountain wildlife presses every edge."
  },
  "Pennsylvania|Cambria County": {
    "terrain": "The Conemaugh River gorge cuts Johnstown, and the Allegheny Plateau spreads coal boroughs and forest in every direction.",
    "housing": "Johnstown's steep hillside mill-city housing, Ebensburg's mountain-top courthouse borough, and coal doubles in Nanty Glo and Northern Cambria.",
    "pressure": "Raccoons and rats work Johnstown's older districts, bats roost in plateau churches and homes, and skunks and groundhogs fill the borough edges."
  },
  "Pennsylvania|Lycoming County": {
    "terrain": "The West Branch Susquehanna runs the county's south, Loyalsock Creek drains a vast state-forest interior, in Pennsylvania's largest county by land area.",
    "housing": "Williamsport's lumber-era Victorian districts, river boroughs like Muncy and Jersey Shore, and farm valley under forested ridges.",
    "pressure": "Raccoons and squirrels fill the river city's housing, bats roost in river-town churches and homes, and groundhogs and skunks work the farm valley."
  },
  "Pennsylvania|Allegheny County": {
    "terrain": "The Allegheny and Monongahela meet at the Point to form the Ohio, with Frick and Schenley parks and wooded hollows threading the city and suburbs.",
    "housing": "Pittsburgh's hillside rowhouse neighborhoods, streetcar suburbs like Mount Lebanon and Bethel Park, and Mon Valley mill towns.",
    "pressure": "Rats and raccoons run the older city and mill-town blocks, squirrels are relentless under the suburban canopy, and groundhogs burrow river hillsides countywide."
  },
  "Pennsylvania|Westmoreland County": {
    "terrain": "The Youghiogheny River cuts the east, Loyalhanna Creek drains the center, and Chestnut Ridge rises over Latrobe.",
    "housing": "Greensburg's courthouse city housing, older industrial boroughs, Pittsburgh commuter suburbs in the west, and mountain communities on the ridge.",
    "pressure": "Raccoons and squirrels fill the city and western suburbs, groundhogs burrow farms under Chestnut Ridge, and rats persist in the older Mon Valley blocks."
  },
  "Pennsylvania|Washington County": {
    "terrain": "The Monongahela River forms the eastern border, Chartiers Creek drains the center past Washington and Canonsburg, in rolling gas-country hills.",
    "housing": "Washington's courthouse-city homes, Mon Valley river towns, fast-growing North Strabane and Peters suburbs, and farm country throughout.",
    "pressure": "Groundhogs burrow farm, gas-pad, and big-lot edges countywide, raccoons and squirrels fill the boroughs and suburbs, and skunks work the river towns."
  },
  "Pennsylvania|Butler County": {
    "terrain": "The Connoquenessing Creek drains the center, Moraine State Park and Lake Arthur anchor the northwest, and Slippery Rock Creek cuts its gorge in the west.",
    "housing": "Booming Cranberry subdivisions in the south, Butler city's valley neighborhoods, and farm and woodland communities in the north.",
    "pressure": "Squirrels and raccoons run the southern suburbs as their trees mature, groundhogs and moles work the northern farms and big lots, and bats roost in the older borough housing."
  },
  "Pennsylvania|Beaver County": {
    "terrain": "The Ohio River forms the southern border, the Beaver River runs the east past Beaver Falls to Rochester, in steep river hills.",
    "housing": "Historic Beaver's planned grid, steel-era river towns like Aliquippa and Ambridge, and suburban Center and Brighton townships.",
    "pressure": "Raccoons, squirrels, and rats persist in the river towns, groundhogs burrow the hillsides above the Ohio, and bats roost in the Victorian county-seat housing."
  },
  "Pennsylvania|Mercer County": {
    "terrain": "The Shenango River and its reservoir lake drain the west, Pymatuning's shore touches the northwest, in farm and lake country.",
    "housing": "Small steel-era valley cities like Sharon and Farrell, Grove City's college borough, and Hermitage's sprawling suburbs and farms.",
    "pressure": "Raccoons and squirrels fill the valley cities' housing, groundhogs burrow the farm country, and bats roost in the valley's older churches and homes."
  },
  "Pennsylvania|Fayette County": {
    "terrain": "The Youghiogheny River and Ohiopyle's gorge cut the east, Chestnut and Laurel ridges rise over Uniontown, and the Monongahela forms the western border.",
    "housing": "Uniontown's National Road city housing, river and rail boroughs like Connellsville and Brownsville, coal country, and mountain cabins.",
    "pressure": "Raccoons and bats work the city and borough housing and mountain cabins, skunks and groundhogs fill the valley farms, and rats persist in Brownsville's riverfront blocks."
  },
  "Pennsylvania|Erie County": {
    "terrain": "Lake Erie's shoreline and Presque Isle form the north, steelhead creeks cut gorges through the grape belt, and Edinboro's lake country spreads inland.",
    "housing": "Erie's dense lake-city districts, grape-belt boroughs like North East and Girard, and Edinboro's university and cottage community.",
    "pressure": "Rats and raccoons run Erie's older districts and waterfront, groundhogs burrow the grape-belt farms, and bats roost in lake-country homes and cottages."
  },
  "Maryland|Allegany County": {
    "terrain": "Steep forested ridges — Wills, Dan's and Warrior mountains — frame the North Branch Potomac valley and Rocky Gap's lake country.",
    "housing": "Cumberland and Westernport keep brick mill, canal and railroad-town housing, Frostburg is a college town of older homes, and La Vale and Cresaptown are postwar suburbs in the valley.",
    "pressure": "Raccoons and bats work the older homes of Cumberland and Frostburg, groundhogs burrow the valley farms, and the mountain woods add timber rattlesnake country — safety and referral only — plus copperheads on the rocky slopes."
  },
  "Maryland|Anne Arundel County": {
    "terrain": "The Severn, Magothy and South rivers cut deep tidal inlets through the county, the north is dense suburb, and the south stays farm and forest down to the Bay.",
    "housing": "Annapolis keeps colonial and Victorian stock around the State House and Naval Academy, Glen Burnie and Pasadena are postwar suburbs, Severna Park is waterfront colonials, and south county is farmhouses and rural homes.",
    "pressure": "Raccoons, squirrels and bats are constant in Severna Park, Pasadena and Annapolis waterfront homes with crawlspaces and boat houses, rats hold Glen Burnie's older commercial blocks, and south county farmhouses add groundhogs and black rat snakes."
  },
  "Maryland|Baltimore County": {
    "terrain": "The harbor and Patapsco frame the south and east, Gwynns Falls and Leakin Park cut a wooded valley through the west, and Druid Hill and Herring Run green the north and east.",
    "housing": "Baltimore is the classic rowhouse city — marble-step brick rows in most neighborhoods, older detached homes in the north and west, warehouse and loft conversions around the harbor, and pre-war apartment blocks.",
    "pressure": "Norway rats are Baltimore's defining wildlife call — the rowhouse blocks, alleys and older sewers let them move building to building — with raccoons in chimneys and vacant properties, starlings and pigeons in signs and vents, and bats in older rooflines across the city."
  },
  "Maryland|Calvert County": {
    "terrain": "Fossil-bearing Bay cliffs run the eastern shore, the Patuxent River borders the west, and Battle Creek's cypress swamp anchors the center.",
    "housing": "Prince Frederick is a small county-seat town, Lusby and Huntingtown are growth-era subdivisions, Solomons is a waterfront village of older homes and marinas, and the rest is farmhouses and rural homes.",
    "pressure": "Groundhogs and moles work the yards and former tobacco fields of Huntingtown and Dunkirk, raccoons and bats settle waterfront homes in Lusby and Solomons, and the county's woods add black rat snakes in barns and outbuildings."
  },
  "Maryland|Caroline County": {
    "terrain": "The Choptank River bends along the western border, Tuckahoe Creek drains the north, and the rest is flat Delmarva crop fields cut by drainage ditches.",
    "housing": "Denton, Federalsburg and Greensboro keep small-town Victorian and early-1900s stock, Ridgely is a railroad town, and the rest is farmhouses and rural homes among the fields.",
    "pressure": "Groundhogs along ditch banks and barn foundations are the standing Caroline County call, raccoons work the Choptank and Tuckahoe corridors into Denton and Federalsburg attics, and farm outbuildings across the county host bats and barn owls' less welcome cousins — starlings in the vents."
  },
  "Maryland|Carroll County": {
    "terrain": "Liberty Reservoir's watershed woods fill the southeast, Piney Run anchors Eldersburg, and rolling crop and pasture hills cover the rest.",
    "housing": "Westminster and Taneytown keep older small-city and borough stock, Eldersburg and Sykesville are growth-era suburbs, and the north and west stay farmhouses and rural homes.",
    "pressure": "Groundhogs under barns and sheds lead across Carroll's farm country, squirrels and raccoons fill Eldersburg and Westminster attics as subdivisions push into woodlots, and bats settle the older homes of Taneytown and Union Bridge."
  },
  "Maryland|Cecil County": {
    "terrain": "The Susquehanna meets the Bay at the county's western edge, Elk Neck's forested peninsula juts into the Bay, and Fair Hill's horse country rolls across the north.",
    "housing": "Elkton and Perryville keep older river and rail town stock, Chesapeake City is a canal village, Rising Sun is farm country, and the I-95 corridor adds postwar suburbs.",
    "pressure": "Raccoons and bats are steady in waterfront and canal-town homes in North East, Chesapeake City and Perryville, groundhogs work the horse farms around Fair Hill and Rising Sun, and rats follow Elkton's older blocks and the riverfront."
  },
  "Maryland|Charles County": {
    "terrain": "The Potomac and Mattawoman frame the west and north, Cedarville and Doncaster forests hold the east, and flat farm and pine land fills the center.",
    "housing": "Waldorf is dense growth-era suburbia, La Plata is a small county-seat town rebuilt after the 2002 tornado, Indian Head is a naval-town community, and Hughesville and the south stay farmhouses and rural homes.",
    "pressure": "Squirrels, raccoons and moles surge in Waldorf and La Plata's growth-era subdivisions as building pushes into pine woods, groundhogs work the Hughesville farm belt, and Potomac waterfront homes in Indian Head and Bryans Road add bats and raccoons in crawlspaces."
  },
  "Maryland|Dorchester County": {
    "terrain": "Blackwater's vast marsh fills the south, the Choptank River runs the northern border, and farm fields and pine woods fill the higher ground between.",
    "housing": "Cambridge keeps Victorian waterfront and worker housing, Hurlock is a rail and farm town, East New Market and Vienna are small historic villages, and much of the county is watermen's homes and farmhouses.",
    "pressure": "Raccoons are the everyday Dorchester call — in Cambridge attics, Hurlock farm outbuildings and waterfront homes that sit between crabbing seasons — with skunks and opossums under the county's many raised houses and sheds, and bats in Cambridge's older stock."
  },
  "Maryland|Frederick County": {
    "terrain": "The Monocacy River drains the farm valley, Catoctin Mountain and Sugarloaf rise at the edges, and the east is fast-filling commuter country.",
    "housing": "Frederick City holds one of Maryland's great historic districts plus postwar suburbs, Urbana and Mount Airy are growth-era towns, Brunswick is a railroad river town, and Middletown and Thurmont keep valley and mountain-town stock.",
    "pressure": "Groundhogs are the signature Frederick County call across its farm belt, squirrels and raccoons fill Frederick City and Urbana attics, bats colonize Brunswick and Thurmont's older homes, and the Catoctin foothills add copperheads on rocky ground — protected, safety-first, never killed."
  },
  "Maryland|Garrett County": {
    "terrain": "Maryland's highest plateau carries Deep Creek Lake at its center, Savage River forest in the east, and the Youghiogheny cutting a gorge through the west.",
    "housing": "Oakland and Grantsville keep mountain-town Victorian and rail-era stock, McHenry and Deep Creek are lake houses, chalets and rentals, and Friendsville is a small river town, with farmhouses across the plateau.",
    "pressure": "Bats and raccoons in Deep Creek Lake homes that sit closed between visits are the Garrett County staple, skunks and groundhogs work Oakland and Grantsville yards, and the Savage River woods add porcupine damage at cabins and outbuildings."
  },
  "Maryland|Harford County": {
    "terrain": "The Susquehanna and its state park frame the northeast, the Bush and Gunpowder rivers cut the Bay shore, and Piedmont farms fill the northwest.",
    "housing": "Bel Air mixes older county-seat stock with suburbs, Aberdeen and Edgewood hold military-town housing, Havre de Grace is a waterfront historic town, and the north stays farmhouses.",
    "pressure": "Raccoons, squirrels and bats are constant in Bel Air, Fallston and Jarrettsville's canopy neighborhoods, rats follow the older waterfront blocks of Havre de Grace, Aberdeen and Edgewood, and farm country adds groundhogs and barn bats."
  },
  "Maryland|Howard County": {
    "terrain": "The Patapsco Valley cuts the northern border, the Patuxent frames the south and west, and Columbia's lakes and wooded pathways thread the suburbs.",
    "housing": "Ellicott City keeps granite mill-town and Victorian stock, Columbia is the famous planned community of colonials and townhomes, Elkridge and Savage are older mill and rail towns, and the west is estate and farm country.",
    "pressure": "Squirrels, raccoons and moles are the Howard County constant across Columbia, Ellicott City and Elkridge's mature suburbs, bats settle older homes in Savage and the Patapsco valley, and the western farm belt around Clarksville and Glenelg adds groundhogs and skunks."
  },
  "Maryland|Kent County": {
    "terrain": "The Chester River winds along the southern border, Eastern Neck Island guards its mouth, and flat grain fields and hedgerows cover the interior.",
    "housing": "Chestertown is a colonial port town of brick Federal homes, Rock Hall is a watermen's town, Galena and Millington are small farm villages, and the rest is farmhouses and waterfront estates.",
    "pressure": "Raccoons and bats in Chestertown's colonial-era homes and Rock Hall's waterfront houses lead Kent County's calls, groundhogs work the farm edges around Galena and Kennedyville, and skunks den under the county's many porches and sheds."
  },
  "Maryland|Montgomery County": {
    "terrain": "Rock Creek and Seneca Creek cut wooded park corridors through the suburbs, the Potomac frames the southwest, and the northern third is the protected Agricultural Reserve of farms and villages.",
    "housing": "Bethesda, Chevy Chase and Takoma Park keep pre-war colonials, tudors and bungalows, Silver Spring and Rockville mix older suburbs with downtown high-rises, and Germantown and Gaithersburg are growth-era communities.",
    "pressure": "Raccoons and squirrels are relentless in Silver Spring, Bethesda and Takoma Park's canopy neighborhoods, rats hold the older commercial cores of Rockville, Gaithersburg and Wheaton, bats roost in the county's older colonials, and the Agricultural Reserve adds groundhogs and barn animals around Poolesville and Damascus."
  },
  "Maryland|Prince George's County": {
    "terrain": "The Anacostia tributaries drain the Beltway suburbs, Greenbelt Park and Beltsville hold the county's big green blocks, the Patuxent River borders the east, and the south stays rural.",
    "housing": "Hyattsville, Mount Rainier and College Park keep streetcar-suburb bungalows and colonials, Greenbelt is the 1930s planned town, Bowie and Largo are postwar and growth-era suburbs, and Upper Marlboro is a small historic county seat.",
    "pressure": "Raccoons and squirrels fill attics from Hyattsville and College Park to Bowie, rats are entrenched in the older Beltway-era blocks and commercial strips, bats colonize older homes in Greenbelt and Laurel, and rural south county around Upper Marlboro adds groundhogs and black rat snakes."
  },
  "Maryland|Queen Anne's County": {
    "terrain": "Kent Island sits at the Bay Bridge in the west, the Chester and Corsica rivers cut the mainland, and Wye Island's fields and woods anchor the south.",
    "housing": "Stevensville and Chester mix older island homes with growth-era subdivisions, Centreville and Queenstown are historic small towns, Grasonville is waterfront suburbia, and the mainland east is farmhouses.",
    "pressure": "Raccoons and bats are the Kent Island staple in waterfront homes in Stevensville, Chester and Grasonville, groundhogs and moles work Centreville and Church Hill farm edges, and mainland river towns add skunks under porches and sheds."
  },
  "Maryland|Somerset County": {
    "terrain": "The Pocomoke River and Sound frame the east and south, Janes Island's marsh guards Crisfield, and pine woods and fields fill the interior.",
    "housing": "Princess Anne keeps colonial and Victorian stock around the university, Crisfield is a watermen's town of older homes, Deal Island is a marsh village, and Westover is farm country.",
    "pressure": "Raccoons work Crisfield's waterfront and Princess Anne's older homes year-round, skunks and opossums den under the raised houses and sheds that marsh country requires, and farm outbuildings across Westover and Marion host bats and starlings."
  },
  "Maryland|St. Mary's County": {
    "terrain": "Two great rivers frame the peninsula, St. Mary's River cuts its center, and flat pine and farm land fills the interior down to Point Lookout.",
    "housing": "Leonardtown is a small historic county seat, Lexington Park and California are naval-base suburbs, Mechanicsville and Charlotte Hall are farm and Amish country, and the river shores hold older waterfront homes and cottages.",
    "pressure": "Raccoons, squirrels and moles surge in Lexington Park and California's growth-era subdivisions, groundhogs work the Mechanicsville and Charlotte Hall farm belt — including Amish farms — and waterfront homes from Leonardtown to Piney Point add bats and raccoons in crawlspaces."
  },
  "Maryland|Talbot County": {
    "terrain": "The Wye, Miles and Tred Avon rivers cut deep tidal fingers through farm country, and Tilghman Island reaches into the Bay at the west.",
    "housing": "Easton holds historic brick and postwar suburbs, St. Michaels and Oxford are colonial-era waterfront towns, Tilghman Island is a working watermen's village, and estates line the Miles and Tred Avon rivers.",
    "pressure": "Raccoons and bats lead in Easton, St. Michaels and Oxford's historic homes and waterfront estates, moles and groundhogs work the farm and estate lawns, and Tilghman Island's watermen's homes add skunks and opossums under porches and sheds."
  },
  "Maryland|Washington County": {
    "terrain": "Antietam Creek drains the farm valley, the Potomac and C&O Canal run the southern border, and South Mountain and the Appalachian Trail ridge the east.",
    "housing": "Hagerstown mixes brick Victorian and rowhouse stock with postwar suburbs, Boonsboro and Williamsport are historic valley and canal towns, Smithsburg is orchard country, and Clear Spring is farm country.",
    "pressure": "Groundhogs lead across the Hager Valley's farms and subdivisions, raccoons and bats fill Hagerstown and Boonsboro's older homes, black rat snakes work the barns around Smithsburg and Clear Spring, and South Mountain adds copperheads on rocky ground — protected and safety-first."
  },
  "Maryland|Wicomico County": {
    "terrain": "The Wicomico River runs through Salisbury to Tangier Sound, the Nanticoke marshes border the west, and pine woods and poultry-farm country fill the rest.",
    "housing": "Salisbury mixes Victorian and older neighborhoods with university and postwar suburbs, Delmar is a rail-border town, Fruitland is growth-era suburbia, and Pittsville and Hebron are farm towns.",
    "pressure": "Rats follow Salisbury's older neighborhoods, university blocks and riverfront food businesses, raccoons and squirrels fill Fruitland and Delmar's canopy suburbs, and the surrounding farm and pine country adds groundhogs, bats in farmhouses, and Delmarva fox squirrel sightings in mature stands — protected, referral-grade only."
  },
  "Maryland|Worcester County": {
    "terrain": "Assateague's barrier island and the coastal bays line the east, the Pocomoke River and its dark cypress forest cut the west, and farm fields fill the center.",
    "housing": "Ocean City is condos, cottages and boardwalk blocks, Ocean Pines is a wooded lagoon community, Berlin and Snow Hill are historic small towns, and Pocomoke City is a river town, with farmhouses inland.",
    "pressure": "Raccoons, skunks and bats are the standing job in Ocean City and Ocean Pines homes and rentals that sit empty between seasons, rats follow Ocean City's boardwalk food blocks in season, and Berlin, Snow Hill and Pocomoke City add squirrels, groundhogs and bats in older inland homes."
  },
  "Virginia|Fairfax County": {
    "terrain": "Potomac River, Great Falls Park, Huntley Meadows Park, Accotink Creek shape Fairfax County, in Northern Virginia suburbs of Washington, DC.",
    "housing": "Housing here is dense suburbs under mature canopy, with river parks and stream valleys, centered on Fairfax and places like Reston, Herndon, Vienna.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Reston, with steady pressure along Potomac River."
  },
  "Virginia|Loudoun County": {
    "terrain": "Potomac River, Blue Ridge crest, Goose Creek, Bull Run Mountains shape Loudoun County, in Northern Virginia, west of Fairfax County.",
    "housing": "Housing here is fast-growing suburbs in the east, horse farms and vineyards in the west, centered on Leesburg and places like Ashburn, Leesburg, Sterling.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Ashburn, with steady pressure along Potomac River."
  },
  "Virginia|Prince William County": {
    "terrain": "Potomac River, Occoquan River, Manassas National Battlefield Park, Prince William Forest Park shape Prince William County, in Northern Virginia, southwest of Fairfax County.",
    "housing": "Housing here is dense eastern suburbs, battlefield parkland, and western horse country, centered on Manassas and places like Woodbridge, Manassas area, Dale City.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Woodbridge, with steady pressure along Potomac River."
  },
  "Virginia|Arlington County": {
    "terrain": "Potomac River, Four Mile Run, Potomac Palisades shape Arlington County, in Northern Virginia inside the Capital Beltway.",
    "housing": "Housing here is dense urban and inner-suburban neighborhoods on the Potomac bluffs, centered on Arlington and places like Arlington, Crystal City, Ballston.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Arlington, with steady pressure along Potomac River."
  },
  "Virginia|Stafford County": {
    "terrain": "Potomac River, Rappahannock River, Quantico Creek, Widewater State Park shape Stafford County, in Northern Virginia exurbs south of Prince William.",
    "housing": "Housing here is suburbs, river shore, and Quantico-edge forest, centered on Stafford and places like Stafford, Fredericksburg area communities, Garrisonville.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Stafford, with steady pressure along Potomac River."
  },
  "Virginia|Fauquier County": {
    "terrain": "Blue Ridge foothills, Rappahannock River headwaters, Sky Meadows nearby shape Fauquier County, in northern Piedmont horse country.",
    "housing": "Housing here is horse farms, rolling pasture, and small towns, centered on Warrenton and places like Warrenton, Marshall, The Plains.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Warrenton, with steady pressure along Blue Ridge foothills."
  },
  "Virginia|Spotsylvania County": {
    "terrain": "Rappahannock River, Lake Anna, Civil War battlefields shape Spotsylvania County, in Fredericksburg metro on the Fall Line.",
    "housing": "Housing here is fast-growing suburbs, lake shore, and battlefield forest, centered on Spotsylvania Courthouse and places like Fredericksburg area communities, Lake Wilderness, Thornburg.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Fredericksburg area communities, with steady pressure along Rappahannock River."
  },
  "Virginia|Culpeper County": {
    "terrain": "Rapidan River, Rappahannock River, Brandy Station battlefield shape Culpeper County, in northern Piedmont.",
    "housing": "Housing here is rolling horse and cattle farmland with a growing town center, centered on Culpeper and places like Culpeper, Brandy Station, Rixeyville.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Culpeper, with steady pressure along Rapidan River."
  },
  "Virginia|Henrico County": {
    "terrain": "James River, Chickahominy River, Deep Run Park shape Henrico County, in Richmond metro, north and east of the James River.",
    "housing": "Housing here is dense suburbs, river parks, and older inner neighborhoods, centered on Richmond and places like Glen Allen, Short Pump, Tuckahoe.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Glen Allen, with steady pressure along James River."
  },
  "Virginia|Chesterfield County": {
    "terrain": "James River, Pocahontas State Park, Lake Chesdin shape Chesterfield County, in Richmond metro, south of the James River.",
    "housing": "Housing here is large suburbs, state-park forest, and riverfront neighborhoods, centered on Chesterfield and places like Midlothian, Chester, Bon Air.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Midlothian, with steady pressure along James River."
  },
  "Virginia|Hanover County": {
    "terrain": "Pamunkey River, Chickahominy River, Scotchtown shape Hanover County, in Richmond metro, north of the James River.",
    "housing": "Housing here is suburbs, horse farms, and river swampland, centered on Hanover and places like Mechanicsville, Ashland, Hanover.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Mechanicsville, with steady pressure along Pamunkey River."
  },
  "Virginia|Albemarle County": {
    "terrain": "Rivanna River, Blue Ridge foothills, Carter Mountain shape Albemarle County, in central Piedmont at the foot of the Blue Ridge.",
    "housing": "Housing here is rolling Piedmont farmland, vineyards, and wooded suburbs west of Charlottesville, centered on Charlottesville and places like Charlottesville area communities, Crozet, Scottsville.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Charlottesville area communities, with steady pressure along Rivanna River."
  },
  "Virginia|Frederick County": {
    "terrain": "Opequon Creek, Shenandoah River headwaters, Great North Mountain shape Frederick County, in northern Shenandoah Valley.",
    "housing": "Housing here is Valley farmland, orchards, and fast-growing Winchester suburbs, centered on Winchester and places like Winchester area, Stephens City, Middletown.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Winchester area, with steady pressure along Opequon Creek."
  },
  "Virginia|Rockingham County": {
    "terrain": "Shenandoah River, Shenandoah National Park, George Washington National Forest shape Rockingham County, in central Shenandoah Valley.",
    "housing": "Housing here is Valley farmland, poultry country, and mountain borders, centered on Harrisonburg and places like Harrisonburg area, Bridgewater, Elkton.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Harrisonburg area, with steady pressure along Shenandoah River."
  },
  "Virginia|Augusta County": {
    "terrain": "South River, Shenandoah National Park edge, George Washington National Forest shape Augusta County, in Shenandoah Valley between the Blue Ridge and Alleghenies.",
    "housing": "Housing here is fertile Valley farmland framed by forested mountain ridges, centered on Staunton and places like Staunton area, Waynesboro area, Stuarts Draft.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Staunton area, with steady pressure along South River."
  },
  "Virginia|Montgomery County": {
    "terrain": "New River, Virginia Tech campus, Brush Mountain shape Montgomery County, in New River Valley.",
    "housing": "Housing here is university town, suburbs, and mountain forest, centered on Christiansburg and places like Blacksburg, Christiansburg, Shawsville.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Blacksburg, with steady pressure along New River. Nine-banded armadillos are still rare vagrants this far southwest — a confirmed sighting here is a report to DWR, not a removal service."
  },
  "Virginia|Roanoke County": {
    "terrain": "Roanoke River, Blue Ridge Parkway, Appalachian Trail, McAfee Knob shape Roanoke County, in Roanoke Valley in the Blue Ridge.",
    "housing": "Housing here is valley suburbs, river corridor, and mountain ridges, centered on Salem and places like Vinton, Cave Spring, Hollins.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Vinton, with steady pressure along Roanoke River."
  },
  "Virginia|James City": {
    "terrain": "James River, York River, Chickahominy River, Colonial Williamsburg edge shape James City County, in Virginia Peninsula between the James and York rivers.",
    "housing": "Housing here is peninsula suburbs, historic sites, and tidal river forest, centered on Williamsburg and places like Williamsburg area, Toano, Norge.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Williamsburg area, with steady pressure along James River."
  },
  "Virginia|York County": {
    "terrain": "York River, Chesapeake Bay edge, Colonial National Historical Park shape York County, in Virginia Peninsula.",
    "housing": "Housing here is peninsula suburbs, historic battlefields, and tidal creeks, centered on Yorktown and places like Yorktown, Grafton, Tabb.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Yorktown, with steady pressure along York River."
  },
  "Virginia|Virginia Beach County": {
    "terrain": "Virginia Beach is the state's most populous city, Norfolk borders it west shape Virginia Beach, in Hampton Roads oceanfront.",
    "housing": "Housing here is Atlantic oceanfront; Chesapeake Bay; Back Bay; First Landing State Park; Great Neck, centered on Virginia Beach and places like Virginia Beach.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Virginia Beach, with steady pressure along Virginia Beach is the state's most populous city."
  },
  "Virginia|Norfolk County": {
    "terrain": "Virginia Beach borders the city to the east shape Norfolk, in Hampton Roads harbor.",
    "housing": "Housing here is Elizabeth River; Chesapeake Bay; Lafayette River; naval station waterfront, centered on Norfolk and places like Norfolk.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Norfolk, with steady pressure along Virginia Beach borders the city to the east."
  },
  "Virginia|Chesapeake County": {
    "terrain": "Norfolk and Virginia Beach border the city shape Chesapeake, in Hampton Roads, south side.",
    "housing": "Housing here is Great Dismal Swamp; Elizabeth River South Branch; Intracoastal Waterway, centered on Chesapeake and places like Chesapeake.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Chesapeake, with steady pressure along Norfolk and Virginia Beach border the city."
  },
  "Virginia|Richmond County": {
    "terrain": "Richmond is the state capital and regional metro center shape Richmond, in Fall Line capital on the James River.",
    "housing": "Housing here is James River and its rapids; Shockoe Bottom; Church Hill; Fan District, centered on Richmond and places like Richmond.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Richmond, with steady pressure along Richmond is the state capital and regional metro center."
  },
  "Virginia|Newport News County": {
    "terrain": "Norfolk is across Hampton Roads harbor, Hampton borders the city shape Newport News, in Hampton Roads Peninsula.",
    "housing": "Housing here is James River; Hampton Roads harbor; Newport News Park, centered on Newport News and places like Newport News.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Newport News, with steady pressure along Norfolk is across Hampton Roads harbor, Hampton borders the city."
  },
  "Virginia|Hampton County": {
    "terrain": "Newport News borders the city, Norfolk is across Hampton Roads harbor shape Hampton, in Hampton Roads Peninsula.",
    "housing": "Housing here is Chesapeake Bay; Hampton Roads harbor; Back River; Fort Monroe, centered on Hampton and places like Hampton.",
    "pressure": "Wildlife pressure follows the habitat: Norway rats hold the older blocks and commercial strips, raccoons and squirrels take the attics above them, and bats return to older rooflines each summer around Hampton, with steady pressure along Newport News borders the city, Norfolk is across Hampton Roads harbor."
  },
  "Virginia|Portsmouth County": {
    "terrain": "Norfolk is directly across the Elizabeth River shape Portsmouth, in Hampton Roads, western Elizabeth River.",
    "housing": "Housing here is Elizabeth River; Olde Towne historic district; naval shipyard waterfront, centered on Portsmouth and places like Portsmouth.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Portsmouth, with steady pressure along Norfolk is directly across the Elizabeth River."
  },
  "Virginia|Suffolk County": {
    "terrain": "Norfolk and Chesapeake border the city shape Suffolk, in Hampton Roads, largest Virginia city by land area.",
    "housing": "Housing here is Great Dismal Swamp; Nansemond River; Lake Drummond nearby, centered on Suffolk and places like Suffolk.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Suffolk, with steady pressure along Norfolk and Chesapeake border the city."
  },
  "Virginia|Alexandria County": {
    "terrain": "Washington, DC is directly across the Potomac River shape Alexandria, in Northern Virginia on the Potomac River.",
    "housing": "Housing here is Potomac River; Old Town Alexandria; Cameron Run, centered on Alexandria and places like Alexandria.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Alexandria, with steady pressure along Washington, DC is directly across the Potomac River."
  },
  "Virginia|Charlottesville County": {
    "terrain": "Charlottesville is the regional metro center shape Charlottesville, in central Piedmont.",
    "housing": "Housing here is Rivanna River; Downtown Mall; University of Virginia, centered on Charlottesville and places like Charlottesville.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Charlottesville, with steady pressure along Charlottesville is the regional metro center."
  },
  "Virginia|Lynchburg County": {
    "terrain": "Roanoke is about 55 miles west shape Lynchburg, in central Virginia on the James River.",
    "housing": "Housing here is James River; Blackwater Creek; Liberty University, centered on Lynchburg and places like Lynchburg.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Lynchburg, with steady pressure along Roanoke is about 55 miles west."
  },
  "Virginia|Harrisonburg County": {
    "terrain": "Harrisonburg is the regional metro center shape Harrisonburg, in central Shenandoah Valley.",
    "housing": "Housing here is Black's Run; James Madison University; Massanutten nearby, centered on Harrisonburg and places like Harrisonburg.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Harrisonburg, with steady pressure along Harrisonburg is the regional metro center."
  },
  "Virginia|Fredericksburg County": {
    "terrain": "Washington, DC is about 50 miles north, Richmond about 55 miles south shape Fredericksburg, in Fall Line on the Rappahannock River.",
    "housing": "Housing here is Rappahannock River; historic downtown; Civil War battlefields, centered on Fredericksburg and places like Fredericksburg.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Fredericksburg, with steady pressure along Washington, DC is about 50 miles north, Richmond about 55 miles south."
  },
  "Virginia|Winchester County": {
    "terrain": "Washington, DC is about 75 miles east shape Winchester, in northern Shenandoah Valley.",
    "housing": "Housing here is Abrams Creek; historic Old Town; apple country, centered on Winchester and places like Winchester.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Winchester, with steady pressure along Washington, DC is about 75 miles east."
  },
  "Virginia|Manassas County": {
    "terrain": "Washington, DC is about 30 miles northeast shape Manassas, in Northern Virginia.",
    "housing": "Housing here is Bull Run nearby; Manassas National Battlefield edge; historic downtown, centered on Manassas and places like Manassas.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Manassas, with steady pressure along Washington, DC is about 30 miles northeast."
  },
  "Virginia|Petersburg County": {
    "terrain": "Richmond is about 25 miles north shape Petersburg, in Tri-Cities on the Appomattox River.",
    "housing": "Housing here is Appomattox River; historic Old Towne; Petersburg National Battlefield, centered on Petersburg and places like Petersburg.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Petersburg, with steady pressure along Richmond is about 25 miles north."
  },
  "Virginia|Williamsburg County": {
    "terrain": "Newport News is about 15 miles southeast shape Williamsburg, in Virginia Peninsula.",
    "housing": "Housing here is Colonial Williamsburg; College of William & Mary; York River nearby, centered on Williamsburg and places like Williamsburg.",
    "pressure": "Wildlife pressure follows the habitat: bats colonize older farmhouses and barns, skunks work lawns and outbuildings at dusk, and moles push up ridges across pastures and yards around Williamsburg, with steady pressure along Newport News is about 15 miles southeast."
  },
  "Virginia|Danville County": {
    "terrain": "Greensboro, NC is about 45 miles south shape Danville, in Southside on the Dan River.",
    "housing": "Housing here is Dan River; historic tobacco and mill districts; Anglers Park, centered on Danville and places like Danville.",
    "pressure": "Wildlife pressure follows the habitat: raccoons den in chimneys and attics, gray squirrels work the canopy, and woodchucks burrow along fences, barns, and garden edges around Danville, with steady pressure along Greensboro, NC is about 45 miles south."
  },
  "West Virginia|Barbour County": {
    "terrain": "The Tygart River and Middle Fork cut deep valleys between steep, forested Allegheny Plateau ridges, with Audra State Park's hemlock woods in the east.",
    "housing": "Philippi and Belington hold older valley-town homes and small brick blocks, while camps, farmhouses, and rural homes climb the hollows above the rivers.",
    "pressure": "Raccoons commute from the river bottoms into valley attics, bats colonize older Philippi homes each summer, and woodchucks work the farm and garden edges."
  },
  "West Virginia|Berkeley County": {
    "terrain": "The I-81 corridor runs through limestone valley farmland and orchards, rising west to Sleepy Creek Mountain and the Sleepy Creek WMA, with the Potomac River on the northern border.",
    "housing": "Martinsburg holds 1800s brick homes and mill-era blocks, while Inwood, Hedgesville, and the county's edges are 1990s-2020s subdivisions carved from orchards and farms.",
    "pressure": "Woodchucks and skunks lead in the subdivisions, rats and bats in Martinsburg's older stock, and fall rodent entry spikes every year as the exurban ring cools."
  },
  "West Virginia|Boone County": {
    "terrain": "The Coal and Little Coal rivers wind through a deeply dissected plateau of steep wooded ridges, reclaimed mine benches, and narrow settled bottoms.",
    "housing": "Madison and Danville hold older valley-town homes, while most of the county lives in homes and camps strung along the hollows and river bottoms.",
    "pressure": "Hollow homes sit against wooded hillsides, so raccoons, opossums, and snakes reach foundations directly from cover, and bats settle older outbuildings each summer."
  },
  "West Virginia|Braxton County": {
    "terrain": "Sutton and Burnsville lakes back up the Elk and Little Kanawha rivers into long wooded arms, surrounded by steep plateau forest and small farm bottoms.",
    "housing": "Sutton and Gassaway hold older river-town homes, Flatwoods has I-79 corridor housing, and lake camps and farmhouses scatter through the hollows.",
    "pressure": "Seasonal lake homes sit empty for months and are opened to bats and raccoons each spring, while river-bottom towns see steady raccoon and skunk pressure year-round."
  },
  "West Virginia|Brooke County": {
    "terrain": "The Ohio River forms the western edge, with steep wooded bluffs rising to plateau farmland crossed by Cross and Buffalo creeks.",
    "housing": "Wellsburg and Follansbee hold mill-era brick and frame homes along the river, with postwar suburbs and farmhouses on the plateau above.",
    "pressure": "Riverfront age and density keep rats in the oldest blocks, bluff trees drop squirrels and raccoons straight onto roofs, and bats return to older homes each summer."
  },
  "West Virginia|Cabell County": {
    "terrain": "The Ohio and Guyandotte rivers meet at Huntington, with Fourpole Creek, Ritter Park's wooded hills, and Beech Fork's lake country shaping the rest of the county.",
    "housing": "Huntington holds early-1900s homes, brick multifamily blocks, and a downtown commercial core, ringed by postwar suburbs and the village centers of Milton and Barboursville.",
    "pressure": "The state's second city produces year-round rat, pigeon, and raccoon volume, with bats in the older housing and skunks and woodchucks in the suburbs."
  },
  "West Virginia|Calhoun County": {
    "terrain": "The Little Kanawha River winds through a maze of steep, heavily forested ridges and narrow farm bottoms in the state's rural center.",
    "housing": "Grantsville holds a small older town core, and most homes are farmhouses and rural houses scattered along the river and creek bottoms.",
    "pressure": "Forest touches nearly every home here, so squirrel, raccoon, and bat pressure is constant, and farm outbuildings draw opossums and rat snakes year-round."
  },
  "West Virginia|Clay County": {
    "terrain": "The Elk River cuts a deep valley through steep, forested plateau country, with settled hollows branching off the main bottom.",
    "housing": "The town of Clay holds the county's small older core; most homes are rural houses and camps along the Elk and the creek hollows.",
    "pressure": "Homes sit directly against forest and river bottom, so raccoon, squirrel, and bat calls follow the seasons with no real off period."
  },
  "West Virginia|Doddridge County": {
    "terrain": "Middle Island Creek and the North Bend Rail Trail thread through rolling, wooded ridge-and-farm country in the state's north-central hills.",
    "housing": "West Union holds a small 1800s town core, and farmhouses and rural homes spread across the ridges and creek bottoms.",
    "pressure": "Farm-edge woodchucks are the steadiest call, with raccoon and bat work in the older homes each spring and summer."
  },
  "West Virginia|Fayette County": {
    "terrain": "The New River Gorge cuts a thousand-foot canyon through the plateau, joined by the Gauley at Gauley Bridge, with rim towns and river towns at very different elevations.",
    "housing": "Fayetteville and Oak Hill hold older town homes and a fast-growing stock of vacation rentals, while Montgomery and Ansted keep railroad and coal-era housing along the river.",
    "pressure": "Vacation properties sit empty between guests and collect bats and raccoons, gorge-rim homes back onto talus and forest, and river towns see steady skunk and opossum work."
  },
  "West Virginia|Gilmer County": {
    "terrain": "The Little Kanawha winds through steep forested ridges, with Cedar Creek's parkland and small farm bottoms providing the clearings.",
    "housing": "Glenville holds older college-town homes in the river bottom, and the rest of the county is farmhouses and rural homes along the creeks.",
    "pressure": "College rentals and older bottom homes drive raccoon and bat calls, while woodchucks are the steady farm-edge complaint."
  },
  "West Virginia|Grant County": {
    "terrain": "The South Branch Potomac runs a wide farm valley between North Fork Mountain's long rocky ridge and the Allegheny Front country to the west.",
    "housing": "Petersburg holds older valley-town homes, and camps, farmhouses, and second homes line the river and the Smoke Hole road.",
    "pressure": "River camps opened in spring reveal overwinter bats and raccoons, farm edges produce woodchuck and skunk work, and rattlesnake awareness matters on the rocky slopes."
  },
  "West Virginia|Greenbrier County": {
    "terrain": "The Greenbrier River crosses a broad karst limestone valley of farms and historic towns, rimmed by Greenbrier State Forest and Monongahela National Forest mountains.",
    "housing": "Lewisburg holds one of the state's finest stocks of 1700s-1800s homes, White Sulphur Springs adds resort-era housing, and farmhouses fill the valley between.",
    "pressure": "Historic-home chimneys and attics drive raccoon and bat calls, valley lawns and pastures carry mole and woodchuck work, and resort and second homes add seasonal openings."
  },
  "West Virginia|Hampshire County": {
    "terrain": "Two river systems — the South Branch Potomac with its famous Trough gorge, and the Cacapon — cut between long forested ridges and orchard-covered valley slopes.",
    "housing": "Romney, the state's oldest town, holds 1700s-1800s homes, while river camps, farmhouses, and second homes spread along both valleys.",
    "pressure": "River camps and second homes open to bats and raccoons in spring, orchard country produces woodchuck and skunk work, and fall brings the rodent push into valley homes."
  },
  "West Virginia|Hancock County": {
    "terrain": "The Ohio River borders the west, with steep bluffs, Tomlinson Run's wooded parkland, and plateau suburbs behind the river towns.",
    "housing": "Weirton holds mill-era neighborhoods and postwar suburbs, New Cumberland and Chester keep older river-town homes along the shore.",
    "pressure": "River and mill-age housing keeps rats in the oldest blocks, bluff trees feed squirrels and raccoons onto roofs, and summer brings the bat season to older homes."
  },
  "West Virginia|Hardy County": {
    "terrain": "The Moorefield Valley opens wide between forested ridges, with the South Fork running its length and Lost River sinking country in the west.",
    "housing": "Moorefield holds older valley-town homes, Wardensville keeps a small historic main street, and farmhouses and river camps fill the bottoms.",
    "pressure": "Poultry-country edges produce steady woodchuck and skunk work, river camps open to bats in spring, and valley homes take the fall rodent push."
  },
  "West Virginia|Harrison County": {
    "terrain": "The West Fork River runs the county's center through rolling, wooded gas-country hills, with valley towns along the water and suburbs on the ridges.",
    "housing": "Clarksburg holds dense early-1900s neighborhoods and brick blocks, Bridgeport is postwar and newer suburbs, and Salem and Shinnston keep small-town older cores.",
    "pressure": "Older urban stock drives rat, bat, and raccoon volume in Clarksburg, while Bridgeport's growth ring leads on squirrels, woodchucks, and fall rodent entry."
  },
  "West Virginia|Jackson County": {
    "terrain": "Mill Creek and its lakes drain rolling farm-and-forest hills to the Ohio River at the county's western edge.",
    "housing": "Ripley holds an older courthouse-town core with suburbs growing around it, Ravenswood keeps river-town housing, and farmhouses fill the countryside.",
    "pressure": "Farm-edge woodchucks and lawn moles are the county's signature calls, with raccoon and bat work in the two towns each spring and summer."
  },
  "West Virginia|Jefferson County": {
    "terrain": "The Shenandoah joins the Potomac at Harpers Ferry beneath the Blue Ridge, with a rolling limestone farm valley — karst, sinks, and caves — filling the rest of the county.",
    "housing": "Charles Town, Harpers Ferry, and Shepherdstown hold dense 1700s-1800s housing, Ranson adds mill-era streets, and subdivisions spread across the farm valley.",
    "pressure": "Historic housing drives bat and raccoon calls, horse country drives woodchuck work, and the subdivision ring adds skunks, moles, and fall rodent entry."
  },
  "West Virginia|Kanawha County": {
    "terrain": "The Kanawha and Elk rivers meet at Charleston in a wide industrial valley, with steep forested hills squeezing neighborhoods onto benches and bottoms up every hollow.",
    "housing": "Charleston holds early-1900s neighborhoods, brick multifamily stock, and hill homes, ringed by postwar river suburbs like South Charleston, Dunbar, and St. Albans.",
    "pressure": "The state's largest housing stock produces year-round rat, raccoon, and bat volume, and the hills put forest — and its animals — directly against most roofs."
  },
  "West Virginia|Lewis County": {
    "terrain": "The West Fork River and Stonewall Jackson Lake anchor a county of rolling wooded hills, farm bottoms, and lake coves.",
    "housing": "Weston holds a deep stock of Victorian and early-1900s homes, Jane Lew keeps a small older core, and lake camps and farmhouses fill the rest.",
    "pressure": "Historic Weston housing drives bat and raccoon calls, lake camps add seasonal openings, and farm edges add woodchuck and skunk work."
  },
  "West Virginia|Lincoln County": {
    "terrain": "The Mud and Guyandotte rivers drain a dissected plateau of steep wooded ridges, narrow bottoms, and scattered farm clearings.",
    "housing": "Hamlin holds a small older town core, and most homes are rural houses strung along the river and creek bottoms and hollows.",
    "pressure": "Bottom homes sit against forest, so raccoon, opossum, and skunk pressure is nightly, with woodchucks on every cleared edge."
  },
  "West Virginia|Logan County": {
    "terrain": "The Guyandotte River winds through deep valleys between steep forested ridges and reclaimed mine benches in the heart of the coalfields.",
    "housing": "Logan, Chapmanville, and Man hold older coal-town homes along the bottoms, with houses strung up every hollow.",
    "pressure": "Hollow homes back onto wooded and reclaimed slopes, so raccoon, opossum, and snake calls are steady, and bats settle the older valley stock each summer."
  },
  "West Virginia|McDowell County": {
    "terrain": "The Tug Fork and its tributaries cut narrow valleys between some of the steepest, most heavily forested ridges in West Virginia.",
    "housing": "Welch, War, and Gary hold coal-era brick and frame homes, many a century old, terraced into the narrow valleys.",
    "pressure": "Century-old housing against steep forest produces constant raccoon, bat, and snake pressure, with skunks and opossums in every bottom."
  },
  "West Virginia|Marion County": {
    "terrain": "The Tygart joins the West Fork at Fairmont to form the Monongahela, in rolling wooded hill country cut by creek bottoms.",
    "housing": "Fairmont holds dense early-1900s neighborhoods and brick blocks on two river hills, with postwar suburbs and Mannington's older small-town core.",
    "pressure": "Older urban stock drives rat, bat, and raccoon volume in Fairmont, while the suburbs and farms add woodchuck, skunk, and fall rodent work."
  },
  "West Virginia|Marshall County": {
    "terrain": "The Ohio River forms the western border, with steep wooded bluffs rising to rolling plateau farmland drained by Fish and Grave creeks.",
    "housing": "Moundsville, Glen Dale, and Benwood hold older river-town homes and postwar suburbs, with farmhouses across the plateau.",
    "pressure": "River-town age keeps rats in the oldest blocks, and the bluff-and-plateau suburbs produce steady raccoon, skunk, and woodchuck calls."
  },
  "West Virginia|Mason County": {
    "terrain": "Two great rivers meet at Point Pleasant, with broad farm bottoms along both shores and wooded hills behind.",
    "housing": "Point Pleasant holds a historic core of 1800s homes, New Haven and Mason keep small river-town housing, and farmhouses fill the bottoms.",
    "pressure": "Historic homes drive bat and raccoon calls, farm soil drives woodchuck and mole work, and the rivers keep skunks and opossums moving through town yards."
  },
  "West Virginia|Mercer County": {
    "terrain": "East River Mountain and the Bluestone River frame a high county of ridge-and-valley farms, historic coal-and-rail towns, and I-77 suburbs.",
    "housing": "Princeton mixes older in-town homes with fast I-77 suburbs, Bluefield holds dense historic hillside neighborhoods, and Athens and Bramwell keep small historic cores.",
    "pressure": "Historic hillside housing drives bat and raccoon volume in Bluefield, Princeton's growth ring adds squirrel and woodchuck work, and farm valleys add moles and skunks."
  },
  "West Virginia|Mineral County": {
    "terrain": "The North Branch Potomac runs the Maryland border beneath Knobly Mountain's long ridge, with farm valleys and wooded slopes filling the county.",
    "housing": "Keyser holds older valley-town homes and college rentals, Piedmont and Ridgeley keep compact mill-and-rail housing on the river bluffs.",
    "pressure": "River-town age drives rat and bat calls in the oldest blocks, and the farm valleys add steady woodchuck and skunk work."
  },
  "West Virginia|Mingo County": {
    "terrain": "The Tug Fork winds along the Kentucky line through narrow valleys between steep, heavily forested coal-country ridges.",
    "housing": "Williamson holds an older flood-walled river-town core, and Matewan, Kermit, and Gilbert keep small coal-town housing in the valleys.",
    "pressure": "Valley homes against steep forest produce steady raccoon, opossum, and snake calls, with bats in the older town stock each summer."
  },
  "West Virginia|Monongalia County": {
    "terrain": "The Monongahela River and Cheat Lake frame a county of steep wooded ridges, Deckers Creek's gorge, and Coopers Rock's cliff country in the east.",
    "housing": "Morgantown layers historic neighborhoods, dense student rentals, and brick multifamily stock with fast postwar and newer suburbs in Westover, Star City, and Granville.",
    "pressure": "University housing turnover and older stock drive raccoon, bat, and rat volume, while the growth ring adds woodchucks, skunks, and fall rodent entry."
  },
  "West Virginia|Monroe County": {
    "terrain": "Rolling karst farm valleys run between Peters Mountain's long rocky ridge and the Greenbrier and New rivers on the county's borders.",
    "housing": "Union holds a small historic courthouse-town core, Peterstown keeps older valley homes, and farmhouses and camps fill the valleys.",
    "pressure": "Farm country produces woodchuck, mole, and skunk work all season, with bats and raccoons in the older homes and barns."
  },
  "West Virginia|Morgan County": {
    "terrain": "The Potomac bends along the northern border, with Cacapon Mountain's long ridge, Sleepy Creek's valley, and warm-spring hollows filling the county.",
    "housing": "Berkeley Springs holds historic spa-town homes and cottages, and cabins, second homes, and rural houses scatter through the mountain and river country.",
    "pressure": "Second homes and cabins sit empty for stretches and are opened to bats and raccoons, while cleared mountain lots produce woodchuck and skunk work."
  },
  "West Virginia|Nicholas County": {
    "terrain": "Summersville Lake and the Gauley River cut through high forested plateau, with the Meadow River and farm valleys in the south.",
    "housing": "Summersville mixes older in-town homes with highway-corridor and lake-area growth, Richwood holds older mountain-town housing, and farmhouses fill the valleys.",
    "pressure": "Lake houses sit seasonal and open to bats and raccoons, Richwood's older stock drives attic calls, and farm edges add woodchuck work."
  },
  "West Virginia|Ohio County": {
    "terrain": "The Ohio River and Wheeling Island form the western edge, with Wheeling Creek cutting east through steep wooded hills and Oglebay's parkland.",
    "housing": "Wheeling holds Victorian districts, brick multifamily blocks, and island homes, with postwar hill suburbs in Bethlehem and Triadelphia.",
    "pressure": "The Panhandle's oldest urban stock produces year-round rat, pigeon, and raccoon volume, with bats every summer in the historic districts."
  },
  "West Virginia|Pendleton County": {
    "terrain": "Spruce Knob and Seneca Rocks crown a county of high ridges, Germany Valley's karst, and narrow farm valleys along the South Branch headwaters.",
    "housing": "Franklin holds a small historic valley-town core, and farmhouses, camps, and cabins fill the high valleys.",
    "pressure": "Farm-edge woodchucks and farmhouse bats and raccoons are the steady calls, in a county where every home sits against mountain forest."
  },
  "West Virginia|Pleasants County": {
    "terrain": "The Ohio River and Middle Island form the western edge, with steep wooded bluffs rising to farm ridges behind St. Marys.",
    "housing": "St. Marys holds older river-city homes and brick blocks, Belmont keeps a small village core, and farmhouses fill the ridges.",
    "pressure": "River-city age drives bat and raccoon calls in St. Marys, with skunk, opossum, and woodchuck work across the countryside."
  },
  "West Virginia|Pocahontas County": {
    "terrain": "The Greenbrier River is born here among the state's highest ridges — Cheat Mountain, Cranberry Glades, and Snowshoe's 4,800-foot country.",
    "housing": "Marlinton holds an older rail-town core, Durbin keeps a small mountain-town stock, and ski condos, cabins, and farmhouses fill the valleys and slopes.",
    "pressure": "Seasonal ski and mountain properties sit empty for stretches and collect bats and raccoons, while valley farms add woodchuck and skunk work."
  },
  "West Virginia|Preston County": {
    "terrain": "The Cheat River gorge cuts the west, with a high rolling plateau of farms and forest rising toward the Maryland line.",
    "housing": "Kingwood holds an older valley-town core, Terra Alta and Masontown keep mountain-borough housing, and farmhouses fill the plateau.",
    "pressure": "High cold country pushes squirrels and rodents into attics early each fall, and farm edges produce woodchuck work all season."
  },
  "West Virginia|Putnam County": {
    "terrain": "The Kanawha River runs the southern border, with the Teays Valley's broad suburban floor and wooded ridges to the north.",
    "housing": "Hurricane and Teays Valley are dominated by 1980s-2020s subdivisions, Winfield and Buffalo hold older river-town cores, and Eleanor adds planned-community housing.",
    "pressure": "Fast suburban growth leads on squirrels, woodchucks, and moles, while the older river towns add bat, raccoon, and rat calls."
  },
  "West Virginia|Raleigh County": {
    "terrain": "Beckley sits on a high plateau between Piney Creek's gorge and the New River, with lakes and forested ridges across the county.",
    "housing": "Beckley layers older in-town neighborhoods and brick blocks with postwar and newer suburbs, while Sophia and Mabscott keep coal-town housing.",
    "pressure": "The region's largest housing stock produces year-round rat and raccoon volume, with bats in summer and a hard fall rodent push on the plateau."
  },
  "West Virginia|Randolph County": {
    "terrain": "The Tygart Valley runs a farm floor between forested Allegheny ridges, with Cheat Mountain and the national forest filling the east.",
    "housing": "Elkins holds older rail-town neighborhoods and college housing, Beverly keeps a historic core, and farmhouses and camps fill the valley.",
    "pressure": "Valley towns against national forest produce constant raccoon and bat pressure, and seasonal camps open to overwinter tenants each spring."
  },
  "West Virginia|Ritchie County": {
    "terrain": "The Hughes River and the North Bend Rail Trail thread through rolling wooded ridges, farm bottoms, and small valley towns.",
    "housing": "Harrisville, Pennsboro, and Cairo hold small older town cores, with farmhouses across the ridges and bottoms.",
    "pressure": "Farm-edge woodchucks lead, with raccoon and bat work in the older town homes each spring and summer."
  },
  "West Virginia|Roane County": {
    "terrain": "Spring Creek and Charles Fork Lake drain rolling wooded hills and farm bottoms in the state's central hill country.",
    "housing": "Spencer holds a small older valley-town core, and farmhouses and rural homes fill the creek country.",
    "pressure": "Farm-edge woodchucks lead the call list, with creek-bottom raccoon and farmhouse bat work each season."
  },
  "West Virginia|Summers County": {
    "terrain": "The New and Greenbrier rivers meet at Hinton beneath steep forested ridges, with Bluestone Lake backing up the New to the south.",
    "housing": "Hinton holds a remarkable stock of rail-era brick and frame homes terraced above the river, with rural homes up both valleys.",
    "pressure": "Terraced historic housing against forested slopes produces steady raccoon, bat, and snake calls, with river camps adding seasonal openings."
  },
  "West Virginia|Taylor County": {
    "terrain": "The Tygart Valley River and Tygart Lake anchor rolling wooded hill country cut by creek bottoms and rail corridors.",
    "housing": "Grafton holds dense Victorian and rail-era housing in the valley, Flemington keeps a small older borough core, and farmhouses fill the hills.",
    "pressure": "Rail-era housing drives bat and raccoon volume in Grafton, with lake camps and farm edges adding seasonal work."
  },
  "West Virginia|Tucker County": {
    "terrain": "Canaan Valley's high floor, the Blackwater Canyon's gorge, and Cheat Mountain ridges make this one of the highest, wildest counties in the East.",
    "housing": "Parsons holds an older valley-town core, Davis and Thomas keep historic mountain-borough housing, and Canaan Valley is dense with vacation homes and condos.",
    "pressure": "Vacation properties sit empty for stretches and are opened to bats and raccoons, while valley towns take steady attic and farm-edge calls."
  },
  "West Virginia|Tyler County": {
    "terrain": "The Ohio River forms the western border, with Middle Island Creek cutting through rolling wooded oil-country ridges to the east.",
    "housing": "Sistersville holds a remarkable stock of oil-boom Victorian homes, Middlebourne keeps a small older core, and farmhouses fill the ridges.",
    "pressure": "Victorian housing drives bat and raccoon calls in Sistersville, with creek-bottom skunk and opossum work across the county."
  },
  "West Virginia|Upshur County": {
    "terrain": "The Buckhannon River runs a farm valley through the Allegheny foothills, with forested ridges rising on every side.",
    "housing": "Buckhannon mixes historic neighborhoods and college rentals around West Virginia Wesleyan with postwar suburbs, and farmhouses fill the valleys.",
    "pressure": "College-town housing and canopy streets drive raccoon and bat calls, while the farms add woodchuck and skunk work all season."
  },
  "West Virginia|Wayne County": {
    "terrain": "The Ohio and Big Sandy rivers form the western border, with Beech Fork and East Lynn lakes set in steep forested ridge country.",
    "housing": "Kenova and Ceredo hold older river-town homes, Wayne keeps a small valley-town core, and rural homes fill the southern hollows.",
    "pressure": "River-town age drives rat, bat, and raccoon calls in the north, while the southern hollows add skunk, opossum, and woodchuck work."
  },
  "West Virginia|Webster County": {
    "terrain": "The upper Elk River and the Gauley's headwaters cut deep valleys through some of the most heavily forested mountain country in the state.",
    "housing": "Webster Springs holds older resort-era and valley homes, Cowen and Camden-on-Gauley keep small town cores, and camps and farmhouses scatter through the hollows.",
    "pressure": "Every home here sits against deep forest, so raccoon, bat, and squirrel pressure is constant and seasonal camps open to overwinter tenants."
  },
  "West Virginia|Wetzel County": {
    "terrain": "The Ohio River forms the western border, with steep wooded bluffs and creek valleys cutting the ridge country behind New Martinsville.",
    "housing": "New Martinsville holds older river-city homes and postwar suburbs, Pine Grove and Hundred keep small valley-town cores, and farmhouses fill the ridges.",
    "pressure": "River-city age drives rat, bat, and raccoon calls, while the creek towns add skunk and opossum work year-round."
  },
  "West Virginia|Wirt County": {
    "terrain": "The Little Kanawha River winds through rolling, heavily forested hills with small farm bottoms along its course.",
    "housing": "Elizabeth holds a small historic river-town core, and farmhouses and rural homes make up nearly all the rest of the county.",
    "pressure": "In the state's smallest county every home sits against woods or river bottom, so raccoon, bat, and skunk pressure follows the seasons closely."
  },
  "West Virginia|Wood County": {
    "terrain": "Two rivers meet at Parkersburg beneath wooded bluffs, with suburban ridges, Mountwood's forest, and farm country filling the east.",
    "housing": "Parkersburg layers early-1900s neighborhoods, brick blocks, and a downtown core with postwar suburbs; Vienna and Williamstown add river-suburb housing.",
    "pressure": "The Mid-Ohio Valley's largest housing stock produces year-round rat and raccoon volume, with bats each summer and a hard fall rodent push."
  },
  "West Virginia|Wyoming County": {
    "terrain": "The Guyandotte River winds through narrow valleys between steep forested coal-country ridges, with Twin Falls' gorge country in the east.",
    "housing": "Pineville, Mullens, and Oceana hold older coal-town homes along the bottoms, with houses strung up the hollows.",
    "pressure": "Hollow homes against steep forest produce steady raccoon, opossum, and snake calls, with bats in the older valley stock each summer."
  },
  "North Carolina|Wake County": {
    "terrain": "Neuse River, Falls Lake, William B. Umstead State Park shape the ground in Wake County, in central Piedmont in the Triangle around Raleigh.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Raleigh holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Wake County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Durham County": {
    "terrain": "Eno River, Eno River State Park, Duke Forest shape the ground in Durham County, in central Piedmont in the Triangle.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Durham holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Durham County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Orange County": {
    "terrain": "Eno River, Occoneechee Mountain, University Lake shape the ground in Orange County, in central Piedmont in the Triangle around Chapel Hill.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Hillsborough holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Orange County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Chatham County": {
    "terrain": "Jordan Lake, Haw River, Deep River shape the ground in Chatham County, in central Piedmont southwest of the Triangle.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Pittsboro holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Chatham County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Johnston County": {
    "terrain": "Neuse River, Clemmons State Forest edge, Howell Woods shape the ground in Johnston County, in central Coastal Plain and Piedmont edge southeast of Raleigh.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Smithfield holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Johnston County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Lee County": {
    "terrain": "Deep River, San-Lee Park, Cape Fear River headwaters shape the ground in Lee County, in central Piedmont and Sandhills edge at Sanford.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Sanford holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Lee County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Mecklenburg County": {
    "terrain": "Lake Norman south shore, Catawba River, McDowell Nature Preserve shape the ground in Mecklenburg County, in southwestern Piedmont around Charlotte.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Charlotte holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Mecklenburg County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Union County": {
    "terrain": "Cane Creek Park, Twelve Mile Creek, Lanes Creek shape the ground in Union County, in southwestern Piedmont southeast of Charlotte.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Monroe holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Union County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Cabarrus County": {
    "terrain": "Catawba River tributaries, Frank Liske Park, Reed Gold Mine woods shape the ground in Cabarrus County, in central Piedmont northeast of Charlotte.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Concord holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Cabarrus County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Gaston County": {
    "terrain": "Catawba River, Crowders Mountain State Park, South Fork River shape the ground in Gaston County, in southwestern Piedmont west of Charlotte.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Gastonia holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Gaston County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Lincoln County": {
    "terrain": "Lake Norman west shore, Lake Norman State Park edge, South Fork River shape the ground in Lincoln County, in western Piedmont west of Lake Norman.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Lincolnton holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Lincoln County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Iredell County": {
    "terrain": "Lake Norman, Lake Norman State Park, Catawba River shape the ground in Iredell County, in western Piedmont around Lake Norman.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Statesville holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Iredell County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Rowan County": {
    "terrain": "Yadkin River, High Rock Lake, Dan Nicholas Park shape the ground in Rowan County, in central Piedmont along the Yadkin River.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Salisbury holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Rowan County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Forsyth County": {
    "terrain": "Salem Lake, Yadkin River tributaries, Tanglewood Park shape the ground in Forsyth County, in central Piedmont around Winston-Salem.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Winston-Salem holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Forsyth County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Guilford County": {
    "terrain": "Lake Brandt, Lake Higgins, Haw River headwaters shape the ground in Guilford County, in central Piedmont around Greensboro and High Point.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Greensboro holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Guilford County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Alamance County": {
    "terrain": "Haw River, Lake Cammack, Cedarock Park shape the ground in Alamance County, in central Piedmont along the Haw River.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Graham holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Alamance County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Davidson County": {
    "terrain": "High Rock Lake, Yadkin River, Boone's Cave Park shape the ground in Davidson County, in central Piedmont south of Winston-Salem.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Lexington holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Davidson County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Randolph County": {
    "terrain": "Uwharrie National Forest edge, Deep River, Lake Reese shape the ground in Randolph County, in central Piedmont and Uwharrie edge.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Asheboro holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Randolph County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Catawba County": {
    "terrain": "Lake Norman west shore, Hickory City lakes, Catawba River shape the ground in Catawba County, in western Piedmont around Hickory and Lake Norman's west shore.",
    "housing": "Brick ranches and crawlspace homes in older cores, with 1990s-2010s subdivisions backing onto woods and creeks. Newton holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Catawba County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Burke County": {
    "terrain": "Lake James, Linville Gorge edge, Catawba River shape the ground in Burke County, in western Piedmont foothills below the Blue Ridge escarpment.",
    "housing": "Mountain cabins, vacation rentals, and valley homes with stone foundations, woodpiles, and open eaves. Morganton holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Burke County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|McDowell County": {
    "terrain": "Lake James, Catawba River, Pisgah National Forest edge shape the ground in McDowell County, in Blue Ridge foothills east of Asheville.",
    "housing": "Mountain cabins, vacation rentals, and valley homes with stone foundations, woodpiles, and open eaves. Marion holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in McDowell County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Buncombe County": {
    "terrain": "French Broad River, Blue Ridge Parkway, Pisgah National Forest edge shape the ground in Buncombe County, in southern Blue Ridge mountains around Asheville.",
    "housing": "Mountain cabins, vacation rentals, and valley homes with stone foundations, woodpiles, and open eaves. Asheville holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Buncombe County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Henderson County": {
    "terrain": "French Broad River, Dupont State Forest edge, Mills River shape the ground in Henderson County, in southern Blue Ridge mountains south of Asheville.",
    "housing": "Mountain cabins, vacation rentals, and valley homes with stone foundations, woodpiles, and open eaves. Hendersonville holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Henderson County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Haywood County": {
    "terrain": "Pigeon River, Lake Junaluska, Great Smoky Mountains National Park edge shape the ground in Haywood County, in southern Blue Ridge mountains west of Asheville.",
    "housing": "Mountain cabins, vacation rentals, and valley homes with stone foundations, woodpiles, and open eaves. Waynesville holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Haywood County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Cumberland County": {
    "terrain": "Cape Fear River, Carvers Creek State Park, Little River shape the ground in Cumberland County, in southern Piedmont and Sandhills around Fayetteville and Fort Liberty.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Fayetteville holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Cumberland County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Harnett County": {
    "terrain": "Cape Fear River, Raven Rock State Park, Upper Little River shape the ground in Harnett County, in central Coastal Plain and Sandhills north of Fayetteville.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Lillington holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Harnett County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Moore County": {
    "terrain": "Sandhills longleaf pine woods, Little River, Weymouth Woods shape the ground in Moore County, in Sandhills around Southern Pines and Pinehurst.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Carthage holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Moore County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Hoke County": {
    "terrain": "Little River, Sandhills pine woods, Fort Liberty edge shape the ground in Hoke County, in Sandhills west of Fayetteville.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Raeford holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Hoke County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|New Hanover County": {
    "terrain": "Cape Fear River, Wrightsville Beach marshes, Carolina Beach State Park shape the ground in New Hanover County, in southern coast at Wilmington and the Cape Fear River.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Wilmington holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in New Hanover County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Brunswick County": {
    "terrain": "Cape Fear River, Lockwood Folly River, Bald Head Island marshes shape the ground in Brunswick County, in southern coast on the Cape Fear and the Atlantic.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Bolivia holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Brunswick County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Pender County": {
    "terrain": "Black River, Cape Fear River, Holly Shelter Game Land shape the ground in Pender County, in southern Coastal Plain north of Wilmington.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Burgaw holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Pender County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Onslow County": {
    "terrain": "New River, Camp Lejeune woods, Hammocks Beach State Park shape the ground in Onslow County, in central coast around Jacksonville and Camp Lejeune.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Jacksonville holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Onslow County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Craven County": {
    "terrain": "Neuse River, Trent River, Croatan National Forest shape the ground in Craven County, in central Coastal Plain at the Neuse and Trent rivers.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. New Bern holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Craven County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Carteret County": {
    "terrain": "Bogue Sound, North River, Cedar Island marshes shape the ground in Carteret County, in central coast on Bogue Sound and the Atlantic.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Beaufort holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Carteret County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Pitt County": {
    "terrain": "Tar River, River Park North, Greenville greenways shape the ground in Pitt County, in inner Coastal Plain around Greenville.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Greenville holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Pitt County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Wayne County": {
    "terrain": "Neuse River, Cliffs of the Neuse State Park, Little River shape the ground in Wayne County, in inner Coastal Plain on the Neuse River.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Goldsboro holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Wayne County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Nash County": {
    "terrain": "Tar River, Rocky Mount Mills pond, Stony Creek shape the ground in Nash County, in Piedmont and Coastal Plain edge at Rocky Mount.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Nashville holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Nash County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Wilson County": {
    "terrain": "Lake Wilson, Toisnot Creek, Contentnea Creek shape the ground in Wilson County, in inner Coastal Plain.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Wilson holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Wilson County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Lenoir County": {
    "terrain": "Neuse River, Neuseway Nature Park, Contentnea Creek shape the ground in Lenoir County, in inner Coastal Plain on the Neuse River.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Kinston holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Lenoir County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "North Carolina|Robeson County": {
    "terrain": "Lumber River, Lumber River State Park, Lumbee pine woods shape the ground in Robeson County, in southern Coastal Plain on the Lumber River.",
    "housing": "Raised, stilt, and slab homes near water, with retention-pond subdivisions and canal-front lots. Lumberton holds the oldest stock, with newer growth spreading along the main corridors.",
    "pressure": "Raccoons and squirrels lead attic calls in Robeson County, copperheads appear in leaf litter and ivy in season, and crawlspace raccoons, opossums, and skunks stay steady year-round. Call us at (844) 544-3498 and our crew will inspect first."
  },
  "South Carolina|Abbeville County": {
    "terrain": "Russell Lake and Long Cane Creek cut wooded corridors through rolling Piedmont farmland and Sumter National Forest tracts in the state's western corner.",
    "housing": "Abbeville holds an intact antebellum and Victorian in-town stock around its square, Calhoun Falls and Due West keep small-town and college-era homes, and farmhouses scatter across the rural townships.",
    "pressure": "Lake-shore and creek-bottom raccoons press homes nightly, armadillos root lawns and pastures year-round, and bats recur in the older Abbeville and Due West rooflines each summer."
  },
  "South Carolina|Aiken County": {
    "terrain": "Deep Sandhills sand under longleaf pine and turkey oak runs from Aiken's horse country west to Savannah River swamp and the gopher tortoise preserve.",
    "housing": "Aiken's Winter Colony estates and older in-town homes mix with North Augusta's riverfront suburbs, Graniteville's mill-village stock, and rural Sandhills homes on sand.",
    "pressure": "Armadillos burrow the sandy lawns countywide, raccoons and squirrels move off Hitchcock Woods into attics, and river-bottom opossums and skunks press the low ground."
  },
  "South Carolina|Allendale County": {
    "terrain": "Savannah River floodplain swamp and creek bottoms spread through flat farm and pine timber land in South Carolina's least populated county.",
    "housing": "Allendale and Fairfax hold older small-town homes and farmhouses with pier foundations and open crawlspaces, many shaded by live oak and pine.",
    "pressure": "River-swamp raccoons and opossums press the towns nightly, armadillos root the sandy yards, and post-storm flooding pushes snakes toward high ground and houses."
  },
  "South Carolina|Anderson County": {
    "terrain": "Lake Hartwell's creek arms and foothill hardwood ridges frame fast-growing suburbs, pasture, and small cities between Greenville and the Georgia line.",
    "housing": "Anderson's older in-town homes mix with Belton and Williamston mill-era stock, lake houses on Hartwell, and 1990s-2020s subdivisions across the northern half.",
    "pressure": "Groundhogs burrow foothill banks and pasture edges, squirrels and raccoons use the mature canopy over older neighborhoods, and lake homes take raccoon and bat calls each season."
  },
  "South Carolina|Bamberg County": {
    "terrain": "Blackwater Edisto River swamp and Carolina bays thread flat farm and pine flatwoods across this small inland Lowcountry county.",
    "housing": "Bamberg and Denmark hold older railroad-town homes and college-area housing in Denmark, with farmhouses and rural homes across the townships.",
    "pressure": "Swamp-edge raccoons and opossums press the small towns, armadillos work sandy yards year-round, and cottonmouths stay close to the Edisto wet ground."
  },
  "South Carolina|Barnwell County": {
    "terrain": "Sandhills longleaf and farmland fall west to Savannah River swamp, with the Salkehatchie headwaters and Lake Edgar Brown in between.",
    "housing": "Barnwell and Blackville keep older small-town homes, Williston adds farm-town stock, and rural homes sit on sandy acreage across the county.",
    "pressure": "Armadillos and moles work the deep sand constantly, raccoons move up the creek bottoms into town, and skunks den under porches and outbuildings."
  },
  "South Carolina|Beaufort County": {
    "terrain": "Sea islands, salt marsh, and tidal creeks spread under live-oak maritime forest, with Port Royal Sound and the Beaufort River cutting the county into island communities.",
    "housing": "Historic Beaufort holds antebellum raised homes, Bluffton mixes old-town cottages with large new subdivisions, and Hilton Head is resort and villa housing under dense canopy.",
    "pressure": "Marsh-edge raccoons and opossums are nightly, armadillos burrow island sand, bats roost in older raised homes, and king tides and storms push snakes and raccoons into neighborhoods."
  },
  "South Carolina|Berkeley County": {
    "terrain": "Lake Moultrie, the Cooper River swamp, and Francis Marion National Forest flatwoods surround some of the fastest-growing suburbs in the state.",
    "housing": "Goose Creek and Hanahan are dense postwar-to-new suburbs, Moncks Corner keeps older lake-town housing, and rural homes line the forest and lake edges.",
    "pressure": "Forest-edge raccoons and squirrels press new subdivisions, armadillos work sandy lawns, and lake and swamp edges add opossums, cottonmouths, and post-storm snake calls."
  },
  "South Carolina|Calhoun County": {
    "terrain": "Congaree River floodplain swamp borders Sandhills farms and pine land, with the upper Lake Marion shore at the county's southeastern corner.",
    "housing": "St. Matthews holds older farm-town homes around its main street, Cameron adds rail-town stock, and farmhouses scatter across the sandhills and river farms.",
    "pressure": "Floodplain raccoons and opossums press the towns, armadillos and moles are constant in the sand, and river-bottom snakes appear after high water."
  },
  "South Carolina|Charleston County": {
    "terrain": "Charleston Harbor, the Ashley and Cooper rivers, and sea-island marsh frame a tidal metro of peninsula streets, island communities, and marsh suburbs.",
    "housing": "The peninsula holds colonial and antebellum raised homes, Mount Pleasant and West Ashley are canopy suburbs, and the islands mix beach houses with rural Gullah farmsteads.",
    "pressure": "Peninsula rats run year-round, raccoons commute the marsh edge nightly, bats colonize older rooflines, and king tides and hurricanes push snakes, raccoons, and alligators out of the marsh into streets."
  },
  "South Carolina|Cherokee County": {
    "terrain": "Broad River bottoms and foothill hardwood ridges surround mill towns and farmland along the North Carolina line.",
    "housing": "Gaffney holds mill-era and early-1900s homes around its peach-country center, Blacksburg keeps railroad-town stock, and farmhouses fill the valleys.",
    "pressure": "Groundhogs burrow pasture banks and under outbuildings, raccoons work the river bottoms, and bats recur in older Gaffney and Blacksburg homes."
  },
  "South Carolina|Chester County": {
    "terrain": "Catawba and Broad river bottoms cut Piedmont farmland and mill towns midway between Charlotte and Columbia.",
    "housing": "Chester and Great Falls hold mill and canal-era housing, Richburg and Fort Lawn add I-77 corridor homes, and farmhouses scatter between the rivers.",
    "pressure": "Groundhogs and raccoons are the steady pair, squirrels work the in-town canopy, and armadillos are the growing southern call."
  },
  "South Carolina|Chesterfield County": {
    "terrain": "Longleaf Sandhills and the Carolina Sandhills refuge spread between the Great Pee Dee and Lynches river swamps on the North Carolina line.",
    "housing": "Cheraw holds antebellum and mill-era homes, Pageland and Chesterfield keep farm-town stock, and rural homes sit on deep sand across the refuge edge.",
    "pressure": "Fox squirrels, armadillos, and moles define the sandhill calls, raccoons press from the river swamps, and refuge-edge homes take steady bat and opossum work."
  },
  "South Carolina|Clarendon County": {
    "terrain": "Lake Marion's swampy north shore and the Pocotaligo swamp wrap flat farm and timber land in the central Lowcountry.",
    "housing": "Manning and Summerton hold older lake-region town homes, Turbeville adds farm-town stock, and lake houses line parts of the shore.",
    "pressure": "Shoreline raccoons and opossums are constant, armadillos work the sand, bats recur in town, and high lake water pushes cottonmouths toward yards."
  },
  "South Carolina|Colleton County": {
    "terrain": "The ACE Basin's three blackwater rivers spread marsh and swamp through pine flatwoods and farm towns in the western Lowcountry.",
    "housing": "Walterboro holds historic and railroad-era homes, Edisto Beach is beach cottages, and farmhouses scatter along the river roads.",
    "pressure": "Basin raccoons, opossums, and hogs press the towns, armadillos work the clearings, and storms and high water push snakes and raccoons to high ground."
  },
  "South Carolina|Darlington County": {
    "terrain": "Black Creek and farm fields thread mill towns and small cities, with Great Pee Dee swamp along the eastern edge.",
    "housing": "Darlington and Hartsville hold mill-era and early-1900s homes, Lamar keeps farm-town stock, and subdivisions grow around Hartsville's college and plants.",
    "pressure": "Creek-corridor raccoons and opossums are steady, armadillos work the sand, and bats recur in the older town housing each summer."
  },
  "South Carolina|Dillon County": {
    "terrain": "Little Pee Dee and Lumber river swamps cut flat farm and timber land on the North Carolina line.",
    "housing": "Dillon and Latta hold railroad and farm-town homes, Lake View keeps small border-town stock, and farmhouses fill the countryside.",
    "pressure": "River-swamp raccoons press the towns, armadillos and moles work the sand, and high water pushes snakes toward homes."
  },
  "South Carolina|Dorchester County": {
    "terrain": "Edisto River and Four Holes Swamp blackwater country borders Summerville's fast canopy suburbs and pine flatwoods towns.",
    "housing": "Summerville mixes historic Flowertown homes with vast new subdivisions, while St. George and the upper county keep older small-town and rural housing.",
    "pressure": "Swamp-edge raccoons and squirrels press Summerville attics, armadillos work new lawns, and bats roost in Flowertown's older homes."
  },
  "South Carolina|Edgefield County": {
    "terrain": "Savannah River and Stevens Creek bottoms cut Piedmont ridges, national forest, and farm valleys below Augusta.",
    "housing": "Edgefield and Johnston hold antebellum and peach-era town homes, Trenton adds rail-town stock, and farmhouses scatter through the ridges.",
    "pressure": "Groundhogs, raccoons, and skunks are the steady calls, with bats in the older town homes and armadillos arriving from the south."
  },
  "South Carolina|Fairfield County": {
    "terrain": "Broad and Catawba river corridors and Lake Wateree frame rocky, granite-ridge Piedmont forest and farmland north of Columbia.",
    "housing": "Winnsboro holds stone, antebellum, and mill-era homes, Ridgeway keeps a small historic main street, and lake houses line Wateree's shore.",
    "pressure": "Groundhogs dig the rocky banks, raccoons commute both rivers, and bats use the older stone and brick buildings in town."
  },
  "South Carolina|Florence County": {
    "terrain": "Great Pee Dee and Lynches river swamps and Jeffries Creek frame a rail city surrounded by Pee Dee farm and timber land.",
    "housing": "Florence mixes older in-town homes with large suburbs, Lake City and Timmonsville keep farm and tobacco-town stock, and rural homes fill the county.",
    "pressure": "Creek-corridor raccoons, city rats, and suburban armadillos drive calls, with bats in the older in-town rooflines."
  },
  "South Carolina|Georgetown County": {
    "terrain": "Four rivers meet at Winyah Bay behind barrier beaches, cypress swamps, and marsh creeks from Georgetown to Pawleys Island.",
    "housing": "Georgetown holds a historic raised-home district, Pawleys and Litchfield mix beach cottages with creek houses, and Andrews keeps inland farm-town housing.",
    "pressure": "Marsh and swamp raccoons are nightly, armadillos burrow the sand, bats use older raised homes, and storms push snakes and raccoons out of the swamp."
  },
  "South Carolina|Greenville County": {
    "terrain": "The Reedy River, Paris Mountain, and Blue Ridge foothill ridges shape the state's largest metro, from downtown to mountain-side suburbs.",
    "housing": "Greenville mixes mill villages, early-1900s in-town homes, and vast suburbs in Mauldin, Simpsonville, and Greer, with mountain cabins toward Travelers Rest.",
    "pressure": "Canopy squirrels and raccoons lead, groundhogs burrow the foothill lots, skunks work the suburbs, and bats recur in mill-era housing."
  },
  "South Carolina|Greenwood County": {
    "terrain": "Lake Greenwood and the Saluda River frame Piedmont ridges, mill towns, and farmland in the west-central part of the state.",
    "housing": "Greenwood holds mill-era and college-area homes, Ninety Six keeps historic small-town stock, and lake houses line Greenwood's coves.",
    "pressure": "Groundhogs, raccoons, and skunks are steady, squirrels work the town canopy, and lake homes take raccoon and bat calls."
  },
  "South Carolina|Hampton County": {
    "terrain": "Salkehatchie and Coosawhatchie blackwater swamps thread flat farm and timber land between the Savannah River and the coast.",
    "housing": "Hampton, Estill, and Varnville hold older rail and farm-town homes, with farmhouses across the swamp-dotted countryside.",
    "pressure": "Swamp raccoons and hogs press the towns, armadillos work the sand, and high water pushes snakes and opossums to high ground."
  },
  "South Carolina|Horry County": {
    "terrain": "The Waccamaw River's cypress swamps and Carolina bays sit directly behind the Grand Strand's beaches, golf courses, and subdivisions.",
    "housing": "Conway holds a historic river-town core, the Strand mixes beach houses and resort condos, and inland subdivisions spread through cleared pine land.",
    "pressure": "Swamp-edge raccoons are constant, armadillos work the sand, rats follow the resort corridors, and storms and king tides push snakes and raccoons into neighborhoods."
  },
  "South Carolina|Jasper County": {
    "terrain": "Savannah River swamp and salt-marsh creeks border pine flatwoods and some of the fastest subdivision growth in the Lowcountry.",
    "housing": "Ridgeland and Hardeeville hold older small-town homes beside very new master-planned communities, with rural homes along the river roads.",
    "pressure": "River-swamp wildlife presses both old towns and new subdivisions, armadillos work the sand, and storms push snakes and raccoons inland from the marsh."
  },
  "South Carolina|Kershaw County": {
    "terrain": "Wateree River swamp borders Sandhills pine and horse country, with Lake Wateree at the northeast and Columbia suburbs at the southwest.",
    "housing": "Camden holds antebellum and horse-country homes, Lugoff and Elgin are growing suburbs, and farmhouses fill the pine country.",
    "pressure": "River raccoons, fox squirrels, and armadillos lead, skunks den under porches, and bats use Camden's older homes."
  },
  "South Carolina|Lancaster County": {
    "terrain": "Catawba River bottoms, granite outcrops at Forty Acre Rock, and Piedmont farmland run from rural south county to Indian Land's suburbs.",
    "housing": "Lancaster and Kershaw hold mill-era town homes, Indian Land is dense new subdivisions, and farmhouses fill the middle of the county.",
    "pressure": "Groundhogs and raccoons lead in the farm country, while the new northern suburbs generate constant squirrel and skunk work."
  },
  "South Carolina|Laurens County": {
    "terrain": "Enoree River national forest and Saluda River bottoms frame Piedmont mill towns, farmland, and Lake Greenwood's northern coves.",
    "housing": "Laurens and Clinton hold mill-era and college-area homes, Gray Court and Cross Hill keep small-town stock, and farmhouses fill the county.",
    "pressure": "Groundhogs, raccoons, and skunks are the steady calls, with forest-edge bats and squirrels and growing armadillo work."
  },
  "South Carolina|Lee County": {
    "terrain": "Lynches River swamp cuts flat farm and sandhills land around Lee State Park in the Pee Dee's western fringe.",
    "housing": "Bishopville holds farm-town and early-1900s homes, Lynchburg adds small rail-town stock, and farmhouses scatter across the fields.",
    "pressure": "River raccoons, armadillos, and moles drive calls, with skunks under porches and bats in the older town homes."
  },
  "South Carolina|Lexington County": {
    "terrain": "Lake Murray's coves, the Saluda River, and Twelve Mile Creek thread Columbia's western suburbs, lake communities, and southern farmland.",
    "housing": "Lexington, West Columbia, and Cayce mix older river-town homes with large suburbs, Irmo and Chapin are lake-side subdivisions, and the south stays rural.",
    "pressure": "Lake-canopy raccoons and squirrels lead, armadillos work the south, bats use the older river-town stock, and skunks den under suburban decks."
  },
  "South Carolina|McCormick County": {
    "terrain": "Lake Thurmond's shore and Sumter National Forest cover most of this small Savannah River county of farm valleys and lake communities.",
    "housing": "McCormick holds older gold-era and rail-town homes, and lake and forest cabins and farmhouses make up most of the rest.",
    "pressure": "Shoreline raccoons, groundhogs, and bats lead, with skunks under rural porches and squirrels in the forest-edge homes."
  },
  "South Carolina|Marion County": {
    "terrain": "Little Pee Dee cypress swamp threads flat farm and timber land between Florence and the coast.",
    "housing": "Marion and Mullins hold historic and tobacco-era town homes, Nichols adds small farm-town stock, and farmhouses fill the countryside.",
    "pressure": "Swamp raccoons and opossums are constant, armadillos work the sand, and high river water pushes snakes toward homes."
  },
  "South Carolina|Marlboro County": {
    "terrain": "Great Pee Dee swamp and Lake Wallace frame farm and timber land on the North Carolina line in the upper Pee Dee.",
    "housing": "Bennettsville holds antebellum and mill-era homes around its lake, McColl and Clio keep small farm-town stock, and farmhouses fill the county.",
    "pressure": "River raccoons, armadillos, and town bats lead, with skunks under porches and opossums at the swamp edge."
  },
  "South Carolina|Newberry County": {
    "terrain": "The Saluda River, Lake Murray's north shore, and Sumter National Forest frame a Piedmont college town and mill villages amid farmland.",
    "housing": "Newberry holds antebellum, college-area, and mill-era homes, Prosperity and Whitmire keep small-town stock, and lake houses line Murray's coves.",
    "pressure": "Groundhogs, raccoons, and town bats lead, squirrels work the college canopy, and lake homes take raccoon calls each season."
  },
  "South Carolina|Oconee County": {
    "terrain": "Chattooga River gorges, Blue Ridge ridges, and Lakes Jocassee, Keowee, and Hartwell fill the state's mountain corner.",
    "housing": "Seneca mixes older town homes with lake subdivisions, Walhalla keeps German-settlement main-street stock, and mountain cabins and lake houses fill the north.",
    "pressure": "Groundhogs, raccoons, and bats lead, lake homes take steady raccoon work, and mountain properties see skunks and squirrels year-round."
  },
  "South Carolina|Orangeburg County": {
    "terrain": "The Edisto River's two forks and Lake Marion's south shore cross the largest farm county in this region, all blackwater swamp and pine woods between towns.",
    "housing": "Orangeburg holds university-area and older in-town homes, Santee is lake cottages and I-95 services, and farm towns and farmhouses fill the rest.",
    "pressure": "Swamp raccoons, armadillos, and moles are constant, town bats recur, and I-95 corridor rats appear around Santee's services."
  },
  "South Carolina|Pickens County": {
    "terrain": "Table Rock and the Blue Ridge escarpment rise over foothill suburbs, mill towns, and the Clemson lakeshore on Lakes Keowee and Hartwell.",
    "housing": "Easley and Pickens hold mill-era and foothill homes, Clemson mixes university rentals with lake houses, and mountain homes climb the northern ridges.",
    "pressure": "Groundhogs, canopy squirrels, and raccoons lead, with bats in older housing and skunks under foothill decks."
  },
  "South Carolina|Richland County": {
    "terrain": "The Broad, Saluda, and Congaree rivers meet at the fall line under a capital city of canopy neighborhoods and Sandhills suburbs.",
    "housing": "Columbia mixes antebellum, streetcar-suburb, and university housing with vast northeast suburbs, while the south county stays rural along the Congaree.",
    "pressure": "Canopy raccoons and squirrels, downtown rats, and attic bats drive city calls, and white-nose syndrome reached this county's bats in the Midlands."
  },
  "South Carolina|Saluda County": {
    "terrain": "Saluda River bottoms and Lake Murray's west shore frame Piedmont ridge farms and small towns west of Columbia.",
    "housing": "Saluda and Ridge Spring hold farm-town and peach-era homes, and farmhouses and lake houses make up the rest.",
    "pressure": "Groundhogs, raccoons, and skunks lead, with town bats and lake-home raccoon work each season."
  },
  "South Carolina|Spartanburg County": {
    "terrain": "Pacolet and Tyger river mill valleys cut a metro of suburbs and mill towns rising to foothill farmland at the North Carolina line.",
    "housing": "Spartanburg mixes mill-era, university-area, and early-1900s homes with large suburbs, and the mill towns keep dense older stock.",
    "pressure": "Groundhogs, canopy squirrels, and raccoons lead, bats use the older stock, and skunks are a constant suburban call."
  },
  "South Carolina|Sumter County": {
    "terrain": "Wateree and Pocotaligo river swamps and Carolina bays surround an air-base city and farm country in the east-central Midlands.",
    "housing": "Sumter holds historic, mill-era, and base-area housing with large suburbs, while Pinewood and Mayesville keep small farm-town stock.",
    "pressure": "Swamp-edge raccoons, suburban armadillos, and town bats lead, with skunks under porches across the city."
  },
  "South Carolina|Union County": {
    "terrain": "Tyger and Enoree river corridors and Sumter National Forest wrap a Piedmont mill town and farmland south of Spartanburg.",
    "housing": "Union holds mill-era and early-1900s homes, Jonesville and Lockhart keep small mill and river-town stock, and farmhouses fill the forest edge.",
    "pressure": "Groundhogs, forest-edge raccoons, and mill-town bats lead, with skunks under rural porches."
  },
  "South Carolina|Williamsburg County": {
    "terrain": "Black River cypress swamp threads flat timber and farm land in the central Lowcountry.",
    "housing": "Kingstree holds historic and rail-era homes, Hemingway and Greeleyville keep farm-town stock, and farmhouses scatter along the river roads.",
    "pressure": "River-swamp raccoons and hogs press the towns, armadillos work the clearings, and high water pushes snakes to high ground."
  },
  "South Carolina|York County": {
    "terrain": "Lake Wylie and the Catawba River border booming Charlotte suburbs, a mill city, and western farm country at Kings Mountain's fringe.",
    "housing": "Rock Hill mixes mill-era and university-area homes, Fort Mill and Tega Cay are dense new lake suburbs, and York and Clover keep historic small-town stock.",
    "pressure": "Suburban squirrels, raccoons, and skunks lead in the north, groundhogs lead in the farm west, and lake homes take raccoon and bat calls."
  },
  "Florida|Miami-Dade County": {
    "terrain": "Biscayne Bay and Everglades National Park edge shape this county in southeast Florida on Biscayne Bay, bordering the Everglades to the west, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Miami and Hialeah hold the densest housing — dense coastal urban core giving way to western suburbs against Everglades wetlands — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Broward County": {
    "terrain": "New River and Intracoastal Waterway shape this county in southeast Florida Atlantic coast between Miami-Dade and Palm Beach, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Fort Lauderdale and Hollywood hold the densest housing — dense coastal suburbs and canal cities backed by Everglades conservation land — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Palm Beach County": {
    "terrain": "Lake Okeechobee eastern shore and Loxahatchee National Wildlife Refuge shape this county in southeast Florida Atlantic coast, the largest county in Florida by land area in the east, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "West Palm Beach and Boca Raton hold the densest housing — coastal cities and western equestrian and agricultural suburbs backed by Everglades refuge land — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Monroe County": {
    "terrain": "Florida Keys National Marine Sanctuary and Everglades National Park shape this county in the Florida Keys island chain and Everglades mainland tip, between the Atlantic and the Gulf, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Key West and Marathon hold the densest housing — island communities linked by the Overseas Highway, plus remote mainland Everglades — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Martin County": {
    "terrain": "St. Lucie River and Jonathan Dickinson State Park shape this county in Treasure Coast of southeast Florida, between St. Lucie and Palm Beach counties, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Stuart and Jensen Beach hold the densest housing — small coastal cities, riverfront suburbs, and inland rural and equestrian land — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|St. Lucie County": {
    "terrain": "Indian River Lagoon and Savannas Preserve State Park shape this county in Treasure Coast of southeast Florida on the Indian River Lagoon, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Fort Pierce and Fort Pierce hold the densest housing — fast-growing master-planned suburbs, older lagoon cities, and barrier-island communities — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Indian River County": {
    "terrain": "Indian River Lagoon and Sebastian Inlet State Park shape this county in Treasure Coast of southeast Florida, the northern Treasure Coast county, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Vero Beach and Sebastian hold the densest housing — barrier-island beach towns, citrus country inland, and lagoon-front suburbs — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Hillsborough County": {
    "terrain": "Tampa Bay and Hillsborough River shape this county in west-central Florida on Tampa Bay, anchored by Tampa, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Tampa and Brandon hold the densest housing — large urban core, dense suburbs, port and industrial land, and rural east county — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Pinellas County": {
    "terrain": "Tampa Bay shoreline and Boca Ciega Bay shape this county in west-central Florida peninsula between Tampa Bay and the Gulf of Mexico, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Clearwater and Clearwater hold the densest housing — Florida's most densely populated county — continuous coastal suburbs and barrier-island beaches — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Pasco County": {
    "terrain": "Withlacoochee River and Green Swamp shape this county in west-central Florida north of Tampa, from the Gulf coast to inland lakes, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Dade City and New Port Richey hold the densest housing — southern Tampa suburbs, coastal communities, and rural lake and ranch country in the east — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Hernando County": {
    "terrain": "Weeki Wachee Springs and Withlacoochee State Forest shape this county in west-central Florida Nature Coast north of Tampa, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Brooksville and Spring Hill hold the densest housing — spring and river communities, Spring Hill suburbs, and forest and ranch land inland — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Citrus County": {
    "terrain": "Crystal River and King's Bay shape this county in west-central Florida Nature Coast on the Gulf, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Inverness and Crystal River hold the densest housing — spring-fed river towns, Gulf marsh coast, and low-density inland suburbs — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Sarasota County": {
    "terrain": "Myakka River State Park and Sarasota Bay shape this county in southwest Florida Gulf coast south of Tampa Bay, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Sarasota and North Port hold the densest housing — coastal cities, barrier-island beaches, and fast-growing inland suburbs around North Port — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Manatee County": {
    "terrain": "Manatee River and Palma Sola Bay shape this county in southwest Florida at the mouth of Tampa Bay on the Gulf, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Bradenton and Palmetto hold the densest housing — river and bay suburbs, barrier-island beach towns, and agricultural east county — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Charlotte County": {
    "terrain": "Charlotte Harbor and Peace River shape this county in southwest Florida around Charlotte Harbor, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Punta Gorda and Port Charlotte hold the densest housing — canal-front suburbs around Charlotte Harbor, older coastal towns, and inland scrub — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Lee County": {
    "terrain": "Caloosahatchee River and Sanibel Island shape this county in southwest Florida Gulf coast around the Caloosahatchee River, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Fort Myers and Cape Coral hold the densest housing — canal city of Cape Coral, coastal suburbs, barrier islands, and inland Lehigh Acres — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Collier County": {
    "terrain": "Big Cypress National Preserve and Everglades National Park western edge shape this county in southwest Florida Gulf coast at the edge of the Everglades and Big Cypress, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Naples and Marco Island hold the densest housing — affluent coastal Naples, inland Immokalee farm country, and vast Everglades preserve land — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Orange County": {
    "terrain": "Lake Apopka and Wekiwa Springs State Park shape this county in central Florida anchored by Orlando, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Orlando and Winter Park hold the densest housing — dense urban and suburban Orlando, lake chains everywhere, and tourism corridors — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Seminole County": {
    "terrain": "St. Johns River and Lake Monroe shape this county in central Florida north of Orlando along the St. Johns River, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Sanford and Altamonte Springs hold the densest housing — dense Orlando suburbs, lakefront towns, and river and spring corridors — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Osceola County": {
    "terrain": "Lake Tohopekaliga and Shingle Creek shape this county in central Florida south of Orlando, headwaters of the Everglades, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Kissimmee and St. Cloud hold the densest housing — tourism and vacation-rental corridors, Kissimmee suburbs, and ranch land south — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Lake County": {
    "terrain": "Harris Chain of Lakes and Ocala National Forest southern edge shape this county in central Florida lake country northwest of Orlando, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Tavares and Clermont hold the densest housing — lake towns, Clermont hills suburbs, and forest-edge communities — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Marion County": {
    "terrain": "Ocala National Forest and Silver Springs shape this county in north-central Florida horse country around Ocala, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Ocala and Dunnellon hold the densest housing — horse farms, Ocala suburbs, forest communities, and spring and river towns — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Volusia County": {
    "terrain": "St. Johns River and Blue Spring State Park shape this county in east-central Florida Atlantic coast around Daytona Beach, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "DeLand and DeLand hold the densest housing — beach cities, inland St. Johns River towns, and the fast-growing Deltona corridor — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Brevard County": {
    "terrain": "Indian River Lagoon and Merritt Island National Wildlife Refuge shape this county in east-central Florida Space Coast on the Atlantic, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Titusville and Melbourne hold the densest housing — long coastal Space Coast suburbs, lagoon and river frontage, and refuge land — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Duval County": {
    "terrain": "St. Johns River and Timucuan Ecological and Historic Preserve shape this county in northeast Florida on the St. Johns River — consolidated city-county government, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Jacksonville and Jacksonville Beach hold the densest housing — Florida's largest city by area — urban core, sprawling suburbs, beaches, and river frontage — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|St. Johns County": {
    "terrain": "Matanzas River and Guana Tolomato Matanzas Reserve shape this county in northeast Florida Atlantic coast, home to St. Augustine, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "St. Augustine and St. Augustine Beach hold the densest housing — historic St. Augustine, beach communities, and fast-growing northern suburbs — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Clay County": {
    "terrain": "St. Johns River and Doctors Lake shape this county in northeast Florida west of the St. Johns River, Jacksonville suburbia, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Green Cove Springs and Orange Park hold the densest housing — Jacksonville suburbs, river towns, and rural south county — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Nassau County": {
    "terrain": "Amelia Island and St. Marys River shape this county in northeast Florida on the Georgia line at Amelia Island, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Fernandina Beach and Yulee hold the densest housing — Amelia Island beach town, Yulee suburbs, and rural western timber country — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Leon County": {
    "terrain": "Lake Jackson and Lake Talquin shape this county in north Florida panhandle-edge capital county in the Red Hills, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Tallahassee and Bradfordville hold the densest housing — capital city neighborhoods under heavy oak canopy, suburbs, and Red Hills plantation country — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Escambia County": {
    "terrain": "Pensacola Bay and Escambia River shape this county in western Florida panhandle on Pensacola Bay and the Gulf, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Pensacola and Pensacola Beach hold the densest housing — historic Pensacola, bay and beach communities, and rural north county — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Santa Rosa County": {
    "terrain": "Blackwater River State Forest and East Bay shape this county in western Florida panhandle between Pensacola Bay and East Bay, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Milton and Navarre hold the densest housing — river and forest towns, Navarre beach suburbs, and Pace growth corridor — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  },
  "Florida|Okaloosa County": {
    "terrain": "Choctawhatchee Bay and Eglin Air Force Base ranges shape this county in western Florida panhandle Emerald Coast on the Gulf, with retention ponds, canals, and low wet ground threaded through the developed areas.",
    "housing": "Crestview and Fort Walton Beach hold the densest housing — Emerald Coast beach cities, bay suburbs, and inland Crestview — with stucco and block homes, low rooflines, pool cages, lanais, garages, and outbuildings throughout.",
    "pressure": "Roof rats and eastern gray squirrels lead attic calls year-round, raccoons den in chimneys and soffits, armadillos and eastern moles work lawns in the sandy soils, and Brazilian free-tailed and evening bats roost in older rooflines — with bat exclusion lawful only from August 15 through April 15."
  }
};

function getCountyTexture(stateName, countyName) {
  if (!stateName || !countyName) return null;
  return COUNTY_TEXTURE[`${stateName}|${countyName}`] || null;
}

module.exports = { COUNTY_TEXTURE, getCountyTexture };
