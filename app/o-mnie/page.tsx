import type { Metadata } from "next";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { stats, technologies } from "@/lib/home-content";
import { breadcrumbSchema, PERSON_ID } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stanisław — web developer z Warszawy | Mainly",
  description:
    "Kto stoi za Mainly: web developer z Warszawy budujący aplikacje webowe, systemy i strony dla firm. 36 wdrożeń w 9 branżach, bez podwykonawców.",
  alternates: { canonical: "/o-mnie" },
  openGraph: {
    title: "O mnie | Mainly",
    description:
      "Web developer z Warszawy. Aplikacje webowe, systemy i strony dla firm — od projektu po wdrożenie.",
    url: absoluteUrl("/o-mnie"),
    type: "profile",
    images: defaultOgImages("O mnie | Mainly"),
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "O mnie — Mainly",
  url: absoluteUrl("/o-mnie"),
  mainEntity: { "@id": PERSON_ID },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profilePageSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Mainly", url: SITE_URL },
          { name: "O mnie", url: absoluteUrl("/o-mnie") },
        ])}
      />

      <main id="main">
        <section className="wrap page-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Mainly</Link>
            <span className="sep">/</span>
            <span aria-current="page">O mnie</span>
          </nav>

          <div className="sec-label">
            <span className="num">O mnie</span>
            <span>Kto stoi za Mainly</span>
          </div>
          <h1 className="sec-title">
            Jedna osoba. <DisplayEm>Cała odpowiedzialność</DisplayEm>.
          </h1>
          <p className="sec-lead" style={{ marginBottom: 32 }}>
            Nazywam się {BUSINESS.personName} i prowadzę Mainly — jednoosobową
            pracownię z Warszawy. Buduję aplikacje webowe, systemy na zamówienie
            i strony internetowe dla firm: sam projektuję, sam koduję, sam
            wdrażam i sam odpowiadam na zgłoszenia. Za mną 36 wdrożeń w 9
            branżach, w tym system obsługujący ponad 865 użytkowników.
          </p>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Dlaczego jedna osoba, a nie agencja
          </h2>
          <p className="prose-block">
            W agencji projekt przechodzi przez ręce kilku osób: handlowiec
            sprzedaje, projektant rysuje, programista koduje, a opiekun klienta
            tłumaczy, dlaczego coś wyszło inaczej. Każde przekazanie to miejsce,
            w którym gubi się kontekst — i w którym pojawia się zdanie „to
            pytanie do kogoś innego”.
          </p>
          <p className="prose-block">
            U mnie tego etapu nie ma. Rozmawiasz z osobą, która napisze Twój kod,
            więc odpowiedź na pytanie „da się to zrobić i ile zajmie” pada od
            razu, a nie po konsultacji z zespołem. Ma to swoją cenę: nie wezmę
            równolegle dziesięciu projektów i czasem trzeba poczekać na wolny
            termin. W zamian projekt nie stoi, bo ktoś jest na urlopie.
          </p>

          <ul className="checklist">
            <li>
              <strong>Jeden punkt kontaktu</strong> — od pierwszego maila po
              wsparcie dwa lata po wdrożeniu
            </li>
            <li>
              <strong>Bez podwykonawców</strong> — nikt nie odsprzedaje Twojego
              projektu dalej
            </li>
            <li>
              <strong>Odpowiedź w 24 h</strong> w dni robocze, zwykle tego
              samego dnia
            </li>
            <li>
              <strong>Kod należy do Ciebie</strong> — po ostatniej fakturze
              dostajesz pełne prawa i repozytorium
            </li>
          </ul>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Liczby
          </h2>
          <div className="stats-grid" style={{ marginBottom: 48 }}>
            {stats.map((item) => (
              <div key={item.label} className="stat">
                <div className="stat-num">
                  {item.value}
                  {item.suffix ? (
                    <span className="stat-plus">{item.suffix}</span>
                  ) : null}
                </div>
                <p className="stat-label">{item.label}</p>
                <span className="stat-line" aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            W czym pracuję
          </h2>
          <p className="prose-block">
            Stack dobieram pod projekt, nie odwrotnie. Trzon to Next.js, React i
            TypeScript — bo dają szybkie strony, dobre SEO i architekturę, którą
            da się rozwijać latami zamiast przepisywać co dwa lata.
          </p>
          <div className="tech" style={{ marginBottom: 48 }}>
            {technologies.map((tech) => (
              <div key={tech}>{tech}</div>
            ))}
          </div>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Jak zacząć
          </h2>
          <p className="prose-block">
            Napisz, co chcesz usprawnić. Nie musisz wiedzieć, jakiego systemu
            potrzebujesz ani jakiej technologii — wystarczy opis problemu.
            Odpowiadam w 24 h, a jeśli sprawa nadaje się do rozmowy, umawiamy
            bezpłatną konsultację na 30 minut.
          </p>
          <div className="hero-actions" style={{ marginBottom: 96 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów rozmowę
            </Link>
            <Link href="/projekty" className="btn-ghost">
              Zobacz realizacje
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
