import { Cormorant_Garamond, Parisienne } from "next/font/google";

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
