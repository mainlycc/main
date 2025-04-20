"use client";

import ContactForm from "../../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center px-6 py-24">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-8 text-center">
            Skontaktuj się z nami
          </h1>
          <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            Masz pytania? Chcesz rozpocząć projekt? Jesteśmy tutaj, aby pomóc Ci zrealizować Twoje cele cyfrowe.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-[#FA6503]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400 mb-4">
                Wyślij nam wiadomość w dowolnym momencie
              </p>
              <a href="mailto:kontakt@mainly.pl" className="text-[#FA6503] hover:underline">
                kontakt@mainly.pl
              </a>
            </div>

            <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-[#FA6503]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p className="text-gray-400 mb-4">
                Dostępni od poniedziałku do piątku, 9:00 - 17:00
              </p>
              <a href="tel:+48604819972" className="text-[#FA6503] hover:underline">
                +48 604 819 972
              </a>
            </div>

            <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl flex flex-col items-center text-center">
              <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#FA6503]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Adres</h3>
              <p className="text-gray-400 mb-4">
                Nasze biuro
              </p>
              <address className="text-[#FA6503] not-italic">
                ul. Filtrowa 83<br />
                02-032 Warszawa<br />
                Polska
              </address>
              <p className="text-gray-400 mt-2">
                NIP: 7010961986
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
} 