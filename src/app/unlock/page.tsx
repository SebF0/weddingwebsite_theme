/**
 * /unlock page
 * Password gate UI. Submits to the POST /api/unlock route handler.
 *
 * Query params:
 *   next  – path to return to after unlock
 *   error – "1" when the previous attempt was wrong
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enter Password",
};

interface PageProps {
  searchParams: Promise<{ next?: string; error?: string }>;
}

export default async function UnlockPage({ searchParams }: PageProps) {
  const { next = "/", error } = await searchParams;
  const hasError = error === "1";

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="font-script text-5xl text-olive mb-2">
          Louise &amp; Sebastian
        </h1>
        <p className="font-serif-main tracking-wedding text-olive-light text-xs uppercase mb-10">
          Enter password to continue
        </p>

        <form method="POST" action="/api/unlock" className="flex flex-col gap-4">
          <input type="hidden" name="next" value={next} />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            autoFocus
            className="
              w-full px-5 py-4 rounded-none border border-sage
              bg-cream text-olive font-serif-main text-base
              placeholder-sage/60 outline-none
              focus:border-olive transition-colors
            "
          />

          {hasError && (
            <p className="text-sm text-red-700 tracking-wide">
              Incorrect password.
            </p>
          )}

          <button
            type="submit"
            className="
              w-full py-4 bg-olive text-cream
              font-serif-main tracking-wedding text-sm uppercase
              hover:bg-olive-light transition-colors
            "
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
