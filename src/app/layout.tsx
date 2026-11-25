import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteUrl, socialPreviewImage } from "@/lib/site";
import "./globals.css";
const manrope = localFont({
  src: "./fonts/manrope-normal.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});
const playfair = localFont({
  src: [
    {
      path: "./fonts/playfair-display-normal.woff2",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "./fonts/playfair-display-italic.woff2",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MAIS AGRO HOUSE | Find a Place. Build Your Future.",
    template: "%s | MAIS AGRO HOUSE",
  },
  description:
    "Discover apartments, residential plots, commercial property, and farmland in Bhubaneswar with personal guidance from Mais Agro House.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MAIS AGRO HOUSE",
    images: [socialPreviewImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [socialPreviewImage],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
