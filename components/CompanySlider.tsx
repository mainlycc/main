"use client";

import Image from 'next/image';

const companies = [
  {
    name: "Odkryca",
    logo: "/companies/odkryca.png"
  },
  {
    name: "GEMO",
    logo: "/companies/1_logo_GEMO 2.png"
  },
  {
    name: "Logo 1",
    logo: "/companies/logo1.png"
  },
  {
    name: "Calcium Sandoz",
    logo: "/companies/LOGO Calcium Sandoz_2023 10 26_RGB-02 1.png"
  },
  {
    name: "Poloniny",
    logo: "/companies/logopoloniny.jpg"
  },
  {
    name: "FA",
    logo: "/companies/FA.png"
  },
  {
    name: "Olewnik",
    logo: "/companies/olewnik.png"
  }
];

export default function CompanySlider() {
  return (
    <div className="w-full py-12 bg-black">
      <div className="max-w-[95%] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Zaufali nam</h2>
        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap gap-12 companies-scroll">
            {/* Pierwsza kopia logo */}
            {companies.map((company, index) => (
              <div 
                key={`first-${index}`}
                className="inline-block flex-shrink-0"
              >
                <div className="w-52 h-28 relative bg-zinc-900/20 rounded-lg flex items-center justify-center p-4 hover:bg-zinc-900/40 transition-all duration-300 transform hover:scale-110 hover:z-10">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
            {/* Druga kopia logo dla płynnego przewijania */}
            {companies.map((company, index) => (
              <div 
                key={`second-${index}`}
                className="inline-block flex-shrink-0"
              >
                <div className="w-52 h-28 relative bg-zinc-900/20 rounded-lg flex items-center justify-center p-4 hover:bg-zinc-900/40 transition-all duration-300 transform hover:scale-110 hover:z-10">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 