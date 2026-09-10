# STDP — Sprint 4.3
## Market & Flooring Solution Architecture
### Authoritative Specification v1.1

**Project:** Savitri Timbers Digital Platform (STDP)  
**Company:** Savitri Timbers Pvt. Ltd.  
**Sprint:** 4.3  
**Specification Version:** 1.1  
**Status:** Authoritative  
**Primary Business Area:** Sports Flooring  
**Predecessor:** Sprint 4.2 — Product & Flooring  
**Implementation Status:** Not yet implemented  
**Implementation Authority:** Cursor, only after specification approval/commit

---

## Changelog — v1.0 → v1.1

- **Section 8.3** — By Flooring System deferred out of Sprint 4.3 implementation scope; retained only as target-architecture candidate pending evidence.
- **Section 10** — Proof section split into two evidence tiers (Manufacturing/Process proof vs. Client/Project proof) so the customer journey's Proof stage is not dependent on case studies that do not yet exist.
- **Section 17 / new 17A** — Added URL Migration & Redirect Requirement covering the restructure of `flooring.html` into sub-pages.
- **Section 20** — Performance Requirements now include measurable thresholds instead of "acceptable" performance.
- **New Section 18A** — Conversion Tracking Requirement added under Conversion Strategy.
- **Sections 25–27** — Scope, and Business/Technical acceptance criteria updated to reflect the above changes.

---

## 1. Sprint Purpose

Sprint 4.3 transforms the Savitri Timbers website from a primarily company/product presentation into a **customer-oriented premium sports-flooring discovery and enquiry system**.

The website must learn from the commercial and information architecture patterns used by established sports-flooring companies while developing a clearly differentiated Savitri position.

The central customer journey is:

**Search → Requirement → Flooring Solution → Technical Confidence → Savitri Advantage → Proof → Enquiry**

The central Savitri business story is:

**Source → Timber Expertise → Manufacturing → Flooring**

Sprint 4.3 therefore does **not** attempt to copy Sundek, Connor Sports, Junckers, or any other reference company.

It studies the market's successful methods and translates only the applicable principles into Savitri's own business identity, capabilities and evidence.

---

# 2. Strategic Business Objective

The website must increasingly answer the customer's actual question:

> **“I need a premium wooden sports floor. Can Savitri provide the right material, flooring solution and support for my requirement?”**

rather than requiring the customer to begin by understanding Savitri's corporate structure.

The website must make Savitri discoverable and understandable to customers searching for:

- sports flooring
- wooden sports flooring
- badminton flooring
- basketball flooring
- squash flooring
- volleyball flooring
- multipurpose wooden flooring
- maple sports flooring
- teak sports flooring
- other relevant timber/flooring requirements

Search terms and page structures are to be treated as **customer-entry mechanisms**, not as permission to make unsupported capability claims.

---

# 3. Strategic Positioning

## 3.1 Market positioning

Savitri must not position itself merely as:

> “Another premium sports-flooring company.”

The intended differentiation is:

> **Savitri combines timber sourcing knowledge and material expertise with flooring manufacturing capability.**

The long-term story is:

**WOOD SOURCE**  
↓  
**SPECIES & MATERIAL KNOWLEDGE**  
↓  
**PROCESSING / MANUFACTURING**  
↓  
**FLOORING**  
↓  
**PERFORMANCE APPLICATION**

This distinction is central to Sprint 4.3.

---

## 3.2 Sundek reference principle

Sundek is the primary Indian commercial/UX/SEO reference for this sprint.

The site is studied particularly for:

- sport/application-led navigation
- specific flooring pages
- technical information
- enquiry paths
- project/credibility presentation
- content supporting search intent

Savitri must **not copy Sundek's design, wording, imagery, claims or information architecture mechanically**.

Sundek demonstrates how the market sells sports flooring online.

Savitri must determine how to sell **Savitri's own capability**.

---

## 3.3 International reference principle

