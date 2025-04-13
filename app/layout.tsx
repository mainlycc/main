import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mainly - Zamieniamy teksty, design i programowanie w kliknięcia, konwersje i zyski",
  description: "Tworzymy nowoczesne i responsywne serwisy oraz aplikacje. Strony internetowe i aplikacje webowe na zamówienie.",
  openGraph: {
    title: "Mainly - Strony internetowe & Aplikacje webowe",
    description: "Tworzymy nowoczesne i responsywne serwisy oraz aplikacje.",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}

