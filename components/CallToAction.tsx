"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="w-full bg-[#FA6503] py-12 sm:py-16 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Gotowy na transformację swojej obecności online?
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6">
            Pomożemy Ci stworzyć nowoczesną, wydajną i przyciągającą oko stronę internetową, która wyróżni Cię na tle konkurencji.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center justify-center px-6 py-2 border-2 border-white text-sm sm:text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-[#FA6503] transition-all duration-300"
          >
            Rozpocznij projekt
            <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 