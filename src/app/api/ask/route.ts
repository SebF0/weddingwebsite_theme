/**
 * POST /api/ask
 * Ask Jeeves chatbot endpoint.
 *
 * Required env vars:
 *   OPENAI_API_KEY  – OpenAI secret key
 *   DATABASE_URL    – Neon Postgres connection string
 */

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import sql from "@/lib/db";
import {
  MODEL,
  MAX_QUESTION_CHARS,
  MAX_OUTPUT_TOKENS,
  PROMPT_VERSION,
  SYSTEM_PROMPT,
} from "@/config/chatbot";

const TIMEOUT_MS = 20_000;
const GENERIC_ERROR = "That didn't work. Try again.";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/** Validates the raw request body and returns the trimmed question or null. */
function parseQuestion(body: unknown): string | null {
  if (typeof body !== "object" || body === null) return null;
  const { question } = body as Record<string, unknown>;
  if (typeof question !== "string") return null;
  const trimmed = question.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_QUESTION_CHARS) return null;
  return trimmed;
}

/** Inserts a chat_log row. Errors are swallowed so logging never crashes the endpoint. */
async function logResult(params: {
  question: string;
  answer?: string;
  success: boolean;
  latencyMs: number;
  errorCode?: string;
  errorMessage?: string;
}): Promise<void> {
  try {
    await sql`
      INSERT INTO chat_logs
        (question, answer, model, prompt_version, latency_ms, success, error_code, error_message)
      VALUES
        (${params.question}, ${params.answer ?? null}, ${MODEL}, ${PROMPT_VERSION},
         ${params.latencyMs}, ${params.success}, ${params.errorCode ?? null}, ${params.errorMessage ?? null})
    `;
  } catch {
    // Logging failure must not affect the API response.
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (req.cookies.get("site_auth")?.value !== "ok") {
    return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const question = parseQuestion(body);

  if (!question) {
    return NextResponse.json(
      { error: `Enter a question (max ${MAX_QUESTION_CHARS} characters).` },
      { status: 400 }
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const startedAt = Date.now();

  try {
    const completion = await openai.chat.completions.create(
      {
        model: MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: question },
        ],
      },
      { signal: controller.signal }
    );

    const answer = completion.choices[0]?.message?.content?.trim() ?? "";
    const latencyMs = Date.now() - startedAt;

    await logResult({ question, answer, success: true, latencyMs });

    return NextResponse.json({ answer });
  } catch (err: unknown) {
    const latencyMs = Date.now() - startedAt;

    if (err instanceof Error && err.name === "AbortError") {
      await logResult({
        question,
        success: false,
        latencyMs,
        errorCode: "TIMEOUT",
        errorMessage: "OpenAI request exceeded 20s timeout",
      });
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 504 });
    }

    if (err instanceof OpenAI.APIError) {
      await logResult({
        question,
        success: false,
        latencyMs,
        errorCode: String(err.status ?? "OPENAI_ERROR"),
        errorMessage: err.message,
      });
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }

    const message = err instanceof Error ? err.message : "Unknown error";
    await logResult({
      question,
      success: false,
      latencyMs,
      errorCode: "UNKNOWN",
      errorMessage: message,
    });
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  } finally {
    clearTimeout(timeout);
  }
}
