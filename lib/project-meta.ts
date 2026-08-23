/**
 * Powiązania case studies z usługami i branżami + dane do tabeli specyfikacji.
 *
 * ZASADA: nie ma tu żadnych zmyślonych metryk klienta.
 * Wszystko pochodzi albo z danych projektu (lib/projects.ts), albo z moich
 * publicznych widełek cenowych i czasów realizacji. Jeśli chcesz dodać realne
 * wyniki klienta (wzrost konwersji, oszczędność czasu), wpisz je w polu
 * `result` — dopiero wtedy pojawią się na stronie.
 */

export type ProjectMeta = {
  /** slug usługi z lib/services.ts */
  service: string;
  /** slug branży z lib/industries.ts (jeśli pasuje) */
  industry?: string;
  /** Etykieta typu projektu do tabeli specyfikacji */
  type: string;
  /**
   * Realny, potwierdzony wynik u klienta. Zostaw puste, dopóki nie masz liczby,
   * którą możesz obronić — pusta wartość nie renderuje sekcji.
   */
  result?: string;
};

export const projectMeta: Record<string, ProjectMeta> = {
  "football-academy": {
    service: "systemy-dla-firm",
    industry: "kluby-i-akademie-sportowe",
    type: "System wewnętrzny z rolami użytkowników",
  },
  qualibase: {
    service: "aplikacje-webowe",
    type: "Platforma dwustronna (marketplace)",
  },
  "jkterm-wizualizator": {
    service: "sklepy-i-platformy-b2b",
    industry: "producenci-i-przemysl",
    type: "Konfigurator produktu z generowaniem wizualizacji",
  },
  "magia-podrozowania": {
    service: "systemy-dla-firm",
    industry: "biura-podrozy",
    type: "System CRM z rezerwacjami i płatnościami",
  },
  "akademia-wiedzy": {
    service: "aplikacje-webowe",
    industry: "szkoly-i-edukacja",
    type: "Platforma e-learningowa z płatnościami",
    result: "865+ uczniów i 40+ korepetytorów obsługiwanych w systemie",
  },
  "airset-platforma": {
    service: "aplikacje-webowe",
    industry: "szkoly-i-edukacja",
    type: "System szkoleniowy z audytem dostępu",
  },
  "elomoto-eco": {
    service: "strony-internetowe",
    type: "Strona firmowa (SPA) z modułem interaktywnym",
  },
  "biblioteka-promptow": {
    service: "aplikacje-webowe",
    type: "Platforma treściowa z wyszukiwaniem",
  },
  "music-pad": {
    service: "aplikacje-webowe",
    type: "Narzędzie interaktywne w przeglądarce",
  },
  "lease1-leasing": {
    service: "aplikacje-webowe",
    industry: "leasing-i-finanse",
    type: "Platforma dla firmy leasingowej",
  },
  "bcsc-ksiegowosc": {
    service: "strony-internetowe",
    industry: "biura-rachunkowe",
    type: "Strona firmowa z kalkulatorem wyceny",
  },
  "generator-ofert-rolety": {
    service: "automatyzacja-procesow",
    industry: "producenci-i-przemysl",
    type: "Automatyzacja wycen i generowania ofert",
  },
  "kreator-faktur": {
    service: "automatyzacja-procesow",
    industry: "biura-rachunkowe",
    type: "Generator dokumentów",
  },
  audiogen: {
    service: "automatyzacja-procesow",
    type: "Automatyzacja pozyskiwania leadów",
  },
  "kalkulator-gap": {
    service: "aplikacje-webowe",
    industry: "leasing-i-finanse",
    type: "Kalkulator ubezpieczeniowy",
  },
  cytomania: {
    service: "aplikacje-webowe",
    type: "Portal treściowy",
  },
  "kulio-studio": {
    service: "strony-internetowe",
    type: "Strona agencji",
  },
  "milei-coin": {
    service: "strony-internetowe",
    type: "Landing page one-pager",
  },
  prawkoczechy: {
    service: "strony-internetowe",
    industry: "kancelarie-prawne",
    type: "Strona usługowa z integracją Google Ads",
  },
};

/** Typowy czas realizacji wg usługi — z publicznego cennika, nie z konkretnego projektu. */
export const serviceTimeline: Record<string, string> = {
  "strony-internetowe": "1–4 tygodnie",
  "aplikacje-webowe": "od 6 tygodni",
  "systemy-dla-firm": "od 6 tygodni",
  "sklepy-i-platformy-b2b": "od 8 tygodni",
  "automatyzacja-procesow": "1–3 tygodnie",
  "opieka-techniczna": "praca ciągła",
};

/**
 * Dlaczego akurat ta technologia. Zdania są prawdziwe i niezależne od projektu —
 * unikalna jest kombinacja, która pojawia się na danej stronie.
 */
export const techRationale: Record<string, string> = {
  "Next.js":
    "renderowanie po stronie serwera daje szybkie pierwsze wczytanie i poprawne SEO — w odróżnieniu od aplikacji, które budują treść dopiero w przeglądarce",
  React:
    "komponenty wielokrotnego użytku skracają czas dokładania kolejnych ekranów i ograniczają liczbę miejsc, w których może pojawić się błąd",
  TypeScript:
    "typy wyłapują część błędów zanim kod trafi na produkcję — przy systemie, który ktoś będzie rozwijał za rok, to oszczędność liczona w dniach",
  "Tailwind CSS":
    "spójny system odstępów i kolorów bez rozjeżdżających się arkuszy stylów przy rozbudowie",
  "shadcn/ui":
    "gotowe, dostępne komponenty interfejsu, które można dowolnie modyfikować — bez zależności od zewnętrznej biblioteki UI",
  Supabase:
    "baza PostgreSQL z uwierzytelnianiem i regułami dostępu na poziomie wiersza — dane widzi tylko ten użytkownik, który ma prawo je widzieć",
  PostgreSQL:
    "relacyjna baza, która radzi sobie ze złożonymi zapytaniami raportowymi bez utraty wydajności",
  "Node.js":
    "logika serwerowa w tym samym języku co interfejs — jeden zestaw narzędzi zamiast dwóch",
  Python:
    "sprawdza się tam, gdzie w grę wchodzi przetwarzanie danych i integracje z modelami AI",
  "Three.js":
    "renderowanie grafiki 3D bezpośrednio w przeglądarce, bez instalowania czegokolwiek po stronie użytkownika",
  "React Three Fiber":
    "obsługa sceny 3D w tej samej komponentowej logice co reszta interfejsu",
  Vercel:
    "wdrożenie przy każdym zapisie kodu, automatyczne skalowanie i certyfikat SSL w standardzie",
  Stripe:
    "obsługa płatności bez przechowywania danych kart na własnym serwerze",
  PayU: "operator płatności z obsługą BLIK-a i płatności cyklicznych",
  PayNow:
    "polski operator płatności z niskimi prowizjami i szybkim rozliczaniem",
  GraphQL:
    "jedno zapytanie zamiast kilku — mniej ruchu sieciowego przy rozbudowanych widokach",
  Figma:
    "projekt akceptowany przed napisaniem kodu — poprawka w makiecie kosztuje godziny, ta sama poprawka w gotowej aplikacji kosztuje dni",
};
