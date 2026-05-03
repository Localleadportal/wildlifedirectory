// Returns localized FAQs for a given animal and location context.
// Every question and answer injects county/city, state, and agency name
// so each page's FAQ is unique and matches local search intent exactly.

function getAnimalFaqs(animalSlug, { countyName, cityName, stateName, stateInfo }) {
  const location = cityName || countyName;
  const agency   = stateInfo ? stateInfo.agency : `${stateName} Department of Wildlife`;

  const map = {

    'raccoon-removal': [
      {
        q: `How much does raccoon removal cost in ${location}, ${stateName}?`,
        a: `Raccoon removal in ${stateName} typically costs $200–$600+ for trapping and relocation. If raccoons have been living in your attic, full remediation including cleanup, decontamination, and entry point sealing generally runs $800–$2,500+ depending on colony size and insulation damage. Call for a free estimate specific to your ${location} property.`
      },
      {
        q: `Does homeowners insurance cover raccoon damage in ${stateName}?`,
        a: `Some ${stateName} homeowners insurance policies cover sudden, accidental raccoon damage — such as a torn soffit or damaged roof decking. Most policies do not cover gradual damage or the cost of removal itself. Review your policy or call your agent before assuming coverage. Your ${location} contractor can provide documentation of damage for insurance claims.`
      },
      {
        q: `Are raccoons dangerous to my family in ${location}?`,
        a: `Yes. Raccoons in ${stateName} are one of the primary wildlife carriers of rabies and shed Baylisascaris roundworm in their feces — a parasite that can be fatal to humans and pets. Attic-dwelling raccoons contaminate insulation with droppings that remain infectious long after the animals are gone. Professional cleanup after removal is not optional — it is a health necessity.`
      },
      {
        q: `What time of year are raccoons worst in ${stateName}?`,
        a: `Raccoons are worst in ${stateName} from December through March, when pregnant females actively seek attic entry points to give birth. A second wave of activity occurs in late summer as juveniles disperse and establish new territories. ${location} residents should inspect rooflines and soffits in fall — before denning season — to seal entry points before a raccoon moves in.`
      },
      {
        q: `Can I remove raccoons myself in ${stateName}?`,
        a: `Raccoon removal requires a state permit in ${stateName}, which is issued through the ${agency}. Handling raccoons without proper equipment and licensing carries serious legal and health risks. Licensed contractors in ${location} hold the required permits and carry the equipment needed to remove raccoons safely, relocate them legally, and clean contaminated areas properly.`
      }
    ],

    'squirrel-removal': [
      {
        q: `How much does squirrel removal cost in ${location}, ${stateName}?`,
        a: `Squirrel removal in ${stateName} typically costs $200–$500+ for trapping. Full exclusion — sealing every entry point with chew-proof materials — adds $300–$900+ depending on your ${location} home's size and the number of access points. Attic insulation replacement due to squirrel damage can add $1,000–$3,000+.`
      },
      {
        q: `Why are squirrels in my attic dangerous in ${location}?`,
        a: `Squirrels in ${location} attics constantly chew to keep their teeth trimmed — targeting electrical wiring, wood framing, and HVAC ducting. Chewed wiring is a leading cause of house fires across ${stateName}. If you hear scratching in your walls or attic, do not wait — the damage compounds daily.`
      },
      {
        q: `How do squirrels get into homes in ${stateName}?`,
        a: `The most common entry points in ${stateName} homes are gaps at the roofline — loose soffit panels, damaged fascia boards, gaps where the roof meets a wall, and unscreened attic vents. Squirrels can chew through wood, plastic, and thin aluminum in minutes. Steel mesh and galvanized flashing are the only materials that hold long-term.`
      },
      {
        q: `Do I have gray squirrels or flying squirrels in my ${location} home?`,
        a: `Gray squirrels are active during the day — you'll hear scratching in the morning and late afternoon. Flying squirrels are nocturnal, smaller, and go undetected for months. Flying squirrel colonies in ${stateName} homes can number 20 or more animals. If the noise only happens at night, flying squirrels are the likely culprit and require a different removal approach.`
      },
      {
        q: `What time of year are squirrel intrusions worst in ${stateName}?`,
        a: `Squirrels have two peak intrusion seasons in ${stateName}. The first is fall — September through November — when squirrels aggressively seek winter shelter and cache food. The second is early spring — February through April — when females establish attic nesting sites for their first litter. ${location} residents hear the most squirrel activity at dawn and dusk during both seasons.`
      }
    ],

    'bat-removal': [
      {
        q: `How much does bat removal cost in ${location}, ${stateName}?`,
        a: `Bat exclusion in ${stateName} typically costs $400–$1,500+ for the exclusion work itself. Guano cleanup and attic decontamination — required to eliminate the health risk from Histoplasma-contaminated material — adds $1,500–$8,000+ or more depending on colony size. ${location} properties with large, long-established colonies are at the higher end of this range.`
      },
      {
        q: `Are there legal restrictions on bat removal in ${stateName}?`,
        a: `Yes. Bats in ${stateName} are protected under state law administered by the ${agency}. Bat exclusion is prohibited during the maternity season — typically May through August — when nursing pups cannot fly. Performing exclusion during this period is illegal and traps pups inside, causing a serious decomposition problem. Contact us now to get on the schedule for the legal exclusion window.`
      },
      {
        q: `Is bat guano in my ${location} home dangerous?`,
        a: `Yes. Bat guano supports the growth of Histoplasma capsulatum, a fungus that causes histoplasmosis — a serious respiratory illness documented in ${stateName}. Disturbing dry guano releases spores into your home's air. Do not sweep, vacuum, or disturb bat droppings. Professional cleanup with respiratory protection and proper disposal is required.`
      },
      {
        q: `I found one bat inside my house in ${location} — do I have a colony?`,
        a: `A single bat inside living space usually entered from an attic or wall void where a larger colony roosts. This is one of the most common bat calls across ${stateName}. A professional inspection can determine whether you have a colony above the ceiling. Any bat that may have had contact with a sleeping person should be tested for rabies — contact ${agency} for guidance.`
      },
      {
        q: `How do professionals remove bats in ${stateName}?`,
        a: `Bats are not trapped — they are excluded. One-way exclusion devices are installed over every entry point so bats can exit but not re-enter. After all bats have departed — typically 3–7 nights — the devices are removed and all gaps are permanently sealed. The ${stateName} colony is never harmed, and all work follows ${agency} guidelines.`
      }
    ],

    'snake-removal': [
      {
        q: `How much does snake removal cost in ${location}, ${stateName}?`,
        a: `A single snake removal visit in ${stateName} typically costs $100–$300+. Full property inspection and exclusion to prevent snakes from re-entering structures runs $300–$900+. Ongoing seasonal snake control programs are available for ${location} properties with persistent pressure from surrounding habitat.`
      },
      {
        q: `What venomous snakes should I watch for in ${location}, ${stateName}?`,
        a: `${stateInfo ? stateInfo.wildlifeNote.split('.')[0] + '.' : `${stateName} has several venomous snake species.`} Never attempt to identify a snake by approaching it — many non-venomous species mimic venomous ones. If you cannot confirm identification from a safe distance, treat it as venomous and call a professional in ${location}.`
      },
      {
        q: `Why are snakes coming onto my ${location} property?`,
        a: `Snakes follow their food supply. A ${location} property with a mouse or rat problem will attract snakes. Dense ground cover, wood piles, and tall grass provide shelter and hunting grounds. Eliminating rodent harborage is the most effective long-term snake deterrent alongside physical exclusion of structures.`
      },
      {
        q: `Can snakes get inside my house in ${stateName}?`,
        a: `Yes. Snakes can enter through gaps as small as a quarter inch — gaps under doors, around pipe penetrations, foundation cracks, and open vents. ${stateInfo ? stateInfo.wildlifeNote.split('.')[0] + '.' : `Several species in ${stateName} regularly enter homes.`} A professional inspection identifies all ground-level entry points and seals them permanently.`
      },
      {
        q: `When are snakes most active in ${stateName}?`,
        a: `Snakes are most active in ${stateName} from March through October. Spring emergence is the first peak — snakes come out of winter dormancy, bask in sunny areas, and begin moving onto properties as temperatures warm. Fall is the second peak as snakes actively move toward winter den sites and occasionally enter structures seeking warmth. ${location} residents should be most cautious during these two transition periods.`
      }
    ],

    'groundhog-removal': [
      {
        q: `How much does groundhog removal cost in ${location}, ${stateName}?`,
        a: `Groundhog trapping and removal in ${stateName} typically costs $150–$400+. If burrows have undermined a deck, shed, or foundation in ${location}, exclusion to prevent re-burrowing adds $200–$600+. Extensive foundation repair from burrow damage should be assessed by a contractor after removal is complete.`
      },
      {
        q: `How do I know if a groundhog is under my deck in ${location}?`,
        a: `Look for a burrow entrance 5–8 inches in diameter, usually near the edge of your structure, with a mound of excavated soil nearby. Groundhog burrows in ${stateName} can extend 25–30 feet and reach 5 feet deep — enough to undermine concrete footings and deck support posts over one or two seasons.`
      },
      {
        q: `When do groundhogs come out in ${stateName}?`,
        a: `Groundhogs in ${stateName} emerge from hibernation in late February or March and immediately begin expanding or establishing burrows. Burrowing damage peaks in spring and early summer as they establish territories and raise young. By midsummer, juvenile groundhogs disperse from their birth burrow — often moving directly under neighboring structures in ${location}. They hibernate again from November through February.`
      },
      {
        q: `Will groundhog repellents work on my ${location} property?`,
        a: `Commercial repellents and home remedies provide limited, temporary deterrence. They will not remove a groundhog that already has an active burrow on your ${location} property. Trapping followed by physical exclusion — burying hardware cloth along the foundation — is the only reliable solution across ${stateName}.`
      },
      {
        q: `Who regulates groundhog removal in ${stateName}?`,
        a: `Groundhog removal in ${stateName} is regulated by the ${agency}. Nuisance groundhogs can generally be trapped and relocated by licensed professionals. Your ${location} contractor holds all required state permits and uses trapping methods approved under ${stateName} wildlife regulations.`
      }
    ],

    'bird-removal': [
      {
        q: `How much does bird removal cost in ${location}, ${stateName}?`,
        a: `Bird removal and exclusion in ${stateName} ranges from $200–$600+ for basic nest removal and vent guarding to $1,500+ or more for chimney swift management or large rooftop flock dispersal. The cost depends on the species and the extent of the infestation at your ${location} property.`
      },
      {
        q: `Are birds nesting in my ${location} home protected by law?`,
        a: `It depends on the species. Chimney swifts and most migratory songbirds are fully protected under the federal Migratory Bird Treaty Act and cannot be disturbed while nesting. European starlings and house sparrows — both non-native species — are not protected. ${agency} can help identify regulated species. Always confirm before attempting any removal.`
      },
      {
        q: `Why do birds keep nesting in my ${location} vents?`,
        a: `Dryer vents, bathroom exhaust vents, and attic vents are warm, sheltered cavities that closely resemble natural nest sites. Birds in ${stateName} return to the same nesting location year after year. The permanent solution is installing appropriate vent guards after nesting season — not just removing the nest, which results in the same birds rebuilding within days.`
      },
      {
        q: `What damage can birds cause in my ${location} attic?`,
        a: `Birds nesting in ${location} attics leave nesting material, feathers, and droppings that harbor Histoplasma and Cryptococcus — both serious respiratory pathogens. Nesting material near exhaust vents creates fire hazards. Mites and lice from bird nests migrate into living spaces after chicks fledge, sometimes in large numbers.`
      },
      {
        q: `When is the best time to do bird exclusion in ${stateName}?`,
        a: `The optimal window for bird exclusion in ${stateName} is late fall through early spring — before nesting season begins in March. Once active nests are present, many species including chimney swifts and all native migratory birds are legally protected and work must pause until chicks have fledged. Your ${location} contractor can inspect now and schedule exclusion for the correct legal window for your specific bird species.`
      }
    ],

    'skunk-removal': [
      {
        q: `How much does skunk removal cost in ${location}, ${stateName}?`,
        a: `Skunk trapping and removal in ${stateName} typically costs $200–$500+. Deodorization of a sprayed area under a deck or inside a crawlspace adds $150–$400+. Exclusion to prevent skunks from returning to the same den site under your ${location} structure adds $200–$500+.`
      },
      {
        q: `Are skunks in ${stateName} dangerous?`,
        a: `Skunks are one of the primary rabies carriers in ${stateName}, regulated by the ${agency}. A skunk that is active in daylight, approaches humans, or moves erratically may be rabid and should be treated as an emergency. Do not attempt to trap or handle a potentially rabid skunk — call a licensed professional in ${location} immediately.`
      },
      {
        q: `How do skunks get under my deck in ${location}?`,
        a: `Skunks dig under skirting, through soil gaps, and around openings at the base of any structure that provides sheltered den access. Females specifically seek these locations in late winter to give birth. Once a skunk has denned under your ${location} structure, it will return the following year if the entry point is not sealed with buried hardware cloth.`
      },
      {
        q: `What time of year are skunks most dangerous in ${stateName}?`,
        a: `Skunk activity in ${stateName} peaks during breeding season — January through March — when males roam at night seeking mates and have a strong spraying response to any perceived threat. This is the period with the highest risk of pets being sprayed near ${location} homes. Females establish den sites under structures in February and March to give birth, and will remain until kits are fully weaned — typically 8–10 weeks.`
      },
      {
        q: `How do I get rid of skunk smell in my ${location} home?`,
        a: `Enzyme-based commercial deodorizers outperform home remedies like tomato juice. For spray inside a crawlspace or enclosed area in ${location}, professional-grade oxidizing agents and fogging equipment are required. Standard store-bought products rarely eliminate skunk odor completely from confined spaces — professional deodorization is the only reliable solution.`
      }
    ],

    'opossum-removal': [
      {
        q: `How much does opossum removal cost in ${location}, ${stateName}?`,
        a: `Opossum trapping and removal in ${stateName} typically costs $150–$400+. Sealing the entry point where opossums access your ${location} crawlspace or deck adds $150–$400+. Long-term contamination cleanup in areas where opossums have been living adds additional cost depending on how long the animal was present.`
      },
      {
        q: `Are opossums in ${stateName} dangerous?`,
        a: `Opossums rarely carry rabies due to their low body temperature, but they do carry leptospirosis and harbor parasites including fleas, ticks, and mites. A female opossum with young in her pouch requires careful professional handling. Their droppings contaminate insulation in ${location} crawlspaces and attics and require professional-grade sanitization.`
      },
      {
        q: `Why do opossums keep getting under my house in ${location}?`,
        a: `Opossums do not dig — they use existing openings. Crawlspace vents, gaps in skirting, and open foundation areas in ${location} homes are the primary access points. Because they are opportunistic and nomadic, multiple different opossums may use the same entry point over time. Permanent sealing of all ground-level openings is the only lasting solution.`
      },
      {
        q: `Will an opossum in ${location} leave on its own?`,
        a: `Possibly, but not reliably. Opossums can be nomadic and sometimes move on within days. However, a warm, sheltered crawlspace in ${location} may be occupied continuously by successive animals unless the entry point is sealed. Females with young will not leave until pups are fully weaned. Professional removal guarantees the animal is gone and the entry is sealed.`
      },
      {
        q: `When are opossums most active in ${stateName}?`,
        a: `Opossums are active year-round in ${stateName} and can be found in structures in any season. They breed twice per year — females carry young in the pouch from January through April for the first litter, and from June through August for the second. Cold weather drives them more aggressively into crawlspaces and attics. Mothers with pouch young require trained handling and are the most common opossum situation in ${location} homes.`
      }
    ],

    'mole-removal': [
      {
        q: `How much does mole removal cost in ${location}, ${stateName}?`,
        a: `Professional mole trapping in ${stateName} typically costs $200–$600+ for an initial treatment. Ongoing seasonal mole control programs — recommended for ${location} properties with persistent pressure — run $100–$300+ per month. The cost is usually justified by what repeated mole damage to turf, sod, and landscaping would cost to repair.`
      },
      {
        q: `Why do I have so many moles in my ${location} yard?`,
        a: `Mole populations in ${location} are directly tied to the earthworm population in your soil. A mole needs 60–100% of its body weight in earthworms daily and can dig 100 feet of tunnels per day following food. Irrigated, healthy lawns have more earthworms and attract more moles. A grub problem in your lawn compounds mole pressure further.`
      },
      {
        q: `Do mole repellents work in ${stateName}?`,
        a: `Castor oil repellents temporarily displace moles from a treated area but do not eliminate the population — they push moles to another section of your ${location} yard. Vibrating stakes, mothballs, and home remedies have no meaningful effect on established moles. Trapping is the only method with consistent, lasting results in ${stateName}.`
      },
      {
        q: `When are moles most damaging in ${stateName}?`,
        a: `Mole surface tunnel damage in ${stateName} peaks in spring and fall. Cool soil temperatures and rainfall bring earthworms near the surface, and moles follow — creating fresh tunnel ridges nightly in ${location} lawns. Damage slows in dry summer heat when earthworms descend deeper into the soil, then resumes aggressively in September and October when fall rains return moisture to near-surface soil layers.`
      },
      {
        q: `Are the tunnels in my ${location} lawn from moles or voles?`,
        a: `Moles create raised, volcano-shaped dirt mounds and subsurface ridges that push up the lawn surface. Voles create surface runways by clipping grass close to the ground — trails or channels, not raised ridges. Both require different control methods. A professional inspection in ${location} correctly identifies the pest and applies the right approach.`
      }
    ],

    'dead-animal-removal': [
      {
        q: `How much does dead animal removal cost in ${location}, ${stateName}?`,
        a: `Dead animal removal in ${stateName} typically costs $150–$500+ depending on the species, location, and accessibility. Animals in accessible outdoor areas are at the lower end. Animals inside ${location} walls, crawlspaces with limited access, or deep in attic insulation are at the higher end due to the time required to locate and extract them.`
      },
      {
        q: `How do I find a dead animal in my walls in ${location}?`,
        a: `Dead animals in ${location} walls are located by smell — the odor is strongest closest to the carcass. Professionals use scent tracking, experience with common species entry routes in ${stateName} homes, and sometimes thermal imaging to locate animals without opening large sections of wall. Most carcasses can be accessed through a small opening directly at the source.`
      },
      {
        q: `How long will a dead animal smell in my ${location} home?`,
        a: `A dead mouse may smell for 7–14 days. A dead squirrel or opossum can produce odor for 3–6 weeks. A raccoon in a ${location} attic can produce strong odor for 1–3 months, especially in ${stateName}'s warmer months. Same-day removal prevents the worst of the smell and eliminates the secondary pest and fly infestation that follows.`
      },
      {
        q: `Is a dead animal in my ${location} house a health hazard?`,
        a: `Yes. Decomposing animals attract blowflies and secondary scavengers like mice and rats into your ${location} home. The carcass harbors fleas, ticks, and mites that migrate into living areas. Bacteria from decomposition contaminate insulation and building materials. Professional removal and sanitization — not just carcass extraction — are the appropriate response.`
      },
      {
        q: `What is the most common dead animal found in ${stateName} homes?`,
        a: `${stateInfo ? stateInfo.wildlifeNote.split('.')[0] + '.' : `The most common deceased animals found in ${stateName} structures include raccoons, squirrels, and opossums.`} The species found most often in ${location} structures depends on local habitat — wooded areas see more squirrels and raccoons, while properties near water or agricultural land see more opossums and rats. A professional identifies the species and determines the most likely entry route.`
      }
    ]

  };

  return map[animalSlug] || [];
}

module.exports = { getAnimalFaqs };
