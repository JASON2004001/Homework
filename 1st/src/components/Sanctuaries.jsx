import React from 'react';
import { useAtmosphere } from '../context/AtmosphereContext';

export default function Sanctuaries() {
  const telemetry = useAtmosphere();

  const venues = [
    {
      num: '01',
      title: 'The Open Hearth Counter',
      desc: 'Ten front-row counter seats facing live binchōtan coals, white oak logs, and artisanal copper cookware.',
      tag: 'CHEF COUNTER ONLY',
      icon: '🔥',
    },
    {
      num: '02',
      title: 'The 1,850-Label Vault',
      desc: 'Deep vertical archives spanning Romanée-Conti, rare Grower Champagnes, and Japanese single malts.',
      tag: 'SOMMELIER GUIDED',
      icon: '🍷',
    },
    {
      num: '03',
      title: 'Private Salon Nocturne',
      desc: 'A secluded enclave accessed via private entry with dedicated butler service and customized vinyl selections.',
      tag: 'UP TO 14 GUESTS',
      icon: '🕯️',
    },
  ];

  return (
    <section id="experiences" className="py-16 px-6 lg:px-14 bg-[#0c0b0a] text-[#f5ebd9]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Heading + Cellar Telemetry Badge */}
        <div className="lg:col-span-4 space-y-6">
          <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block">
            ARCHITECTURAL THEATER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fbf7f0] leading-tight">
            Three Sanctuaries of Tactile Indulgence
          </h2>
          <p className="text-xs text-[#8f8373] font-light leading-relaxed">
            Designed by Kengo Kuma Atelier alumni, the dining chambers fuse black basalt blocks,
            brushed Nordic brass, and acoustic felt baffles for pure, unhurried immersion.
          </p>

          {/* Cellar Humidity and Temp Control Widget */}
          <div className="p-5 bg-[#14120f] border border-[#2b251e] rounded-2xl space-y-3">
            <span className="text-[9px] tracking-[0.2em] text-[#d4af37] uppercase block font-semibold">
              CELLAR HUMIDITY & TEMP CONTROL {telemetry.cellarTemp} • {telemetry.cellarHumidity}
            </span>
            <div className="h-1.5 w-full bg-[#241f18] rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-[#d4af37] to-[#f59e0b] rounded-full"></div>
            </div>
            <div className="flex justify-between text-[9px] text-[#807567] tracking-wider uppercase font-mono">
              <span>Precision Monitored</span>
              <span>Zero Fluctuation Metric</span>
            </div>
          </div>
        </div>

        {/* Right 3 Sanctuary Cards (Without image dependencies) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {venues.map((venue) => (
            <div
              key={venue.num}
              className="bg-[#14120f] border border-[#29231c] rounded-2xl overflow-hidden p-5 flex flex-col justify-between hover:border-[#f59e0b]/50 transition group"
            >
              <div>
                {/* Pure CSS Sanctuary Header Canvas */}
                <div className="h-40 rounded-xl bg-radial from-[#2a1d13] via-[#17130e] to-[#0d0b09] border border-[#282119] mb-4 flex flex-col items-center justify-center">
                  <span className="text-3xl block select-none mb-1 opacity-50 group-hover:scale-110 transition duration-300">
                    {venue.icon}
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-[#d4af37]/60 uppercase font-serif">
                    Chamber {venue.num}
                  </span>
                </div>

                <div className="text-sm font-serif font-bold text-[#f59e0b] mb-1">
                  {venue.num}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#fbf7f0] mb-2">
                  {venue.title}
                </h3>
                <p className="text-xs text-[#8c8070] font-light leading-relaxed">
                  {venue.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1f1b16] text-[8px] tracking-[0.25em] text-[#d4af37] font-bold uppercase">
                {venue.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}