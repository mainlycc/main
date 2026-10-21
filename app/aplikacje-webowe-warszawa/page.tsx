import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema, ORG_ID, webPageSchema, type FaqEntry } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, PRICE_GUIDE_LINK, SITE_URL } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

const PATH = "/aplikacje-webowe-warszawa";

export const metadata: Metadata = {
  title: "Aplikacje webowe i internetowe Warszawa | Mainly",
  description:
    "Aplikacje webowe i systemy na zamówienie dla firm z Warszawy. Warsztat procesu u Ciebie w firmie, kod w Next.js, bez podwykonawców. Od 9 900 zł.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Aplikacje webowe i internetowe Warszawa | Mainly",
    description:
      "Aplikacje webowe i systemy na zamówienie dla warszawskich firm. Warsztat na miejscu, jeden punkt kontaktu.",
    url: absoluteUrl(PATH),
    type: "website",
    images: defaultOgImages("Aplikacje webowe i internetowe Warszawa | Mainly"),
  },
};

const appTypes = [
  {
    title: "Panel klienta",
    text: "Klient sam sprawdza status zamówienia, pobiera dokumenty i płaci online, zamiast dzwonić do biura.",
    href: "/uslugi/aplikacje-webowe",
  },
  {
    title: "System rezerwacji i grafików",
    text: "Terminy, dostępność ludzi i rozliczenia w jednym miejscu. Tak działa system Akademii Wiedzy dla 40 korepetytorów.",
    href: "/projekty/akademia-wiedzy",
  },
  {
    title: "CRM i narzędzia wewnętrzne",
    text: "System zbudowany pod Twój proces sprzedaży lub obsługi, bez opłaty za każde konto użytkownika.",
    href: "/uslugi/systemy-dla-firm",
  },
  {
    title: "Platforma szkoleniowa",
    text: "Kursy, testy i raporty z audytem, jak w platformie AIRSET dla personelu lotniczego.",
    href: "/projekty/airset-platforma",
  },
  {
    title: "Generator ofert i kalkulator",
    text: "Handlowiec ustawia parametry, a system liczy cenę i składa gotowy PDF. Tak działa narzędzie Rolety3miasto.",
    href: "/projekty/generator-ofert-rolety",
  },
  {
    title: "Automatyzacja między systemami",
    text: "Gdy wystarczy połączyć Excela, pocztę i program księgowy, zamiast budować nową aplikację.",
    href: "/uslugi/automatyzacja-procesow",
  },
];

const faq: FaqEntry[] = [
  {
    question: "Ile kosztuje aplikacja webowa w Warszawie?",
    answer:
      "Ceny nie zależą od miasta. Aplikacje i systemy zaczynają się od 9 900 zł netto, a spotkanie na miejscu w Warszawie nie zmienia wyceny.",
    link: PRICE_GUIDE_LINK,
  },
  {
    question: "Czy warsztat na miejscu jest płatny?",
    answer:
      "Pierwsza konsultacja jest bezpłatna, także na żywo w Warszawie. Warsztat mapowania procesu przy większym wdrożeniu jest częścią projektu i jest wliczony w wycenę.",
  },
  {
    question: "Ile trwa budowa aplikacji webowej?",
    answer:
      "Prosta aplikacja to zwykle 6–8 tygodni, rozbudowany system 3–5 miesięcy. Harmonogram z kamieniami milowymi ustalamy przed startem, a postęp widzisz co tydzień na wersji testowej.",
  },
  {
    question: "Czy robisz też aplikacje na telefon?",
    answer:
      "Aplikacje, które buduję, działają w przeglądarce, więc otwierają się na komputerze, tablecie i telefonie bez instalacji. Nie buduję natywnych aplikacji do App Store i Google Play.",
  },
  {
    question: "Pracujesz tylko z firmami z Warszawy?",
    answer:
      "Nie. Z firmami z całej Polski pracuję zdalnie. Warszawa ma znaczenie wtedy, gdy zależy Ci na warsztacie u siebie w firmie i szkoleniu zespołu na miejscu.",
  },
];

