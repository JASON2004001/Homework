import React from 'react';

export default function VoicesFromVault() {
  const testimonials = [
    {
      custody: 'CUSTODY ID: #880-01',
      city: 'ZÜRICH, CHE',
      quote:
        '“To witness the cage of the CHR-904 oscillating under morning light is to observe time stripped of digital impermanence. It is not an accessory; it is a mechanical monument.”',
      name: 'Dr. Hanspeter K.',
      title: 'Horological Fellow & Purist Collector',
      initials: 'HK',
    },
    {
      custody: 'CUSTODY ID: #742-02',
      city: 'MAYFAIR, LONDON',
      quote:
        '“The bespoke dialogue with the master watchmaker spanned eight months. They didn’t just build my Astronomia Nocturne—they charted the sky above our family estate.”',
      name: 'Lord Arthur W.',
      title: 'Private Heritage Collector',
      initials: 'AW',
    },
    {
      custody: 'CUSTODY ID: #519-04',
      city: 'GINZA, TOKYO',
      quote:
        '“The monopusher chronograph’s tactile resistance when triggering the column wheel is incomparable. It represents the pinnacle of Geneva anglage in modern form.”',
      name: 'Tatsuo Nakamura',
      title: 'President, Nippon Horology Society',
      initials: 'TN',
    },
  ];

  return (
    <section id="heritage" className="py-16 px-6 lg:px-14 bg-[#0a0a0c] text-[#ececee]">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block mb-1">
            PATRON PROVENANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fbfbfd]">
            Voices from the Vault
          </h2>
        </div>
        <div className="hidden sm:block text-[9px] tracking-[0.25em] text-[#70707e] uppercase font-mono">
          VERIFIED INDEPENDENT CUSTODIANS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.custody}
            className="bg-[#121216] border border-[#22222a] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex justify-between text-[9px] font-mono font-bold tracking-wider mb-4">
                <span className="text-[#d4af37]">{t.custody}</span>
                <span className="text-[#646470]">{t.city}</span>
              </div>
              <p className="text-xs text-[#a2a2b0] font-light leading-relaxed italic mb-6">
                {t.quote}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e24]">
              <div className="w-10 h-10 rounded-full bg-[#1c1c24] border border-[#2e2e3a] text-[#d4af37] font-serif font-bold flex items-center justify-center text-xs">
                {t.initials}
              </div>
              <div>
                <div className="text-xs font-serif font-bold text-[#f5f5f7]">
                  {t.name}
                </div>
                <div className="text-[10px] text-[#70707e] font-light">
                  {t.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}