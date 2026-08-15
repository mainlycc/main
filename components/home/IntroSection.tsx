import Link from "next/link";
import SectionLabel from "./SectionLabel";

/**
 * Sekcja definicyjna. Zwięzła odpowiedź w ok. 55 słowach pod nagłówkiem-pytaniem
 * to format, który Google wyciąga do featured snippet, a modele AI cytują
 * w odpowiedziach. Nie usuwaj tego akapitu ani nie rozbijaj go na listę.
 */
export default function IntroSection() {
  return (
    <section id="czym-sie-zajmuje">
      <div className="wrap">
        <SectionLabel label="O Mainly" />
        <h2 className="sec-title">Czym zajmuje się Mainly?</h2>
        <p className="sec-lead">
          Mainly to jednoosobowa pracownia z Warszawy, która buduje aplikacje
          webowe, systemy na zamówienie i strony internetowe dla firm. Zajmuję
          się całością: projektem UX/UI, kodem w Next.js i React, wdrożeniem
          oraz opieką techniczną — bez podwykonawców i bez przerzucania klienta
          między ludźmi. Dotychczas zrealizowałem 36 wdrożeń w 9 branżach.
        </p>
        <p className="sec-lead">
          Zobacz{" "}
          <Link href="/uslugi" className="inline-link">
            zakres usług
          </Link>
          ,{" "}
          <Link href="/cennik" className="inline-link">
            cennik
          </Link>{" "}
          i{" "}
          <Link href="/proces" className="inline-link">
            przebieg współpracy
          </Link>
          , albo przejrzyj{" "}
          <Link href="/projekty" className="inline-link">
            zrealizowane projekty
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
