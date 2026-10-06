/**
 * Centralna konfiguracja profili zewnętrznych właściciela i firmy.
 *
 * Te profile są używane do:
 * - JSON-LD sameAs (budowanie encji dla Google i modeli AI)
 * - Linków w stopce i na stronie /o-mnie
 * - Budowania wiarygodności E-E-A-T
 *
 * WAŻNE: Puste wpisy (pusty string lub null) są automatycznie pomijane
 * przy generowaniu JSON-LD i renderowaniu linków.
 */

export interface SocialProfile {
  /** Identyfikator platformy (używany jako klucz) */
  id: string;
  /** Wyświetlana nazwa platformy */
  label: string;
  /** Pełny URL profilu. Pusty string = brak profilu (TODO do uzupełnienia) */
  url: string;
  /** Nazwa ikony (opcjonalnie, do renderowania w UI) */
  icon?: string;
  /** Czy używać rel="me" (dla profili osobistych) */
  relMe?: boolean;
}

/**
 * Profile właściciela (Stanisław Blicharski).
 * Używane dla encji Person w JSON-LD i linków na /o-mnie.
 */
export const OWNER_PROFILES: SocialProfile[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/mainlycc",
    icon: "github",
    relMe: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    // TODO: Uzupełnij prawdziwy URL profilu LinkedIn
    // Format: https://www.linkedin.com/in/nazwa-uzytkownika/
    url: "",
    icon: "linkedin",
    relMe: true,
  },
];

/**
 * Profile firmy Mainly.
 * Używane dla encji Organization/ProfessionalService w JSON-LD.
 */
export const COMPANY_PROFILES: SocialProfile[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/mainlycc",
    icon: "github",
    relMe: false,
  },
  {
    id: "google-business",
    label: "Google Business Profile",
    // TODO: Uzupełnij URL wizytówki Google po jej utworzeniu
    // Format: https://g.co/kgs/XXXXXX lub https://www.google.com/maps/place/...
    url: "",
    icon: "google",
    relMe: false,
  },
  {
    id: "clutch",
    label: "Clutch",
    // TODO: Uzupełnij URL profilu Clutch po jego utworzeniu
    // Format: https://clutch.co/profile/nazwa-firmy
    url: "",
    icon: "clutch",
    relMe: false,
  },
];

/**
 * Zwraca tablicę URL-i do użycia w JSON-LD sameAs.
 * Automatycznie filtruje puste wpisy.
 */
export function getOwnerSameAs(): string[] {
  return OWNER_PROFILES.filter((p) => p.url.trim() !== "").map((p) => p.url);
}

/**
 * Zwraca tablicę URL-i do użycia w JSON-LD sameAs dla organizacji.
 * Automatycznie filtruje puste wpisy.
 */
export function getCompanySameAs(): string[] {
  return COMPANY_PROFILES.filter((p) => p.url.trim() !== "").map((p) => p.url);
}

/**
 * Zwraca profile właściciela z niepustymi URL-ami (do renderowania linków).
 */
export function getActiveOwnerProfiles(): SocialProfile[] {
  return OWNER_PROFILES.filter((p) => p.url.trim() !== "");
}

/**
 * Zwraca profile firmy z niepustymi URL-ami (do renderowania linków).
 */
export function getActiveCompanyProfiles(): SocialProfile[] {
  return COMPANY_PROFILES.filter((p) => p.url.trim() !== "");
}
