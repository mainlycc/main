"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto">
      <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-1 sm:px-1.5 py-1 sm:py-1.5 rounded-full flex items-center justify-between sm:justify-start gap-0.5 sm:gap-1">
        {[
          { href: "/", label: "Główna" },
          { href: "/projekty", label: "Portfolio" },
          { href: "/blog", label: "Blog" },
          { href: "/kontakt", label: "Kontakt" }
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out flex-1 sm:flex-initial text-center
              ${isActive(href) 
                ? "text-white bg-white/10" 
                : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
} 