# STDP Development Environment Setup

Version: 1.0
Last Updated: 2026-07-07

---

# Purpose

This document describes how to rebuild the STDP (Savitri Timbers Digital Platform)
development environment from a clean macOS installation.

The objective is to create a lightweight, reproducible and documentation-first
development workstation.

---

# Operating System

Recommended:

- macOS Ventura 13.7.8 or later

Current development machine:

- MacBook Air (13-inch, 2017)
- macOS Ventura 13.7.8
- OpenCore Legacy Patcher (OCLP)

---

# 1. Install Homebrew

Official installer:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Configure Homebrew:

```bash
echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
source ~/.zprofile
```

Verify:

```bash
brew --version
brew doctor
```

---

# 2. Verify Apple Command Line Tools

```bash
xcode-select -p
clang --version
```

---

# 3. Install Node.js

## Standard Policy

STDP uses:

- nvm
- Current Node.js LTS

Do NOT install Node.js using Homebrew.

Reason:

On the primary STDP development machine
(macOS Ventura + OpenCore Legacy Patcher),
Homebrew attempted lengthy source builds and produced
TLS certificate issues.

Using nvm downloads the official Node.js binaries
and provides a reliable, reproducible installation.

Install nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Reload shell:

```bash
source ~/.zshrc
```

Install current LTS:

```bash
nvm install --lts
nvm use --lts
nvm alias default lts
```

Verify:

```bash
node --version
npm --version
npm doctor
```

---

# 4. Install Visual Studio Code

Download the official installer from:

https://code.visualstudio.com/

Install the Shell Command:

Command Palette →

```
Shell Command:
Install 'code' command in PATH
```

Verify:

```bash
code --version
```

---

# 5. Install GitHub CLI

```bash
brew install gh
```

Authenticate:

```bash
gh auth login
```

Verify:

```bash
gh auth status
```

---

# 6. Recommended VS Code Extensions

Required

- GitLens
- Prettier
- EditorConfig
- HTML CSS Support
- Markdown All in One

Optional

- Live Server

GitHub Copilot Chat is built into recent versions of VS Code.

Verify installed extensions:

```bash
code --list-extensions
```

---

# 7. Repository Verification

```bash
git status
git branch --show-current
git tag
git remote -v
```

Expected:

- Branch: main
- Repository clean
- Tags available
- Remote configured

---

# 8. Development Verification

Verify:

- Git
- Homebrew
- Node.js
- npm
- VS Code
- GitHub CLI

Open the project:

```bash
code .
```

Confirm:

- Project loads correctly
- Integrated terminal works
- Git integration active

---

# 9. Deployment Verification

Verify:

- Git push
- Cloudflare Pages deployment
- Production website

---

# Completion Checklist

- [ ] Homebrew installed
- [ ] Apple Command Line Tools verified
- [ ] nvm installed
- [ ] Node.js LTS installed
- [ ] npm verified
- [ ] VS Code installed
- [ ] code command available
- [ ] GitHub CLI authenticated
- [ ] Required extensions installed
- [ ] Repository verified
- [ ] Cloudflare deployment verified

Development Environment Ready.