# STDP — Sprint 4.2 Specification v1.0
## Product & Flooring

**Project:** Savitri Timbers Digital Platform (STDP)  
**Phase:** Phase 4  
**Sprint:** 4.2 — Product & Flooring  
**Specification:** v1.0  
**Status:** **APPROVED**  
**Implementation Status:** **AUTHORIZED AFTER SPECIFICATION COMMIT**  
**Predecessor:** Sprint 4.1B — Manufacturing Capability & Technical Credibility  
**Primary implementation agent:** Cursor Cloud Agent  

---

## 1. Document Authority

This document defines the approved business, content, information-architecture and implementation requirements for Sprint 4.2.

It is the **single authoritative implementation contract** for Cursor and future AI agents working on Product & Flooring.

No implementation may deviate from this specification without a new human-approved decision.

### Governance rules

Cursor must:

- implement this specification;
- preserve established STDP architecture;
- use repository facts as evidence, not as business authority;
- never infer business strategy from existing code;
- never invent product specifications, certifications, capacities, performance claims or sourcing claims;
- stop and surface clarification if implementation requires a decision not covered here.

---

## 2. Business Identity

The website represents:

**Savitri Timbers Private Limited**

The Certificate of Incorporation confirms the company's name change from Gurugram Trading Private Limited to Savitri Timbers Private Limited effective **23 January 2026**.

The GST Registration Certificate identifies Savitri Timbers Private Limited as a regular private limited company registered in Rajasthan, with principal place of business at Kanchanpura, Sri Madhopur, Sikar, Rajasthan, effective from **6 March 2026**.

These documents are corporate evidence only. They do not independently define the website's Product/Flooring strategy.

---

## 3. Sprint Purpose

Sprint 4.2 establishes two connected but distinct public experiences:

### A. Products

The broader **timber product and sourcing portfolio** that Savitri Timbers can supply.

### B. Flooring

The **manufactured flooring products and flooring capability** produced through Savitri Timbers' manufacturing operation.

Central architectural principle:

> **Products ≠ Flooring.**

A timber appearing in the Products portfolio does not imply that Savitri Timbers manufactures flooring from that timber.

A material used in flooring manufacturing does not automatically need to be marketed as a standalone broader timber product.

---

## 4. Business Model

```text
                    SAVITRI TIMBERS
                           │
              ┌────────────┴────────────┐
              │                         │
          PRODUCTS                  FLOORING
              │                         │
     Timber supply / sourcing      Manufacturing
              │                         │
      ┌───────┴────────┐        ┌───────┴───────┐
      │                │        │               │
 Existing / sourced   On-demand Teak           Maple
 products             sourcing                  │
                                                │
                                      Canadian Hard Maple
                                           flagship
```

---

# 5. Products — Commercial Role

The Products section represents timber products that Savitri Timbers can supply to customers.

These products may be:

- available through existing sourcing channels;
- sourced through the existing GCT ecosystem;
- procured specifically for a customer's requirement;
- imported directly by Savitri Timbers in the future;
- sourced from European suppliers as the company's international sourcing network develops.

The website must **not imply that every listed product is permanently stocked** unless that is separately confirmed.

The intended commercial proposition is:

> **Savitri Timbers can understand, source and supply the timber a customer requires.**

---

# 6. Broader Products Portfolio

The identified broader product portfolio includes:

- Meranti
- Steamed Beech
- Oak
- White Ash
- Southern Yellow Pine
- Walnut
- Cherry
- Teak
- Maple
- Pine

Additional species/products may be added as the sourcing network develops, subject to the normal STDP decision process.

### Europe-sourced products

Karan is actively exploring European timber sources during the Europe business mission, including:

- Croatia
- Bosnia
- Slovenia
- Romania
- Poland

The website architecture must therefore be capable of incorporating **Europe-sourced timber products** into the broader Products portfolio.

### Important rule

The countries above are **sourcing context**, not automatically established public sourcing claims.

The website must not claim established sourcing from those countries until the sourcing relationship and public wording are confirmed.

---

# 7. Customer-Specific Sourcing

Broader Products may be sourced according to customer requirements.

Applications may include:

- flooring;
- furniture;
- doors;
- architectural/decorative work;
- art forms;
- other customer-specific requirements.

The supplied material may be sourced in board form with:

- varying thickness;
- varying widths;
- varying lengths;
- dimensions determined by customer/application requirements.

The website may communicate **custom/on-demand sourcing capability** using approved wording.

