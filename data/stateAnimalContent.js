// State × animal content — the localized substance for state-level animal pages
// (e.g. /georgia/raccoon-removal/). This is the layer that sits between the
// national animal page (/services/raccoon-removal/) and the county-animal hubs
// (/georgia/cobb-county/raccoon-removal/).
//
// IMPORTANT: these pages must be GENUINELY localized — real state-specific
// behavior, regional variation within the state, seasonal timing, and the state
// wildlife authority's rules — NOT the national page with the state name
// find-replaced. Pull baseline state facts from data/stateContent.js and expand
// them per animal here.
//
// Shape per (state, animalSlug):
//   metaTitle        string  — natural phrasing, e.g. "Georgia Raccoon Removal"
//   metaDescription  string  — uses "raccoon removal in Georgia" the way people search
//   h1               string? — visible <h1> (falls back to "<State> <Animal>")
//   heroSub          string  — one-line intro under the H1
//   leadParagraph    string  — "what makes <state> <animal> different" (HTML ok)
//   extendedBody     string  — the unique, multi-section localized body (HTML).
//   index            bool?   — explicit per-page opt-in. The page is indexable
//                              ONLY when this is true (and the pair is listed in
//                              permanentlyIndexed.json -> stateAnimals).
//   faqs             [{q,a}] — 2–4 state-specific Q&As (drive visible FAQ + JSON-LD)
//
// Indexability is still fully manual: authoring content here does NOT index the
// page. Two opt-in gates are required — add "<State>|<animal-slug>" to
// permanentlyIndexed.json -> stateAnimals AND set index: true on the entry here.

