# STDP Development Environment

Version: 1.0
Last Updated: 2026-07-07

---

# Host Machine

Model

MacBook Air (13-inch, 2017)

Architecture

Intel x64

Storage

512 GB SSD (upgraded)

Operating System

macOS Ventura 13.7.8

Boot Method

OpenCore Legacy Patcher (OCLP)

---

# Development Shell

Shell

zsh

Prompt

Custom lightweight prompt

Features

- Current directory
- Git branch
- Clean/Dirty indicator
- Command duration
- No external prompt frameworks

---

# Package Manager

Homebrew

Version

6.0.7

Installation

/usr/local

Purpose

System package management

---

# Developer Tools

Git

Apple Git 2.39.2

Python

Python 3.9.6

Apple Command Line Tools

Installed

Compiler

Apple Clang 14.0.3

---

# JavaScript Environment

Runtime Manager

nvm 0.40.3

Node.js

24.18.0 (LTS)

npm

11.16.0

Installation Policy

Node.js is managed exclusively through nvm.

Homebrew is not used to install Node.js on this machine.

---

# Editor

Visual Studio Code

Version

1.127.0

Command Line

code

Status

Installed and verified

---

# VS Code Extensions

Installed

- GitLens
- HTML CSS Support
- EditorConfig
- Prettier
- Markdown All in One
- Live Server

Built-in

- GitHub Copilot Chat

---

# GitHub

GitHub CLI

Installed

Authentication

HTTPS

Account

quantum-satya

Status

Authenticated

---

# STDP Repository

Location

~/Projects/savitri-timbers

Default Branch

main

Remote

origin

Deployment

Cloudflare Pages

---

# Design Principles

The STDP development environment follows these principles:

- Lightweight
- Fast startup
- Minimal dependencies
- Documentation-first
- Reproducible
- Git-centric
- Cloud-native deployment

---

# Known Platform Notes

This machine runs macOS Ventura through
OpenCore Legacy Patcher.

Homebrew may compile certain packages from source
because the platform is outside Homebrew's primary
support matrix.

During environment recovery, Homebrew attempted
to build Node.js from source, resulting in an
extremely long installation and TLS issues.

The project standard is therefore:

- Homebrew for system packages
- nvm for Node.js

This configuration has been verified and is the
recommended environment for STDP development.