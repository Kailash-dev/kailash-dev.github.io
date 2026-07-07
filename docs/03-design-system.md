# Design System

## Philosophy

One design system for the entire site. Typography carries the interface. Whitespace is a feature. Motion is subtle and purposeful.

**Reference aesthetic:** Stripe, Linear, Vercel — restrained, high-contrast, content-forward.

## Token Architecture

All tokens live in `src/styles/globals.css` using Tailwind CSS v4 `@theme` and CSS custom properties. Components consume tokens via Tailwind utility classes. Never hardcode colors, spacing, or radii in components.

### Colors

Semantic color tokens with light/dark mode via CSS variables:

| Token              | Usage                     |
| ------------------ | ------------------------- |
| `background`       | Page background           |
| `foreground`       | Primary text              |
| `card`             | Card surfaces             |
| `primary`          | Primary actions, emphasis |
| `secondary`        | Secondary surfaces        |
| `muted`            | Subtle backgrounds        |
| `muted-foreground` | Secondary text, captions  |
| `accent`           | Hover states, highlights  |
| `border`           | Borders and dividers      |
| `input`            | Form input borders        |
| `ring`             | Focus rings               |
| `destructive`      | Error states              |

Color space: **OKLCH** for perceptually uniform light/dark transitions.

### Typography

| Token         | Font       |
| ------------- | ---------- |
| `--font-sans` | Geist Sans |
| `--font-mono` | Geist Mono |

**Scale (Tailwind defaults, applied via utilities):**

| Class                | Usage                      |
| -------------------- | -------------------------- |
| `text-sm`            | Captions, labels, metadata |
| `text-base`          | Body copy                  |
| `text-lg`            | Lead paragraphs            |
| `text-xl`–`text-4xl` | Headings (use sparingly)   |
| `text-5xl`+          | Hero headline only         |

**Rules:**

- Headings use `font-semibold` or `font-medium`, never `font-bold`
- Body text uses `text-pretty` for readability
- Hero headlines use `text-balance`
- Line height: default Tailwind pairings (no custom leading unless necessary)

### Spacing

Use Tailwind spacing scale exclusively. Standard section padding:

```
py-24 md:py-32    (section vertical)
px-6 md:px-8      (section horizontal)
```

Container widths (defined in `src/constants/index.ts`):

| Name    | Class       | Max Width                   |
| ------- | ----------- | --------------------------- |
| Narrow  | `max-w-2xl` | 42rem — prose, forms        |
| Default | `max-w-6xl` | 72rem — main content        |
| Wide    | `max-w-7xl` | 90rem — full-bleed sections |

### Radius

| Token           | Value    | Usage               |
| --------------- | -------- | ------------------- |
| `--radius-sm`   | 0.375rem | Small elements      |
| `--radius-md`   | 0.5rem   | Buttons, inputs     |
| `--radius-lg`   | 0.75rem  | Default             |
| `--radius-xl`   | 1rem     | Cards               |
| `--radius-2xl`  | 1.25rem  | Large cards, modals |
| `--radius-full` | 9999px   | Pills, avatars      |

### Shadows

| Token       | Usage                     |
| ----------- | ------------------------- |
| `shadow-xs` | Buttons, inputs           |
| `shadow-sm` | Cards at rest             |
| `shadow-md` | Elevated cards, dropdowns |
| `shadow-lg` | Modals (rare)             |

Shadows are intentionally subtle. Prefer borders over shadows for elevation.

### Motion

| Token               | Value                         | Usage                 |
| ------------------- | ----------------------------- | --------------------- |
| `--duration-fast`   | 150ms                         | Hover states, toggles |
| `--duration-normal` | 250ms                         | Standard transitions  |
| `--duration-slow`   | 400ms                         | Page-level entrances  |
| `--ease-out-expo`   | cubic-bezier(0.16, 1, 0.3, 1) | Entrances             |
| `--ease-in-out`     | cubic-bezier(0.4, 0, 0.2, 1)  | State changes         |

**Framer Motion presets** in `src/lib/animations.ts`:

- `fadeIn` — opacity only
- `fadeInUp` — opacity + 16px Y translate
- `staggerContainer` — parent for staggered children

**Rules:**

- Always respect `prefers-reduced-motion`
- No animation on page load above the fold (hero text appears instantly)
- Scroll-triggered animations only for below-fold content
- Maximum 400ms duration
- Never animate layout properties (width, height, padding)

### Icons

**Library:** Lucide React

| Rule   | Detail                                                               |
| ------ | -------------------------------------------------------------------- |
| Size   | 16px (`size-4`) inline, 20px (`size-5`) standalone                   |
| Stroke | Default Lucide stroke width                                          |
| Color  | Inherit from parent text color                                       |
| Usage  | Functional only (arrows, external links, form) — no decorative icons |

## Components

### Implemented (Phase 0)

| Component | Location                   | Variants                                                              |
| --------- | -------------------------- | --------------------------------------------------------------------- |
| Button    | `components/ui/button.tsx` | default, secondary, outline, ghost, link                              |
| Card      | `components/ui/card.tsx`   | Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| Input     | `components/ui/input.tsx`  | default                                                               |

### Planned (Phase 1)

- Heading / Text typography components
- Container / Section layout wrappers
- Link (with external indicator)
- Textarea, Label, Form field
- Badge, Separator
- Accordion (FAQ)
- Navigation menu
- Motion primitives (FadeIn, Stagger)

## Component Rules

1. **No magic values** — all styles from tokens
2. **No inline styles** — Tailwind utilities only
3. **`cn()` for merging** — conditional and override classes
4. **`forwardRef`** on all interactive primitives
5. **`asChild` pattern** — Button and Link compose via Radix Slot
6. **Accessible by default** — focus rings, ARIA, semantic HTML

## Dark Mode

Implemented via `next-themes` with `class` strategy:

- `defaultTheme: "system"` — respects OS preference
- `disableTransitionOnChange` — prevents flash during toggle
- Toggle component to be added in layout phase

## Adding shadcn Components

```bash
npx shadcn@latest add [component-name]
```

Configuration in `components.json`. New components install to `src/components/ui/`.

## Do Not

- Create page-specific styled components (use design system + composition)
- Use gradient backgrounds
- Use colored shadows
- Add decorative animations
- Use more than 2 font weights on a single page
- Use technology logos as visual elements