const STATE_ANIMAL_CONTENT = {
  'Georgia': {
    'raccoon-removal': {
      index: true,
      metaTitle: 'Georgia Raccoon Removal | Licensed Local Trappers Statewide',
      metaDescription: 'Raccoon removal in Georgia — licensed local trappers for attic raccoons, denning females, and roundworm cleanup. Georgia DNR-compliant, humane methods. Find help in your county.',
      h1: 'Georgia Raccoon Removal',
      heroSub: 'Connect with a licensed Georgia raccoon trapper — attic exclusion, humane removal, and Georgia DNR-compliant cleanup. Local contractors serving counties across the state.',
      leadParagraph: "Georgia's mild climate keeps raccoons active and breeding nearly year-round, so attic intrusions here aren't confined to one short season the way they are farther north. The heaviest denning push comes in <strong>February and March</strong>, when females move into attics, chimneys, and soffits to raise their litters — but calls continue through summer as juveniles disperse, and pick up again in fall as raccoons fatten up for winter. From metro Atlanta's wooded suburbs to the older housing stock of the Piedmont and the long-season coastal plain, the raccoon is consistently one of the most common — and most destructive — nuisance animals Georgia homeowners deal with.",
      extendedBody: `
<h2>Where Raccoons Are a Problem in Georgia</h2>
<p>Because Georgia stretches from the Blue Ridge Mountains down to the Atlantic coastal plain, raccoon pressure looks different depending on where you live:</p>
<ul class="wildlife-list">
  <li><strong>Metro Atlanta (Fulton, Cobb, DeKalb, Gwinnett, Cherokee)</strong> — the highest call volume in the state. Dense, wooded suburbs put mature trees right up against rooflines, giving raccoons easy access to soffits, ridge vents, and chimneys. Overhanging limbs are the single most common highway onto a roof.</li>
  <li><strong>North Georgia mountains &amp; the Piedmont</strong> — mature hardwood forest plus older housing stock with aging soffits, fascia, and uncapped masonry chimneys. Raccoon and squirrel intrusions often overlap here, and chimneys are a favorite denning site for females in late winter.</li>
  <li><strong>Coastal plain &amp; the Savannah area</strong> — a longer warm season means a longer active season. Raccoons here lean more on crawlspaces, sheds, and under-structure dens, and pressure runs heavier alongside opossums and snakes.</li>
</ul>

<h2>Raccoon Season &amp; Behavior in Georgia</h2>
<p>Raccoons are active in Georgia all twelve months, but the calendar still matters. Denning females drive the late-winter spike — roughly <strong>February through April</strong> — when a pregnant or nursing raccoon tears into an attic or chimney to raise her young. Once pups are born, an exclusion done carelessly can seal flightless young inside the structure, so reputable Georgia trappers confirm whether a litter is present and evict the family together before sealing up. Summer brings a second wave as juveniles disperse and look for their own dens, and fall pushes raccoons to feed heavily and seek warm winter shelter.</p>

<h2>Health Risks: Roundworm and Rabies</h2>
<p>Raccoon latrines carry <strong>raccoon roundworm (<em>Baylisascaris procyonis</em>)</strong>, whose eggs can remain infectious in attic insulation and soil long after the animal is gone — which is why professional decontamination, not just trapping, is the standard in Georgia. Raccoons are also a primary carrier of the raccoon rabies variant found across the eastern United States, so a raccoon that is active in daylight, disoriented, or aggressive should never be approached. These two risks are the main reason DIY raccoon removal is a bad idea in Georgia: get a licensed operator who can trap, remediate, and exclude safely.</p>

<h2>Georgia DNR Rules for Raccoon Removal</h2>
<p>Wildlife removal in Georgia is regulated by the <strong>Georgia Department of Natural Resources (DNR)</strong>, and the raccoon is classified as a rabies-vector species. Under Georgia law (O.C.G.A. 27-2-10), transporting a live raccoon without a DNR permit is illegal, so a homeowner generally cannot trap a raccoon and release it elsewhere. Licensed nuisance-wildlife operators handle trapped raccoons according to Georgia DNR rabies-vector protocols. Every contractor in our directory holds the required Georgia permits and follows humane, legal methods.</p>

<h2>What a Georgia Raccoon Removal Job Includes</h2>
<ul class="wildlife-list">
  <li><strong>Inspection</strong> — locating every entry point and confirming whether a denning female and pups are present.</li>
  <li><strong>Humane removal</strong> — live trapping, or evicting a mother and her young together so none are sealed inside.</li>
  <li><strong>Exclusion</strong> — sealing soffit returns, gable and ridge vents, and chimney chases with galvanized steel mesh and proper chimney caps so raccoons can't get back in.</li>
  <li><strong>Decontamination</strong> — removing roundworm-contaminated insulation and latrines, then sanitizing the attic or crawlspace.</li>
  <li><strong>Repair</strong> — restoring the damaged soffit, fascia, insulation, and entry points.</li>
</ul>
`,
      faqs: [
        {
          q: 'When do raccoons get into attics in Georgia?',
          a: "Raccoon denning activity in Georgia peaks in February and March, when females seek out attics, chimneys, and soffits to raise their litters. Because Georgia's climate is mild, raccoons stay active year-round, with a second wave of intrusions in summer as juveniles disperse and again in fall as they look for warm winter shelter."
        },
        {
          q: 'Are raccoons regulated in Georgia?',
          a: 'Yes. Wildlife removal in Georgia is regulated by the Georgia Department of Natural Resources (DNR), which classifies the raccoon as a rabies-vector species. Under Georgia law (O.C.G.A. 27-2-10), transporting a live raccoon without a DNR permit is illegal, so trapped raccoons are handled by licensed nuisance-wildlife operators under Georgia DNR rabies-vector protocols. Every contractor in our directory holds the required Georgia permits and uses humane, legal methods.'
        },
        {
          q: 'Is it safe to remove a raccoon myself in Georgia?',
          a: 'It is not recommended. Raccoons in Georgia can carry the raccoon rabies variant, and their droppings carry raccoon roundworm (Baylisascaris), whose eggs stay infectious in attic insulation. A licensed Georgia operator can trap the animal, decontaminate the attic, and seal entry points safely — DIY removal usually leaves the health hazard and the entry holes behind.'
        },
        {
          q: 'How much does raccoon removal cost in Georgia?',
          a: 'Raccoon removal in Georgia typically runs $200–$600+ for trapping and removal. If raccoons have been living in an attic, full remediation — cleanup, decontamination, insulation replacement, and entry-point sealing — generally adds $800–$2,500+ depending on colony size and damage. Contractors in our directory provide free property-specific estimates.'
        }
      ]
    },
    'squirrel-removal': {
      index: true,
      metaTitle: 'Georgia Squirrel Removal | Licensed Local Trappers Statewide',
      metaDescription: 'Squirrel removal in Georgia — licensed local trappers for attic squirrels, gray and fox squirrels, and chewed-wire repair. Georgia DNR-compliant, humane exclusion. Find help in your county.',
      h1: 'Georgia Squirrel Removal',
      heroSub: 'Connect with a licensed Georgia squirrel trapper for attic and roofline intrusions — humane one-way exclusion, steel entry sealing, and insulation repair. Local pros serving counties from metro Atlanta to the coast.',
      leadParagraph: "Georgia's long, warm season is the single biggest reason squirrel problems here behave differently than they do up north. Where a northern homeowner mostly fights one cold-weather denning push, Georgia squirrels breed in <strong>two overlapping cycles</strong> — late winter and mid-to-late summer — and stay active every month of the year. That means attic intrusions, chewed soffits, and 5 a.m. ceiling scratching aren't a seasonal nuisance in Georgia; they're a near year-round one. Pressure also shifts sharply across the state: metro Atlanta's wooded subdivisions generate the heaviest call volume, the Piedmont and north Georgia mountains add older, easier-to-breach housing stock, and the Coastal Plain's humidity speeds up the wood rot that opens new entry points.",
      extendedBody: `
<h2>Gray vs. Fox Squirrels Across Georgia</h2>
<p>Knowing which squirrel you're dealing with tells a Georgia contractor a lot about the job before the inspection even starts, and the species mix shifts with where you live in the state:</p>
<ul class="wildlife-list">
  <li><strong>Eastern gray squirrel</strong> — the default attic intruder across metro Atlanta and the Piedmont. Smaller and more agile, grays thrive wherever mature canopy bridges the gap to a roofline, which describes most of Georgia's older suburbs. They are responsible for the large majority of attic calls statewide.</li>
  <li><strong>Fox squirrel</strong> — Georgia's largest tree squirrel, far more common in rural counties, pine-dominated stands, and the open Coastal Plain than in the dense metro core. A fox squirrel's size lets it widen an existing gable or soffit gap quickly, so rural-property jobs often involve bigger entry points and coarser damage.</li>
  <li><strong>Southern flying squirrel</strong> — small, strictly nocturnal, and routinely mistaken for rats in older south-Georgia and intown housing. Because they are active at night and travel in colonies, a "rat in the attic" that scampers only after dark is frequently a flying-squirrel group instead — a misdiagnosis that wastes money on the wrong treatment.</li>
</ul>
<p>A licensed Georgia trapper confirms the species first, because the right entry-hole size, exclusion-door type, and sealing approach all change depending on whether you have one agile gray, a heavy-bodied fox squirrel, or a colony of flyers.</p>

<h2>Are Squirrels Protected in Georgia? Georgia DNR Rules &amp; Permits</h2>
<p>Gray and fox squirrels are classified as <strong>game animals</strong> in Georgia, not unprotected pests, with a regulated hunting season that runs roughly mid-August through the end of February and a daily bag limit. That status matters for homeowners in two ways. First, you generally can address squirrels actively damaging your own property, but Georgia DNR's Wildlife Resources Division regulates how it's done. Second — and this trips up most DIY attempts — <strong>relocating or releasing a trapped squirrel elsewhere typically requires a state permit</strong>; you cannot legally box one up and drop it at a park across town. Georgia also restricts squirrels (gray, fox, and flying) from being kept, so "catch and keep" is off the table too.</p>
<p>For that reason, Georgia law requires any company that traps, removes, or controls nuisance wildlife to hold a <strong>Nuisance Wildlife Control Operator (NWCO) permit</strong> from the DNR — a standard pest-control license is not enough. Every contractor in our directory holds the required Georgia credentials and works within DNR rules. One useful distinction from raccoons and bats: squirrels are <strong>not a rabies-vector species</strong>, so they don't carry the heavy rabies-protocol handling raccoons do — but the permitting, humane-method, and no-illegal-relocation rules still fully apply.</p>

<h2>Georgia's Long Breeding Season — Why Intrusions Run Nearly Year-Round</h2>
<p>In Georgia's climate, squirrels produce <strong>two litters a year</strong>, with newborns most common around February–March and again in July–August. Because the warm season is so long here, those cycles blur together and there is no true "off" period the way northern states get — which is exactly why Georgia attic-squirrel calls arrive in every month, not just one cold stretch. It also makes <strong>timing the eviction</strong> the critical skill on a Georgia job. Sealing a structure while a female is nursing a hidden litter walls the young inside, where they die and create an odor-and-fly callback within days. Georgia's most reliable gaps for safe one-way exclusion fall in <strong>late spring (after the first litter disperses)</strong> and <strong>mid-to-late fall (after the summer litter is mobile)</strong>. Inspections and entry-point mapping can happen any time; only the sealing step has to be timed around the litters.</p>

<h2>How Georgia Homes Let Squirrels In</h2>
<p>Georgia's housing stock has a few recurring weak points that squirrels exploit, and they differ from the northern building types national guides tend to describe:</p>
<ul class="wildlife-list">
  <li><strong>Brick-ranch soffit returns and boxed eaves</strong> — extremely common in mid-century Atlanta, Macon, and Columbus suburbs, these corners loosen with age and give squirrels a sheltered chew point.</li>
  <li><strong>Gable and ridge vents with thin or damaged screening</strong> — a standard roofline feature on Georgia homes and one of the most frequent true entry points.</li>
  <li><strong>Construction gaps where dormers, additions, and rooflines meet</strong> — abundant in metro Atlanta's fast-built subdivisions, where two roof planes join imperfectly.</li>
  <li><strong>Humidity-rotted fascia and wooden trim</strong> — Georgia's heat and moisture, especially in the Coastal Plain and around Savannah, soften wood faster, and a squirrel only needs a finger-width of soft fascia to start an opening.</li>
  <li><strong>Mature-tree bridges</strong> — overhanging hardwood limbs across Georgia's tree-canopied lots are the highway onto the roof in the first place; trimming them back is part of any durable fix.</li>
</ul>
<p>A squirrel needs an opening barely over an inch wide to get in, so a thorough Georgia inspection checks the entire roofline, not just the obvious hole.</p>

<h2>What Drives Squirrel Removal Cost in Georgia</h2>
<p>Statewide, most Georgia squirrel jobs land within the range shown below, but where you are in the state moves the number. <strong>Metro Atlanta</strong> tends to run a little higher — denser tree cover means more entry points per home and more competition for skilled, DNR-permitted operators — while <strong>rural and small-town Georgia</strong> jobs are often simpler single-entry trap-and-seal visits but can swing upward when a large fox squirrel has opened serious structural damage. The biggest cost drivers anywhere in Georgia are the number of entry points, whether a nesting female and litter are present, and how much chewed insulation, wood, or wiring has to be repaired after the animals are out. Reputable Georgia contractors quote after a property-specific inspection rather than over the phone.</p>

<h2>Why It Pays to Act Fast in Georgia</h2>
<p>Georgia's conditions reward quick action more than a cooler climate would. The near-continuous breeding season means a lone squirrel can become a nesting female with a litter in a matter of weeks, turning a simple eviction into a multi-animal exclusion. The state's heat and humidity also accelerate the damage — chewed openings let in moisture that rots framing and ruins insulation faster here than up north. And squirrels gnaw constantly to manage their teeth, so chewed electrical wiring (a recognized fire risk, particularly in Georgia's older Atlanta and Piedmont housing) becomes more likely the longer they stay. Getting a licensed Georgia pro out early keeps a roofline nuisance from becoming a structural and safety problem.</p>
`,
      faqs: [
        {
          q: 'How much does squirrel removal cost in Georgia?',
          a: 'Most Georgia squirrel jobs fall within the range shown above. Metro Atlanta tends to run higher because heavy tree cover means more entry points per home, while rural single-entry jobs sit lower. The biggest cost drivers statewide are the number of openings, whether a nesting litter is present, and how much chewed insulation, wood, or wiring needs repair afterward.'
        },
        {
          q: 'Are squirrels protected in Georgia?',
          a: 'Gray and fox squirrels are classified as game animals in Georgia with a regulated hunting season and bag limit, not unprotected pests. You can address squirrels damaging your own property, but Georgia DNR regulates how — and relocating or releasing a trapped squirrel elsewhere generally requires a state permit. Companies that trap nuisance wildlife must hold a DNR Nuisance Wildlife Control Operator permit.'
        },
        {
          q: 'How do I get squirrels out of my attic in Georgia?',
          a: 'The standard Georgia method is one-way exclusion: a contractor maps every entry point, fits one-way doors that let squirrels leave but not return, then seals the openings with galvanized steel. Trapping supplements it when needed. Timing matters here — sealing while a female is nursing a hidden litter traps the young inside, so the eviction is scheduled around Georgia\'s breeding cycles.'
        },
        {
          q: 'How long does squirrel removal take in Georgia?',
          a: 'A typical Georgia job runs about one to two weeks from first call to final sealing. The one-way doors stay up for several days to confirm every squirrel has left, after which the contractor seals the openings permanently and handles repairs. Multi-entry homes or jobs that must wait for a litter to become mobile can take longer.'
        },
        {
          q: 'Will squirrels come back after removal in Georgia?',
          a: 'Not if the work is done properly. Trapping alone almost always fails in Georgia because the open entry holes simply invite the next squirrel — and with near year-round breeding, that happens fast. Durable results come from full exclusion: sealing every opening with steel and trimming back the overhanging limbs that bridge squirrels onto the roof in the first place.'
        },
        {
          q: 'Is it legal to poison squirrels in Georgia?',
          a: 'No. There is no rodenticide registered for use on tree squirrels, so putting out rat or mouse poison for them is an illegal off-label application — and it backfires anyway, since a squirrel that dies inside a wall causes a serious odor problem. Georgia handles squirrels through licensed live exclusion and trapping, not poison.'
        },
        {
          q: 'Do I need to repair my attic after squirrel removal?',
          a: 'Usually, yes. Squirrels foul and compress insulation, chew wood and wiring, and leave entry points open. A complete Georgia job restores damaged insulation, seals every opening with steel, and flags chewed wiring for a licensed electrician to inspect — important both for fire safety and for homeowners-insurance documentation in Georgia\'s older housing.'
        },
        {
          q: 'Can I remove squirrels myself in Georgia?',
          a: 'You can address squirrels on your own property, but DIY rarely works and carries legal pitfalls. Relocating a trapped squirrel generally requires a Georgia DNR permit, and trapping without sealing entry points just invites the next one. Most homeowners hire a licensed Nuisance Wildlife Control Operator who can evict, exclude, and repair in one DNR-compliant visit.'
        }
      ]
    }
  }
};

// Returns the localized content block for a (state, animal) pair, or null.
function getStateAnimalContent(stateName, animalSlug) {
  const byState = STATE_ANIMAL_CONTENT[stateName];
  if (!byState) return null;
  return byState[animalSlug] || null;
}

module.exports = { STATE_ANIMAL_CONTENT, getStateAnimalContent };
