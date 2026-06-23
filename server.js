const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const us = require('us');
const { statesAndCounties, stateSlugToName, countySlugToName, toSlug } = require('./data/locations');
const { getCitiesForCounty, citySlugToName, cityCountyName } = require('./data/cities');
const { seatCityFor } = require('./data/countySeatCity');
const { ANIMALS, ANIMAL_SLUGS, getAnimalBySlug } = require('./data/animals');
const { stateContent } = require('./data/stateContent');
const { getAnimalRegionContent } = require('./data/animalRegionContent');
const { getAnimalFaqs } = require('./data/faqContent');
const { getSeasonalContent } = require('./data/seasonalContent');
const { getCountyContent } = require('./data/countyContent');
const { getCityContent } = require('./data/cityContent');
const { getCityAnimalContent } = require('./data/cityAnimalContent');
const { getCountyAnimalContent } = require('./data/countyAnimalContent');
const { getStateAnimalContent } = require('./data/stateAnimalContent');
const { getNationalContent } = require('./data/animalNationalContent');
const { getAllPosts, getPostBySlug } = require('./data/blogPosts');
const { getContractor } = require('./lib/contractor');
const { formatPhone, toTitleCase, normalizeStateRegion, normalizeUrl } = require('./lib/format');
const { buildCrumbs, breadcrumbSchema, serviceSchema, faqSchema } = require('./lib/locationSchema');

const app = express();
// Strict routing so "/path" and "/path/" are distinct: the canonical form is
// always trailing-slash, and the no-slash variants below 301-redirect to it.
// Without this, Express treats "/foo" and "/foo/" as the same route, so a deep
// URL like /…/raccoon-removal (no slash) renders 200 while its canonical tag
// points to the trailing-slash version — two indexable URLs for one page.
// MUST be set before the first app.use()/route below, because Express locks in
// the router's strict-routing flag the first time the router is initialized.
app.enable('strict routing');
// Format helpers exposed to every EJS template via app.locals so contractor
// data from LeadPortal (E.164 phone, mixed-case addresses, full state names,
// bare-domain URLs) renders correctly without each template re-inlining the
// normalization logic.
app.locals.formatPhone = formatPhone;
app.locals.toTitleCase = toTitleCase;
app.locals.normalizeStateRegion = normalizeStateRegion;
app.locals.normalizeUrl = normalizeUrl;
// Shared structured-data builders, available to every template + partial so the
// schema lives in one place (lib/locationSchema.js) instead of inline per page.
app.locals.buildCrumbs = buildCrumbs;
app.locals.breadcrumbSchema = breadcrumbSchema;
app.locals.serviceSchema = serviceSchema;
app.locals.faqSchema = faqSchema;
const PORT = process.env.PORT || 3000;
const LEAD_PORTAL = 'https://localleadportal-production.up.railway.app';
const SERVICE_TYPE = 'Wildlife Removal';

function apiCounty(name) {
  return name.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim();
}

