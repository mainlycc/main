import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema, ORG_ID, webPageSchema } from "@/lib/schema";
import { absoluteUrl, defaultOgImages, SITE_URL } from "@/lib/seo";
import { testimonials } from "@/lib/home-content";
import { getPublishedProjects } from "@/lib/portfolio";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tworzenie stron internetowych Warszawa: cennik 2026 | Mainly",
  description:
    "Strony internetowe dla firm z Warszawy: od 2 900 zł netto, realizacja 1–4 tygodnie. Biuro na Ochocie, spotkania na żywo, kod bez szablonów. Wycena w 48 h.",
  alternates: { canonical: "/tworzenie-stron-internetowych-warszawa" },
  openGraph: {
    title: "Tworzenie stron internetowych Warszawa: cennik 2026 | Mainly",
    description:
      "Strony dla warszawskich firm od 2 900 zł. Spotkania na żywo, jeden punkt kontaktu.",
    url: absoluteUrl("/tworzenie-stron-internetowych-warszawa"),
    type: "website",
    images: defaultOgImages("Tworzenie stron internetowych Warszawa: cennik 2026 | Mainly"),
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
      "Strona wizytówka do 5 podstron kosztuje u mnie 2 900–4 500 zł netto, strona firmowa z blogiem do 10 podstron 4 900–9 000 zł netto. Cena obejmuje projekt graficzny, kod, SEO techniczne, panel do edycji treści i wdrożenie. Dokładną kwotę podaję w wycenie w ciągu 48 h od rozmowy.",
  },
  {
    question: "Dlaczego strona kosztuje 2 900 zł, skoro na OLX są oferty za kilkaset złotych?",
    answer:
      "Strona za kilkaset złotych to zwykle gotowy szablon WordPressa z wtyczkami, bez projektu i bez SEO technicznego. Ja projektuję wygląd pod Twoją firmę i koduję stronę od zera, więc ładuje się szybko, nie wymaga aktualizacji wtyczek, a kod i domena należą do Ciebie.",
  },
  {
    question: "Ile trwa zrobienie strony?",
    answer:
      "Strona wizytówka to 1–2 tygodnie, strona firmowa z blogiem 3–4 tygodnie. Najwięcej czasu zwykle zajmuje zebranie tekstów i zdjęć, więc pomagam przygotować je równolegle z projektem.",
  },
  {
    question: "Jak szybko możesz zacząć?",
    answer:
      "Zależy od aktualnego obłożenia. Zwykle jestem w stanie zacząć projekt w ciągu 1–3 tygodni od akceptacji wyceny. Aktualną dostępność potwierdzam na bezpłatnej konsultacji.",
  },
];

const priceRows = [
  {
    what: "Strona wizytówka (do 5 podstron)",
    range: "2 900 – 4 500 zł",
    time: "1–2 tygodnie",
    fits: "Firma usługowa, gabinet, kancelaria: oferta, o nas, kontakt",
  },
  {
    what: "Strona firmowa z blogiem (do 10 podstron)",
    range: "4 900 – 9 000 zł",
    time: "3–4 tygodnie",
    fits: "Firma, która chce zdobywać klientów z Google dzięki artykułom",
  },
  {
    what: "Kalkulator lub konfigurator produktu",
    range: "8 000 – 25 000 zł",
    time: "ustalany w wycenie",
    fits: "Producent albo firma, która wycenia zamówienia indywidualnie",
  },
  {
    what: "Opieka techniczna po wdrożeniu",
    range: "od 290 zł / mies.",
    time: "—",
    fits: "Monitoring, kopie zapasowe, drobne zmiany na zgłoszenie",
  },
];

