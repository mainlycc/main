"use client";

import Link from "next/link";
import { Folder, Users, Settings, BarChart3, Home } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel Administratora</h1>
          <Link href="/" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white">
            <Home className="w-4 h-4 mr-2 inline-block" /> Powrót do strony głównej
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-6 h-6 text-[#FA6503] mr-2" />
              <h2 className="text-xl font-bold">Statystyki</h2>
            </div>
            <p className="text-gray-400 mb-4">Przeglądaj statystyki i dane analityczne.</p>
            <Link
              href="#"
              className="inline-block px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white"
            >
              Przejdź
            </Link>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Folder className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-xl font-bold">Projekty</h2>
            </div>
            <p className="text-gray-400 mb-4">Zarządzaj projektami i portfolio.</p>
            <Link
              href="/admin/projekty"
              className="inline-block px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white"
            >
              Przejdź
            </Link>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-xl font-bold">Użytkownicy</h2>
            </div>
            <p className="text-gray-400 mb-4">Zarządzaj użytkownikami i uprawnieniami.</p>
            <Link
              href="#"
              className="inline-block px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white"
            >
              Przejdź
            </Link>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-purple-400 mr-2" />
              <h2 className="text-xl font-bold">Ustawienia</h2>
            </div>
            <p className="text-gray-400 mb-4">Skonfiguruj ustawienia systemu.</p>
            <Link
              href="#"
              className="inline-block px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white"
            >
              Przejdź
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Ostatnia aktywność</h2>
            <div className="space-y-4">
              {[
                {
                  action: "Dodano nowy projekt",
                  user: "Admin",
                  time: "Dzisiaj, 10:45",
                },
                {
                  action: "Zaktualizowano projekt: Kalkulator GAP",
                  user: "Admin",
                  time: "Wczoraj, 15:30",
                },
                {
                  action: "Dodano nowego użytkownika",
                  user: "Admin",
                  time: "23.03.2024, 12:15",
                },
                {
                  action: "Zmieniono ustawienia strony",
                  user: "Admin",
                  time: "20.03.2024, 09:00",
                },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <p className="font-medium">{item.action}</p>
                    <p className="text-sm text-gray-400">Wykonał: {item.user}</p>
                  </div>
                  <p className="text-sm text-gray-400">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Szybkie akcje</h2>
            <div className="space-y-3">
              <Link
                href="/admin/projekty"
                className="flex items-center p-3 bg-zinc-800 hover:bg-zinc-700 rounded text-white"
              >
                <Folder className="w-5 h-5 mr-2" /> Zarządzaj projektami
              </Link>
              <Link
                href="#"
                className="flex items-center p-3 bg-zinc-800 hover:bg-zinc-700 rounded text-white"
              >
                <Users className="w-5 h-5 mr-2" /> Zarządzaj użytkownikami
              </Link>
              <Link
                href="#"
                className="flex items-center p-3 bg-zinc-800 hover:bg-zinc-700 rounded text-white"
              >
                <Settings className="w-5 h-5 mr-2" /> Konfiguracja strony
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 