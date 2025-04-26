"use client";

import ContactForm from "../../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-8 text-center">
            Skontaktuj się z nami
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-16 text-center max-w-3xl mx-auto">
            Masz pytania? Chcesz rozpocząć projekt? Jesteśmy tutaj, aby pomóc Ci zrealizować Twoje cele cyfrowe.
          </p>

          <ContactForm />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-16">
            <div className="bg-zinc-950 border border-[#FA6503]/20 p-4 sm:p-6 rounded-xl flex flex-col items-center text-center">
              <div className="bg-zinc-800 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Mail className="text-[#FA6503] w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                Wyślij nam wiadomość w dowolnym momencie
              </p>
              <a href="mailto:kontakt@mainly.pl" className="text-[#FA6503] hover:underline text-sm sm:text-base">
                kontakt@mainly.pl
              </a>
            </div>

            <div className="bg-zinc-950 border border-[#FA6503]/20 p-4 sm:p-6 rounded-xl flex flex-col items-center text-center">
              <div className="bg-zinc-800 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Phone className="text-[#FA6503] w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Telefon</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                Dostępni od poniedziałku do piątku, 9:00 - 17:00
              </p>
              <a href="tel:+48500789826" className="text-[#FA6503] hover:underline text-sm sm:text-base">
                +48 500 789 826
              </a>
            </div>

            <div className="bg-zinc-950 border border-[#FA6503]/20 p-4 sm:p-6 rounded-xl flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <div className="bg-zinc-800 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <MapPin className="text-[#FA6503] w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Adres</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                Nasze biuro
              </p>
              <address className="text-[#FA6503] not-italic text-sm sm:text-base">
                ul. Filtrowa 83<br />
                02-032 Warszawa<br />
                Polska
              </address>
              <p className="text-sm sm:text-base text-gray-400 mt-2">
                NIP: 7010961986
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 