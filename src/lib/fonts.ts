import { Cormorant_Garamond, Parisienne, Great_Vibes } from "next/font/google";

/** Primary serif for headings, body text, navigation, and buttons */
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

/** Decorative script for names, signatures, and accents */
export const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-parisienne",
  display: "swap",
});

/** Decorative script for names, signatures, and accents */
export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});