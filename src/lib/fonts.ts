import { Cormorant_Garamond, Great_Vibes, Alex_Brush, Allura } from "next/font/google";

/** Primary serif for headings, body text, navigation, and buttons */
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});


/** Decorative script for names, signatures, and accents */
export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

/** Decorative script Variation 2 for names, signatures, and accents */
export const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex-brush",
  display: "swap",
});

/** Decorative script Variation 3 for names, signatures, and accents */
export const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
  display: "swap",
});