International companies provide additional reference points:

- Connor Sports — premium hardwood positioning, systems, manufacturing and technical credibility
- Junckers Hardwood — sport → flooring system → technical documentation
- NBfloor / Naibu Sports — system/product architecture
- Prestige Floor — wood species + specifications + flooring systems
- Kiefer USA — facility/buyer-oriented navigation
- ENLIO — product and manufacturing presentation
- Thor Performance Products — performance/application-oriented presentation

These companies are **research references**, not content or claim sources for Savitri.

---

# 4. Reference Set

## 4.1 Global references

1. Connor Sports
2. Junckers Hardwood
3. NBfloor / Naibu Sports
4. Prestige Floor
5. Kiefer USA
6. ENLIO
7. Thor Performance Products

## 4.2 Indian references

1. Sundek Sports
2. Apex Sport Surfaces
3. Sports Facility
4. Shreeji Woodcraft / Zyrex
5. Sunflex Sports Infrastructure

## 4.3 Excluded reference

Harbinger Sports is excluded from the authoritative flooring reference set because the research did not establish sufficiently reliable evidence that the identified current entity represents the premium hardwood sports-flooring manufacturer described in the original reference list.

No implementation decision may depend upon that reference.

---

# 5. Target Buyers

Sprint 4.3 must design for five principal buyer groups.

## 5.1 Sports facility owners / academies

Examples:

- badminton academies
- basketball academies
- squash clubs
- sports complexes
- private sports facilities

Primary question:

> “What flooring should I install?”

Required journey:

**Sport → Suitable flooring → Performance → Practical information → Enquiry**

---

## 5.2 Schools / colleges / universities

Primary question:

> “What flooring is appropriate for our hall/facility and intended use?”

Important information:

- durability
- safety
- multipurpose use
- maintenance
- specifications
- project considerations
- long-term value

---

## 5.3 Architects / consultants / designers

Primary question:

> “What exactly should I specify?”

Important information:

- wood species
- dimensions
- construction
- flooring system
- subfloor considerations
- performance information
- standards/certifications where applicable
- technical documentation
- drawings where available
- maintenance information

A future technical-resource layer must support this audience.

---

## 5.4 Sports infrastructure contractors / turnkey companies

Primary question:

> “Can Savitri supply the required material consistently and support my project?”

Relevant information:

- wood species
- material availability
- processing
- manufacturing
- quantities
- specifications
- project requirements
- delivery
- commercial enquiry

This audience is particularly important to Savitri's source/material advantage.

---

## 5.5 Timber / flooring buyers

These visitors may arrive through searches such as:

- teak wood for sports flooring
- maple sports flooring
- hardwood sports flooring supplier
- wooden sports flooring manufacturer

They may not initially be searching for “Savitri Timbers”.

The website must therefore preserve the connection between:

**Products ↔ Timber Species ↔ Flooring Applications**

without collapsing the two business areas into one.

---

# 6. Customer Discovery Model

The target architecture is:

```text
GOOGLE / REFERRAL
        │
        ▼
CUSTOMER REQUIREMENT
        │
 ┌──────┼──────┐
 ▼      ▼      ▼
SPORT  WOOD  FACILITY
 │      │      │
 ▼      ▼      ▼
FLOORING SOLUTION
        │
        ▼
TECHNICAL INFORMATION
        │
        ▼
WHY SAVITRI?
        │
 ┌──────┴──────┐
 ▼             ▼
SOURCE      MANUFACTURING
 │             │
 └──────┬──────┘
        ▼
PROJECT / PROOF
        │
        ▼
ENQUIRY
```

This represents the **target customer journey**, not a requirement that every page contain every stage.

---

# 7. Target Information Architecture

The target architecture is:

