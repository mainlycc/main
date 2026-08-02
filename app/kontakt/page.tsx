import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import DisplayEm from "../../components/DisplayEm";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt i bezpłatna wycena strony | Mainly",
  description:
    "Skontaktuj się z nami. Bezpłatna wycena projektu w ciągu 24h. Warszawa, ul. Filtrowa 83. Tel: +48 500 789 826. Email: kontakt@mainly.pl",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Mainly",
    description:
      "Napisz do nas i otrzymaj bezpłatną wycenę w 24h. Tworzymy strony i aplikacje webowe w Warszawie.",
    url: "https://mainly.pl/kontakt",
    type: "website",
  },
};

const contacts = [
  {
    label: "Email",
    value: "kontakt@mainly.pl",
    href: "mailto:kontakt@mainly.pl",
  },
  {
    label: "Telefon",
    value: "+48 500 789 826",
    href: "tel:+48500789826",
  },
  {
    label: "Biuro",
    value: "Warszawa, Filtrowa 83",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="kontakt-page">
        <div className="wrap kontakt-shell">
          <div className="kontakt-card">
            <aside className="kontakt-visual">
              <div className="kontakt-visual-glow" aria-hidden="true" />
              <div className="kontakt-visual-grain" aria-hidden="true" />
              <div className="kontakt-visual-inner">
                <div className="kontakt-eyebrow">
                  <span className="pulse" />
                  <span>Bezpłatna konsultacja · 24h</span>
                </div>
                <h1>
                  Porozmawiajmy o <DisplayEm>Twoim projekcie</DisplayEm>.
                </h1>
                <p className="kontakt-visual-lead">
                  Masz pytania albo chcesz ruszyć z projektem? Napisz — bez
                  zobowiązań.
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
