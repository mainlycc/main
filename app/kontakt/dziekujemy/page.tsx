import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dziękuję za wiadomość | Mainly",
  description:
    "Twoje zapytanie dotarło. Odpowiadam w ciągu 24 godzin w dni robocze.",
  // Strona techniczna — nie ma wartości w wynikach wyszukiwania,
  // ale jej URL jest niezbędny do mierzenia konwersji w GA4.
  robots: { index: false, follow: true },
};

const steps = [
  "Odpisuję na e-mail w ciągu 24 h w dni robocze — zwykle tego samego dnia.",
  "Umawiamy bezpłatną rozmowę online (30 minut), na której doprecyzowujemy zakres.",
  "Dostajesz wycenę z harmonogramem w ciągu 48 h od rozmowy. Wycena jest ważna 14 dni.",
];

export default function ThankYouPage() {
  return (
    <>
      <main id="main">
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <Link href="/kontakt">Kontakt</Link>
            <span className="sep">/</span>
            <span aria-current="page">Dziękuję</span>
          </nav>

          <h1 className="sec-title">
            Mam Twoją wiadomość. <DisplayEm>Do usłyszenia.</DisplayEm>
          </h1>
          <p className="sec-lead" style={{ marginBottom: 8 }}>
            Na Twój adres poszło potwierdzenie. Jeśli nie dotarło w ciągu
            kilkunastu minut, sprawdź folder ze spamem.
          </p>

          <h2 className="sec-title" style={{ fontSize: 28, marginTop: 48 }}>
            Co się stanie dalej
          </h2>
          <ol className="thanks-steps">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <p className="prose-block">
            Sprawa jest pilna? Zadzwoń bezpośrednio:{" "}
            <Link href={`tel:${BUSINESS.telephone}`} className="inline-link">
              {BUSINESS.telephoneDisplay}
            </Link>
            .
          </p>

          <h2 className="sec-title" style={{ fontSize: 28, marginTop: 48 }}>
            Zanim się usłyszymy
          </h2>
          <div className="link-cards">
            <Link href="/projekty" className="link-card">
              <h3>Zrealizowane projekty</h3>
              <p>
                36 wdrożeń w 9 branżach — systemy CRM, platformy e-learningowe,
                konfiguratory i aplikacje B2B.
              </p>
              <span className="arr">Zobacz portfolio ↗</span>
            </Link>
            <Link href="/cennik" className="link-card">
              <h3>Cennik i widełki</h3>
              <p>
                Ile realnie kosztuje strona, aplikacja i system na zamówienie —
                bez „wyceny indywidualnej" jako jedynej odpowiedzi.
              </p>
              <span className="arr">Sprawdź cennik ↗</span>
            </Link>
            <Link href="/proces" className="link-card">
              <h3>Jak wygląda współpraca</h3>
              <p>
                Cztery etapy od briefu po wdrożenie, z terminami i tym, co
                akceptujesz na każdym kroku.
              </p>
              <span className="arr">Poznaj proces ↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
