# Codex Development Workflow

Document ID: AI-020
Version: 1.0
Status: Review
Role: AI Governance Lead

Reviewers:
- Satya Pal

Approved By:


Last Updated:


## Purpose

This document defines the standard workflow for using Codex on the Savitri Timbers Digital Platform. Codex is responsible for implementation. Business decisions remain the responsibility of the project owner.

---

## Scope

Covers Codex workflow, approval gates, implementation process, and scope control. Does not define business strategy or brand standards.

---

## Source of Truth

This document is not authoritative until its status is Approved.

Related Documents

- AI-010 AI-INSTRUCTIONS.md
- GOV-002 KNOWLEDGE-HIERARCHY.md
- OPS-040 DEPLOYMENT.md

---
# Purpose

This document defines the standard workflow for using Codex on the Savitri Timbers Digital Platform.

Codex is responsible for implementation.

Business decisions remain the responsibility of the project owner.

---
## Business Approval Gate

Codex must not implement new features until the relevant documentation has been approved.

If documentation is incomplete, inconsistent or still under review, Codex should stop and request clarification instead of making assumptions.
---
# Before Starting Any Task

Always understand the project before modifying code.

Read the following documents in order:

1. PROJECT.md
2. AI-INSTRUCTIONS.md
3. BRAND-GUIDE.md
4. GLOSSARY.md
5. DECISIONS.md

If working on design:

Read

docs/brand/

If working on content:

Read

CONTENT-GUIDE.md

If working on deployment:

Read

DEPLOYMENT.md

---

# Understand Before Coding

Before writing code:

Understand:

- Business objective
- User objective
- Technical objective

If anything is unclear:

Ask.

Never guess.

---

# Scope Control

Modify only the files necessary.

Never perform unrelated refactoring.

Never redesign unrelated pages.

Never rename files without approval.

---

# Coding Standards

Reuse existing CSS.

Use semantic HTML.

Prefer reusable components.

Avoid duplicate code.

Avoid unnecessary JavaScript.

Avoid frameworks.

---

# Design Rules

Follow the Design System.

Maintain consistency.

Protect white space.

Keep layouts clean.

Keep typography consistent.

---

# Business Rules

Always remember:

Savitri Timbers imports premium timber.

Savitri Timbers manufactures wooden flooring in India.

Never describe the company as importing finished flooring.

---

# Implementation Process

1. Understand

↓

2. Explain

↓

3. Recommend

↓

4. Wait for approval

↓

5. Implement

↓

6. Review

↓

7. Commit

---

# Commit Messages

Use meaningful commits.

Example:

Hotfix: Add Featured Sports Flooring section

Feature: Add WhatsApp floating button

Docs: Update Design System

Avoid:

Updated website

Changes

Fixes

---

# After Implementation

Verify:

HTML

CSS

Responsiveness

Accessibility

Broken links

Performance

---

# Never

Never redesign the project.

Never replace existing styles unnecessarily.

Never introduce Bootstrap.

Never introduce Tailwind.

Never introduce jQuery.

Never introduce unnecessary dependencies.

Never remove existing functionality without approval.

---

# Success

Every implementation should improve at least one of:

- Trust
- User Experience
- Maintainability
- Performance
- Accessibility
- Lead Generation

If not, reconsider the solution.
