'use strict';

// Server-side contractor fetcher with in-memory caching.
//
// Pulls the assigned contractor for a (state, county, serviceType) from
// LeadPortal's /api/directory/contractor JSON endpoint, caches the result,
// and exposes a single async getContractor() that the Express routes call
// before rendering. Failure is non-fatal: this module never throws and
// always returns null on any error so the page falls back to the (844)
// directory number and still renders.
//
// Cache strategy: 1-hour TTL on successful lookups, 5-minute TTL on null
// results (no contractor assigned) or errors. Short error TTL prevents
// hammering LeadPortal during a transient outage while still picking up
// new assignments within an hour of the change in LeadPortal.

const NodeCache = require('node-cache');

const LEAD_PORTAL = 'https://localleadportal-production.up.railway.app';
const FETCH_TIMEOUT_MS = 2000;
const SUCCESS_TTL_SEC = 60 * 60;  // 1 hour
const ERROR_TTL_SEC   = 5 * 60;   // 5 minutes

const cache = new NodeCache({
  stdTTL: SUCCESS_TTL_SEC,
  checkperiod: 120,
  useClones: false  // contractor objects are read-only downstream; skip the deep-clone overhead
});

/**
 * Fetch the assigned contractor for a (state, county, serviceType).
 *
 * Returns the contractor object when assigned, reduced to exactly:
 *   { assigned: true, name, telephone }
 *
 * The portal may also return streetAddress / addressLocality /
 * addressRegion / postalCode, image, url and licenseNumber. NONE of those
 * are carried through: most contractors work from home, so their street
 * address must never reach a template or schema block, and the rebuild's
 * rule is that only the business name and the tracking telephone may be
 * rendered from the portal record. The allowlist below is the single
 * place that reduction happens — before caching, before any template.
 *
 * Returns null when:
 *   - LeadPortal has no contractor assigned to this county
 *   - LeadPortal returns a non-200 response
 *   - The fetch times out (2 seconds)
 *   - The response isn't valid JSON or doesn't have name + telephone
 *   - Any other network / parse error
 *
 * Never throws — pages must always render.
 */
async function getContractor(state, county, serviceType) {
  if (!state || !county || !serviceType) return null;

  const key = `${state}:${county}:${serviceType}`;
  const cached = cache.get(key);
  if (cached !== undefined) return cached;

  const url = `${LEAD_PORTAL}/api/directory/contractor`
    + `?state=${encodeURIComponent(state)}`
    + `&serviceType=${encodeURIComponent(serviceType)}`
    + `&county=${encodeURIComponent(county)}`;

  let result = null;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    let res;
    try {
      res = await fetch(url, { signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
    if (!res.ok) {
      console.error('[contractor] LeadPortal non-OK', res.status, url);
    } else {
      const data = await res.json();
      // Defensive validation — require both name and telephone to claim assignment
      if (data && data.assigned === true && data.name && data.telephone) {
        // Allowlist reduction — after validation, before caching/returning.
        // Assignment (state/county/service match) is untouched; only the
        // business name and tracking telephone are carried into the site.
        // Address, image, website and licence fields are dropped here even
        // though the portal returns them.
        result = { assigned: true, name: data.name, telephone: data.telephone };
      }
      // data.assigned === false is a normal "no contractor" response; result stays null
    }
  } catch (err) {
    const msg = err && err.message ? err.message : String(err);
    console.error('[contractor] LeadPortal fetch failed', msg);
  }

  // Cache hits get the full hour; misses / errors get a short window so
  // we recover quickly when LeadPortal comes back or a contractor is assigned.
  cache.set(key, result, result ? SUCCESS_TTL_SEC : ERROR_TTL_SEC);
  return result;
}

module.exports = { getContractor };