```text
HOME
│
├── ABOUT
│
├── PRODUCTS
│   ├── Teak
│   ├── Maple
│   ├── Meranti
│   └── Other Timber Products
│
├── FLOORING
│   ├── Sports Flooring
│   │   ├── By Sport
│   │   │   ├── Badminton
│   │   │   ├── Basketball
│   │   │   ├── Squash
│   │   │   ├── Volleyball
│   │   │   └── Multipurpose
│   │   │
│   │   ├── By Wood
│   │   │   ├── Maple
│   │   │   ├── Teak
│   │   │   └── Other Hardwood
│   │   │
│   │   └── By System
│   │       ├── Resilient
│   │       ├── Air-Cush
│   │       ├── Portable
│   │       └── Custom
│   │
│   └── Manufacturing
│
├── SOURCING
│
├── PROJECTS
│
├── TECHNICAL RESOURCES
│
└── CONTACT / ENQUIRE
```

### Critical implementation rule

This is the **target information architecture**, not an instruction to create every listed page during Sprint 4.3.

Sprint 4.3 implementation scope must be limited to pages/categories that are supported by:

1. current business capability,
2. available evidence,
3. approved content,
4. technical feasibility,
5. realistic development capacity.

Future categories must not be represented as current capabilities merely because they exist in the target architecture.

---

# 8. Flooring Architecture

The Flooring experience becomes the primary commercial focus of Sprint 4.3.

It should enable visitors to explore flooring through three complementary dimensions.

## 8.1 By Sport

Candidate categories:

- Badminton
- Basketball
- Squash
- Volleyball
- Multipurpose

The final published list must correspond to Savitri's actual supported capability.

---

## 8.2 By Wood

Candidate categories:

- Maple
- Teak
- Other suitable hardwood

Wood pages must connect the material story to flooring relevance.

They should potentially cover:

- species characteristics
- appearance
- suitability
- available form
- processing
- flooring relevance
- sourcing
- technical considerations
- enquiry

No unsupported performance ranking is permitted.

---

## 8.3 By Flooring System — Deferred (Not in Sprint 4.3 Scope)

Candidate categories (target architecture only):

- Fixed / permanent
- Resilient / cushioned
- Air-cush
- Portable
- Custom

**Status: deferred.** Of the three flooring dimensions in Section 8, this is the least evidence-ready. Savitri's current substantiated offering is species/material-led (Section 8.2), not system-led, and the "realistic development capacity" test in Section 7 excludes categories without current supporting evidence.

Sprint 4.3 implements **By Sport** (8.1) and **By Wood** (8.2) only. By Flooring System remains part of the long-term target architecture and may be scoped into a future sprint once specific systems can be substantiated as current Savitri offerings.

Only systems that Savitri can substantiate as current offerings may ever be presented as current products/services.

Competitor system terminology must not automatically become Savitri terminology.

---

# 9. Technical Resources

Technical information becomes a first-class component of the website.

The target Technical Resources layer may include:

- product specifications
- wood species information
- flooring construction
- system information
- installation considerations
- maintenance information
- performance information
- technical documents
- downloadable specifications
- FAQs

The purpose is to allow technically minded buyers, architects, consultants and contractors to gain confidence without requiring a sales conversation for every basic technical question.

---

# 10. Projects / Proof

Proof is a required stage in the customer journey (Section 6) and must not depend entirely on client case studies that may not yet exist. Sprint 4.3 therefore recognises **two evidence tiers**. Tier 1 is in scope for Sprint 4.3; Tier 2 is added only as real projects become verifiable, per the existing evidence rule.

## 10.1 Tier 1 — Manufacturing / Process Proof (Sprint 4.3 scope)

Proof of Savitri's actual, current, verifiable capability — independent of any named client.

May include:

- manufacturing facility photographs/video (Kanchanpura, Rajasthan)
- material/timber stock photographs
- processing and machining in progress
- finished flooring/product photographs
- facility and equipment context

This tier carries the Proof stage of the customer journey at launch. It requires no client-relationship substantiation, only that the facility/material/process shown is genuinely Savitri's own.

