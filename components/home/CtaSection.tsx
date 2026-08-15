import ContactForm from "@/components/ContactForm";
import ContactLinks from "@/components/ContactLinks";
import DisplayEm from "@/components/DisplayEm";
import { testimonials } from "@/lib/home-content";

/**
 * Sekcja konwersyjna strony głównej.
 *
 * Formularz jest tu OSADZONY, a nie podlinkowany. Wcześniej ta sekcja była
 * banerem z odnośnikiem do /kontakt — przy 92 wizytach na "/" i 7 na "/kontakt"
 * oznaczało to, że ok. 92% ruchu nigdy nie widziało formularza.
 */
export default function CtaSection() {
  const proof = testimonials.slice(0, 2);

  return (
    <section id="kontakt">
      <div className="wrap">
        <div className="home-form-layout">
          <div>
            <div className="cta-label">
              <span className="pulse" />
              <span>Aktualnie dostępny · odpowiadam tego samego dnia</span>
            </div>
            <h2 className="sec-title">
              Zamieńmy Twój pomysł w <DisplayEm>działający produkt</DisplayEm>.
            </h2>
            <p className="sec-lead" style={{ marginBottom: 24 }}>
              Bezpłatna konsultacja online - 30 minut. Omówimy zakres, ustalimy
              technologię i powiem wprost, ile to zajmie i będzie kosztować. Bez
              zobowiązań.
            </p>

            <ContactLinks />

            <div className="home-form-proof">
              {proof.map((item) => (
                <blockquote key={item.name}>
                  {item.text}
                  <cite>{item.name}</cite>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="home-form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
