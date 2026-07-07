# Architecture Decision Records

## ADR-001: Migrate from Angular 18 to Next.js 15

**Date:** 2026-03-23  
**Status:** Accepted

### Context

The repository contained an Angular 18 portfolio application with typical developer-portfolio patterns (skills meters, project gallery, resume section). The brand strategy requires a premium client-acquisition website optimized for SEO, performance, and conversion.

### Decision

Replace Angular 18 entirely with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui.

### Rationale

- **SEO:** Next.js App Router provides server-rendered metadata, sitemap, robots, and JSON-LD out of the box
- **Performance:** React Server Components, automatic code splitting, and image optimization align with Lighthouse 100 targets
- **Ecosystem:** shadcn/ui, Framer Motion, and Lucide integrate natively with React
- **Brand alignment:** The reference aesthetic (Stripe, Linear, Vercel) is overwhelmingly React/Next.js
- **Maintainability:** Single-person consultancy benefits from a simpler, modern stack with strong community support

### Consequences

- All Angular code removed (not deprecated — clean break)
- Case study data migrated and restructured from `project-data.ts`
- Team must learn Next.js App Router patterns if unfamiliar

---

## ADR-002: Tailwind CSS v4 with CSS-First Configuration

**Date:** 2026-03-23  
**Status:** Accepted

### Context

Tailwind CSS v4 uses `@import "tailwindcss"` and `@theme` directives instead of `tailwind.config.js`.

### Decision

Use Tailwind v4 with all design tokens defined in `src/styles/globals.css`.

### Rationale

- Single file for all visual tokens (colors, radius, shadows, motion, fonts)
- No separate config file to maintain
- Native CSS custom properties for theme switching
- Aligns with shadcn/ui v4 support

---

## ADR-003: Feature-Based Architecture

**Date:** 2026-03-23  
**Status:** Accepted

### Context

Need a scalable folder structure that supports multiple pages without coupling.

### Decision

Thin route files in `src/app/`, domain logic in `src/features/`, shared primitives in `src/components/`.

### Rationale

- Pages are routing concerns only
- Features can be developed and tested independently
- Shared UI components remain generic and reusable
- Mirrors production SaaS application patterns

---

## ADR-004: Static Data Layer (No CMS Initially)

**Date:** 2026-03-23  
**Status:** Accepted

### Context

Content includes case studies, services, FAQ, and navigation. CMS adds complexity for a single-operator consultancy.

### Decision

Store content as typed TypeScript modules in `src/data/`.

### Rationale

- Type safety for all content
- Version-controlled content changes
- Zero infrastructure cost
- Easy migration path to MDX or headless CMS later
- Content edits require deploy — acceptable for low-frequency updates

### Future

When blog launches (Phase 5), evaluate MDX files in-repo before adopting a headless CMS.

---

## ADR-005: Geist Font Family

**Date:** 2026-03-23  
**Status:** Accepted

### Context

Typography is the primary visual element. Font choice sets the premium tone.

### Decision

Use Geist Sans (body) and Geist Mono (code) via the `geist` npm package.

### Rationale

- Used by Vercel — aligns with reference aesthetic
- Optimized for screen readability
- Next.js font optimization built-in
- Clean, modern, timeless — not trendy

### Alternatives Considered

- Inter (Google Fonts) — safe but generic
- Custom font — unnecessary complexity for launch

---

## ADR-006: No Pages Until Foundation Complete

**Date:** 2026-03-23  
**Status:** Accepted

### Context

Temptation to start building homepage immediately.

### Decision

Complete design system, architecture, documentation, and tooling before any page UI.

### Rationale

- Prevents one-off styles that bypass the design system
- Designer and developer can work from documented tokens
- Avoids rework when component library evolves
- Enforces production-grade discipline

---

## ADR-007: Case Studies Over Project Gallery

**Date:** 2026-03-23  
**Status:** Accepted

### Context

Angular portfolio had a projects page with tech stacks and screenshots. Brand strategy calls for outcome-focused case studies.

### Decision

Restructure project data into case studies with: slug, category, summary, highlights, description, capabilities, featured flag. Remove githubUrl/liveDemoUrl from primary data model.

### Rationale

- Founders evaluate stories, not tech stacks
- "Capabilities" replaces "techStack" in copy
- Featured flag enables curated homepage selection
- Slug-based routing supports SEO (`/work/[slug]`)

---

## ADR-008: Pricing Not on Homepage

**Date:** 2026-03-23  
**Status:** Accepted

### Context

Brand strategy recommends addressing pricing in FAQ, not homepage.

### Decision

No pricing page or homepage pricing section at launch. FAQ will address engagement models and ranges.

### Rationale

- Premium positioning requires trust before price discussion
- FAQ provides transparency without anchoring visitors on cost
- Contact form budget field qualifies leads without public rate card

---

## Open Decisions

| Decision             | Options                                 | Target Phase |
| -------------------- | --------------------------------------- | ------------ |
| Contact form backend | Formspree, Resend, custom API route     | Phase 4      |
| Calendly vs Cal.com  | Evaluate privacy and branding           | Phase 3      |
| Analytics            | Plausible, Vercel Analytics, none       | Phase 4      |
| Blog content format  | MDX in-repo, Contentlayer, headless CMS | Phase 5      |
| OG image generation  | Static asset vs `@vercel/og`            | Phase 4      |
