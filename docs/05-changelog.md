# Changelog

All notable changes to this project are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Next.js 15 foundation with App Router and TypeScript strict mode
- Tailwind CSS v4 with design tokens in `src/styles/globals.css`
- shadcn/ui configuration with Button, Card, and Input primitives
- Framer Motion animation presets with reduced-motion support
- Dark/light/system theme via `next-themes`
- Geist Sans and Geist Mono font integration
- ESLint (flat config) with `eslint-config-prettier`
- Prettier with `prettier-plugin-tailwindcss`
- Site configuration and metadata helpers (`src/config/site.ts`)
- SEO: sitemap, robots, OpenGraph, Twitter Cards, JSON-LD structured data
- Content data layer: case studies, services, FAQ
- Project documentation (`docs/00` through `docs/05`)
- Folder architecture: `components/`, `features/`, `hooks/`, `lib/`, `constants/`, `types/`, `styles/`, `providers/`, `config/`, `data/`

### Changed

- Migrated from Angular 18 to Next.js 15 (full stack replacement)
- Restructured project data from developer portfolio format to case study format
- Updated `.gitignore` for Next.js

### Removed

- Angular 18 application (all components, services, routing, Material UI)
- Angular CLI configuration (`angular.json`, `tsconfig.app.json`, `tsconfig.spec.json`)
- Karma/Jasmine test setup
- Bootstrap Icons dependency
- Skills, resume, and project gallery sections

## [0.0.0] — Pre-migration

### Added

- Angular 18 portfolio with hero, about, skills, projects, resume, contact sections
- Angular Material and Bootstrap Icons
- Mobile-responsive header