// ── Manual indexable set ─────────────────────────────────────────────────────
// Indexability is fully manual. Two opt-in gates:
//   1. State/county HUBS — the (state) or (state|county) must be listed in
//      data/permanentlyIndexed.json.
//   2. Content pages (city, city-animal, county-animal hub in hub-only counties,
//      and state-animal) — in addition to (1), the page's own content entry must
//      carry "index": true. Authoring or updating content (extendedBody,
//      wildlife_intro, etc.) does NOT index a page on its own: a human sets
//      "index": true once the page is ready, then submits it to Search Console.
// Contractor assignment has NO effect on indexability — adding/removing a
// contractor never flips the index meta tag.
//
// To index a hub: append its entry to data/permanentlyIndexed.json. To index a
// content page: set "index": true on its entry in the data/states/... JSON (or
// data/stateAnimalContent.js for state-animals). Commit and redeploy. There is
// no auto-augmentation at runtime. Key format: `${ProperCaseState}|${lowercaseCounty}`.
const permanentlyIndexed = require('./data/permanentlyIndexed.json');
const _permanentCounties = new Set(
  (permanentlyIndexed.counties || []).map(k => {
    const [state, county] = k.split('|');
    return `${state}|${(county || '').toLowerCase()}`;
  })
);
const _permanentStates = new Set(permanentlyIndexed.states || []);
// State-level animal pages (/georgia/raccoon-removal/) are indexed manually,
// keyed "ProperCaseState|animal-slug". A page stays noindex until its key is
// listed here AND data/stateAnimalContent.js has authored content for the pair.
const _permanentStateAnimals = new Set(permanentlyIndexed.stateAnimals || []);
// Counties whose hub is indexable but whose city + city-animal pages should
// stay noindex (typically because city-level content hasn't been authored yet).
const _countyOnlyIndexCounties = new Set(
  (permanentlyIndexed.countiesWithCountyOnlyIndex || []).map(k => {
    const [state, county] = k.split('|');
    return `${state}|${(county || '').toLowerCase()}`;
  })
);
// Counties where ONLY the bare hub (/state/county/) is indexable — per-animal
// hubs and all city-level pages stay noindex (typically because only the
// county hub content has been authored).
const _hubOnlyIndexCounties = new Set(
  (permanentlyIndexed.countiesWithHubOnlyIndex || []).map(k => {
    const [state, county] = k.split('|');
    return `${state}|${(county || '').toLowerCase()}`;
  })
);

// The flat URL scheme gives every city ONE path (/state/city/), so cross-county
// duplicates (Austell in both Cobb and Douglas) are deduped structurally: the
// city → county reverse map (data/cities.js, seeded from CITY_CANONICAL_COUNTY)
// resolves each city slug to a single owning county, so only one URL ever exists.
// The canonical URL is therefore just the page's own flat URL.
function cityCanonicalUrl(stateSlug, citySlug, animalSlug) {
  return `https://www.removewildlifenow.com/${stateSlug}/${citySlug}/` +
    (animalSlug ? `${animalSlug}/` : '');
}

async function isCountyIndexable(stateName, countyName) {
  const key = `${stateName}|${apiCounty(countyName).toLowerCase()}`;
  return _permanentCounties.has(key);
}
async function isCountyAnimalIndexable(stateName, countyName, animalSlug) {
  const key = `${stateName}|${apiCounty(countyName).toLowerCase()}`;
  if (!_permanentCounties.has(key)) return false;
  // Hub-only counties: only animal hubs with enriched countyAnimalContent are indexable.
  // Other indexed counties keep current behavior (all animal hubs indexable).
  if (_hubOnlyIndexCounties.has(key)) {
    if (!animalSlug) return false;
    const content = getCountyAnimalContent(stateName, countyName, animalSlug);
    return !!(content && content.index === true);
  }
  return true;
}
async function isCityIndexable(stateName, countyName, cityName, animalSlug) {
  const key = `${stateName}|${apiCounty(countyName).toLowerCase()}`;
  if (!_permanentCounties.has(key)) return false;
  // Selective modes: city/city-animal page is indexable only if it has enriched content.
  // This allows individual cities like Savannah to flip indexable while other Chatham
  // cities (still without enriched content) stay noindex.
  if (_hubOnlyIndexCounties.has(key) || _countyOnlyIndexCounties.has(key)) {
    if (!cityName) return false;
    // Opt-in per page: a city / city-animal page is indexable only once its
    // content entry carries "index": true. Authoring content (extendedBody /
    // wildlife_intro) no longer flips the page on its own — a human sets the flag
    // when the page is ready, then submits it to Search Console. (Supersedes the
    // old holdNoindex opt-out, which is no longer consulted.)
    if (animalSlug) {
      const content = getCityAnimalContent(stateName, countyName, cityName, animalSlug);
      return !!(content && content.index === true);
    }
    const content = getCityContent(stateName, countyName, cityName);
    return !!(content && content.index === true);
  }
  return true;
}
async function isStateIndexable(stateName) {
  return _permanentStates.has(stateName);
}
async function isStateAnimalIndexable(stateName, animalSlug) {
  // Manual gate AND explicit per-page opt-in must both be present (no auto-indexing).
  if (!_permanentStateAnimals.has(`${stateName}|${animalSlug}`)) return false;
  const content = getStateAnimalContent(stateName, animalSlug);
  return !!(content && content.index === true);
}
// Animals that have an indexable state-level page for this state — used to wire
// the state hub's localized down-links ("Georgia Raccoon Removal").
async function indexableStateAnimalsFor(stateName) {
  const out = [];
  for (const a of ANIMALS) {
    if (await isStateAnimalIndexable(stateName, a.slug)) out.push(a);
  }
  return out;
}
// States that have an indexable state-level page for this animal — used to wire
// the national animal page's down-links to its state versions.
async function indexableStatesForAnimal(animalSlug) {
  const out = new Set();
  for (const key of _permanentStateAnimals) {
    const [state, slug] = key.split('|');
    if (slug === animalSlug && await isStateAnimalIndexable(state, slug)) out.add(state);
  }
  return out;
}
// Cities in a state that are currently indexable, deduped to their canonical
// (owning) county so cross-county duplicates (Austell, Villa Rica) appear once.
// Powers the state hub's "cities we serve" grid (replacing the old county grid)
// and is the universe for the state-animal page's city down-links. Returns
// [{ name, slug, countyName }] sorted by name.
async function indexableCitiesFor(stateName) {
  const out = [];
  const seen = new Set();
  for (const county of (statesAndCounties[stateName] || [])) {
    if (!_permanentCounties.has(`${stateName}|${apiCounty(county).toLowerCase()}`)) continue;
    for (const city of getCitiesForCounty(stateName, county)) {
      const citySlug = toSlug(city);
      if (seen.has(citySlug)) continue;
      // Emit only from the county that owns the flat slug (cross-county dedupe).
      if (cityCountyName(stateName, citySlug) !== county) continue;
      if (await isCityIndexable(stateName, county, city)) {
        seen.add(citySlug);
        out.push({ name: city, slug: citySlug, countyName: county });
      }
    }
  }
  out.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}
