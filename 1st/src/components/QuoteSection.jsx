import React from 'react';

export default function QuoteSection() {
  return (
    <section id="story" className="py-20 px-6 lg:px-14 bg-[#0a0908] text-center border-y border-[#24201c]">
      <div className="max-w-4xl mx-auto space-y-4">
        <span className="text-4xl text-[#d4af37] font-serif select-none">“</span>
        <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#fbf7f0] italic leading-tight">
          “An unmissable masterclass in sensory restraint, ancient flame control,
          and pure gastronomic poetry.”
        </blockquote>
        <div className="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase font-bold pt-4">
          — THE MICHELIN GUIDE, 2024 EVALUATION —
        </div>
      </div>
    </section>
  );
}