## 10.2 Tier 2 — Client / Project Proof (future, evidence-gated)

A future Projects section may present verified Savitri work once available.

Potential project record structure:

- client/facility
- location
- application
- wood/material supplied
- flooring scope
- Savitri's actual role
- photographs
- video
- relevant technical information
- project status

### Evidence rule

A project may be represented as a Savitri project/case study only when Savitri's actual involvement is known and supportable.

The website must not imply:

- manufacture when only supply occurred,
- installation when Savitri did not install,
- turnkey execution when Savitri supplied only material,
- ownership of a facility,
- certification of a project,
- association with a sports organisation,

unless the relevant fact can be substantiated.

Tier 2 content is added incrementally, page by page, as individual projects clear this evidence rule — it is not a Sprint 4.3 deliverable and must not block Sprint 4.3 completion.

---

# 11. Manufacturing Story

Manufacturing becomes an important part of Savitri's differentiation.

The target narrative is:

**Source → Select → Process → Manufacture → Finish → Deliver**

Manufacturing videos and photographs may eventually support this narrative.

The website should communicate genuine manufacturing capability without exaggerating the extent of the operation.

---

# 12. Homepage Direction

Sprint 4.3 should move the homepage toward a premium flooring-led commercial experience.

The conceptual sequence is:

### Hero

Premium sports-flooring proposition.

Potential message direction:

> **Premium Timber. Performance Flooring.**

This is a direction, not a final approved headline.

### Then:

**Why Savitri?**

- Source
- Timber Expertise
- Manufacturing
- Flooring

### Then:

**Explore Sports Flooring**

Sport/application entry points.

### Then:

**Our Timber**

Teak / Maple / other relevant species.

### Then:

**See How We Make It**

Manufacturing video.

### Then:

**Manufacturing / Process Proof**

Manufacturing facility, processing, and material evidence (Tier 1 proof — Section 10.1).

### Then:

**Technical Resources**

Useful technical information and documents.

### Finally:

**Enquiry**

Clear conversion pathway.

The desired emotional/information sequence is:

> **Emotion → Understanding → Evidence → Technical Confidence → Action**

---

# 13. Visual Asset Strategy

Sprint 4.3 formally establishes three principal visual asset classes.

## 13.1 Real photographs

Primary purpose:

**Proof**

Use for:

- actual client projects
- completed flooring
- manufacturing
- timber
- processing
- installation where applicable
- facilities
- project references

Client photographs require appropriate permission for commercial use.

---

## 13.2 AI-generated imagery

Primary purpose:

**Aspiration / premium visual storytelling**

AI imagery may be used for:

- hero environments
- conceptual sports facilities
- premium architectural scenes
- wood/floor close-ups
- atmospheric visuals
- conceptual flooring applications

AI imagery must not be presented as:

- an actual Savitri project
- a real client facility
- a real installation
- evidence of certification
- evidence of performance
- evidence of a customer relationship

AI imagery must avoid misleading third-party branding.

---

## 13.3 Licensed photography

Licensed photography may be used where appropriate.

Licence/provenance must be retained.

Editorial/event photographs must not be used commercially unless the relevant licence permits commercial use.

---

# 14. Manufacturing Video Strategy

Existing manufacturing videos are considered valuable Savitri-owned content assets.

They may eventually be repurposed into:

### Website

- hero/background clips
- manufacturing sections
- product/flooring pages
- short process clips

### Marketing

- YouTube
- short-form social content
- LinkedIn
- WhatsApp sales material
- presentations
- proposals

Original master footage must be retained separately.

Website versions should be appropriately edited/compressed for performance.

The website should not require visitors to download large raw video files.

---

# 15. Image Rights & Provenance Rule

Competitor imagery is for **research and inspiration only**.

Savitri must not:

- copy competitor images,
- download and reuse competitor images,
- trace competitor imagery,
- reproduce competitor photographs,
- use Olympic/NBA/NCAA or other third-party branded imagery without appropriate rights.

