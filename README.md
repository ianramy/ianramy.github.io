# Ian Ramy | Creative Engineering & Systems Architecture

> Architecting Resilience. A hyper-premium, high-performance portfolio built for the modern web.

This repository contains the source code for my personal portfolio, built with Next.js 16, React, and Tailwind CSS v4. It features a "Monolithic Stack" architecture—utilizing heavy, full-viewport sticky stacking contexts, hardware-accelerated Lerp motion, and mathematical color inversion techniques inspired by top-tier Awwwards/FWA experiences.

## Architecture & Tech Stack

*   **Framework:** Next.js 16 (App Router, Turbopack)
*   **Styling:** Tailwind CSS v4 (Modular CSS variables, strict Obsidian dark/light theming)
*   **Motion Engine:** Framer Motion (GPU-accelerated transforms and masking)
*   **Scroll Physics:** Lenis (Momentum-based smooth scrolling loop)
*   **PWA Engine:** Serwist (Offline caching, manifest generation, installability)
*   **Typography:** Clash Display (Grotesk) & Geist Mono / JetBrains Mono

## Performance & Anti-Slop Constraints

This project adheres strictly to rigorous engineering and design constraints:
*   **Zero Layout Thrashing:** All animations target `transform` and `opacity` exclusively.
*   **WCAG AA Compliant:** High-contrast masking, pure black/white theming (`mix-blend-difference`), and comprehensive ARIA labeling.
*   **No Generic UI Tropes:** Eliminates nested card fatigue, default `ease-in-out` curves, and glowing purple cyberpunk tropes in favor of strict, data-dense typographic grids.

## Local Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server (with Turbopack):**
   ```bash
   pnpm dev
   ```

3. **Build for production:**
   ```bash
   pnpm build
   pnpm start
   ```

## Modular File Structure

The project separates layout logic from styling.

- `src/app/` - Next.js App Router, global layout, PWA Service Worker.
- `src/components/layout/` - Global shell (Navbar, Footer).
- `src/components/motion/` - Physics engines (Lenis wrapper).
- `src/components/sections/` - Core architectural views (Hero, About, Skills, WorkReel).
- `src/data/` - Static data arrays and ecosystem content.

```bash
  ianramy.github.io
    ├──  README.md
    ├──  biome.json
    ├──  next-env.d.ts
    ├──  next.config.ts
    ├──  package.json
    ├──  pnpm-lock.yaml
    ├──  pnpm-workspace.yaml
    ├──  postcss.config.mjs
    ├──  public/
    ├──  src/
    │   ├──  app/
    │   │   ├──  layout.tsx
    │   │   ├──  manifest.ts
    │   │   ├──  page.tsx
    │   │   ├──  privacy/
    │   │   ├──  robots.ts
    │   │   ├──  sitemap.ts
    │   │   ├──  sw.ts
    │   │   └──  terms/
    │   ├──  assets/
    │   │   ├──  icons/
    │   │   └──  index.ts
    │   ├──  components/
    │   │   ├──  index.ts
    │   │   ├──  layout/
    │   │   ├──  motion/
    │   │   └──  sections/
    │   ├──  data/
    │   ├──  hooks/
    │   ├──  styles/
    │   │   └──  global.css
    │   └──  utils/
    ├──  tailwind.config.ts
    └──  tsconfig.json
```
