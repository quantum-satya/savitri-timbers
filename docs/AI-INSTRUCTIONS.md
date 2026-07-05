# AI Development Instructions

Document ID: AI-010
Version: 1.0
Status: Draft
Role: AI Governance Lead

Reviewers:
- Satya Pal

Approved By:


Last Updated:


## Purpose

This document defines governance guidance for AI Development Instructions within the Savitri Timbers Digital Platform documentation system.

---

## Scope

Covers permanent AI assistant instructions for STDP. Does not replace business approvals, brand source documents, or deployment procedures.

---

## Source of Truth

This document is not authoritative until its status is Approved.

Related Documents

- GOV-001 PROJECT.md
- GOV-002 KNOWLEDGE-HIERARCHY.md
- AI-020 CODEX-WORKFLOW.md

---
This document provides permanent instructions for AI coding assistants working on the Savitri Timbers website.

Examples include:

- OpenAI Codex
- ChatGPT
- GitHub Copilot
- Claude
- Gemini
- Any future AI development tools

These instructions apply unless explicitly overridden by the project owner.

---

# Project Overview

Company

Savitri Timbers Pvt. Ltd.

Website

https://savitriagro.com

Tagline

> Delivering Quality, Honouring Commitment.

This is a premium corporate website representing a timber sourcing and wooden flooring manufacturing company.

---
# Known Business Facts

The following facts are considered the current source of truth for this project.

## Company

Savitri Timbers Pvt. Ltd.

---

## Website

https://savitriagro.com

---

## Tagline

Delivering Quality, Honouring Commitment.

---

## Business Positioning

Savitri Timbers is a premium timber sourcing and wooden flooring manufacturing company.

The company focuses on quality, reliability, transparency, and long-term customer relationships.

---

## Core Business

- Global Timber Sourcing
- Timber Import (Raw Material)
- Wooden Flooring Manufacturing
- Sports Flooring Solutions

---

## Important Clarification

The company imports **timber (raw material)**.

The company **does NOT import finished wooden flooring**.

Always describe the business as:

> Global Timber Sourcing → Wooden Flooring Manufacturing → Customer Solutions

Never describe the company as an importer or reseller of finished wooden flooring.

---

## Current Product Portfolio

Current timber species promoted on the website:

- Pine
- Maple
- Teak

Only include additional timber species when explicitly approved.

---

## Current Services

- Timber Sourcing
- Timber Supply
- Wooden Flooring
- Sports Flooring

Future services should not be presented as currently available unless approved.

---

## Brand Identity

Primary Colors

- Dark Forest Green
- Gold
- White
- Light Neutral Backgrounds

Typography

Headings

- Cormorant Garamond

Body

- Montserrat

---

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Git
- GitHub
- Cloudflare Pages
- Visual Studio Code

No frontend frameworks are currently used.

---

## Development Philosophy

The website is intentionally built as a lightweight static website.

Priorities are:

- Performance
- Simplicity
- Reliability
- Maintainability
- Premium presentation

Avoid unnecessary complexity.

---

## Current Release

Version 1.1 (In Development)

Primary objectives:

- Improve lead generation
- Strengthen trust
- Highlight Sports Flooring
- Improve SEO
- Maintain premium design language

---

## Decision Authority

Business decisions are approved by the project owners.

When requirements conflict:

Business requirements take precedence over technical preferences.

If uncertain, ask for clarification before making assumptions.
---
# Business Rules

Always remember the following.

## Rule 1

Savitri Timbers imports premium timber (raw material).

The company does NOT import finished wooden flooring.

Never describe the company as an importer of wooden flooring.

---

## Rule 2

The business workflow is:

Global Timber Sourcing

↓

Import Premium Timber

↓

Manufacture Wooden Flooring in India

↓

Supply Projects

↓

Installation Support

---

## Rule 3

Only showcase products and services that are currently offered.

Do not introduce speculative products or future services unless explicitly instructed.

---

## Rule 4

