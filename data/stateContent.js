const stateContent = {
  'Alabama': {
    agency: 'Alabama Department of Conservation and Natural Resources',
    wildlifeNote: 'Alabama\'s warm, humid climate supports year-round wildlife activity, with raccoons, opossums, and squirrels among the most frequent home intruders. Bat colonies are especially active from spring through fall, and copperhead and rat snake encounters near homes increase sharply during summer months.',
    seasonNote: 'Wildlife intrusion peaks in early spring when animals seek attics and crawlspaces for denning.'
  },
  'Alaska': {
    agency: 'Alaska Department of Fish and Game',
    wildlifeNote: 'Alaska homeowners face unique wildlife challenges including ground squirrel infestations under structures, red fox encounters in suburban areas, and migratory bird nesting in vents and eaves. The short warm season concentrates wildlife activity, making spring and summer the most critical window for removal and exclusion work.',
    seasonNote: 'Wildlife activity concentrates in the brief warm months from May through September.'
  },
  'Arizona': {
    agency: 'Arizona Game and Fish Department',
    wildlifeNote: 'Arizona\'s desert and high-desert landscapes support pack rats (woodrats), roof rats, javelinas, and ground squirrels that regularly enter suburban structures. Western diamondback rattlesnakes and Sonoran gopher snakes are removed from residential properties throughout the warmer months.',
    seasonNote: 'Snake and rodent activity peaks from March through October as temperatures rise.'
  },
  'Arkansas': {
    agency: 'Arkansas Game and Fish Commission',
    wildlifeNote: 'Arkansas\'s dense forests and river bottomlands create high pressure from raccoons, squirrels, and opossums throughout the year. Nine-banded armadillos have become a significant nuisance species, digging up foundations, landscaping, and lawns across nearly every county.',
    seasonNote: 'Wildlife intrusion is most common in late winter and early spring when animals seek shelter for birthing.'
  },
  'California': {
    agency: 'California Department of Fish and Wildlife',
    wildlifeNote: 'California\'s diverse ecosystems produce a wide range of wildlife conflicts, from coastal gopher infestations and roof rat colonies in urban areas to raccoon and skunk problems in suburban neighborhoods. Ground squirrels are a statewide concern, and coyotes have become firmly established in most California cities.',
    seasonNote: 'Wildlife intrusion is common year-round, with denning activity peaking in February and March.'
  },
  'Colorado': {
    agency: 'Colorado Parks and Wildlife',
    wildlifeNote: 'Colorado homeowners in mountain and foothill communities frequently deal with raccoons, skunks, and porcupines entering structures, while Front Range suburbs see heavy squirrel and prairie dog pressure. Black bears occasionally enter homes and garages at higher elevations, particularly in drought years when natural food is scarce.',
    seasonNote: 'Wildlife activity peaks in spring and fall as animals prepare for or emerge from winter dormancy.'
  },
  'Connecticut': {
    agency: 'Connecticut Department of Energy and Environmental Protection',
    wildlifeNote: 'Connecticut\'s densely forested suburbs support exceptionally high raccoon, squirrel, and coyote populations. Bat maternity colonies are common in older homes throughout the state, and Connecticut law strictly prohibits bat exclusion during the summer maternity season to protect nursing pups.',
    seasonNote: 'Squirrel and raccoon intrusions spike in October and again in February when denning season begins.'
  },
  'Delaware': {
    agency: 'Delaware Division of Fish and Wildlife',
    wildlifeNote: 'Delaware\'s transitional agricultural landscape produces heavy groundhog and mole pressure in suburban yards and along home foundations. Bat colonies are frequently discovered in older homes in New Castle and Kent counties, requiring careful exclusion timed around the state maternity season guidelines.',
    seasonNote: 'Groundhog activity and structural damage peak in spring and summer when burrow expansion is most active.'
  },
  'Florida': {
    agency: 'Florida Fish and Wildlife Conservation Commission',
    wildlifeNote: 'Florida\'s subtropical climate supports year-round wildlife activity, with armadillos, opossums, raccoons, and roof rats among the most common home intruders. Florida also has unique nuisance species including iguanas, Burmese pythons in South Florida, and one of the highest bat colony densities of any state in the country.',
    seasonNote: 'There is no true off-season in Florida — wildlife intrusion is a year-round concern.'
  },
  'Georgia': {
    agency: 'Georgia Department of Natural Resources',
    wildlifeNote: 'Georgia homeowners contend with high populations of raccoons, gray squirrels, and Virginia opossums, along with an expanding armadillo range across the southern half of the state. Bat maternity colonies form in structures from March through August, during which exclusion work must be carefully timed per Georgia DNR guidelines.',
    seasonNote: 'Raccoon and squirrel denning activity peaks in February and March across most Georgia counties.'
  },
  'Hawaii': {
    agency: 'Hawaii Division of Forestry and Wildlife',
    wildlifeNote: 'Hawaii\'s island ecosystems present unique wildlife challenges, with roof rats, small Indian mongooses, and feral chickens being the primary nuisance species affecting homes and properties. Strict biosecurity regulations govern wildlife handling and relocation in Hawaii, making licensed contractors essential for any removal work.',
    seasonNote: 'Rodent and bird activity in Hawaii is highest in spring and summer, though intrusions occur year-round.'
  },
  'Idaho': {
    agency: 'Idaho Department of Fish and Game',
    wildlifeNote: 'Idaho homeowners in rural and suburban areas regularly encounter ground squirrels, marmots, and badgers that burrow under foundations and outbuildings. Skunks and raccoons are common in urban areas like Boise and Nampa, and porcupines cause significant damage to wood structures in northern and mountain counties.',
    seasonNote: 'Wildlife activity spikes in April and May as ground-dwelling species emerge from winter dormancy.'
  },
  'Illinois': {
    agency: 'Illinois Department of Natural Resources',
    wildlifeNote: 'Illinois sits along a major bat migration corridor, making bat colony infestations particularly common in both urban and rural structures statewide. Raccoons are highly urbanized throughout the Chicago metro area and smaller cities, and coyote populations have firmly established in every Illinois county.',
    seasonNote: 'Bat migration and fall raccoon denning make September and October especially active months for wildlife calls.'
  },
  'Indiana': {
    agency: 'Indiana Department of Natural Resources',
    wildlifeNote: 'Indiana has some of the highest raccoon and squirrel population densities in the Midwest, driven by the state\'s mix of suburban woodlands and agricultural edges. Bat maternity season runs from May through August, and Indiana DNR requires licensed nuisance wildlife control operators for most capture-and-removal work.',
    seasonNote: 'Spring denning season in February and March generates the highest volume of wildlife intrusion calls.'
  },
  'Iowa': {
    agency: 'Iowa Department of Natural Resources',
    wildlifeNote: 'Iowa\'s agricultural landscape creates high groundhog, mole, and skunk pressure in both rural and suburban areas. Raccoons are common in every Iowa county, frequently entering attics, chimneys, and crawlspaces, while fox squirrels and gray squirrels cause persistent problems in urban trees and structures.',
    seasonNote: 'Wildlife intrusion peaks in late winter as animals seek warm denning sites before spring birthing.'
  },
  'Kansas': {
    agency: 'Kansas Department of Wildlife and Parks',
    wildlifeNote: 'Kansas homeowners in western and central counties frequently deal with prairie dog colonies, badgers, and striped skunks near structures. Eastern Kansas suburban areas see significant raccoon, groundhog, and squirrel activity, and copperhead snakes are removed from properties along the eastern edge of the state.',
    seasonNote: 'Skunk and groundhog activity peaks in spring when breeding and denning season begins.'
  },
  'Kentucky': {
    agency: 'Kentucky Department of Fish and Wildlife Resources',
    wildlifeNote: 'Kentucky\'s Appalachian eastern counties experience heavy squirrel, raccoon, and bat pressure, with large maternity bat colonies commonly found in older homes and barns. The eastern spotted skunk, a species increasingly rare elsewhere, still appears in eastern Kentucky, and copperheads are one of the more frequent snake removal calls statewide.',
    seasonNote: 'Wildlife intrusion is highest in spring and early fall in Kentucky, with bat activity peaking June through August.'
  },
  'Louisiana': {
    agency: 'Louisiana Department of Wildlife and Fisheries',
    wildlifeNote: 'Louisiana\'s subtropical climate and unique wetland ecosystems support nuisance species not found elsewhere, including nutria, armadillos, and feral hogs that damage properties and foundations. Raccoons, opossums, and cottonmouth snakes are removed from homes year-round across all Louisiana parishes.',
    seasonNote: 'There is no significant off-season for wildlife intrusion in Louisiana due to the mild climate.'
  },
  'Maine': {
    agency: 'Maine Department of Inland Fisheries and Wildlife',
    wildlifeNote: 'Maine\'s long, cold winters drive wildlife into structures from October through April, with squirrels and raccoons being the most common attic intruders. Porcupines cause significant damage to wood structures and vehicles in northern counties, and fisher cat populations have expanded throughout the state.',
    seasonNote: 'Fall intrusion season in Maine begins early, often in September, as animals prepare for winter shelter.'
  },
  'Maryland': {
    agency: 'Maryland Department of Natural Resources',
    wildlifeNote: 'Maryland\'s dense suburban development in the Baltimore-Washington corridor creates intense raccoon, groundhog, and squirrel pressure near homes. Older Baltimore rowhouses and suburban homes throughout Montgomery and Prince George\'s counties frequently host bat maternity colonies, and Maryland DNR regulates exclusion timing to protect nursing bat pups.',
    seasonNote: 'Groundhog burrow damage and raccoon denning peak in March and April across Maryland counties.'
  },
  'Massachusetts': {
    agency: 'Massachusetts Division of Fisheries and Wildlife',
    wildlifeNote: 'Massachusetts homeowners contend with high coyote activity in suburban neighborhoods and persistent raccoon and squirrel intrusions in older New England homes. Bat maternity colonies are regulated from June 1 through August 15 in Massachusetts, requiring exclusion work to be carefully scheduled around this protected period.',
    seasonNote: 'Fall and winter are peak intrusion months in Massachusetts as animals seek warmth in attics and walls.'
  },
  'Michigan': {
    agency: 'Michigan Department of Natural Resources',
    wildlifeNote: 'Michigan\'s raccoon populations are among the most urbanized in the country, with Metro Detroit reporting some of the highest call volumes for raccoon removal in the Midwest. Woodchucks and groundhogs are the dominant lawn and foundation pest in southern Michigan\'s agricultural transitional counties.',
    seasonNote: 'Wildlife denning activity peaks in February and March before spring birthing season begins.'
  },
  'Minnesota': {
    agency: 'Minnesota Department of Natural Resources',
    wildlifeNote: 'Minnesota\'s long winters push raccoons, squirrels, and flying squirrels into structures from October through April, with flying squirrels being a particularly underdiagnosed problem in wooded suburban areas. Skunks are one of the most common nuisance species statewide, frequently denning under decks, porches, and foundations.',
    seasonNote: 'Wildlife intrusion season in Minnesota begins in September and runs through April, driven by cold temperatures.'
  },
  'Mississippi': {
    agency: 'Mississippi Department of Wildlife, Fisheries, and Parks',
    wildlifeNote: 'Mississippi\'s warm, humid climate supports year-round wildlife activity, with armadillos, opossums, and raccoons being the most frequent home intruders. Copperhead and rat snake activity peaks from May through September, and Mississippi\'s expanding coyote population has reached all 82 counties.',
    seasonNote: 'Wildlife intrusion is active year-round, with spring denning season generating the most residential calls.'
  },
  'Missouri': {
    agency: 'Missouri Department of Conservation',
    wildlifeNote: 'Missouri\'s diverse landscape — from Ozark forests to Mississippi River bottomlands — supports high densities of raccoons, squirrels, and opossums. Armadillos have expanded their range into southern Missouri counties and are now found as far north as the I-70 corridor, causing significant lawn and foundation damage.',
    seasonNote: 'Spring denning season in March and April generates the highest wildlife intrusion call volume across Missouri.'
  },
  'Montana': {
    agency: 'Montana Fish, Wildlife and Parks',
    wildlifeNote: 'Montana homeowners in plains counties frequently deal with striped skunks, ground squirrels, and badgers burrowing near structures. Mountain and foothill communities contend with porcupines, raccoons, and occasional black bear encounters, particularly in communities bordering national forest lands.',
    seasonNote: 'Wildlife activity peaks in spring and fall as animals transition between seasonal ranges and denning sites.'
  },
  'Nebraska': {
    agency: 'Nebraska Game and Parks Commission',
    wildlifeNote: 'Nebraska\'s eastern urban corridor sees high raccoon, skunk, and squirrel activity in residential neighborhoods, while western counties deal more frequently with prairie dogs, badgers, and ground squirrels near rural structures. Moles cause significant turf damage in suburban yards throughout the Platte River valley.',
    seasonNote: 'Spring is the busiest season for wildlife intrusion calls across all Nebraska counties.'
  },
  'Nevada': {
    agency: 'Nevada Department of Wildlife',
    wildlifeNote: 'Nevada\'s desert communities regularly encounter pack rats (woodrats) and ground squirrels that nest in vehicles, attics, and outbuildings. Great Basin rattlesnakes and sidewinders are removed from residential areas in southern Nevada each spring and fall, particularly along desert-suburban interfaces in Clark and Washoe counties.',
    seasonNote: 'Rodent activity peaks in fall as pack rats cache food stores, and snake activity peaks in spring and fall.'
  },
  'New Hampshire': {
    agency: 'New Hampshire Fish and Game Department',
    wildlifeNote: 'New Hampshire\'s forested landscape supports high populations of porcupines, fishers, and raccoons that frequently damage structures. Bat maternity colonies are commonly found in older homes and barns throughout the state, and New Hampshire Fish and Game strictly regulates bat exclusion between June 1 and August 15.',
    seasonNote: 'Fall intrusion begins early in New Hampshire, with September and October being peak months for squirrel and raccoon calls.'
  },
  'New Jersey': {
    agency: 'New Jersey Division of Fish and Wildlife',
    wildlifeNote: 'New Jersey\'s densely developed suburban landscape produces extremely high raccoon, groundhog, and squirrel call volumes. Bat exclusion in New Jersey is strictly regulated under NJDEP guidelines, with the maternity season running from June 1 through August 15, making advance scheduling of exclusion work essential.',
    seasonNote: 'Groundhog and raccoon denning activity peaks in March and April across New Jersey\'s suburban counties.'
  },
  'New Mexico': {
    agency: 'New Mexico Department of Game and Fish',
    wildlifeNote: 'New Mexico\'s high-desert and mountain communities contend with pack rats, ringtails, and ground squirrels entering homes and outbuildings. Rattlesnake removal — including western diamondbacks and prairie rattlesnakes — is a routine service in suburban areas of Bernalillo, Doña Ana, and Santa Fe counties from April through October.',
    seasonNote: 'Rodent nesting and snake activity peaks from April through September in most New Mexico counties.'
  },
  'New York': {
    agency: 'New York State Department of Environmental Conservation',
    wildlifeNote: 'New York City has one of the highest urban raccoon densities in North America, and raccoon conflicts are common throughout the entire state. Upstate communities in the Catskills and Adirondacks deal with bear encounters in suburban areas, and New York DEC regulates nuisance wildlife permits for most capture and relocation work.',
    seasonNote: 'Raccoon denning and squirrel nesting peak in late winter, generating the highest call volumes in February and March.'
  },
  'North Carolina': {
    agency: 'North Carolina Wildlife Resources Commission',
    wildlifeNote: 'North Carolina\'s Piedmont and coastal plain regions experience intense wildlife pressure from raccoons, squirrels, and opossums, while mountain counties deal with additional species including black bears and flying squirrels. Copperheads are one of the most frequent snake removal calls throughout the Piedmont and western counties.',
    seasonNote: 'Spring denning season in March and April, and fall when animals seek winter shelter, are the peak intrusion periods.'
  },
  'North Dakota': {
    agency: 'North Dakota Game and Fish Department',
    wildlifeNote: 'North Dakota\'s agricultural landscape creates significant striped skunk and ground squirrel pressure near rural structures and suburban edges. Raccoon populations in the eastern part of the state are among the densest in the northern plains, and mink and muskrat encounters occasionally occur near properties bordering wetlands.',
    seasonNote: 'Wildlife activity is concentrated from April through October due to North Dakota\'s cold winters.'
  },
  'Ohio': {
    agency: 'Ohio Division of Wildlife',
    wildlifeNote: 'Ohio consistently ranks among the top states for reported wildlife-human conflicts, with raccoon roundworm (Baylisascaris procyonis) a documented public health concern requiring careful attic remediation by trained professionals. Groundhog populations are especially dense in central Ohio\'s suburban and agricultural transition zones.',
    seasonNote: 'Raccoon denning peaks in February, making late winter the busiest season for Ohio wildlife removal calls.'
  },
  'Oklahoma': {
    agency: 'Oklahoma Department of Wildlife Conservation',
    wildlifeNote: 'Oklahoma has seen armadillos become one of its primary nuisance wildlife species, with nine-banded armadillos digging extensively in lawns, gardens, and along foundations throughout most of the state. Raccoons, opossums, and striped skunks are frequent home intruders, and copperheads are removed from residential properties across the eastern half of the state.',
    seasonNote: 'Armadillo and skunk denning activity peaks in spring when females are preparing to give birth.'
  },
  'Oregon': {
    agency: 'Oregon Department of Fish and Wildlife',
    wildlifeNote: 'Oregon\'s wet Pacific Northwest climate drives persistent roof rat and Norway rat pressure into structures in western Oregon\'s Willamette Valley. Nutria have established in wetland areas of western Oregon and occasionally intrude on properties near waterways, while eastern Oregon\'s drier climate produces more ground squirrel and badger activity.',
    seasonNote: 'Rodent intrusion is highest in fall and winter as wet weather drives animals to seek dry shelter.'
  },
  'Pennsylvania': {
    agency: 'Pennsylvania Game Commission',
    wildlifeNote: 'Pennsylvania consistently ranks among the top states for bat-related rabies exposure, making bat colony removal and exclusion a critical public health service throughout the state. Groundhog (woodchuck) populations are exceptionally dense in rural Pennsylvania, and groundhog burrow damage to foundations and outbuildings is among the most common wildlife calls received.',
    seasonNote: 'Bat maternity season runs from May through August, and groundhog activity peaks in spring and early summer.'
  },
  'Rhode Island': {
    agency: 'Rhode Island Division of Fish and Wildlife',
    wildlifeNote: 'Rhode Island\'s small geographic size and high suburban density produce intense raccoon, squirrel, and coyote pressure throughout all counties. Coyotes have firmly established in every Rhode Island town, and bat exclusion is regulated from June 1 through August 15 to protect maternity colonies during the nursing season.',
    seasonNote: 'Fall is peak season for Rhode Island wildlife intrusion as animals prepare for winter and seek attic shelter.'
  },
  'South Carolina': {
    agency: 'South Carolina Department of Natural Resources',
    wildlifeNote: 'South Carolina\'s warm coastal plain climate supports year-round raccoon, opossum, and armadillo activity, with armadillos causing significant foundation and lawn damage throughout the Lowcountry and Midlands. Copperheads are one of the most frequently encountered snakes near suburban homes along wooded edges throughout the state.',
    seasonNote: 'Wildlife activity is essentially year-round in South Carolina, with spring denning season generating peak call volumes.'
  },
  'South Dakota': {
    agency: 'South Dakota Game, Fish and Parks',
    wildlifeNote: 'South Dakota\'s western counties deal with prairie dog colony expansion near rural structures, while eastern agricultural counties see significant skunk and ground squirrel pressure. Badgers frequently undermine foundations and outbuildings in grassland areas, and raccoon populations in the eastern urban corridor have grown steadily over recent decades.',
    seasonNote: 'Wildlife intrusion season in South Dakota runs from April through October, with spring being the busiest period.'
  },
  'Tennessee': {
    agency: 'Tennessee Wildlife Resources Agency',
    wildlifeNote: 'Tennessee\'s Great Smoky Mountains and Ridge and Valley regions support high wildlife densities, with flying squirrels being a particularly common and underdiagnosed attic intruder in East Tennessee. Copperheads are removed from residential properties throughout middle and east Tennessee, and bat maternity colonies in older homes are common across all three grand divisions of the state.',
    seasonNote: 'Spring denning season and fall preparation for winter shelter generate the highest wildlife intrusion call volumes.'
  },
  'Texas': {
    agency: 'Texas Parks and Wildlife Department',
    wildlifeNote: 'Texas has the greatest diversity of nuisance wildlife of any state, ranging from armadillos and opossums in East Texas to javelinas, ringtails, and pack rats in West Texas, and nutria in Gulf Coast counties. Urban coyote and raccoon populations are firmly established in every major Texas metro area, and multiple species of rattlesnakes are removed from suburban properties statewide.',
    seasonNote: 'Wildlife activity is year-round in Texas, with spring denning season and fall food-seeking behavior generating the most calls.'
  },
  'Utah': {
    agency: 'Utah Division of Wildlife Resources',
    wildlifeNote: 'Utah homeowners contend with striped skunks, raccoons, and ground squirrels throughout the Wasatch Front, while southern Utah\'s desert communities deal with pack rats, ground squirrels, and Great Basin rattlesnake encounters from March through October. Moles are a persistent lawn pest in northern Utah\'s irrigated suburban areas.',
    seasonNote: 'Snake activity peaks from April through September, while rodent and skunk intrusions are most common in spring and fall.'
  },
  'Vermont': {
    agency: 'Vermont Fish and Wildlife Department',
    wildlifeNote: 'Vermont\'s heavily forested landscape supports high porcupine and fisher populations, with porcupines causing significant damage to wood structures, vehicles, and plywood in rural and mountain communities. Bat maternity colonies in older Vermont homes and barns are common and are strictly protected from June 1 through August 15 under Vermont Fish and Wildlife regulations.',
    seasonNote: 'Fall intrusion season begins in September as animals prepare for Vermont\'s long, cold winters.'
  },
  'Virginia': {
    agency: 'Virginia Department of Wildlife Resources',
    wildlifeNote: 'Virginia has one of the most active bat rabies surveillance programs in the country, reflecting the high density of bat colonies in residential structures throughout the state. Groundhog populations are exceptionally dense in the Shenandoah Valley and Northern Virginia suburbs, and copperheads are among the most frequent snake removal calls in the Piedmont and mountain regions.',
    seasonNote: 'Bat maternity season runs from May through August, and groundhog activity peaks in spring and early summer.'
  },
  'Washington': {
    agency: 'Washington Department of Fish and Wildlife',
    wildlifeNote: 'Western Washington\'s mild, wet climate drives persistent Norway rat and roof rat pressure into homes and structures year-round, making rodent exclusion one of the most common services in the Puget Sound region. Eastern Washington\'s drier climate produces more ground squirrel, badger, and skunk activity, particularly in agricultural counties east of the Cascades.',
    seasonNote: 'Rodent intrusion is highest in fall and winter in western Washington, while eastern Washington sees peak wildlife activity in spring and summer.'
  },
  'West Virginia': {
    agency: 'West Virginia Division of Natural Resources',
    wildlifeNote: 'West Virginia\'s rugged mountain terrain concentrates wildlife near homes in river valleys and hollows, with raccoons, squirrels, and skunks being the most common intruders. Black bears have become increasingly common in suburban edges of Monongalia, Kanawha, and Putnam counties as their population has grown across the state.',
    seasonNote: 'Spring denning activity and fall pre-winter food seeking generate the highest wildlife call volumes across West Virginia.'
  },
  'Wisconsin': {
    agency: 'Wisconsin Department of Natural Resources',
    wildlifeNote: 'Wisconsin has some of the highest raccoon population densities in the Great Lakes region, and the state requires specific licensing for nuisance wildlife control operators handling most species. Skunks are a persistent concern in suburban areas statewide, and Wisconsin\'s bat populations — while declining due to white-nose syndrome — still produce maternity colonies in older structures requiring licensed exclusion.',
    seasonNote: 'Raccoon denning peaks in February and March, and fall is the busiest season for skunk intrusion calls.'
  },
  'Wyoming': {
    agency: 'Wyoming Game and Fish Department',
    wildlifeNote: 'Wyoming homeowners in plains counties contend with ground squirrels and prairie dogs that undermine foundations and outbuildings, while foothill and mountain communities deal with skunks, porcupines, and occasional black bear encounters. Rattlesnakes — including prairie and midget faded rattlesnakes — are removed from residential properties in southern and eastern Wyoming from April through September.',
    seasonNote: 'Wildlife activity in Wyoming is concentrated from April through October due to the state\'s cold high-altitude winters.'
  },
  'District of Columbia': {
    agency: 'District of Columbia Department of Energy and Environment',
    wildlifeNote: 'Washington DC\'s extensive park system, Rock Creek Park, and dense urban greenspace support extremely high raccoon populations that are fully habituated to human environments. Urban wildlife in DC is jointly managed by the DC Department of Energy and Environment and, for animals on federal lands, the US Fish and Wildlife Service.',
    seasonNote: 'Raccoon denning and squirrel nesting peak in February and March, generating the highest call volumes in early spring.'
  }
};

module.exports = { stateContent };
