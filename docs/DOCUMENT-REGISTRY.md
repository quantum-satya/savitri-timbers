# STDP Document Registry

> **Filename:** `docs/DOCUMENT-REGISTRY.md`

---

## Document Control

| Property | Value |
|----------|-------|
| **Document ID** | REF-000 |
| **Document Title** | Document Registry |
| **Filename** | `docs/DOCUMENT-REGISTRY.md` |
| **Version** | 2.0 |
| **Status** | Approved |
| **Phase** | Phase 2D – Repository Governance & AI Collaboration Framework |
| **Document Owner** | Project Documentation Lead |
| **Reviewer(s)** | Satya Pal |
| **Approver(s)** | Satya Pal |
| **Effective Date** | 2026-07-23 |
| **Last Updated** | 2026-07-17 |
| **Next Review** | Before Phase 3 completion |

## Registry Philosophy

The STDP Document Registry is the authoritative catalog of all governed documentation within the repository.

Every governed document shall:

- have a unique Document ID,
- belong to a governance domain,
- occupy an authority layer,
- have a defined owner,
- maintain version information,
- maintain review status,
- remain traceable throughout its lifecycle.

The registry serves as the primary reference for documentation governance and repository traceability.

If a governed document is not registered here, it is not considered part of the official STDP documentation system.

## Purpose

This registry lists every governed Markdown document in the STDP documentation system and records its authoritative Document ID.

---

## Scope

Covers governed documents under `docs/`, their assigned IDs, ownership roles, statuses, versions, and last updated values. Does not define the substantive business, brand, technical, or operational guidance contained in the registered documents.

---

## Related Documents

- PROJECT.md
- KNOWLEDGE-HIERARCHY.md
- README.md

---

## Document Classification

The STDP documentation system is organized into the following governance domains:

- Governance
- Development
- Architecture
- Business
- Brand
- Reference
- Operations

Each governed document belongs to exactly one governance domain and one authority layer, as defined in the Repository Constitution.

## Governance

| Document ID | Document | Governance Domain | Authority Layer | Status | Version |
| --- | --- | --- | --- | --- | --- |
| GOV-001 | docs | `PROJECT.md` | Project Architect | Approved | 1.0 |  |
| GOV-002 | docs | `KNOWLEDGE-HIERARCHY.md` | Project Architect | Approved | 2.0 | 2026-07-17 |
| GOV-003 | docs | `DECISIONS.md` | Project Architect | Approved | 1.0 |  |


## Business

| Document ID | Folder | Document | Role | Status | Version | Last Updated |
| --- | --- | --- | --- | --- | --- |
| BUS-001 | business | `business/README.md` | Business Owner | Draft | 1.0 |  |
| BUS-010 | business | `business/01-brand-positioning.md` | Business Owner | Draft | 1.0 |  |
| BUS-020 | business | `business/02-product-catalog.md` | Business Owner | Draft | 1.0 |  |
| BUS-030 | business | `business/03-homepage-content.md` | Business Owner | Draft | 1.0 |  |
| BUS-040 | business | `business/04-messaging-framework.md` | Business Owner | Draft | 1.0 |  |
| BUS-050 | business | `business/05-target-customers.md` | Business Owner | Draft | 1.0 |  |
| BUS-060 | business | `business/06-value-proposition.md` | Business Owner | Draft | 1.0 |  |

## Brand

| Document ID | Folder | Document | Role | Status | Version | Last Updated |
| --- | --- | --- | --- | --- | --- |
| BRD-000 | docs/brand | `brand/README.md` | Brand Owner | Draft | 1.0 |  |
| BRD-010 | docs/brand | `brand/00-design-system.md` | Brand Owner | Review | 1.0 | 2026-07-04 |
| BRD-020 | docs/brand | `brand/01-brand-philosophy.md` | Brand Owner | Review | 1.0 | 2026-07-04 |
| BRD-030 | docs/brand | `brand/02-brand-personality.md` | Brand Owner | Draft | 1.0 |  |
| BRD-040 | docs/brand | `brand/03-design-principles.md` | Brand Owner | Draft | 1.0 |  |
| BRD-050 | docs/brand | `brand/04-color-system.md` | Brand Owner | Draft | 1.0 |  |
| BRD-060 | docs/brand | `brand/05-typography-system.md` | Brand Owner | Draft | 1.0 |  |
| BRD-070 | docs/brand | `brand/06-spacing-layout.md` | Brand Owner | Draft | 1.0 |  |
| BRD-080 | docs/brand | `brand/07-component-library.md` | Brand Owner | Draft | 1.0 |  |
| BRD-090 | docs/brand | `brand/08-user-journeys.md` | Brand Owner | Draft | 1.0 |  |
| BRD-100 | docs/brand | `brand/09-ai-design-rules.md` | Brand Owner | Draft | 1.0 |  |
| BRD-110 | docs/brand | `brand/10-design-checklist.md` | Brand Owner | Draft | 1.0 |  |

## AI

| Document ID | Folder | Document | Role | Status | Version | Last Updated |
| --- | --- | --- | --- | --- | --- |
| AI-010 | docs | `AI-INSTRUCTIONS.md` | AI Governance Lead | Draft | 1.0 |  |
| AI-020 | docs | `CODEX-WORKFLOW.md` | AI Governance Lead | Review | 1.0 |  |

## Reference

| Document ID | Folder | Document | Role | Status | Version | Last Updated |
| --- | --- | --- | --- | --- | --- |
| REF-000 | DOCUMENT-REGISTRY.md | Project Documentation Lead | Approved | 2.0 | 2026-07-05 |
| REF-010 | docs | `CONTENT-GUIDE.md` | Content Strategist | Draft | 1.0 |  |
| REF-020 | docs | `GLOSSARY.md` | Project Documentation Lead | Draft | 1.0 |  |
| REF-030 | docs | `BRAND-GUIDE.md` | Brand Owner | Review | 1.0 |  |

## Operations

| Document ID | Folder | Document | Role | Status | Version | Last Updated |
| --- | --- | --- | --- | --- | --- |
| OPS-010 | docs | `ROADMAP.md` | Project Manager | Draft | 1.0 |  |
| OPS-020 | docs | `CHANGELOG.md` | Development Lead | Draft | 1.0 |  |
| OPS-030 | docs | `TODO.md` | Project Manager | Draft | 1.0 |  |
| OPS-040 | docs | `DEPLOYMENT.md` | Development Lead | Draft | 1.0 |  |

---

## Registry Rules

1. Every governed document shall have a unique Document ID.

2. Document IDs are permanent and shall never be reused.

3. Every governed document shall be registered before becoming authoritative.

4. Every governed document shall belong to exactly one governance domain.

5. Every governed document shall occupy one authority layer.

6. Changes to document ownership, status, or version shall be reflected in this registry.

7. Deprecated documents shall remain registered with an appropriate status.

8. If document metadata conflicts with this registry, the registry takes precedence until the discrepancy is resolved.

## Change Management

The Document Registry shall be updated whenever:

- a governed document is created,
- a document is renamed,
- a document is relocated,
- ownership changes,
- status changes,
- version changes,
- a document is deprecated,
- a governance domain is introduced.

Updating the registry is considered part of the Definition of Done for any documentation change affecting governed documents.