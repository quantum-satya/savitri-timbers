# Sprint 4.3 Implementation Record

Document ID: DEV-044  
Version: 1.0  
Status: Draft (awaiting review)  
Sprint: 4.3 — Market & Flooring Solution Architecture  
Specification: `docs/sprints/SPRINT-4.3-MARKET-FLOORING-SOLUTION-ARCHITECTURE-SPEC-v1.1.md`  
Branch: `sprint-4-3-baseline`  
Record date: 2026-08-13

This record describes work implemented on the branch. It is not a production-release note. Production remains on the previously deployed site until this branch is reviewed and deployed.

---

## 1. Business context for this sprint

Savitri Timbers currently uses the website as a premium digital presence and credibility layer. Business is generated through offline presence and direct contacts, not through an online sales platform.

Sprint 4.3 therefore prioritised:

- flooring-led discovery
- credible, evidence-backed content
- consistent navigation
- clean static architecture

It did not introduce an online sales platform, CRM, quotation engine, or analytics vendor.

---

## 2. Implementation stages (local commits)

| Stage | Commit | Scope |
| --- | --- | --- |
| 1 | `916d773` | Flooring discovery pages: sports-flooring hub, indoor-sports, maple, teak |
| 2 | `fee9992` | Homepage and site-wide navigation to the flooring hub |
| 3 | `d85bf9d` | Technical Resources MVP, `_redirects`, `sitemap.xml`, `robots.txt` |
| 4 | `f728891` | Enquiry attribution, form success/error UI, hero WebP, Technical Resources footer links |
| 5 | uncommitted at record draft | Homepage Tier 1 proof strip, Technical Resources teaser, this record |

Stages 1–4 were not amended.

---

## 3. Pages and URLs implemented

Canonical public paths (Cloudflare extensionless):

| Path | File | Role |
| --- | --- | --- |
| `/` | `index.html` | Flooring-led homepage |
| `/products` | `products.html` | Timber supply (not manufactured flooring) |
| `/flooring/sports-flooring` | `flooring/sports-flooring/index.html` | Flooring hub |
| `/flooring/indoor-sports` | `flooring/indoor-sports/index.html` | Application entry |
| `/flooring/maple` | `flooring/maple/index.html` | Maple / Canadian Hard Maple flooring |
| `/flooring/teak` | `flooring/teak/index.html` | Teak flooring |
| `/technical-resources` | `technical-resources.html` | Approved dimensions and units |
| `/manufacturing` | `manufacturing.html` | Process / facility proof |
| `/about` | `about.html` | Company |
| `/contact` | `contact.html` | Enquiry |

Primary nav label remains **Flooring Solutions** (existing site language). Footer Quick Links include Technical Resources.

---

## 4. URL migration

`_redirects`:

```
/flooring.html    /flooring/sports-flooring/    301
/flooring         /flooring/sports-flooring/    301
```

`flooring.html` is a local stub (meta refresh + canonical) because `python3 -m http.server` does not honour Cloudflare `_redirects`. Production 301 behaviour still requires a Cloudflare Pages check after deploy.

Hash fragments (`#flagship`, `#maple-flooring`, `#teak-flooring`) cannot be redirected by `_redirects`. Internal links now point at the new paths.

---

## 5. Enquiry destination (Section 18 / 18A)

| Item | Current state |
| --- | --- |
| Mechanism | `mailto:karan@savitriagro.com` on `contact.html` |
| Visible destination | Stated on the contact form: enquiries go to `karan@savitriagro.com` |
| Attribution | Primary CTAs pass `?source=…`; hidden `source` field; `js/enquiry.js` |
| User feedback | Success and error text with `aria-live` |
| Event hook | `enquiry_submit` CustomEvent and `dataLayer` push — **no analytics property is configured** |

This is sufficient for a credibility-site enquiry path. It is **not** a measured online-conversion pipeline.

---

## 6. Deferred work (later STDP phase)

These items remain out of Sprint 4.3. They are recorded here so they are not invented and not silently omitted.

| Item | Spec | Reason deferred |
| --- | --- | --- |
| GA4 or other page-view analytics | §18A | No measurement ID in the repository; business does not currently run the site as an online sales channel |
| Server-side form handling / CRM | §18A | Would add a new service; mailto remains the inbox |
| End-to-end mail-client delivery proof | §18A | Depends on each visitor’s mail application |
| Named sport pages (badminton, basketball, squash, volleyball) | §8.1 | No approved sport-specific copy; would invent offerings |
| Multi-purpose halls page | Plan “SHOULD” | No dedicated approved page copy; label remains on the homepage without a fake URL |
| By Flooring System | §8.3 | Explicitly deferred; species/material-led offering only |
| Tier 2 Projects / case studies | §10.2 | Evidence rule: no cleared client projects |
| `sourcing.html` content | §26 / empty file | File is 0 bytes; not in Sprint 4.3 page list |
| Manufacturing video (“See How We Make It”) | §12 / §14 | No video asset in the repository |
| Downloadable technical PDFs | §9 | No approved files supplied |
| Lighthouse ≥ 80 / LCP ≤ 2.5s lab sign-off | §20 | Not run as a CI gate; Stage 4 used existing WebP/lazy-load only |
| Primary-nav rename to “Sports Flooring” | Plan optional | Existing “Flooring Solutions” label retained |
| E-commerce, quotation engine, CMS, customer login | §26 | Out of scope |

---

## 7. Content boundary

Implemented pages reuse Sprint 4.2 substantiated facts only:

- Teak / Maple finished flooring: 65 mm or 92 mm × 22 mm, sold SQFT
- Incoming Teak / Maple: 3″ / 4″ × 1″, 3 ft+, commercially CFT
- Pine flooring base: 75 × 50 mm → 70 × 45 mm, RFT; onsite termite treatment as previously stated
- Canadian Hard Maple is the flagship maple category
- No bounce, friction, or sports-federation ratings
- No invented certifications, customers, or installed-court claims

Tier 1 proof uses authentic Kanchanpura manufacturing photographs already in `assets/images/manufacturing/`. Hero arena imagery is atmospheric, not project proof.

---

## 8. Stage 5 site changes (this record)

- Homepage Why Savitri cards link to Products, Manufacturing, and the flooring hub
- Homepage manufacturing section adds a three-image process strip and a Manufacturing page CTA
- Homepage adds a Technical Resources teaser before the enquiry CTA

No new pages, analytics services, or form backends were added in Stage 5.
