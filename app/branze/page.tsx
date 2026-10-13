import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import JsonLd from "@/components/seo/JsonLd";
import { industries } from "@/lib/industries";
import {
  breadcrumbSchema,
  faqPageSchema,
  itemListSchema,
  webPageSchema,
} from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Rozwiązania dla branż — strony i systemy | Mainly",
  description:
    "Strony i systemy dla biur rachunkowych, gabinetów, kancelarii, biur podróży, klubów sportowych, firm leasingowych, producentów i szkół. Z przykładami wdrożeń.",
  alternates: { canonical: "/branze" },
  openGraph: {
    title: "Rozwiązania dla branż | Mainly",
    description:
      "Co konkretnie buduję dla firm z Twojej branży — z przykładami wdrożeń.",
    url: absoluteUrl("/branze"),
    type: "website",
    images: defaultOgImages("Rozwiązania dla branż | Mainly"),
  },
};

const buildingBlocks = [
  {
    title: "Rezerwacje i zapisy online",
    body: "Klient sam wybiera termin albo miejsce, płaci zaliczkę i dostaje przypomnienie. Recepcja przestaje odbierać telefony o wolne terminy.",
    industries: ["gabinety-stomatologiczne", "biura-podrozy", "kluby-i-akademie-sportowe", "szkoly-i-edukacja"],
  },
  {
    title: "Panel klienta i wymiana dokumentów",
    body: "Dokumenty, statusy spraw i terminy w jednym miejscu zamiast w wątkach mailowych z załącznikami.",
    industries: ["biura-rachunkowe", "kancelarie-prawne", "leasing-i-finanse"],
  },
  {
    title: "Kalkulatory, konfiguratory i wnioski online",
    body: "Klient sam liczy ratę albo składa produkt z opcji, a do handlowca trafia gotowe, kompletne zapytanie.",
    industries: ["leasing-i-finanse", "producenci-i-przemysl"],
  },
  {
    title: "Płatności, składki i obecności",
    body: "Opłaty rejestrowane automatycznie zamiast ręcznego sprawdzania przelewów i prowadzenia list w arkuszu.",
    industries: ["kluby-i-akademie-sportowe", "szkoly-i-edukacja", "biura-podrozy"],
  },
];

const faq = [
  {
    question: "Czy muszę mieć branżę z tej listy, żeby współpracować?",
    answer:
      "Nie. Lista pokazuje branże, w których mam wdrożenia do pokazania. Procesy — zapisy, obieg dokumentów, rozliczenia, panel klienta — powtarzają się między branżami, więc najczęściej mam za sobą podobne rozwiązanie, nawet jeśli dla innego rodzaju firmy.",
  },
  {
    question: "Czy rozwiązanie dla mojej branży jest gotowym produktem?",
    answer:
      "Nie sprzedaję gotowego oprogramowania branżowego. Każde wdrożenie budowane jest pod proces konkretnej firmy, ale doświadczenie z poprzednich projektów w tej samej branży skraca analizę i pozwala uniknąć błędów, które już raz rozwiązywałem.",
  },
  {
    question: "Ile kosztuje system lub strona dla firmy z mojej branży?",
    answer:
      "Strona firmowa zaczyna się od 2 900 zł netto, aplikacja albo system na zamówienie od 9 900 zł netto. Konkretną wycenę z harmonogramem przygotowuję w 48 godzin po bezpłatnej konsultacji.",
  },
];

function industryLabel(slug: string) {
  return industries.find((industry) => industry.slug === slug)?.navLabel ?? slug;
}

