"use client";

import { useState } from "react";
import styles from "./SpeedGauge.module.css";

const R = 74;
const TICKS = 12;

type Props = {
  /** Wartość, do której wypełnia się koło (0–100). */
  value?: number;
  label?: string;
  className?: string;
  /** Wymusza stan wypełniony (np. gdy hover obsługuje rodzic). */
  active?: boolean;
};

export default function SpeedGauge({ value = 98, label = "wydajność / 100", className, active }: Props) {
  const [tapped, setTapped] = useState(false);
  const isActive = active ?? tapped;

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-active={isActive || undefined}
      style={{ "--target": value } as React.CSSProperties}
      onClick={() => setTapped((v) => !v)}
    >
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <radialGradient id="speed-gauge-track" cx="0.5" cy="0.35" r="0.75">
            <stop offset="0" stopColor="#3a3735" />
            <stop offset="1" stopColor="#232120" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r={R} className={styles.track} stroke="url(#speed-gauge-track)" />

        {Array.from({ length: TICKS }, (_, i) => {
          const a = (i / TICKS) * Math.PI * 2;
          // Zaokrąglenie, żeby serwer i przeglądarka wyliczyły identyczne atrybuty (hydracja).
          const x = Math.round((100 + Math.sin(a) * R) * 100) / 100;
          const y = Math.round((100 - Math.cos(a) * R) * 100) / 100;
          return <rect key={i} x={x - 1.6} y={y - 1.6} width="3.2" height="3.2" className={styles.tick} />;
        })}

        {/* pathLength=100 pozwala sterować wypełnieniem wprost w procentach. */}
        <circle
          cx="100"
          cy="100"
          r={R}
          pathLength={100}
          className={styles.arc}
          transform="rotate(-90 100 100)"
        />
      </svg>

      <div className={styles.readout}>
        <span className={styles.value} />
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}