// Cities in a state whose per-animal page is indexable — the state-animal page's
// localized down-links ("Macon Raccoon Removal"). Returns [{ name, slug }].
async function indexableCityAnimalsFor(stateName, animalSlug) {
  const out = [];
  for (const c of await indexableCitiesFor(stateName)) {
    if (await isCityIndexable(stateName, c.countyName, c.name, animalSlug)) {
      out.push({ name: c.name, slug: c.slug });
    }
  }
  return out;
}
// Animal objects whose per-city page is indexable for this city. On-page service
// grids link ONLY to these, because noindex city-animal pages now 404 — linking
// them would create broken internal links.
async function indexableAnimalsForCity(stateName, countyName, cityName) {
  const out = [];
  for (const a of ANIMALS) {
    if (await isCityIndexable(stateName, countyName, cityName, a.slug)) out.push(a);
  }
  return out;
}
// Indexable sibling city hubs in the same county (excluding `exceptCity`), as
// [{ name, slug }], deduped to the owning county — for the "Other Cities" links.
async function indexableSiblingCities(stateName, countyName, exceptCity) {
  const out = [];
  for (const city of getCitiesForCounty(stateName, countyName)) {
    if (city === exceptCity) continue;
    const slug = toSlug(city);
    if (cityCountyName(stateName, slug) !== countyName) continue; // owner only
    if (await isCityIndexable(stateName, countyName, city)) out.push({ name: city, slug });
  }
  return out;
}

