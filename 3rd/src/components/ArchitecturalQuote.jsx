import React from 'react';

export default function ArchitecturalQuote() {
  return (
    <section className="py-20 px-6 lg:px-14 bg-[#0a0a0b] text-center border-y border-[#1f1e22]">
      <div className="max-w-4xl mx-auto space-y-4">
        <span className="text-4xl text-[#b3906e] font-serif select-none">“</span>
        <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#f4efe8] italic leading-tight">
          “Elysium redefines luxury not through excess, but through the profound presence of heat, mist, and silence.”
        </blockquote>
        <div className="text-[10px] tracking-[0.3em] text-[#73716e] uppercase font-bold pt-4">
          ARCHITECTURAL DIGEST • NORDIC ARCHITECTURAL REVIEW
        </div>
      </div>
    </section>
  );
}