'use strict';

// Small HTML builders shared by the rebuild templates. Templates assemble a
// `body` string (the layout pattern), so these return strings. All phone /
// name output flows from the single server-side `pro` object — never from
// template-level lookups — which is what keeps the number rule enforceable.

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// The conversion block used at the foot of service/location pages.
// Assigned: names the local company and its number, with the confirmed
// service claims. Unassigned: the site's own brand card on the (844) line.
// Neither variant explains any routing mechanics.
function callCard(pro, opts) {
  const o = opts || {};
  const heading = o.heading || 'One call and it\'s handled';
  if (pro && pro.assigned) {
    return `<div class="callcard">
  <p class="kicker">Your local wildlife crew</p>
  <h2>${esc(heading)}</h2>
  <p class="cc-name">${esc(pro.name)}</p>
  <a class="cc-num" href="tel:${esc(pro.phoneE164)}">${esc(pro.phoneDisplay)}</a>
  <p>Call us and tell us what you're hearing, seeing or smelling — we'll take it from there. The animals come out, the entry points get sealed, and the mess gets cleaned up.</p>
  <ul><li>Licensed &amp; insured</li><li>Same-day service</li><li>Open 24/7</li><li>Humane methods</li></ul>
</div>`;
  }
  return `<div class="callcard">
  <p class="kicker">RemoveWildlifeNow</p>
  <h2>${esc(heading)}</h2>
  <a class="cc-num" href="tel:+18445443498">(844) 544-3498</a>
  <p>Call us and tell us what you're hearing, seeing or smelling — we'll take it from there. The animals come out, the entry points get sealed, and the mess gets cleaned up.</p>
  <ul><li>Licensed &amp; insured</li><li>Same-day service</li><li>Open 24/7</li><li>Humane methods</li></ul>
</div>`;
}

