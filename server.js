const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const us = require('us');
const { statesAndCounties, stateSlugToName, countySlugToName, toSlug } = require('./data/locations');

const app = express();
const PORT = process.env.PORT || 3000;
const LEAD_PORTAL = 'https://localleadportal-production.up.railway.app';
const SERVICE_TYPE = 'Wildlife Removal';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Map data endpoint — TopoJSON + FIPS→slug mapping for D3
const topoJson = JSON.parse(fs.readFileSync(require.resolve('us-atlas/states-10m.json'), 'utf8'));
const fipsMap = {};
us.STATES.forEach(s => { fipsMap[parseInt(s.fips, 10)] = { name: s.name, slug: toSlug(s.name) }; });

app.get('/api/states-map', (req, res) => {
  res.json({ topo: topoJson, fips: fipsMap });
});

// Homepage
app.get('/', (req, res) => {
  res.render('index');
});

// State page — /georgia/
app.get('/:stateSlug/', (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });

  const counties = statesAndCounties[stateName];
  res.render('state', { stateName, counties, toSlug });
});

// County page — /georgia/cobb-county/
app.get('/:stateSlug/:countySlug/', (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });

  const countyName = countySlugToName(req.params.stateSlug, req.params.countySlug);
  if (!countyName) return res.status(404).render('404', { message: 'County not found.' });

  const embedScript = `${LEAD_PORTAL}/api/directory/number.js?state=${encodeURIComponent(stateName)}&serviceType=${encodeURIComponent(SERVICE_TYPE)}&county=${encodeURIComponent(countyName)}`;

  res.render('county', {
    stateName,
    countyName,
    embedScript,
    stateSlug: req.params.stateSlug,
    toSlug
  });
});

// Redirect trailing-slash-less URLs
app.get('/:stateSlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/`));
app.get('/:stateSlug/:countySlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/${req.params.countySlug}/`));

app.use((req, res) => res.status(404).render('404', { message: 'Page not found.' }));

app.listen(PORT, () => console.log(`removewildlifenow running on port ${PORT}`));
