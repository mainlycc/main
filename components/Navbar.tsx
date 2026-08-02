"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const navLinks = [
  { href: "#proces", label: "Proces", anchor: true },
  { href: "#cennik", label: "Cennik", anchor: true },
  { href: "/blog", label: "Blog", anchor: false },
  { href: "/projekty", label: "Portfolio", anchor: false },
  { href: "/kontakt", label: "Kontakt", anchor: false },
];

function resolveHref(pathname: string, href: string, anchor: boolean) {
  if (!anchor) return href;
  return pathname === "/" ? href : `/${href}`;
}

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
            {navLinks.map(({ href, label, anchor }) => (
              <li key={label}>
                <Link href={resolveHref(pathname, href, anchor)}>{label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <Link href={ctaHref} className="cta nav-cta">
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
            {navLinks.map(({ href, label, anchor }) => (
              <li key={label}>
                <Link href={resolveHref(pathname, href, anchor)} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={ctaHref} className="cta nav-mobile-cta" onClick={closeMenu}>
            Umów rozmowę
          </Link>
        </div>
      </nav>
    </>
  );
}
