import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";

export const geistSans = GeistSans;

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
});

export const fontVariables = `${geistSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`;

/** Klasa dla kursywowych akcentów Instrument Serif (pomarańczowe <em> w nagłówkach) */
export const displayEmClass = instrumentSerif.className;
