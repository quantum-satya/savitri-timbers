# AI Governance
## Savitri Timbers Digital Platform (STDP)

**Version:** 1.0
**Status:** Approved
**Last Updated:** 08 August 2026

---

# Purpose

This document defines how Artificial Intelligence tools are used during the
development of the Savitri Timbers Digital Platform (STDP).

The objective is to ensure that AI consistently produces production-quality
work while preserving the project's architecture, documentation standards,
business identity, and long-term maintainability.

This document is the human-readable governance specification.

Machine-enforceable rules are stored in:

.cursor/rules/

The currently active governance version is:

.cursor/rules/v1/

---

# AI Development Philosophy

The AI is treated as a software engineer working within an established
engineering process.

AI assists development.

AI does not replace engineering judgement.

All significant architectural and business decisions require human review.

---

# Core Principles

The following principles apply to every AI-assisted task.

## 1. Documentation First

Documentation is the source of truth.

Documentation should describe completed work.

Features should never be documented before they exist.

Documentation must remain synchronized with production.

---

## 2. Architecture Reuse

Existing repository architecture should always be reused before introducing new
patterns.

Consistency is preferred over novelty.

---

## 3. Business Identity

The website represents a premium hardwood manufacturing company.

AI must reinforce this positioning.

The company is:

- Importer of premium hardwood
- Hardwood processor
- Sports flooring manufacturer
- OEM manufacturing partner

The company is not:

- Flooring contractor
- Interior design company
- Construction contractor

---

## 4. Static First

The website is intentionally lightweight.

Prefer:

- HTML
- CSS

Avoid JavaScript unless there is a strong business reason.

---

## 5. Authenticity

Authentic manufacturing photographs are preferred over stock imagery.

Technical accuracy is preferred over marketing language.

Claims should be evidence-based.

---

## 6. Small Production Sprints

Development should occur in small,
reviewable,
production-ready increments.

Large repository-wide changes should be avoided unless explicitly requested.

---

## 7. Accessibility

Accessibility is part of quality.

Semantic HTML,
keyboard accessibility,
responsive layouts,
and readable typography are mandatory.

---

## 8. Git Discipline

AI should never:

- create commits
- push changes
- merge branches
- rewrite history

All work should remain uncommitted until reviewed.

---

## 9. Review Before Deployment

Every sprint follows:

Planning

↓

Implementation

↓

Review

↓

Approval

↓

Commit

↓

Deployment

Deployment never occurs directly from AI output.

---

# Cursor Rules

Cursor-specific rules are stored in:

```
.cursor/rules/
```

Current rule set:

- 01 Documentation First
- 02 Git Workflow
- 03 HTML & CSS Standards
- 04 Business Identity
- 05 Architecture Reuse
- 06 Documentation Style

These files are the implementation of this governance policy.

---

# AI Responsibilities

AI should:

- preserve repository quality
- reuse existing architecture
- minimise technical debt
- improve maintainability
- improve documentation
- produce production-quality code
- explain important decisions

---

# AI Limitations

AI should not:

- invent business facts
- create misleading marketing claims
- redesign existing architecture without approval
- rewrite large sections unnecessarily
- modify unrelated files
- document incomplete work

---

# Engineering Workflow

Typical workflow:

Business Objective

↓

Architecture Planning

↓

Documentation

↓

Implementation

↓

Review

↓

Commit

↓

Deployment

---

# Future Expansion

This governance applies to all future AI tools.

Examples:

- Cursor
- ChatGPT
- OpenAI Codex
- GitHub Copilot
- Future coding assistants

New AI tools should follow this governance before contributing to the project.

---

# Change Control

Changes to AI governance should be made deliberately.

Major changes should be documented in:

- DECISIONS.md

and reflected in:

```
.cursor/rules/
```

to keep human governance and machine rules synchronized.

---

End of Document