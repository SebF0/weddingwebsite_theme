This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


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