import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { industries } from "@/lib/industries";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Rozwiązania dla branż — strony i systemy | Mainly",
  description:
    "Strony i systemy dla biur rachunkowych, gabinetów, kancelarii, biur podróży, klubów sportowych, firm leasingowych, producentów i szkół. 9 branż, 36 wdrożeń.",
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

export default function IndustriesHubPage() {
  return (
    <>
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

      <main>
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
              Opisz swój proces
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
