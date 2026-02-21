"use client";

import { useState } from "react";

const MAX_MESSAGE_CHARS = 1000;
const FETCH_ERROR = "That didn't work. Please try again.";
const MESSAGE_PLACEHOLDER =
  "Please let us know:\n- If you're joining us on Saturday\n- If you're joining us on Sunday\n- Any dietary requirements\n- Any questions";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

/** Returns validation errors for the form fields. Empty object means valid. */
function validateFields(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) errors.email = "Email is required.";
  if (!fields.message.trim()) errors.message = "Message is required.";
  return errors;
}

/** Submits RSVP data to /api/rsvp. Returns an error string or null on success. */
async function submitRsvp(fields: FormFields): Promise<string | null> {
  try {
    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return (data.error as string) ?? FETCH_ERROR;
    }
    return null;
  } catch {
    return FETCH_ERROR;
  }
}

const INPUT_CLASS =
  "w-full border border-olive/40 bg-cream px-4 py-3 font-serif-main text-base text-olive placeholder:text-olive/40 focus:border-olive focus:outline-none disabled:opacity-50";

/**
 * Inline RSVP form. Collects name, email, and message.
 * All fields are required. POSTs to /api/rsvp on submit.
 * Shows a confirmation message on success.
 */
export default function RSVPForm() {
  const [fields, setFields] = useState<FormFields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormFields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  async function handleSubmit() {
    const validationErrors = validateFields(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFetchError(null);
    setLoading(true);
    const error = await submitRsvp(fields);
    setLoading(false);
    if (error) {
      setFetchError(error);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <p className="mt-6 font-serif-main text-lg italic leading-relaxed text-olive/80">
        Thank you — we&apos;ve received your RSVP.
      </p>
    );
  }

  return (
    <div className="mt-8 w-full flex flex-col gap-4">
      <div>
        <input
          type="text"
          value={fields.name}
          onChange={handleChange("name")}
          placeholder="Name"
          disabled={loading}
          className={INPUT_CLASS}
        />
        {errors.name && <FieldError message={errors.name} />}
      </div>

      <div>
        <input
          type="text"
          value={fields.email}
          onChange={handleChange("email")}
          placeholder="Email"
          disabled={loading}
          className={INPUT_CLASS}
        />
        {errors.email && <FieldError message={errors.email} />}
      </div>

      <div>
        <textarea
          value={fields.message}
          onChange={handleChange("message")}
          placeholder={MESSAGE_PLACEHOLDER}
          maxLength={MAX_MESSAGE_CHARS}
          disabled={loading}
          rows={6}
          className={`${INPUT_CLASS} resize-none`}
        />
        <p className="mt-1 text-right font-serif-main text-sm text-olive/40">
          {fields.message.length}/{MAX_MESSAGE_CHARS}
        </p>
        {errors.message && <FieldError message={errors.message} />}
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="self-start border border-olive bg-olive/70 px-6 py-3 font-serif-main text-sm uppercase tracking-wedding text-cream transition-opacity hover:opacity-50 disabled:opacity-20"
      >
        {loading ? "Submitting…" : "Submit"}
      </button>

      {fetchError && <FieldError message={fetchError} />}
    </div>
  );
}

/** Inline field error message. */
function FieldError({ message }: { message: string }) {
  return (
    <p className="mt-1 font-serif-main text-sm text-olive/70">{message}</p>
  );
}
