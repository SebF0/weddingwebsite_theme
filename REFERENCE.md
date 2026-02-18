# Wedding Website — Architecture Reference

Quick-reference for making changes with minimal context.

---

## File Map

```
src/
├── app/
│   ├── globals.css          ← Tailwind theme tokens (colors, fonts)
│   ├── layout.tsx           ← Root layout (fonts, Navbar, Footer)
│   └── page.tsx             ← Assembles all sections in order
│
├── config/                  ← ✏️ EDIT THESE to change content/nav/colors
│   ├── content.ts           ← All site copy (headings, paragraphs, timeline)
│   ├── navigation.ts        ← Nav links (add/remove/reorder)
│   └── theme.ts             ← Color palette + spacing constants
│
├── lib/
│   └── fonts.ts             ← Google Font loading (Cormorant Garamond, Carattere)
│
└── components/
    ├── layout/
    │   ├── Navbar.tsx        ← Sticky nav (reads from navigation.ts)
    │   └── Footer.tsx        ← Simple footer
    │
    ├── sections/             ← One file per page section
    │   ├── Hero.tsx          ← Full-viewport hero with names
    │   ├── DateVenue.tsx     ← Photo frame + date/venue text
    │   ├── OurSpecialDay.tsx ← Green overlay message section
    │   ├── TheDay.tsx        ← Timeline with icons
    │   ├── TheWeekend.tsx    ← Part Deux timeline
    │   ├── GettingToEvents.tsx ← Travel / getting there
    │   ├── WhereToStay.tsx   ← Accommodation
    │   ├── RSVP.tsx          ← RSVP form section
    │   ├── ExploreRegion.tsx ← Explore the region
    │   ├── FAQ.tsx           ← FAQ accordion
    │   └── SectionStub.tsx   ← Reusable placeholder for future sections
    │
    └── icons/
        └── TimelineIcon.tsx  ← SVG icons for the timeline
```

---

## How To…

### Change text/copy
Edit **`src/config/content.ts`** — every section reads its copy from there.

### Change colors
1. Edit CSS variables in **`src/app/globals.css`** inside `@theme inline { }`.
2. Optionally update the typed constants in **`src/config/theme.ts`**.

### Change fonts
Edit **`src/lib/fonts.ts`** — update weights/families, then update the CSS variable names in `globals.css` if the `--font-*` variable names change.

### Add a new section
1. Create `src/components/sections/YourSection.tsx`.
2. Add its copy to `src/config/content.ts` under a new key.
3. Import and place it in `src/app/page.tsx`.
4. Optionally add a nav link in `src/config/navigation.ts`.

### Replace image placeholders
Search for comments containing "Replace" or "Placeholder" in the section files. Swap the placeholder `<div>` with Next.js `<Image>` components.

### Add a nav link
Add an entry to the `NAV_ITEMS` array in **`src/config/navigation.ts`**. The `href` must match the section's `id` attribute (e.g., `#rsvp`).

---

## Design Tokens (Tailwind Classes)

| Token             | Tailwind Class          | Value     |
|-------------------|-------------------------|-----------|
| Page background   | `bg-cream`              | `#F2EDE8` |
| Darker cream      | `bg-cream-dark`         | `#E8E2DB` |
| Primary text      | `text-olive`            | `#3C4A3E` |
| Green overlay     | `bg-olive-light`        | `#5C6B52` |
| Sage accent       | `text-sage`             | `#8A9A7B` |
| Serif font        | `font-serif-main`       | Cormorant Garamond |
| Script font       | `font-script`           | Carattere   |
| Letter spacing    | `tracking-wedding`      | `0.2em`   |
| Wide spacing      | `tracking-wedding-wide` | `0.35em`  |

---

## Section IDs (for anchors)

| Section           | ID                     |
|-------------------|------------------------|
| Hero              | `#hero`                |
| Date & Venue      | `#date-venue`          |
| Our Special Day   | `#our-special-day`     |
| The Day           | `#the-day`             |
| The Weekend       | `#the-weekend`         |
| Getting to Events | `#getting-to-events`   |
| Where to Stay     | `#where-to-stay`       |
| RSVP              | `#rsvp`                |
| Explore Region    | `#explore-region`      |
| FAQ               | `#faq`                 |
