# Portfolio — Product Engineering Partner

Premium client-acquisition website for an international software engineering consultancy.

## Stack

- **Next.js 15** — App Router, Server Components
- **TypeScript** — Strict mode
- **Tailwind CSS v4** — CSS-first design tokens
- **shadcn/ui** — Component primitives
- **Framer Motion** — Subtle animations
- **Lucide** — Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Format
npm run format
```

Open [http://localhost:3000](http://localhost:3000).

## Project Documentation

| Document                                              | Description                           |
| ----------------------------------------------------- | ------------------------------------- |
| [Project Vision](docs/00-project-vision.md)           | Purpose, positioning, success metrics |
| [Development Roadmap](docs/01-development-roadmap.md) | Phased implementation plan            |
| [Architecture](docs/02-architecture.md)               | Stack, folder structure, patterns     |
| [Design System](docs/03-design-system.md)             | Tokens, components, rules             |
| [Decisions](docs/04-decisions.md)                     | Architecture decision records         |
| [Changelog](docs/05-changelog.md)                     | Version history                       |

## Environment Variables

Copy `.env.example` to `.env.local` and set values:

```bash
cp .env.example .env.local
```

## Scripts

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Development server (Turbopack) |
| `npm run build`        | Production build               |
| `npm run start`        | Production server              |
| `npm run lint`         | ESLint check                   |
| `npm run lint:fix`     | ESLint auto-fix                |
| `npm run format`       | Prettier format                |
| `npm run format:check` | Prettier check                 |
| `npm run typecheck`    | TypeScript check               |

## Architecture

```
src/
├── app/          # Routes (thin pages)
├── components/   # ui/, layout/, common/
├── features/     # Domain modules
├── data/         # Static content
├── config/       # Site configuration
├── constants/    # Navigation, animation, layout
├── hooks/        # Shared hooks
├── lib/          # Utilities, SEO, animations
├── providers/    # Theme provider
├── styles/       # Global CSS and tokens
└── types/        # TypeScript interfaces
```

## Deployment

Optimized for [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL` in production environment.

## License

Private — All rights reserved.
