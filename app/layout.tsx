import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "../components/MetaPixel";
import MobileCta from "../components/MobileCta";
import Navbar from "../components/Navbar";
import GoogleAnalytics from "../components/seo/GoogleAnalytics";
import JsonLd from "../components/seo/JsonLd";
import { fontVariables, geistSans } from "../lib/fonts";
import { testimonials } from "../lib/home-content";
import { organizationSchema, personSchema, websiteSchema } from "../lib/schema";
import {
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "../lib/seo";

const DEFAULT_TITLE = "Aplikacje webowe i strony dla firm | Mainly Warszawa";
const DEFAULT_DESCRIPTION =
  "Buduję aplikacje webowe, systemy i strony na zamówienie — od projektu po wdrożenie, bez podwykonawców. 36 wdrożeń w 9 branżach. Bezpłatna wycena w 24 h.";

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mainly - aplikacje webowe i strony dla firm",
      },
    ],
    locale: SITE_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Uzupełnij NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION po dodaniu domeny w Search Console
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={fontVariables}>
      <body
        className={`${geistSans.className} text-[var(--fg)] bg-[var(--bg)] antialiased`}
      >
        <JsonLd data={organizationSchema(testimonials.length, testimonials)} />
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />

        <MetaPixel />
        <GoogleAnalytics />
        <a href="#main" className="skip-link">
          Przejdź do treści
        </a>
        <Navbar />
        {children}
        <MobileCta />
        <Analytics />
      </body>
    </html>
  );
}
