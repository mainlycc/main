"use client";

// TYMCZASOWE: karuzela próbek stylu zdjęć do wyboru. Usunąć po decyzji
// (razem z public/_probki-stylow i wstawką w LandingPageView).
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const STYLES = [
  "Styl 1 — czarne studio + czerwień",
  "Styl 2 — jasny editorial",
  "Styl 3 — czerwony blok",
  "Styl 4 — flesz / snapshot",
];
const MOTIFS = ["KSeF — pieczątka", "Biuro rachunkowe — kalkulator", "Na zamówienie — miara"];

const HYBRIDS = [
  "Hybryda A — flesz na kremowym",
  "Hybryda B — flesz na ciemnym blacie",
  "Hybryda C — krem + przygaszona czerwień",
];

// h01–h09: hybrydy, kolejno 3 motywy dla każdej. p01–p12: 4 style dla każdego motywu.
const SLIDES = [
  ...HYBRIDS.flatMap((style, s) =>
    MOTIFS.map((motif, m) => ({
      src: `/_probki-stylow/h${String(s * 3 + m + 1).padStart(2, "0")}.jpg`,
      style,
      motif,
    })),
  ),
  ...STYLES.flatMap((style, s) =>
    MOTIFS.map((motif, m) => ({
      src: `/_probki-stylow/p${String(m * 4 + s + 1).padStart(2, "0")}.jpg`,
      style,
      motif,
    })),
  ),
];

export default function StyleTrialCarousel() {
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = SLIDES[index];

  return (
    <section aria-label="Próbki stylu zdjęć" style={{ margin: "-12px 0 16px", padding: 0 }}>
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid var(--line)",
          background: "var(--bg-2)",
        }}
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX === null) return;
          const dx = e.changedTouches[0].clientX - touchX;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          setTouchX(null);
        }}
      >
        <Image
          key={slide.src}
          src={slide.src}
          alt={`${slide.style}, ${slide.motif}`}
          fill
          className="object-cover"
          sizes="(max-width: 1320px) 100vw, 1320px"
          priority
        />
        {[-1, 1].map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => go(d)}
            aria-label={d < 0 ? "Poprzednie" : "Następne"}
            style={{
              position: "absolute",
              top: "50%",
              [d < 0 ? "left" : "right"]: 12,
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "rgba(10,9,8,0.6)",
              color: "var(--fg)",
              fontSize: 20,
              backdropFilter: "blur(6px)",
            }}
          >
            {d < 0 ? "←" : "→"}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          marginTop: 12,
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "var(--fg-dim)",
          flexWrap: "wrap",
        }}
      >
        <span>
          <strong style={{ color: "var(--fg)" }}>{slide.style}</strong> · {slide.motif}
        </span>
        <span>
          {index + 1} / {SLIDES.length}
        </span>
      </div>
    </section>
  );
}
