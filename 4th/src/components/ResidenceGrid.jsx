import React from 'react';
import { BOOKING_ACTIONS } from '../store/retreatBookingSlice';

export default function ResidenceGrid({ dispatch }) {
  const cards = [
    {
      num: 'RESIDENCE 03',
      name: 'Basalt Onsen Suite',
      priceINR: 82000,
      desc: 'Excavated directly into subterranean Mount Asama basalt bedrock. The private indoor-outdoor bath is lined with rough-hewn volcanic blocks that release negative ions and retain geothermal heat throughout the deepest winter frosts.',
      area: '140 m²',
      capacity: '2 Guests',
      flow: 'Direct Basin',
      footerLeft: 'Shoji Garden Sanctuary',
      badge: 'Sunken Basalt Well',
      icon: '🪨',
    },
    {
      num: 'RESIDENCE 04',
      name: 'Komorebi Forest Villa',
      priceINR: 95000,
      desc: 'Named for sunlight filtering through mountain cedar needles. Enclosed by century-old moss gardens, this single-level retreat features an open cedar deck with a natural outdoor hot spring surrounded by wild river rocks and lantern paths.',
      area: '185 m²',
      capacity: '2–3 Guests',
      flow: 'Open Air Rotenburo',
      footerLeft: 'Moss Forest Trail Access',
      badge: 'Filtered Canopy Light',
      icon: '🌿',
    },
  ];

  return (
    <section id="residences" className="py-14 px-6 lg:px-14 bg-[#0d0d0e] text-[#ececee] border-b border-[#1c1c1f]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((c) => (
          <div
            key={c.num}
            className="bg-[#141416] border border-[#242428] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#dfba91]/50 transition group shadow-xl"
          >
            <div>
              {/* Image Frame Canvas matching Screenshot 5 */}
              <div className="relative h-60 rounded-2xl bg-radial from-[#22211f] via-[#141416] to-[#0a0a0b] border border-[#212124] mb-6 flex flex-col items-center justify-center">
                <span className="text-4xl block opacity-40 mb-2">{c.icon}</span>
                <span className="text-[8px] font-mono tracking-[0.25em] text-[#dfba91] uppercase">
                  {c.name}
                </span>

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#2b2a2e] text-[8px] tracking-[0.2em] text-[#8e8b82] px-2.5 py-1 rounded uppercase font-bold">
                  {c.num}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-[#2b2a2e] text-[8px] tracking-[0.2em] text-[#dfba91] px-2.5 py-1 rounded uppercase font-bold">
                  {c.badge}
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-serif font-bold text-[#f7f4ee] group-hover:text-[#dfba91] transition">
                  {c.name}
                </h3>
                <span className="text-lg font-serif font-bold text-[#dfba91]">
                  ₹{c.priceINR.toLocaleString('en-IN')} <span className="text-[10px] text-[#78756d]">/ night</span>
                </span>
              </div>

              <p className="text-xs text-[#9a958a] font-light leading-relaxed mb-6">
                {c.desc}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#1f1f22] text-[10px] text-center font-mono">
                <div>
                  <span className="text-[#78756d] block text-[8px] uppercase">AREA</span>
                  <span className="text-[#f7f4ee]">{c.area}</span>
                </div>
                <div>
                  <span className="text-[#78756d] block text-[8px] uppercase">CAPACITY</span>
                  <span className="text-[#f7f4ee]">{c.capacity}</span>
                </div>
                <div>
                  <span className="text-[#78756d] block text-[8px] uppercase">FLOW / ONSEN</span>
                  <span className="text-[#dfba91]">{c.flow}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 flex items-center justify-between text-xs">
              <span className="text-[#78756d] text-[10px] uppercase font-mono">{c.footerLeft}</span>
              <button
                onClick={() => {
                  dispatch({ type: BOOKING_ACTIONS.SET_PAVILION, payload: c.name });
                  dispatch({ type: BOOKING_ACTIONS.OPEN_MODAL });
                }}
                className="text-xs font-bold text-[#dfba91] hover:underline uppercase cursor-pointer"
              >
                Reserve Suite →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}