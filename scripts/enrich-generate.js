#!/usr/bin/env node
'use strict';
/*
 * Grounded enrichment generator (Anthropic API runner) — for scaling PAST the pilot.
 *
 * For each target page it builds the grounding payload (stored local facts only),
 * sends SYSTEM_PROMPT + per-page user prompt to Claude, and writes the returned
 * draft to drafts/<county>/<slug>.json. It NEVER writes to the live data files and
 * NEVER flips indexability — drafts are reviewed (and verified by enrich-verify.js)
 * before a human promotes them.
 *
 * Requires ANTHROPIC_API_KEY in the environment. Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/enrich-generate.js <urlsFile.json>
 * where urlsFile.json is a JSON array of page URLs (e.g. the pilot set). With no
 * argument it reads scripts/pilot-urls.json.
 *
 * Model: claude-opus-4-8 (override with ANTHROPIC_MODEL).
 */

const fs = require('fs');
const path = require('path');
const { scanPages } = require('./contentScan');
const { SYSTEM_PROMPT, buildGrounding, buildUserPrompt } = require('./enrich-lib');

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-opus-4-8';
const KEY = process.env.ANTHROPIC_API_KEY;
const DRAFT_ROOT = path.join(__dirname, '..', 'drafts');

async function callClaude(system, user) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({
      model: MODEL, max_tokens: 4096, system,
      messages: [{ role: 'user', content: user }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error('No JSON in model output');
  return JSON.parse(m[0]);
}

async function main() {
  if (!KEY) { console.error('ERROR: set ANTHROPIC_API_KEY to run the generator.'); process.exit(1); }
  const urlsFile = process.argv[2] || path.join(__dirname, 'pilot-urls.json');
  const urls = JSON.parse(fs.readFileSync(urlsFile, 'utf8'));
  const byUrl = new Map(scanPages().pages.map(p => [p.url, p]));

  for (const url of urls) {
    const page = byUrl.get(url);
    if (!page) { console.error('skip (not found):', url); continue; }
    const g = buildGrounding(page);
    const user = buildUserPrompt(page, g);
    process.stdout.write(`generating ${url} ... `);
    try {
      const draft = await callClaude(SYSTEM_PROMPT, user);
      draft.url = url;
      const slug = url.replace(/^\/|\/$/g, '').replace(/\//g, '__');
      const dir = path.join(DRAFT_ROOT, page.countySlug);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, slug + '.json'), JSON.stringify(draft, null, 2), 'utf8');
      console.log('ok');
    } catch (e) { console.log('FAILED:', e.message); }
  }
  console.log('\nDrafts written under', DRAFT_ROOT, '\nNow run: node scripts/enrich-verify.js');
}
main();
