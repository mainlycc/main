import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import JsonLd from "@/components/seo/JsonLd";
import { processSteps } from "@/lib/home-content";
import {
  breadcrumbSchema,
  faqPageSchema,
  itemListSchema,
  webPageSchema,
  type FaqEntry,
} from "@/lib/schema";
import { absoluteUrl, defaultOgImages, PRICE_GUIDE_LINK, SITE_URL } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Oprogramowanie na zamówienie dla firm | Mainly",
  description:
    "Oprogramowanie na zamówienie dla firm: aplikacje webowe, systemy i CRM, automatyzacje, strony i platformy B2B. Bez podwykonawców. Wycena w 48 h.",
  alternates: { canonical: "/uslugi" },
  openGraph: {
    title: "Oprogramowanie na zamówienie dla firm | Mainly",
    description:
      "Aplikacje webowe, systemy, automatyzacja procesów i strony internetowe pisane pod proces Twojej firmy.",
    url: absoluteUrl("/uslugi"),
    type: "website",
    images: defaultOgImages("Oprogramowanie na zamówienie dla firm | Mainly"),
  },
};

const problemToService = [
  {
    problem: "Zespół przepisuje dane między Excelem, mailem i programem księgowym",
    slug: "automatyzacja-procesow",
    label: "Automatyzacja procesów",
    note: "Często wystarczy jedno połączenie między istniejącymi narzędziami, bez budowy nowego systemu.",
  },
  {
    problem: "Gotowy CRM wymusza zmianę procesu, który u Ciebie działa",
    slug: "systemy-dla-firm",
    label: "Systemy i CRM",
    note: "Narzędzie wewnętrzne zbudowane pod to, jak już pracujecie — bez opłaty za każdego użytkownika.",
  },
  {
    problem: "Klienci dzwonią o rzeczy, które mogliby załatwić sami online",
    slug: "aplikacje-webowe",
    label: "Aplikacje webowe",
    note: "Panel klienta, zapisy, płatności albo kalkulator — aplikacja, z której korzysta Twój klient.",
  },
  {
    problem: "Strona wygląda dobrze, ale nie przynosi zapytań",
    slug: "strony-internetowe",
    label: "Strony internetowe",
    note: "Szybka strona kodowana od zera, zbudowana pod SEO i pozyskiwanie kontaktów.",
  },
  {
    problem: "Kontrahenci hurtowi zamawiają telefonicznie i mailowo",
    slug: "sklepy-i-platformy-b2b",
    label: "Platformy B2B i sklepy",
    note: "Indywidualne cenniki, limity kredytowe i historia zamówień w jednym panelu.",
  },
  {
    problem: "Nikt nie pilnuje strony ani aplikacji po wdrożeniu",
    slug: "opieka-techniczna",
    label: "Opieka techniczna",
    note: "Monitoring, kopie zapasowe i aktualizacje, zanim problem zauważy klient.",
  },
];

const timelines: Record<string, string> = {
  "strony-internetowe": "realizacja 1–4 tygodnie",
  "aplikacje-webowe": "6–8 tygodni, rozbudowane 3–5 miesięcy",
  "systemy-dla-firm": "od 6 tygodni, rozbudowane 3–5 miesięcy",
  "opieka-techniczna": "bez umowy na czas określony",
};

