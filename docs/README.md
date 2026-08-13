# STDP Documentation

Document ID: REF-001
Version: 1.1
Status: Approved
Role: Project Documentation Lead

Reviewers:

- Satya Pal

Approved By:

- Satya Pal

Last Updated: 2026-08-13

---

## About STDP

The Savitri Timbers Digital Platform (STDP) is the digital foundation for Savitri Timbers Pvt. Ltd.

It follows a documentation-first development model, where business strategy, governance, architecture, and implementation evolve together through a structured review and approval process.

The current production baseline is Version 1.3.1.

## Purpose

This directory contains the official documentation for the Savitri Timbers Digital Platform (STDP).

The documentation serves as the primary knowledge base for business decisions, brand standards, AI-assisted development, and project governance.

All implementation should originate from approved documentation.

---

## Scope

This documentation defines:

- Business strategy
- Brand identity
- Website content
- AI development governance and workflow
- Project governance
- Development roadmap
- Operational procedures
- Release history

It does not contain application source code.

---

## Related Documents

This document is the entry point to the STDP documentation system.

- PROJECT.md
- KNOWLEDGE-HIERARCHY.md
- DOCUMENT-REGISTRY.md
- AI-GOVERNANCE.md
- CHANGELOG.md

---

# Documentation Structure

```text
docs/
│
├── README.md
├── AI-GOVERNANCE.md
├── AI-INSTRUCTIONS.md
├── PROJECT.md
├── PROJECT_STATUS.md
├── KNOWLEDGE-HIERARCHY.md
├── DOCUMENT-REGISTRY.md
├── DECISIONS.md
├── ROADMAP.md
├── CHANGELOG.md
├── TODO.md
├── CODEX-WORKFLOW.md
├── CONTENT-GUIDE.md
├── BRAND-GUIDE.md
├── DEPLOYMENT.md
├── ENVIRONMENT.md
├── SETUP.md
├── GLOSSARY.md
│
├── architecture/
├── brand/
├── business/
├── design/
├── sprints/
└── releases/

AI governance is additionally implemented through the versioned rule set:
.cursor/
└── rules/
    └── v1/
---



---

# 3. Restore the numbered Reading Order

Your diff shows that the numbering disappeared.

It should be:

```markdown
# Reading Order

For new contributors and AI agents:

1. README.md
2. PROJECT.md
3. KNOWLEDGE-HIERARCHY.md
4. PROJECT_STATUS.md
5. DOCUMENT-REGISTRY.md
6. AI-GOVERNANCE.md
7. AI-INSTRUCTIONS.md
8. Business Documentation
9. Architecture Documentation
10. Brand Documentation
11. Content Documentation
12. Operational Documentation
13. Release Documentation

---

# Development Workflow

Every implementation follows the STDP governance model.

Business Discussion

↓

Documentation Update

↓

Business Approval

↓

AI-Assisted Implementation

↓

Human Review

↓

Git Commit

↓

Deployment

↓

Changelog / Release Documentation Update

AI tools may assist with planning, implementation, analysis, documentation, and review, but human approval remains required before committing and deploying changes.
---

# Documentation Principles

- Documentation before implementation.
- Business drives technology.
- Approved documents are the source of truth.
- Every governed document has a unique Document ID.
- Every implementation should be traceable to approved documentation.
- Completed production work must be reflected in the appropriate documentation.
- Unfinished work must not be documented as completed production functionality.
- Historical decisions and release history should be preserved.

---

# Repository Vision

STDP follows a documentation-first approach to software development.

The repository is designed so that business knowledge, design standards, AI governance, and source code remain consistent throughout the lifecycle of the project.

Documentation is considered a strategic asset and is maintained with the same discipline as source code.