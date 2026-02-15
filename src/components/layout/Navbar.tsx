"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/config/navigation";
import { SITE_CONTENT } from "@/config/content";

/**
 * Minimal sticky navigation bar.
 * Desktop: horizontal links. Mobile: hamburger menu overlay.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { name1, name2 } = SITE_CONTENT.hero;

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        {/* Couple initials / brand mark */}
        <a
          href="#"
          className="font-script text-xl text-olive"
        >
          {name1} & {name2}
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-serif-main font-bold text-sm uppercase tracking-wedding-wide text-olive/80 transition-colors hover:text-olive"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-px w-6 bg-olive transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-olive transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-olive transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="absolute inset-x-0 top-full bg-cream/95 backdrop-blur-[2px] md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif-main text-base uppercase tracking-wedding-wide text-olive/80 transition-colors hover:text-olive"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