// Canonical-host redirect: send every non-www request (apex domain, any path,
// query string preserved) to its https://www equivalent with a 301. This runs
// before static assets and all routes so the redirect covers the entire site,
// not just the root — a DNS/host-level rule that only rewrote "/" would leave
// deep links like /georgia/bibb/ on the apex host and split link equity.
const CANONICAL_HOST = 'www.removewildlifenow.com';
app.set('trust proxy', true);
app.use((req, res, next) => {
  const host = (req.headers.host || '').toLowerCase();
  if (host && host !== CANONICAL_HOST && host.replace(/^www\./, '') === 'removewildlifenow.com') {
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
  }
  next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ── Caching strategy ─────────────────────────────────────────────────────────
// There is no separate CDN — the only layer in front is Railway's edge proxy
// (Server: railway-edge), which honors origin Cache-Control. Previously HTML was
// sent with no Cache-Control (only a weak ETag), so the edge/browsers applied
// heuristic caching and kept serving the OLD body for a while after each deploy.
//
//   • Static assets (/public: images, css, favicon) → long immutable cache.
//     CSS is cache-busted with a content hash (?v=) so "immutable" is safe — the
//     URL changes whenever style.css changes, so a deploy is never served stale.
//   • HTML + other dynamic responses → no-cache: the response may be stored but
//     MUST be revalidated with the origin on every request (cheap 304s via the
//     ETag), so a deploy is reflected immediately.
//
// Content hash of the stylesheet, exposed to every template as `cssVersion` for
// the ?v= cache-buster on the <link rel="stylesheet"> tag.
function assetHash(relPath) {
  try {
    const buf = fs.readFileSync(path.join(__dirname, 'public', relPath));
    return crypto.createHash('sha1').update(buf).digest('hex').slice(0, 10);
  } catch (e) {
    return '1'; // missing file: harmless static buster
  }
}
app.locals.cssVersion = assetHash('css/style.css');

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y',
  immutable: true
}));

// Dynamic responses (HTML pages, sitemap, robots, api): always revalidate so the
// edge/browser can't serve a stale page after a deploy. Runs only when the
// static handler above didn't already serve a file (which keeps its immutable
// header). ETag stays enabled, so unchanged pages return a 304 with no body.
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  next();
});

app.use(express.urlencoded({ extended: true }));

// Map data endpoint — TopoJSON + FIPS→slug mapping for D3
const topoJson = JSON.parse(fs.readFileSync(require.resolve('us-atlas/states-10m.json'), 'utf8'));
const fipsMap = {};
us.STATES.forEach(s => { fipsMap[s.fips] = { name: s.name, slug: toSlug(s.name) }; });

app.get('/api/states-map', (req, res) => {
  res.json({ topo: topoJson, fips: fipsMap });
});

// robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nAllow: /\nSitemap: https://www.removewildlifenow.com/sitemap.xml\n');
});

// Sitemap — lists every page that is manually marked indexable in
// data/permanentlyIndexed.json, plus the always-indexable static pages
// (homepage, services, blog).
app.get('/sitemap.xml', async (req, res) => {
  const BASE = 'https://www.removewildlifenow.com';
  const urls = [`${BASE}/`, `${BASE}/contact/`, `${BASE}/list-your-business/`];

  // National per-animal landing pages (only those with content authored)
  const { NATIONAL_CONTENT } = require('./data/animalNationalContent');
  Object.keys(NATIONAL_CONTENT).forEach(slug => {
    urls.push(`${BASE}/services/${slug}/`);
  });

  // Blog index + posts
  urls.push(`${BASE}/blog/`);
  getAllPosts().forEach(p => urls.push(`${BASE}/blog/${p.slug}/`));

  // Manually-marked indexable states and counties
  _permanentStates.forEach(state => {
    urls.push(`${BASE}/${toSlug(state)}/`);
  });

  // State-level animal pages (/georgia/raccoon-removal/) — only those gated
  // indexable AND backed by authored content (mirrors isStateAnimalIndexable).
  _permanentStateAnimals.forEach(key => {
    const [state, slug] = key.split('|');
    const content = getStateAnimalContent(state, slug);
    if (content && content.index === true) urls.push(`${BASE}/${toSlug(state)}/${slug}/`);
  });

  // Flat scheme: county hubs and county-animal hubs no longer exist, so the
  // sitemap emits only flat city (/state/city/) and city-animal
  // (/state/city/animal/) URLs. We still walk the indexed counties because the
  // content + index flags are keyed by county; each city is emitted once, from
  // the county that owns its flat slug (so cross-county dupes like Austell and
  // Villa Rica — which appear under two counties — aren't double-listed).
  _permanentCounties.forEach(key => {
    const [state, countyLower] = key.split('|');
    const stateSlug = toSlug(state);
    const counties = statesAndCounties[state] || [];
    const fullCounty = counties.find(c => apiCounty(c).toLowerCase() === countyLower);
    if (!fullCounty) return;
    const selectiveMode = _hubOnlyIndexCounties.has(key) || _countyOnlyIndexCounties.has(key);

    getCitiesForCounty(state, fullCounty).forEach(city => {
      const citySlug = toSlug(city);
      // Only the owning county emits the flat URL for a cross-county city.
      if (cityCountyName(state, citySlug) !== fullCounty) return;
      // In selective mode a city is indexable only with an explicit "index": true
      // (mirrors isCityIndexable). Full counties index every city.
      if (selectiveMode) {
        const cContent = getCityContent(state, fullCounty, city);
        if (!cContent || cContent.index !== true) return;
      }
      urls.push(`${BASE}/${stateSlug}/${citySlug}/`);

      ANIMALS.forEach(a => {
        if (selectiveMode) {
          const cAnimal = getCityAnimalContent(state, fullCounty, city, a.slug);
          if (!cAnimal || cAnimal.index !== true) return;
        }
        urls.push(`${BASE}/${stateSlug}/${citySlug}/${a.slug}/`);
      });
    });
  });

  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    [...new Set(urls)].map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
    `\n</urlset>`;

  res.type('application/xml');
  res.send(xml);
});