Competitor visual strategy may be studied.

Competitor visual assets may not become Savitri assets without independent permission/licensing.

---

# 16. Claims & Evidence Governance

This sprint inherits the STDP documentation-first principle.

The website must publish only claims that are:

- factually supportable,
- appropriate to Savitri's current capability,
- supported by available evidence where necessary.

The following must not be invented:

- certifications
- approvals
- standards compliance
- Olympic/NBA/NCAA/FIBA/BWF associations
- client relationships
- project counts
- installation capabilities
- manufacturing capabilities
- years of experience
- performance figures
- geographical coverage
- product specifications

Market references show **what competitors communicate**.

They do not establish that Savitri can make the same claims.

---

# 17. SEO Architecture

Sprint 4.3 establishes a search-intent-driven architecture.

The website should eventually support searches around:

### Flooring intent

- wooden sports flooring
- sports wooden flooring
- premium sports flooring
- wooden flooring manufacturer

### Sport intent

- badminton flooring
- basketball flooring
- squash flooring
- volleyball flooring
- multipurpose sports flooring

### Species intent

- maple sports flooring
- teak sports flooring
- hardwood sports flooring

### Buyer intent

- sports flooring supplier
- wooden sports flooring manufacturer
- sports flooring India
- timber supplier for sports flooring

The exact keyword strategy must be validated before pages are created.

SEO must never dictate unsupported business claims.

---

# 17A. URL Migration & Redirect Requirement

The current live site publishes flooring content at a single URL (`flooring.html`). Sprint 4.3 restructures this into sport/wood-specific sub-pages (Section 7, Section 8).

This restructuring must not silently break or orphan the existing URL's search visibility.

Requirements:

- A 301 redirect map must be defined for any existing URL that is split, renamed, or removed as part of this sprint, including `flooring.html`.
- The redirect target should be the most relevant new page (e.g. the primary Sports Flooring landing page), not an arbitrary default.
- Existing internal links and navigation must be updated to point directly to new URLs rather than relying on redirects internally.
- Redirects must be verified working (no redirect chains, no loops) before Sprint 4.3 is marked complete.
- Any existing external backlinks or Google-indexed pages known at implementation time should be checked against the new URL structure.

This requirement applies only to URLs that already exist on the live site. Net-new pages (e.g. individual sport pages that did not previously exist) do not need redirects.

---

# 18. Conversion Strategy

The website must provide clear enquiry paths.

Potential CTAs:

- **Enquire Now**
- **Discuss Your Requirement**
- **Request Technical Information**
- **Talk to Savitri**
- **Request a Quote**

Final CTA language should be selected according to the actual capability/process available.

The enquiry journey should capture enough information to qualify the requirement without creating unnecessary friction.

Potential information:

- sport/application
- facility type
- location
- approximate area
- preferred wood/system, if known
- project stage
- contact information
- additional requirement

---

# 18A. Conversion Tracking Requirement

An enquiry path that cannot be measured cannot be improved. Sprint 4.3 must establish, at minimum:

- an analytics tool recording page views and enquiry-page traffic (e.g. GA4 or equivalent already in use);
- a distinct tracked event fired on successful enquiry-form submission for each CTA/entry point where practical;
- a clear, documented answer to "where does a submitted enquiry go" (email inbox, WhatsApp, spreadsheet, CRM, etc.), verified working end-to-end before completion;
- confirmation that form submissions are not silently lost on mobile or on slow connections (basic success/error state shown to the user).

This does not require a new analytics platform or CRM if one is not already planned — it requires that whatever mechanism exists is verified functional and attributable to a page/CTA.

---

# 19. Mobile-first Requirement

The new flooring journey must work effectively on mobile.

Important requirements:

