# UI Context

This document is the single source of truth for the application's visual language.

Every UI component must follow these rules before introducing new styles.

---

# Theme

**Dark only.**

There is no light mode.

The interface follows a modern technical workspace aesthetic with:

- Near-black backgrounds
- Layered surfaces
- Soft borders
- Cyan brand accents
- Purple AI accents
- High readability
- Minimal visual noise

All colors are defined as CSS variables in `globals.css` and exposed through Tailwind theme tokens.

**Never use hardcoded hex colors or Tailwind colors like `zinc-*`.**

---

# Color System

## Backgrounds

| Role | CSS Variable | Value |
|-------|-------------|--------|
| Page background | `--bg-base` | `#080809` |
| Surface | `--bg-surface` | `#111114` |
| Elevated surface | `--bg-elevated` | `#18181c` |
| Subtle surface | `--bg-subtle` | `#1e1e23` |

## Borders

| Role | CSS Variable | Value |
|-------|-------------|--------|
| Default border | `--border-default` | `#2a2a30` |
| Subtle border | `--border-subtle` | `#3a3a42` |

## Text

| Role | CSS Variable | Value |
|-------|-------------|--------|
| Primary | `--text-primary` | `#f0f0f4` |
| Secondary | `--text-secondary` | `#c0c0cc` |
| Muted | `--text-muted` | `#808090` |
| Faint | `--text-faint` | `#505060` |

## Brand Colors

| Role | CSS Variable | Value |
|-------|-------------|--------|
| Brand accent | `--accent-primary` | `#00c8d4` |
| Brand dim | `--accent-primary-dim` | `rgba(0,200,212,.12)` |
| AI accent | `--accent-ai` | `#6457f9` |
| AI text | `--accent-ai-text` | `#8b82ff` |

## Status Colors

| Role | CSS Variable | Value |
|-------|-------------|--------|
| Error | `--state-error` | `#ff4d4f` |
| Success | `--state-success` | `#34d399` |
| Warning | `--state-warning` | `#fbbf24` |

---

# Tailwind Token Mapping

Use semantic utility classes instead of raw colors.

| Purpose | Utility |
|---------|---------|
| Page | `bg-base` |
| Card | `bg-surface` |
| Elevated card | `bg-elevated` |
| Subtle area | `bg-subtle` |
| Primary text | `text-copy-primary` |
| Secondary text | `text-copy-secondary` |
| Muted text | `text-copy-muted` |
| Border | `border-surface-border` |
| Brand text | `text-brand` |
| Accent background | `bg-accent-dim` |

---

# Typography

## Fonts

| Role | Font | CSS Variable |
|------|------|--------------|
| UI | Geist Sans | `--font-geist-sans` |
| Code | Geist Mono | `--font-geist-mono` |

## Rules

- Load fonts through `next/font/google`.
- Apply CSS variables on `<html>`.
- Body uses **Geist Sans**.
- Code blocks use **Geist Mono**.
- Keep antialiasing enabled.

## Type Scale

| Element | Size | Weight |
|----------|------|---------|
| H1 | 40px | 700 |
| H2 | 32px | 700 |
| H3 | 24px | 600 |
| H4 | 20px | 600 |
| Body | 16px | 400 |
| Small | 14px | 400 |
| Caption | 12px | 400 |

---

# Border Radius

Radius increases with surface depth.

| Context | Class |
|---------|--------|
| Inline UI | `rounded-xl` |
| Cards | `rounded-2xl` |
| Modals | `rounded-3xl` |
| Full pill | `rounded-full` |

---

# Shadows

Use soft layered shadows.

| Surface | Shadow |
|----------|--------|
| Card | subtle |
| Elevated | medium |
| Modal | strong |
| Floating button | medium |

Avoid harsh shadows.

---

# Spacing System

Use an 8px spacing grid.

| Token | Value |
|-------|--------|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 6 | 24px |
| 8 | 32px |
| 12 | 48px |
| 16 | 64px |

---

# Component Library

Use:

- shadcn/ui
- Tailwind CSS
- Lucide React icons

Components live inside:

```
components/ui/
```

Always generate components through the shadcn CLI instead of rewriting them.

---

# Icons

Library:

**Lucide React**

Rules:

| Context | Size |
|---------|------|
| Inline | `h-4 w-4` |
| Buttons | `h-5 w-5` |
| Navigation | `h-5 w-5` |
| Hero | `h-6 w-6` |

Only stroke icons.

---

# Layout Patterns

## App Layout

```
Top Navbar
-------------------------
Left Sidebar | Main | Right Panel
```

### Sidebar

- Fixed width
- Vertical navigation
- Border separator

### Main Content

- Flexible width
- Page padding
- Card-based sections

### Right Panel

- Contextual actions
- Filters
- AI assistant

### Navbar

- Fixed top
- Bottom border
- Search
- Notifications
- User profile

---

# Cards

Cards use:

- `bg-surface`
- `rounded-2xl`
- `border-surface-border`

Padding:

- 16px
- 24px

Hover:

- Slight elevation
- Border brightens slightly

---

# Buttons

## Primary

- Cyan background
- Dark text
- Rounded XL

## Secondary

- Surface background
- Border
- Light text

## Ghost

- Transparent
- Hover surface

## Destructive

- Error red

---

# Forms

Inputs use:

- Surface background
- Border
- Rounded XL
- Focus ring uses brand cyan.

Disabled inputs use muted colors.

---

# Tables

Inventory tables should include:

- Sticky headers
- Zebra hover
- Muted borders
- Right-aligned numeric values

---

# Canvas Colors

The application includes colored workflow nodes.

Defined as `NODE_COLORS`.

| Fill | Text | Character |
|------|------|-----------|
| `#1F1F1F` | `#EDEDED` | Neutral |
| `#10233D` | `#52A8FF` | Blue |
| `#2E1938` | `#BF7AF0` | Purple |
| `#331B00` | `#FF990A` | Orange |
| `#3C1618` | `#FF6166` | Red |
| `#3A1726` | `#F75F8F` | Pink |
| `#0F2E18` | `#62C073` | Green |
| `#062822` | `#0AC7B4` | Teal |

Default node:

- Fill: `#1F1F1F`
- Text: `#EDEDED`

---

# Accessibility

Minimum contrast:

- Text: WCAG AA
- Interactive elements must have visible focus states.
- Hover must never be the only indicator.
- Error states require both color and icon.

---

# Motion

Animations should feel quick and subtle.

| Interaction | Duration |
|-------------|----------|
| Hover | 150ms |
| Button | 150ms |
| Drawer | 250ms |
| Modal | 250ms |
| Toast | 300ms |

Use ease-out curves.

Avoid excessive animations.