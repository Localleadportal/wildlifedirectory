'use strict';

// ── "Text or call me back" requests ──────────────────────────────────────────
// The form on every city hub and city-animal page posts here. The lead is
// handed to LeadPortal (POST /api/web-leads), which routes it to the
// contractor assigned to the page's county — the same lookup that put their
// number on the page — or to the admin where the page showed the 844. This
// site never learns a contractor's email, and keeps no copy of the lead.
//
// Only the page's slugs travel with the form. resolvePage() turns them into
// state / county / city server-side from the same data the page itself uses,
// so a tampered field cannot send a lead to the wrong contractor.
//
// The visitor is told "received" only when LeadPortal answered 2xx (it has
// stored the row). Logs carry a short reference and outcome codes only —
// never the name, phone, address or message.

const crypto = require('crypto');
const fetch = require('node-fetch');

const LEAD_PORTAL = 'https://localleadportal-production.up.railway.app';
const TIMEOUT_MS = 8000;

async function postToLeadPortal(payload, { env, fetchImpl }) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const res = await fetchImpl(`${env.LEAD_PORTAL_URL || LEAD_PORTAL}/api/web-leads`, {
      method: 'POST',
      signal: ctl.signal,
      redirect: 'error',
      headers: { 'Content-Type': 'application/json', 'X-Site-Key': env.WEB_LEAD_KEY },
      body: JSON.stringify(payload)
    });
    if (res.ok) return { status: 'accepted' };
    return { status: 'rejected', httpStatus: res.status };
  } catch (err) {
    return { status: ctl.signal.aborted ? 'timeout' : 'network' };
  } finally {
    clearTimeout(timer);
  }
}

// resolvePage: async (body) => { state, county, city, pageLabel, pageUrl, backUrl }
// for a live page, or null. spamGuard: (req, values) => check result (null
// disables it). Dependencies are injectable for tests.
function createLeadHandler({ resolvePage, serviceType, spamGuard = null, env = process.env, fetchImpl = fetch, logger = console }) {
  logger.log(`[LEAD] config leadportal=${env.LEAD_PORTAL_URL || LEAD_PORTAL} key=${env.WEB_LEAD_KEY ? 'configured' : 'NOT_CONFIGURED'}`);

  return async function leadHandler(req, res) {
    const body = req.body || {};
    const str = k => String(body[k] || '').trim();
    const v = {
      firstName:   str('first_name'),
      lastName:    str('last_name'),
      phone:       str('phone'),
      address:     str('address'),
      description: str('description'),
      contactPref: body.contact_pref === 'call' ? 'call' : 'text'
    };
    let page = null;
    try { page = await resolvePage(body); } catch (e) { page = null; }
    const wantsJson = (req.get('accept') || '').includes('application/json');

    const reply = (status, { sent = false, error = null } = {}) => {
      if (wantsJson) return res.status(status).json(sent ? { ok: true, firstName: v.firstName, contactPref: v.contactPref } : { ok: false, error });
      return res.status(status).render('request-sent', {
        sent, error, firstName: v.firstName, contactPref: v.contactPref,
        backUrl: page ? page.backUrl : '/'
      });
    };

    // Honeypot and anything the guard is sure about: the same success a person
    // would see, so bots get no signal to adapt to.
    if (body.website) {
      logger.log('[LEAD] honeypot submission discarded');
      return reply(200, { sent: true });
    }
    if (!page) {
      logger.log('[LEAD] spam discarded reason=unknown_page');
      return reply(200, { sent: true });
    }
    if (spamGuard) {
      const g = spamGuard(req, v);
      if (g.spam) {
        logger.log(`[LEAD] spam discarded reason=${g.spam}`);
        return reply(200, { sent: true });
      }
      if (g.error) return reply(400, { error: g.error });
    }
    if (!v.firstName || !v.lastName || !v.phone || !v.address) {
      return reply(400, { error: 'Please fill in your name, phone number and address so we can get back to you.' });
    }
    if (!env.WEB_LEAD_KEY) {
      logger.error('[LEAD] outcome=NOT_SENT reason=no_WEB_LEAD_KEY');
      return reply(503, { error: 'Our request form is down for a moment. Please call the number on this page.' });
    }

    const ref = crypto.randomBytes(6).toString('hex');
    const payload = {
      ...v,
      ref,
      state: page.state,
      county: page.county,
      city: page.city,
      serviceType,
      pageLabel: page.pageLabel,
      pageUrl: page.pageUrl
    };

    // One retry on a timeout, network error or 5xx. Safe because LeadPortal
    // dedupes on ref: a first attempt that did land is not stored or alerted twice.
    let out = await postToLeadPortal(payload, { env, fetchImpl });
    if (out.status !== 'accepted' && !(out.httpStatus >= 400 && out.httpStatus < 500)) {
      out = await postToLeadPortal(payload, { env, fetchImpl });
    }

    const line = `[LEAD] ref=${ref} page=${page.backUrl} outcome=${out.status}${out.httpStatus ? ` http=${out.httpStatus}` : ''}`;
    if (out.status === 'accepted') {
      logger.log(line);
      return reply(200, { sent: true });
    }
    logger.error(line);
    return reply(503, { error: 'Sorry, your request did not go through. Please call the number on this page and we will help you right away.' });
  };
}

module.exports = { createLeadHandler, postToLeadPortal };