const faq: FaqEntry[] = [
  {
    question: "Ile kosztuje oprogramowanie na zamówienie?",
    answer:
      "Zależy od zakresu. Pojedyncza automatyzacja zaczyna się od 2 900 zł netto, aplikacja webowa lub system od 9 900 zł. Wycenę z harmonogramem dostajesz w 48 h po konsultacji.",
    link: PRICE_GUIDE_LINK,
  },
  {
    question: "Kiedy oprogramowanie na zamówienie się opłaca, a kiedy lepszy jest gotowy program?",
    answer:
      "Gotowy program wystarcza, gdy Twój proces jest standardowy, a abonament nie rośnie szybciej niż firma. Oprogramowanie na zamówienie zaczyna się opłacać, gdy gotowe narzędzie wymusza obchodzenie procesu, ręczna praca kosztuje więcej niż jednorazowe wdrożenie albo płacisz za dziesiątki kont, z których każde używa ułamka funkcji. Jeśli gotowe narzędzie wystarczy, powiem Ci to na konsultacji.",
  },
  {
    question: "Czy pracujesz sam, czy z zespołem podwykonawców?",
    answer:
      "Sam. Projekt interfejsu, kod, wdrożenie i opiekę prowadzę osobiście, więc rozmawiasz z osobą, która faktycznie pisze kod. Nie przekazuję projektów podwykonawcom.",
  },
  {
    question: "Od czego zacząć, jeśli nie wiem, której usługi potrzebuję?",
    answer:
      "Od bezpłatnej konsultacji. Opisujesz problem, a ja proponuję najtańsze rozwiązanie, które go załatwia — czasem to system na zamówienie, a czasem jedna automatyzacja albo gotowe narzędzie, które wystarczy skonfigurować.",
  },
  {
    question: "Jak szybko dostanę wycenę?",
    answer:
      "Wycenę z zakresem i harmonogramem przygotowuję w ciągu 48 godzin od konsultacji. Nowe funkcje, które pojawią się w trakcie projektu, wyceniam osobno, zanim zaczniemy je robić.",
  },
  {
    question: "Czy po wdrożeniu kod należy do mnie?",
    answer:
      "Tak. Po opłaceniu ostatniej faktury przekazuję pełne prawa do kodu i repozytorium. Możesz rozwijać projekt samodzielnie, z innym wykonawcą albo zostać u mnie w ramach opieki technicznej.",
  },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("pl-PL").format(value);
}

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/uslugi",
          name: String(metadata.title),
          description: String(metadata.description),
          type: "CollectionPage",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Usługi", url: absoluteUrl("/uslugi") },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          "Usługi Mainly",
          services.map((service) => ({
            name: service.navLabel,
            url: absoluteUrl(`/uslugi/${service.slug}`),
          }))
        )}
      />

      <JsonLd data={faqPageSchema(faq)} />

      <main id="main">
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">Usługi</span>
          </nav>

          <div className="sec-label">
            <span className="num">Usługi</span>
            <span>Co robię</span>
          </div>
          <h1 className="sec-title">
            Oprogramowanie <DisplayEm>na zamówienie</DisplayEm> dla firm.
          </h1>
          <p className="sec-lead">
            Aplikacje webowe, systemy, automatyzacje i strony pisane pod
            proces Twojej firmy. Sześć usług, jeden punkt kontaktu. Projekt,
            kod, wdrożenie i opieka —
            wszystko po mojej stronie, bez podwykonawców. Nie wiesz, która
            usługa odpowiada Twojemu problemowi? Opisz go w{" "}
            <Link href="/kontakt" className="inline-link">
              formularzu
            </Link>{" "}
            — dobiorę zakres i powiem, ile to kosztuje.
          </p>

          <div className="link-cards">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/uslugi/${service.slug}`}
                className="link-card"
              >
                <h2>{service.navLabel}</h2>
                <p>{service.teaser}</p>
                <span className="arr">
                  {service.priceFrom
                    ? `Od ${new Intl.NumberFormat("pl-PL").format(service.priceFrom)} zł ↗`
                    : "Zobacz ↗"}
                </span>
              </Link>
            ))}
          </div>

        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Która usługa rozwiąże Twój problem
          </h2>
          <p className="prose-block">
            Klienci rzadko przychodzą z gotową specyfikacją — przychodzą z
            objawem. Poniżej najczęstsze objawy i usługa, od której zwykle
            zaczynamy rozmowę.
          </p>
          <div className="link-cards">
            {problemToService.map((item) => (
              <Link
                key={item.slug}
                href={`/uslugi/${item.slug}`}
                className="link-card"
              >
                <h3>„{item.problem}”</h3>
                <p>{item.note}</p>
                <span className="arr">{item.label} ↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Ile to kosztuje i ile trwa
          </h2>
          <p className="prose-block">
            Ceny netto, od których zaczyna się każda usługa. Dokładna kwota
            zależy od liczby ról użytkowników, integracji i zakresu treści —
            wycenę z harmonogramem dostajesz po konsultacji. Pełne widełki i
            pakiety są na stronie{" "}
            <Link href="/cennik" className="inline-link">
              cennika
            </Link>
            .
          </p>
          <ul className="checklist">
            {services.map((service) => (
              <li key={service.slug}>
                <strong>
                  <Link href={`/uslugi/${service.slug}`} className="inline-link">
                    {service.navLabel}
                  </Link>
                </strong>
                {service.priceFrom
                  ? ` — od ${formatPrice(service.priceFrom)} zł${
                      service.slug === "opieka-techniczna" ? " miesięcznie" : ""
                    }`
                  : ""}
                {timelines[service.slug] ? `, ${timelines[service.slug]}` : ""}
              </li>
            ))}
          </ul>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Jak wygląda współpraca
          </h2>
          <p className="prose-block">
            Niezależnie od usługi proces ma te same cztery etapy, a każdy
            kończy się Twoją akceptacją, zanim przejdziemy dalej. Szczegóły
            opisuję na stronie{" "}
            <Link href="/proces" className="inline-link">
              procesu współpracy
            </Link>
            .
          </p>
          <ul className="checklist">
            {processSteps.map((step) => (
              <li key={step.num}>
                <strong>{step.title}</strong> ({step.duration}) —{" "}
                {step.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Najczęstsze pytania
          </h2>
          <div className="faq-list" style={{ maxWidth: 860, marginBottom: 32 }}>
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

          <RelatedArticles
            keywords={["aplikac", "system", "CRM", "Excel", "zamówienie"]}
            maxArticles={4}
          />
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Nie wiesz, czego potrzebujesz?
          </h2>
          <p className="prose-block">
            To najczęstsza sytuacja i zupełnie normalna. Klienci rzadko
            przychodzą z gotową specyfikacją — przychodzą z problemem: „za dużo
            ręcznej pracy”, „klienci dzwonią o rzeczy, które mogliby sprawdzić
            sami”, „nie wiem, ile realnie zarabiamy na projekcie”. Na bezpłatnej
            konsultacji rozkładamy problem na części i dobieramy najtańsze
            rozwiązanie, które go załatwia. Czasem to system za kilkadziesiąt
            tysięcy, a czasem jedna automatyzacja za kilka.
          </p>

          <div className="hero-actions" style={{ marginBottom: 96 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów rozmowę
            </Link>
            <Link href="/branze" className="btn-ghost">
              Zobacz rozwiązania dla branż
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
