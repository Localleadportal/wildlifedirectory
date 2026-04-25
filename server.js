const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const us = require('us');
const { statesAndCounties, stateSlugToName, countySlugToName, toSlug } = require('./data/locations');
const { getCitiesForCounty, citySlugToName } = require('./data/cities');
const { ANIMALS, ANIMAL_SLUGS, getAnimalBySlug } = require('./data/animals');
const { stateContent } = require('./data/stateContent');
const { getAnimalRegionContent } = require('./data/animalRegionContent');
const { animalFaqs } = require('./data/faqContent');
const { getSeasonalContent } = require('./data/seasonalContent');

const app = express();
const PORT = process.env.PORT || 3000;
const LEAD_PORTAL = 'https://localleadportal-production.up.railway.app';
const SERVICE_TYPE = 'Wildlife Removal';

function apiCounty(name) {
  return name.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim();
}

// ── Contractor presence check with 5-min cache ──────────────────────────────
const _contractorCache = new Map();
async function hasContractor(stateName, countyName) {
  const key = `${stateName}|${apiCounty(countyName)}`;
  const hit = _contractorCache.get(key);
  if (hit && hit.expires > Date.now()) return hit.value;
  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 2500);
    const r = await fetch(
      `${LEAD_PORTAL}/api/directory?state=${encodeURIComponent(stateName)}&serviceType=${encodeURIComponent(SERVICE_TYPE)}&county=${encodeURIComponent(apiCounty(countyName))}`,
      { signal: controller.signal }
    );
    clearTimeout(tid);
    const d = await r.json();
    const value = !!d.available;
    _contractorCache.set(key, { value, expires: Date.now() + 5 * 60 * 1000 });
    return value;
  } catch {
    return false;
  }
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Map data endpoint — TopoJSON + FIPS→slug mapping for D3
const topoJson = JSON.parse(fs.readFileSync(require.resolve('us-atlas/states-10m.json'), 'utf8'));
const fipsMap = {};
us.STATES.forEach(s => { fipsMap[parseInt(s.fips, 10)] = { name: s.name, slug: toSlug(s.name) }; });

app.get('/api/states-map', (req, res) => {
  res.json({ topo: topoJson, fips: fipsMap });
});

// robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nAllow: /\nSitemap: https://www.removewildlifenow.com/sitemap.xml\n');
});

// Dynamic sitemap — only lists pages that have an active contractor
app.get('/sitemap.xml', async (req, res) => {
  const BASE = 'https://www.removewildlifenow.com';
  const urls = [`${BASE}/`, `${BASE}/contact/`];

  // Add all state pages
  Object.keys(statesAndCounties).forEach(state => {
    urls.push(`${BASE}/${toSlug(state)}/`);
  });

  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 5000);
    const r = await fetch(`${LEAD_PORTAL}/api/directory/active-locations`, { signal: controller.signal });
    clearTimeout(tid);
    const { locations } = await r.json();

    locations.forEach(({ state, county, serviceType }) => {
      if (serviceType !== SERVICE_TYPE) return;
      const stateSlug  = toSlug(state);
      // Find matching full county name
      const counties   = statesAndCounties[state] || [];
      const fullCounty = counties.find(c => apiCounty(c).toLowerCase() === county.toLowerCase());
      if (!fullCounty) return;
      const countySlug = toSlug(fullCounty);
      urls.push(`${BASE}/${stateSlug}/${countySlug}/`);
      ANIMALS.forEach(a => {
        urls.push(`${BASE}/${stateSlug}/${countySlug}/${a.slug}/`);
        const cities = getCitiesForCounty(state, fullCounty);
        cities.forEach(city => {
          urls.push(`${BASE}/${stateSlug}/${countySlug}/${toSlug(city)}/`);
          urls.push(`${BASE}/${stateSlug}/${countySlug}/${toSlug(city)}/${a.slug}/`);
        });
      });
    });
  } catch { /* if portal unreachable, still return static pages */ }

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

// Contact page — must be before /:stateSlug/ wildcard
app.get('/contact/', (req, res) => {
  res.render('contact', {
    sent: false, error: null, formData: {},
    county: req.query.county || '',
    state: req.query.state || ''
  });
});

// State page — /georgia/
app.get('/:stateSlug/', (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });

  const counties = statesAndCounties[stateName];
  const stateInfo = stateContent[stateName] || null;
  res.render('state', { stateName, counties, stateInfo, toSlug });
});

