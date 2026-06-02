#!/usr/bin/env node
'use strict';
/*
 * Verifier for enrichment drafts (run BEFORE any draft is published).
 *
 * For every draft in drafts/<county>/*.json it:
 *   1. Re-scores UNIQUENESS — splits the draft into the same normalized blocks
 *      the detector uses and checks each against the LIVE corpus, EXCLUDING the
 *      page's own current content. Reports before% (current live) -> after% (draft).
 *   2. Flags any sentence asserting a specific local fact (exit #, distance, street,
 *      water body, park, %, $, year) that is NOT present in the page's grounding —
 *      i.e. a possible fabrication for a human to fact-check.
 *
 * Writes drafts/REVIEW.md (full prose + scores + flags) and prints a summary.
 * No network, no writes to live data.
 */

const fs = require('fs');
const path = require('path');
const cs = require('./contentScan');
const { buildGrounding, flagUngrounded, stripTags } = require('./enrich-lib');

const DRAFT_ROOT = path.join(__dirname, '..', 'drafts');
const OUT = path.join(DRAFT_ROOT, 'REVIEW.md');

const { pages, blockIndex } = cs.scanPages();
const byUrl = new Map(pages.map(p => [p.url, p]));

function draftBlocks(draft, page) {
  const toks = cs.tokensFor({
    city: page.city, countyName: page.countyName, stateName: page.stateName,
    stateAbbr: 'GA', animalSlug: page.animalSlug,
  });
  const fields = [];
  if (draft.intro) fields.push(draft.intro);
  if (draft.extendedBody) fields.push(draft.extendedBody);
  for (const f of (draft.faqs || [])) { if (f.q) fields.push(f.q); if (f.a) fields.push(f.a); }
  const out = [];
  for (const text of fields) {
    for (const b of cs.toBlocks(text)) {
      const norm = cs.normalize(b, toks);
      const w = cs.wordCount(norm);
      if (w < 5) continue;
      out.push({ hash: cs.hash(norm), words: w });
    }
  }
  return out;
}

// uniqueness of the draft vs the corpus, EXCLUDING this page's own live blocks
function scoreDraft(draft, page) {
  const blocks = draftBlocks(draft, page);
  let total = 0, unique = 0;
  for (const b of blocks) {
    total += b.words;
    const e = blockIndex.get(b.hash);
    // shared if any OTHER page (not this url) has the block
    const sharedElsewhere = e && [...e.pages].some(u => u !== page.url);
    if (!sharedElsewhere) unique += b.words;
  }
  return { uniqueness: total ? (unique / total) * 100 : null, total, unique, blocks: blocks.length };
}

function collectDrafts() {
  const out = [];
  if (!fs.existsSync(DRAFT_ROOT)) return out;
  for (const county of fs.readdirSync(DRAFT_ROOT)) {
    const dir = path.join(DRAFT_ROOT, county);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
      out.push(JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
    }
  }
  return out;
}

const drafts = collectDrafts();
const fmt = (n) => n === null ? 'n/a' : n.toFixed(1) + '%';
let md = `# Enrichment pilot — draft review\n\n_Re-scored against the live corpus (draft blocks vs every other page). Flags list specific local claims NOT found in the page's stored grounding — fact-check each before publishing. No drafts have been published._\n\n`;
let mdProse = '\n---\n\n## Full draft prose (for fact-check)\n\n';

const rows = [];
for (const draft of drafts) {
  const page = byUrl.get(draft.url);
  if (!page) { console.error('no live page for draft', draft.url); continue; }
  const g = buildGrounding(page);
  const score = scoreDraft(draft, page);
  const flags = flagUngrounded((draft.extendedBody || '') + ' ' + (draft.intro || '') + ' ' +
    (draft.faqs || []).map(f => f.q + ' ' + f.a).join(' '), g);
  rows.push({ url: draft.url, before: page.uniqueness, after: score.uniqueness, words: score.total, flags });

  mdProse += `### ${draft.url}\n\n`;
  mdProse += `**Uniqueness:** ${fmt(page.uniqueness)} → **${fmt(score.uniqueness)}**  |  body words: ${score.total}  |  ungrounded-claim flags: ${flags.length}\n\n`;
  if (draft.intro) mdProse += `**intro:** ${stripTags(draft.intro)}\n\n`;
  mdProse += `**extendedBody:**\n\n${stripTags(draft.extendedBody)}\n\n`;
  if (draft.faqs && draft.faqs.length) {
    mdProse += `**faqs:**\n\n` + draft.faqs.map(f => `- **${f.q}** ${f.a}`).join('\n') + '\n\n';
  }
  if (flags.length) {
    mdProse += `**⚠ ungrounded specific claims to verify:**\n\n` +
      flags.map(f => `- [${f.kind}] \`${f.token}\` — "${f.sentence}"`).join('\n') + '\n\n';
  } else {
    mdProse += `**✓ no ungrounded specific claims detected.**\n\n`;
  }
}

md += '| Page | Before | After | Body words | Flags |\n|---|---|---|---|---|\n';
for (const r of rows) md += `| \`${r.url}\` | ${fmt(r.before)} | ${fmt(r.after)} | ${r.words} | ${r.flags.length} |\n`;
md += mdProse;
fs.writeFileSync(OUT, md, 'utf8');

console.log('=== Draft verification ===');
for (const r of rows) console.log(`  ${fmt(r.before).padStart(6)} -> ${fmt(r.after).padStart(6)}  flags:${String(r.flags.length).padStart(2)}  ${r.url}`);
console.log('\nFull review written to:', OUT);
const totalFlags = rows.reduce((s, r) => s + r.flags.length, 0);
console.log(`Pages: ${rows.length} | total ungrounded-claim flags: ${totalFlags}`);
