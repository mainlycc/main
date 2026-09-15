import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Usługi: aplikacje, systemy i strony dla firm | Mainly",
  description:
    "Aplikacje webowe, systemy CRM na zamówienie, automatyzacja procesów, strony internetowe, platformy B2B i opieka techniczna. Wycena w 48 h.",
  alternates: { canonical: "/uslugi" },
  openGraph: {
    title: "Usługi | Mainly",
    description:
      "Aplikacje webowe, systemy na zamówienie, automatyzacja procesów i strony internetowe dla firm.",
    url: absoluteUrl("/uslugi"),
    type: "website",
    images: defaultOgImages("Usługi | Mainly"),
  },
};

export default function ServicesHubPage() {
  return (
    <>
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
            Aplikacje, systemy i strony <DisplayEm>na zamówienie</DisplayEm>.
          </h1>
          <p className="sec-lead">
            Sześć usług, jeden punkt kontaktu. Projekt, kod, wdrożenie i opieka —
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
