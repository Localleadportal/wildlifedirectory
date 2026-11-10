// guides.js — Evergreen guide pages for removewildlifenow.com
//
// Guides answer the questions Georgia homeowners ask before, during, and
// after a wildlife job: what it costs, what happens when they call, when
// animals are active, how attic cleanup works, what Georgia law allows,
// and how to keep wildlife out for good.
//
// Shape per entry:
//   slug            URL slug (fixed, do not rename without redirects)
//   title           <title> tag, 60 characters or fewer
//   h1              Page heading
//   metaDescription Meta description, 160 characters or fewer
//   intro           Plain introduction, roughly 100–130 words
//   sections        4–6 { heading, body } pairs; body is HTML, roughly
//                   120–200 words per section
//   faqs            4 { q, a } pairs
//
// Voice: we write as the local company doing the work — "we", "our crew",
// "call us". We are licensed and insured, offer same-day service, and are
// available 24/7. Prices in the cost guide are typical market ranges for
// guidance only; every job is quoted after inspection.

const GUIDES = [
  {
    slug: 'wildlife-removal-cost-in-georgia',
    title: 'Wildlife Removal Cost in Georgia: Price Guide',
    h1: 'What Does Wildlife Removal Cost in Georgia?',
    metaDescription: 'Typical Georgia wildlife removal price ranges by animal, what drives the cost up or down, and why every honest quote starts with an inspection. Guidance only.',
    intro: 'Every homeowner asks the same first question, and we would rather answer it straight than dodge it. Below are the typical ranges Georgia homeowners pay for wildlife removal, animal by animal, plus the adders that move a job up or down. <strong>These are typical market ranges for guidance only — every job is quoted after inspection, and we never ask anyone to rely on a table for a final price.</strong> A single squirrel in an accessible attic and a raccoon family above a cathedral ceiling are both “removal”, but they are not the same job, and no honest company can price either one sight unseen.',
    sections: [
      {
        heading: 'How to read these ranges',
        body: '<p>Think of each range as the cost of the removal itself: inspecting the property, setting and checking traps or fitting exclusion devices, and taking the animal out. It generally does not include sealing every entry point, cleaning contaminated insulation, or repairing chewed wood and wiring — those are quoted separately, and they are often where the real protection lies.</p><p><strong>These figures are typical market ranges for guidance only. Every job is quoted after inspection, and we never ask anyone to rely on a table for a final price.</strong> Two neighbouring houses on the same street in Marietta or Macon can differ by hundreds of dollars because one attic is a walk-in and the other is a low crawl over a split-level. When we inspect, we photograph what we find and price the actual job in front of us, in writing, before any work begins.</p>'
      },
      {
        heading: 'Trapping and removal: the common animals',
        body: '<p>These are the ranges we see most often across Georgia for straightforward trapping and removal work:</p><ul><li><strong>Raccoon removal:</strong> $200–$600+</li><li><strong>Squirrel removal:</strong> $200–$500+</li><li><strong>Skunk removal:</strong> $200–$500+</li><li><strong>Opossum removal:</strong> $150–$400+</li><li><strong>Snake removal:</strong> $100–$300+</li><li><strong>Armadillo removal:</strong> $250–$600+</li><li><strong>Dead animal removal:</strong> $150–$500+</li></ul><p>Where a job lands inside its range usually comes down to numbers and access. One opossum under a deck is a short job. A raccoon mother with four young in a chimney, or an armadillo that has eluded a homeowner’s own trap for a month, takes return visits, different equipment, and more time — and the price reflects that honestly rather than arriving as a surprise later.</p><p>Armadillo work is the slow game in that list: a trap has to sit on a travel route the animal actually uses, along a fence line or a foundation edge, so several nights of patience are normal — and that patience is part of what the range covers, rather than a sign that nothing is happening.</p>'
      },
      {
        heading: 'Rats, bats, and the bigger jobs',
        body: '<p>Two animals sit in their own pricing tier, for good reasons. <strong>Rat removal typically runs $300–$900+</strong>, because rats are never one animal: a proper job means finding and sealing a dozen possible entries — pipe chases, roof returns, garage seals — alongside trapping, and skipping the sealing guarantees a repeat. <strong>Bat exclusion typically runs $400–$1,500+</strong>, because the work is done entirely with one-way devices fitted by hand around every gap on a roofline, outside the maternity season, and guano cleanup is often added on top.</p><p>Colony size drives both. A small bat colony in one gable vent is at the low end; a multi-year colony across the rooflines of a large historic intown home, with guano removal and attic decontamination, is a substantially larger project, and we will lay that out line by line before you agree to anything.</p>'
      },
      {
        heading: 'What actually drives the price',
        body: '<p>Five factors explain nearly every difference between one quote and another. <strong>Access:</strong> a steep two-storey roofline, a tight crawlspace, or an animal inside a wall costs more than an open attic hatch. <strong>Colony and litter size:</strong> more animals means more visits, more devices, and more checking. <strong>Cleanup:</strong> a light scattering of droppings is a spot clean; a raccoon latrine or bat guano bed can mean insulation removal and full decontamination. <strong>Exclusion scope:</strong> sealing one chewed soffit is quick, while screening a whole roofline, chimney, and set of vents is a project of its own. <strong>Season:</strong> spring litters and the May-to-August bat maternity window change what can legally and humanely be done, and sometimes mean staging the work in two visits. When we quote, we name which of these are in play on your house — and which are not.</p>'
      },
      {
        heading: 'Exclusion, cleanup, and repair adders',
        body: '<p>Removal gets the animal out; the adders keep the problem from returning, and they are worth understanding because they often matter more than the trapping itself. <strong>Exclusion and sealing</strong> — fitting chew-resistant metal, mesh, chimney caps, and vent screens over every entry — is priced by how many openings your house has and how reachable they are. <strong>Cleanup and decontamination</strong> ranges from disinfecting a latrine site to removing and replacing contaminated insulation across a whole attic, which is priced by area and depth of contamination. <strong>Repairs</strong> cover chewed fascia and soffit, damaged duct runs, and similar harm the animals caused; electrical damage is assessed and referred to an electrician where wiring is involved. We separate these lines on every written quote, so you can see exactly what you are paying for and decide with your eyes open.</p>'
      },
      {
        heading: 'Getting a price you can trust',
        body: '<p>A trustworthy price has three things behind it: an inspection that actually happened, a written plan you can keep, and numbers that separate removal, sealing, and cleanup rather than one vague lump. Be wary of a firm quote given over the phone for an animal nobody has seen, and just as wary of a low price that only covers trapping — that animal’s replacement is already smelling your attic. When you call us, we inspect, show you the photographs, and quote the whole job: the animals out, the entries sealed, and the mess dealt with. If part of the work is optional, we say so plainly and let you choose. That is the standard we would want on our own homes, and it is the standard your quote will meet.</p>'
      }
    ],
    faqs: [
      {
        q: 'Why can’t you just give me a firm price over the phone?',
        a: 'Because the honest price depends on things we can only learn at your house: how many animals, how they got in, how much damage and contamination they left, and how reachable it all is. Anyone quoting a firm number sight unseen is guessing, and the guess usually grows once work starts. Our inspections end with a written quote for the actual job, so the price you agree to is the price of the work described.'
      },
      {
        q: 'Is it cheaper to trap the animal myself?',
        a: 'It can look that way until it isn’t. Georgia requires permits for much of this work, raccoons and skunks cannot legally be relocated, and a trap in the wrong place mostly educates the animal. The common DIY outcome we see is a trapped skunk by the deck, an animal that died in a wall, or a raccoon still in the attic a month later — each more expensive than the original call.'
      },
      {
        q: 'Does homeowners insurance pay for wildlife removal?',
        a: 'Usually not for the removal itself, and policies vary on the damage side: sudden damage from a specific incident is treated differently from gradual chewing and soiling, which most policies exclude. It is worth one call to your insurer with our written inspection notes in hand. We document damage with photographs and line items either way, which is what an insurer — or a future buyer — needs to see.'
      },
      {
        q: 'What is the most common way these jobs get more expensive?',
        a: 'Waiting. A single squirrel in March becomes a litter by April; a small rat entry becomes a colony by autumn; a raccoon latrine grows into an insulation replacement. Nearly every large quote we write traces back to a small noise someone hoped would stop. Calling while the problem is small is the one reliable way to land at the low end of any range on this page.'
      }
    ]
  },
  {
    slug: 'what-happens-when-you-call',
    title: 'What Happens When You Call a Wildlife Crew',
    h1: 'What Happens When You Call Us',
    metaDescription: 'From the first call to the final follow-up: inspection, written plan, humane removal, sealing, and cleanup — what to expect from our Georgia crew.',
    intro: 'Most people call us a little rattled — there is something thumping over the bedroom ceiling, and they have no idea what happens next or whether it involves ladders, traps, or tearing the house apart. It is far more orderly than that. This page walks through a typical job with our crew from the first phone call to the final follow-up, so you know what we will do, what we will ask of you, and what your house will look like when we leave. We are licensed and insured, we offer same-day service, and we are available 24/7 — but the part homeowners remember is that the process is calm, explained, and finished properly.',
    sections: [
      {
        heading: 'The call and the inspection',
        body: '<p>When you call, we start with questions that genuinely help: what are you hearing, seeing, or smelling, when does it happen, and where in the house is it strongest? Daytime scampering and night-time thumping point to different animals, and your answers shape what the crew brings. For emergencies — a bat in a bedroom, an animal in the living space — we come out right away, day or night.</p><p>The inspection itself covers the attic or crawlspace, the roofline, soffits and vents, and the foundation, looking at your house the way an animal does. We photograph entry points, droppings, and damage as we go, because you should be able to see exactly what we found rather than take it on faith. Most inspections take under an hour.</p>'
      },
      {
        heading: 'Your written plan and price',
        body: '<p>After the inspection we sit down with you — photos in hand — and lay out what is in your house, how it got in, and what we recommend, in plain order: removal first, then sealing, then cleanup. The quote separates those stages into clear lines so you can see what each part costs and what, if anything, is optional.</p><p>Nothing starts until you have agreed to that written plan. There are no open-ended hourly surprises and no work added mid-job without a conversation first; if we find something unexpected once we are in the attic — hidden damage, a second species — we stop, show you, and let you decide. That approach takes a few more minutes up front, and it is why our customers are never surprised by a final bill.</p>'
      },
      {
        heading: 'Removal day: methods by animal type',
        body: '<p>Removal is matched to the animal, because what works for one is wrong for another. Raccoons and opossums are usually trapped at their entry or removed by hand when young are involved, and squirrel work typically uses one-way doors that let them leave and not return. Bats are never trapped at all — they are excluded with one-way devices, outside the maternity season, so the colony leaves under its own power. Rats need trapping combined with sealing, because trapping alone never keeps pace with breeding. Snakes are taken by hand and identified on the spot.</p><p>Everything is done humanely and within Georgia law, including the rules on rabies-vector species. Where young are present, keeping the family together guides the plan — we would rather stage a job over two visits than leave babies in a wall.</p>'
      },
      {
        heading: 'Exclusion and sealing: the step that makes it last',
        body: '<p>Removal without sealing is a revolving door. Your attic holds the scent of the animals that lived there, and that scent tells the next raccoon or squirrel that this house is proven, safe shelter. So once the animals are confirmed out, we close the house up properly: chewed soffits and fascia repaired and covered, roofline gaps fitted with chew-resistant metal, vents screened, chimney capped, and foundation openings sealed.</p><p>We work through the whole structure, not just the hole the animal was using, because the second-favourite entry is the one that gets used next month. Materials matter here — foam and caulk alone are a snack, not a barrier, so we use metal and heavy-gauge mesh fixed to sound wood. When we finish, we walk the work with you and show you every point we closed.</p>'
      },
      {
        heading: 'Cleanup and decontamination',
        body: '<p>With the animals out and the house sealed, we deal with what they left behind. That can be as light as disinfecting a single latrine site or as thorough as removing contaminated insulation, treating the attic, and installing fresh material. Raccoon droppings, bat guano, and rat contamination each carry their own health considerations, and our crew works with proper protective and HEPA equipment rather than stirring contaminated dust into your home’s air.</p><p>We will always tell you honestly how much cleanup your situation actually needs. A squirrel that spent one week in a corner of the attic does not need a full restoration, and we will not sell you one. A season-long raccoon den is a different story, and we will show you the photographs that explain the difference.</p>'
      },
      {
        heading: 'Follow-up and what to watch for',
        body: '<p>A job is not finished when the truck leaves; it is finished when your house stays quiet. We check traps and one-way devices on schedule until removal is confirmed, and we follow up after sealing to make sure nothing is testing the work. If an exclusion point we fitted ever fails to do its job, tell us — we want to know and we will come and look.</p><p>We also leave you with a short watch list: fresh noises at dawn or dusk, new droppings, a gap reappearing after a storm lifts a soffit or drops a limb on the roof. Georgia weather works on houses constantly, and a five-minute look after big storms catches most new entries while they are still small. Spot something? Call us, describe it, and we will tell you honestly whether it needs a visit.</p>'
      }
    ],
    faqs: [
      {
        q: 'How fast can you get to my house?',
        a: 'We offer same-day service across our Georgia service area, and we are available 24/7 for genuine emergencies like a bat in a bedroom or an animal loose in the house. Non-urgent inspections are booked promptly and we will give you a real arrival window, not an all-day wait. When you call, tell us what is happening and we will triage it honestly with you.'
      },
      {
        q: 'Do I need to be home during the work?',
        a: 'For the inspection and the plan, yes — we want to walk through what we found with you and answer questions in person. For follow-up trap checks and exterior sealing, many customers simply arrange access with us in advance. We will agree the arrangement job by job, and we never enter your home without it being settled first.'
      },
      {
        q: 'Are the animals hurt by any of this?',
        a: 'Our methods are humane and follow Georgia law: live trapping, one-way exclusion doors, and hand removal of young, with bats excluded under their own power outside maternity season. Rabies-vector species such as raccoons and skunks are handled under state rules that do not allow relocation, and we will explain exactly what that means for your job before we start. No poisons, ever — they are cruel, and they create dead animals in walls.'
      },
      {
        q: 'What should I do before your crew arrives?',
        a: 'Very little. Keep pets away from the area where the animal is, note when you hear or smell the problem most strongly, and — if you can do it safely from the ground — take a phone photo of any hole or damage you have spotted. Please do not block an entry hole or set your own traps in the meantime; an undisturbed pattern is the most useful thing you can hand us.'
      }
    ]
  },
  {
    slug: 'georgia-wildlife-calendar',
    title: 'Georgia Wildlife Calendar: Animals by Season',
    h1: 'A Georgia Wildlife Calendar for Homeowners',
    metaDescription: 'When raccoons den, when bat exclusion pauses for maternity season, when snakes move and armadillos dig — a two-month-by-two-month guide for Georgia homes.',
    intro: 'Wildlife problems in Georgia run on a calendar, and knowing it puts you a step ahead of the animals. Our humid subtropical seasons mean something is denning, dispersing, or looking for a way into your house in every month of the year — but not the same something, and not for the same reasons. The pattern below follows the year two months at a time: when raccoon and squirrel litters arrive in attics, why bat work pauses in summer, when young animals strike out on their own and end up in the wrong houses, and when a winter death in a wall is most likely. Use it to time prevention work — and to know when a noise deserves a call today.',
    sections: [
      {
        heading: 'January – February: winter shelter and the start of denning',
        body: '<p>Deep winter pushes wildlife toward heated structures. Rats and squirrels that entered in autumn settle into attics and walls, and animals that shelter in crawlspaces — opossums, skunks, raccoons — stay close to the warmth leaking through your floors. This is also when winter wall deaths happen: an old or sick rat, squirrel, or opossum dies in a wall void, and a warm spell brings the smell out all at once.</p><p>By February, raccoon and squirrel denning season opens. Pregnant females start inspecting soffits, chimneys, and hollow spots looking for a nursery, weeks before the litters arrive. If you are going to seal a roofline or cap a chimney this year, late winter — before the mothers move in — is the smartest money you will spend.</p>'
      },
      {
        heading: 'March – April: babies in the attic',
        body: '<p>Spring is nursery season in Georgia attics. Raccoon litters arrive from February into April, and gray squirrels raise their first litter of the year in the same window, so a scratching noise in March is very often a mother with young. That changes the job: removal has to account for babies that cannot move on their own, and sealing an entry now, with young inside, is the worst mistake a homeowner can make.</p><p>Snakes come back on the move as soil warms, following frogs and rodents around foundations, and skunks dig busily for grubs in soft spring lawns. The pine canopy leafs out, squirrels get harder to spot on the roof, and Chattahoochee corridor homes see heavy raccoon traffic between the river bottoms and the attics above them.</p>'
      },
      {
        heading: 'May – June: bat maternity season begins',
        body: '<p>From May, Georgia’s bat colonies are raising pups that cannot fly — and that fact governs all bat work until August. Exclusion is paused during maternity season, because sealing or fitting one-way devices now would separate mothers from pups and leave flightless young to die in the attic. If bats are your problem in May or June, we inspect, document the entries, and schedule the exclusion for the moment the season closes, rather than break rules that exist for good reason.</p><p>Everything else is busy too: young raccoons start exploring beyond the den, chimney swifts return to nest in uncapped flues for the summer, and armadillos — active year-round in Georgia — dig hard in irrigated lawns as the soil dries elsewhere. Summer thunderstorms also drop limbs on roofs, opening brand-new entries overnight.</p>'
      },
      {
        heading: 'July – August: heat, juveniles, and the bat window reopening',
        body: '<p>High summer attic temperatures push some animals out and cook the ones that die in walls into an unforgettable smell within days — July and August are peak months for dead-animal calls. Young raccoons and opossums born in spring begin shadowing their mothers on nightly rounds, learning the routes to your trash cans and pet food, and skunk kits start appearing at dusk along fence lines.</p><p>The big change lands in August: bat pups are flying, maternity season ends, and bat exclusion reopens. Homeowners who documented a colony in June should book early — every colony in Georgia becomes eligible at once, and the late-summer calendar fills fast. Sealing work done now also beats the autumn rush, when squirrels start house-hunting for winter.</p>'
      },
      {
        heading: 'September – October: dispersal and house-hunting',
        body: '<p>Autumn is moving season. From August through November, juvenile raccoons, squirrels, opossums, and skunks disperse from their mothers and look for territory of their own — and a young animal’s first choice of shelter is very often somebody’s attic, deck, or crawlspace. Gray squirrels raise a second litter around late summer, then spend the autumn gnawing entries wider and caching food in insulation.</p><p>Snakes move again in the autumn as temperatures fall, hunting heavily before winter and turning up in garages, basements, and crawlspaces along the way. Rats begin their annual push indoors as outdoor food fades. The practical takeaway: October is the best month of the year for a prevention inspection, because every animal in the neighbourhood is currently reading your roofline like a rental listing.</p>'
      },
      {
        heading: 'November – December: winter tenants settle in',
        body: '<p>As nights turn cold, the year’s tenants settle. Animals that secured an attic or crawlspace in autumn now stay put, which is why a noise that began in November rarely resolves by itself — it hibernates, denning quietly through to spring litters. Skunks slow down but do not truly hibernate in Georgia’s mild winters, and they will spray a curious dog at the deck steps in December as readily as in June.</p><p>Holiday season adds its own hazards: firewood stacked against the house shelters rats and snakes, and a fire lit in a chimney that hosted swifts all summer needs a clear flue first. Wrap up the year by checking the entries you know about, capping what is open, and noting any new noises — winter is when we would rather catch a tenant than meet its whole family in March.</p>'
      }
    ],
    faqs: [
      {
        q: 'When is the worst time of year for animals in the attic?',
        a: 'Late winter through spring, when raccoon and squirrel mothers are actively choosing dens and litters arrive from February onward. A close second is autumn dispersal, when this year’s young animals look for their first homes. If your roofline has gaps, those are the two seasons when something is most likely to move in — sealing before either window is the real fix.'
      },
      {
        q: 'Why won’t you exclude my bats in June?',
        a: 'Because June bats have pups that cannot fly. Excluding then would trap the young inside to die and drive mothers to force their way into living spaces trying to reach them — a worse problem in every direction, and contrary to the protections Georgia bats are under. We will inspect, map every entry, and book the exclusion for August, when the whole colony can leave safely under its own power.'
      },
      {
        q: 'Are armadillos really a year-round problem in Georgia?',
        a: 'Yes. Armadillos do not hibernate, and Georgia’s winters are mild enough that they feed and dig through most of it, slowing only in hard cold snaps. Their digging peaks when lawns are irrigated and grub-rich in summer, but fresh armadillo holes in January surprise nobody on our crew. Trapping works in every month; the calendar mainly changes how much damage a week of waiting costs your yard.'
      },
      {
        q: 'I only hear noises in winter. Should I wait for spring to call?',
        a: 'No — winter tenants are spring’s denning mothers. An animal that spends the winter in your attic is already home, and February to April litters will follow in the same space. Winter removal is often the cleanest version of the job: no young to work around yet, full access for sealing, and the house closed up before denning season opens.'
      }
    ]
  },
  {
    slug: 'attic-cleanup-and-restoration',
    title: 'Attic Cleanup & Restoration After Wildlife',
    h1: 'Attic Cleanup and Restoration After Wildlife',
    metaDescription: 'Droppings, guano, and soiled insulation carry real health risks. How attic cleanup and decontamination work, when you need it — and when you honestly don’t.',
    intro: 'Getting the animal out is only half the job. What it left behind — droppings worked into the insulation, a raccoon latrine in the corner, bat guano under the ridge — stays in your attic long after the noises stop, and it is not harmless dust. This guide explains the real health risks in plain terms, how our crew decides how much cleanup a given attic honestly needs, and what proper decontamination and restoration actually involve, step by step. It also says the part some companies skip: plenty of attics need only a targeted clean, not a full restoration, and we will tell you which one you are looking at before we quote anything.',
    sections: [
      {
        heading: 'The health risks, stated plainly',
        body: '<p>Two hazards deserve specific mention. <strong>Histoplasmosis</strong> is a lung infection caused by a fungus that grows in bat guano and older bird droppings; its spores become airborne when dry guano is disturbed, which is why sweeping a guano bed with a household broom is precisely the wrong move. <strong>Raccoon roundworm</strong> is the second: raccoon latrines can contain eggs that remain viable in soil and insulation for years, are not killed by most disinfectants, and are a serious risk if ingested — a particular concern where children or pets could contact contaminated material brought down from the attic.</p><p>Rat and general droppings add leptospirosis and ordinary bacterial contamination, and all of it soaks scent into insulation that advertises your attic to the next animal. None of this means panicking — it means cleaning with the right equipment and method.</p>'
      },
      {
        heading: 'How we assess: when cleanup is and isn’t needed',
        body: '<p>Not every animal visit earns a restoration. A squirrel that spent a week in one corner, left a handful of pellets, and caused no soiling of insulation usually needs removal, sealing, and a targeted disinfection of that corner — nothing more. We will say so, and price so.</p><p>Full cleanup comes into play when contamination is broad or concentrated: an established raccoon latrine, guano accumulated over seasons, insulation visibly matted and urine-soaked across a wide area, or droppings anywhere near the air handler, where the system can distribute dust through the house. During inspection we photograph the extent, show you the difference between a spot job and a genuine restoration, and quote the level your attic actually needs — the assessment is evidence-based, not a package we sell everyone.</p>'
      },
      {
        heading: 'Removing contaminated insulation',
        body: '<p>Where insulation is contaminated through, it has to come out — there is no spray that restores urine-soaked, droppings-laden batts to clean condition, and rolling fresh material over the top just seals the problem in. Our crew works in protective equipment with HEPA-filtered vacuum equipment designed for this material, removing affected insulation in sealed bags through the attic hatch rather than through your living space.</p><p>Latrine sites get particular attention: the decking and joists beneath a raccoon latrine are scraped and treated as well as the insulation above them, because roundworm eggs persist on surfaces, not just in loose material. Everything removed leaves the property with us for proper disposal. The attic ends this stage bare, visible, and ready for honest inspection of the structure itself — including the chewed wiring and duct damage that insulation was hiding.</p>'
      },
      {
        heading: 'Decontamination, step by step',
        body: '<p>With contaminated material out, we treat the attic itself. Surfaces are vacuumed with HEPA equipment to lift remaining dust without spreading it, then disinfected with products chosen for the contamination present — bacterial and viral soiling from rats and raccoons, fungal risk where guano was present. Latrine boards and stained joists are treated directly, and heavily affected wood can be sealed with an encapsulant coat once disinfected, locking any residual staining and odour into the wood rather than the air.</p><p>Deodorising is the final part of this stage, and it works because the source material is gone — treatments applied over contamination merely perfume it for a fortnight. Throughout, the attic hatch is sealed off from the house and the work area is contained; your living space should smell like nothing happened, in every sense.</p>'
      },
      {
        heading: 'Restoring the attic: insulation and sealing',
        body: '<p>Restoration puts the attic back to doing its job. Fresh insulation is installed to the depth your home needs — which matters in Georgia, where attic insulation is your main defence against summer cooling bills as much as winter heating — and baffles and ventilation paths are checked so the new material does not block soffit airflow. If animals damaged ducts, that repair belongs in this stage too, before new insulation buries the evidence.</p><p>Sealing is finished, or re-checked, alongside restoration: every entry point closed in chew-resistant material, because new insulation in an unsealed attic is just fresh nesting for the next tenant. When we are done you get a clean, sealed, properly insulated attic and photographs of the finished work — the before-and-after set is the most satisfying part of the whole job.</p>'
      }
    ],
    faqs: [
      {
        q: 'Can I just leave the droppings and put new insulation over them?',
        a: 'We strongly advise against it. The contamination stays biologically active underneath, the scent keeps drawing new animals to the attic, and the problem surfaces later anyway — often during a home sale inspection, at the worst possible moment. If contamination is light, targeted removal is quick and inexpensive; if it is heavy, covering it does not make it gone, just hidden.'
      },
      {
        q: 'Is it safe for my family to be in the house during cleanup?',
        a: 'Yes, with the way we work. The attic is contained at the hatch, contaminated material is vacuumed with HEPA equipment and bagged before it comes down, and nothing is dry-swept into the air. If your situation involves an unusually heavy guano accumulation, we will discuss whether anyone with respiratory sensitivities should be out for a few hours — and we will tell you that before work starts, not during.'
      },
      {
        q: 'Will cleanup get rid of the smell in my house?',
        a: 'In nearly every case, yes — because odour lives in the contaminated material, and cleanup removes the material. Smells that persist after a proper clean usually trace to a spot outside the attic: a wall void or crawlspace section the animal also used. That is worth a follow-up look, and it is one reason our inspection covers the whole structure rather than the attic alone.'
      },
      {
        q: 'How soon after removal should cleanup happen?',
        a: 'Soon — ideally as one continuous job: animals out, entries sealed, cleanup and restoration immediately after. That order matters. Cleaning before sealing invites a new animal into a fresh attic, and waiting months lets contamination dry, spread, and work deeper into wood. Where a job has to be staged — bat maternity season is the usual reason — we will agree the schedule with you up front.'
      }
    ]
  },
  {
    slug: 'georgia-wildlife-laws-and-permits',
    title: 'Georgia Wildlife Laws, Permits & Homeowner Rules',
    h1: 'Georgia Wildlife Laws and Permits: What Homeowners Need to Know',
    metaDescription: 'Georgia DNR trapping licences and nuisance wildlife permits, why raccoons and skunks can’t be relocated, bat and bird protections, and what you may do yourself.',
    intro: 'Georgia homeowners are often surprised to learn that wildlife removal is regulated work. Who may trap what, which animals can never be relocated, when bats must be left alone, and what you are allowed to do yourself are all set by state and federal rules — not by what seems kindest or most convenient in the moment. This guide lays out the framework our crew works under every day: the Georgia Department of Natural Resources licensing and permit structure, the rabies-vector rules, and the protections for bats and migratory birds. It is general information, not legal advice — but it will explain why we do some things the way we do, and why we decline to do others at all.',
    sections: [
      {
        heading: 'The Georgia DNR framework: licences and permits',
        body: '<p>Wildlife control work in Georgia sits under the Georgia Department of Natural Resources. Trapping wildlife generally requires a <strong>Georgia trapping licence</strong>, and removing nuisance wildlife for other people, as a business, requires a <strong>Nuisance Wildlife Control Permit</strong> on top of it. Those credentials govern which species the holder may take, what methods are lawful, how often traps must be checked, and how animals must be handled and reported.</p><p>For a homeowner, the practical meaning is simple: the person working on your house should hold the right permit for the animal in your attic, and asking to see it is a fair question we are always happy to answer. Our crew works licensed and insured under this framework. It is also why some requests get a polite no from any legitimate operator — the permit sets the boundaries of the work, not the customer’s preference or ours.</p>'
      },
      {
        heading: 'Rabies-vector species: no relocation, no release',
        body: '<p>Raccoons and skunks are rabies-vector species in Georgia, and the rule that follows surprises many people: <strong>they cannot legally be trapped and relocated or released elsewhere in Georgia.</strong> Moving a raccoon across the county does not save it — it exports a possible rabies risk to a new area, and relocated animals usually die anyway, dumped into territory already held by others with no known food, water, or shelter.</p><p>That is why legitimate raccoon and skunk work focuses on exclusion where possible — one-way doors for animals in structures — and why trapped rabies-vector animals are handled as the law directs rather than “taken to the woods”. We explain this to customers up front, before traps are set, so there are no surprises. It is also the strongest reason not to trap a raccoon yourself: the moment it is in your trap, you own a legal and safety problem with no easy kind option.</p>'
      },
      {
        heading: 'Bats: protection and the maternity season',
        body: '<p>Bats are beneficial, declining, and protected — Georgia’s bat species eat enormous numbers of insects, and their colonies are safeguarded by state rules that shape how removal may happen. The central principle is that bats are never trapped, poisoned, or sealed in: they are <strong>excluded</strong>, fitted with one-way devices that let the colony leave at dusk and not re-enter, and the entries are sealed only once the roost is empty.</p><p>The maternity season is the hard boundary. From May through August, bat pups are born flightless in Georgia attics, and exclusion during that window is paused — it would strand the young inside and drive mothers into living spaces. Work in those months is inspection, documentation, and scheduling. Separately: never handle a bat you find. A bat in a living space, or any contact between a bat and a person or pet, should go through your county health department, which handles rabies testing and exposure advice.</p>'
      },
      {
        heading: 'Migratory birds and other protected species',
        body: '<p>Federal law protects migratory birds, and the species Georgia homeowners meet most often is the chimney swift — the noisy summer tenant of uncapped flues. Active swift nests cannot be disturbed, removed, or blocked; the lawful and practical response is to wait the few weeks until the young fledge and the birds leave on migration, then cap the chimney so the question never comes up again. Most native birds, their nests with eggs or young, and a long list of other native species carry similar protections.</p><p>Non-native species sit at the other end of the scale: roof rats, house sparrows, and European starlings have no such protections, which is part of why rat work can proceed year-round. Part of our inspection on any bird or unusual-animal call is confirming exactly which species — and therefore which rules — we are dealing with before anything is touched.</p>'
      },
      {
        heading: 'What homeowners may — and may not — do themselves',
        body: '<p>Georgia homeowners have more room to act than many expect, and less than some assume. You may generally protect your own property: sealing holes and gaps (once you are certain nothing is inside), screening vents, capping chimneys, removing food attractants, and frightening an animal off your porch are all fair game, and our prevention guide encourages exactly that.</p><p>The lines are here: do not trap and move a raccoon or skunk — relocation of rabies-vector species is not lawful, however kind it feels. Do not handle bats, ever; route any exposure through your county health department. Do not disturb an active nest of a protected bird. Do not use poisons for animals in a structure — they create dead animals in walls and endanger pets and wildlife that scavenge them. And once work involves trapping protected or regulated species, entering attics commercially, or handling a colony, it is permit-holder work. Call us and we will tell you honestly where the line falls on your situation.</p>'
      }
    ],
    faqs: [
      {
        q: 'Do I need a permit to remove an animal from my own attic?',
        a: 'Prevention and sealing on your own home are yours to do. Trapping is where permits begin to bite: Georgia trapping is licensed activity, rabies-vector species cannot be relocated at all, and bats and protected birds are governed by their own rules regardless of whose attic it is. If your plan involves a trap, check before you set it — or call us and we will tell you plainly whether your situation is DIY territory or permitted work.'
      },
      {
        q: 'Why can’t you just release this raccoon in the woods somewhere?',
        a: 'Two reasons, one legal and one practical. Legally, raccoons are a rabies-vector species in Georgia and relocating or releasing them is not permitted — moving them spreads rabies risk to new areas. Practically, relocated raccoons usually die: they are dropped into occupied territory with no known shelter or food. Exclusion — letting the animal leave your house through a one-way door and sealing behind it — is the humane and lawful answer whenever a structure is involved.'
      },
      {
        q: 'I found a bat in my bedroom. What does the law expect me to do?',
        a: 'Keep people and pets away from it, do not handle it, and contact your county health department, which manages rabies testing and can advise on exposure — especially if anyone slept in the room, since bat contact can go unnoticed. If the bat needs to be captured for testing, we can do that safely. Excluding the colony from your attic is then scheduled within the seasonal rules.'
      },
      {
        q: 'My neighbour is feeding raccoons. Is that allowed?',
        a: 'Feeding wildlife is strongly discouraged in Georgia and can be restricted locally, and it reliably creates exactly the problems on this page: bold raccoons, skunk traffic, and animals denning in the nearest structures — often not the feeder’s own house. A polite conversation solves most cases; your county animal control office can advise if it does not. Meanwhile, securing your own trash, pet food, and entries is fully within your control.'
      }
    ]
  },
  {
    slug: 'keep-wildlife-out',
    title: 'Keep Wildlife Out: Prevention Guide for Georgia',
    h1: 'Keep Wildlife Out: A Prevention Guide for Georgia Homes',
    metaDescription: 'Seal the roofline, cap the chimney, screen the vents, fix food and habitat draws, and inspect yearly — the routine that keeps Georgia wildlife out.',
    intro: 'Every removal job we finish ends with the same conversation: how do we make sure this never happens again? The honest answer is that prevention is not one product or one visit — it is a short list of habits applied to a Georgia house, where humid air rots trim, pine limbs lean over roofs, and something hungry is awake in every season. This guide walks through the whole routine our crew recommends: the roofline and soffits where most animals enter, chimneys and vents, the food and habitat draws in the yard, and an annual inspection that catches new gaps while they are still a tube-of-sealant problem rather than a removal job.',
    sections: [
      {
        heading: 'Seal the roofline and soffits first',
        body: '<p>Most attic invasions start at the roofline, because that is where a house ages fastest in Georgia’s humidity: fascia boards rot behind gutters, soffit panels lift and crumble, and the joint where two roof planes meet opens a gap nobody sees from the ground. Squirrels need a hole the size of a tennis ball; rats need half an inch; bats need less than that. Work the whole perimeter methodically — soffits, fascia, roof returns, gable ends, and anywhere a dormer or porch roof meets the main structure.</p><p>Materials decide whether the fix lasts. Expanding foam and caulk alone are chewing practice for squirrels and raccoons; entry points should be closed with solid backing, metal flashing, or heavy-gauge galvanised mesh fixed into sound wood. Where trim is rotted, replace the wood rather than armouring rot — a barrier screwed into soft fascia is a barrier scheduled to fall out.</p>'
      },
      {
        heading: 'Chimney caps and vent screens',
        body: '<p>Three openings are responsible for a huge share of our calls, and all three are closable in an afternoon. An <strong>uncapped chimney</strong> is a hollow tree to raccoons, swifts, bats, and squirrels — fit a correctly sized cap, after confirming the flue is empty. <strong>Dryer, bathroom, and kitchen vents</strong> with broken or missing flaps are open doors for birds, bats, and rats; screen them with proper covers that still let the vent do its job. <strong>Gable and ridge vents</strong> with torn or builder-grade screening invite bat colonies and rat traffic; re-screening them with sturdy mesh is unglamorous and extremely effective.</p><p>Do the same check at ground level: crawlspace vents with rusted screens and a crawl door that no longer latches are how skunks, opossums, and raccoons get under the house. Screening a vent is not sealing a vent — airflow is preserved, animals are not.</p>'
      },
      {
        heading: 'Trash, pet food, and the bird feeder problem',
        body: '<p>Animals den where the eating is reliable. The three biggest draws at a Georgia home are unsecured trash, pet food left outside, and seed scattered under bird feeders — which feeds raccoons, opossums, rats, and armadillos hunting the insects and worms beneath it as reliably as it feeds cardinals. Use cans with latching lids, bring pet food in at night, and feed pets indoors where you can. If you keep feeders, place them away from the house, use a baffle, and sweep spilled seed rather than letting it accumulate in the beds against the foundation.</p><p>Round out the kitchen audit: fallen fruit cleaned up under fig and pecan trees, a grill that is not a grease buffet, and no food scraps in an open compost heap. You will not starve the neighbourhood wildlife — you are simply making your house the least interesting stop on the nightly route.</p>'
      },
      {
        heading: 'Yard habitat: limbs, woodpiles, and shelter',
        body: '<p>Squirrels treat an overhanging limb as a front door with a welcome mat. Cut tree limbs back so nothing branches within roughly eight to ten feet of the roof — in Georgia’s pine canopy that is a recurring chore, not a one-time job, because everything here grows like it is being paid to. The same tidy-up applies at ground level: firewood stacked against the house shelters rats and the snakes that hunt them, so move the stack away from the foundation and up off the ground. Dense brush and untrimmed beds along the walls hide foundation gaps and give skunks and opossums covered travel routes to them.</p><p>Under decks and sheds, the fix is a barrier, not hope: galvanised mesh trenched below grade and bent outward stops digging tenants from moving in. A yard can be beautiful, shaded, and full of birdsong while still being a poor choice of den — that is the balance to aim for.</p>'
      },
      {
        heading: 'The annual inspection habit',
        body: '<p>Houses change every year, and prevention is mostly noticing. Once a year — autumn is ideal, before winter tenants settle and after summer storms have had their turn — walk your house the way an animal reads it. From the ground: soffits intact, vents screened, chimney capped, no new gaps where limbs have rubbed or flashing has lifted. After any big storm, add a quick second look; a lifted soffit panel is an open invitation within days, and squirrels find new holes faster than homeowners do.</p><p>Indoors, put your head in the attic once a year with a torch: fresh droppings, new daylight at the eaves, or disturbed insulation are early warnings worth acting on while they are small. If you would rather not climb, call us — a prevention inspection is a normal part of our work, and it is the cheapest visit we make. Every animal on our trucks was once a small gap somebody meant to get to.</p>'
      }
    ],
    faqs: [
      {
        q: 'What is the single most effective thing I can do to keep wildlife out?',
        a: 'Seal the roofline properly — soffits, fascia, roof returns, and gable vents closed in materials animals cannot chew, with a chimney cap on top. Most attic problems in Georgia enter through that perimeter, and closing it ends access for squirrels, raccoons, rats, and bats in one project. Food and habitat fixes matter, but they come second to a house that physically cannot be entered.'
      },
      {
        q: 'Will mothballs, lights, or ultrasonic gadgets keep animals away?',
        a: 'In our experience, no — and mothballs are a genuine hazard to people and pets used off-label in attics. Animals habituate to lights, sounds, and smells within days, especially when the prize is a proven den. The money those products cost over a year or two would cover a good share of real sealing, which works on the thousandth night exactly as it did on the first.'
      },
      {
        q: 'I feed birds and love my feeders. Do I really have to give them up?',
        a: 'No — manage them instead. Mount feeders on baffled poles away from the house and out of leaping range of fences and limbs, choose feeders that close under a raccoon’s weight, and keep the ground beneath swept. Most feeder problems come from seed raining into the beds against the foundation all season. Keep the birds; move the buffet away from your walls.'
      },
      {
        q: 'How often should I re-check my house after it has been sealed?',
        a: 'Once a year, plus a quick look after severe storms. Sealing is durable, but houses are not static: trim rots in Georgia humidity, limbs grow and fall, and other trades open gaps when roofs, gutters, or siding are serviced. A short annual check protects the investment you made in exclusion — and anything you catch early is a repair, not a removal.'
      }
    ]
  }
];

const GUIDE_SLUGS = new Set(GUIDES.map(g => g.slug));

function getGuideBySlug(slug) {
  return GUIDES.find(g => g.slug === slug) || null;
}

module.exports = { GUIDES, GUIDE_SLUGS, getGuideBySlug };
