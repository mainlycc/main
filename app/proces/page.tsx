import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { processSteps } from "@/lib/home-content";
import { breadcrumbSchema, faqPageSchema, ORG_ID } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Jak wygląda współpraca — 4 etapy | Mainly",
  description:
    "Od briefu po wdrożenie: cztery etapy z terminami, tym co akceptujesz na każdym kroku i tym, co dostajesz na końcu. Bez niespodzianek w połowie projektu.",
  alternates: { canonical: "/proces" },
  openGraph: {
    title: "Jak wygląda współpraca | Mainly",
    description:
      "Cztery etapy od briefu po wdrożenie — z terminami i punktami akceptacji.",
    url: absoluteUrl("/proces"),
    type: "website",
    images: defaultOgImages("Jak wygląda współpraca | Mainly"),
  },
};

const details = [
  {
    heading: "Etap 1: Strategia i brief (3–5 dni)",
    body: "Zaczynamy od rozmowy o tym, co ma się zmienić w firmie — nie o tym, jakiej technologii użyjemy. Mapuję proces tak, jak wygląda dziś, wskazuję miejsca, w których ucieka czas, i sprawdzam konkurencję. Na koniec dostajesz zakres z wyceną i harmonogramem, ważny 14 dni.",
    output: "Zakres prac, wycena, harmonogram z kamieniami milowymi",
  },
  {
    heading: "Etap 2: Projekt UX/UI (1–2 tygodnie)",
    body: "Powstają wireframe'y, potem system designu i makiety w Figmie. Widzisz, jak będzie wyglądał każdy istotny ekran, zanim napiszę pierwszą linię kodu — bo poprawka w Figmie kosztuje godziny, a ta sama poprawka w gotowym kodzie kosztuje dni. Dwie rundy poprawek są w cenie.",
    output: "Klikalny prototyp w Figmie do akceptacji",
  },
  {
    heading: "Etap 3: Kod i wdrożenie (2–4 tygodnie lub dłużej)",
    body: "Implementacja w Next.js, React i TypeScript, integracje, panel do zarządzania treścią, optymalizacja wydajności i testy na realnych urządzeniach. Postęp widzisz co tydzień na środowisku testowym — nie musisz czekać do końca, żeby zobaczyć, co powstaje.",
    output: "Działający produkt na środowisku testowym, potem produkcyjnym",
  },
  {
    heading: "Etap 4: Start i opieka (bez limitu)",
    body: "Wdrożenie produkcyjne, przeniesienie domeny, konfiguracja analityki i Search Console, szkolenie z panelu. Przez 14 dni od startu poprawki są w cenie. Dalej możesz przejąć utrzymanie sam albo zostać przy opiece technicznej od 290 zł miesięcznie.",
    output: "Produkt na produkcji, szkolenie, dokumentacja, 14 dni poprawek",
  },
];

const faq = [
  {
    question: "Ile trwa cały projekt od pierwszej rozmowy do startu?",
    answer:
      "Strona w pakiecie Start — 1–2 tygodnie. Strona z blogiem i integracjami — 3–4 tygodnie. Aplikacja lub system na zamówienie — od 6 tygodni, typowo 2–4 miesiące. Harmonogram z konkretnymi datami ustalamy przed podpisaniem, a nie w trakcie.",
  },
  {
    question: "Czy mogę wprowadzać zmiany w trakcie realizacji?",
    answer:
      "Tak. Każdy etap kończy się przeglądem, na którym zbieramy uwagi. Drobne korekty są w cenie, większe zmiany zakresu wyceniam osobno — zawsze przed wykonaniem, nigdy w fakturze po fakcie.",
  },
  {
    question: "Jak wygląda komunikacja w trakcie projektu?",
    answer:
      "Slack albo e-mail, zależnie od tego, co Ci wygodniej. Raz w tygodniu dostajesz podsumowanie postępu z linkiem do aktualnej wersji. Na pytania odpowiadam w ciągu 24 h w dni robocze.",
  },
  {
    question: "Co się stanie, jeśli nie będę zadowolony z efektu?",
    answer:
      "Pracujemy etapami i każdy wymaga Twojej akceptacji przed przejściem dalej — dzięki temu nie da się dojść do końca projektu z czymś, czego nie chciałeś. Jeśli mimo to coś nie gra, masz 14 dni od wdrożenia na poprawki w cenie.",
  },
  {
    question: "Czy pracujesz z podwykonawcami?",
    answer:
      "Nie. Projekt, kod, wdrożenie i wsparcie realizuję osobiście. To oznacza jeden punkt kontaktu i brak sytuacji, w której odpowiedź na pytanie wymaga skontaktowania się z kimś jeszcze.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Jak wygląda współpraca przy tworzeniu strony lub aplikacji w Mainly",
  description:
    "Cztery etapy realizacji projektu: strategia i brief, projekt UX/UI, kod i wdrożenie, start i opieka techniczna.",
  url: absoluteUrl("/proces"),
  totalTime: "P6W",
  step: details.map((detail, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: detail.heading,
    text: detail.body,
    url: `${absoluteUrl("/proces")}#etap-${index + 1}`,
  })),
  provider: { "@id": ORG_ID },
};

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqPageSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "Proces", url: absoluteUrl("/proces") },
        ])}
      />

      <main>
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">Proces</span>
          </nav>

          <div className="sec-label">
            <span className="num">Proces</span>
            <span>Jak pracuję</span>
          </div>
          <h1 className="sec-title">
            Cztery etapy. <DisplayEm>Zero niespodzianek</DisplayEm>.
          </h1>
          <p className="sec-lead" style={{ marginBottom: 32 }}>
            Współpraca dzieli się na cztery etapy: strategię i brief, projekt
            UX/UI, kod i wdrożenie oraz start z opieką techniczną. Każdy kończy
            się konkretnym wynikiem, który akceptujesz przed przejściem dalej —
            dzięki temu na żadnym kroku nie okazuje się, że powstało coś innego,
            niż ustaliliśmy.
          </p>

          <ul className="checklist" style={{ marginBottom: 64 }}>
            {processSteps.map((step) => (
              <li key={step.num}>
                <strong>{step.title}</strong> — {step.description} (
                {step.duration})
              </li>
            ))}
          </ul>
        </section>

        {details.map((detail, index) => (
          <section
            key={detail.heading}
            id={`etap-${index + 1}`}
            className="wrap page-section"
          >
            <h2 className="sec-title" style={{ fontSize: 30 }}>
              {detail.heading}
            </h2>
            <p className="prose-block">{detail.body}</p>
            <p className="prose-block">
              <strong>Co dostajesz na koniec etapu:</strong> {detail.output}
            </p>
          </section>
        ))}

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Pytania o współpracę
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
              Zacznijmy od rozmowy
            </Link>
            <Link href="/cennik" className="btn-ghost">
              Sprawdź cennik
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
