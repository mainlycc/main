"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Mainly</h3>
            <p className="text-gray-400 mb-4">
              Zamieniamy teksty, design i programowanie w kliknięcia, konwersje i zyski.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Usługi</h3>
            <ul className="space-y-2">
              {["Strony internetowe", "Aplikacje webowe", "UX/UI Design", "SEO"].map(
                (service, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Firma</h3>
            <ul className="space-y-2">
              {[
                { name: "O nas", href: "#" },
                { name: "Kontakt", href: "/kontakt" },
                { name: "Projekty", href: "/projekty" },
                { name: "Polityka prywatności", href: "/polityka-prywatnosci" }
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                kontakt@mainly.pl
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                +48 500 789 826
              </li>
              <li className="text-gray-400 mt-4">
                ul. Filtrowa 83
                <br />
                02-032 Warszawa
                <br />
                Polska
              </li>
              <li className="text-gray-400 mt-2">
                NIP: 7010961986
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mainly. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
} 