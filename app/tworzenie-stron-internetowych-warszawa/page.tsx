import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema, ORG_ID } from "@/lib/schema";
import { absoluteUrl, SITE_URL } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tworzenie stron internetowych Warszawa | Mainly",
  description:
    "Strony internetowe i aplikacje webowe dla firm z Warszawy. Biuro na Filtrowej, spotkania na żywo, kod bez szablonów. Od 2 900 zł, wycena w 48 h.",
  alternates: { canonical: "/tworzenie-stron-internetowych-warszawa" },
  openGraph: {
    title: "Tworzenie stron internetowych Warszawa | Mainly",
    description:
      "Strony i aplikacje webowe dla warszawskich firm. Spotkania na żywo, jeden punkt kontaktu.",
    url: absoluteUrl("/tworzenie-stron-internetowych-warszawa"),
    type: "website",
  },
};

const faq = [
  {
    question: "Czy spotykasz się z klientami w Warszawie?",
    answer:
      "Tak. Biuro mam na Filtrowej 83 na Ochocie i chętnie spotykam się na żywo — szczególnie przy większych wdrożeniach, gdzie warsztat na miejscu daje więcej niż rozmowa online. Przy mniejszych projektach zwykle wystarczy spotkanie zdalne.",
  },
  {
    question: "Pracujesz tylko z firmami z Warszawy?",
    answer:
      "Nie. Warszawa to moja baza, ale realizuję projekty dla firm z całej Polski — cała współpraca może odbywać się zdalnie. Lokalizacja ma znaczenie głównie wtedy, gdy zależy Ci na spotkaniach na żywo.",
  },
  {
    question: "Ile kosztuje strona internetowa w Warszawie?",
    answer:
      "Ceny nie zależą od miasta. Strona firmowa zaczyna się u mnie od 2 900 zł netto, strona z blogiem i integracjami od 4 900 zł, aplikacje i systemy od 9 900 zł. Pełne widełki są na stronie cennika.",
  },
  {
    question: "Jak szybko możesz zacząć?",
    answer:
      "Zależy od aktualnego obłożenia. Zwykle jestem w stanie zacząć projekt w ciągu 1–3 tygodni od akceptacji wyceny. Aktualną dostępność potwierdzam na bezpłatnej konsultacji.",
  },
];

export default function WarsawPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          {
            name: "Tworzenie stron internetowych Warszawa",
            url: absoluteUrl("/tworzenie-stron-internetowych-warszawa"),
          },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tworzenie stron internetowych w Warszawie",
          serviceType: "Tworzenie stron internetowych",
          url: absoluteUrl("/tworzenie-stron-internetowych-warszawa"),
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

      <main>
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">Warszawa</span>
          </nav>

          <div className="sec-label">
            <span className="num">Warszawa</span>
            <span>Współpraca lokalna</span>
          </div>
          <h1 className="sec-title">
            Tworzenie stron internetowych <DisplayEm>w Warszawie</DisplayEm>.
          </h1>
          <p className="sec-lead" style={{ marginBottom: 32 }}>
            Projektuję i koduję strony internetowe oraz aplikacje webowe dla firm
            z Warszawy. Biuro mam na Filtrowej 83 na Ochocie, więc przy większych
            wdrożeniach możemy spotkać się na żywo zamiast rozmawiać przez
            ekran. Strony buduję bez szablonów — w Next.js, z pełnym SEO
            technicznym i czasem ładowania poniżej sekundy.
          </p>

          <div className="hero-actions" style={{ marginBottom: 24 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów spotkanie
            </Link>
            <Link href="/cennik" className="btn-ghost">
              Zobacz cennik
            </Link>
          </div>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Co daje współpraca z kimś na miejscu
          </h2>
          <p className="prose-block">
            Przy stronie wizytówkowej lokalizacja nie ma większego znaczenia —
            cała współpraca spokojnie może toczyć się zdalnie. Robi się istotna
            przy wdrożeniach, w których trzeba zobaczyć proces na własne oczy:
            magazyn, recepcję, obieg dokumentów, sposób pracy zespołu. Godzina
            warsztatu na miejscu potrafi wtedy oszczędzić tydzień domysłów.
          </p>
          <ul className="checklist">
            <li>Warsztat u Ciebie w firmie zamiast wideorozmowy z opisem</li>
            <li>
              Szkolenie zespołu na miejscu po wdrożeniu, na sprzęcie, na którym
              faktycznie pracują
            </li>
            <li>Ta sama strefa czasowa, ten sam kalendarz świąt, ten sam kontekst rynkowy</li>
            <li>Faktura VAT, umowa po polsku, rozliczenie w złotówkach</li>
          </ul>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Co buduję dla warszawskich firm
          </h2>
          <div className="link-cards">
            <Link href="/uslugi/strony-internetowe" className="link-card">
              <h3>Strony internetowe</h3>
              <p>
                Strony firmowe i landing page kodowane w Next.js. Od 2 900 zł,
                realizacja 1–4 tygodnie.
              </p>
              <span className="arr">Zobacz ↗</span>
            </Link>
            <Link href="/uslugi/aplikacje-webowe" className="link-card">
              <h3>Aplikacje webowe</h3>
              <p>
                Aplikacje szyte pod proces firmy — panele klienta, systemy
                rezerwacji, platformy.
              </p>
              <span className="arr">Zobacz ↗</span>
            </Link>
            <Link href="/uslugi/systemy-dla-firm" className="link-card">
              <h3>Systemy i CRM</h3>
              <p>
                Narzędzia wewnętrzne zamiast abonamentu, który nie pasuje do
                Twojego procesu.
              </p>
              <span className="arr">Zobacz ↗</span>
            </Link>
          </div>
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
                <div className="faq-a">{item.answer}</div>
              </div>
            ))}
          </div>
          <div className="hero-actions" style={{ marginBottom: 96 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów bezpłatną konsultację
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