It must not imply guaranteed availability of every species, size or grade.

---

# 8. Flooring — Manufacturing Product

Flooring is a **manufactured product line**.

Current manufactured flooring is primarily:

- **Teak Flooring**
- **Maple Flooring**

### Flagship

**Canadian Hard Maple** remains the premium/flagship flooring product.

---

# 9. Flooring Raw Material — Teak & Maple

The manufacturing operation receives teak and maple flooring raw material as boards.

### Incoming raw material

- Width: **3 inches and 4 inches**
- Thickness: **1 inch**
- Length: **3 ft and above**
- Commercial measurement: **CFT**

These are incoming raw-board dimensions and are not finished flooring dimensions.

---

# 10. Finished Flooring Product

After processing, finished flooring is:

- **65 mm wide**, or
- **92 mm wide**
- **22 mm thick**

Finished flooring is measured and sold in:

> **Square Feet (SQFT)**

These dimensions are authoritative business-provided specifications for Sprint 4.2.

Cursor must not add tolerances, alternative standards or inferred specifications.

---

# 11. Flooring Material Flow

```text
Teak / Maple Boards
        │
        │ Incoming
        │ 3"/4" wide
        │ 1" thick
        │ 3 ft+
        │ CFT
        ↓
   Manufacturing
     Processing
        ↓
 Finished Flooring
   65 mm / 92 mm
      wide
    22 mm thick
        │
      SQFT
```

The website may explain this transformation at an appropriate high level.

---

# 12. Pine — Flooring Base / Supporting Material

Pine is used as the base/supporting material for the flooring system.

### Incoming Pine

- **75 mm × 50 mm**
- Length: **3 ft and above**

### Finished Pine

After processing:

- **70 mm × 45 mm**
- Commercial measurement: **RFT (Running Feet)**

Therefore:

> Pine used as the flooring base is measured/sold as **RFT**, unlike finished Teak/Maple flooring, which is measured/sold in **SQFT**.

Pine flooring itself may be produced **on demand**.

Pine must not be positioned as equivalent to Teak or Maple within the core flooring proposition.

---

# 13. Pine Treatment

Finished Pine material is **termite treated at the manufacturing site**.

The treatment gives the finished Pine a characteristic **blackish appearance**.

The website may state this business fact using controlled wording.

The implementation must not invent:

- chemical name;
- concentration;
- treatment standard;
- treatment duration;
- penetration depth;
- laboratory test;
- certification;
- guaranteed protection period;
- percentage of termite resistance.

---

# 14. Flooring Measurement Model

| Material / Product | Incoming | Finished | Commercial Unit |
|---|---|---|---|
| Teak flooring raw material | 3"/4" × 1", 3 ft+ | 65 / 92 mm × 22 mm | SQFT |
| Maple flooring raw material | 3"/4" × 1", 3 ft+ | 65 / 92 mm × 22 mm | SQFT |
| Pine flooring base | 75 × 50 mm, 3 ft+ | 70 × 45 mm | RFT |

These values are authoritative Sprint 4.2 business inputs.

---

# 15. Teak Sourcing Knowledge

Current business information states:

### Premium teak

Premium teak flooring material is sourced from:

- Sudan
- Mexico
- Tanzania / African sources as applicable

### Regular teak

Regular teak may come from African sources including:

- Ghana
- Benin
- Togo

### Indian teak

The business currently does **not use Indian teak for flooring**.

The internal business rationale concerns cost, softness and suitability for the company's flooring requirements.

The website must not turn that internal purchasing judgement into an absolute industry claim without approved public wording.

---

# 16. Maple Sourcing Knowledge

Current business information states that premium Maple is sourced from Canada.

Identified Maple categories include:

- Hard Maple — White
- Hard Maple — Brown
- Soft Maple
- Sycamore terminology associated with the soft-maple category
- Soft Maple from New Zealand
- Soft Maple from USA

Maple is used in the manufactured Flooring range.

Canadian Hard Maple remains the premium/flagship product.

---

# 17. Pine Sourcing

Current business information states that Pine is sourced from:

- USA
- New Zealand

Pine is primarily used as the base/supporting material in flooring.

Pine flooring may be produced on demand.

---

# 18. Product-Origin / Species Architecture

The website must distinguish between:

### Manufactured Flooring

Materials/products actually processed into flooring by Savitri Timbers.

### Broader Timber Products

Timbers supplied for applications such as:

- furniture;
- doors;
- decorative/architectural work;
- art;
- flooring requirements where appropriate;
- other customer-specific uses.

### Sourcing Origin

Origin may vary according to:

- existing suppliers;
- GCT sourcing;
- direct future imports;
- European sourcing development;
- customer-specific procurement.

Origin is therefore product-specific sourcing information, not one blanket claim for the company.

---

# 19. Product Information Model

Every Product should conceptually contain:

```text
Product
│
├── Name
├── Product category
├── Species / timber type
├── Availability model
│   ├── Existing source
│   ├── Direct import
│   └── On demand
│
├── Typical applications
├── Sourcing origin
├── Available dimensions
├── Evidence assets
└── Approved claims
```

Not every field must necessarily be displayed publicly.

This is a content model, not a requirement for a database.

---

# 20. Flooring Information Model

```text
Flooring Product
│
├── Species
├── Flooring type
├── Raw material
├── Raw dimensions
├── Manufacturing process
├── Finished dimensions
├── Commercial unit
├── Application
├── Evidence assets
└── Approved claims
```

Example:

```text
Canadian Hard Maple Flooring
│
├── Raw material: Maple boards
├── Incoming: 3"/4" × 1", 3 ft+
├── Finished width: 65 / 92 mm
├── Finished thickness: 22 mm
├── Unit: SQFT
└── Manufacturing: Savitri Timbers
```

---

# 21. Product ↔ Flooring Relationship

| Product | Products | Flooring | Manufactured by STPL |
|---|---:|---:|---:|
| Canadian Hard Maple | ✓ | ✓ | ✓ |
| Maple | ✓ | ✓ | ✓ |
| Teak | ✓ | ✓ | ✓ |
| Pine | ✓ | Supporting material | ✓ |
| Meranti | ✓ | Not core flooring | — |
| Steamed Beech | ✓ | Not core flooring | — |
| Oak | ✓ | Not core flooring | — |
| White Ash | ✓ | Not core flooring | — |
| Southern Yellow Pine | ✓ | Product/sourcing portfolio | — |
| Walnut | ✓ | Product/sourcing portfolio | — |
| Cherry | ✓ | Product/sourcing portfolio | — |
| Europe-sourced future products | ✓ | As applicable | To be determined |

This is the approved business architecture and does not mean every product is currently stocked.

---

# 22. Products Page Architecture

The Products page answers:

> **What timber products can Savitri Timbers supply?**

Approved structural direction:

```text
Hero
↓
Product Portfolio Introduction
↓
Featured / Flagship Product
↓
Core Timber Portfolio
↓
Broader Sourcing Portfolio
↓
Customer-Specific / On-Demand Sourcing
↓
Typical Applications
↓
Sourcing Capability
↓
Enquiry CTA
```

---

# 23. Flooring Page Architecture

The Flooring page answers:

> **What flooring does Savitri Timbers manufacture, and how is it made?**

Approved structural direction:

```text
Hero
↓
Flooring Overview
↓
Teak Flooring
↓
Maple Flooring
   └── Canadian Hard Maple flagship
↓
Manufacturing / Material Transformation
↓
Finished Dimensions
↓
Pine Base / Supporting Material
↓
Sports Flooring positioning
↓
Applications
↓
Authentic Manufacturing Evidence
↓
Flooring Enquiry CTA
```

---

# 24. Sports Flooring

Sports Flooring remains an important part of the Flooring proposition.

Sprint 4.2 should connect:

**Sports Flooring → Manufacturing capability → Actual manufactured flooring → Approved applications**

without introducing unsupported sports-performance claims.

Sprint 4.1B evidence discipline remains applicable.

---

# 25. Navigation

The relevant global navigation should be consistent across the site.

Proposed primary structure:

```text
Home
About
Products
Manufacturing
Flooring Solutions
Global Sourcing
Contact
```

Sprint 4.2 may correct navigation inconsistencies required to make Products and Flooring properly discoverable.

This does not authorize a general website redesign.

---

# 26. Design Language

Sprint 4.2 inherits the established STDP visual system.

No separate Product/Flooring design system should be created.

Existing principles remain authoritative:

- premium timber identity;
- dark forest green;
- gold accents;
- white/cream content areas;
- Cormorant Garamond;
- Montserrat;
- restrained premium presentation;
- authentic photography;
- generous whitespace;
- strong but restrained CTA treatment.

---

# 27. Evidence & Photography

Product imagery must represent actual products/materials or appropriately approved sourcing imagery.

Images must not imply:

