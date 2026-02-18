"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/config/content";
import { MAX_QUESTION_CHARS } from "@/config/chatbot";

const VALIDATION_ERROR = "Enter a question.";
const FETCH_ERROR = "That didn't work. Try again.";

/**
 * Ask Jeeves chatbot section.
 * POSTs to /api/ask and displays the latest single answer.
 * No chat history — only the most recent answer is shown.
 */
export default function AskJeeves() {
  const { heading, subheading, placeholder, buttonLabel, note } =
    SITE_CONTENT.askJeeves;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  async function handleSubmit() {
    const trimmed = question.trim();
    if (!trimmed) {
      setValidationError(VALIDATION_ERROR);
      return;
    }
    setValidationError(null);
    setFetchError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setFetchError(data.error ?? FETCH_ERROR);
      } else {
        setAnswer(data.answer);
      }
    } catch {
      setFetchError(FETCH_ERROR);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !loading) handleSubmit();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuestion(e.target.value);
    if (validationError) setValidationError(null);
  }

  return (
    <section id="ask-jeeves" className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-olive md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mt-4 font-serif-main text-lg leading-relaxed text-olive/70">
          {subheading}
        </p>

        {/* Widget container with green border */}
        <div className="mt-10 border border-olive p-6 md:p-8">
          {/* Input row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <div className="flex-1">
              <input
                type="text"
                value={question}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                maxLength={MAX_QUESTION_CHARS}
                disabled={loading}
                className="w-full border border-olive/40 bg-cream px-4 py-3 font-serif-main text-base text-olive placeholder:text-olive/40 focus:border-olive focus:outline-none disabled:opacity-50"
              />
              <p className="mt-1 text-right font-serif-main text-xs text-olive/40">
                {question.length}/{MAX_QUESTION_CHARS}
              </p>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="shrink-0 border border-olive bg-olive px-6 py-3 font-serif-main text-sm uppercase tracking-wedding text-cream transition-opacity hover:opacity-80 disabled:opacity-50"
            >
              {buttonLabel}
            </button>
          </div>

          {/* Validation error */}
          {validationError && (
            <p className="mt-3 font-serif-main text-sm text-olive/70">
              {validationError}
            </p>
          )}

          {/* Loading */}
          {loading && (
            <p className="mt-4 font-serif-main text-sm italic text-olive/60">
              Thinking…
            </p>
          )}

          {/* Fetch error */}
          {fetchError && (
            <p className="mt-4 font-serif-main text-sm text-olive/70">
              {fetchError}
            </p>
          )}

          {/* Answer */}
          {answer && !loading && (
            <div className="mt-6 border-t border-olive/20 pt-6">
              <p className="font-serif-main text-base leading-relaxed text-olive">
                {answer}
              </p>
            </div>
          )}

          {/* Note */}
          <p className="mt-6 font-serif-main text-xs text-olive/40">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}
