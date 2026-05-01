# SEO Page Build Prompt — RemoveWildlifeNow.com

This is the master prompt for producing SEO content across the wildlife directory. **Anyone (human or AI agent) can use this to build out a county.** Hand this whole document to Claude / ChatGPT / Cursor / a junior writer and tell them which county to do.

---

## How to invoke

**One-line invocations any operator can use:**

> "Build out **{County}, {State}** for the priority animals (raccoon, squirrel, rat). Follow `docs/SEO-PAGE-BUILD-PROMPT.md`."

> "Build out **{City}** in **{County}, {State}** for **{animal-slug}**. Follow `docs/SEO-PAGE-BUILD-PROMPT.md`."

> "Add **{animal-slug}** to **{County}, {State}** at the county-animal tier. Follow `docs/SEO-PAGE-BUILD-PROMPT.md`."

The operator picks the scope; this document tells them the rest.

---

## Mission and ground truth

We're a wildlife removal directory. Our economic target is **5 calls per state per day** — not 5K indexed pages, not vanity rankings. That means **a tiny number of high-quality pages ranking for high-intent local searches** does the job. Quality over quantity; tight geography over breadth.

Hard rules of the system:

1. **Pages are noindex by default.** A page only flips to indexable when a contractor signs up for that area. The set of indexable areas lives in `data/permanentlyIndexed.json`. Once flipped, it stays indexable forever (sticky) so we don't lose accumulated SEO ranking when contractors churn.
2. **Don't waste effort on noindex areas.** Producing premium content for a county no contractor covers does nothing for the business. Build for areas that *are* indexable, or that the user has flagged as imminent contractor signups.
3. **Priority animals are rat, squirrel, raccoon.** These drive call volume. Build these first for any new area before bat / snake / opossum / others.
4. **Beat aaanimalcontrol.com on technical SEO.** Their site has 3,700+ pages but no schema, no Open Graph, no Twitter Card, no proper meta descriptions, no `<h1>` on city pages. They rank because of aged-domain authority — we don't have that, so we win on structured data + on-page quality.

---

## The page tiers

Three content tiers exist, each with its own data file and view:

| Tier | Route example | View | Data file |
|---|---|---|---|
| **County hub** | `/georgia/cobb-county/` | `views/county.ejs` | `data/countyContent.js` (function-based per state) |
| **County-animal** | `/georgia/cobb-county/raccoon-removal/` | `views/county-animal.ejs` | `data/states/<state-slug>/county-animal/<county-slug>.json` |
| **City-animal** | `/georgia/cobb-county/marietta/raccoon-removal/` | `views/city-animal.ejs` | `data/states/<state-slug>/city-animal/<county-slug>.json` |

(There's also a city tier, `/georgia/cobb-county/marietta/`, but it's lower priority than city-animal pages because city-animal pages target higher-intent searches like "raccoon removal Marietta".)

**For most build-out work you'll touch the bottom two tiers — JSON files only. The county-hub tier (`countyContent.js`) is JS code with hand-tuned blocks and is rarely the right place to start unless explicitly asked.**

---

## How indexing decisions render automatically

You don't need to think about most of this — it's automatic:

- The route handler reads `permanentlyIndexed.json` + live contractor data and computes an `indexable` flag.
- When `indexable` is false, the page renders `<meta name="robots" content="noindex, follow">`.
- When `indexable` is true AND your data has a `geo` field, the enriched SEO scaffolding fires: full schema, OG, Twitter, geo meta, BreadcrumbList, WebPage, Service, FAQPage with cross-linked `@id`s.
- When data is missing, the page falls back to legacy template render — no errors, no regressions.

**Your job is to author the JSON entries. The template handles all the schema/meta automatically when your entry includes `geo`.**

---

## Required data shape — county-animal entry

File: `data/states/<state-slug>/county-animal/<county-slug>.json`

Format: top-level keys are animal slugs. Each value is the page's content object.

