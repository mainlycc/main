import type { Metadata } from "next";
import type { ReactNode } from "react";
import PuzzleJoin from "@/components/PuzzleJoin";
import SpeedGauge from "@/components/SpeedGauge";
import ChatBubble from "@/components/ChatBubble";

export const metadata: Metadata = { robots: { index: false, follow: false } };

// Wspólna siatka kart: grafika ma stałą wysokość, a tytuł rezerwuje dwie linie,
// więc tytuły i opisy zaczynają się na tej samej wysokości w każdej karcie.
const css = `
  .pv-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;max-width:1320px;margin:0 auto}
  @media (max-width:720px){.pv-grid{grid-template-columns:1fr}}
  .pv-card{border:1px solid rgba(255,255,255,0.16);border-radius:12px;padding:32px 32px 36px;color:#f5f1ec;
    display:flex;flex-direction:column;gap:0}
  .pv-idx{text-align:right;font-family:var(--mono, monospace);color:#ff2a14;letter-spacing:0.1em;font-size:13px}
  .pv-visual{height:220px;margin:8px 0 28px;display:flex;align-items:center;justify-content:center}
  .pv-visual > div{width:100%;display:flex;justify-content:center}
  .pv-card h3{font-size:24px;font-weight:600;line-height:1.2;letter-spacing:-0.02em;margin:0 0 14px;min-height:2.4em}
  .pv-card p{color:#b8b0a6;font-size:16px;line-height:1.55;margin:0}
`;

function Card({
  idx,
  title,
  children,
  visual,
  visualWidth,
}: {
  idx: string;
  title: string;
  children: ReactNode;
  visual: ReactNode;
  /** Maksymalna szerokość grafiki, dobrana tak, by każda mieściła się w tej samej wysokości. */
  visualWidth: number;
}) {
  return (
    <div className="diff-cell pv-card">
      <div className="pv-idx">{idx}</div>
      <div className="pv-visual">
        <div>
          <div style={{ width: "100%", maxWidth: visualWidth }}>{visual}</div>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

// Podgląd animowanych kart z sekcji „Co dostajesz”. Najedź na kartę.
export default function Page() {
  return (
    <div style={{ background: "#0a0908", minHeight: "100vh", padding: "120px 16px 40px" }}>
      <style>{css}</style>
      <div className="pv-grid">
        <Card idx="02" title="Szybkość, którą widać w wynikach" visual={<SpeedGauge />} visualWidth={210}>
          Strony z gotowców ładują się wolno i wypadają z Google. Każdy projekt przechodzi audyt wydajności - czas
          ładowania poniżej sekundy to standard.
        </Card>
        <Card idx="03" title="Budujesz raz, rozwijasz bez limitu" visual={<PuzzleJoin />} visualWidth={300}>
          Dziś system do rezerwacji, za rok moduł płatności i raportowanie? Architektura jest gotowa - dokładam funkcje
          zamiast przepisywać od zera.
        </Card>
        <Card idx="04" title="Jeden punkt kontaktu" visual={<ChatBubble />} visualWidth={190}>
          Projekt, kod, wdrożenie i wsparcie - to ja. Żadnego „to wina grafika” ani przerzucania między ludźmi. Jedno
          miejsce, jedna odpowiedzialność.
        </Card>
      </div>
    </div>
  );
}
