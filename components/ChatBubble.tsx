"use client";

import { useState } from "react";
import styles from "./ChatBubble.module.css";

// Płaski dymek w układzie 140×100 z ogonkiem w lewym dolnym rogu.
// Rzutujemy go izometrycznie tak jak puzzel: dymek „leży” i ma grubość.
const BUBBLE =
  "M20 0 H120 A20 20 0 0 1 140 20 V80 A20 20 0 0 1 120 100 H50 L16 126 L28 100 H20" +
  " A20 20 0 0 1 0 80 V20 A20 20 0 0 1 20 0 Z";

// Rzut izometryczny płaskiego układu (x, y) -> ekran.
const ISO = "matrix(0.866 0.5 -0.866 0.5 0 0)";
const DEPTH = 16;

// Pionowe krawędzie tam, gdzie obrys dymka jest skrajnie z lewej i z prawej:
// styczna lewego górnego zaokrąglenia, czubek ogonka i styczna prawego zaokrąglenia.
const EDGES = [
  [-76.4, 50],
  [-95.3, 71],
  [111.1, 70],
]
  .map(([x, y]) => `M${x} ${y} v${DEPTH}`)
  .join(" ");

// Kropki w płaskim układzie, przeliczone na ekran, żeby skakały pionowo.
const DOTS = [40, 70, 100].map((x) => [(x - 50) * 0.866, (x + 50) * 0.5]);

type Props = {
  className?: string;
  /** Wymusza stan aktywny (np. gdy hover obsługuje rodzic). */
  active?: boolean;
};

export default function ChatBubble({ className, active }: Props) {
  const [tapped, setTapped] = useState(false);
  const isActive = active ?? tapped;

  return (
    <svg
      viewBox="-120 -30 260 190"
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-active={isActive || undefined}
      onClick={() => setTapped((v) => !v)}
      aria-hidden="true"
    >
      <g className={styles.bubble}>
        <g transform={`translate(0 ${DEPTH})`}>
          <path d={BUBBLE} transform={ISO} className={styles.face} />
        </g>
        <path d={EDGES} className={styles.edge} />
        <path d={BUBBLE} transform={ISO} className={styles.face} />

        {DOTS.map(([x, y], i) => (
          <g key={i} transform={`translate(${x.toFixed(2)} ${y})`}>
            <g className={styles.dot}>
              <circle r="9" transform={`translate(0 5) ${ISO}`} className={styles.dotSide} />
              <circle r="9" transform={ISO} className={styles.dotTop} />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}
