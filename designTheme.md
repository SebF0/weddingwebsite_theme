# Wedding Website Design Theme

## Overview
An elegant, romantic wedding website with a warm, sophisticated aesthetic. The design uses a cream and olive green color palette inspired by nature, paired with serif and script typography to create a timeless, classic feel.

---

## Color Palette

### Primary Colors
- **Cream** (`#F2EDE8`) — Main background, creates a warm, soft canvas
- **Olive** (`#3C4A3E`) — Primary text and accents, provides strong readability
- **Sage** (`#8A9A7B`) — Soft green accent for overlays and subtle highlights

### Supporting Colors
- **Cream Dark** (`#E8E2DB`) — Slightly darker cream for subtle contrast
- **Olive Light** (`#5C6B52`) — Lighter olive for overlays and secondary backgrounds

### Usage Guidelines
- **Background**: Always use cream as the primary background (`bg-cream`)
- **Text**: Olive for all body text and headings (`text-olive`)
- **Overlays**: Use olive-light or sage with transparency (e.g., `bg-olive-light/80`) over images for readability
- **Opacity**: Frequently use `/60`, `/70`, `/80`, `/90` for subtle, layered effects

---

## Typography

### Font Families
1. **Cormorant Garamond** (`font-serif-main`)
   - Usage: Body text, headings, navigation, buttons
   - Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
   - Character: Elegant serif with classical proportions

2. **Great Vibes** (`font-script`)
   - Usage: Decorative accents, couple names, signatures, ornamental headings
   - Weight: 400
   - Character: Romantic script with flowing curves

### Typography Patterns

**Hero/Display Text:**
- Large uppercase serif (6xl-8xl) with `tracking-wedding` (0.2em letter-spacing)
- Mix serif and script fonts for names (serif for surnames, script for conjunctions)
- Example: `text-6xl uppercase tracking-wedding font-serif-main`

**Section Headings:**
- Medium-large uppercase serif (3xl-4xl) with wide tracking
- Use `tracking-wedding` or `tracking-wedding-wide` (0.35em)
- Example: `text-3xl uppercase tracking-wedding text-olive`

**Script Headings:**
- Large script font (4xl-6xl) for decorative section titles
- Example: `font-script text-4xl text-olive`

**Body Text:**
- Base to large serif (base-lg) with relaxed leading
- Use font-light (300) for softer appearance
- Example: `text-base leading-relaxed font-serif-main`

**Navigation:**
- Small uppercase serif with wide tracking and bold weight
- Example: `text-sm uppercase tracking-wedding-wide font-bold`

---

## Layout & Spacing

### Section Structure
- **Vertical Padding**: Generous spacing between sections
  - Mobile: `py-20` (80px)
  - Desktop: `py-28` to `py-32` (112-128px)

- **Container Width**: `max-w-5xl` for most content sections, centered with `mx-auto`

- **Horizontal Padding**: 
  - Mobile: `px-6` (24px)
  - Tablet: `px-10` (40px)
  - Desktop: `px-16` (64px)

### Responsive Breakpoints
- Mobile-first approach
- Stack vertically on mobile, expand to multi-column on tablet/desktop
- Use `md:` (768px) and `lg:` (1024px) breakpoints consistently

---

## Visual Elements

### Images
- **Framed Photos**: Double border treatment
  - Outer: `border-2 border-olive/70` with padding
  - Inner: `border border-white/60` with padding
  - Creates elegant, photo-frame effect

- **Background Images**: Always with overlays
  - Use `absolute inset-0` positioning
  - Add colored overlay (`bg-sage/60`, `bg-olive-light/80`)
  - Optional: `backdrop-blur-[2px]` for soft blur effect

### Icons & Graphics
- Simple SVG icons in circular frames
- Border: `border border-olive/30`
- Icon color: `text-olive/70`
- Consistent sizing: `h-14 w-14` on mobile, `h-16 w-16` on desktop

### Overlays & Layers
- Use dark overlays (`bg-olive-light/80`) over busy background images
- Add semi-transparent boxes for content readability (`bg-olive/60`)
- Layer with `relative` parent and `absolute inset-0` children

---

## Component Patterns

### Hero Sections
- Full viewport height (`min-h-screen`)
- Background image with overlay
- Centered content with `flex items-center justify-center`
- Large display typography mixing serif and script

### Content Sections
- Alternating cream backgrounds with darker overlays
- Centered content with max-width containers
- Consistent vertical rhythm (py-20, py-28, py-32)

### Navigation
- Fixed position (`fixed top-0 z-50`)
- Transparent background with subtle blur (`backdrop-blur-[2px]`)
- Horizontal links on desktop, hamburger overlay on mobile
- Uppercase serif with wide tracking

### Text Blocks
- Centered on mobile, can be left-aligned on desktop
- Use `text-center md:text-left` pattern
- Nested content has narrower max-width than container

---

## Design Principles

1. **Elegance Through Simplicity**: Clean layouts with generous whitespace
2. **Hierarchy Through Typography**: Use size, weight, and case to create clear hierarchy
3. **Soft Contrasts**: Avoid harsh black; use olive and opacity for gentle contrast
4. **Layered Depth**: Build depth with overlays, borders, and transparency
5. **Consistent Rhythm**: Maintain consistent spacing and sizing patterns
6. **Mobile-First Responsive**: Design scales gracefully from small to large screens
7. **Readability First**: Always ensure text is readable over images with overlays

---

## Utility Classes Reference

### Custom Classes (defined in globals.css)
- `tracking-wedding` — 0.2em letter-spacing for elegant spread
- `tracking-wedding-wide` — 0.35em letter-spacing for very wide spacing

### Common Tailwind Patterns
- **Uppercase with tracking**: `uppercase tracking-wedding` or `tracking-wedding-wide`
- **Light serif text**: `font-serif-main font-light`
- **Script accent**: `font-script text-4xl`
- **Olive text with opacity**: `text-olive/70`, `text-olive/80`, `text-olive/90`
- **Cream backgrounds**: `bg-cream`, `bg-cream-dark`
- **Smooth transitions**: `transition-colors` or `transition-opacity`

---

## When Creating New Components

1. **Start with section wrapper**: Use semantic HTML (`<section id="...">`)
2. **Add consistent padding**: `py-20 md:py-28 lg:py-32` for vertical spacing
3. **Use container pattern**: `mx-auto max-w-5xl px-6 md:px-10`
4. **Choose typography style**: Match existing patterns (display, heading, body)
5. **Apply color scheme**: Cream backgrounds, olive text, transparent overlays
6. **Ensure responsive**: Mobile-first, stack vertically, expand on larger screens
7. **Add hover states**: Subtle transitions on interactive elements
8. **Test readability**: If using images, add appropriate overlays

---

## Content Guidelines

- All text content lives in `src/config/content.ts`
- Navigation links defined in `src/config/navigation.ts`
- Import and destructure content in components: `const { heading } = SITE_CONTENT.sectionName`
- Keep components focused on structure and styling, not hardcoded content
