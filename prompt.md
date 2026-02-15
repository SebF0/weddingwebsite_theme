You are building a simple static website by visually copying the attached reference image: website_theme.png.

Goal
- Recreate the design as closely as possible (layout, spacing, typography, colours, button styles).
- Build a clean, responsive version that looks correct on mobile and desktop.

Tech stack
- Next.js (App Router)
- Tailwind CSS
- No external UI kits

Typography (mandatory)
- Use next/font/google.
- Use:
    - "Cormorant Garamond" for all body text, headings, navigation, and buttons.
    - "Parisienne" for script accents (names in hero, decorative headings, signature-style text).
- Configure proper font weights:
    - Cormorant Garamond: 300, 400, 500, 600, 700
    - Parisienne: 400
- Apply fonts via Tailwind theme extension so they are reusable classes (e.g. font-serif-main, font-script).


Process
1) First inspect website_theme.png and describe:
   - Page sections
   - Typography hierarchy
   - Alignment system (centred vs left aligned)
   - Spacing rhythm
2) Then implement the site to match it.
3) Add short comments in code explaining key styling decisions.

Responsive behaviour
- Mobile-first.
- Collapse nav into a simple minimal mobile menu.
- Maintain elegant spacing on smaller screens.

Deliverable
- A working Next.js + Tailwind project.
- Clean, readable, production-quality code.
- Visually as close to website_theme.png as practical.
