import DisplayEm from "@/components/DisplayEm";
import Link from "next/link";
import { pricingCare, pricingNote, pricingPlans } from "@/lib/home-content";
import SectionLabel from "./SectionLabel";

export default function HomePricingSection() {
  return (
    <section id="cennik">
      <div className="wrap">
        <SectionLabel num="05" label="Cennik" />
        <h2 className="sec-title">
          Przejrzyste pakiety. <DisplayEm>Bez gwiazdek</DisplayEm>.
        </h2>
        <p className="sec-lead">
          Trzy startowe pakiety dla stron. Aplikacje i systemy wyceniam
          indywidualnie - napisz, co potrzebujesz.
        </p>

        <div className="pricing">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`price${plan.featured ? " featured" : ""}`}
            >
              <span className="tag">{plan.tag}</span>
              <h3>{plan.name}</h3>
              <p className="desc">{plan.description}</p>
              <div className="amount">
                <span className="from">od</span>
                {plan.price}
                <span className="cur">zł</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href="#kontakt" className="pbtn">
                Wybierz pakiet
              </Link>
            </div>
          ))}
        </div>

        <div className="pricing-care">
          <div>
            <span className="pricing-care-tag">Po wdrożeniu</span>
            <h3>{pricingCare.title}</h3>
            <p>{pricingCare.description}</p>
          </div>
          <Link href="#kontakt" className="pricing-care-btn">
            Zapytaj o opiekę <span className="arr">↗</span>
          </Link>
        </div>

        <p className="pricing-note">{pricingNote}</p>

        <p style={{ textAlign: "center", marginTop: 32, color: "var(--fg-dim)" }}>
          Nie znalazłeś odpowiedniego pakietu?{" "}
          <Link
            href="#kontakt"
            style={{
              color: "var(--ember-soft)",
              borderBottom: "1px solid currentColor",
            }}
          >
            Umów darmową konsultację →
          </Link>
        </p>
      </div>
    </section>
  );
}