// Homepage
app.get('/', (req, res) => {
  res.render('index');
});

// List Your Business — contractor pitch page that backlinks to localleadportal.com.
// Must be before /:stateSlug/ wildcard.
app.get('/list-your-business/', (req, res) => {
  res.render('list-your-business');
});
app.get('/list-your-business', (req, res) => res.redirect(301, '/list-your-business/'));

// Privacy Policy — static legal page. Must be before /:stateSlug/ wildcard.
app.get('/privacy-policy/', (req, res) => {
  res.render('privacy-policy');
});
app.get('/privacy-policy', (req, res) => res.redirect(301, '/privacy-policy/'));

// Terms of Service — static legal page. Must be before /:stateSlug/ wildcard.
app.get('/terms-of-service/', (req, res) => {
  res.render('terms-of-service');
});
app.get('/terms-of-service', (req, res) => res.redirect(301, '/terms-of-service/'));

// Contact page — must be before /:stateSlug/ wildcard
app.get('/contact/', (req, res) => {
  res.render('contact', {
    sent: false, error: null, formData: {},
    county: req.query.county || '',
    state: req.query.state || ''
  });
});
app.get('/contact', (req, res) => res.redirect(301, '/contact/'));

// National per-animal landing pages — /services/{animal-slug}/
// Must be defined before /:stateSlug/ to take precedence over state route
app.get('/services/:animalSlug/', async (req, res) => {
  const animal = getAnimalBySlug(req.params.animalSlug);
  if (!animal) return res.status(404).render('404', { message: 'Service not found.' });
  const content = getNationalContent(req.params.animalSlug);
  if (!content) return res.status(404).render('404', { message: 'National content not yet available for this service.' });
  const states = Object.keys(statesAndCounties);
  // States that have an indexable state-animal page for THIS animal — those links
  // point down to /{state}/{animal}/ with localized anchors instead of the hub.
  const stateAnimalIndexed = await indexableStatesForAnimal(req.params.animalSlug);
  res.render('animal-national', { animal, content, states, toSlug, ANIMALS, stateAnimalIndexed });
});

// Trailing-slash redirect for /services/{animal}
app.get('/services/:animalSlug', (req, res) => res.redirect(301, `/services/${req.params.animalSlug}/`));

// Blog index — /blog/
app.get('/blog/', (req, res) => {
  const posts = getAllPosts();
  res.render('blog-index', { posts });
});
app.get('/blog', (req, res) => res.redirect(301, '/blog/'));

// Blog post — /blog/{slug}/
app.get('/blog/:slug/', (req, res) => {
  const post = getPostBySlug(req.params.slug);
  if (!post) return res.status(404).render('404', { message: 'Blog post not found.' });
  const relatedPostsList = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 3);
  res.render('blog-post', { post, relatedPostsList });
});
app.get('/blog/:slug', (req, res) => res.redirect(301, `/blog/${req.params.slug}/`));

