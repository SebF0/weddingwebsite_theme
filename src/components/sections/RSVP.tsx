"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/config/content";
import RSVPForm from "./RSVPForm";

const LINE_COUNT = 8;
const LINE_THICKNESS = "20px";
const SPACE_SIZE = "60px";
const LINE_THICKNESS_MOBILE = "10px";
const SPACE_SIZE_MOBILE = "16px";

/** Splits description2 into the text before and after "via this form". */
function splitDescription2(text: string) {
  const LINK_TEXT = "via this form";
  const idx = text.indexOf(LINK_TEXT);
  if (idx === -1) return { before: text, after: "" };
  return {
    before: text.slice(0, idx),
    after: text.slice(idx + LINK_TEXT.length),
  };
}

/**
 * RSVP section with text on left and decorative vertical lines on right.
 * Desktop: full-height vertical lines extending to screen edge.
 * Mobile: full-width horizontal lines with alternating pattern.
 * Clicking "via this form" reveals an inline RSVP form.
 */
export default function RSVP() {
  const { heading, description, items, closing, description2 } = SITE_CONTENT.rsvp;
  const [showForm, setShowForm] = useState(false);
  const { before, after } = splitDescription2(description2);

  return (
    <section id="rsvp" className="relative bg-cream">
      {/* Desktop layout */}
      <div className="hidden md:flex md:min-h-[600px] lg:min-h-[700px]">
        <div className="flex w-full max-w-2xl items-start py-28 pl-10 pr-16 lg:py-32 lg:pl-24 lg:pr-20">
          <div className="flex flex-col items-start text-left">
            <h2 className="font-serif-main text-4xl uppercase tracking-wedding text-olive lg:text-5xl">
              {heading}
            </h2>

            <p className="mt-8 font-serif-main text-lg leading-relaxed text-olive/80">
              {description}
            </p>

            <ul className="mt-8 space-y-2">
              {items.map((item, i) => (
                <li key={i} className="font-serif-main text-lg leading-relaxed text-olive/70">
                  - {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-serif-main text-lg leading-relaxed text-olive/80">
              {before}
              <button
                onClick={() => setShowForm(true)}
                className="underline underline-offset-2 hover:opacity-70"
              >
                via this form
              </button>
              {after}
            </p>

            {showForm && <RSVPForm />}

            <p className="mt-10 font-serif-main text-lg italic leading-relaxed text-olive/80">
              {closing}
            </p>
          </div>
        </div>

        {/* Vertical lines — full height, equally spaced to screen edge */}
        <div className="absolute bottom-0 right-0 top-0 flex" style={{ gap: SPACE_SIZE }}>
          {Array.from({ length: LINE_COUNT }).map((_, i) => (
            <div key={i} className="bg-olive/80" style={{ width: LINE_THICKNESS }} />
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col md:hidden">
        <div className="flex flex-col items-start px-6 py-20 text-left">
          <h2 className="font-serif-main text-3xl uppercase tracking-wedding text-olive">
            {heading}
          </h2>

          <p className="mt-6 font-serif-main text-base leading-relaxed text-olive/80">
            {description}
          </p>

          <ul className="mt-6 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="font-serif-main text-base leading-relaxed text-olive/70">
                - {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-serif-main text-base leading-relaxed text-olive/80">
            {before}
            <button
              onClick={() => setShowForm(true)}
              className="underline underline-offset-2 hover:opacity-70"
            >
              via this form
            </button>
            {after}
          </p>

          {showForm && <RSVPForm />}

          <p className="mt-8 font-serif-main text-base italic leading-relaxed text-olive/80">
            {closing}
          </p>
        </div>

        {/* Horizontal lines — full width, alternating with spaces */}
        <div className="flex flex-col">
          {Array.from({ length: LINE_COUNT }).map((_, i) => (
            <div key={i}>
              <div className="w-full bg-olive/60" style={{ height: LINE_THICKNESS_MOBILE }} />
              <div className="w-full bg-cream" style={{ height: SPACE_SIZE_MOBILE }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
