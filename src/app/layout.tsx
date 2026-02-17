import type { Metadata } from "next";
import { cormorantGaramond, greatVibes, alexBrush, allura } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONTENT } from "@/config/content";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_CONTENT.meta.title,
  description: SITE_CONTENT.meta.description,
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
        ${greatVibes.variable} 
        antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
