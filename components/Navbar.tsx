"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { trackCtaClick } from "@/lib/analytics";

/**
 * Wszystkie pozycje to realne adresy URL, nie kotwice.
 * Kotwica (#cennik, #proces) nie przekazuje mocy linkowania i nie może
 * rankować jako osobny wynik w Google.
 */
const navLinks = [
  { href: "/uslugi", label: "Usługi" },
  { href: "/branze", label: "Branże" },
  { href: "/cennik", label: "Cennik" },
  { href: "/projekty", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  const ctaHref = pathname === "/" ? "#kontakt" : "/kontakt";

  return (
    <>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Zamknij menu"
          onClick={closeMenu}
        />
      )}
      <nav className={`top${menuOpen ? " open" : ""}`}>
        <div className="inner">
          <Link href="/" className="brand" onClick={closeMenu}>
            <span className="icon">
              <Image src="/logom.svg" alt="Mainly" width={80} height={40} priority />
            </span>
          </Link>

          <ul className="nav-desktop">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <Link
              href={ctaHref}
              className="cta nav-cta"
              onClick={() => trackCtaClick("navbar")}
            >
              Umów rozmowę <span className="arr" aria-hidden>→</span>
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="nav-mobile" aria-hidden={!menuOpen}>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={ctaHref}
            className="cta nav-mobile-cta"
            onClick={() => {
              trackCtaClick("nav_mobile");
              closeMenu();
            }}
          >
            Umów rozmowę
          </Link>
        </div>
      </nav>
    </>
  );
}