- manufacturing where none occurs;
- inventory that does not exist;
- a specific geographic origin without evidence;
- a certification;
- a technical property.

Manufacturing imagery must continue to use authentic factory evidence established during Sprint 4.1B.

---

# 28. Technical Claims Policy

The following require explicit evidence before publication:

- certifications;
- standards compliance;
- laboratory test results;
- precise performance values;
- structural ratings;
- moisture percentages;
- durability periods;
- load ratings;
- treatment efficacy;
- fire ratings;
- acoustic ratings;
- environmental certifications;
- production capacity.

The dimensions and commercial units in this specification are authorized business inputs. Additional technical meaning must not be inferred.

---

# 29. Commercial Availability Language

The website must distinguish:

### Manufactured
Used when Savitri Timbers actually manufactures the product.

### Available
Used only when availability is sufficiently established.

### Sourced
Used when the product can be procured through the company's sourcing network.

### Available on demand
Used where the business can procure the product for a customer requirement but does not represent it as continuously stocked.

### Future direct import
An internal/future business strategy; it should not automatically become customer-facing copy.

---

# 30. Europe Sourcing Expansion

The Products architecture must be future-ready for European sourcing.

Karan's current Europe mission is relevant because he is actively exploring suppliers in:

- Croatia;
- Bosnia;
- Slovenia;
- Romania;
- Poland.

This changes the **future extensibility requirement**, not the established supplier list.

The website must not publish established sourcing claims for these countries until relationships are confirmed and wording is approved.

When confirmed, new species/origins can be added through the normal STDP governance process without redesigning the Products architecture.

---

# 31. SEO

SEO must follow the approved business model.

### Products

Potential themes:

- timber products;
- hardwood;
- softwood;
- timber sourcing;
- species;
- customer-specific timber requirements.

### Flooring

Potential themes:

- hardwood flooring;
- teak flooring;
- maple flooring;
- sports flooring;
- Canadian Hard Maple;
- Savitri Timbers flooring manufacturing.

SEO must not introduce products merely because they have search volume.

Business truth comes first.

---

# 32. Lead Generation

The two pages should have different primary conversion intents.

### Products CTA

Purpose: customer has a species, dimension or application requirement.

Concept:

> **Enquire About Timber**

### Flooring CTA

Purpose: customer has a flooring/project requirement.

Concept:

> **Enquire About Flooring**

Final copy may be refined during implementation without changing business meaning.

---

# 33. Technical Implementation Constraints

Cursor must preserve the existing architecture:

- static HTML;
- CSS;
- existing JavaScript where required;
- no unnecessary framework;
- no CMS;
- no database;
- no unnecessary dependencies;
- existing design system;
- responsive layout;
- accessible HTML;
- authentic assets;
- existing repository governance.

Cursor must not perform unrelated refactoring.

---

# 34. Out of Scope

Unless explicitly added through a subsequent decision:

- ecommerce;
- online ordering;
- inventory management;
- live stock availability;
- customer portal;
- product configurator;
- quotation engine;
- payment system;
- CMS;
- database;
- supplier portal;
- direct-import workflow system;
- ERP integration;
- complete Manufacturing redesign;
- Global Sourcing page implementation;
- unsupported certifications;
- unsupported technical specifications.

---

# 35. Acceptance Criteria

Sprint 4.2 is complete only when:

### Business
- Products and Flooring have clearly different roles.
- Product portfolio reflects approved business direction.
- Flooring reflects actual manufacturing.
- On-demand sourcing is not confused with stocked inventory.
- Future European sourcing can be incorporated without architectural redesign.

### Product
- Broader timber products can be represented.
- Product applications are clear.
- Sourcing/availability language is accurate.
- Product claims are evidence-controlled.

### Flooring
- Teak and Maple are clearly represented.
- Canadian Hard Maple is appropriately positioned as flagship.
- Pine base material is correctly represented.
- Raw and finished dimensions are not confused.
- CFT / SQFT / RFT distinctions are preserved.
- Pine treatment is represented without unsupported chemical/efficacy claims.

### UX
- Products and Flooring are easy to discover.
- Navigation is consistent.
- Internal linking is coherent.
- Mobile presentation works.
- CTAs are appropriate to each page.

### Governance
- No unsupported claims.
- No invented specifications.
- No invented supplier relationships.
- No fabricated sourcing origins.
- No unrelated architectural changes.

---

# 36. Human Decision Register

