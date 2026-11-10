// problems.js — Problem-first pages for removewildlifenow.com
//
// Homeowners rarely search for an animal they have not identified yet.
// They search for what they hear, see, or smell: scratching overhead,
// a smell they cannot find, holes in the lawn. Each entry below starts
// from that symptom, names the animals most likely behind it, explains
// what is actually going on, and sets an honest urgency level.
//
// Shape per entry:
//   slug            URL slug (fixed, do not rename without redirects)
//   title           <title> tag, 60 characters or fewer
//   h1              Page heading
//   metaDescription Meta description, 160 characters or fewer
//   symptom         2–3 sentences in the homeowner's own words
//   likelyCulprits  Animal slugs from data/animals.js, most likely first
//   whatItMeans     120–160 words on what is happening in the house/yard
//   urgency         { level: 'call-today' | 'this-week' | 'monitor', note }
//   whatWeDo        4–5 short steps describing our crew's response
//   whatNotToDo     3–4 short warnings
//   faqs            3–4 { q, a } pairs
//
// Voice: we write as the local company doing the work — "we", "our crew",
// "call us". We are licensed and insured, offer same-day service, and are
// available 24/7. We never promise a price before an inspection.

const PROBLEMS = [
  {
    slug: 'scratching-noises-in-the-attic',
    title: 'Scratching Noises in the Attic: Causes & Help',
    h1: 'Scratching Noises in the Attic',
    metaDescription: 'Hearing scratching, scurrying, or thumping in your attic? Learn what animal is most likely up there, how urgent it is, and what our Georgia crew does.',
    symptom: 'It usually starts at dawn or just after dark: scratching, scurrying, or rolling noises overhead, sometimes with a thump heavy enough to make you look up. Some nights it is quiet and some nights it sounds like something is rearranging your attic. Most homeowners tell us they hear it worst in the bedroom ceiling, right above where they sleep.',
    likelyCulprits: ['squirrel-removal', 'raccoon-removal', 'rat-removal', 'bat-removal'],
    whatItMeans: 'The timing tells us a lot. Light, fast scratching and scampering at sunrise and sunset usually means gray squirrels, which are daytime animals that den in attics under Georgia’s pine canopy and run the roofline like a road. Slow, heavy thumping and dragging after dark points to a raccoon — often a mother who has torn into a soffit to raise young in the insulation. Steady gnawing and pattering in the same spot night after night suggests roof rats working a travel route along the top plates. High, faint chirping and rustling near a gable vent can mean a bat colony roosting behind the louver. All four chew, soil insulation, and leave droppings, and squirrels and rats gnaw wiring, which is a genuine fire risk.',
    urgency: {
      level: 'call-today',
      note: 'Animals chewing in an attic are often chewing wiring too, and a denning raccoon adds young — and damage — every week she stays. Call us today and we will work out what is up there before it gets worse.'
    },
    whatWeDo: [
      'Inspect the attic and roofline to identify the animal from droppings, tracks, and damage',
      'Find every entry point, including the small gaps most homeowners never see',
      'Remove the animals humanely — trapping or one-way doors, matched to the species',
      'Seal all entry points with chew-resistant materials once the attic is clear',
      'Clean and disinfect soiled spots and check wiring and ducts for damage'
    ],
    whatNotToDo: [
      'Do not seal the hole until the animal is out — you will trap it inside to die in a wall',
      'Do not set poison in the attic; poisoned animals die in walls and create a far worse problem',
      'Do not climb up at night to confront it — a cornered mother raccoon is genuinely dangerous',
      'Do not assume it left on its own; quiet usually means babies, not an empty attic'
    ],
    faqs: [
      {
        q: 'What animal scratches in the attic during the day versus at night?',
        a: 'Daytime and early-evening scratching is almost always squirrels, which sleep at night. Noises that start after dark and sound heavier — thumping, walking, dragging — usually mean raccoons or rats, both of which are nocturnal. The pattern is one of the first things our crew asks about on the call.'
      },
      {
        q: 'Can I wait and see if the noise stops?',
        a: 'We do not recommend it. Squirrels and rats chew constantly, and attic wiring is a favourite target. A raccoon den also fills with droppings fast, and once young are mobile the removal takes longer. Catching it in the first week is almost always the simplest, cheapest version of this job.'
      },
      {
        q: 'How did the animal get into my attic?',
        a: 'Usually through a gap you cannot see from the ground: a lifted soffit, a rotten fascia board, a gable vent with a torn screen, or a gap where two roof lines meet. Georgia’s humidity rots trim wood quickly, and squirrels only need a hole the size of a tennis ball. We photograph every entry point we find so you can see it yourself.'
      },
      {
        q: 'Will the animal come back after removal?',
        a: 'Not if the entries are sealed properly. Removal without sealing is a revolving door, because attic scent draws the next animal in. That is why our work always pairs removal with sealing every entry point in chew-resistant material, and why we check the whole roofline rather than just the obvious hole.'
      }
    ]
  },
  {
    slug: 'animal-in-the-wall',
    title: 'Animal in the Wall: What to Do in Georgia',
    h1: 'There Is an Animal in My Wall',
    metaDescription: 'Scratching, sliding, or crying sounds inside a wall? An animal is trapped or denning in the wall void. Here is what is happening and how our crew gets it out.',
    symptom: 'You hear scratching or scrabbling inside the wall itself — behind the bedroom drywall, beside the fireplace, or in the wall by the kitchen — and it moves up and down but never seems to get anywhere. Sometimes there is a faint crying or chirping with it. Tapping the wall makes it freeze, then start again a minute later.',
    likelyCulprits: ['rat-removal', 'squirrel-removal', 'bat-removal', 'opossum-removal'],
    whatItMeans: 'Wall voids are highways. Animals enter at the roofline or foundation and travel inside walls because the space is warm, dark, and safe from predators. The trouble starts when one falls. A young squirrel, a baby opossum, or a bat that slips off the top plate often cannot climb back up smooth drywall and framing, so it scratches for hours or days trying. Rats are the exception — they climb well and use walls as a route between the attic and the kitchen, gnawing as they go. A trapped animal that is not rescued will die in that wall, and in a Georgia summer the smell arrives within days and can linger for weeks. The sooner we locate it, the smaller the opening we need to make.',
    urgency: {
      level: 'call-today',
      note: 'A trapped animal is on a clock — it will weaken and die in the wall, turning a rescue into a dead-animal removal plus deodourising. Call us today, while it is still making noise and easy to pinpoint.'
    },
    whatWeDo: [
      'Pinpoint the exact bay of wall using sound, a borescope camera, and attic inspection',
      'Identify the species so we know whether it is trapped or travelling through',
      'Open the smallest practical access, only where needed, and remove the animal by hand or trap',
      'Check the rest of the wall run and attic for littermates, droppings, and gnawed wiring',
      'Seal the entry point at the roofline or foundation so the next one cannot follow'
    ],
    whatNotToDo: [
      'Do not seal both ends of the wall run — that guarantees the animal dies inside',
      'Do not spray repellent or pour anything into the wall; it drives the animal deeper',
      'Do not cut holes at random — a camera finds the animal first and keeps the opening small',
      'Do not wait for it to “find its own way out”; a fallen animal physically cannot climb smooth drywall'
    ],
    faqs: [
      {
        q: 'How long can an animal survive trapped in a wall?',
        a: 'Usually only a few days without water, and Georgia attic heat shortens that considerably in summer. Young animals fade fastest. That short window is why we treat wall calls as urgent: same-day service is often the difference between a live rescue and a much bigger cleanup job.'
      },
      {
        q: 'Will you have to cut my drywall?',
        a: 'Sometimes, yes — but only after we have confirmed the animal’s location with a camera, and only a small, clean opening sized to reach it. Many wall animals can instead be guided up and out through the attic. If we do cut, we will show you exactly where and why before we start.'
      },
      {
        q: 'I heard babies chirping in the wall. What does that mean?',
        a: 'It usually means a mother denning in the attic or a wall top has young nearby, or a juvenile has slipped down from the nest. Either way, the mother and the whole litter need to come out together. Removing only the mother leaves young in the wall to die, so we always check for the full family.'
      },
      {
        q: 'Could the sounds in my wall be plumbing or the house settling?',
        a: 'Settling is random and does not repeat in a pattern; plumbing knocks when water runs. Animal noise responds to you — it stops when you tap the wall and resumes when the room goes quiet, and it follows a dawn or dusk schedule. If it behaves like that, it is almost certainly an animal.'
      }
    ]
  },
  {
    slug: 'droppings-in-the-attic',
    title: 'Droppings in the Attic: What Animal Left Them?',
    h1: 'Droppings in the Attic — What Left Them?',
    metaDescription: 'Found droppings in your attic insulation? Size, shape, and location identify the animal. Learn what each kind means, the health risks, and how we clean it up.',
    symptom: 'You went up for a suitcase or the Christmas lights and found them: dark pellets or piles scattered through the insulation, maybe a strong ammonia smell with them. In one corner there might be a single disgusting pile that clearly gets used again and again. Now every noise in the house has you wondering what is living up there.',
    likelyCulprits: ['raccoon-removal', 'bat-removal', 'rat-removal', 'squirrel-removal'],
    whatItMeans: 'Droppings are the most honest evidence in an attic, and each animal writes a different signature. Raccoons use a latrine — one flat area used repeatedly, with larger droppings that often contain seeds and berries. Bats leave crumbly piles of guano directly under the roost, full of shiny insect fragments, usually beneath a ridge or gable vent. Roof rats scatter small, dark, rice-shaped droppings along their travel routes and near food. Squirrels leave small firm pellets clustered near entry points and nests. The health side matters: raccoon droppings can carry roundworm eggs, bat guano can grow the fungus that causes histoplasmosis, and dry droppings of any kind should never be swept or vacuumed with household equipment, because that puts contaminated dust into the air you breathe.',
    urgency: {
      level: 'this-week',
      note: 'Droppings mean an animal is living — or has lived — in the attic, and the contamination grows while it stays. Book an inspection this week, do not disturb the droppings in the meantime, and call sooner if the pile is large or close to your air handler.'
    },
    whatWeDo: [
      'Inspect with proper protective equipment and identify the species from the droppings',
      'Confirm whether the animal is still present and remove it before any cleaning starts',
      'Remove contaminated insulation and droppings with HEPA equipment, bagged and taken out',
      'Disinfect and deodorise the attic surfaces, including latrine and roost sites',
      'Seal entry points and replace insulation where the job calls for it'
    ],
    whatNotToDo: [
      'Do not sweep or use a household vacuum — that aerosolises exactly what you should not breathe',
      'Do not handle droppings with bare hands, especially raccoon droppings',
      'Do not just roll new insulation over the top; the contamination and scent stay underneath',
      'Do not assume droppings are old — fresh and old look similar, and guessing wrong means cleaning around a live animal'
    ],
    faqs: [
      {
        q: 'Can I clean up attic droppings myself?',
        a: 'A few stray pellets from a single squirrel visit are one thing; an established latrine or guano pile is another. Raccoon roundworm eggs and histoplasmosis spores are real risks with the wrong technique, and household vacuums spread both. For anything beyond a tiny amount, we recommend letting our crew handle it with HEPA equipment and disinfectant.'
      },
      {
        q: 'How can you tell which animal left the droppings?',
        a: 'Size, shape, contents, and placement. Raccoon droppings are large and sit in one latrine; bat guano crumbles into shiny insect dust under a roost; rat droppings are small, pointed, and scattered along runs; squirrel pellets cluster near entries. We combine that with tracks, entry damage, and noise reports to confirm it before we quote any work.'
      },
      {
        q: 'Does the smell go away once the animal is gone?',
        a: 'Not by itself. Scent soaks into insulation and wood, and it also advertises your attic to the next animal looking for a den. Removing contaminated material and disinfecting the site is what actually ends the smell — air fresheners and time alone rarely do.'
      },
      {
        q: 'Will droppings in the attic make my family sick?',
        a: 'Most families are fine, because the attic is separated from living space — but the risk rises when droppings sit near the air handler, when dry material gets disturbed, or when contamination is heavy. That is exactly why we assess before cleaning: the right response ranges from simple spot cleaning to full insulation replacement, and we will tell you honestly which one your attic needs.'
      }
    ]
  },
  {
    slug: 'dead-animal-smell',
    title: 'Dead Animal Smell in the House: Find & Remove It',
    h1: 'Dead Animal Smell in the House',
    metaDescription: 'A strong, sweet-rotten smell that keeps getting worse means a dead animal in a wall, attic, or crawlspace. Our Georgia crew finds, removes, and deodorises it.',
    symptom: 'It starts faint — something sweet and rotten near one wall or vent — and gets stronger every day until guests notice it and you are lighting candles room by room. Flies appear at the windows for no obvious reason. The smell is always worst in one spot, often a bedroom or bathroom wall, and worst in the heat of the afternoon.',
    likelyCulprits: ['dead-animal-removal', 'rat-removal', 'opossum-removal', 'raccoon-removal'],
    whatItMeans: 'That smell follows a pattern, and the pattern usually means an animal died somewhere it could not be seen: inside a wall, under attic insulation, or in the crawlspace. Rats and squirrels die in walls after falls or poison; opossums and raccoons die under houses and in attic corners. Georgia heat and humidity speed everything up — odour typically peaks within a week, draws blowflies, and can soak into drywall and insulation so the smell outlives the animal itself. The strongest room, the nearest wall, and where the flies gather narrow the search considerably. Our job is to find the exact spot before anyone opens a wall, remove the animal, and treat the surfaces so the odour actually ends instead of fading over a miserable month.',
    urgency: {
      level: 'call-today',
      note: 'Decomposition only gets worse in Georgia heat, and flies and bacteria spread from the site each day. Call us today — the earlier we remove it, the less odour soaks into your walls and insulation.'
    },
    whatWeDo: [
      'Trace the odour to its strongest point and inspect the attic, walls, and crawlspace behind it',
      'Use a borescope camera to confirm the animal’s location before opening anything',
      'Remove the animal through the smallest practical access and bag it out cleanly',
      'Disinfect and deodorise the cavity and any stained insulation or drywall',
      'Find and seal the entry the animal used, so the next one does not die in the same place'
    ],
    whatNotToDo: [
      'Do not just mask it with candles or sprays — the source keeps decomposing underneath',
      'Do not tear into walls at random; confirm the location first and keep the opening small',
      'Do not use poison for a rodent problem afterwards — that is how most wall deaths happen',
      'Do not wait it out if you can avoid it; a large animal can smell for four to six weeks in summer'
    ],
    faqs: [
      {
        q: 'How long will a dead animal smell last if I do nothing?',
        a: 'A small rat may fade in one to two weeks; a raccoon or opossum in a wall can smell for a month or more, especially through a humid Georgia summer. The smell also peaks before it fades, so the worst days are usually still ahead when homeowners first call. Removal ends it in days rather than weeks.'
      },
      {
        q: 'Can you find it without cutting my walls?',
        a: 'Often, yes. Many dead animals are in the attic or crawlspace and need no cutting at all. When one is inside a wall, we confirm the exact spot with smell pattern and a borescope camera first, so any opening is small and in the right bay — never guesswork demolition.'
      },
      {
        q: 'Why are there suddenly flies in my house?',
        a: 'Blowflies find a carcass within hours and lay eggs on it; the adults you see at windows are the next generation trying to get to daylight. A sudden cluster of large flies indoors, alongside a bad smell, is one of the most reliable signs of a dead animal in a wall or attic.'
      },
      {
        q: 'Is a dead animal in the house a health risk?',
        a: 'It can be. Decomposing animals carry bacteria, attract flies that then land on kitchen surfaces, and can stain and contaminate insulation and drywall. The risk is highest for large animals and long delays. Removing the animal and disinfecting the site is what brings the risk back to zero.'
      }
    ]
  },
  {
    slug: 'holes-and-tunnels-in-the-yard',
    title: 'Holes & Tunnels in the Yard: Georgia Wildlife',
    h1: 'Holes and Tunnels in the Yard',
    metaDescription: 'Fresh holes overnight, raised tunnels that feel spongy, or a big burrow by the shed? Identify the Georgia animal digging up your yard and what to do about it.',
    symptom: 'You walk out with your coffee and the lawn you mowed Saturday looks worked over: small cone-shaped holes everywhere, a raised ridge you can press down with your foot, or one big hole by the shed with a fan of dirt behind it. New damage appears overnight, every night, and the worst patches feel soft and spongy underfoot.',
    likelyCulprits: ['armadillo-removal', 'mole-removal', 'groundhog-removal', 'skunk-removal'],
    whatItMeans: 'Each digger signs its work. Armadillos dig dozens of shallow, cone-shaped holes hunting grubs and worms, mostly overnight, and root up flower beds along the way — they work Georgia yards year-round. Moles rarely leave an open hole at all; they push up raised surface tunnels that feel spongy, plus the occasional volcano-shaped mound, as they hunt earthworms in soft soil. Groundhogs dig the one that worries people: a wide burrow entrance, often under a shed, deck, or foundation edge, with a big fan of excavated dirt. Skunks leave neat little cone holes in turf, similar to armadillo work but smaller. Soil matters here — armadillos and moles move easily through coastal sand and loam, while red clay slows everyone down after a dry spell and concentrates digging after rain.',
    urgency: {
      level: 'monitor',
      note: 'Yard digging is rarely an emergency, so watch it for a few nights and note what is fresh each morning. Call us this week if a burrow opens beside a foundation, deck, or retaining wall, or if digging is tearing up irrigation, beds, or a whole lawn.'
    },
    whatWeDo: [
      'Walk the yard and identify the digger from hole shape, tunnel pattern, and tracks',
      'Check burrows for activity and check structures for undermining or entry into the crawlspace',
      'Trap and remove the target animal — armadillo, groundhog, or skunk — where removal is warranted',
      'Set a practical mole plan for tunnel damage, based on activity mapping rather than guesswork',
      'Fill and grade burrows once they are empty, and screen any opening into the house'
    ],
    whatNotToDo: [
      'Do not fill an active burrow before confirming it is empty — you can bury an animal alive or drive it under the house',
      'Do not rely on mothballs, castor oil, or vibrating stakes; Georgia homeowners try them all and the digging continues',
      'Do not flood tunnels with a hose — in clay soil you mostly flood your own foundation bed',
      'Do not assume one animal; armadillo and mole damage often show up in the same yard at the same time'
    ],
    faqs: [
      {
        q: 'How do I tell armadillo holes from mole tunnels?',
        a: 'Armadillos leave open, cone-shaped holes three to five inches wide where they dug straight down for grubs. Moles leave raised ridges you can see and feel across the lawn, with soft soil underneath and usually no open hole. If your shoe sinks into a winding ridge, think mole; if the flower bed looks rototilled overnight, think armadillo.'
      },
      {
        q: 'Will the digging damage my foundation?',
        a: 'Mole and armadillo digging is shallow and mostly a lawn problem. A groundhog burrow is the exception: a large tunnel system under a slab edge, deck footing, or retaining wall can undermine it over a season or two. Any burrow that disappears under a structure is worth a prompt inspection rather than a wait-and-see.'
      },
      {
        q: 'If I get rid of the grubs, will the animals leave?',
        a: 'It helps with skunks and armadillos, which dig heavily for grubs in late summer, but it is not a complete fix. Moles mainly eat earthworms, which no sane homeowner wants to eliminate, and armadillos eat many soil insects besides grubs. Treat the lawn if you like, but expect trapping or exclusion to be what actually ends the damage.'
      },
      {
        q: 'Is it one animal or a whole family tearing up my yard?',
        a: 'Often surprisingly few. A single armadillo can dig up a startling amount of lawn in one night, and one mole makes a whole tunnel system by itself. Groundhog burrows may hold a mother and young in spring. Part of our inspection is working out the actual number, so you are not paying to solve a bigger problem than you have.'
      }
    ]
  },
  {
    slug: 'animal-under-the-deck',
    title: 'Animal Under the Deck: Removal in Georgia',
    h1: 'An Animal Is Living Under My Deck',
    metaDescription: 'Thumping under the floor, a wild smell by the steps, or a dog obsessed with one corner? Something is denning under your deck. We remove it and seal it out.',
    symptom: 'Your dog has picked one corner of the deck and loses its mind there every morning. You catch a musky, wild smell by the steps, hear thumping or shuffling under the floorboards at night, and the lattice or skirting in one spot looks pushed in. On a bad morning, the whole backyard smells like skunk.',
    likelyCulprits: ['opossum-removal', 'skunk-removal', 'raccoon-removal', 'groundhog-removal'],
    whatItMeans: 'The space under a low deck is nearly perfect den habitat: dry, shaded from the Georgia sun, safe from most predators, and usually one loose lattice panel away from the crawlspace. Opossums drift in and out and raise young there in spring. Skunks den under decks through winter and raise their kits there in summer — which is why so many dogs get sprayed at the deck steps. Raccoons use the space as a daytime sleeping site and a latrine. Groundhogs are the builders: they excavate a real burrow system under the deck that can undermine footings and steps over time. Eggs, pet food, and bird seed stored nearby sweeten the spot. Until the animal and any young are out and the perimeter is sealed below grade, the den will simply change tenants.',
    urgency: {
      level: 'this-week',
      note: 'A deck den usually holds young in spring and summer, and skunk dens and dogs are a bad mix at any time of year. Book removal this week — and call us today if your dog has already been sprayed or an animal under there is acting bold or sick.'
    },
    whatWeDo: [
      'Inspect the deck perimeter and underneath to identify the animal and find every way in',
      'Remove the animals humanely, by hand for young and by trap or one-way door for adults',
      'Check for a groundhog burrow system and collapse it once it is confirmed empty',
      'Clean out latrine material and nesting debris from under the deck',
      'Seal the perimeter with galvanised mesh trenched below grade in an L-shape, so digging in stops working'
    ],
    whatNotToDo: [
      'Do not board or lattice the opening shut while the animal is inside — it will die under there or dig into the crawlspace',
      'Do not let your dog keep harassing the den; that is exactly how dogs get sprayed and bitten',
      'Do not corner a skunk at the deck steps or try to scare it out with noise — you will not enjoy the result',
      'Do not store pet food, seed, or trash by the deck; you are stocking the den’s pantry'
    ],
    faqs: [
      {
        q: 'How do I know if it is a skunk or an opossum under my deck?',
        a: 'Skunks announce themselves: even without a full spray, a denning skunk leaves a lingering musky odour near the deck, and their digging leaves neat cone holes in the lawn nearby. Opossums are quieter tenants — thumps at night, hissing if the dog corners one, and little smell unless one dies. Our inspection confirms which it is before we set anything.'
      },
      {
        q: 'Will sealing the deck hurt the animals or trap babies?',
        a: 'Not the way we do it. We remove the adults and young first, confirm the space is empty, and only then seal. Young are removed by hand and reunited or handled according to the species and the season. Sealing before confirming the den is empty is the mistake we are most often called in to undo.'
      },
      {
        q: 'My deck is only a foot off the ground. Can you still seal it?',
        a: 'Yes. Low decks are the most common deck dens we handle. The mesh is trenched into the soil in front of the skirting and bent outward below grade, which stops digging animals from simply tunnelling under a surface-mounted barrier. Red clay makes the trenching harder work, but it also holds the barrier firmly once it is in.'
      },
      {
        q: 'The animal left on its own. Should I still seal the deck?',
        a: 'Absolutely — an empty den is an advertised vacancy. The scent of the previous tenant tells the next opossum, skunk, or raccoon that this spot is safe and proven. Sealing while it is empty is the easiest and cheapest moment to do it, and it ends the cycle of rotating tenants.'
      }
    ]
  },
  {
    slug: 'noises-in-the-chimney',
    title: 'Noises in the Chimney: Birds, Bats or Raccoons?',
    h1: 'Noises in the Chimney — What Is In There?',
    metaDescription: 'Fluttering, chirping, or scratching echoing from your fireplace? Swifts, raccoons, bats, and squirrels use uncapped chimneys. Learn which, and what not to do.',
    symptom: 'It sounds like the noise is inside the room with you: fluttering and chirping echoing down the flue, scratching on metal, or a chattering scold from the fireplace. You may find soot or feathers on the hearth, or catch a whiff of something wild when the damper is open. On summer evenings the chirping can be constant.',
    likelyCulprits: ['bird-removal', 'raccoon-removal', 'bat-removal', 'squirrel-removal'],
    whatItMeans: 'An uncapped chimney reads to wildlife as a hollow tree, and several very different tenants move in. Chimney swifts — small migratory birds — nest on flue walls through the Georgia summer, and their noisy young are what most homeowners hear; they are federally protected and leave on their own by autumn. Raccoon mothers choose flues in spring precisely because they resemble a den tree, and they climb in and out nightly. Bats roost in flue gaps and mortar joints, sometimes in numbers. Squirrels are usually not tenants but victims — one falls past the damper line and cannot climb smooth flue tile back out. Each case needs a different response and a different timeline, which is why identification through a flue camera comes before anyone reaches for a cap.',
    urgency: {
      level: 'call-today',
      note: 'Call us today if an animal has fallen into the firebox, a bat has reached a living space, or you hear an animal in real distress. If it turns out to be nesting swifts, we will confirm it, leave them in peace, and book the cap for right after they leave.'
    },
    whatWeDo: [
      'Inspect the flue with a camera from top and bottom to identify exactly what is inside',
      'Remove fallen or trapped animals by hand and release or handle them by species',
      'For raccoons, remove mother and young together and check the smoke shelf and attic too',
      'Schedule exclusion around protected nesting seasons rather than breaking the rules around them',
      'Fit a proper chimney cap once the flue is clear, and recommend a sweep if nesting debris remains'
    ],
    whatNotToDo: [
      'Do not light a fire to smoke it out — that kills nestlings, can start a debris fire, and is illegal for protected birds',
      'Do not cap the chimney before confirming it is empty; a cap over a live flue is a death sentence and an odour problem',
      'Do not handle a bat from the fireplace with bare hands — call us and keep people and pets out of the room',
      'Do not reach up the flue for a raccoon; a mother defending young at arm’s length is a serious bite risk'
    ],
    faqs: [
      {
        q: 'The chirping in my chimney is constant in summer. What is it?',
        a: 'Almost certainly chimney swifts feeding their young. The chicks are loud, the parents hunt insects all day, and the noise peaks for the few weeks before the young fledge. They are protected, beneficial, and temporary — they migrate south by autumn. We verify with a camera, then cap the chimney after they have gone so next summer stays quiet.'
      },
      {
        q: 'Can I use my fireplace while something is living in the chimney?',
        a: 'No. Even if the animal survives, smoke and heat injure it, nesting material is flammable, and a blocked or partly blocked flue can push carbon monoxide into the house. Keep the damper closed and the fireplace unused until we have cleared the flue and confirmed it is safe.'
      },
      {
        q: 'A bat got into my living room from the fireplace. What should I do?',
        a: 'Close the room off, keep people and pets out, and call us — we are available 24/7 for exactly this. Do not handle the bat or chase it with a broom. If anyone woke up in a room with a bat, or a pet caught it, your county health department may want the bat tested for rabies, and we will preserve it safely for that if needed.'
      },
      {
        q: 'Will a chimney cap really keep animals out for good?',
        a: 'A correctly sized, properly fastened cap is one of the most reliable exclusions there is — it ends swift, raccoon, bat, and squirrel entry through the flue in one step. The catch is timing and fit: it must go on only when the flue is empty, and it should be checked whenever the roof is serviced. We size and fit caps as the final step of chimney jobs.'
      }
    ]
  },
  {
    slug: 'something-in-the-crawlspace',
    title: 'Something in the Crawlspace: Signs & Removal',
    h1: 'Something Is Living in My Crawlspace',
    metaDescription: 'Thumps under the floor, torn ducts, a musty smell through the vents? Wildlife in the crawlspace damages ducts and plumbing. Our crew removes and seals it.',
    symptom: 'You hear thumping or dragging under the floor at night, and certain rooms have picked up a musty, wild smell you cannot clean away. The floors feel oddly cold in winter, the heating bill crept up, and your dog sniffs hard at one particular foundation vent. When the heat runs, one vent blows weak and warm-earth smelling.',
    likelyCulprits: ['raccoon-removal', 'opossum-removal', 'skunk-removal', 'rat-removal'],
    whatItMeans: 'Most Georgia crawlspaces are entered the same way: a vent screen rusted through, a crawl door that no longer latches, or a gap where plumbing and duct lines pass through the foundation. Once inside, animals do expensive damage quietly. Raccoons and opossums tear down duct insulation and shred flex duct to nest in it, so your heated and cooled air pours into the crawlspace. Rats run the same routes, gnawing pipe insulation and wiring. Skunks den in the far, dry corner and make their presence known through the floor. Fallen insulation and torn vapour barrier then hold moisture against the joists, and in our humid climate that invites mould and wood rot on top of the animal problem. Where rats settle in a crawlspace, snakes eventually follow them — one more reason to close the space up properly.',
    urgency: {
      level: 'this-week',
      note: 'Crawlspace animals damage ducts and insulation a little more every week, and the repair bill grows with it. Book an inspection this week — and call us today if you smell skunk spray, find a duct hanging open, or see water or sewage under the house.'
    },
    whatWeDo: [
      'Inspect the full crawlspace — entrances, ducts, insulation, vapour barrier, and plumbing',
      'Identify the animal from sign and remove it humanely, including young denning under there',
      'Remove contaminated insulation, nesting, and droppings from the affected area',
      'Repair or flag duct and insulation damage so your heating and cooling stop leaking away',
      'Seal foundation vents with proper screens, refit the crawl door, and close every gap we found'
    ],
    whatNotToDo: [
      'Do not crawl under there to confront it yourself — low clearance, wildlife, and wiring are a bad combination',
      'Do not seal every vent shut; a crawlspace still needs managed ventilation, and trapped moisture rots joists',
      'Do not set poison for rats under the house; the dead end up under your floors and the smell comes straight up',
      'Do not ignore a weak vent or a rising heating bill — under a house, those are animal symptoms until proven otherwise'
    ],
    faqs: [
      {
        q: 'How are animals getting into my crawlspace?',
        a: 'Most often through a foundation vent with a rusted or missing screen, a loose crawlspace door, or the gaps around pipes and ducts where they pass through the foundation wall. It takes a surprisingly small opening — rats need about half an inch. Our inspection checks every vent and penetration, not just the obvious one.'
      },
      {
        q: 'What damage should I expect from crawlspace wildlife?',
        a: 'The big three are torn and nested-in ductwork, pulled-down insulation, and a shredded vapour barrier. Together they raise energy bills, hold moisture against your floor system, and spread animal odour through the vents. Caught early, the damage is often limited to one duct run and a patch of insulation; left a season, it becomes a restoration job.'
      },
      {
        q: 'There is a skunk smell coming through my floors. Is it under the house?',
        a: 'Very likely, yes — either a skunk is denning under there, or one sprayed while defending the den entrance, often after an encounter with a dog. The smell rises through floor gaps and duct chases and can linger for weeks in insulation. We locate the den, remove the skunk, and treat or replace the material holding the odour.'
      },
      {
        q: 'Can you seal the crawlspace so this never happens again?',
        a: 'We can make it very hard to re-enter: screened vents that still ventilate, a properly fitted crawl door, and sealed pipe and duct penetrations, all in materials animals cannot chew through. Combined with removing food and shelter draws around the foundation, that is what a lasting fix looks like — and we show you every entry we closed.'
      }
    ]
  }
];

const PROBLEM_SLUGS = new Set(PROBLEMS.map(p => p.slug));

function getProblemBySlug(slug) {
  return PROBLEMS.find(p => p.slug === slug) || null;
}

module.exports = { PROBLEMS, PROBLEM_SLUGS, getProblemBySlug };
