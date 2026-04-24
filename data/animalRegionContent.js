const STATE_REGIONS = {
  'Connecticut': 'Northeast', 'Delaware': 'Northeast', 'Massachusetts': 'Northeast',
  'Maryland': 'Northeast', 'Maine': 'Northeast', 'New Hampshire': 'Northeast',
  'New Jersey': 'Northeast', 'New York': 'Northeast', 'Pennsylvania': 'Northeast',
  'Rhode Island': 'Northeast', 'Vermont': 'Northeast', 'District of Columbia': 'Northeast',

  'Alabama': 'Southeast', 'Arkansas': 'Southeast', 'Florida': 'Southeast',
  'Georgia': 'Southeast', 'Kentucky': 'Southeast', 'Louisiana': 'Southeast',
  'Mississippi': 'Southeast', 'North Carolina': 'Southeast', 'South Carolina': 'Southeast',
  'Tennessee': 'Southeast', 'Virginia': 'Southeast', 'West Virginia': 'Southeast',

  'Iowa': 'Midwest', 'Illinois': 'Midwest', 'Indiana': 'Midwest', 'Kansas': 'Midwest',
  'Michigan': 'Midwest', 'Minnesota': 'Midwest', 'Missouri': 'Midwest',
  'North Dakota': 'Midwest', 'Nebraska': 'Midwest', 'Ohio': 'Midwest',
  'South Dakota': 'Midwest', 'Wisconsin': 'Midwest',

  'Arizona': 'Southwest', 'New Mexico': 'Southwest', 'Oklahoma': 'Southwest', 'Texas': 'Southwest',

  'Alaska': 'West', 'California': 'West', 'Colorado': 'West', 'Hawaii': 'West',
  'Idaho': 'West', 'Montana': 'West', 'Nevada': 'West', 'Oregon': 'West',
  'Utah': 'West', 'Washington': 'West', 'Wyoming': 'West'
};

