# Architecture

## Stack

| Layer      | Technology                             |
| ---------- | -------------------------------------- |
| Framework  | Next.js 15 (App Router)                |
| Language   | TypeScript (strict)                    |
| Styling    | Tailwind CSS v4                        |
| Components | shadcn/ui (new-york style)             |
| Animation  | Framer Motion                          |
| Icons      | Lucide React                           |
| Theming    | next-themes                            |
| Fonts      | Geist Sans, Geist Mono                 |
| Linting    | ESLint (flat config)                   |
| Formatting | Prettier + prettier-plugin-tailwindcss |

## Repository Structure

```
portfolio/
├── docs/                    # Project documentation
├── public/                  # Static assets (images, favicon, og-image)
├── src/
│   ├── app/                 # Next.js routes (thin pages only)
│   │   ├── layout.tsx       # Root layout, metadata, providers
│   │   ├── page.tsx         # Home route
│   │   ├── robots.ts        # Robots.txt generation
│   │   └── sitemap.ts       # Sitemap generation
│   ├── components/
│   │   ├── ui/              # Design system primitives (shadcn)
│   │   ├── layout/          # Header, footer, navigation, shell
│   │   └── common/          # Shared non-UI components
│   ├── features/            # Domain modules (home, work, contact, etc.)
│   ├── hooks/               # Shared React hooks
│   ├── lib/                 # Utilities, animations, SEO helpers
│   ├── constants/           # Navigation, animation, layout constants
│   ├── types/               # Shared TypeScript types
│   ├── styles/              # Global CSS and design tokens
│   ├── providers/           # React context providers
│   ├── config/              # Site configuration and metadata
│   └── data/                # Static content (case studies, services, FAQ)
├── components.json          # shadcn/ui configuration
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Architectural Principles

### 1. Thin Pages, Fat Features

Route files in `src/app/` should be minimal — metadata export + feature component import. Business logic and UI composition live in `src/features/`.

```tsx
// src/app/work/page.tsx (future)
import { WorkPage } from "@/features/work";
export const metadata = { title: "Work" };
export default function Page() {
  return <WorkPage />;
}
```

### 2. Single Design System

All visual values come from design tokens in `src/styles/globals.css`. Components reference tokens via Tailwind utilities. No magic numbers in component files.

### 3. Server Components by Default

Use React Server Components unless the component needs:

- Browser APIs
- Event handlers
- React state or effects
- Framer Motion animations (client boundary)

Mark client components explicitly with `"use client"`.

### 4. Data Layer Separation

Static content lives in `src/data/` as typed TypeScript modules. This keeps content editable without touching components and enables future CMS migration.

### 5. Configuration Centralization

- `src/config/site.ts` — Site metadata, SEO defaults
- `src/constants/` — Navigation, animation timing, layout values
- `src/types/` — Shared interfaces

### 6. Composition Over Duplication

- Use `cn()` for conditional class merging
- Use shadcn `Button` with `asChild` for link-buttons
- Extract repeated patterns into `components/common/` only when used 3+ times

## Feature Module Structure

Each feature in `src/features/` follows this pattern:

```
features/
└── work/
    ├── components/     # Feature-specific components
    ├── work-page.tsx   # Page-level composition
    └── index.ts        # Public exports
```

## Routing Plan

| Route          | Purpose                    |
| -------------- | -------------------------- |
| `/`            | Home — conversion landing  |
| `/work`        | Case study index           |
| `/work/[slug]` | Individual case study      |
| `/process`     | Engagement process         |
| `/services`    | Service offerings          |
| `/about`       | About and working style    |
| `/contact`     | Discovery call booking     |
| `/blog`        | Future — content marketing |
| `/blog/[slug]` | Future — blog posts        |

## SEO Architecture

- **Metadata:** `createMetadata()` helper in `src/config/site.ts`
- **OpenGraph:** Configured per-page via metadata overrides
- **JSON-LD:** Person, WebSite, ProfessionalService schemas in root layout
- **Sitemap:** Auto-generated from static routes + case study slugs
- **Robots:** Allow all, reference sitemap

## Performance Strategy

- Server Components for static content
- `next/image` for all images (AVIF + WebP)
- Font optimization via `geist` package
- Code splitting via dynamic imports for heavy client components
- `poweredByHeader: false` in Next.js config
- Lazy load below-fold animations

## Migration Note

This project was migrated from **Angular 18** to **Next.js 15**. The Angular codebase (components, services, routing) was removed. Case study data was restructured from the Angular `project-data.ts` into the new `src/data/case-studies.ts` format aligned with the brand strategy (outcome-focused, not tech-focused).

## Environment Variables

| Variable               | Required   | Description                                 |
| ---------------------- | ---------- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical site URL for metadata and sitemap |

See `.env.example` for template.
