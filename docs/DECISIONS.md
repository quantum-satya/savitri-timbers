# Architectural & Business Decisions

Document ID: GOV-003
Version: 1.0
Status: Approved
Role: Project Architect

Reviewers:
- Satya Pal

Approved By:


Last Updated:


## Purpose

This document defines governance guidance for Architectural & Business Decisions within the Savitri Timbers Digital Platform documentation system.

---

## Scope

Covers recorded architectural, business, product, design, and technical decisions. Does not replace detailed source documents or implementation changelogs.

---

## Source of Truth

This document is authoritative for the governance area described in its scope.

Related Documents

- GOV-001 PROJECT.md
- OPS-020 CHANGELOG.md
- GOV-002 KNOWLEDGE-HIERARCHY.md

---
This document records important business, product, design, and technical decisions made during the development of the Savitri Timbers website.

Unlike CHANGELOG.md, which records what changed, this document explains why important decisions were made.

When future contributors, AI assistants, or project owners need to understand the reasoning behind an implementation, this document should be the first place to look.

---

# Decision Numbering

Each decision is assigned a permanent identifier.

Example:

- DEC-2026-001
- DEC-2026-002
- DEC-2026-003

Once assigned, a decision number should never be reused.

---

# DEC-2026-001

## Title

Use a Static Website

## Status

Approved

## Date

June 2026

## Decision

Build the website using static HTML, CSS and Vanilla JavaScript.

## Reason

The company website is primarily informational and does not require a database or backend application.

A static website provides:

- Better performance
- Higher security
- Lower maintenance
- Faster deployment
- Lower hosting cost

---

# DEC-2026-002

## Title

Cloudflare Pages Hosting

## Status

Approved

## Date

June 2026

## Decision

Host the production website on Cloudflare Pages.

## Reason

Cloudflare Pages offers:

- Excellent global performance
- Free SSL
- Simple deployment
- Reliable CDN
- Low operational overhead

---

# DEC-2026-003

## Title

Premium Brand Positioning

## Status

Approved

## Decision

The website should communicate a premium brand image.

## Reason

The target customers are professional buyers including architects, builders, developers and institutional customers.

The design should therefore emphasize:

- Quality
- Trust
- Reliability
- Long-term relationships

instead of discount-driven marketing.

---

# DEC-2026-004

## Title

Technology Stack

## Status

Approved

## Decision

Use:

- HTML5
- CSS3
- Vanilla JavaScript

Avoid large frontend frameworks.

## Reason

The project values:

- Simplicity
- Maintainability
- Performance
- Long-term stability

---

# DEC-2026-005

## Title

Design Language

## Status

Approved

## Decision

Use the following visual identity consistently.

Primary Colors

- Dark Forest Green
- Gold
- White

Typography

Headings

- Cormorant Garamond

Body

- Montserrat

## Reason

This combination reflects the premium positioning of the company.

---

# DEC-2026-006

## Title

Business Positioning

## Status

Approved

## Decision

The company imports premium timber (raw material).

The company manufactures premium wooden sports flooring in India.

## Reason

This accurately represents the business model.

The website must never describe the company as an importer of finished wooden flooring.

---

# DEC-2026-007

## Title

Homepage Sports Flooring Feature

## Status

Approved

## Date

July 2026

## Decision

Introduce a Featured Business Unit for Sports Flooring on the homepage.

## Reason

Management requested immediate visibility for the Sports Flooring business without waiting for a complete website redesign.

The implementation serves as a hotfix while preserving the existing navigation structure.

---

# DEC-2026-008

## Title

Current Product Portfolio

## Status

Approved

## Decision

Only display products currently offered by the company.

Current portfolio:

- Pine
- Maple
- Teak

## Reason

The website should accurately represent current business capabilities.

Additional species will be added only after business approval.

---

# DEC-2026-009

## Title

Development Workflow

## Status

Approved

## Decision

Separate planning from implementation.

Planning

ChatGPT

Implementation

Codex

Review

Human

Deployment

Git + Cloudflare

## Reason

This allows:

- Better architectural decisions
- Cleaner implementation
- Higher quality code
- Faster development

---

# DEC-2026-010

## Title

Documentation First

## Status

Approved

## Decision

Maintain comprehensive documentation inside the repository.

## Reason

Documentation improves:

- Maintainability
- Knowledge sharing
- AI-assisted development
- Onboarding future developers

---

# DEC-2026-011

## Title

Business Before Technology

## Status

Approved

## Decision

Technology choices must support business goals.

Business requirements always take precedence over technical preferences.

## Reason

The website exists to support Savitri Timbers' business growth rather than to showcase technology.

---

## DEC-2026-012

Date: 2026-07-04

Decision:
Canadian Hard Maple becomes Savitri Timbers' flagship product.

Reason:
It represents the company's strongest competitive advantage through trusted sourcing relationships and supports long-term brand positioning.

Approved By:
Satya Pal
Karan Yadav

Affected Documents:
- business/01-brand-positioning.md
- business/02-product-catalog.md
- business/03-homepage-content.md

Implementation Status:
Pending

## DEC-2026-013

Title
Adopt STDP Documentation Governance Standard v1.0

Decision

All repository documentation shall follow the STDP Documentation Standard, including:
- Standard metadata
- Document IDs
- Document Registry
- Governance Roles
- Business Approval Gate
- Knowledge Hierarchy

Reason

To establish a documentation-first, AI-assisted development process with clear ownership, traceability, and governance.

Affected Documents

- GOV-002 KNOWLEDGE-HIERARCHY.md
- AI-020 CODEX-WORKFLOW.md
- DOCUMENT-REGISTRY.md
- All documents under /docs

Status

Approved

---
DEC-2026-003

Title

Documentation Governance Migration Complete

Decision

The STDP repository has adopted a documentation-first governance model with:

• Knowledge Hierarchy
• Business Approval Gate
• Standard Metadata
• Document IDs
• Document Registry
• AI Governance Rules

Reason

To ensure every future implementation is traceable to approved business documentation.

Status

Approved
---