// County page — /georgia/cobb-county/
app.get('/:stateSlug/:countySlug/', async (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });

  const countyName = countySlugToName(req.params.stateSlug, req.params.countySlug);
  if (!countyName) return res.status(404).render('404', { message: 'County not found.' });

  const embedScript = `${LEAD_PORTAL}/api/directory/number.js?state=${encodeURIComponent(stateName)}&serviceType=${encodeURIComponent(SERVICE_TYPE)}&county=${encodeURIComponent(apiCounty(countyName))}`;
  const cities = getCitiesForCounty(stateName, countyName);
  const stateInfo = stateContent[stateName] || null;
  const contractor = await hasContractor(stateName, countyName);

  res.render('county', {
    stateName, countyName, embedScript, cities, stateInfo,
    hasContractor: contractor,
    stateSlug: req.params.stateSlug,
    toSlug, ANIMALS
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

// County-animal OR city page — /georgia/cobb-county/raccoon-removal/ OR /georgia/cobb-county/marietta/
app.get('/:stateSlug/:countySlug/:segment/', async (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });
  const countyName = countySlugToName(req.params.stateSlug, req.params.countySlug);
  if (!countyName) return res.status(404).render('404', { message: 'County not found.' });

  const seg = req.params.segment;
  const embedScript = `${LEAD_PORTAL}/api/directory/number.js?state=${encodeURIComponent(stateName)}&serviceType=${encodeURIComponent(SERVICE_TYPE)}&county=${encodeURIComponent(apiCounty(countyName))}`;

  // Animal page
  const stateInfo = stateContent[stateName] || null;

  if (ANIMAL_SLUGS.has(seg)) {
    const animal = getAnimalBySlug(seg);
    const cities = getCitiesForCounty(stateName, countyName);
    const animalRegionNote = getAnimalRegionContent(stateName, seg);
    const contractor = await hasContractor(stateName, countyName);
    return res.render('county-animal', {
      stateName, countyName, animal, cities, stateInfo, animalRegionNote, embedScript,
      hasContractor: contractor,
      faqs: animalFaqs[seg] || [],
      seasonal: getSeasonalContent(seg),
      stateSlug: req.params.stateSlug, countySlug: req.params.countySlug, toSlug, ANIMALS
    });
  }

  // City page
  const cityName = citySlugToName(stateName, countyName, seg);
  if (cityName) {
    const contractor = await hasContractor(stateName, countyName);
    return res.render('city', {
      stateName, countyName, cityName, stateInfo, embedScript,
      hasContractor: contractor,
      stateSlug: req.params.stateSlug, countySlug: req.params.countySlug, citySlug: seg, toSlug, ANIMALS
    });
  }

  return res.status(404).render('404', { message: 'Page not found.' });
});

// City-animal page — /georgia/cobb-county/marietta/raccoon-removal/
app.get('/:stateSlug/:countySlug/:citySlug/:animalSlug/', async (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });
  const countyName = countySlugToName(req.params.stateSlug, req.params.countySlug);
  if (!countyName) return res.status(404).render('404', { message: 'County not found.' });
  const cityName = citySlugToName(stateName, countyName, req.params.citySlug);
  if (!cityName) return res.status(404).render('404', { message: 'City not found.' });
  const animal = getAnimalBySlug(req.params.animalSlug);
  if (!animal) return res.status(404).render('404', { message: 'Service not found.' });

  const embedScript = `${LEAD_PORTAL}/api/directory/number.js?state=${encodeURIComponent(stateName)}&serviceType=${encodeURIComponent(SERVICE_TYPE)}&county=${encodeURIComponent(apiCounty(countyName))}`;

  const stateInfo = stateContent[stateName] || null;
  const animalRegionNote = getAnimalRegionContent(stateName, req.params.animalSlug);
  const contractor = await hasContractor(stateName, countyName);
  res.render('city-animal', {
    stateName, countyName, cityName, animal, stateInfo, animalRegionNote, embedScript,
    hasContractor: contractor,
    faqs: animalFaqs[req.params.animalSlug] || [],
    seasonal: getSeasonalContent(req.params.animalSlug),
    stateSlug: req.params.stateSlug, countySlug: req.params.countySlug, citySlug: req.params.citySlug, toSlug, ANIMALS
  });
});

// Redirect trailing-slash-less URLs
app.get('/:stateSlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/`));
app.get('/:stateSlug/:countySlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/${req.params.countySlug}/`));
app.get('/:stateSlug/:countySlug/:segment', (req, res) => res.redirect(301, `/${req.params.stateSlug}/${req.params.countySlug}/${req.params.segment}/`));
app.get('/:stateSlug/:countySlug/:citySlug/:animalSlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/${req.params.countySlug}/${req.params.citySlug}/${req.params.animalSlug}/`));

app.use((req, res) => res.status(404).render('404', { message: 'Page not found.' }));

app.listen(PORT, () => console.log(`removewildlifenow running on port ${PORT}`));
