"use client";

import { useEffect } from "react";

const CLASS = "cv-off";
const RESTORE_AFTER_MS = 1200;
/** Przejście na inną stronę z kotwicą (np. /#kontakt z bloga) trwa dłużej */
const RESTORE_AFTER_NAV_MS = 4000;

/**
 * Sekcje poza ekranem mają `content-visibility: auto` (mainly-landing.css),
 * więc przed renderem przeglądarka zna tylko ich szacowaną wysokość i skok
 * do kotwicy (#prace, #kontakt) ląduje obok celu. Na czas skoku wyłączamy
 * optymalizację; po przywróceniu sekcje zachowują zapamiętany rozmiar.
 */
export default function AnchorScrollFix() {
  useEffect(() => {
    const root = document.documentElement;
    let timer: number | undefined;

    const renderAll = (ms = RESTORE_AFTER_MS) => {
      root.classList.add(CLASS);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => root.classList.remove(CLASS), ms);
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href*='#']");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (!link.hash || link.origin !== window.location.origin) return;
      renderAll(link.pathname === window.location.pathname ? RESTORE_AFTER_MS : RESTORE_AFTER_NAV_MS);
    };

    // Wejście z linku zewnętrznego, np. /#kontakt
    if (window.location.hash) {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) {
        renderAll();
        target.scrollIntoView();
      }
    }

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