| ID | Decision | Classification | Status |
|---|---|---|---|
| D4.2-01 | Sprint 4.2 establishes Products + Flooring architecture | Proposed | **APPROVED** |
| D4.2-02 | Canadian Hard Maple remains flagship | Established | **APPROVED / CARRY FORWARD** |
| D4.2-03 | Broader timber portfolio is publicly represented as supply/sourcing capability | Business decision | **APPROVED** |
| D4.2-04 | Products and Flooring are separate categories | Proposed | **APPROVED** |
| D4.2-05 | Teak + Maple are core manufactured flooring | Business input | **APPROVED** |
| D4.2-06 | Pine is flooring base/support material and may be flooring on demand | Business input | **APPROVED** |
| D4.2-07 | Pine finished size = 70 × 45 mm, RFT | Business specification | **APPROVED** |
| D4.2-08 | Teak/Maple finished flooring = 65/92 mm × 22 mm, SQFT | Business specification | **APPROVED** |
| D4.2-09 | Teak/Maple raw boards = 3"/4" × 1", 3 ft+, CFT | Business specification | **APPROVED** |
| D4.2-10 | Pine raw = 75 × 50 mm, 3 ft+ | Business specification | **APPROVED** |
| D4.2-11 | Pine is termite treated at manufacturing site | Business input | **APPROVED** |
| D4.2-12 | Broader Products sourced according to customer requirements | Business input | **APPROVED** |
| D4.2-13 | Future direct importing by STPL | Established business direction | **APPROVED / CARRY FORWARD** |
| D4.2-14 | Europe becomes an additional sourcing opportunity | Business direction | **APPROVED** |
| D4.2-15 | Croatia/Bosnia/Slovenia/Romania/Poland are exploratory sourcing markets, not yet public sourcing claims | Governance interpretation | **APPROVED** |
| D4.2-16 | Products page may include on-demand products | Proposed | **APPROVED** |
| D4.2-17 | Website must not imply all Products are stocked | Proposed governance rule | **APPROVED** |
| D4.2-18 | Flooring page should focus on manufactured capability | Proposed | **APPROVED** |
| D4.2-19 | Sports Flooring remains core positioning | Established | **APPROVED / CARRY FORWARD** |
| D4.2-20 | Navigation normalized for Products/Flooring | Proposed | **APPROVED** |
| D4.2-21 | Products CTA and Flooring CTA have distinct purposes | Proposed | **APPROVED** |
| D4.2-22 | Final public wording for teak-origin and Indian teak comparison | Human approval | **PENDING — wording review** |
| D4.2-23 | Exact public wording for Pine termite treatment | Human/evidence review | **PENDING — wording review** |
| D4.2-24 | Exact European species to add once supplier exploration produces confirmed opportunities | Human decision | **FUTURE / EVENT-DRIVEN** |

---

# 37. Manufacturing Location Evidence Gate

The GST registration identifies the Kanchanpura, Sri Madhopur, Rajasthan location as the principal place of business.

Any stronger public claim about the exact manufacturing/storage location must use reconciled and approved business evidence.

Cursor must not independently resolve conflicting external/business records.

This is a human verification gate, not an implementation decision.

---

# 38. Implementation Authority

Upon approval, this specification becomes authoritative for Sprint 4.2.

If repository code conflicts with this specification:

> **Specification wins.**

If a business requirement conflicts with an established STDP governance rule:

> **The conflict must be surfaced for human resolution.**

If an implementation detail is not specified:

> Cursor may choose the least-complex technically appropriate implementation without changing business meaning.

---

# 39. Definition of Done

```text
Business decisions
       ↓
Approved specification
       ↓
Implementation
       ↓
Evidence / content verification
       ↓
Responsive QA
       ↓
Human review
       ↓
Production verification
       ↓
Sprint completion record
```

No step should be skipped.

---

# 40. Approval Record

**Sprint:** 4.2 — Product & Flooring  
**Specification:** v1.0  
**Approval:** **APPROVED BY HUMAN PROJECT OWNER**  
**Approval date:** 11 August 2026  
**Implementation authorization:** **YES — after this specification is committed to the repository**  
**Next phase:** Repository documentation commit → Cursor implementation task

---

## Change Control

Any material change to:

- product portfolio;
- flooring portfolio;
- dimensions;
- commercial units;
- sourcing model;
- manufacturing claims;
- public product claims;
- page architecture;
- scope;

after this approval requires a new documented decision or specification revision. Cursor must not silently incorporate such changes.
