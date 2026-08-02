import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import { fontVariables, geistSans } from "../lib/fonts";
import {
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "../lib/seo";

export const metadata: Metadata = {
  title: "Mainly - Strony, które rozpalają biznes",
  description:
    "Projektuję i koduję strony, aplikacje webowe i systemy szyte na miarę - od landing page'y po rozbudowane CRM-y i platformy. Ponad 50 klientów, 36+ wdrożonych projektów.",
  keywords: [
    "tworzenie stron internetowych",
    "strony internetowe Warszawa",
    "aplikacje webowe",
    "projektowanie stron",
    "agencja webowa",
    "cennik stron internetowych",
    "strony w Next.js",
    "aplikacje React",
  ],
  authors: [{ name: "Mainly" }],
  creator: "Mainly",
  publisher: "Mainly",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mainly - Strony, które rozpalają biznes",
    description:
      "Strony, aplikacje i systemy szyte na miarę - od pomysłu po wdrożenie.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mainly - Strony, które rozpalają biznes",
      },
    ],
    locale: SITE_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainly - Strony, które rozpalają biznes",
    description:
      "Strony, aplikacje i systemy szyte na miarę - od pomysłu po wdrożenie.",
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
    },
  },
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
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
