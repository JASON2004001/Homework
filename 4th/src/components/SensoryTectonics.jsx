import React from 'react';
import { BOOKING_ACTIONS } from '../store/retreatBookingSlice';

export default function SensoryTectonics({ dispatch }) {
  const crafts = [
    {
      title: '100–Year Kiso Hinoki',
      desc: 'Harvested exclusively from Nagano certified conservation reserves. Rich in aromatic phytoncides that naturally sanitize and calm the respiratory nervous system.',
      icon: '🌲',
    },
    {
      title: 'Mount Asama Basalt',
      desc: 'Hand-chiseled volcanic stone beds rich in crystalline silica. Absorbs excess hydrothermal moisture and radiates soothing far-infrared warmth into the living quarters.',
      icon: '⛰️',
    },
    {
      title: 'Hand-Loomed Flax & Linen',
      desc: 'Unbleached, heavy-weight natural flax for drapery and daybeds. Washed repeatedly with thermal mineral waters to achieve extraordinary tactile softness.',
      icon: '🧵',
    },
    {
      title: 'Mulberry Washi & Shoji',
      desc: 'Translucent architectural partitions created by Nagano paper masters. Diffuses harsh exterior snow glare into a gentle, golden meditative radiance.',
      icon: '📜',
    },
  ];

  return (
    <section id="sensory" className="py-16 px-6 lg:px-14 bg-[#0d0d0e] text-[#ececee] border-b border-[#1c1c1f]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
        {/* Left Column Narrative & Acoustic Dial */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] tracking-[0.3em] text-[#dfba91] font-semibold uppercase block">
            SENSORY TECTONICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f7f4ee] leading-tight">
            Honoring Imperfection & Deep Time
          </h2>
          <p className="text-xs sm:text-sm text-[#9a958a] font-light leading-relaxed">
            The sanctuary rejects synthetic coatings. Every beam, textile, and block is tactile and organic,
            aging gracefully under alpine humidity and geothermal steam.
          </p>

          {/* Acoustic Solitude Rating Dial matching Screenshot 7 */}
          <div className="p-5 bg-[#141416] border border-[#242428] rounded-2xl flex items-center gap-5">
            <div className="w-16 h-16 rounded-full border-4 border-[#dfba91] flex items-center justify-center font-mono font-bold text-xs text-[#dfba91] shrink-0">
              99.4%
            </div>
            <div>
              <h4 className="text-xs font-serif font-bold text-[#f7f4ee]">Acoustic Solitude Rating</h4>
              <p className="text-[11px] text-[#78756d] font-light mt-0.5">
                Triple-glazed Nordic insulation eliminates wind turbulence, leaving only the rhythm of spring waters and cedar wind.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Craft Grid Cards matching Screenshot 7 */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {crafts.map((c) => (
            <div key={c.title} className="p-6 bg-[#141416] border border-[#242428] rounded-2xl space-y-3">
              <span className="text-2xl text-[#dfba91] block">{c.icon}</span>
              <h3 className="text-sm font-serif font-bold text-[#f7f4ee]">{c.title}</h3>
              <p className="text-xs text-[#8e8b82] font-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Synchronize Your Stay Inscription Banner matching Screenshot 7 */}
      <div className="bg-[#141416] border border-[#26262a] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[9px] tracking-[0.25em] text-[#dfba91] uppercase font-mono block">
            📅 LUNAR & SOLSTICE RESERVATION WINDOW
          </span>
          <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#f7f4ee]">
            Synchronize Your Stay With the High Ridge
          </h3>
          <p className="text-xs text-[#8e8b82] max-w-xl font-light">
            Reservations are strictly limited to preserve ecological quiet and ensure uninterrupted 100% Gensen thermal replenishment in every private bath.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#1c1c20] border border-[#2b2b32] rounded-xl text-center text-xs font-mono">
            <span className="text-[#78756d] block text-[8px] uppercase">NEXT NEW MOON</span>
            <span className="text-[#dfba91] font-bold">Dec 30</span>
          </div>
          <button
            onClick={() => dispatch({ type: BOOKING_ACTIONS.OPEN_MODAL })}
            className="px-7 py-3.5 bg-[#dfba91] hover:bg-[#caa278] text-[#14120e] font-sans font-extrabold text-xs tracking-[0.2em] rounded-xl transition cursor-pointer active:scale-95 uppercase flex items-center gap-2"
          >
            <span>Inscribe Stay</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}