```json
{
  "raccoon-removal": {
    "metaTitle": "Raccoon Removal in Cobb County, GA | Licensed Local Trappers",
    "metaDescription": "Professional raccoon removal in Cobb County, GA. Serving Marietta, Smyrna, Kennesaw, Acworth, and Vinings. Licensed, humane, same-day service. Call now.",
    "geo": { "lat": 33.94, "lon": -84.58 },
    "sameAs": [
      "https://en.wikipedia.org/wiki/Raccoon",
      "https://en.wikipedia.org/wiki/Cobb_County,_Georgia"
    ],
    "leadParagraph": "70-110 word paragraph that mentions the animal, the county, and at least one real local feature (creek, watershed, neighborhood, landmark, regulatory body).",
    "extendedBody": "<h2>...</h2>\n<p>...</p>\n<h2>...</h2>\n<p>...</p>",
    "neighborhoodLinks": [
      { "anchor": "raccoon removal in Marietta", "href": "/georgia/cobb-county/marietta/raccoon-removal/" }
    ],
    "siblingAnimalLinks": [
      { "anchor": "squirrel removal in Cobb County", "href": "/georgia/cobb-county/squirrel-removal/" }
    ],
    "neighborCountyLinks": [
      { "anchor": "Cherokee County raccoon removal", "href": "/georgia/cherokee-county/raccoon-removal/" }
    ],
    "faqs": [
      { "q": "How much does raccoon removal cost in Cobb County, Georgia?", "a": "Most full Cobb County raccoon jobs run between $400 and $1,200..." }
    ]
  }
}
```

**Field rules:**

| Field | Length / shape | Notes |
|---|---|---|
| `metaTitle` | **50–60 characters**. Include `{Animal Removal}` + `{County}` + state abbrev (`GA`, `CT`, etc.) | Goes into `<title>` and OG/Twitter title |
| `metaDescription` | **150–160 characters**. Include 2–4 city names + a CTA | Goes into `<meta description>`, OG, Twitter |
| `geo.lat` / `geo.lon` | County centroid (Wikipedia infobox is reliable) | Triggers `seoEnhanced` mode |
| `sameAs` | Array of authoritative URLs (Wikipedia, USGS, etc.) | Optional but boosts entity recognition |
| `leadParagraph` | **70–110 words**. Plain text (no HTML). | Renders in its own `<section>` above the main extended body |
| `extendedBody` | **600–900 words of HTML**. Use `<h2>`, `<h3>`, `<p>`, `<ul>`, `<strong>`. | The bulk of the page content |
| `neighborhoodLinks` | 4–8 links to (city, animal) pages within the county | Varied anchor text — see linking rules below |
| `siblingAnimalLinks` | 3–5 links to other animals at county-hub level | E.g., from `cobb/raccoon-removal/` link to `cobb/squirrel-removal/` |
| `neighborCountyLinks` | 3–4 links to the same animal in adjacent counties | Helps with topical clustering |
| `faqs` | **5–8** Q&As, **answers 60–110 words each** | Populates FAQPage schema; powers rich snippets |

---

## Required data shape — city-animal entry

File: `data/states/<state-slug>/city-animal/<county-slug>.json`

Format: nested by city, then animal slug.

```json
{
  "Marietta": {
    "raccoon-removal": {
      "metaTitle": "Raccoon Removal in Marietta, GA — Same-Day Local Service",
      "metaDescription": "Licensed raccoon removal in Marietta, GA — historic-district attic experts, humane methods, same-day service across Cobb County. Call now.",
      "geo": { "lat": 33.9526, "lon": -84.5499 },
      "sameAs": ["https://en.wikipedia.org/wiki/Marietta,_Georgia"],
      "intro": "70-110 word paragraph that's specific to THIS city + THIS animal.",
      "extendedBody": "<h2>...</h2>\n<p>...</p>\n<h2>...</h2>\n<p>...</p>",
      "relatedLinks": [
        { "anchor": "raccoon removal in Smyrna", "href": "/georgia/cobb-county/smyrna/raccoon-removal/" },
        { "anchor": "Marietta squirrel control", "href": "/georgia/cobb-county/marietta/squirrel-removal/" }
      ],
      "faqs": [
        { "q": "...", "a": "..." }
      ]
    }
  }
}
```

**City-animal pages are leaner than county-animal pages:**

| Field | Length / shape |
|---|---|
| `metaTitle` | **50–60 chars**. Include `{Animal Removal}` + `{City}` + state abbrev |
| `metaDescription` | **150–160 chars**. Reference at least one local feature + CTA |
| `intro` | **70–110 words** (NOT `leadParagraph` like county-animal — this tier uses `intro`) |
| `extendedBody` | **400–600 words of HTML**, 2 H2 sections (NOT 3) |
| `relatedLinks` | 4–6 links: same-animal in nearby cities + same-city other animals |
| `faqs` | **4–5** Q&As, **answers 60–110 words each** |

