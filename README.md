# soroban-shield-docs

> Docusaurus documentation site for all Soroban Shield modules, guides, and API references.

[![Stellar Wave](https://img.shields.io/badge/Stellar%20Wave-Wave%205-blue?style=flat-square)](https://www.drips.network/wave/stellar)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-green?style=flat-square)](https://docusaurus.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-green?style=flat-square)](.github/workflows/ci.yml)

---

## Overview

`soroban-shield-docs` is the documentation site for the Soroban Shield library. It is built with [Docusaurus](https://docusaurus.io/) and covers every contract module, security rationale, migration guides, and the full CLI reference.

The site is deployed automatically on every merge to `main` via GitHub Pages.

---

## File Structure

```
soroban-shield-docs/
│
├── docusaurus.config.ts               # Main Docusaurus configuration
├── sidebars.ts                        # Sidebar navigation structure
├── package.json
├── tsconfig.json
├── README.md                          # This file
├── CONTRIBUTING.md
├── LICENSE
├── CODEOWNERS
├── .gitignore
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                     # Build + broken link check on PRs
│   │   └── deploy.yml                # Deploy to GitHub Pages on main merge
│   └── ISSUE_TEMPLATE/
│       ├── docs_improvement.md
│       └── stellar_wave_task.md
│
├── docs/
│   ├── intro.md                       # Getting started overview
│   │
│   ├── modules/                       # One page per contract module
│   │   ├── ownable.md
│   │   ├── access-control.md
│   │   ├── pausable.md
│   │   ├── reentrancy-guard.md
│   │   ├── rate-limiter.md
│   │   ├── multi-sig.md
│   │   └── upgradeable.md
│   │
│   ├── guides/
│   │   ├── composing-modules.md       # How to combine Ownable + Pausable, etc.
│   │   ├── testing-with-shield.md     # Using soroban-shield-tests
│   │   ├── deploying.md               # Using soroban-shield-cli to deploy
│   │   └── contributing.md            # How to contribute to Soroban Shield
│   │
│   ├── security/
│   │   ├── overview.md                # Security philosophy and design principles
│   │   ├── audit-rules.md             # All audit rules in soroban-shield-cli
│   │   └── disclosure.md              # Responsible disclosure policy
│   │
│   └── migration/
│       ├── overview.md                # How versioning and migrations work
│       └── v0-to-v1.md               # Migration guide (placeholder)
│
├── src/
│   └── components/
│       ├── ModuleCard/
│       │   ├── index.tsx              # Module overview card component
│       │   └── styles.module.css
│       ├── CodeBlock/
│       │   └── index.tsx              # Enhanced code block with copy + Soroban highlighting
│       └── WaveBanner/
│           ├── index.tsx              # Stellar Wave participation banner
│           └── styles.module.css
│
└── static/
    ├── img/
    │   ├── shield-logo.svg
    │   ├── architecture-diagram.png
    │   └── og-image.png               # Open Graph share image
    └── CNAME                          # Custom domain (if applicable)
```

---

## Local Development

### Prerequisites

```bash
node --version   # 20+
npm --version    # 10+
```

### Setup and Run

```bash
git clone https://github.com/soroban-shield/soroban-shield-docs
cd soroban-shield-docs
npm install
npm run start
```

The site will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Output is in `build/`. To serve locally:

```bash
npm run serve
```

### Check for Broken Links

```bash
npm run build  # Docusaurus checks links during build
```

---

## Writing Documentation

### Adding a New Module Page

1. Create a new file in `docs/modules/your-module.md`
2. Add front matter:

```md
---
title: YourModule
description: One-sentence description for search indexing
sidebar_position: 8
---
```

3. Follow the standard structure used in existing module docs:
   - Overview
   - When to use
   - Functions reference table
   - Code example
   - Security considerations
   - Events emitted

4. Add the page to `sidebars.ts`

### Adding a Guide

Create a file in `docs/guides/` following the same front matter pattern. Guides should be task-oriented: start with what the reader will achieve, not what the technology does.

---

## Stellar Wave — Open Issues

Documentation improvements are some of the most contributor-friendly Wave issues. If you are new to open source, this is a great place to start.

Browse: [github.com/soroban-shield/soroban-shield-docs/issues](https://github.com/soroban-shield/soroban-shield-docs/issues?q=label%3A%22Stellar+Wave%22)

**Points:** Trivial = 100 pts | Medium = 150 pts | High = 200 pts

Full rules: [docs.drips.network/wave/terms-and-rules](https://docs.drips.network/wave/terms-and-rules)

---

## License

MIT — see [LICENSE](LICENSE)
