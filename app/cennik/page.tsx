import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema, ORG_ID } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cennik stron i aplikacji webowych 2026 | Mainly",
  description:
    "Ile kosztuje strona internetowa, aplikacja webowa i system na zamówienie w 2026. Realne widełki, od czego zależy cena i co wchodzi w każdy pakiet.",
  alternates: { canonical: "/cennik" },
  openGraph: {
    title: "Cennik stron i aplikacji webowych | Mainly",
    description:
      "Realne widełki cenowe dla stron, aplikacji i systemów na zamówienie — bez „wyceny indywidualnej” jako jedynej odpowiedzi.",
    url: absoluteUrl("/cennik"),
    type: "website",
    images: defaultOgImages("Cennik stron i aplikacji webowych | Mainly"),
  },
};

const packages = [
  {
    name: "Start",
    tag: "Strony",
    price: 2900,
    description: "Strona firmowa, która pracuje na pozyskiwanie zapytań.",
    time: "1–2 tygodnie",
    features: [
      "Do 5 podstron",
      "Projekt UX/UI w Figmie, dwie rundy poprawek",
      "Formularz kontaktowy z ochroną antyspamową",
      "SEO techniczne: metadane, dane strukturalne, sitemap",
      "Panel do samodzielnej edycji treści",
      "Podpięcie Google Analytics i Search Console",
    ],
  },
  {
    name: "Rozwój",
    tag: "Najczęściej wybierany",
    price: 4900,
    description: "Dla firm, które chcą rosnąć z Google i płatnych reklam.",
    time: "3–4 tygodnie",
    features: [
      "Do 10 podstron",
      "Blog z panelem do publikacji",
      "Analityka konwersji i zdarzenia w GA4",
      "Integracje: newsletter, CRM, kalendarz",
      "Rozbudowane dane strukturalne pod wyniki rozszerzone",
      "Wszystko z pakietu Start",
    ],
  },
  {
    name: "Skala",
    tag: "Aplikacje i systemy",
    price: 9900,
    description: "Aplikacja albo system szyty pod proces Twojej firmy.",
    time: "od 6 tygodni",
    features: [
      "Panel administracyjny z rolami i uprawnieniami",
      "Integracje zewnętrzne: płatności, fakturowanie, API",
      "Automatyczne powiadomienia i przypomnienia",
      "Moduł raportowania",
      "Migracja danych z arkuszy lub poprzedniego systemu",
      "Szkolenie zespołu i dokumentacja",
    ],
  },
];

const ranges = [
  {
    what: "Strona wizytówka (do 5 podstron)",
    range: "2 900 – 4 500 zł",
    driver: "Liczba podstron i stopień indywidualizacji projektu graficznego",
  },
  {
    what: "Strona firmowa z blogiem (do 10 podstron)",
    range: "4 900 – 9 000 zł",
    driver: "Liczba podstron, moduły dodatkowe, zakres integracji",
  },
  {
    what: "Kalkulator lub konfigurator produktu",
    range: "8 000 – 25 000 zł",
    driver: "Złożoność reguł cenowych i obecność wizualizacji",
  },
  {
    what: "System CRM na zamówienie",
    range: "12 000 – 90 000 zł",
    driver: "Liczba ról użytkowników i integracji z systemami zewnętrznymi",
  },
  {
    what: "Aplikacja webowa dla klientów",
    range: "15 000 – 80 000 zł",
    driver: "Płatności online, panel klienta, liczba procesów",
  },
  {
    what: "Platforma B2B z integracją ERP",
    range: "40 000 – 120 000 zł",
    driver: "Integracja z magazynem i ERP — najbardziej pracochłonna część",
  },
  {
    what: "Automatyzacja jednego procesu",
    range: "2 900 – 8 000 zł",
    driver: "Liczba łączonych narzędzi i złożoność logiki",
  },
  {
    what: "Opieka techniczna",
    range: "od 290 zł / mies.",
    driver: "Liczba godzin na poprawki w miesiącu",
  },
];