// State page — /georgia/
app.get('/:stateSlug/', async (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });

  const stateInfo = stateContent[stateName] || null;
  const indexable = await isStateIndexable(stateName);
  // Localized down-links to the indexable state-animal pages ("Georgia Raccoon Removal").
  const stateAnimalLinks = await indexableStateAnimalsFor(stateName);
  // Flat scheme: the hub now lists the cities we serve (not counties).
  const cities = await indexableCitiesFor(stateName);
  res.render('state', { stateName, cities, stateInfo, toSlug, indexable, stateAnimalLinks, ANIMALS });
});

// ── Legacy county-nested URL → flat URL 301 redirects ────────────────────────
// The site dropped the county segment (/state/county/... → /state/...). This
// middleware catches the legacy county-nested URLs that are still INDEXED and
// 301s them to their flat equivalent so accumulated SEO equity carries over. It
// runs before the flat location routes below. It acts ONLY when segment 2 is a
// real county slug (so flat city URLs, state-animal pages, and unknown slugs all
// fall straight through). Indexed county hubs / county-animal hubs (which have no
// flat equivalent) go to the county's seat city (data/countySeatCity.js), or to
// the state hub when the county has no live indexed city. NON-indexed legacy
// county URLs are deliberately NOT redirected — they fall through to 404, matching
// the "only authored/indexed pages resolve" model.
app.use(async (req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  const segs = req.path.split('/').filter(Boolean);
  if (segs.length < 2 || segs.length > 4) return next();
  const [stateSlug, countySlug, seg3, seg4] = segs;
  const stateName = stateSlugToName(stateSlug);
  if (!stateName) return next();
  if (ANIMAL_SLUGS.has(countySlug)) return next();        // state-animal is flat — leave it
  const countyName = countySlugToName(stateSlug, countySlug);
  if (!countyName) return next();                          // segment 2 isn't a county → flat URL

  const seatSlug = seatCityFor(stateSlug, countySlug);     // null → no live seat city
  const stateHome = `/${stateSlug}/`;

  // /state/county/ — indexed county hub → seat city (or state hub).
  if (segs.length === 2) {
    if (await isCountyIndexable(stateName, countyName)) {
      return res.redirect(301, seatSlug ? `/${stateSlug}/${seatSlug}/` : stateHome);
    }
    return next();
  }

  // /state/county/{animal}/ — indexed county-animal hub → seat city's animal page,
  // but only if that page is live (indexed). Noindex city-animal pages now 404, so
  // fall back to the seat city hub, then to the state hub, to avoid redirecting to
  // a 404.
  if (segs.length === 3 && ANIMAL_SLUGS.has(seg3)) {
    if (await isCountyAnimalIndexable(stateName, countyName, seg3)) {
      const seatCity = seatSlug && citySlugToName(stateName, countyName, seatSlug);
      if (seatCity && await isCityIndexable(stateName, countyName, seatCity, seg3)) {
        return res.redirect(301, `/${stateSlug}/${seatSlug}/${seg3}/`);
      }
      if (seatCity && await isCityIndexable(stateName, countyName, seatCity)) {
        return res.redirect(301, `/${stateSlug}/${seatSlug}/`);
      }
      return res.redirect(301, stateHome);
    }
    return next();
  }

  // /state/county/{city}/ and /state/county/{city}/{animal}/ — indexed city pages
  // → flat city URL. The city must genuinely belong to the URL's county (so bogus
  // combos like /georgia/cobb-county/atlanta/ still 404). Indexability is then
  // gated on the city's CANONICAL (owning) county, so a cross-county duplicate's
  // secondary URL (e.g. Austell under Douglas) still 301s to the one surviving
  // flat URL even though it's noindex under the secondary county.
  const citySlug = seg3;
  const cityName = citySlugToName(stateName, countyName, citySlug);
  if (cityName) {
    const owner = cityCountyName(stateName, citySlug) || countyName;
    if (segs.length === 3) {
      if (await isCityIndexable(stateName, owner, cityName)) {
        return res.redirect(301, `/${stateSlug}/${citySlug}/`);
      }
    } else if (ANIMAL_SLUGS.has(seg4)) {
      if (await isCityIndexable(stateName, owner, cityName, seg4)) {
        return res.redirect(301, `/${stateSlug}/${citySlug}/${seg4}/`);
      }
    }
  }
  return next();
});

