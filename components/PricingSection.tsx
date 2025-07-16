"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Podstawowy",
    price: "od 1,500 zł",
    description: "Idealny dla małych firm i startupów",
    features: [
      "Strona internetowa do 5 podstron",
      "Responsywny design",
      "Podstawowa optymalizacja SEO",
      "Formularz kontaktowy",
      "Integracja z Google Analytics",
      "Wsparcie techniczne przez 30 dni",
      "Czas realizacji: 1-2 tygodnie"
    ],
    popular: false
  },
  {
    name: "Profesjonalny",
    price: "od 3,500 zł",
    description: "Dla firm, które chcą się wyróżnić",
    features: [
      "Strona internetowa do 10 podstron",
      "Zaawansowany design UX/UI",
      "Pełna optymalizacja SEO",
      "System zarządzania treścią (CMS)",
      "Integracja z mediami społecznościowymi",
      "Formularze i kalkulatory",
      "Wsparcie techniczne przez 90 dni",
      "Czas realizacji: 3-4 tygodnie"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "od 7,000 zł",
    description: "Kompleksowe rozwiązania dla dużych firm",
    features: [
      "Nielimitowana liczba podstron",
      "Indywidualny projekt UX/UI",
      "Zaawansowana optymalizacja SEO",
      "System zarządzania treścią",
      "Integracje z systemami zewnętrznymi",
      "Panel administracyjny",
      "Szkolenie z obsługi",
      "Wsparcie techniczne przez 12 miesięcy",
      "Czas realizacji: 6-8 tygodni"
    ],
    popular: false
  }
];

export default function PricingSection() {
  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Przejrzysty cennik</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Wybierz pakiet dopasowany do Twoich potrzeb. Każdy projekt jest wyceniany indywidualnie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'border-[#FA6503] bg-zinc-900' 
                  : 'border-zinc-800 bg-zinc-900'
              } hover:border-[#FA6503]/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FA6503] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Najpopularniejszy
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-6 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/kontakt" className="w-full">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-[#FA6503] hover:bg-[#FA6503]/90' 
                        : 'bg-zinc-800 hover:bg-zinc-700'
                    }`}
                  >
                    Wybierz pakiet
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Nie znalazłeś odpowiedniego pakietu? Skontaktuj się z nami, aby omówić indywidualne potrzeby.
          </p>
          <Link href="/kontakt">
            <Button variant="outline" className="border-[#FA6503] text-[#FA6503] hover:bg-[#FA6503] hover:text-white">
              Darmowa konsultacja
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 