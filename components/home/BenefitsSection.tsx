import type { ReactNode } from "react";
import DisplayEm from "@/components/DisplayEm";
import { benefits } from "@/lib/home-content";
import SectionLabel from "./SectionLabel";

const icons: Record<string, ReactNode> = {
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M5 12l4-4M5 12l4 4M19 12l-4-4M19 12l-4 4" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  grid: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18" />
    </svg>
  ),
};

export default function BenefitsSection() {
  return (
    <section>
      <div className="wrap">
        <SectionLabel num="01" label="Co dostajesz" />
        <h2 className="sec-title">
          Cztery rzeczy, których nie dostaniesz <DisplayEm>z półki</DisplayEm>.
        </h2>
        <p className="sec-lead">
          Gotowe oprogramowanie pasuje do Twojego procesu jak garnitur z sieciówki -
          możesz to nosić, ale nigdy nie będzie tak jak powinno.
        </p>

        <div className="diff-grid">
          {benefits.map((item) => (
            <div key={item.idx} className="diff-cell">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <span className="glyph">{icons[item.icon]}</span>
                <span className="idx">{item.idx}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
