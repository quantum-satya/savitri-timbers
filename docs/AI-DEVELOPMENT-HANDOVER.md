# AI Development Handover — Savitri Timbers Digital Platform

This file is a portable briefing for a new AI coding assistant that does **not** have Cursor chat history.

Build further work from the **repository**, **git**, and **approved specs**. Do not invent pages, products, certifications, performance ratings, or photographs.

**Status of this file:** created 2026-09-10 (AI-032). Prefer the Sprint 4.3 specification (DEV-043) when this briefing and that spec disagree.

GitHub repository: `quantum-satya/savitri-timbers` (`git@github.com:quantum-satya/savitri-timbers.git`).

---

## 1. Project identity

**Company:** Savitri Timbers Pvt. Ltd. — premium hardwood manufacturer.

**We are:** importers of premium hardwood; hardwood processors; sports flooring manufacturers; OEM manufacturing partner; precision woodworking specialists.

**We are not:** flooring contractors, interior designers, construction companies, or retail flooring installers.

**Website:** https://savitriagro.com — the Savitri Timbers Digital Platform (STDP). Tagline in use: *Delivering Quality · Honouring Commitment*.

**Purpose:** a premium digital presence and **credibility layer**. Goals for new work: credibility, manufacturing authority, technical expertise, customer confidence, lead generation, SEO.

**Business model (current):** sales are **offline / direct**. The site supports discovery and enquiry; it is not an online sales channel.

**The website is not (at this stage):** e-commerce, a quotation engine, a CMS, customer login, a CRM, or a measured analytics-driven conversion pipeline. Do not add those without a new approved specification.

---

## 2. Current production state

Verified from git (`git fetch origin main`, 2026-09-10) and GitHub:

| Item | Value |
| --- | --- |
| Production branch | `main` (`origin/main`) |
| Production merge commit | `b38195b` — `Merge pull request #5 from quantum-satya/sprint-4-3-baseline` (2026-09-10) |
| Sprint 4.3 tip included in that merge | `46881d3` (second parent of `b38195b`) |
| Live hostname | https://savitriagro.com |
| Hosting | Cloudflare Pages (approved decision DEC-2026-002; live responses include `cf-ray`) |
| GitHub default / production branch | `main` |
| Feature branch that shipped 4.3 | `sprint-4-3-baseline` (still on origin at `46881d3`) |
| Cloudflare project / dashboard name | **UNKNOWN** (not in this repository) |
| Cloudflare Preview hostname | **UNKNOWN** (no `*.pages.dev` URL is recorded in the repo) |
| Exact Pages production deployment SHA vs `b38195b` | **UNKNOWN** (Pages UI is not in git) |

**Live HTTP check (2026-09-10, curl):**

- `/` → 200  
- `/technical-resources` → 200  
- `/flooring/sports-flooring` → 308 to trailing slash, then 200  
- `/flooring.html` → **301** to `/flooring/sports-flooring/` then 200  
- `/sitemap.xml`, `/robots.txt` → 200  

**Architecture:** static HTML + CSS + small vanilla JS. No framework. Primary CSS: `css/style.css`; flooring/TR: `css/flooring.css`; products: `css/products.css`. JS: `js/enquiry.js` (contact form), `js/main.js`. Cloudflare config in repo: `_redirects`, `_headers`.

**Canonical public URLs** (extensionless on Pages; files in parentheses):

| URL | File |
| --- | --- |
| `/` | `index.html` |
| `/products` | `products.html` |
| `/about` | `about.html` |
| `/manufacturing` | `manufacturing.html` |
| `/contact` | `contact.html` |
| `/flooring/sports-flooring` | `flooring/sports-flooring/index.html` |
| `/flooring/indoor-sports` | `flooring/indoor-sports/index.html` |
| `/flooring/maple` | `flooring/maple/index.html` |
| `/flooring/teak` | `flooring/teak/index.html` |
| `/technical-resources` | `technical-resources.html` |

**Primary nav label:** “Flooring Solutions” → hub. Optional rename to “Sports Flooring” was **not** done.

**`_redirects`:**

