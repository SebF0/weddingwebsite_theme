/**
 * Design tokens extracted from the wedding theme reference image.
 * Update these values to adjust the site-wide palette and spacing.
 *
 * NOTE: Color names in Tailwind are defined in globals.css via @theme inline.
 * This file provides typed constants for programmatic use.
 */

export const COLORS = {
  /** Warm off-white page background */
  cream: "#F2EDE8",
  /** Slightly darker cream for subtle contrast */
  creamDark: "#E8E2DB",
  /** Primary dark olive-green for text */
  olive: "#3C4A3E",
  /** Lighter olive for the "Our Special Day" overlay */
  oliveLight: "#5C6B52",
  /** Muted sage accent */
  sage: "#8A9A7B",
  /** Pure white for text on dark backgrounds */
  white: "#FFFFFF",
  /** Warm off-white for text on dark backgrounds */
  offWhite: "#F5F0EB",
} as const;

export const SPACING = {
  /** Standard section vertical padding */
  sectionY: "py-20 md:py-28 lg:py-32",
  /** Inner content max-width wrapper */
  container: "mx-auto max-w-6xl px-6 md:px-10 lg:px-16",
} as const;
