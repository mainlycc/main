"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackCtaClick } from "@/lib/analytics";

/**
 * Sticky CTA widoczny tylko na małych ekranach.
 * Większość ruchu z social mediów jest mobilna — bez tego droga do formularza
 * wymaga przewinięcia całej strony.
 */
export default function MobileCta() {
  const pathname = usePathname();
  const href = pathname === "/" ? "#kontakt" : "/kontakt";

  return (
    <div className="mobile-cta">
      <span className="mobile-cta-copy">
        <strong>Bezpłatna wycena</strong>
        <span>Odpowiadam w 24 h</span>
      </span>
      <Link
        href={href}
        className="mobile-cta-btn"
        onClick={() => trackCtaClick("mobile_sticky")}
      >
        Napisz do mnie
      </Link>
    </div>
  );
}