const animalRegionContent = {
  'raccoon-removal': {
    Northeast: 'Raccoons in the Northeast have become highly urbanized over decades, learning to exploit chimneys, open soffits, and loose roof flashing as denning sites. Attic intrusions in this region often involve nursing females in late winter, requiring exclusion to be timed after young are fully mobile — typically by mid-May.',
    Southeast: 'Southeastern raccoons are active year-round due to the mild climate, with the highest call volumes in late winter denning season and again in summer when juveniles disperse. Raccoon roundworm (Baylisascaris procyonis) is a documented public health concern in the region, making professional attic remediation after removal essential.',
    Midwest: 'Midwestern raccoons are among the most thoroughly urbanized in the country, thriving in every environment from dense city neighborhoods to rural farmsteads. Illinois, Indiana, and Ohio have some of the highest raccoon densities in the nation, and raccoon roundworm is a significant public health concern throughout the region.',
    Southwest: 'Raccoons in the Southwest are less common than in eastern states but are firmly established in river corridors, suburban greenbelts, and neighborhoods bordering waterways. In Texas, raccoon populations are substantial in urban areas and throughout the eastern part of the state, with encounters increasing sharply near retention ponds and creek drainages.',
    West: 'Western raccoons are highly adaptable and established in virtually every Pacific Coast city and suburban area. In California and the Pacific Northwest, raccoons are year-round residents that frequently access attics through roof damage and overhanging trees. Urbanized raccoon populations in the West are fully habituated to human environments and show little fear of people.'
  },

  'squirrel-removal': {
    Northeast: 'The gray squirrel is the dominant nuisance species throughout the Northeast, with extremely high populations in older wooded suburbs. Flying squirrels are a commonly overlooked intruder in New England and Mid-Atlantic homes — smaller than gray squirrels, they enter through tiny gaps and are primarily active at night, often going undetected for months.',
    Southeast: 'Both gray and fox squirrels are common attic intruders in the Southeast, with fox squirrels more prevalent in rural and lightly developed areas. The long, warm breeding season in the South — with females producing two litters per year — means squirrel intrusions can occur almost any month, unlike the more defined winter denning season in northern states.',
    Midwest: 'The fox squirrel is the dominant nuisance species in many Midwestern states, particularly in agricultural areas and smaller cities. Flying squirrels are a significant and underdiagnosed problem in Midwestern wooded suburbs — Illinois, Indiana, and Ohio homes can host colonies of 20 or more animals nesting quietly in the attic insulation.',
    Southwest: 'Tree squirrel intrusions in the Southwest are primarily driven by fox squirrels in Texas and eastern Oklahoma. Ground squirrel burrow damage to foundations, irrigation systems, and landscaping is a widespread concern throughout Arizona and New Mexico, where rock squirrels and round-tailed ground squirrels are the dominant problem species.',
    West: 'California ground squirrels and Douglas squirrels are the dominant nuisance species in much of the West. In forested areas of the Pacific Northwest and mountain West, red squirrels frequently enter structures through small roof gaps. California has strict regulations on ground squirrel control, requiring licensed professionals for effective population management.'
  },

  'bat-removal': {
    Northeast: 'The big brown bat and little brown bat are the primary species forming maternity colonies in Northeastern structures. Most Northeastern states — including Connecticut, Massachusetts, New Hampshire, Vermont, New Jersey, and New York — strictly prohibit bat exclusion between June 1 and August 15 to protect nursing pups. Exclusion work must be completed before June or after mid-August, making early scheduling critical.',
    Southeast: 'Brazilian free-tailed bats are the dominant species in structures across much of the Southeast, forming large maternity colonies in attics and under eaves. Florida has one of the highest bat colony densities in the country. In most Southeastern states, the maternity protection window runs from April 15 through August 15, during which exclusion work is prohibited under state wildlife regulations.',
    Midwest: 'Big brown bats are the primary attic intruder throughout the Midwest, with little brown bats also common in wooded areas near water. Illinois lies along a major bat migration corridor, making temporary bat presence in structures particularly common in late summer. Indiana, Ohio, and Missouri have well-established state regulations requiring licensed nuisance wildlife control operators for all bat exclusion work.',
    Southwest: 'Mexican free-tailed bats dominate the Southwest, with Texas hosting some of the world\'s largest free-tailed bat colonies. In Arizona and New Mexico, cave bats and pallid bats occasionally roost in residential structures. Texas Parks and Wildlife regulates exclusion timing, and the state\'s large bat populations mean professional exclusion is essential before a colony takes permanent hold in a structure.',
    West: 'Townsend\'s big-eared bats, big brown bats, and various myotis species are the most frequent structural roosters in the West. California, Oregon, and Washington have strict bat protection regulations, partly driven by white-nose syndrome recovery concerns. Exclusion in western states must be timed to avoid disturbing maternity colonies, typically from May through August depending on elevation and latitude.'
  },

  'snake-removal': {
    Northeast: 'The timber rattlesnake and copperhead are the venomous species most frequently encountered near homes in the Northeast, primarily in wooded areas of Pennsylvania, New York, New Jersey, and the Appalachian portions of Maryland and Virginia. Northern water snakes and eastern rat snakes are the most common non-venomous species removed from homes throughout New England and the Mid-Atlantic.',
    Southeast: 'The Southeast has the greatest diversity of venomous snakes in North America, including copperheads, cottonmouths, eastern diamondback rattlesnakes, timber rattlesnakes, and pygmy rattlesnakes. Copperhead removal is one of the most frequent wildlife calls across the region, particularly in suburban areas bordering wooded creek corridors. Black racers and rat snakes are commonly removed from attics, basements, and garages.',
    Midwest: 'Copperheads are the primary venomous species encountered near homes in the southern Midwest, while the eastern and western massasauga rattlesnake is the main venomous concern in northern Midwestern states. Eastern rat snakes, black racers, and bull snakes are frequently removed from properties throughout the region and are beneficial but unwelcome when found inside structures.',
    Southwest: 'The Southwest has the highest rattlesnake diversity of any region in the country — western diamondbacks, prairie rattlesnakes, Mojave rattlesnakes, and timber rattlesnakes are all present depending on location. Rattlesnake removal calls are extremely common from March through October, particularly in suburban areas bordering desert and grassland habitat in Texas, Arizona, Oklahoma, and New Mexico.',
    West: 'Pacific rattlesnakes are the primary venomous species removed from residential areas in California, Oregon, and Washington, while Great Basin rattlesnakes are common in Nevada and Utah. Gopher snakes, coachwhips, and kingsnakes are frequently encountered non-venomous species throughout the West. Snake encounters peak in spring when animals first emerge from winter dormancy and again in fall as they seek winter refugia.'
  },

  'groundhog-removal': {
    Northeast: 'Groundhogs — commonly called woodchucks throughout New England and the Mid-Atlantic — are one of the most frequently reported yard and foundation pests in the region. Pennsylvania, New Jersey, New York, and the New England states have among the highest groundhog densities in the country. Burrows under decks, porches, sheds, and foundations can cause significant structural undermining over time.',
    Southeast: 'Groundhog populations in the Southeast are strong in the Appalachian region and Piedmont but thinner in the Gulf Coast states and Florida. In Kentucky, Tennessee, Virginia, West Virginia, and the Carolinas, groundhog burrow damage to foundations, gardens, and fences is a frequent homeowner complaint. Groundhogs in the South typically produce one litter per year, with young dispersing in early summer.',
    Midwest: 'Groundhog populations in the Midwest are exceptionally dense, particularly in agricultural transitional zones of Ohio, Indiana, Michigan, and Illinois. Groundhogs hibernate from late fall through early spring, then emerge to establish new burrows — frequently under the same foundations and structures year after year unless exclusion is completed after removal.',
    Southwest: 'Groundhogs are uncommon in the true Southwest. In Oklahoma and eastern Texas, woodchucks exist at the western edge of their range but are far less common than in eastern states. Prairie dogs occupy a similar ecological niche in this region and are the more prevalent burrowing pest in the Southwest, causing comparable foundation and structural damage.',
    West: 'Groundhogs are not native to most of the West. Hoary marmots and yellow-bellied marmots are the ecological equivalents in western mountain communities, burrowing under structures and causing similar foundation damage in Colorado, Utah, Idaho, Montana, and Wyoming. In California and the Pacific Coast states, ground squirrels are the dominant burrowing pest species filling the groundhog niche.'
  },

  'bird-removal': {
    Northeast: 'European starlings, house sparrows, and rock pigeons are the primary nuisance bird species throughout the Northeast. Chimney swifts are a fully protected migratory species requiring special handling when present in chimneys. Woodpeckers — particularly the pileated and hairy woodpecker — cause significant structural damage to wood-sided homes throughout New England and the Mid-Atlantic.',
    Southeast: 'The Southeast\'s warm climate and abundant food sources support high bird densities year-round. Chimney swifts are a regulated species throughout the region and require careful exclusion timing around the nesting season. Vultures congregating on rooftops and barn owls nesting in structures are more common in the Southeast than in any other region, and both require specialized removal protocols.',
    Midwest: 'European starlings form enormous winter roosts in Midwestern cities, causing significant noise, waste, and structural damage. Chimney swifts nest extensively in brick chimneys throughout the Midwest and are protected under the Migratory Bird Treaty Act, requiring all chimney work to avoid active nests. Canada geese have become a persistent nuisance at retention ponds in suburban Illinois, Ohio, and Michigan.',
    Southwest: 'Cliff swallows build mud nests on structures throughout the Southwest and, like all swallows, are fully protected under the Migratory Bird Treaty Act — making exclusion before nesting begins the only legal approach. Great-horned owls and barn owls occasionally nest in attics in rural Texas and Oklahoma. Rooftop grackle and starling roosts are a major urban problem in Texas cities.',
    West: 'Cliff swallows, house sparrows, and European starlings are the primary nuisance bird species in the West. Canada geese have established year-round populations throughout the Pacific Northwest, causing damage to lawns and retention pond areas. Acorn woodpeckers cause significant structural damage to wood-sided homes in wooded areas of California, Oregon, and Washington, drilling hundreds of acorn-storage holes into siding and eaves.'
  },

  'skunk-removal': {
    Northeast: 'The striped skunk is the dominant species throughout the Northeast and is one of the primary wildlife carriers of rabies in the region. Northeastern skunks typically den under decks, porches, sheds, and foundations from November through March, with females giving birth in May and June. Skunk encounters near homes peak in late winter when males emerge to seek mates.',
    Southeast: 'Striped skunks are common throughout most of the Southeast, with the eastern spotted skunk present in Appalachian areas of Kentucky, Tennessee, Virginia, and the Carolinas. Skunks in the South are less likely to enter deep winter dormancy than northern skunks, remaining active during warm spells and producing intrusion calls year-round. Skunk rabies is a documented concern in several southeastern states.',
    Midwest: 'The Midwest has some of the highest striped skunk densities in the country, with Illinois, Indiana, Iowa, and Kansas reporting significant skunk activity in both rural and suburban environments. Skunks enter partial dormancy during cold winters but emerge during warm spells — making winter skunk intrusions more common than many homeowners expect. Skunk rabies surveillance is active throughout the Midwestern states.',
    Southwest: 'Striped skunks, spotted skunks, and hog-nosed skunks all occur in the Southwest, making this the most skunk-diverse region in the country. Texas has all three species present in overlapping ranges. Skunk denning under structures is a year-round concern in the milder climate of Texas and Oklahoma, and skunk removal calls peak sharply in late winter during the breeding season.',
    West: 'Striped skunks are common throughout the West except at the highest mountain elevations. Western spotted skunks are present in many western states and are smaller and more agile than striped skunks, capable of accessing much smaller entry points under foundations and decks. Skunk intrusions in western states peak in spring denning season and again in fall when animals seek winter shelter.'
  },

  'opossum-removal': {
    Northeast: 'The Virginia opossum has expanded its range throughout the Northeast over the past century, now established in every state. Northeastern opossums frequently enter structures through gaps in soffits, foundation vents, and crawlspace openings. Cold winters can cause frostbite on their exposed ears and tails, making opossums more aggressive in seeking warm shelter from November through March.',
    Southeast: 'Opossums are among the most common wildlife species removed from homes in the Southeast, thriving in the region\'s warm climate and abundant food supply. Year-round breeding in the South means opossum families can be encountered in structures at any time of year. Female opossums may carry a full pouch of young, requiring careful, trained handling by licensed professionals.',
    Midwest: 'Virginia opossums are well established throughout the Midwest but less abundant than in southeastern states. Midwestern opossums are susceptible to frostbite during harsh winters, driving them to seek warm shelter in attics, crawlspaces, and under structures from November through March. Opossum populations have expanded northward across the Midwest as winters have gradually moderated.',
    Southwest: 'Opossums are primarily found in the eastern portions of the Southwest — eastern Texas and Oklahoma — where they are relatively common in wooded suburban areas. They become increasingly uncommon moving west into the drier portions of Texas, New Mexico, and Arizona. Where present, they behave similarly to southeastern populations, denning in sheltered structures and foraging opportunistically.',
    West: 'Opossums were introduced to California in the early 20th century and have since spread throughout the Pacific Coast states. California, Oregon, and Washington now have well-established opossum populations that regularly enter structures through damaged vents, crawlspace gaps, and broken foundation screens. Western opossums behave similarly to eastern populations and are year-round concerns in the mild Pacific Coast climate.'
  },

  'mole-removal': {
    Northeast: 'The eastern mole is the primary species causing turf damage throughout the Northeast, with the star-nosed mole present in wet, low-lying areas of New England, New York, and Pennsylvania. Mole activity is highest in spring and fall when soil moisture draws earthworms — their primary food source — near the surface. Frozen ground in winter pauses surface tunnel damage but moles remain active at deeper soil levels.',
    Southeast: 'Eastern moles are highly active in the Southeast\'s moist soils, causing extensive surface tunnel damage in lawns, gardens, and golf courses nearly year-round. The milder climate means southeastern moles never enter dormancy, making this region one of the most consistently active areas for mole lawn damage in the country. Mole activity increases noticeably after rain when earthworms migrate to the soil surface.',
    Midwest: 'Eastern moles are a persistent turf pest throughout the Midwest\'s deep, moist agricultural soils. In areas with irrigated suburban lawns — particularly in Missouri, Illinois, Ohio, and Indiana — moles can produce extensive surface ridge networks overnight. Activity slows during dry summer months as earthworms descend deeper, then resumes strongly in fall when soil moisture returns.',
    Southwest: 'Moles are uncommon in the drier portions of the Southwest. The eastern mole reaches into eastern Texas and Oklahoma, where irrigated suburban lawns in cities like Dallas, Fort Worth, and Houston provide suitable habitat. In arid Arizona and New Mexico, pocket gophers fill a similar ecological niche and are the more common turf pest, creating surface mounds rather than the raised ridges typical of mole tunnels.',
    West: 'The Pacific coast mole (Townsend\'s mole) and the broad-footed mole are the primary mole species in California, Oregon, and Washington, with damage patterns and habits very similar to the eastern mole. Rocky Mountain states like Colorado, Utah, and Idaho have smaller mole populations but persistent pocket gopher problems that cause similar surface mounding damage and are often confused with moles by homeowners.'
  },

  'dead-animal-removal': {
    Northeast: 'Dead animal calls in the Northeast most commonly involve raccoons, squirrels, and opossums that have died in attics, walls, or crawlspaces. Older New England and Mid-Atlantic homes with complex attic structures and wall cavities can make locating a deceased animal challenging without professional equipment and experience. Prompt removal is essential to prevent odor, fly infestations, and secondary pest intrusions.',
    Southeast: 'In the Southeast, dead animals discovered in structures are most often raccoons, opossums, rats, and squirrels, with armadillos occasionally found deceased under homes and decks. The region\'s intense heat dramatically accelerates decomposition and odor, making same-day or next-day dead animal removal especially critical. Snakes that die inside walls during cooler months are a common spring discovery throughout the region.',
    Midwest: 'Dead raccoons, squirrels, and skunks are the most common deceased wildlife discoveries in Midwestern structures. Skunks that die under decks and porches can produce persistent odor for weeks, and professional deodorization is typically required after removal. Dead animals in crawlspaces frequently attract secondary scavengers like rats and blowflies, requiring full cleanup and sanitization.',
    Southwest: 'Dead animals found in structures in the Southwest frequently include roof rats, pack rats, squirrels, and opossums in the eastern portions of the region. In desert areas, deceased snakes discovered in attics and walls are more common than in other regions. The intense summer heat of Arizona, New Mexico, and Texas makes rapid removal and sanitization critical — odor and fly activity can develop within hours.',
    West: 'Dead roof rats and Norway rats are among the most common deceased wildlife removals in western urban areas, particularly in California and the Pacific Northwest. Raccoons and squirrels in attics are also frequent. In rural and mountain communities, dead skunks under structures and deceased ground squirrels in crawlspaces are common calls. Professional deodorization is standard practice after any deceased wildlife removal in western homes.'
  }
};

function getAnimalRegionContent(stateName, animalSlug) {
  const region = STATE_REGIONS[stateName];
  if (!region) return null;
  const animal = animalRegionContent[animalSlug];
  if (!animal) return null;
  return animal[region] || null;
}

module.exports = { getAnimalRegionContent };
