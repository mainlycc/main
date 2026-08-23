/**
 * Jedno źródło prawdy o firmie (NAP + encja).
 * Używane przez metadane, dane strukturalne i stopkę.
 *
 * WAŻNE: te dane muszą być IDENTYCZNE co do znaku w Profilu Firmy w Google,
 * w katalogach (Clutch, Oferteo, Panorama Firm) i w stopce serwisu.
 */

export const BUSINESS = {
  legalName: "Mainly",
  name: "Mainly",
  personName: "Stanisław Blicharski",
  personDescription:
    "Web developer z Warszawy, założyciel Mainly. Buduje aplikacje webowe, systemy CRM i strony internetowe dla firm — od projektu UX/UI po wdrożenie, bez podwykonawców.",
  jobTitle: "Web developer",
  email: "kontakt@mainly.pl",
  telephone: "+48500789826",
  telephoneDisplay: "+48 500 789 826",
  vatID: "PL7010961986",
  taxID: "7010961986",
  street: "ul. Filtrowa 83",
  postalCode: "02-032",
  city: "Warszawa",
  region: "mazowieckie",
  country: "PL",
  // TODO: zweryfikuj współrzędne w Google Maps dla dokładnego adresu
  latitude: 52.2183,
  longitude: 20.9878,
  priceRange: "2900-9900 PLN",
  foundingDate: "2024",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
} as const;

/**
 * Profile w serwisach zewnętrznych — budują encję firmy w Google i modelach AI.
 * TODO: uzupełnij realnymi adresami. Puste wpisy NIE są emitowane do schematu.
 */
export const SOCIAL_PROFILES: string[] = [
  // "https://www.facebook.com/...",
  // "https://www.instagram.com/...",
  // "https://www.linkedin.com/in/...",
  // "https://github.com/...",
  // "https://clutch.co/profile/...",
].filter(Boolean);