```
/flooring.html    /flooring/sports-flooring/    301
/flooring         /flooring/sports-flooring/    301
```

`flooring.html` remains a **local stub** (meta refresh + canonical) because `python3 -m http.server` ignores `_redirects`. Live Cloudflare returned **301** `/flooring.html` → `/flooring/sports-flooring/` on 2026-09-10.

**Cloudflare Pages workflow (what is known):** production custom domain is https://savitriagro.com and tracks `main` (DEC-2026-002). Pushing a non-`main` branch is intended to produce a **Preview** deployment for review before PR merge. The exact Preview URL pattern and whether every branch auto-deploys are **UNKNOWN** (not in `_redirects`, `_headers`, or `docs/DEPLOYMENT.md`, which is still an empty draft). Do not treat local `http.server` as production.

**`robots.txt`:** `Allow: /` plus `Sitemap: https://savitriagro.com/sitemap.xml`.

**`sitemap.xml`:** the ten URLs listed above (home, products, about, manufacturing, contact, four flooring paths, technical-resources). `lastmod` dates in the file are 2026-08-13.

---

## 3. Sprint 4.3 history

Authoritative spec (do not casually edit):  
`docs/sprints/SPRINT-4.3-MARKET-FLOORING-SOLUTION-ARCHITECTURE-SPEC-v1.1.md` (DEV-043, Approved v1.1).

Implementation record (draft; written before merge):  
`docs/sprints/SPRINT-4.3-IMPLEMENTATION-RECORD.md` (DEV-044).

**Commits on `sprint-4-3-baseline` (oldest → newest):**

| Hash | Message / purpose |
| --- | --- |
| `916d773` | Flooring discovery pages: hub, indoor-sports, maple, teak |
| `fee9992` | Homepage and site-wide nav to the flooring hub |
| `d85bf9d` | Technical Resources MVP, `_redirects`, sitemap, robots |
| `f728891` | Enquiry attribution, success/error UI, hero WebP, TR footer links |
| `7dc1f0e` | Homepage proof strip + TR teaser; implementation record |
| `46881d3` | Homepage mobile nav wrap; public copy without “Sprint 4.2 business specifications” |

**PR #5:** https://github.com/quantum-satya/savitri-timbers/pull/5 — opened as a draft from `sprint-4-3-baseline` into `main`, then **MERGED** (`b38195b`, merged 2026-09-10T11:47:57Z). Parents: `b2d5cf3` (previous `main`) and `46881d3`. `origin/main` is that merge commit; `origin/sprint-4-3-baseline` remains `46881d3` (one merge commit behind `origin/main`).

**Implemented (Sprint 4.3):** nested flooring URLs; Indoor Sports as the only named application page; Maple and Teak flooring pages; Technical Resources with approved sizes/units only; mailto enquiry to `karan@savitriagro.com`; `?source=` on primary enquire CTAs; `enquiry_submit` CustomEvent / `dataLayer` **without** a GA4 ID; Tier 1 manufacturing photos already in `assets/images/manufacturing/`; wrap-safe header/nav.

**Not implemented (deferred, not defects):** see §7. Spec §18A/§20 items such as a configured analytics property and Lighthouse CI gate were **not** treated as merge blockers.

**Content boundary (do not invent beyond this):**

- Teak / Maple finished flooring: 65 mm or 92 mm × 22 mm, sold SQFT  
- Incoming Teak / Maple: 3″ / 4″ × 1″, 3 ft+, commercially CFT  
- Pine flooring base: 75 × 50 mm → 70 × 45 mm, RFT; onsite termite treatment as previously stated  
- Canadian Hard Maple is the flagship maple category  
- No bounce, friction, sports-federation ratings, invented certifications, named customers, or installed-court claims  

---

## 4. Current information architecture

**Published (not the full target tree in spec §7).** Spec §7 is a **target** architecture. Do not create every listed node.

