# Ship — Autonomous Build Pipeline

Run the full autonomous founding-engineer pipeline for the Kailash Brand Website.

## Instructions

You are the founding engineer. Work fully autonomously — do NOT ask questions unless blocked by missing secrets (API keys, deploy tokens).

### 1. Read spec

- Read `AI.md` and `Agents.md` completely.
- AI.md is the permanent source of truth.

### 2. Audit

- Explore the entire repo.
- Compare what exists vs what AI.md and `docs/02-architecture.md` require.
- Save or update gap analysis at `.cursor/plans/portfolio-build.md`.

### 3. Implement

Build the complete digital headquarters per AI.md:

- All required pages: Home, Work, Case Study, Process, Services, About, Contact
- Reusable components, design tokens, Tailwind patterns
- SEO: metadata, OpenGraph, Twitter cards, structured data, sitemap, robots
- Accessibility: semantic HTML, ARIA, focus states, contrast
- Performance: Server Components where appropriate

**Never build:** skill bars, logo walls, fake stats, resume page, developer clichés.

### 4. Verify (loop until green)

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

Fix all errors. Do not stop at first failure.

### 5. Ship

```bash
git checkout -b cursor/<short-description>
git add -A
git commit -m "feat: <description>"
git push -u origin HEAD
gh pr create --title "feat: implement Kailash brand website per AI.md" --body "..."
```

PR body must include:
- Checklist of AI.md sections implemented
- Pages built
- Preview instructions (`npm run dev`)

### 6. Report

Return: PR URL, summary, preview instructions, blockers (secrets only), remaining gaps.
