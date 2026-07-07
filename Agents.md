# Kailash Brand Website

## Source of truth

- AI.md is the permanent spec. Never contradict it.
- If anything is unclear, infer from AI.md — do not ask the user.

## Commands

- install: npm install
- dev: npm run dev
- build: npm run build
- lint: npm run lint

## Autonomous workflow (mandatory)

1. Read AI.md fully
2. Audit repo vs AI.md — list gaps
3. Implement everything missing (pages, sections, SEO, a11y)
4. Run `npm run build` — fix until it passes
5. Run `npm run lint` — fix until clean
6. Commit on a new branch: `cursor/<short-description>`
7. Push and open PR with `gh pr create`
8. Do not stop at skeletons or placeholders

## Git

- Never commit to main directly
- Conventional commits: feat:, fix:, chore:
- PR body must reference which AI.md sections were implemented

## Quality gates

- TypeScript strict
- No lorem ipsum, no fake stats, no skill bars (see AI.md "What NOT To Build")
- Lighthouse targets per AI.md