- readable technical information
- clear sport/product navigation
- fast-loading imagery
- appropriately compressed video
- visible enquiry CTA
- no desktop-only interaction dependency
- accessible navigation
- responsive tables/specifications where required

---

# 20. Performance Requirements

Premium visual presentation must not compromise website performance.

The implementation must:

- optimise image dimensions
- use appropriate modern image formats where supported
- lazy-load non-critical imagery
- avoid unnecessary large video payloads
- avoid autoplay video with excessive bandwidth
- preserve usable performance on mobile networks

## Measurable thresholds

"Acceptable performance" is defined as, on newly created/modified pages:

- Mobile Lighthouse/PageSpeed Insights performance score of **80 or above**;
- Largest Contentful Paint (LCP) **≤ 2.5 seconds** on a simulated mid-range mobile/4G profile;
- No single page's initial load exceeding a reasonable image/video payload for mobile networks (no unoptimised multi-MB hero assets);
- No regression in these metrics versus the pre-Sprint-4.3 equivalent page, where one existed.

These thresholds are checked as part of the acceptance criteria (Section 27) before Sprint 4.3 is marked complete.

The site remains a static website unless a future approved architecture changes that decision.

---

# 21. Accessibility

All newly created pages/components must maintain the existing site's accessibility standards.

Images require meaningful alternative text where appropriate.

Decorative images must not create unnecessary screen-reader noise.

Video content should have suitable contextual text/captions where required.

Colour contrast and keyboard navigation must remain usable.

---

# 22. Content Architecture Rule

Content should be structured so that one piece of information has one authoritative home where practical.

For example:

**Maple characteristics**

should not be independently rewritten with conflicting facts on five different pages.

Relevant pages may link to the authoritative species information.

This prevents content drift.

---

# 23. Implementation Boundaries

Cursor is an **implementation tool**, not the business decision-maker.

Cursor must not independently:

- invent product categories
- invent sports
- invent certifications
- invent specifications
- invent project claims
- generate imagery
- replace approved copy with generic AI copy
- alter the approved information architecture
- introduce new dependencies without approval
- change the site's technical architecture without approval

Cursor's role begins after the authoritative specification and approved implementation instructions are committed.

---

# 24. Visual Asset Boundary for Cursor

Cursor will receive finished visual assets.

Cursor must:

- place assets correctly
- implement responsive behaviour
- optimise presentation
- add appropriate alt text
- implement video elements according to specification

Cursor must **not** be asked to create the images.

AI-generated imagery will be created separately and supplied as an approved asset.

Real client photographs/videos will be supplied by the business and incorporated after rights/provenance confirmation.

---

# 25. Sprint 4.3 Scope

Sprint 4.3 is responsible for establishing and implementing the first commercially meaningful layer of the new flooring architecture.

The implementation scope should prioritise:

1. Flooring-led customer journey
2. Sport/application discovery
3. Wood/species relationship
4. Savitri source/manufacturing differentiation
5. Technical-confidence pathway
6. Tier 1 (manufacturing/process) proof pathway — see Section 10.1
7. Enquiry conversion, tracked and measurable — see Section 18A
8. Premium visual language
9. Mobile/performance quality against the measurable thresholds in Section 20
10. Clean URL migration for any restructured existing pages — see Section 17A

By Flooring System (Section 8.3) and Tier 2 client/project proof (Section 10.2) are explicitly excluded from this list — see Sections 8.3 and 10.2.

The exact pages to be implemented must be selected during implementation planning from the approved target architecture.

---

# 26. Explicitly Out of Scope

The following are not automatically part of Sprint 4.3 implementation:

- complete 20–30 page SEO expansion
- every possible sport page
- every possible wood species page
- By Flooring System pages/categories (Section 8.3 — deferred to a future sprint)
- Tier 2 client/project case studies not yet cleared under the Section 10.2 evidence rule
- unsupported flooring systems
- unsupported installation services
- e-commerce
- online quotation engine
- customer login
- CMS migration
- major backend architecture
- fake case studies
- fake testimonials
- fake certifications
- competitor image reuse
- Olympic/NBA/NCAA branding
- automatic AI image generation inside Cursor