const steps = [
  {
    title: "Rozmowa (30 minut)",
    text: "Online albo na Ochocie. Mówisz, czym zajmuje się firma, kto jest klientem i co strona ma robić. Jeśli wystarczy Ci coś prostszego, powiem to od razu.",
  },
  {
    title: "Wycena w 48 h",
    text: "Dostajesz zakres, kwotę i harmonogram na piśmie. Wycena jest ważna 14 dni, zaliczka wynosi 50%, resztę płacisz po wdrożeniu.",
  },
  {
    title: "Projekt w Figmie",
    text: "Zanim powstanie kod, widzisz, jak będzie wyglądała strona na komputerze i telefonie. W cenie są dwie rundy poprawek.",
  },
  {
    title: "Kod, testy i wdrożenie",
    text: "Koduję stronę w Next.js, podłączam domenę, Google Analytics i Search Console i pokazuję, jak edytować treści. Przez 14 dni po starcie poprawki są w cenie.",
  },
];

const websiteProjectSlugs = ["brewhaus", "elomoto-eco", "magia-podrozowania", "prawkoczechy"];
const websiteTestimonialNames = ["Katarzyna Z.", "Paweł L.", "Grzegorz W."];

export default async function WarsawPage() {
  const allProjects = await getPublishedProjects();
  const projects = websiteProjectSlugs
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const reviews = testimonials.filter((item) => websiteTestimonialNames.includes(item.name));

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/tworzenie-stron-internetowych-warszawa",
          name: String(metadata.title),
          description: String(metadata.description),
        })}
      />
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

      <main id="main">
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
            Projektuję i koduję strony internetowe dla firm z Warszawy: od
            wizytówki za 2 900 zł netto po stronę firmową z blogiem. Biuro mam
            na Filtrowej 83 na Ochocie, więc możemy spotkać się na żywo, a cały
            projekt prowadzi jedna osoba, od pierwszej rozmowy po wdrożenie.
            Strony buduję bez szablonów, w Next.js, z SEO technicznym w cenie.
          </p>

          <div className="hero-actions" style={{ marginBottom: 24 }}>
            <Link href="/kontakt" className="btn-primary">
              Umów rozmowę
            </Link>
            <Link href="/cennik" className="btn-ghost">
              Zobacz cennik
            </Link>
          </div>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Cennik stron internetowych w Warszawie (2026)
          </h2>
          <p className="prose-block">
            Ceny netto, takie same jak w{" "}
            <Link href="/cennik" className="inline-link">
              cenniku
            </Link>
            . W każdej kwocie jest projekt graficzny, kod, wersja na telefon, SEO
            techniczne (metadane, dane strukturalne, mapa strony), formularz
            kontaktowy z ochroną przed spamem, panel do edycji treści i
            wdrożenie. Nie doliczam opłat za „uruchomienie” ani za licencję
            szablonu, bo szablonu nie używam.
          </p>
          <div style={{ overflowX: "auto", marginBottom: 24 }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Rodzaj strony</th>
                  <th>Cena (netto)</th>
                  <th>Czas realizacji</th>
                  <th>Dla kogo</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row) => (
                  <tr key={row.what}>
                    <td>{row.what}</td>
                    <td>
                      <strong>{row.range}</strong>
                    </td>
                    <td>{row.time}</td>
                    <td>{row.fits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="prose-block">
            W Warszawie znajdziesz strony od kilkuset złotych i od kilkudziesięciu
            tysięcy. Tańsze oferty to zwykle gotowy szablon z wtyczkami, który
            trzeba co miesiąc aktualizować i który zwalnia z każdym dodatkiem.
            Agencje liczą więcej, bo w projekcie pracuje kilka osób i
            koordynator. Ja jestem pośrodku: strona jest projektowana i kodowana
            od zera, ale płacisz za pracę jednej osoby, a nie całego zespołu.
            Domena, kod i konta należą do Ciebie od pierwszego dnia.
          </p>
        </section>

        {projects.length > 0 && (
          <section className="wrap page-section">
            <h2 className="sec-title" style={{ fontSize: 30 }}>
              Wybrane strony, które zbudowałem
            </h2>
            <p className="prose-block">
              Każda z tych stron działa na żywo. W opisie projektu znajdziesz
              zakres prac, użyte technologie i to, co było najtrudniejsze.
            </p>
            <div className="showcase showcase--projects">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projekty/${project.slug}`}
                  className="case"
                >
                  <div className="thumb relative has-image">
                    <Image
                      src={project.image}
                      alt={`${project.name} — strona zrealizowana przez Mainly`}
                      fill
                      className="object-cover object-top"
                      quality={60}
                      sizes="(max-width: 980px) calc(100vw - 48px), 400px"
                    />
                  </div>
                  <div className="meta">
                    <div>
                      <h3>{project.name}</h3>
                      <div className="tags">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="arr">↗</div>
                  </div>
                </Link>
              ))}
            </div>
            <p className="prose-block">
              <Link href="/projekty" className="inline-link">
                Wszystkie realizacje →
              </Link>
            </p>
          </section>
        )}

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Jak wygląda współpraca krok po kroku
          </h2>
          <ol className="checklist">
            {steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}.</strong> {step.text}
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Co daje współpraca z kimś z Warszawy
          </h2>
          <p className="prose-block">
            Przy prostej stronie zwykle wystarczą dwie rozmowy, ale wiele osób
            woli zobaczyć wykonawcę i projekt na żywo, zamiast oglądać go na
            ekranie. Przy większych wdrożeniach spotkanie jest jeszcze ważniejsze:
            godzina w Twojej firmie, przy recepcji, w magazynie albo przy obiegu
            dokumentów, oszczędza tydzień zgadywania, jak naprawdę pracuje
            zespół.
          </p>
          <ul className="checklist">
            <li>Spotkanie w biurze na Ochocie albo u Ciebie w firmie</li>
            <li>
              Szkolenie z panelu na Twoim komputerze, a nie na nagraniu
            </li>
            <li>Faktura VAT, umowa po polsku, rozliczenie w złotówkach</li>
          </ul>
        </section>

        {reviews.length > 0 && (
          <section className="wrap page-section">
            <h2 className="sec-title" style={{ fontSize: 30 }}>
              Co mówią klienci
            </h2>
            <div className="link-cards">
              {reviews.map((review) => (
                <figure key={review.name} className="link-card" style={{ margin: 0 }}>
                  <blockquote style={{ margin: 0 }}>
                    <p>{review.text}</p>
                  </blockquote>
                  <figcaption>
                    <strong>{review.name}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="prose-block">
              <Link href="/opinie" className="inline-link">
                Wszystkie opinie →
              </Link>
            </p>
          </section>
        )}

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Potrzebujesz czegoś więcej niż strony?
          </h2>
          <p className="prose-block">
            Jeśli chodzi Ci o panel dla klientów, system rezerwacji albo
            narzędzie, które zastąpi arkusze, zobacz{" "}
            <Link href="/aplikacje-webowe-warszawa" className="inline-link">
              aplikacje webowe w Warszawie
            </Link>{" "}
            albo{" "}
            <Link href="/uslugi/systemy-dla-firm" className="inline-link">
              systemy i CRM na zamówienie
            </Link>
            .
          </p>
        </section>

        <section className="wrap page-section">
          <h2 className="sec-title" style={{ fontSize: 30 }}>
            Gdzie mnie znaleźć
          </h2>
          <p className="prose-block">
            Biuro jest na Ochocie, przy ulicy Filtrowej. Na spotkania dojeżdżam
            też do firm w innych dzielnicach, m.in. na Mokotów, Wolę i do
            Śródmieścia. Z firmami spoza Warszawy pracuję zdalnie.
          </p>
          <p className="prose-block">
            <strong>Mainly</strong>
            <br />
            {BUSINESS.street}
            <br />
            {BUSINESS.postalCode} {BUSINESS.city}
            <br />
            NIP: {BUSINESS.taxID}
            <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Filtrowa+83%2C+02-032+Warszawa"
              className="inline-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz w Mapach Google
            </a>
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
              Umów rozmowę
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