export default function WarsawAppsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: String(metadata.title),
          description: String(metadata.description),
        })}
      />
      <JsonLd data={faqPageSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Aplikacje webowe Warszawa", url: absoluteUrl(PATH) },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Aplikacje webowe na zamówienie w Warszawie",
          serviceType: "Tworzenie aplikacji webowych",
          url: absoluteUrl(PATH),
          provider: { "@id": ORG_ID },
          areaServed: {
            "@type": "City",
            name: "Warszawa",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Warszawa",
              addressRegion: BUSINESS.region,
              addressCountry: "PL",
            },
          },
        }}
      />

      <main id="main">
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">Aplikacje webowe Warszawa</span>
          </nav>

          <div className="sec-label">
            <span className="num">Warszawa</span>
            <span>Aplikacje i systemy</span>
          </div>
          <h1 className="sec-title">
            Aplikacje webowe na zamówienie <DisplayEm>w Warszawie</DisplayEm>.
          </h1>
          <p className="sec-lead" style={{ marginBottom: 32 }}>
            Buduję aplikacje internetowe i systemy dla firm z Warszawy: panele
            klienta, systemy rezerwacji, CRM-y i narzędzia wewnętrzne. Biuro mam
            na Filtrowej 83 na Ochocie, więc zanim napiszę pierwszą linię kodu,
            mogę przyjechać i zobaczyć, jak Twój zespół naprawdę pracuje. Projekt,
            kod, wdrożenie i opiekę prowadzę sam, bez podwykonawców.
          </p>

          <div className="hero-actions" style={{ marginBottom: 24 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów rozmowę
            </Link>
            <Link href="/uslugi/aplikacje-webowe" className="btn-ghost">
              Zakres i ceny aplikacji
            </Link>
          </div>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Dlaczego przy aplikacji warto spotkać się na miejscu
          </h2>
          <p className="prose-block">
            Przy stronie internetowej lokalizacja wykonawcy prawie nie ma
            znaczenia. Przy aplikacji jest inaczej, bo aplikacja odwzorowuje
            proces, a procesy rzadko wyglądają tak, jak opisuje je ktoś na
            wideorozmowie. Wyjątki, skróty i „u nas to się robi tak” wychodzą
            dopiero wtedy, gdy siedzi się obok osoby, która codziennie wypełnia
            ten sam arkusz. Godzina przy jej biurku potrafi zmienić zakres
            projektu bardziej niż tydzień korespondencji.
          </p>
          <ul className="checklist">
            <li>
              Warsztat mapowania procesu u Ciebie w firmie: kto, co, kiedy i w
              jakim programie robi dziś ręcznie
            </li>
            <li>
              Rozmowa z osobami, które będą używać aplikacji, a nie tylko z
              osobą, która ją zamawia
            </li>
            <li>
              Szkolenie zespołu na miejscu po wdrożeniu, na sprzęcie, na którym
              faktycznie pracuje
            </li>
            <li>Umowa po polsku, faktura VAT, rozliczenie w złotówkach</li>
          </ul>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Jakie aplikacje buduję
          </h2>
          <p className="prose-block">
            Wspólny mianownik: każda z nich zastępuje arkusz, telefon albo
            ręczne przepisywanie danych, które przestały się skalować.
          </p>
          <div className="link-cards">
            {appTypes.map((item) => (
              <Link key={item.title} href={item.href} className="link-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="arr">Zobacz ↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Jak wygląda wdrożenie
          </h2>
          <ul className="checklist">
            <li>
              <strong>Konsultacja</strong> (bezpłatna, online albo w Warszawie)
              — opisujesz problem, a ja mówię, czy potrzebujesz aplikacji, czy
              wystarczy gotowe narzędzie lub jedna automatyzacja.
            </li>
            <li>
              <strong>Wycena w 48 h</strong> — zakres, cena i harmonogram z
              kamieniami milowymi.
            </li>
            <li>
              <strong>Warsztat i projekt</strong> — mapowanie procesu na
              miejscu, potem projekt interfejsu w Figmie z dwiema rundami
              poprawek.
            </li>
            <li>
              <strong>Kod i wdrożenie</strong> — Next.js, React i TypeScript,
              postęp co tydzień na wersji testowej, migracja danych z arkuszy.
            </li>
            <li>
              <strong>Start i opieka</strong> — szkolenie zespołu, 14 dni
              poprawek w cenie, potem opcjonalna{" "}
              <Link href="/uslugi/opieka-techniczna" className="inline-link">
                opieka techniczna
              </Link>
              .
            </li>
          </ul>
          <p className="prose-block">
            Szczegóły każdego etapu opisuję na stronie{" "}
            <Link href="/proces" className="inline-link">
              procesu współpracy
            </Link>
            , a widełki cenowe są w{" "}
            <Link href="/cennik" className="inline-link">
              cenniku
            </Link>
            . Szukasz strony firmowej, a nie aplikacji? Zobacz{" "}
            <Link
              href="/tworzenie-stron-internetowych-warszawa"
              className="inline-link"
            >
              tworzenie stron internetowych w Warszawie
            </Link>
            .
          </p>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Kontakt
          </h2>
          <p className="prose-block">
            <strong>Mainly</strong>
            <br />
            {BUSINESS.street}
            <br />
            {BUSINESS.postalCode} {BUSINESS.city}
            <br />
            NIP: {BUSINESS.taxID}
          </p>
          <p className="prose-block">
            <Link href={`tel:${BUSINESS.telephone}`} className="inline-link">
              {BUSINESS.telephoneDisplay}
            </Link>
            {" · "}
            <Link href={`mailto:${BUSINESS.email}`} className="inline-link">
              {BUSINESS.email}
            </Link>
          </p>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Pytania
          </h2>
          <div className="faq-list" style={{ maxWidth: 860, marginBottom: 64 }}>
            {faq.map((item) => (
              <div key={item.question} className="faq-item open">
                <h3 className="faq-q" style={{ cursor: "default" }}>
                  <span>{item.question}</span>
                </h3>
                <div className="faq-a">
                  {item.answer}
                  {item.link ? (
                    <>
                      {" "}
                      <Link href={item.link.href} className="inline-link">
                        {item.link.label}
                      </Link>
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="hero-actions" style={{ marginBottom: 96 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów rozmowę
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