function faqSection(faqs, heading) {
  if (!Array.isArray(faqs) || faqs.length === 0) return '';
  const items = faqs.map(f => `  <details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n');
  return `<h2>${esc(heading || 'Questions we hear')}</h2>\n<div class="faq">\n${items}\n</div>`;
}

function crumbsHtml(crumbs) {
  // crumbs: [{label, href}] — last item rendered as plain text.
  if (!Array.isArray(crumbs) || crumbs.length === 0) return '';
  const parts = crumbs.map((c, i) => {
    if (i === crumbs.length - 1 || !c.href) return esc(c.label);
    return `<a href="${esc(c.href)}">${esc(c.label)}</a>`;
  });
  return `<p class="crumbs">${parts.join(' &nbsp;/&nbsp; ')}</p>`;
}

// FAQPage schema — only ever built from FAQs actually rendered on the page.
function faqSchema(faqs) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

// LocalBusiness-ish service schema with SAFE fields only: name + telephone
// from the page's pro object, area served, and the page URL. No street
// address, no external URL, no image from any external record.
function serviceSchema({ pro, pageUrl, serviceType, areaName }) {
  const business = {
    '@type': 'LocalBusiness',
    name: pro && pro.assigned ? pro.name : 'RemoveWildlifeNow',
    telephone: pro ? pro.phoneDisplay : '(844) 544-3498',
    url: pageUrl,
    areaServed: areaName || undefined,
    openingHours: 'Mo-Su 00:00-24:00'
  };
  Object.keys(business).forEach(k => business[k] === undefined && delete business[k]);
  return {
    '@type': 'Service',
    serviceType: serviceType,
    provider: business,
    areaServed: areaName || undefined,
    url: pageUrl
  };
}

// Voice scrubber for legacy authored content. The pre-rebuild data files were
// written in marketplace voice ("contractor in our directory", "we connect
// homeowners", free-estimate promises). Rendered pages must read as one local
// company, so every authored string passes through here: directory/network
// phrasing becomes first-person, and unconfirmed free-service claims are
// neutralised. Ordered most-specific first.
const SCRUB_RULES = [
  [/RemoveWildlifeNow\.com is a wildlife removal directory\. Calls and form submissions from this page route to one assigned, licensed wildlife removal contractor serving ([^.]+)\. We are not the contractor — we connect homeowners with the local pro covering their county\./g,
    'When you call or write from this page, you reach the crew that does this work in $1.'],
  [/We are not the contractor — we connect homeowners with the local pro covering their county\.?/g,
    'When you call, you reach the crew that does the work.'],
  [/This directory connects homeowners with[^.]*\./g, 'We handle these calls ourselves.'],
  [/Each contractor in our directory provides free property-specific estimates\.?/g,
    'We price every job after inspecting the property, before any work begins.'],
  [/Each contractor in our directory provides estimates\.?/g,
    'We price every job after inspecting the property, before any work begins.'],
  [/Every contractor in this directory operating in ([A-Z][A-Za-z ]+? County) is required to hold/g,
    'Our operators working in $1 hold'],
  [/Every contractor in this directory operating in ([A-Z][A-Za-z ]+? County) holds/g,
    'Our operators working in $1 hold'],
  [/every contractor in this directory operating in ([A-Z][A-Za-z ]+? County) is required to hold/g,
    'our operators working in $1 hold'],
  [/Every contractor in this directory holds/g, 'Our operators hold'],
  [/every contractor in this directory holds/g, 'our operators hold'],
  [/Every contractor in this directory is licensed and trained/g, 'Our crew is licensed and trained'],
  [/Every contractor operating in this directory holds/g, 'Our operators hold'],
  [/every contractor in the directory holds/g, 'our operators hold'],
  [/every contractor in our directory holds/g, 'our operators hold'],
  [/every contractor in our directory is licensed and insured/g, 'we are licensed and insured'],
  [/Every contractor in our directory is licensed and insured/g, 'We are licensed and insured'],
  [/All operators on this directory hold/g, 'Our operators hold'],
  [/every operator on this directory holds/g, 'our operators hold'],
  [/A licensed contractor in this directory will/g, 'We will'],
  [/a licensed contractor in this directory will/g, 'we will'],
  [/The licensed contractor serving ([A-Za-z ]+?) through this directory/g, 'Our crew serving $1'],
  [/The contractor serving ([A-Za-z ]+?) through this directory is/g, 'Our crew serving $1 is'],
  [/the contractor working through this directory/g, 'our crew'],
  [/contractors in our network offer/g, 'we offer'],
  [/operators in our network/g, 'our operators'],
  [/in our network/g, ''],
  [/licensed operators handle every job in the directory/g, 'licensed operators handle every job'],
  [/Find a Local Wildlife Removal Contractor/g, 'Your Local Wildlife Removal Crew'],
  [/Find a local contractor in your area/g, 'See your area'],
  [/find a local pro/g, 'call us'],
  [/Local pros, 24\/7/g, 'Local crew, 24/7'],
  [/local pro serving/g, 'crew serving'],
  [/the local pro/g, 'our crew'],
  [/Do you offer free inspections and consultations\?/g, 'Do you offer inspections and consultations?'],
  [/Do you offer free inspections\?/g, 'Do you offer inspections?'],
  [/1-Year Exclusion Guarantee/g, 'Exclusion Workmanship'],
  [/free property-specific estimates/g, 'property-specific estimates'],
  [/free inspections?/gi, (m) => m.toLowerCase().startsWith('free') && m[0] === 'F' ? 'Inspections' : 'inspections'],
  [/free estimates?/gi, (m) => m[0] === 'F' ? 'Estimates' : 'estimates'],
  [/free quotes?/gi, (m) => m[0] === 'F' ? 'Quotes' : 'quotes'],
  [/free consultations?/gi, (m) => m[0] === 'F' ? 'Consultations' : 'consultations'],
  [/and we'll connect you with our crew covering your area/g, "and you'll be talking to our crew covering your area"],
  [/we'll connect you with/g, "you'll reach"],
  [/we connect you with/g, 'you reach'],
  [/connect you with/g, 'put you through to'],
  [/\bWe dispatch\b/g, 'We send out'],
  [/\bwe dispatch\b/g, 'we send out'],
  [/for current dispatch availability/g, 'to check current availability'],
  [/current dispatch availability/g, 'current availability'],
  [/same-day dispatch/g, 'same-day response'],
  [/A pre-dispatch phone call/g, 'A phone call first'],
  [/before dispatch, since/g, 'before we send a crew, since'],
  [/will dispatch directly/g, 'will respond directly'],
  [/dispatching from outside the area/g, 'sending in crews from outside the area'],
  [/property-specific and free/g, 'property-specific'],
  [/Estimates are property-specific and free\.?/g, 'Estimates are property-specific.'],
  [/our 24\/7 dispatch line/g, 'our 24/7 line'],
  [/24\/7 dispatch line/g, '24/7 line'],
  [/for same-day ([A-Z][A-Za-z ]+?) dispatch/g, 'for same-day service in $1'],
  [/Same-day ([A-Z][A-Za-z-]+?) dispatch is typical/g, 'Same-day service in $1 is typical'],
  [/same-day ([A-Z][A-Za-z-]+?) dispatch/g, 'same-day service in $1'],
  [/call for dispatch/g, 'call us'],
  [/Call for dispatch/g, 'Call us'],
  [/24\/7 dispatch/g, '24/7 response'],
  [/Same-day dispatch/g, 'Same-day response'],
  [/same-day dispatch/g, 'same-day response'],
  [/([A-Za-z ]+? County) dispatch runs/g, '$1 calls run'],
  [/dispatch logistics/g, 'scheduling'],
  [/are dispatched per/g, 'are euthanized per'],
  [/dispatch is the standard/g, 'response is the standard'],
  [/to be connected with[^.<]*/g, 'to reach our crew'],
  [/for an immediate connection[^.<]*/g, 'for immediate help'],
  [/Browse contractors by state/g, 'Browse by state'],
  [/to find one near you/g, 'to find your area'],
  [/find a bat removal pro near you/g, 'get a bat removal crew out'],
  [/find a ([a-z ]+?) pro near you/g, 'get a $1 crew out'],
  [/\ba inspections\b/g, 'an inspection'],
  [/\ba estimates\b/g, 'an estimate'],
  [/\ban estimates\b/g, 'an estimate'],
  [/\bour directory\b/g, 'our crew'],
  [/\bthis directory\b/g, 'our crew'],
  [/\bthe directory\b/g, 'our crew'],
  [/  +/g, ' ']
];

function scrubVoice(text) {
  if (!text || typeof text !== 'string') return text;
  let out = text;
  for (const [re, rep] of SCRUB_RULES) out = out.replace(re, rep);
  return out;
}

module.exports = { esc, callCard, faqSection, crumbsHtml, faqSchema, serviceSchema, scrubVoice };
