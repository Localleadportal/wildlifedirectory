// Per-animal FAQ content. State-specific bat restriction notes are injected at render time.
const animalFaqs = {
  'raccoon-removal': [
    {
      q: 'How much does raccoon removal cost?',
      a: 'Raccoon trapping and removal typically costs $200–$600. If raccoons have been living in your attic, full remediation including cleanup, decontamination, and entry point sealing generally runs $800–$2,500 depending on colony size and the extent of insulation damage.'
    },
    {
      q: 'Does homeowners insurance cover raccoon damage?',
      a: 'Some policies cover sudden, accidental damage caused by raccoons — such as a torn-open soffit or damaged roof decking. Most policies do not cover gradual damage or the cost of removal itself. Review your policy or call your agent before assuming coverage.'
    },
    {
      q: 'How did raccoons get into my attic?',
      a: 'Raccoons are strong and persistent. Common entry points include loose soffit panels, damaged fascia boards, roof vents, uncapped chimneys, and areas where the roof meets the wall. A professional inspection will identify all active entry points so they can be sealed after removal.'
    },
    {
      q: 'Can I remove raccoons myself?',
      a: 'Raccoon removal requires a state wildlife permit in most states, and handling raccoons without proper equipment carries serious disease risks — including rabies and Baylisascaris roundworm, which is shed in raccoon feces and can be fatal to humans. Licensed professionals have the permits, equipment, and training to remove raccoons safely and legally.'
    },
    {
      q: 'How long does raccoon removal take?',
      a: 'Active trapping typically takes 3–7 days to remove all animals from a property. If young pups are present in the attic, the timeline extends until they are mobile enough to relocate safely. Entry point sealing and attic cleanup are completed after all animals are confirmed removed.'
    }
  ],

  'squirrel-removal': [
    {
      q: 'How much does squirrel removal cost?',
      a: 'Squirrel removal typically costs $200–$500 for trapping. Full exclusion — sealing all entry points with chew-proof materials like steel mesh — adds $300–$900 depending on home size. Attic insulation replacement due to squirrel damage can add $1,000–$3,000.'
    },
    {
      q: 'Why are squirrels in my attic dangerous?',
      a: 'Squirrels constantly chew to keep their teeth trimmed. Inside attics and walls they chew electrical wiring, wood framing, PVC pipes, and HVAC ducting. Chewed wiring is a leading cause of house fires. Squirrel intrusions should be addressed immediately, not monitored.'
    },
    {
      q: 'What is the difference between gray squirrels and flying squirrels in the attic?',
      a: 'Gray squirrels are active during the day — you will hear scratching and movement in the morning and late afternoon. Flying squirrels are nocturnal, smaller, and often go undetected for months. Flying squirrel colonies can number 20 or more animals. If you hear noise only at night, flying squirrels are the likely culprit.'
    },
    {
      q: 'Will squirrels leave on their own?',
      a: 'No. Once squirrels establish a nesting site in an attic, they return to the same location year after year. Females raise two litters annually inside your home if the entry point is not sealed. Early intervention prevents a one or two squirrel problem from becoming a multi-generation colony.'
    },
    {
      q: 'How do you keep squirrels from coming back?',
      a: 'The only permanent solution is full exclusion — physically sealing every potential entry point with chew-proof material. Steel mesh, heavy-gauge hardware cloth, and galvanized flashing are standard materials. Repellents and deterrents alone do not work long-term against squirrels that have already established a nesting site.'
    }
  ],

  'bat-removal': [
    {
      q: 'How much does bat removal cost?',
      a: 'Bat exclusion typically costs $400–$1,500 for the exclusion work itself. Guano cleanup and attic decontamination — required to remove Histoplasma-contaminated material — adds $1,500–$8,000+ depending on colony size and accumulation depth. Bat removal is more expensive than most wildlife jobs due to the health risks and legal handling requirements.'
    },
    {
      q: 'Are there legal restrictions on when bats can be removed?',
      a: 'Yes. All bats in the US are protected under state wildlife laws and most states prohibit exclusion during the maternity season when nursing pups cannot fly — typically May through August, though exact dates vary by state. Performing exclusion during the protected period is illegal and traps flightless pups inside, causing a decomposition and odor problem. Contact us to schedule before or after the restricted window.'
    },
    {
      q: 'Is bat guano dangerous?',
      a: 'Yes. Bat guano supports the growth of Histoplasma capsulatum, a fungus that causes histoplasmosis — a serious respiratory illness. Disturbing dry guano releases spores into the air. Cleanup must be performed by trained professionals using respiratory protection and proper disposal protocols. Do not sweep or vacuum bat droppings yourself.'
    },
    {
      q: 'Can one bat in my house mean there is a colony?',
      a: 'A single bat inside living space usually entered through a gap from the attic or wall where a colony roosts, or is a juvenile that lost its way. If you find a bat inside your home, do not release it until a professional can inspect — it may indicate a larger colony above the ceiling. Any bat that may have had contact with a sleeping person should be tested for rabies.'
    },
    {
      q: 'How do professionals remove bats?',
      a: 'Bats are not trapped — they are excluded. One-way exclusion devices (tubes and netting) are installed over all entry points so bats can exit on their own but cannot re-enter. After all bats have departed — typically 3–7 nights — the exclusion devices are removed and all gaps are permanently sealed. The colony is never harmed.'
    }
  ],

  'snake-removal': [
    {
      q: 'How much does snake removal cost?',
      a: 'A single snake removal visit typically costs $100–$300. Full property inspection and exclusion to prevent re-entry runs $300–$900. Ongoing snake control programs for properties with persistent pressure are available on a seasonal or annual basis.'
    },
    {
      q: 'How do I know if the snake in my yard is venomous?',
      a: 'Do not attempt to identify a snake by getting close to it — many non-venomous species mimic venomous ones. In the Southeast, venomous species include copperheads, cottonmouths, eastern diamondbacks, timber rattlesnakes, and pygmy rattlesnakes. If you cannot identify a snake with certainty from a safe distance, treat it as venomous and call a professional.'
    },
    {
      q: 'Why are snakes coming onto my property?',
      a: 'Snakes follow their food supply. A property with a mouse or rat problem will attract snakes. Dense ground cover, wood piles, rock walls, and tall grass provide shelter. Eliminating rodent harborage and food sources is the most effective long-term snake deterrent alongside physical exclusion of structures.'
    },
    {
      q: 'Can snakes get inside my house?',
      a: 'Yes. Snakes can enter through gaps as small as a quarter inch — including gaps under doors, around pipe penetrations, foundation cracks, and open vents. Rat snakes, black racers, and copperheads are among the species most commonly found inside homes in the Southeast and Midwest.'
    },
    {
      q: 'What should I do if I find a snake in my house?',
      a: 'Stay calm and keep people and pets away from the snake. Do not try to trap, kill, or handle it. Note the snake\'s location and call a professional immediately. If the snake disappears into a wall or under appliances, mark the area and keep the room sealed so the snake does not spread through the house.'
    }
  ],

  'groundhog-removal': [
    {
      q: 'How much does groundhog removal cost?',
      a: 'Groundhog trapping and removal typically costs $150–$400. If burrows have undermined a deck, shed, or foundation, exclusion to prevent re-burrowing adds $200–$600. Extensive foundation repair from burrow damage can cost significantly more and should be assessed by a contractor after removal is complete.'
    },
    {
      q: 'How do I know if a groundhog is under my deck or foundation?',
      a: 'Look for a large burrow entrance 5–8 inches in diameter, usually near the edge of a structure. There will typically be a mound of excavated soil near the entrance. Groundhog burrows can extend 25–30 feet and reach 5 feet deep — enough to undermine concrete footings and deck support posts over time.'
    },
    {
      q: 'Will groundhogs go away on their own?',
      a: 'No. Groundhogs are highly site-loyal and return to the same burrow systems year after year. Even after trapping, a new groundhog will often move into an unprotected burrow within weeks. Physical exclusion — burying hardware cloth along the foundation — is required to prevent re-occupancy.'
    },
    {
      q: 'Do groundhog repellents work?',
      a: 'Commercial repellents and home remedies (pepper, ammonia, moth balls) provide very limited, temporary deterrence for groundhogs that are already established. They may deter new groundhogs from exploring an area but will not remove an animal that has an active burrow. Trapping followed by physical exclusion is the only reliable solution.'
    },
    {
      q: 'When is the best time of year to remove groundhogs?',
      a: 'Trapping is most effective in early spring when groundhogs first emerge from hibernation and are actively feeding. Young groundhogs disperse from their birth burrow in early summer, so addressing a problem in spring prevents a single animal from becoming a family group by midsummer.'
    }
  ],

  'bird-removal': [
    {
      q: 'How much does bird removal cost?',
      a: 'Bird removal and exclusion costs vary widely by species and situation — from $200–$600 for a simple starling or pigeon nest removal to $1,500+ for chimney swift management or large rooftop flock dispersal. Some protected species require specific permits and specialized methods.'
    },
    {
      q: 'Are birds in my chimney protected by law?',
      a: 'Chimney swifts are fully protected under the Migratory Bird Treaty Act and cannot be removed or disturbed while nesting. The chimney cannot be capped until swifts have departed for migration in fall. Other species in chimneys — starlings, sparrows — are not native and not protected, and nests can be removed at any time.'
    },
    {
      q: 'Why do birds keep nesting in my vents?',
      a: 'Dryer vents, bathroom exhaust vents, and attic vents are warm, protected cavities that closely resemble natural nest sites. Birds return to the same nesting location year after year. The solution is permanent exclusion — installing appropriate vent guards after the nesting season ends — not just removing the nest.'
    },
    {
      q: 'How do you get rid of pigeons on a roof?',
      a: 'Pigeon control on commercial and residential structures typically involves exclusion netting or spikes to eliminate roosting and nesting surfaces, combined with habitat modification to remove food sources. Trapping programs are used for large established flocks. A site inspection determines which combination of methods is appropriate.'
    },
    {
      q: 'What damage can birds cause in an attic?',
      a: 'Birds nesting in attics leave behind nesting material, feathers, and large amounts of droppings that harbor respiratory pathogens including Histoplasma and Cryptococcus. Nesting material can block ventilation and create fire hazards near exhaust vents. Mites and lice from bird nests often migrate into living spaces after chicks fledge.'
    }
  ],

  'skunk-removal': [
    {
      q: 'How much does skunk removal cost?',
      a: 'Skunk trapping and removal typically costs $200–$500. If a skunk has sprayed under a deck or structure, professional deodorization adds $150–$400. Exclusion to prevent skunks from returning to the same denning site under your deck or foundation adds $200–$500.'
    },
    {
      q: 'How do I get rid of skunk smell from my home or yard?',
      a: 'Commercial enzyme-based deodorizers are more effective than home remedies like tomato juice. For spray inside a structure or crawlspace, professional-grade oxidizing agents and fogging equipment are required for complete neutralization. Store-bought products rarely eliminate skunk odor completely from enclosed spaces.'
    },
    {
      q: 'Are skunks dangerous?',
      a: 'Skunks are one of the primary wildlife carriers of rabies in North America. A skunk that is active during daylight, approaches humans without fear, or moves erratically should be considered potentially rabid and treated as an emergency. Do not attempt to handle or trap a skunk you suspect is rabid — call a professional immediately.'
    },
    {
      q: 'How do skunks get under my deck?',
      a: 'Skunks dig under skirting, through soil gaps, and around any opening at the base of a deck, porch, or shed that provides access to a sheltered den site. Females specifically seek these locations in late winter to give birth. Once a skunk has denned, it will return the following year if the entry point is not sealed.'
    },
    {
      q: 'What time of year are skunks most active?',
      a: 'Skunks enter partial dormancy in winter but emerge during warm spells. The most dangerous time is late winter — January through March — when males actively roam at night seeking mates. Skunk encounters and spray incidents peak during this breeding season, and females begin establishing den sites under structures in February and March.'
    }
  ],

  'opossum-removal': [
    {
      q: 'How much does opossum removal cost?',
      a: 'Opossum trapping and removal typically costs $150–$400. Exclusion to seal the entry point where opossums are accessing a crawlspace, attic, or deck adds $150–$400. Cleanup of an area where opossums have been living long-term — including droppings and nesting material — may add additional cost.'
    },
    {
      q: 'Are opossums dangerous?',
      a: 'Opossums are generally not aggressive and are rarely carriers of rabies due to their low body temperature. However, they can carry leptospirosis and other parasites, and a cornered or threatened opossum will hiss, bare its teeth, and bite. A female carrying young in her pouch requires careful professional handling.'
    },
    {
      q: 'Why is an opossum living under my house?',
      a: 'Opossums are opportunistic den animals that use any sheltered, protected space they can access. Crawlspace vents, gaps in skirting, open foundation areas, and under decks and porches are all commonly used den sites. Opossums do not dig — they use existing openings. Sealing all ground-level entry points permanently eliminates the problem.'
    },
    {
      q: 'Will the opossum leave on its own?',
      a: 'Opossums are nomadic and often move on within a few days if not disturbed. However, if a den site is warm, sheltered, and undisturbed — as crawlspaces often are — an opossum may remain for weeks or months. Females with young in the pouch will not leave until pups are fully weaned. Professional removal guarantees the animal is gone and the entry point is sealed.'
    },
    {
      q: 'What does opossum damage look like?',
      a: 'Opossums rarely cause structural damage. Their primary impact is contamination — droppings, urine, and nesting material in crawlspaces and attics that harbor bacteria and parasites. An opossum living under a house for an extended period leaves behind enough contamination to require professional-grade sanitization before the area can be safely used.'
    }
  ],

  'mole-removal': [
    {
      q: 'How much does mole removal cost?',
      a: 'Professional mole trapping typically costs $200–$600 for an initial treatment. Ongoing mole control programs — recommended for properties with persistent mole pressure — run $100–$300 per month. The investment in professional control is usually justified by the cost of lawn re-sodding or re-seeding that repeated mole damage requires.'
    },
    {
      q: 'Do mole repellents actually work?',
      a: 'Castor oil-based repellents can temporarily displace moles from a treated area, but they do not eliminate the population — they simply push moles to an adjacent part of the lawn. Vibrating stakes, mothballs, and other common home remedies have no meaningful effect on established mole populations. Trapping is the only method with consistent results.'
    },
    {
      q: 'Why do I have so many moles?',
      a: 'Mole populations are directly tied to earthworm populations in your soil. A mole requires 60–100% of its body weight in earthworms daily — a single mole can travel 100 feet of tunnel per day hunting food. Irrigated, aerated, healthy lawns have more earthworms and therefore more moles. A grub or insect problem in the lawn can also drive mole activity.'
    },
    {
      q: 'Are the raised ridges in my lawn mole tunnels or vole tunnels?',
      a: 'Moles create raised, volcano-shaped dirt mounds and subsurface ridges that push up the surface of the lawn. Voles create surface runways by clipping grass close to the ground — they look like trails or channels on the lawn surface, not raised ridges. Both require different control methods. A professional inspection correctly identifies the pest and applies the right approach.'
    },
    {
      q: 'How long does it take to get rid of moles?',
      a: 'Active trapping typically catches the moles causing damage within 1–2 weeks. New moles from adjacent areas can move into a vacated territory, which is why ongoing monitoring and follow-up trapping are often recommended rather than a one-time treatment.'
    }
  ],

  'dead-animal-removal': [
    {
      q: 'How much does dead animal removal cost?',
      a: 'Dead animal removal typically costs $150–$500 depending on the species, location, and accessibility. Animals in accessible locations like under a deck or in a garage are at the lower end. Animals inside walls, crawlspaces with limited access, or deep in attic insulation are at the higher end due to the time required to locate and extract them.'
    },
    {
      q: 'How do I find where a dead animal is in my walls?',
      a: 'Dead animals in walls are located by smell — the odor is strongest closest to the carcass. Professionals use a combination of scent tracking, thermal imaging, and experience with common entry routes for each species to locate animals without opening large sections of wall. Most carcasses can be accessed through a small opening directly at the source.'
    },
    {
      q: 'How long will a dead animal smell?',
      a: 'A dead mouse or rat may smell for 7–14 days. A dead squirrel or opossum can produce odor for 3–6 weeks. A raccoon or larger animal in an attic can produce strong odor for 1–3 months, especially in warm weather. The heat of summer dramatically accelerates decomposition and intensifies the odor. Same-day removal prevents the worst of the smell.'
    },
    {
      q: 'Is a dead animal in my house a health hazard?',
      a: 'Yes. Decomposing animals attract blowflies and secondary scavengers like mice and rats. The carcass itself may harbor fleas, ticks, and mites that migrate into living areas after the animal dies. Bacteria from decomposition can contaminate insulation. Professional removal and sanitization are recommended, not just carcass extraction.'
    },
    {
      q: 'What do I do if I find a dead animal on my property?',
      a: 'Do not handle it with bare hands. If it is accessible in an outdoor area, double-bag it in heavy plastic bags and dispose of it with household waste (check local regulations). If the animal is inside your home, inside a wall, in a crawlspace, or in an attic — call a professional. The source of the smell must be fully removed and the area sanitized to eliminate odor and contamination.'
    }
  ]
};

module.exports = { animalFaqs };