When unsure, prefer factual business information over marketing exaggeration.

---

# Website Goals

Primary Objective

Every change should strengthen trust before it attempts to increase conversions.

Every improvement should support one or more of these goals.

- Build trust
- Improve user experience
- Generate business enquiries
- Showcase current capabilities
- Strengthen premium branding

---

# Design Philosophy

The website should always feel:

- Premium
- Elegant
- Modern
- Professional
- Clean
- Trustworthy

Avoid flashy or distracting design.

White space is encouraged.

Keep layouts uncluttered.

---

# Brand Identity

Primary Colors

- Dark Forest Green
- Gold
- White
- Light Neutral Backgrounds

Typography

Headings

- Cormorant Garamond

Body

- Montserrat

---

# UI Principles

Prefer:

- Simple layouts
- Large readable headings
- High quality imagery
- Clear spacing
- Strong call-to-action buttons

Avoid:

- Visual clutter
- Overuse of icons
- Too many animations
- Excessive gradients
- Heavy shadows
- Busy backgrounds

---

# Coding Standards

Always:

- Write semantic HTML5.
- Write clean CSS.
- Use meaningful class names.
- Keep code readable.
- Keep indentation consistent.
- Reuse existing CSS whenever possible.
- Keep pages lightweight.

Never:

- Introduce Bootstrap.
- Introduce Tailwind.
- Introduce jQuery.
- Introduce unnecessary JavaScript.
- Duplicate CSS unnecessarily.
- Modify unrelated code.

---

# CSS Guidelines

Prefer extending the existing stylesheet.

Create reusable classes.

Avoid inline styles.

Avoid !important unless absolutely necessary.

Maintain consistency throughout the project.

---

# HTML Guidelines

Use:

- section
- article
- nav
- header
- footer
- main

where appropriate.

Always include meaningful alt text for images.

Prefer accessibility-friendly HTML.

---

# Responsive Design

The website is mobile-first.

Every change must be tested for:

Desktop

Tablet

Mobile

Never introduce horizontal scrolling.

---

# Performance

Prioritize speed.

Optimize images.

Avoid unnecessary libraries.

Minimize CSS duplication.

Keep JavaScript minimal.

---

# SEO

Use:

- semantic HTML
- proper heading hierarchy
- descriptive page titles
- descriptive meta descriptions
- meaningful alt text

Never damage existing SEO without approval.

---

# Accessibility

Prefer:

- keyboard-friendly navigation
- readable contrast
- meaningful labels
- accessible forms

---

# Content Guidelines

Tone should be:

Professional

Confident

Trustworthy

Clear

Avoid:

Marketing hype

Buzzwords

Unsupported claims

Long paragraphs

---

# Change Management

Before making changes:

1. Understand the objective.

2. Limit modifications to the requested scope.

3. Preserve existing functionality.

4. Reuse existing styles where practical.

5. Explain significant design decisions.

---

# Version Control

Prefer small logical commits.

Example:

Hotfix: Add Featured Sports Flooring section

Instead of:

Updated website

---

# Preferred Workflow

Business Requirement

↓

ChatGPT

↓

Planning

↓

Codex

↓

Implementation

↓

Human Review

↓

Git Commit

↓

GitHub

↓

Cloudflare Pages

---

# AI Behaviour

When implementing changes:

Do not redesign the entire website.

Do not replace existing components unnecessarily.

Do not introduce new design systems.

Maintain consistency with the existing website.

Think like a senior frontend engineer working on a premium corporate website.

---

# If Requirements Are Ambiguous

Ask questions instead of making assumptions.

When multiple solutions exist:

- Explain alternatives.
- Recommend the best option.
- Wait for approval before implementing major changes.

---

# Project Philosophy

Every line of code should contribute to one or more of the following:

- Better user experience
- Better maintainability
- Better performance
- Better accessibility
- Better lead generation
- Stronger brand perception

If a proposed change does not improve the project, do not implement it.
