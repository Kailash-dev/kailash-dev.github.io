# Development Roadmap

## Phase 0 — Foundation ✅ (Current)

**Goal:** Production-ready project scaffold with no UI pages.

- [x] Migrate from Angular 18 to Next.js 15
- [x] Configure TypeScript (strict), ESLint, Prettier
- [x] Establish folder architecture
- [x] Design system tokens (CSS variables + Tailwind v4)
- [x] Core UI primitives (Button, Card, Input)
- [x] Theme provider (dark/light/system)
- [x] SEO foundation (metadata, sitemap, robots, JSON-LD)
- [x] Content data layer (case studies, services, FAQ)
- [x] Project documentation

## Phase 1 — Design System Completion

**Goal:** Complete reusable component library before page work.

- [ ] Typography scale components (Heading, Text, Label)
- [ ] Container and Section layout primitives
- [ ] Link and navigation components
- [ ] Form components (Textarea, Select, Form field wrappers)
- [ ] Badge, Separator, Accordion (for FAQ)
- [ ] Motion primitives (FadeIn, Stagger) with reduced-motion support
- [ ] Document all tokens in Storybook or internal reference page

## Phase 2 — Layout Shell

**Goal:** Site chrome that appears on every page.

- [ ] Header with navigation and persistent CTA
- [ ] Footer with minimal links and contact
- [ ] Mobile navigation (accessible, no overlay gimmicks)
- [ ] Page layout wrapper with consistent spacing
- [ ] Skip-to-content link

## Phase 3 — Core Pages

**Goal:** Ship conversion-focused pages in priority order.

1. **Home** — Hero, who I help, selected work, process snapshot, CTA
2. **Work** — Case study index
3. **Case Study** — Individual case study template
4. **Process** — Engagement model, communication, expectations
5. **Services** — Outcome-framed service offerings
6. **About** — Story, working style, capabilities
7. **Contact** — Calendly integration, contact form, qualification fields

## Phase 4 — Trust & Conversion

**Goal:** Maximize discovery call bookings.

- [ ] Testimonials section (when real testimonials exist)
- [ ] FAQ page or section
- [ ] OpenGraph image generation
- [ ] Contact form with budget/timeline qualification
- [ ] Analytics integration (privacy-respecting)
- [ ] Performance audit and optimization pass

## Phase 5 — Content & Growth

**Goal:** Inbound authority building.

- [ ] Blog architecture (`/blog`, `/blog/[slug]`)
- [ ] MDX or CMS integration for content
- [ ] Resource downloads (optional lead magnets)
- [ ] Newsletter integration (optional)

## Phase 6 — Polish & Launch

**Goal:** Production deployment.

- [ ] Full Lighthouse audit (target 100/100/100/100)
- [ ] Cross-browser testing
- [ ] Accessibility audit (keyboard, screen reader)
- [ ] Domain and DNS configuration
- [ ] Production environment variables
- [ ] Deploy to Vercel or preferred host

## Out of Scope (For Now)

- Client portal / authentication
- CMS admin panel
- Multi-language i18n
- Pricing calculator
- Live chat widget

## Decision Gates

Before moving to the next phase:

1. All components in current phase are reusable and token-driven
2. No magic values in component styles
3. TypeScript strict mode passes
4. ESLint and Prettier pass
5. Build succeeds with zero warnings
