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
  }
};

function getCountyTexture(stateName, countyName) {
  if (!stateName || !countyName) return null;
  return COUNTY_TEXTURE[`${stateName}|${countyName}`] || null;
}

module.exports = { COUNTY_TEXTURE, getCountyTexture };