These may become future sprint subjects only through separate approval.

---

# 27. Acceptance Criteria

Sprint 4.3 implementation will be considered successful only when:

### Business

- The website clearly presents sports flooring as a major commercial offering.
- Savitri's timber/source advantage is understandable.
- The relationship between timber and flooring is clear.
- Visitors can identify a logical path to enquiry.

### Customer Journey

- A visitor can enter through sport/application.
- A visitor can enter through wood/species.
- Relevant information leads logically toward a flooring solution.
- Technical users can find appropriate supporting information.
- Enquiry is visible and accessible.

### Content

- No unsupported claims are introduced.
- Current business capabilities are accurately represented.
- Products and flooring remain logically distinct.
- Project claims are evidence-based.

### Visual

- Real photographs are used as proof where available.
- AI imagery is clearly conceptual in its role.
- Licensed imagery is properly sourced.
- Manufacturing video is incorporated only where appropriate.
- No competitor imagery is reused.

### Technical

- Responsive/mobile layout works correctly.
- Images/videos are optimised.
- Measurable performance thresholds in Section 20 are met on new/modified pages.
- Navigation remains consistent with the existing architecture.
- Existing pages are not unintentionally broken.
- No unnecessary framework/dependency changes are introduced.
- All restructured/removed existing URLs (per Section 17A) 301-redirect correctly, with no chains or loops.

### Conversion Tracking

- Enquiry-form submissions are tracked as a distinct, attributable event (Section 18A).
- The destination of a submitted enquiry is documented and verified working end-to-end.
- Form success/error states are visible to the user on mobile.

### SEO

- Page titles and descriptions reflect actual content.
- Search-intent architecture is coherent.
- Internal linking connects Products, Flooring, Sourcing, Projects and Technical Resources appropriately.
- No keyword stuffing or unsupported SEO claims.
- Existing search visibility is preserved via the redirect map (Section 17A).

---

# 28. Governance Gate

Sprint 4.3 follows the established STDP workflow:

**Research**
→ **Business Decision**
→ **Specification**
→ **Approval**
→ **Repository Commit**
→ **Cursor Implementation**
→ **Review**
→ **QA**
→ **Completion Record**

This document is the authoritative Sprint 4.3 specification.

No implementation should be started on the basis of informal conversation alone.

The next implementation instruction must reference this specification and its approved scope.

---

# 29. Definition of Done

Sprint 4.3 is complete when:

- approved Sprint 4.3 pages/components are implemented;
- customer journey works from discovery to enquiry, using Tier 1 proof (Section 10.1);
- approved visual assets are correctly integrated;
- real/AI/licensed image provenance is respected;
- manufacturing video assets are correctly handled where included;
- responsive/mobile behaviour is verified;
- performance meets the measurable thresholds in Section 20;
- existing URLs redirect correctly per Section 17A;
- enquiry submissions are tracked and verified end-to-end per Section 18A;
- SEO metadata/internal linking are verified;
- no unsupported business claims exist;
- existing site functionality remains intact;
- Git status is clean;
- implementation changes are committed;
- Sprint 4.3 completion documentation is updated;
- the resulting implementation matches this specification.

---

# 30. Strategic Principle

The most important principle of Sprint 4.3 is:

> **Do not make Savitri look like the market. Make Savitri understandable to the market.**

The market already demonstrates that premium flooring buyers respond to:

**Sport → Solution → Technical Confidence → Proof → Enquiry**

Savitri adds a distinctive layer:

**Source → Timber Expertise → Manufacturing**

Therefore the intended long-term Savitri experience is:

> **Discover the flooring you need. Understand the material. See how it is made. Verify the capability. Then talk to Savitri.**

That is the strategic foundation of Sprint 4.3.