| Page | Role |
| --- | --- |
| Homepage | Flooring-led entry: hero, Why Savitri (Source → Expertise → Manufacturing → Flooring), process-proof strip, species cards (Maple/Teak linked; Pine not a link), Indoor Sports linked, Multi-purpose Halls **label only**, TR teaser, enquiry CTA |
| Products | **Timber supply / sourcing** — species and commercial timber, not the manufactured sports-flooring catalogue |
| About | Company, credentials, positioning |
| Manufacturing | Process and facility proof (Kanchanpura / Rajasthan) |
| Contact | Enquiry form (`mailto:karan@savitriagro.com`) |
| Sports Flooring hub | Manufactured sports flooring overview and discovery |
| Indoor Sports | Only approved **application** page |
| Maple / Teak | Manufactured flooring by wood; specs tables |
| Technical Resources | Approved dimensions and commercial units; not a PDF library |

**Three layers — keep them separate:**

1. **Timber supply** → `products.html` (and empty `sourcing.html`, 0 bytes — not a public page).  
2. **Manufactured flooring** → `/flooring/...` hub and species/application pages.  
3. **Technical resources** → `/technical-resources` (facts already approved; no extra ratings).

Homepage “Multi-purpose Halls” is an unlinked chip: there is no approved dedicated page. That is intentional.

`drafts/` may still mention `flooring.html`. Those files are **not** production.

---

## 5. Design language

Implemented in CSS (brand markdown under `docs/brand/` is largely Draft and is **not** a substitute for live CSS).

**Colour (from `css/style.css` `:root`):** dark greens `--green-dark` `#0d2b1a`, `--green-mid` `#1a4a2e`, `--green-light` `#2d6a47`; gold `--gold` `#c9a84c` / `--gold-light` / `--gold-pale`; `--cream` `#faf6ee`; `--white`; `--walnut`.

**Typography:** Google Fonts — **Montserrat** (UI/body), **Cormorant Garamond** (headings). Uppercase, tracked labels for nav and tags.

**Photography:** prefer authentic manufacturing photographs in `assets/images/manufacturing/`. Hero arena imagery is **atmospheric**, not project proof. Do not generate or invent images. Spec §24: place supplied assets; do not create them.

**Layout:** fixed header; section padding; `.container` ~90% / max 1200px; gold rules; card grids; gold primary buttons. Reuse existing header, footer, heroes, cards, buttons. Do not add a second design system.

**Positioning:** premium manufacturer / OEM — not contractor or retail installer language.

**Responsive / nav:** flooring pages use wrap-safe `header nav` (`flex-wrap`, `min-width: 0`). Homepage ≤768px uses the same idea plus credentials grid stacking (`46881d3`). Body uses `overflow-x: hidden`; still keep `documentElement.scrollWidth` within the viewport. No hamburger / new nav system unless newly specified.

---

## 6. Important architectural decisions (why)

- **`flooring.html` stub + `_redirects`:** old single URL had SEO/backlink value (spec §17A). Production 301s to the hub; internal links already point at new paths. Local Python server cannot prove 301s — the stub exists for local preview only.  
- **Nested `/flooring/...` URLs:** sport/wood discovery without flattening everything into one page; matches spec §7/§8 as implemented (hub + indoor-sports + maple + teak only).  
- **Technical Resources page:** technically minded buyers should see approved sizes/units without a sales call (spec §9). Sprint 4.3 shipped a **minimal** TR page, not the full target TR layer.  
- **Unlinked homepage chips:** no approved copy/URL for Multi-purpose Halls or named sports. Fake URLs would invent capability (spec §7 critical rule, §23).  
- **Advanced features deferred:** business is offline-led; no analytics ID, CRM, or video/PDF assets in repo. Adding them would exceed Sprint 4.3 and invent infrastructure.  
- **Reuse existing imagery:** evidence and rights; spec forbids AI-invented photos in Cursor implementation.  
- **Credibility over e-commerce:** identity and DEC-2026-003; spec §26 excludes shop, quotes, CMS, login.

---

## 7. Deferred work

Do **not** treat these as bugs. Do **not** implement without a new approved spec and assets.

