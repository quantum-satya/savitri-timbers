# STDP Knowledge Hierarchy

Document ID: GOV-002
Version: 1.0
Status: Approved
Role: Project Architect

Reviewers:
- Satya Pal

Approved By:


Last Updated:
2026-07-04

## Purpose

This document defines the knowledge hierarchy for the Savitri Timbers Digital Platform (STDP). Its purpose is to ensure that all business decisions, documentation, design, content, and source code remain consistent throughout the project. Whenever two documents appear to conflict, this hierarchy determines which document takes precedence. This document is the highest-level governance document for the documentation system.

---

## Scope

Covers the documentation hierarchy, precedence rules, conflict resolution, and knowledge flow. Does not define detailed business content, brand standards, implementation tasks, or deployment steps.

---

## Source of Truth

This document is authoritative for the governance area described in its scope.

Related Documents

- GOV-001 PROJECT.md
- GOV-003 DECISIONS.md
- AI-010 AI-INSTRUCTIONS.md

---
# Purpose

This document defines the knowledge hierarchy for the Savitri Timbers Digital Platform (STDP).

Its purpose is to ensure that all business decisions, documentation, design, content, and source code remain consistent throughout the project.

Whenever two documents appear to conflict, this hierarchy determines which document takes precedence.

This document is the highest-level governance document for the documentation system.

---
# Governance Principles

Every change to STDP follows four principles:

1. Discuss before documenting.
2. Document before implementing.
3. Obtain business approval before coding.
4. Review implementation before commit and deployment.

This ensures that every change is intentional, traceable, and aligned with the company's business objectives.
---
# Philosophy

The website must never define the business.

Instead, knowledge flows in one direction:

Business Strategy
        ↓
Documentation
        ↓
Design
        ↓
Content
        ↓
Implementation
        ↓
Deployment

Code is the final output—not the source of truth.

---

# Knowledge Hierarchy

Level 1
Business Knowledge

Directory

docs/business/

Purpose

Defines the business.

Includes:

• Brand Positioning
• Product Catalog
• Value Proposition
• Target Customers
• Messaging Framework
• Homepage Content

Questions Answered

Who are we?

What do we sell?

Why are we different?

Who is our customer?

What promises can we make?

Authority

Highest

---

Level 2
Brand Knowledge

Directory

docs/brand/

Purpose

Defines the visual and experiential identity.

Includes

• Design System
• Brand Philosophy
• Design Principles
• Typography
• Color System
• Components
• User Journeys

Questions Answered

How should the brand look?

How should users experience the website?

Authority

Business documents always override brand documents.

---

Level 3
Content Knowledge

Documents

CONTENT-GUIDE.md

Homepage specifications

Future content specifications

Purpose

Defines how approved business and brand knowledge is communicated through words.

Questions Answered

What should be written?

What tone should be used?

How should information be structured?

Authority

Must follow both Business and Brand documentation.

---

Level 4
Project Knowledge

Documents

PROJECT.md

ROADMAP.md

TODO.md

DECISIONS.md

CHANGELOG.md

DEPLOYMENT.md

Purpose

Defines project planning and development workflow.

Questions Answered

What are we building?

What is next?

What decisions have been made?

Authority

Cannot override Business or Brand decisions.

---

Level 5
AI Knowledge

Documents

AI-INSTRUCTIONS.md

CODEX-WORKFLOW.md

Purpose

Defines how AI agents should work inside STDP.

Questions Answered

How should AI behave?

How should implementations be performed?

Authority

Must follow every higher level.

AI never defines business policy.

---

Level 6
Implementation

Source

HTML

CSS

JavaScript

Assets

Purpose

Implements approved documentation.

Authority

Lowest.

Source code must always follow documentation.

If code conflicts with documentation, documentation is considered correct unless a business decision changes it.

---

# Decision Flow

Every feature should follow this sequence.

Business Discussion
        ↓
Documentation Update
        ↓
Documentation Review
        ↓
Business Approval
        ↓
Codex Implementation
        ↓
ChatGPT Code & UX Review
        ↓
Git Commit
        ↓
Deployment
        ↓
Changelog Update

Implementation must never begin before documentation is approved.

---

# Conflict Resolution

When two documents disagree:

1. Business documentation wins over all other documentation.

2. Brand documentation wins over Content documentation.

3. Content documentation wins over implementation.

4. Project documentation cannot redefine business strategy.

5. AI instructions cannot override approved documentation.

6. Source code must be updated to match approved documentation.

---

# Source of Truth

The following documents are considered authoritative.

Business

• docs/business/

Brand

• docs/brand/

Content

• CONTENT-GUIDE.md

Project

• PROJECT.md

AI Workflow

• AI-INSTRUCTIONS.md
• CODEX-WORKFLOW.md

---

# Documentation Principles

Every document should satisfy the following principles.

Single Source of Truth

Every concept should have one authoritative document.

Documentation Before Code

Business decisions are documented before implementation.

Consistency

The website, documentation and source code must always agree.

Accuracy

Marketing content must accurately represent the business.

Traceability

Every implementation should be traceable to an approved document.

Maintainability

Documentation should remain clear, concise and easy to update.

---

# AI Operating Principle

AI agents working on STDP must always follow this order of reasoning.

1. Read Business documentation.

2. Read Brand documentation.

3. Read Content documentation.

4. Read Project documentation.

5. Read AI workflow documentation.

6. Implement only what is approved.

AI must never invent business strategy, product information, marketing claims, or design rules.

---

# Future Expansion

As STDP grows, additional knowledge domains may be introduced.

Examples include:

docs/legal/

docs/sales/

docs/hr/

docs/manufacturing/

docs/finance/

Each new domain must define its position within this hierarchy before becoming part of the project's official documentation.

---

# Guiding Principle

Business defines the brand.

The brand shapes the experience.

The experience guides the content.

The content drives the implementation.

The implementation delivers the business.
