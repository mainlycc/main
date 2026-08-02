import Link from "next/link";
import DisplayEm from "@/components/DisplayEm";

export default function CtaSection() {
  return (
    <section id="kontakt">
      <div className="wrap">
        <div className="cta-banner">
          <div>
            <div className="cta-label">
              <span className="pulse" />
              <span>Aktualnie dostępny · odpowiadam tego samego dnia</span>
            </div>
            <h2>
              Zamieńmy Twój pomysł w <DisplayEm>działający produkt</DisplayEm>.
            </h2>
            <p>
              Bezpłatna konsultacja online - 30 minut. Omówimy zakres,
              ustalimy technologię i powiem wprost, ile to zajmie i będzie
              kosztować. Bez zobowiązań.
            </p>
          </div>
          <div className="cta-right">
            <Link href="/kontakt" className="btn-primary">
              Umów konsultację <span className="arr">↗</span>
            </Link>
            <div className="cta-availability">
              <span className="dot" />
              <span>Odpowiadam w 24h w dni robocze</span>
            </div>
            <div className="cta-contacts">
              <div className="cta-contact">
                <span className="k">Email</span>
                <span className="v">
                  <Link href="mailto:kontakt@mainly.pl">kontakt@mainly.pl</Link>
                </span>
              </div>
              <div className="cta-contact">
                <span className="k">Telefon</span>
                <span className="v">
                  <Link href="tel:+48500789826">+48 500 789 826</Link>
                </span>
              </div>
              <div className="cta-contact">
                <span className="k">Biuro</span>
                <span className="v">Warszawa, Filtrowa 83</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