---

## Content quality rules

These are non-negotiable. Pages that violate these are worse than no page at all because they fingerprint as templated and drag down the whole site's perceived quality.

### What every page MUST have

1. **At least 3 unique local references** in the body content — a creek, a neighborhood, a landmark, a school district, a state park, a river, a watershed. Names that exist on a real map.
2. **Real species data.** Northern raccoon = `Procyon lotor`. Eastern gray squirrel = `Sciurus carolinensis`. Roof rat vs Norway rat distinction. Big brown bat vs little brown bat. Don't generalize.
3. **Real regulatory references.** Each state has a fish & wildlife / DNR agency that licenses commercial trappers. Cite it (Georgia DNR Wildlife Resources Division, etc.). For rabies-vector species, name the local public-health authority.
4. **Real seasonal patterns** that fit the climate zone of that area. Don't use the same seasonal calendar for Florida and Vermont.
5. **A unique opening sentence** for every page. Two pages on this site should never start with the same sentence.

### What NOT to invent

- **Specific cost numbers** unless they match the `costRange` defined in `data/animals.js` for that animal. Generalize to ranges; don't say "$427 average in this zip code."
- **Specific call-volume statistics.** "Raccoons account for 38% of our Cobb calls" — don't fabricate this.
- **Specific contractor names** in the body content. The contractor is dynamic per page, set by the embed script. Refer to "our local contractor" or "the licensed Cobb County operator," not a brand name.
- **Specific addresses, customer names, or testimonials** unless explicitly provided by the assignee.
- **Phone numbers other than `(844) 544-3498`.** That's the fallback that routes calls system-wide. The contractor's tracking number is injected dynamically by the embed script.

### Vary the structural skeleton

This is the trap that turns programmatic SEO into thin content. **Never reuse the same H2 layout across pages.**

Pick 2–3 H2 sections from the angle pool below per page. Each page in the same county should pick *different* angles than the others. Each city should pick *different* combinations than its neighbors.

#### H2 angle pool — Raccoons

