'use strict';

// ── Form spam defences ───────────────────────────────────────────────────────
// Same layered set as wildlifeexpertnow.com and tacwildlife.com, invisible to
// a real person: no CAPTCHA, because every puzzle costs real leads. Each check
// returns one of:
//   { ok: true }
//   { spam: reason }    -> silently discarded; the bot sees a normal "thank you"
//   { error: message }  -> a person probably tripped it; they see the message
//                          and their details stay filled in
// Logs carry reason codes only, never what was typed.

const crypto = require('crypto');

// Stable across deploys (so a page left open during a deploy still submits),
// different per environment. FORM_SECRET overrides it if ever set.
const SECRET = process.env.FORM_SECRET
  || crypto.createHash('sha256').update('removewildlifenow-form:' + (process.env.RAILWAY_SERVICE_ID || 'local')).digest('hex');

const MIN_FILL_MS = 3000;                  // nobody reads and fills a form in under 3 s
const MAX_AGE_MS  = 24 * 60 * 60 * 1000;   // a tab left open over a day gets a polite retry

const sign = ts => crypto.createHmac('sha256', SECRET).update(String(ts)).digest('hex').slice(0, 24);

// Rendered into every form as a hidden field.
function issueToken(now = Date.now()) {
  return `${now}.${sign(now)}`;
}

function checkToken(token, now = Date.now()) {
  const m = /^(\d{13})\.([a-f0-9]{24})$/.exec(String(token || ''));
  if (!m) return { spam: 'no_token' };
  const ts = Number(m[1]);
  const a = Buffer.from(m[2]), b = Buffer.from(sign(ts));
  if (!crypto.timingSafeEqual(a, b)) return { spam: 'bad_token' };
  const age = now - ts;
  if (age < MIN_FILL_MS) return { spam: 'too_fast' };
  if (age > MAX_AGE_MS) return { error: 'This page was open for a long time, so please press send once more.' };
  return { ok: true };
}

// Links and markup: a homeowner describing a raccoon does not paste URLs.
const LINKY = /(https?:\/\/|www\.|\[url|<a\s|<\/?[a-z][^>]*>|\.(ru|cn|xyz|top|click)\b)/i;
// Scripts this business will never receive a genuine lead in.
const FOREIGN_SCRIPT = /[Ѐ-ӿ؀-ۿ฀-๿぀-ヿ一-鿿가-힯]/;

function checkContent(v) {
  const all = [v.firstName, v.lastName, v.address, v.description].join(' ');
  if (LINKY.test(all)) return { spam: 'link' };
  if (FOREIGN_SCRIPT.test(all)) return { spam: 'script' };
  for (const n of [v.firstName, v.lastName]) {
    if (n.length > 40 || /\d/.test(n)) return { spam: 'name' };
  }
  if (v.description.length > 3000) return { spam: 'long' };
  const digits = v.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11 || (digits.length === 11 && digits[0] !== '1')) {
    return { error: 'Please enter a 10-digit phone number so we can text or call you back.' };
  }
  return { ok: true };
}

// A browser posting our own form sends Origin = our site. Another site's
// origin is rejected; a missing Origin (some bots, some old clients) is
// left to the other checks.
function checkOrigin(req, allowedHosts) {
  const origin = req.get('origin');
  if (!origin) return { ok: true };
  try {
    return allowedHosts.includes(new URL(origin).host) ? { ok: true } : { spam: 'origin' };
  } catch { return { spam: 'origin' }; }
}

// In-memory per-IP limiter. One Railway instance, so memory is the whole
// picture; a restart resets it, which only ever errs toward letting people through.
function createRateLimiter({ max = 5, windowMs = 10 * 60 * 1000 } = {}) {
  const hits = new Map();
  return function check(ip, now = Date.now()) {
    const recent = (hits.get(ip) || []).filter(t => now - t < windowMs);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) for (const [k, ts] of hits) if (now - ts[ts.length - 1] > windowMs) hits.delete(k);
    return recent.length > max
      ? { error: 'That is a lot of requests in a short time. Please call the number on this page instead.' }
      : { ok: true };
  };
}

module.exports = { issueToken, checkToken, checkContent, checkOrigin, createRateLimiter, MIN_FILL_MS, MAX_AGE_MS };
