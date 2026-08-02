import DisplayEm from "@/components/DisplayEm";
import { afterItems, beforeItems } from "@/lib/home-content";

const crossIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5 10 17.5 19 7" />
  </svg>
);

export default function AppsSection() {
  return (
    <section>
      <div className="wrap">
        <div className="ba-head">
          <span className="ba-tag">
            Aplikacje i systemy webowe dla firm
          </span>
          <h2 className="sec-title">
            Procesy, które <DisplayEm>pilnują się same</DisplayEm>.
          </h2>
          <p className="ba-sub">
            Aplikacja webowa to narzędzie, które pracuje kiedy Twój zespół
            śpi. Rezerwacje, rozliczenia, powiadomienia, raporty - bez
            ręcznej roboty, bez błędów ludzkich.
          </p>
        </div>

        <div className="ba-grid">
          <div className="ba-card ba-before">
            <div className="ba-card-h">
              <span className="lbl">Przed</span>
              <span className="pin">Ręczna robota</span>
            </div>
            <ul>
              {beforeItems.map((item, index) => (
                <li key={index}>
                  <span className="ic">{crossIcon}</span>
                  <span>
                    {item.text}
                    {item.strong && <strong>{item.strong}</strong>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ba-card ba-after">
            <div className="ba-card-h">
              <span className="lbl">Po</span>
              <span className="pin">Automatyzacja</span>
            </div>
            <ul>
              {afterItems.map((item, index) => (
                <li key={index}>
                  <span className="ic">{checkIcon}</span>
                  <span>
                    {item.text}
                    {item.strong && <strong>{item.strong}</strong>}
                    {item.suffix}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
