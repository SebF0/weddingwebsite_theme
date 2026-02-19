/**
 * Site-wide password gate middleware.
 *
 * Allows through:
 *   - /unlock  (GET + POST)
 *   - /_next/* (static assets, HMR)
 *   - /favicon.ico, /robots.txt, /sitemap.xml
 *
 * Everything else requires the "site_auth=ok" cookie.
 * Unauthorised requests are redirected to /unlock?next=<original path>.
 */

import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/favicon.ico", "/robots.txt", "/sitemap.xml"];

/** Returns true for paths that must never be blocked. */
function isPublic(pathname: string): boolean {
  if (pathname.startsWith("/unlock")) return true;
  if (pathname === "/api/unlock") return true;
  if (pathname.startsWith("/_next/")) return true;
  return PUBLIC_PATHS.includes(pathname);
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname, search } = request.nextUrl;

  if (isPublic(pathname)) return NextResponse.next();

  const isAuthenticated = request.cookies.get("site_auth")?.value === "ok";
  if (isAuthenticated) return NextResponse.next();

  const next = encodeURIComponent(pathname + search);
  return NextResponse.redirect(new URL(`/unlock?next=${next}`, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
