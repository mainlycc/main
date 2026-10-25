// Lista klientów do sekcji „Zaufali nam" na stronie głównej.
// Pliki leżą w public/logos/ (patrz INSTRUKCJA_DLA_AGENTA.md).
// Wszystkie logotypy mają wysokość 120 px — szerokość wynika z proporcji.

export type ClientLogo =
  | { type: "image"; name: string; src: string; w: number; h: number }
  | { type: "text"; name: string };

export const clientLogos: ClientLogo[] = [
  { type: "image", name: "Magia Podróżowania", src: "/logos/magia-podrozowania.png", w: 139, h: 120 },
  { type: "text", name: "AIRSET" },
  { type: "image", name: "Akademia Wiedzy", src: "/logos/akademia-wiedzy.png", w: 252, h: 120 },
  { type: "image", name: "Elomoto.eco", src: "/logos/elomoto-eco.png", w: 344, h: 120 },
  { type: "image", name: "Lease1", src: "/logos/lease1.png", w: 270, h: 120 },
  { type: "image", name: "Football Academy", src: "/logos/football-academy-white.png", w: 120, h: 120 },
  { type: "image", name: "Business Care SC", src: "/logos/business-care-sc.png", w: 386, h: 120 },
  { type: "image", name: "Qualibase", src: "/logos/qualibase-bialy.png", w: 563, h: 120 },
  { type: "image", name: "Rolety3miasto", src: "/logos/rolety3miasto.png", w: 729, h: 120 },
  { type: "image", name: "Brewhaus", src: "/logos/brewhaus-znak-B.png", w: 116, h: 120 },
  { type: "image", name: "GAP AUTO", src: "/logos/gap-auto.png", w: 286, h: 120 },
  { type: "image", name: "Calcium Sandoz", src: "/logos/calcium-sandoz-white.png", w: 355, h: 120 },
  { type: "image", name: "Archeologia", src: "/logos/archeologia.png", w: 619, h: 120 },
  { type: "image", name: "Odkrywca", src: "/logos/odkrywca.png", w: 433, h: 120 },
  { type: "image", name: "Połoniny", src: "/logos/poloniny.png", w: 120, h: 120 },
  { type: "image", name: "Olewnik", src: "/logos/olewnik.png", w: 236, h: 120 },
  { type: "image", name: "GEMO", src: "/logos/gemo.png", w: 119, h: 120 },
  { type: "image", name: "Defend Insurance", src: "/logos/defend-insurance.png", w: 826, h: 120 },
];
