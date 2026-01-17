import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tworzenie Stron Internetowych Warszawa | Mainly - Aplikacje Web",
  description: "Profesjonalne tworzenie stron internetowych i aplikacji webowych. Nowoczesny design, SEO i wsparcie techniczne. Ponad 50 zrealizowanych projektów. Zamów bezpłatną wycenę!",
  keywords: ["tworzenie stron internetowych", "strony internetowe Warszawa", "aplikacje webowe", "projektowanie stron", "agencja webowa", "cennik stron internetowych", "strony w Next.js", "aplikacje React", "firma tworząca strony", "serwisy internetowe"],
  authors: [{ name: "Mainly" }],
  creator: "Mainly",
  publisher: "Mainly",
  metadataBase: new URL("https://mainly.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mainly - Strony internetowe & Aplikacje webowe",
    description: "Tworzymy nowoczesne i responsywne serwisy oraz aplikacje.",
    url: "https://mainly.pl",
    siteName: "Mainly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mainly - Strony internetowe & Aplikacje webowe",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainly - Strony internetowe & Aplikacje webowe",
    description: "Tworzymy nowoczesne i responsywne serwisy oraz aplikacje.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} text-white`}>
        <div
          className="fixed inset-0 -z-10 h-full w-full bg-black"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '6rem 4rem'
          }}
        ></div>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

