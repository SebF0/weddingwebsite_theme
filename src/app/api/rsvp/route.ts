/**
 * POST /api/rsvp
 * Saves a guest RSVP (name, email, message) to the rsvp table.
 *
 * All three fields are required. Message is capped at MAX_MESSAGE_CHARS.
 */

import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

const MAX_MESSAGE_CHARS = 1000;
const GENERIC_ERROR = "That didn't work. Please try again.";

interface RsvpPayload {
  name: string;
  email: string;
  message: string;
}

/** Validates the request body. Returns the trimmed fields or null if invalid. */
function parsePayload(body: unknown): RsvpPayload | null {
  if (typeof body !== "object" || body === null) return null;

  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length === 0) return null;
  if (typeof email !== "string" || email.trim().length === 0) return null;
  if (typeof message !== "string" || message.trim().length === 0) return null;
  if (message.trim().length > MAX_MESSAGE_CHARS) return null;

  return {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };
}

/** Inserts a row into the rsvp table. */
async function insertRsvp(payload: RsvpPayload): Promise<void> {
  await sql`
    INSERT INTO rsvp (name, email, message)
    VALUES (${payload.name}, ${payload.email}, ${payload.message})
  `;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (req.cookies.get("site_auth")?.value !== "ok") {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const payload = parsePayload(body);

  if (!payload) {
    return NextResponse.json(
      { error: "All fields are required. Message must be under 1000 characters." },
      { status: 400 }
    );
  }

  try {
    await insertRsvp(payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}