// ── /georgia/:slug/ — state-animal page OR city hub ──────────────────────────
// Flat scheme: with county gone, segment 2 is either an animal slug (state-animal
// page, e.g. /georgia/raccoon-removal/) or a city slug (/georgia/macon/). Legacy
// county URLs were already 301'd to flat by the middleware above. Unknown slugs 404.
app.get('/:stateSlug/:slug/', async (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });
  const { stateSlug, slug } = req.params;
  const stateInfo = stateContent[stateName] || null;

  // State-animal page — /georgia/raccoon-removal/
  if (ANIMAL_SLUGS.has(slug)) {
    const animal = getAnimalBySlug(slug);
    const stateAnimalContent = getStateAnimalContent(stateName, slug);
    const animalRegionNote = getAnimalRegionContent(stateName, slug);
    const indexable = await isStateAnimalIndexable(stateName, slug);
    // Down-links: indexable city-animal pages for this animal, localized anchors.
    const cityAnimalLinks = await indexableCityAnimalsFor(stateName, slug);
    return res.render('state-animal', {
      stateName, animal, stateInfo, stateAnimalContent, animalRegionNote,
      indexable, cityAnimalLinks, stateSlug, toSlug, ANIMALS
    });
  }

  // City hub — /georgia/macon/ (county recovered from the city slug)
  const countyName = cityCountyName(stateName, slug);
  if (!countyName) return res.status(404).render('404', { message: 'Page not found.' });
  const cityName = citySlugToName(stateName, countyName, slug);
  if (!cityName) return res.status(404).render('404', { message: 'Page not found.' });

  // Noindex city pages are removed entirely (404), not served with a noindex tag —
  // only indexed/authored pages resolve.
  const indexable = await isCityIndexable(stateName, countyName, cityName);
  if (!indexable) return res.status(404).render('404', { message: 'Page not found.' });

  const embedScript = `${LEAD_PORTAL}/api/directory/number.js?state=${encodeURIComponent(stateName)}&serviceType=${encodeURIComponent(SERVICE_TYPE)}&county=${encodeURIComponent(apiCounty(countyName))}`;
  const cityContent = getCityContent(stateName, countyName, cityName);
  let countyContent = getCountyContent(stateName, countyName);
  // Server-side contractor lookup. Templates read countyContent.contractor for the
  // phone + company name; null falls through to the directory (844) number.
  const _contractor = await getContractor(stateName, apiCounty(countyName), SERVICE_TYPE);
  if (_contractor) countyContent = { ...(countyContent || {}), contractor: _contractor };
  // Grids link only to live (indexed) pages so the page has no broken links.
  const cityAnimals = await indexableAnimalsForCity(stateName, countyName, cityName);
  const otherCities = await indexableSiblingCities(stateName, countyName, cityName);

  res.render('city', {
    stateName, countyName, cityName, stateInfo, embedScript, cityContent, countyContent,
    cityAnimals, otherCities,
    indexable,
    canonicalUrl: cityCanonicalUrl(stateSlug, slug),
    stateSlug, citySlug: slug, toSlug, ANIMALS
  });
});

app.post('/contact/', async (req, res) => {
  const { name, email, phone, county, state, animal, message } = req.body;
  if (!name || !email) {
    return res.render('contact', { sent: false, error: 'Please provide your name and email.', formData: req.body, county: '', state: '' });
  }
  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'RemoveWildlifeNow <onboarding@resend.dev>',
        to: ['localleadportal@gmail.com'],
        subject: `Wildlife Removal Request — ${county || 'Unknown County'}, ${state || 'Unknown State'}`,
        html: `<h2>New Wildlife Removal Request</h2>
          <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
            <tr><td style="padding:8px;font-weight:bold;width:140px;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || '—'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">County</td><td style="padding:8px;">${county || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">State</td><td style="padding:8px;">${state || '—'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Animal</td><td style="padding:8px;">${animal || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message || '—'}</td></tr>
          </table>`
      })
    });
    if (!resp.ok) throw new Error(await resp.text());
    res.render('contact', { sent: true, error: null, formData: {}, county: '', state: '' });
  } catch (e) {
    res.render('contact', { sent: false, error: 'Failed to send your message. Please try again.', formData: req.body, county: '', state: '' });
  }
});

