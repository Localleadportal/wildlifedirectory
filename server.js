const express = require('express');
const fetch = require('node-fetch');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const us = require('us');
const { statesAndCounties, stateSlugToName, countySlugToName, toSlug } = require('./data/locations');

const app = express();
const PORT = process.env.PORT || 3000;
const LEAD_PORTAL = 'https://localleadportal-production.up.railway.app';
const SERVICE_TYPE = 'Wildlife Removal';

function apiCounty(name) {
  return name.replace(/ (County|Parish|Borough|Census Area|City|Municipality)$/i, '').trim();
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
  res.render('state', { stateName, counties, toSlug });
});

// County page — /georgia/cobb-county/
app.get('/:stateSlug/:countySlug/', (req, res) => {
  const stateName = stateSlugToName(req.params.stateSlug);
  if (!stateName) return res.status(404).render('404', { message: 'State not found.' });

  const countyName = countySlugToName(req.params.stateSlug, req.params.countySlug);
  if (!countyName) return res.status(404).render('404', { message: 'County not found.' });

  const embedScript = `${LEAD_PORTAL}/api/directory/number.js?state=${encodeURIComponent(stateName)}&serviceType=${encodeURIComponent(SERVICE_TYPE)}&county=${encodeURIComponent(apiCounty(countyName))}`;

  res.render('county', {
    stateName,
    countyName,
    embedScript,
    stateSlug: req.params.stateSlug,
    toSlug
  });
});

app.post('/contact/', async (req, res) => {
  const { name, email, phone, county, state, animal, message } = req.body;
  if (!name || !email) {
    return res.render('contact', { sent: false, error: 'Please provide your name and email.', formData: req.body, county: '', state: '' });
  }
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });
    await transporter.sendMail({
      from: `"RemoveWildlifeNow" <${process.env.GMAIL_USER}>`,
      to: 'localleadportal@gmail.com',
      subject: `Wildlife Removal Request — ${county || 'Unknown County'}, ${state || 'Unknown State'}`,
      html: `
        <h2>New Wildlife Removal Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:bold;width:140px;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || '—'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">County</td><td style="padding:8px;">${county || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">State</td><td style="padding:8px;">${state || '—'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Animal</td><td style="padding:8px;">${animal || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message || '—'}</td></tr>
        </table>
      `
    });
    res.render('contact', { sent: true, error: null, formData: {}, county: '', state: '' });
  } catch (e) {
    res.render('contact', { sent: false, error: 'Failed to send your message. Please try again.', formData: req.body, county: '', state: '' });
  }
});

// Redirect trailing-slash-less URLs
app.get('/:stateSlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/`));
app.get('/:stateSlug/:countySlug', (req, res) => res.redirect(301, `/${req.params.stateSlug}/${req.params.countySlug}/`));

app.use((req, res) => res.status(404).render('404', { message: 'Page not found.' }));

app.listen(PORT, () => console.log(`removewildlifenow running on port ${PORT}`));