const faq = [
  {
    question: "Ile kosztuje strona internetowa w 2026 roku?",
    answer:
      "Strona wizytówka do 5 podstron kosztuje u mnie 2 900–4 500 zł netto, strona firmowa z blogiem do 10 podstron — 4 900–9 000 zł. Rozbudowane serwisy z modułami dodatkowymi zaczynają się od 10 000 zł. Na cenę wpływa przede wszystkim liczba podstron, stopień indywidualizacji projektu i zakres integracji.",
  },
  {
    question: "Ile kosztuje aplikacja webowa na zamówienie?",
    answer:
      "Aplikacje zaczynają się od 9 900 zł netto. Prosta aplikacja z jednym procesem i panelem administracyjnym mieści się zwykle w 15 000–30 000 zł, rozbudowany system z płatnościami, wieloma rolami i integracjami — 35 000–80 000 zł. Największy wpływ na cenę ma liczba ról użytkowników i integracji, nie liczba ekranów.",
  },
  {
    question: "Dlaczego nie ma jednej ceny za stronę?",
    answer:
      "Bo strona na pięć podstron i platforma z panelem klienta to dwa różne produkty o dziesięciokrotnie różnym nakładzie pracy. Podaję widełki dla każdego typu wdrożenia zamiast jednej liczby, a po bezpłatnej konsultacji dostajesz konkretną wycenę z harmonogramem — ważną 14 dni.",
  },
  {
    question: "Jak wyglądają płatności?",
    answer:
      "Zaliczka 50% przy starcie, pozostałe 50% po wdrożeniu i akceptacji. Przy większych projektach dzielimy płatność na etapy powiązane z kamieniami milowymi. Wszystkie ceny są netto — do faktury doliczam 23% VAT.",
  },
  {
    question: "Ile kosztuje utrzymanie strony w skali roku?",
    answer:
      "Domena to 60–120 zł rocznie, hosting na Vercel dla typowej strony firmowej jest bezpłatny lub kosztuje ok. 20 USD miesięcznie przy większym ruchu. Opcjonalna opieka techniczna — od 290 zł miesięcznie. Dla większości stron firmowych realny koszt utrzymania to kilkaset złotych rocznie.",
  },
  {
    question: "Czy wycena jest bezpłatna?",
    answer:
      "Tak. Bezpłatna jest zarówno 30-minutowa konsultacja, jak i przygotowanie wyceny z harmonogramem, którą dostajesz w 48 h po rozmowie. Nie wymagam podpisania niczego przed wyceną.",
  },
];

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Cennik usług Mainly",
  url: absoluteUrl("/cennik"),
  provider: { "@id": ORG_ID },
  itemListElement: packages.map((pkg) => ({
    "@type": "Offer",
    name: `Pakiet ${pkg.name}`,
    description: pkg.description,
    priceCurrency: "PLN",
    price: pkg.price,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "PLN",
      minPrice: pkg.price,
      valueAddedTaxIncluded: false,
    },
    availability: "https://schema.org/InStock",
    url: absoluteUrl("/cennik"),
    seller: { "@id": ORG_ID },
  })),
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={offerCatalogSchema} />
      <JsonLd data={faqPageSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Cennik", url: absoluteUrl("/cennik") },
        ])}
      />

      <main>
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">Cennik</span>
          </nav>

          <div className="sec-label">
            <span className="num">Cennik</span>
            <span>Bez gwiazdek</span>
          </div>
          <h1 className="sec-title">
            Ile kosztuje strona, aplikacja i system <DisplayEm>w 2026</DisplayEm>.
          </h1>
          <p className="sec-lead" style={{ marginBottom: 32 }}>
            Strona firmowa kosztuje u mnie od 2 900 zł netto, aplikacja webowa i
            system na zamówienie — od 9 900 zł, opieka techniczna od 290 zł
            miesięcznie. Poniżej podaję realne widełki dla każdego typu wdrożenia
            oraz to, od czego zależy cena, żebyś mógł oszacować budżet jeszcze
            przed rozmową.
          </p>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Trzy pakiety startowe
          </h2>
          <div className="pricing">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`price${pkg.name === "Rozwój" ? " featured" : ""}`}
              >
                <span className="tag">{pkg.tag}</span>
                <h3>{pkg.name}</h3>
                <p className="desc">{pkg.description}</p>
                <div className="amount">
                  <span className="from">od</span>
                  {new Intl.NumberFormat("pl-PL").format(pkg.price)}
                  <span className="cur">zł</span>
                </div>
                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                  <li>Realizacja: {pkg.time}</li>
                </ul>
                <Link href="/kontakt" className="pbtn">
                  Zapytaj o wycenę
                </Link>
              </div>
            ))}
          </div>
          <p className="pricing-note">
            Wszystkie ceny netto. Zaliczka 50%, reszta po wdrożeniu. Wycena
            indywidualna ważna 14 dni.
          </p>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Widełki dla konkretnych wdrożeń
          </h2>
          <p className="prose-block">
            Pakiety pokrywają typowe przypadki. Poniżej realne przedziały cenowe
            dla wdrożeń, które robię najczęściej — razem z tym, co najbardziej
            wpływa na końcową kwotę.
          </p>
          <div style={{ overflowX: "auto", marginBottom: 48 }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Rodzaj wdrożenia</th>
                  <th>Widełki (netto)</th>
                  <th>Co najbardziej wpływa na cenę</th>
                </tr>
              </thead>
              <tbody>
                {ranges.map((row) => (
                  <tr key={row.what}>
                    <td>{row.what}</td>
                    <td>
                      <strong>{row.range}</strong>
                    </td>
                    <td>{row.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Pytania o cenę
          </h2>
          <div className="faq-list" style={{ maxWidth: 860, marginBottom: 64 }}>
            {faq.map((item) => (
              <div key={item.question} className="faq-item open">
                <h3 className="faq-q" style={{ cursor: "default" }}>
                  <span>{item.question}</span>
                </h3>
                <div className="faq-a">{item.answer}</div>
              </div>
            ))}
          </div>

          <div className="hero-actions" style={{ marginBottom: 96 }}>
            <Link href="/kontakt" className="btn-primary">
              Zamów bezpłatną wycenę
            </Link>
            <Link href="/proces" className="btn-ghost">
              Zobacz, jak wygląda współpraca
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