// ── /georgia/:citySlug/:animalSlug/ — city-animal page ───────────────────────
// Flat scheme: /georgia/macon/raccoon-removal/. The county is recovered from the
// city slug (data/cities.js cityCountyName). Legacy /state/county/city/animal/
// URLs are 301'd to this shape by the middleware above. Unknown combos 404.
app.get('/:stateSlug/:citySlug/:animalSlug/', async (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });
  const { stateSlug, citySlug, animalSlug } = req.params;
  if (!ANIMAL_SLUGS.has(animalSlug)) return res.status(404).render('404', { message: 'Page not found.' });
  const countyName = cityCountyName(stateName, citySlug);
  if (!countyName) return res.status(404).render('404', { message: 'Page not found.' });
  const cityName = citySlugToName(stateName, countyName, citySlug);
  if (!cityName) return res.status(404).render('404', { message: 'City not found.' });
  const animal = getAnimalBySlug(animalSlug);
  if (!animal) return res.status(404).render('404', { message: 'Service not found.' });

  // Noindex city-animal pages are removed entirely (404), not served noindex.
  const indexable = await isCityIndexable(stateName, countyName, cityName, animalSlug);
  if (!indexable) return res.status(404).render('404', { message: 'Page not found.' });

  const embedScript = `${LEAD_PORTAL}/api/directory/number.js?state=${encodeURIComponent(stateName)}&serviceType=${encodeURIComponent(SERVICE_TYPE)}&county=${encodeURIComponent(apiCounty(countyName))}`;
  const stateInfo = stateContent[stateName] || null;
  const animalRegionNote = getAnimalRegionContent(stateName, animalSlug);
  const cityAnimalContent = getCityAnimalContent(stateName, countyName, cityName, animalSlug);
  let countyContent = getCountyContent(stateName, countyName);
  const _contractor = await getContractor(stateName, apiCounty(countyName), SERVICE_TYPE);
  if (_contractor) countyContent = { ...(countyContent || {}), contractor: _contractor };
  // The city hub may itself be noindex (→ 404) even when this animal page is
  // indexed; pass that so the template links the city crumb/nav only when live.
  const hubIndexable = await isCityIndexable(stateName, countyName, cityName);
  // "More services" grid links only to this city's other LIVE (indexed) animals.
  const moreAnimals = (await indexableAnimalsForCity(stateName, countyName, cityName))
    .filter(a => a.slug !== animalSlug);
  const _baseSeasonal = getSeasonalContent(animalSlug);
  const _seasonalOverrides = (cityAnimalContent && Array.isArray(cityAnimalContent.seasonalOverrides))
    ? cityAnimalContent.seasonalOverrides
    : [];
  const _monthNow = new Date().getMonth();
  const _seasonalOverride = _seasonalOverrides.find(o => Array.isArray(o.months) && o.months.includes(_monthNow));
  res.render('city-animal', {
    stateName, countyName, cityName, animal, stateInfo, animalRegionNote, embedScript, cityAnimalContent, countyContent,
    indexable, hubIndexable, moreAnimals,
    faqs: getAnimalFaqs(animalSlug, { countyName, cityName, stateName, stateInfo }),
    seasonal: _seasonalOverride || _baseSeasonal,
    canonicalUrl: cityCanonicalUrl(stateSlug, citySlug, animalSlug),
    stateSlug, citySlug, toSlug, ANIMALS
  });
});

// Trailing-slash-less flat URLs → canonical trailing-slash form. Legacy county
// URLs (with or without a trailing slash) are handled by the 301 middleware
// above, so these only ever fire for flat city / state-animal / city-animal URLs.
app.get('/:stateSlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/`));
app.get('/:stateSlug/:slug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/${req.params.slug}/`));
app.get('/:stateSlug/:citySlug/:animalSlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/${req.params.citySlug}/${req.params.animalSlug}/`));

app.use((req, res) => res.status(404).render('404', { message: 'Page not found.' }));

app.listen(PORT, () => console.log(`removewildlifenow running on port ${PORT}`));
