"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackCtaClick } from "@/lib/analytics";

const STORAGE_KEY = "mainly-mobile-cta-dismissed";

/**
 * Sticky CTA widoczny tylko na małych ekranach.
 * Zamykalny na sesję — nie zasłania treści na stałe.
 */
export default function MobileCta() {
  const pathname = usePathname();
  const href = pathname === "/" ? "#kontakt" : "/kontakt";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setVisible(false);
        document.documentElement.classList.remove("mobile-cta-open");
        return;
      }
    } catch {
      /* ignore */
    }
    setVisible(true);
    document.documentElement.classList.add("mobile-cta-open");
    return () => {
      document.documentElement.classList.remove("mobile-cta-open");
    };
  }, []);

  function dismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
    document.documentElement.classList.remove("mobile-cta-open");
  }

  if (!visible) return null;

  return (
    <div className="mobile-cta">
      <span className="mobile-cta-copy">
        <strong>Bezpłatna wycena</strong>
        <span>Odpowiadam w 24 h</span>
      </span>
      <div className="mobile-cta-actions">
        <Link
          href={href}
          className="mobile-cta-btn"
          onClick={() => trackCtaClick("mobile_sticky")}
        >
          Napisz do mnie
        </Link>
        <button
          type="button"
          className="mobile-cta-close"
          aria-label="Zamknij pasek wyceny"
          onClick={dismiss}
        >
          ×
        </button>
      </div>
    </div>
  );
}
