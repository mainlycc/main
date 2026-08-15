import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, ORG_ID } from "@/lib/schema";
import { absoluteUrl, SITE_URL } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

const title = "Kontakt i bezpłatna wycena strony lub aplikacji | Mainly";
const description =
  "Napisz, co chcesz usprawnić. Bezpłatna konsultacja 30 min, wycena w 48 h. Warszawa, ul. Filtrowa 83. Tel. +48 500 789 826, kontakt@mainly.pl";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt i bezpłatna wycena | Mainly",
    description:
      "Napisz do mnie i otrzymaj bezpłatną wycenę w 48 h. Aplikacje webowe, systemy i strony dla firm — Warszawa i cała Polska.",
    url: absoluteUrl("/kontakt"),
    type: "website",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt — Mainly",
  description,
  url: absoluteUrl("/kontakt"),
  mainEntity: { "@id": ORG_ID },
};

const contacts = [
  { label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  {
    label: "Telefon",
    value: BUSINESS.telephoneDisplay,
    href: `tel:${BUSINESS.telephone}`,
  },
  { label: "Biuro", value: `${BUSINESS.city}, Filtrowa 83` },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Kontakt", url: absoluteUrl("/kontakt") },
        ])}
      />

      <main className="kontakt-page">
        <div className="wrap kontakt-shell">
          <div className="kontakt-card">
            <aside className="kontakt-visual">
              <div className="kontakt-visual-glow" aria-hidden="true" />
              <div className="kontakt-visual-grain" aria-hidden="true" />
              <div className="kontakt-visual-inner">
                <div className="kontakt-eyebrow">
                  <span className="pulse" />
                  <span>Bezpłatna konsultacja · Odpowiedź do 24h</span>
                </div>
                <h1>
                  Porozmawiajmy o <DisplayEm>Twojej aplikacji</DisplayEm>.
                </h1>
                <p className="kontakt-visual-lead">
                  Opowiedz mi, co chcesz usprawnić w swojej firmie. Nie musisz
                  wiedzieć, jakiego systemu potrzebujesz — wystarczy, że opiszesz
                  problem.
                </p>

                <div className="kontakt-contacts">
                  {contacts.map(({ label, value, href }) => (
                    <div key={label} className="cta-contact">
                      <span className="k">{label}</span>
                      <span className="v">
                        {href ? <Link href={href}>{value}</Link> : value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
