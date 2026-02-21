# Wedding Website — Architecture Reference

Quick-reference for making changes with minimal context.

---

## Tech stack
- Next.js (App Router)
- Tailwind CSS
- No external UI kits
- **OpenAI** (chatbot)
- **Postgres / Neon** (database)
- **Password gate** (site-wide auth via cookie)

---

## Environment variables

| Variable         | Purpose                          | Used by                    |
|------------------|----------------------------------|----------------------------|
| `DATABASE_URL`   | Neon Postgres connection string  | `lib/db.ts`, API routes    |
| `OPENAI_API_KEY` | OpenAI secret key                | `/api/ask`                 |
| `SITE_PASSWORD`  | Site unlock password             | `/api/unlock`, middleware  |

These can be found in `.env.local`.

---

## File Map

```
src/
├── app/
│   ├── globals.css          ← Tailwind theme tokens (colors, fonts)
│   ├── layout.tsx           ← Root layout (fonts, Navbar, Footer)
│   ├── page.tsx             ← Assembles all sections in order
│   ├── unlock/
│   │   └── page.tsx         ← Password gate UI (form → POST /api/unlock)
│   │
│   └── api/
│       ├── ask/
│       │   └── route.ts     ← Chatbot endpoint (OpenAI + DB logging)
│       └── unlock/
│           └── route.ts    ← Password validation, sets auth cookie
│
├── config/                  ← ✏️ EDIT THESE to change content/nav/colors
│   ├── content.ts           ← All site copy (headings, paragraphs, timeline)
│   ├── navigation.ts        ← Nav links (add/remove/reorder)
│   ├── theme.ts             ← Color palette + spacing constants
│   └── chatbot.ts           ← Chatbot: MODEL, SYSTEM_PROMPT, token limits
│
├── lib/
│   ├── fonts.ts             ← Google Font loading (Cormorant Garamond, Carattere)
│   ├── db.ts                ← Singleton Postgres client (import sql from "@/lib/db")
│   └── migrations/
│       └── 001_chat_logs.sql ← chat_logs table schema
│
├── middleware.ts            ← Password gate: redirects to /unlock if no auth cookie
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
    │   ├── AskJeeves.tsx     ← Chatbot section (POSTs to /api/ask)
    │   ├── FAQ.tsx           ← FAQ accordion
    │   └── SectionStub.tsx   ← Reusable placeholder for future sections
    │
    └── icons/
        └── TimelineIcon.tsx  ← SVG icons for the timeline
```


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
| Ask Jeeves        | `#ask-jeeves`          |
| FAQ               | `#faq`                 |

---

## Password gate

- **Middleware** (`middleware.ts`) blocks all routes except `/unlock`, `/api/unlock`, `/_next/*`, favicon, robots, sitemap.
- Unauthenticated users are redirected to `/unlock?next=<original path>`.
- **Unlock flow**: User submits password → `POST /api/unlock` → validates `SITE_PASSWORD` → sets `site_auth=ok` cookie (30 days) → redirects to `next`.
- **Protected API routes** must check `req.cookies.get("site_auth")?.value === "ok"` (see `/api/ask`).

---

## Chatbot (Ask Jeeves)

- **UI**: `AskJeeves.tsx` — input + submit → `POST /api/ask` with `{ question }`.
- **API**: `/api/ask` — validates question, calls OpenAI, logs to `chat_logs`, returns `{ answer }`.
- **Config**: `config/chatbot.ts` — `MODEL`, `SYSTEM_PROMPT`, `MAX_QUESTION_CHARS`, `MAX_OUTPUT_TOKENS`, `PROMPT_VERSION`.
- **Logging**: Every request (success/fail) is inserted into `chat_logs` via `lib/db.ts`.

---

## Database (Neon Postgres)

- **Client**: `lib/db.ts` — singleton Postgres client. Import: `import sql from "@/lib/db"`.
- **Connection**: Uses `DATABASE_URL`. Throws at startup if missing.
- **Migrations**: SQL files in `lib/migrations/`. Run manually against your Neon project (e.g. via Neon console or `psql`).
- **Example table**: `chat_logs` — `id`, `created_at`, `question`, `answer`, `model`, `prompt_version`, `latency_ms`, `success`, `error_code`, `error_message`.

---

## Connecting new features

### Using the database

1. Add a migration in `lib/migrations/` (e.g. `002_my_table.sql`).
2. Run it against your Neon database.
3. In your API route or server component: `import sql from "@/lib/db"`.
4. Use tagged template literals, e.g.:

   ```ts
   await sql`SELECT * FROM my_table`;
   await sql`INSERT INTO my_table (col) VALUES (${value})`;
   ```

### Using OpenAI

1. In your API route: `import OpenAI from "openai"`.
2. Create client: `const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })`.
3. Call `openai.chat.completions.create()` or other endpoints.
4. Ensure `OPENAI_API_KEY` is set in `.env.local`.

### Protecting an API route

Add this at the top of your handler:

```ts
if (req.cookies.get("site_auth")?.value !== "ok") {
  return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
}
```

### Adding a new public API path

If a route must be reachable without auth (e.g. webhook), add it to `isPublic()` in `middleware.ts`:

```ts
if (pathname === "/api/webhook") return true;
```