| Item | Classification |
| --- | --- |
| GA4 / page-view analytics | Infrastructure-dependent (no measurement ID in repo) |
| Server-side enquiry / CRM | Infrastructure-dependent; mailto is the inbox |
| Mail-client delivery proof | Depends on visitor mail apps; cannot be fully proven in git |
| Named sport pages (badminton, basketball, squash, volleyball) | Depends on real business copy; would invent offerings |
| Multi-purpose Halls page | Depends on approved page copy |
| By Flooring System | Intentionally postponed (spec §8.3) |
| Projects / case studies (Tier 2) | Depends on cleared client evidence (spec §10.2) |
| `sourcing.html` content | File is 0 bytes; not in Sprint 4.3 page list |
| Manufacturing video | No video asset in repo |
| Technical PDFs | No approved files supplied |
| Lighthouse ≥80 / LCP lab gate | Intentionally postponed as a CI/release gate |
| Nav rename to “Sports Flooring” | Optional; current label retained |
| E-commerce, quotation engine, CMS, customer login | Out of scope (spec §26) |
| Maple process-photo strip (optional extra) | Not part of the verified 4.3 correction; do not add casually |

---

## 8. Files that must not be modified casually

**Source-of-truth / contracts**

- `docs/sprints/SPRINT-4.3-MARKET-FLOORING-SOLUTION-ARCHITECTURE-SPEC-v1.1.md` — **authoritative** Sprint 4.3 spec  
- `docs/sprints/SPRINT-4.2-PRODUCT-FLOORING-SPEC-v1.0.md` — approved Product & Flooring facts  
- `docs/KNOWLEDGE-HIERARCHY.md` — documentation constitution  
- `docs/DOCUMENT-REGISTRY.md` — catalogue of governed docs  
- `docs/DECISIONS.md` — recorded decisions (e.g. Cloudflare Pages, HTML/CSS/vanilla JS)  
- `.cursor/rules/v1/*.mdc` — Cursor operating rules (docs-first, git, HTML/CSS, identity, reuse)

**Production configuration**

- `_redirects`, `_headers`, `sitemap.xml`, `robots.txt`

**Do not “clean up” historical sprint wording inside the spec** merely because production copy was changed. Public HTML was updated in `46881d3`; the spec may still mention Sprint 4.2 as history.

---

## 9. Development workflow

Established sequence:

1. **Inspect** repo, spec, and current `origin/main`  
2. **Plan** against approved docs (do not invent scope)  
3. **Implement** on a feature branch; reuse HTML/CSS patterns  
4. **Verify locally** (see below)  
5. **Commit** only when asked; do not amend merged history  
6. **Push the feature branch** only when asked  
7. **Cloudflare Preview** for that branch (Preview URL **UNKNOWN** in repo — use the Pages dashboard)  
8. **Visual/functional review** on Preview  
9. **PR into `main`** only when asked  
10. **Production verification** on https://savitriagro.com after merge/deploy  

Do not edit `main` casually. Do not force-push.

**Local verification (static site):**

- Serve from the repo root: `python3 -m http.server 8000` (or `.cursor/scripts/start.sh`; default port 8000). This does **not** apply `_redirects`.  
- HTTP 200 on the production HTML pages listed in §2.  
- Confirm production HTML `href` values do not point at obsolete `/flooring.html`.  
- Homepage at ~390px: `document.documentElement.scrollWidth <= clientWidth`; all six primary nav items reachable.  
- Do not invent GA4, CRM, or new pages to “complete” deferred items.

**Cursor project instructions** (always-applied in `.cursor/rules/v1/`):

| File | Rule |
| --- | --- |
| `01-documentation-first.mdc` | Docs are source of truth; do not document unfinished work as live; never commit/push from the rule set |
| `02-git-workflow.mdc` | No branches/commits/pushes/merges unless the owner asks |
| `03-html-css-standards.mdc` | Semantic HTML, reuse CSS variables, no frameworks, avoid JS unless needed |
| `04-business-identity.mdc` | Premium manufacturer identity; not contractor/retail installer |
| `05-architecture-reuse.mdc` | Reuse nav/footer/heroes/cards; do not invent parallel layouts |
| `06-documentation-style.mdc` | Factual maintainer docs; do not delete history |