- "Why {Area} Has Such High Raccoon Density"
- "How Raccoons Get Into {Area} Homes"
- "Raccoons in {Area} Neighborhoods" (when there's real geographic differentiation)
- "Seasonal Patterns That Drive {Area} Raccoon Calls"
- "Health and Safety Risks From {Area} Raccoons"
- "{State} Wildlife Regulations That Apply to Raccoon Removal"
- "What to Do Tonight If You Hear Scratching"
- "Why DIY Raccoon Removal Usually Fails Here"
- "When You Need a Professional vs. When You Can Wait"

#### H2 angle pool — Squirrels

- "Why Squirrels Are a Year-Round Problem in {Area}"
- "Where Squirrels Get Into {Area} Homes" (focus on roofline access)
- "The Squirrel Calendar in {Area}" (two distinct breeding seasons)
- "Why Timing Matters: The Eviction Window"
- "Chewed Wiring and Why It's a Real Fire Risk"
- "Eastern Gray vs Flying Squirrels in {Area}"
- "DIY Squirrel Removal — When to Try, When to Call"

#### H2 angle pool — Rats

- "The Two Rats {Area} Homeowners Deal With" (Norway vs roof rat)
- "Where Rats Hide in {Area} Housing Stock"
- "Why DIY Rat Control Usually Fails"
- "The Sanitation Crisis: What Happens After Rats Move In"
- "When You Have a Few vs When You Have an Infestation"
- "Why Rats Always Come Back If You Don't Seal Properly"
- "{State} Rat Regulations and Public-Health Reporting"

#### H2 angle pool — Bats / Snakes / Opossums / etc.

Build similar pools as you go. The key constraint: **never use the same 3 angles on two consecutive pages.**

---

## Internal linking rules

Anchor text is the cheapest way to get programmatic content flagged as spammy. **Vary every anchor.**

For a Cobb-Marietta-raccoon page, do NOT have all 6 internal links read "raccoon removal." Mix:

- **Exact match** (sparingly, 1–2 per page): "raccoon removal in Marietta"
- **Partial match**: "Smyrna raccoon control services," "professional trapping in Kennesaw"
- **Descriptive**: "wildlife removal across Cobb County," "humane raccoon exclusion in East Cobb"
- **Branded / generic**: "Marietta wildlife specialists," "local Cobb experts"

Each link should have a clear destination relationship:

- **Up the hierarchy**: city-animal → city → county → state
- **Sibling animals same city**: Marietta raccoon → Marietta squirrel, Marietta rat
- **Same animal nearby cities**: Marietta raccoon → Smyrna raccoon, Kennesaw raccoon
- **Same animal neighbor counties**: Cobb raccoon → Cherokee raccoon, Bartow raccoon
- **Up to county hub**: any page → `/georgia/cobb-county/`
- **Up to state**: any page → `/georgia/`

---

## FAQ rules

FAQs power the FAQPage schema, which gets you rich-snippet eligibility (the expandable Q&A in Google search results). They also catch long-tail searches.

### Required FAQ patterns

Every page must include answers to at least these intents (in your own wording — vary phrasing per page):

- **Cost intent**: "How much does {animal} removal cost in {area}?"
- **Identification intent**: "How do I know if I have {animal} in my {space}?" (where space = attic / walls / yard / kitchen / etc., picked to match animal)
- **Safety intent**: "Are {animal} dangerous to my family or pets in {area}?"
- **Timing intent**: "What time of year are {animal} most active in {area}?" OR "How long does professional {animal} removal take?"

Then 1–4 more FAQs that go local: "Do you cover {neighborhood}?" / "What's special about {animal} in {city}?" / etc.

### FAQ anti-patterns

- Don't repeat the same question across pages. "How much does it cost?" should have different answers on Marietta-raccoon vs Smyrna-raccoon (different city references, different specifics).
- Don't write generic answers that could apply anywhere. If you remove the city name and the answer still makes sense for any city in the country, the answer is too generic.
- Don't dump information that belongs in the body. FAQ answers are 60–110 words, focused, action-oriented.

---

## Reference example

**The canonical complete page is `/georgia/cobb-county/raccoon-removal/`.** Look at this entry as the gold standard:

- File: `data/states/georgia/county-animal/cobb-county.json`
- Key: `"raccoon-removal"`

Read it before writing any new entry. Match the depth, tone, and structural patterns. Don't copy phrasing.

For the city-animal tier, the canonical example is whichever (city, animal) entry under `Marietta` or `Smyrna` has been most recently updated to include `geo` + `extendedBody` + `relatedLinks`. If none exist yet, use the county-animal Cobb-raccoon entry as the structural reference and adapt to the leaner city-animal field shape.

---

## Workflow — start to finish

```
# 1. Check out a feature branch off master
git checkout master && git pull
git checkout -b seo-{state}-{county}-{scope}
# e.g., seo-georgia-bartow-priority-animals

# 2. Verify the area is indexable (or about to be)
cat data/permanentlyIndexed.json
# if the county isn't there, ask the project owner whether it's about to be added

# 3. Open the data files for the tier you're authoring
# County-animal:
$EDITOR data/states/{state-slug}/county-animal/{county-slug}.json
# City-animal:
$EDITOR data/states/{state-slug}/city-animal/{county-slug}.json

# 4. Author entries following the data shape and content quality rules above

# 5. Validate JSON parses
node -e 'require("./data/states/{state-slug}/county-animal/{county-slug}.json")'

# 6. Boot the dev server and visit the page
PORT=3099 node server.js
# wait for "removewildlifenow running on port 3099"
curl -s http://localhost:3099/{state}/{county}/{animal-slug}/ > /tmp/page.html
wc -c /tmp/page.html  # expect 30K+ bytes for a good page
grep -c application/ld+json /tmp/page.html  # expect 5 for an enriched page

# 7. Validate JSON-LD parses
node -e '
const fs=require("fs");
const html=fs.readFileSync("/tmp/page.html","utf8");
const re=/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g;
let m,i=0,ok=0,fail=0;
while((m=re.exec(html))){i++;try{JSON.parse(m[1]);ok++;console.log(`block ${i}: OK`);}catch(e){fail++;console.log(`block ${i}: INVALID ${e.message}`);}}
console.log(`${ok}/${i} valid`);
'

# 8. Spot-check that other pages in the area still render
for path in /{state}/ /{state}/{county}/ /{state}/{county}/another-animal-removal/; do
  curl -s -o /dev/null -w "%-50s %s\n" --max-time 8 http://localhost:3099$path
done

# 9. Commit and push
git add data/states/{state-slug}/
git commit -m "{County} {animal/animals}: SEO build-out — {short summary}"
git push -u origin seo-{state}-{county}-{scope}

# 10. Open a PR. After merge, validate live in Google Rich Results Test:
#     https://search.google.com/test/rich-results
#     Paste the live URL and confirm BreadcrumbList, FAQPage, Service all parse.
```

---

## Acceptance checklist

Before opening the PR, every page you produced must pass:

- [ ] `metaTitle` is 50–60 characters and includes the animal + the location + state abbreviation
- [ ] `metaDescription` is 150–160 characters and includes 2–4 city names + a CTA
- [ ] `geo` field present with real lat/lon for the area centroid
- [ ] `leadParagraph` (county-animal) or `intro` (city-animal) is 70–110 words and references at least one real local feature
- [ ] `extendedBody` is 600–900 words (county-animal) or 400–600 words (city-animal) and uses 2–3 H2 sections (county-animal) or 2 H2 sections (city-animal)
- [ ] **Opening sentence is unique** — not used on any other page
- [ ] **H2 angle selection differs from sibling pages** in the same area
- [ ] At least 3 real local references (creek, neighborhood, landmark, regulatory body)
- [ ] Real species data (scientific name, weight, behavior specifics)
- [ ] No invented cost numbers, statistics, addresses, or customer names
- [ ] 4+ FAQs, each 60–110 words, covering cost / identification / safety / timing intents
- [ ] All FAQs are unique to this page (not reused from other pages)
- [ ] Internal links use varied anchor text (no all-"raccoon removal" anchors)
- [ ] Internal links cover: sibling animals same city, same animal nearby cities, county hub, state hub
- [ ] JSON file parses (`node -e 'require("./path/to/file")'`)
- [ ] Page renders 200 locally, served HTML is 30KB+
- [ ] All JSON-LD blocks parse cleanly via the validation snippet above
- [ ] Sibling pages (other animals in the same area) still render unchanged
- [ ] After merge: live URL passes Google Rich Results Test for FAQPage + BreadcrumbList + Service

---

## Anti-patterns — don't ship a page if it does any of these

- **Two pages share the same opening sentence** (or close paraphrase)
- **The same H2 layout** appears on two pages in the same area (e.g., Marietta-raccoon and Smyrna-raccoon both use the same 3 H2s in the same order)
- **Mad Libs swap content** (same paragraph with city name swapped — this is exactly what the competitor does and what we're trying to beat)
- **Generic "wildlife is bad, call us" body** with city names sprinkled in
- **Invented statistics or cost numbers**
- **Phone numbers other than the system fallback `(844) 544-3498`**
- **Schema or JSON-LD that doesn't parse** (would silently break Rich Results)
- **`og:image` that doesn't exist** — leave default (`/images/og-default.jpg`) unless you've added a real per-page image
- **Word count below the minimum** — Google flags thin content; budget time for the body
- **Missing FAQ section** — kills FAQPage rich-snippet eligibility, which is one of our biggest competitive advantages over aaanimalcontrol.com
- **Stuffing the same keyword 8+ times** — write naturally, vary phrasing

---

## When in doubt — ask

If you don't have enough real local information to hit the quality bar, **stop and ask**. It's better to skip a page than to ship a fabricated one. Specifically ask the project owner for:

- Real entry-point patterns the contractor sees in this area
- Real ticket sizes for the animal in this area
- Real neighborhood-level call distribution (which parts of town generate the most calls)
- Anything specific or surprising about this animal in this area

Five minutes of project-owner input per page raises a page from "AI-generic with local paint" to "this contractor actually knows the area" — and that's the difference between ranking and not.

---

## Strategic context — keep this in mind

- **Competitor to beat**: `aaanimalcontrol.com` — Florida-focused, ~3,700 pages, no schema, no OG/Twitter, no `<h1>` on city pages, dated layout. Ranks because of aged-domain backlinks. We don't have those. We win on technical SEO + content quality.
- **Realistic target**: ~5 calls per state per day. That's ~5–25 great pages per state ranking on high-intent local queries. Not 500 pages, not 5,000.
- **Per-state priority order**: state pages → top-population indexable counties → priority animals (rat, squirrel, raccoon) at county-animal tier → top 3–5 cities in each county at city-animal tier → secondary animals (bat, snake, opossum, etc.) only after the priority is done.
- **Sticky indexability**: pages flip indexable forever once a contractor signs up. So content built for an indexable area is a permanent asset, even if that contractor later drops the area.

That's the brief. Anything not covered here, ask.
