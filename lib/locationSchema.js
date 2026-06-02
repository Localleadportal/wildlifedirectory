// Shared structured-data (JSON-LD) builders for every location page.
//
// Design notes / guardrails (see the schema task brief):
//   • This is a DIRECTORY, not a single physical local business. We therefore
//     emit ONLY BreadcrumbList + Service (+ FAQPage when a real visible FAQ
//     exists). We deliberately DO NOT emit LocalBusiness/Place, a postal/street
//     address, business geo-coordinates, openingHours, or AggregateRating/Review
//     markup — representing the directory as a physical business is a spam risk.
//   • The provider is an Organization carrying ONLY the name + telephone that are
//     actually shown on the page.
//   • Every value must match content visible on the page. The breadcrumb trail
//     here is the single source of truth for BOTH the visible <nav> and the
//     BreadcrumbList JSON-LD (see views/_breadcrumb.ejs + views/_location-schema.ejs),
//     so the two can never drift apart and the State level can't regress per-page.

const BASE = 'https://www.removewildlifenow.com';

// Canonical breadcrumb trail per page type. The LAST item is the current page:
// it intentionally has no `url` (rendered as a <span>, and emitted without an
// `item` in JSON-LD — valid per schema.org). All earlier items carry a
// root-relative `url` (e.g. "/georgia/") matching the on-page links.
function buildCrumbs(pageType, f) {
  const home   = { name: 'Home', url: '/' };
  const state  = { name: f.stateName,  url: `/${f.stateSlug}/` };
  const county = { name: f.countyName, url: `/${f.stateSlug}/${f.countySlug}/` };
  const city   = { name: f.cityName,   url: `/${f.stateSlug}/${f.countySlug}/${f.citySlug}/` };
  switch (pageType) {
    case 'state':           return [home, { name: f.stateName }];
    case 'county':          return [home, state, { name: f.countyName }];
    case 'county-animal':   return [home, state, county, { name: f.serviceName }];
    case 'city':            return [home, state, county, { name: f.cityName }];
    case 'city-animal':     return [home, state, county, city, { name: f.serviceName }];
    case 'animal-national': return [home, { name: f.serviceName }];
    default:                return [home];
  }
}

function breadcrumbSchema(crumbs, pageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': pageUrl + '#breadcrumb',
    'itemListElement': crumbs.map((c, i) => {
      const item = { '@type': 'ListItem', 'position': i + 1, 'name': c.name };
      if (c.url) item.item = BASE + c.url; // last (current) crumb omits item
      return item;
    })
  };
}

// Parse the lower bound out of a visible cost range like "$200–$600+" → 200.
// We only ever surface the stated MINIMUM as a number; the "+"/open-ended upper
// bound is preserved verbatim in the offer description rather than invented as a
// hard highPrice.
function parseMinPrice(range) {
  if (!range) return null;
  const head = String(range).split(/[–—-]/)[0]; // en-dash / em-dash / hyphen
  const m = head.replace(/,/g, '').match(/\d+/);
  return m ? Number(m[0]) : null;
}

// Service JSON-LD. opts:
//   serviceType   string  e.g. "Bat Removal" or "Wildlife Removal" (hub pages)
//   locationLabel string  e.g. "Marietta, Georgia" / "Cobb County, Georgia"
//   areaServed    array   schema.org City / AdministrativeArea objects
//   providerName  string  name shown on the page (contractor or brand)
//   providerPhone string  phone shown on the page (E.164)
//   priceRange    string? exact visible cost range, only on pages that show one
//   pageUrl       string
//   description   string  the page's meta description (visible-aligned)
function serviceSchema(opts) {
  const svc = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': opts.pageUrl + '#service',
    'name': opts.serviceType + ' in ' + opts.locationLabel,
    'serviceType': opts.serviceType,
    'provider': {
      '@type': 'Organization',
      'name': opts.providerName,
      'telephone': opts.providerPhone
    },
    'areaServed': opts.areaServed,
    'description': opts.description
  };
  if (opts.priceRange) {
    const min = parseMinPrice(opts.priceRange);
    svc.offers = {
      '@type': 'Offer',
      'priceCurrency': 'USD',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'priceCurrency': 'USD',
        ...(min != null ? { 'minPrice': min } : {}),
        'description': opts.priceRange
      }
    };
  }
  return svc;
}

// FAQPage JSON-LD. Returns null when there's no visible FAQ so the partial can
// skip emitting an empty block. faqs: [{ q, a }, ...] matching the visible Q&A.
function faqSchema(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
    }))
  };
}

module.exports = { BASE, buildCrumbs, breadcrumbSchema, serviceSchema, faqSchema, parseMinPrice };
