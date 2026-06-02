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
//                              Its presence is also what makes the page eligible
//                              to be flipped indexable in permanentlyIndexed.json.
//   faqs             [{q,a}] — 2–4 state-specific Q&As (drive visible FAQ + JSON-LD)
//
// Indexability is still fully manual: authoring content here does NOT index the
// page. Add "<State>|<animal-slug>" to permanentlyIndexed.json -> stateAnimals
// to flip it live (mirrors how states/counties are gated).

const STATE_ANIMAL_CONTENT = {
  'Georgia': {
    'raccoon-removal': {
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