Also: `docs/AI-INSTRUCTIONS.md` (AI-010, Draft), `docs/CODEX-WORKFLOW.md` (AI-020, Review), `docs/AI-GOVERNANCE.md` (AI-030, Approved).

---

## 10. Git state (recorded 2026-09-10)

Commands used: `git fetch origin main`, `git status -sb`, `git log`, `gh pr view 5`.

| Ref | Tip |
| --- | --- |
| Current local branch | `sprint-4-3-baseline` |
| Local HEAD | `46881d3` — in sync with `origin/sprint-4-3-baseline` (ahead/behind 0) |
| `origin/main` | `b38195b` (contains `46881d3`) |
| Local `main` | **behind `origin/main`** (this clone was not fast-forwarded after PR #5) |
| Working tree at this handover pass | uncommitted docs only (this file plus status-doc updates); no website source changes |
| Remote | `git@github.com:quantum-satya/savitri-timbers.git` |

`git log --oneline -8 origin/main`:

```
b38195b Merge pull request #5 from quantum-satya/sprint-4-3-baseline
46881d3 fix: polish Sprint 4.3 mobile navigation and public copy
7dc1f0e docs: complete Sprint 4.3 implementation record
f728891 feat: implement Sprint 4.3 conversion and performance foundation
d85bf9d feat: implement Sprint 4.3 technical resources and URL migration
fee9992 feat: recover Sprint 4.3 homepage and navigation
916d773 feat: recover Sprint 4.3 flooring discovery pages
885efbb Merge remote-tracking branch 'origin/main'
```

**Before the first production change:** `git checkout main && git pull` (or equivalent) so local `main` matches `origin/main`.

---

## 11. Future AI operating rules

- Inspect before editing. Search for existing patterns first.  
- Preserve navigation, footer, heroes, cards, CSS variables, and static architecture.  
- Do not invent pages, copy, specs, certifications, sports, or assets.  
- Deferred items are not defects.  
- Do not casually edit authoritative specifications.  
- Keep diffs scoped; do not reformat unrelated files.  
- Verify internal links and ~390px overflow (`scrollWidth <= clientWidth`).  
- Use Cloudflare Preview before treating a change as production-ready.  
- Commit only with explicit approval; logical, small commits; never amend merged history.  
- Never push or merge without explicit approval.  
- No new frameworks. Avoid JavaScript unless HTML/CSS cannot do the job.  
- Images need meaningful `alt` text. Prefer authentic manufacturing photos.

---

## 12. First steps for a new AI (before any change)

1. `git fetch` and compare `HEAD` to `origin/main` (`b38195b` as of this handover — re-check).  
2. Read this file, then DEV-043 spec v1.1, then DEV-044 implementation record.  
3. Skim `.cursor/rules/v1/` and `docs/DECISIONS.md`.  
4. Open live https://savitriagro.com and the ten sitemap URLs.  
5. Confirm `_redirects`, `sitemap.xml`, `robots.txt`.  
6. Identify whether the task is timber (`products.html`), flooring (`flooring/`), or TR (`technical-resources.html`).  
7. Search the repo for an existing component/CSS before adding files.  
8. If the request needs new facts, pages, photos, or analytics IDs — **stop** and ask. Those are usually deferred or spec-gated.  
9. Implement on a branch; leave `main` alone until asked to PR.  
10. After edits: local HTTP check, link check, mobile overflow check; do not commit unless asked.

---

## Related paths (quick)

- Site: `index.html`, `products.html`, `about.html`, `manufacturing.html`, `contact.html`, `technical-resources.html`, `flooring/`  
- CSS: `css/style.css`, `css/flooring.css`, `css/products.css`  
- Enquiry: `js/enquiry.js` → `karan@savitriagro.com`  
- Empty placeholder: `sourcing.html` (0 bytes)  
- Older AI notes (draft/review): `docs/AI-INSTRUCTIONS.md`, `docs/CODEX-WORKFLOW.md`
- Portable handover: `docs/AI-DEVELOPMENT-HANDOVER.md` (AI-032)  
