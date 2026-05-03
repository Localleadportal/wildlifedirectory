const ANIMALS = [
  {
    slug: 'raccoon-removal',
    name: 'Raccoon Removal',
    plural: 'Raccoons',
    emoji: '🦝',
    shortDesc: 'Raccoons cause serious attic and crawlspace damage and carry diseases including rabies and roundworm.',
    signs: ['Noises in attic at night', 'Knocked over trash cans', 'Torn soffit or fascia boards', 'Droppings near entry points', 'Footprints in mud or soft soil'],
    services: ['Live trapping and relocation', 'Attic cleanup and decontamination', 'Entry point sealing', 'Damage repair', 'Preventative exclusion'],
    urgency: 'Raccoons breed in attics and their feces carry dangerous roundworm spores. Fast removal is essential.',
    season: 'Raccoons are active year-round but most commonly enter homes in late winter and spring when females seek nesting sites.',
    costRange: '$200–$600+', costNote: 'Trapping and relocation. Attic cleanup and exclusion additional ($800–$2,500+).'
  },
  {
    slug: 'squirrel-removal',
    name: 'Squirrel Removal',
    plural: 'Squirrels',
    emoji: '🐿️',
    shortDesc: 'Squirrels chew through wiring, insulation, and wood — creating fire hazards and structural damage inside your walls and attic.',
    signs: ['Scratching sounds in walls or attic', 'Chewed wood or wires', 'Droppings in attic', 'Entry holes near roofline', 'Nesting material in attic'],
    services: ['Live trapping', 'One-way exclusion doors', 'Entry point sealing with steel', 'Attic insulation restoration', 'Chewed wire assessment'],
    urgency: 'Squirrels chew electrical wiring which is a leading cause of house fires. Do not delay removal.',
    season: 'Squirrels are most active in fall when stocking up for winter, and in early spring. They can enter homes any time of year.',
    costRange: '$200–$500+', costNote: 'Trapping. Full exclusion and entry point sealing adds $300–$900+.'
  },
  {
    slug: 'rat-removal',
    name: 'Rat Removal',
    plural: 'Rats',
    emoji: '🐀',
    shortDesc: 'Rats nest in walls, attics, and crawlspaces — gnawing wiring, contaminating insulation and food, and spreading disease.',
    signs: ['Droppings along baseboards or in attic insulation', 'Gnaw marks on wood, plastic, or wiring', 'Scratching or scurrying noises in walls at night', 'Greasy rub marks along travel routes', 'Nests of shredded material in walls or attic'],
    services: ['Inspection and entry-point identification', 'Snap and bait trap deployment', 'Permanent exclusion services', 'Sanitation and decontamination', 'Insulation replacement when contaminated'],
    urgency: 'Rats reproduce rapidly and chew electrical wiring — a real fire risk in older homes. Populations double in months without intervention.',
    season: 'Rats are active year-round but populations spike in fall as outdoor food becomes scarce and they move indoors for warmth.',
    costRange: '$300–$900+', costNote: 'Inspection and trap deployment. Major exclusions, decontamination, and insulation replacement adds $800–$2,500+.'
  },
  {
    slug: 'bat-removal',
    name: 'Bat Removal',
    plural: 'Bats',
    emoji: '🦇',
    shortDesc: 'Bat colonies in attics leave dangerous guano that carries histoplasmosis and attracts parasites. Removal requires licensed specialists.',
    signs: ['Bats flying near roofline at dusk', 'Squeaking sounds in walls', 'Guano piles near entry points', 'Dark staining around gaps', 'Strong ammonia smell in attic'],
    services: ['Colony exclusion (bat-safe methods)', 'Guano removal and decontamination', 'Attic restoration', 'Entry point sealing after exclusion', 'Rabies exposure assessment'],
    urgency: 'Bat guano grows a dangerous fungus (Histoplasma). State laws protect bats so exclusion must follow legal guidelines.',
    season: 'Bat exclusion has seasonal restrictions — typically not permitted May through August when pups cannot fly. Contact us immediately to schedule.',
    costRange: '$400–$1,500+', costNote: 'Exclusion work. Guano cleanup and attic decontamination adds $1,500–$8,000+ depending on colony size.'
  },
  {
    slug: 'snake-removal',
    name: 'Snake Removal',
    plural: 'Snakes',
    emoji: '🐍',
    shortDesc: 'Venomous and non-venomous snakes enter homes through foundation gaps. Professional identification and removal keeps your family safe.',
    signs: ['Snake sighting inside or outside home', 'Shed snake skin', 'Disappearing rodents (snakes follow prey)', 'Gaps in foundation or walls', 'Eggs found in basement or crawlspace'],
    services: ['Safe snake capture and relocation', 'Species identification', 'Foundation and entry point sealing', 'Rodent control (eliminates food source)', 'Property inspection'],
    urgency: 'Never attempt to handle a snake — even non-venomous species can bite. Call a professional for safe identification and removal.',
    season: 'Snakes are most active spring through fall. They often enter homes seeking warmth as temperatures drop in autumn.',
    costRange: '$100–$300+', costNote: 'Per snake removal visit. Property inspection and exclusion adds $300–$900+.'
  },
  {
    slug: 'groundhog-removal',
    name: 'Groundhog Removal',
    plural: 'Groundhogs',
    emoji: '🦫',
    shortDesc: 'Groundhogs dig deep burrows under foundations, decks, and sheds — causing structural damage and landscape destruction.',
    signs: ['Large burrow entrances near foundation', 'Undermined deck or shed', 'Eaten garden plants', 'Soil mounds in yard', 'Visible groundhog activity during the day'],
    services: ['Live trapping and relocation', 'Burrow exclusion and filling', 'Deck and foundation protection', 'Garden fencing consultation', 'Ongoing monitoring'],
    urgency: 'Groundhog burrows can undermine foundations, creating thousands in structural damage. Early removal prevents serious problems.',
    season: 'Groundhogs are active March through October. They hibernate in winter but begin burrowing aggressively in spring.',
    costRange: '$150–$400+', costNote: 'Trapping. Burrow exclusion and foundation protection adds $200–$600+.'
  },
  {
    slug: 'bird-removal',
    name: 'Bird Removal',
    plural: 'Birds',
    emoji: '🐦',
    shortDesc: 'Pigeons, starlings, and woodpeckers cause property damage and create health risks through droppings and nesting debris.',
    signs: ['Bird droppings on surfaces', 'Nesting in vents or eaves', 'Pecking sounds on siding or wood', 'Blocked dryer or bathroom vents', 'Bird activity around roofline'],
    services: ['Bird nest removal', 'Vent and eave exclusion', 'Deterrent installation (spikes, netting)', 'Woodpecker damage repair', 'Droppings cleanup and decontamination'],
    urgency: 'Bird droppings are corrosive and carry over 60 diseases. Nests in vents create fire hazards and block airflow.',
    season: 'Birds nest primarily in spring and early summer. Woodpecker activity peaks in fall and winter.',
    costRange: '$200–$600+', costNote: 'Nest removal and basic exclusion. Large roost dispersal or chimney swift management costs more.'
  },
  {
    slug: 'skunk-removal',
    name: 'Skunk Removal',
    plural: 'Skunks',
    emoji: '🦨',
    shortDesc: 'Skunks den under porches and foundations and spray pets and people. They also carry rabies and dig up lawns for grubs.',
    signs: ['Strong skunk odor near home', 'Burrowing under porch or deck', 'Lawn damage from grub digging', 'Pet has been sprayed', 'Sightings near home at night'],
    services: ['Humane live trapping', 'Odor neutralization', 'Den exclusion', 'Entry sealing under structures', 'Rabies exposure evaluation'],
    urgency: 'Skunks are a leading rabies carrier. If your pet has been in contact with a skunk, contact your vet and a removal specialist immediately.',
    season: 'Skunks are active year-round in warmer climates. They den under structures in winter and are most active spring through fall.',
    costRange: '$200–$500+', costNote: 'Trapping. Deodorization and den exclusion are additional services.'
  },
  {
    slug: 'opossum-removal',
    name: 'Opossum Removal',
    plural: 'Opossums',
    emoji: '🐾',
    shortDesc: 'Opossums nest in attics, crawlspaces, and under decks — causing odor problems, droppings contamination, and potential disease exposure.',
    signs: ['Hissing sounds in attic or crawlspace', 'Strong musky odor', 'Droppings in attic or garage', 'Tipped garbage cans', 'Opossum sightings around home'],
    services: ['Live trapping and relocation', 'Attic and crawlspace cleanup', 'Entry point sealing', 'Odor treatment', 'Deck and foundation exclusion'],
    urgency: 'Opossums carry leptospirosis and other diseases. Their droppings contaminate insulation and require professional cleanup.',
    season: 'Opossums are active year-round. They breed twice per year (January-February and June-August) and mothers with young need careful handling.',
    costRange: '$150–$400+', costNote: 'Trapping and relocation. Cleanup and entry point sealing are additional services.'
  },
  {
    slug: 'mole-removal',
    name: 'Mole Removal',
    plural: 'Moles',
    emoji: '🐭',
    shortDesc: 'Moles tunnel through lawns and gardens destroying root systems, creating hazardous surface tunnels, and making yards unusable.',
    signs: ['Raised surface tunnels in lawn', 'Molehills (mounds of dirt)', 'Dead or dying grass in trails', 'Soft spots when walking on lawn', 'Uprooted plants'],
    services: ['Professional mole trapping', 'Tunnel treatment', 'Grub control (eliminates food source)', 'Lawn repair consultation', 'Preventative barrier installation'],
    urgency: 'A single mole can dig 100 feet of tunnels per day. Fast treatment prevents a small problem from destroying your entire yard.',
    season: 'Moles are active year-round underground. Surface tunnel activity is highest in spring and fall when soil is moist.',
    costRange: '$200–$600+', costNote: 'Initial trapping treatment. Ongoing seasonal programs run $100–$300+/month.'
  },
  {
    slug: 'dead-animal-removal',
    name: 'Dead Animal Removal',
    plural: 'Dead Animals',
    emoji: '⚠️',
    shortDesc: 'Dead animals in walls, attics, or crawlspaces create dangerous biohazards, unbearable odors, and attract secondary pests.',
    signs: ['Strong, unexplained odor in home', 'Increased fly activity inside', 'Staining on walls or ceilings', 'Odor concentrated in one area', 'Maggots or insects near a wall'],
    services: ['Dead animal location and removal', 'Full decontamination and sanitization', 'Odor elimination treatment', 'Maggot and insect treatment', 'Entry point sealing to prevent recurrence'],
    urgency: 'Decomposing animals release dangerous bacteria and attract blowflies. The odor and health risk intensify every day — immediate removal is critical.',
    season: 'Dead animal calls peak in summer when decomposition is rapid, and in winter when animals die in walls seeking warmth.',
    costRange: '$150–$500+', costNote: 'Depends on species, location, and accessibility. Animals inside walls or attics are at the higher end.'
  }
];

const ANIMAL_SLUGS = new Set(ANIMALS.map(a => a.slug));

function getAnimalBySlug(slug) {
  return ANIMALS.find(a => a.slug === slug) || null;
}

module.exports = { ANIMALS, ANIMAL_SLUGS, getAnimalBySlug };
