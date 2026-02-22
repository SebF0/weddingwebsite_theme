import type { Metadata } from "next";
import { cormorantGaramond, greatVibes, alexBrush, allura, carattere } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONTENT } from "@/config/content";
import "./globals.css";

/** Base URL for Open Graph / link previews. Set NEXT_PUBLIC_SITE_URL or use Vercel's auto URL. */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  title: SITE_CONTENT.meta.title,
  description: SITE_CONTENT.meta.description,
  ...(SITE_URL && { metadataBase: new URL(SITE_URL) }),
  openGraph: {
    title: SITE_CONTENT.meta.title,
    description: SITE_CONTENT.meta.description,
    ...(SITE_URL && { url: SITE_URL }),
    siteName: SITE_CONTENT.meta.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONTENT.meta.title,
    description: SITE_CONTENT.meta.description,
  },
};

/**
 * Root layout — applies Google Fonts via CSS variables,
 * renders the sticky nav and footer around page content.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable}  
        ${carattere.variable} 
        antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