export default function IndustriesHubPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/branze",
          name: String(metadata.title),
          description: String(metadata.description),
          type: "CollectionPage",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Branże", url: absoluteUrl("/branze") },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          "Branże obsługiwane przez Mainly",
          industries.map((industry) => ({
            name: industry.navLabel,
            url: absoluteUrl(`/branze/${industry.slug}`),
          }))
        )}
      />

      <JsonLd data={faqPageSchema(faq)} />

      <main id="main">
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">Branże</span>
          </nav>

          <div className="sec-label">
            <span className="num">Branże</span>
            <span>Dla kogo pracuję</span>
          </div>
          <h1 className="sec-title">
            Rozwiązania dopasowane do <DisplayEm>Twojej branży</DisplayEm>.
          </h1>
          <p className="sec-lead">
            Biuro rachunkowe potrzebuje czegoś innego niż akademia piłkarska, a
            producent grzejników czegoś innego niż kancelaria. Poniżej opisuję,
            co konkretnie buduję dla firm z każdej z tych branż — z przykładami
            wdrożeń, które działają na żywo.
          </p>

          <div className="link-cards">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/branze/${industry.slug}`}
                className="link-card"
              >
                <h2>{industry.navLabel}</h2>
                <p>{industry.teaser}</p>
                <span className="arr">Zobacz rozwiązania ↗</span>
              </Link>
            ))}
          </div>

        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Co powtarza się między branżami
          </h2>
          <p className="prose-block">
            Gabinet, biuro podróży i akademia piłkarska wyglądają na zupełnie
            różne biznesy, ale problemy, z którymi do mnie przychodzą, układają
            się w kilka powtarzalnych wzorców. Dlatego doświadczenie z jednej
            branży przenosi się na kolejne.
          </p>
          <ul className="checklist">
            {buildingBlocks.map((block) => (
              <li key={block.title}>
                <strong>{block.title}.</strong> {block.body} Wdrażam to m.in.
                dla:{" "}
                {block.industries.map((slug, index) => (
                  <span key={slug}>
                    {index > 0 && ", "}
                    <Link href={`/branze/${slug}`} className="inline-link">
                      {industryLabel(slug).toLowerCase()}
                    </Link>
                  </span>
                ))}
                .
              </li>
            ))}
          </ul>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Strona, aplikacja czy system?
          </h2>
          <p className="prose-block">
            W każdej z tych branż pracuję na trzech poziomach. Najczęściej
            zaczyna się od{" "}
            <Link href="/uslugi/strony-internetowe" className="inline-link">
              strony internetowej
            </Link>
            , która ma przynosić zapytania. Gdy klienci mają coś załatwiać
            sami — zapisać się, zapłacić, pobrać dokument — potrzebna jest{" "}
            <Link href="/uslugi/aplikacje-webowe" className="inline-link">
              aplikacja webowa
            </Link>
            . A gdy problem leży wewnątrz firmy, w ręcznym przepisywaniu danych
            i arkuszach, rozwiązaniem jest{" "}
            <Link href="/uslugi/systemy-dla-firm" className="inline-link">
              system na zamówienie
            </Link>{" "}
            albo pojedyncza{" "}
            <Link href="/uslugi/automatyzacja-procesow" className="inline-link">
              automatyzacja
            </Link>
            . Przykłady działających wdrożeń znajdziesz w{" "}
            <Link href="/projekty" className="inline-link">
              portfolio
            </Link>
            .
          </p>
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
                <div className="faq-a">{item.answer}</div>
              </div>
            ))}
          </div>

          <RelatedArticles
            keywords={["dentyst", "producent", "Excel", "firm"]}
            maxArticles={4}
          />
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Nie ma tu Twojej branży?
          </h2>
          <p className="prose-block">
            Powyższe osiem to branże, w których mam wdrożenia i mogę pokazać
            konkretne efekty. Nie znaczy to, że pracuję tylko z nimi — procesy
            biznesowe powtarzają się między branżami dużo częściej, niż się
            wydaje. Obieg dokumentów w kancelarii i w firmie transportowej
            wygląda podobnie, a system rezerwacji dla gabinetu niewiele różni
            się od systemu dla warsztatu. Opisz swój proces, a powiem, czy mam
            już podobne wdrożenie za sobą.
          </p>

          <div className="hero-actions" style={{ marginBottom: 96 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów rozmowę
            </Link>
            <Link href="/uslugi" className="btn-ghost">
              Zobacz zakres usług
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
