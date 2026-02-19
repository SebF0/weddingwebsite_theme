/**
 * POST /api/unlock
 * Validates the site password and sets the auth cookie on success.
 *
 * Form fields:
 *   password – the site password
 *   next     – (optional) path to redirect to after unlock
 */

import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "site_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: NextRequest): Promise<NextResponse> {
  const formData = await request.formData();
  const password = formData.get("password") as string | null;
  const next = (formData.get("next") as string | null) || "/";

  const isCorrect =
    password && password === process.env.SITE_PASSWORD;

  if (!isCorrect) {
    const params = new URLSearchParams({ next, error: "1" });
    return NextResponse.redirect(
      new URL(`/unlock?${params}`, request.url),
      { status: 303 }
    );
  }

  const destination = next.startsWith("/") ? next : "/";
  const response = NextResponse.redirect(new URL(destination, request.url), {
    status: 303,
  });

  response.cookies.set(COOKIE_NAME, "ok", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });

  return response;
}
