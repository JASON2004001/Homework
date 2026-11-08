import React from 'react';
import { FLEET_ACTIONS } from '../store/fleetCatalogSlice';
import { usePassenger } from '../context/PassengerContext';

export default function CuratedFleet({ state, dispatch }) {
  const { openClearance } = usePassenger();

  const categories = [
    'ALL SOVEREIGN FLEET',
    'LIGHT JETS (4-7 PAX)',
    'MIDSIZE CABIN (8-9 PAX)',
    'HEAVY LONG-RANGE (10-14 PAX)',
  ];

  const filteredJets =
    state.activeCategory === 'ALL SOVEREIGN FLEET'
      ? state.jets
      : state.jets.filter((j) => j.category === state.activeCategory);

  return (
    <section id="fleet" className="py-14 px-6 lg:px-14 bg-[#07090d] text-[#ececee] border-b border-[#171d2b]">
      {/* Header and Category Pills matching Screenshot 5 */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block mb-1">
            AEROVAULT ACTIVE FLEET REGISTRY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f8fafc]">
            Curated Aircraft Fleet
          </h2>
          <p className="text-xs text-[#8292a8] max-w-lg font-light leading-relaxed mt-2">
            Engineered for high-altitude transcontinental reach with soundproof acoustic cabins and handcrafted burl walnut interiors.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-[9px] font-mono font-bold uppercase">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => dispatch({ type: FLEET_ACTIONS.SET_CATEGORY, payload: c })}
              className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                state.activeCategory === c
                  ? 'bg-[#d4af37] text-black shadow-lg'
                  : 'bg-[#0f1624] border border-[#1e2a3d] text-[#8292a8] hover:text-[#f8fafc]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Aircraft Fleet Cards matching Screenshot 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredJets.map((jet) => (
          <div
            key={jet.id}
            className="bg-[#0b1019] border border-[#1e2a3d] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#d4af37]/50 transition group shadow-2xl"
          >
            <div>
              {/* Airplane Silhouette Graphic Header */}
              <div className="relative h-60 rounded-2xl bg-radial from-[#192438] via-[#0e1524] to-[#07090e] border border-[#1c283c] mb-6 flex flex-col items-center justify-center">
                <span className="text-5xl block opacity-50 mb-2">✈</span>
                <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase">
                  {jet.subCategoryBadge}
                </span>

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#223048] text-[8px] tracking-[0.2em] text-[#10b981] px-2.5 py-1 rounded font-mono font-bold uppercase">
                  ● {jet.dispatchBadge}
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-serif font-bold text-[#f8fafc] group-hover:text-[#d4af37] transition">
                  {jet.name}
                </h3>
                <span className="text-lg font-serif font-bold text-[#d4af37]">
                  ₹{(jet.rateINR / 100000).toFixed(1)} Lakh{' '}
                  <span className="text-[10px] text-[#78889e] font-sans">/ hr</span>
                </span>
              </div>

              <p className="text-xs text-[#8292a8] font-light leading-relaxed mb-6">
                {jet.desc}
              </p>

              {/* Specs Grid matching Screenshot 5 */}
              <div className="grid grid-cols-4 gap-2 py-3 border-y border-[#172233] text-[10px] font-mono text-center">
                <div>
                  <span className="text-[#78889e] block text-[8px] uppercase">RANGE</span>
                  <span className="text-[#f8fafc]">{jet.range}</span>
                </div>
                <div>
                  <span className="text-[#78889e] block text-[8px] uppercase">MAX CRUISE</span>
                  <span className="text-[#f8fafc]">{jet.maxCruise}</span>
                </div>
                <div>
                  <span className="text-[#78889e] block text-[8px] uppercase">CEILING</span>
                  <span className="text-[#f8fafc]">{jet.ceiling}</span>
                </div>
                <div>
                  <span className="text-[#78889e] block text-[8px] uppercase">PAYLOAD</span>
                  <span className="text-[#d4af37]">{jet.payload}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 flex items-center justify-between text-xs font-mono">
              <span className="text-[#78889e] text-[10px]">{jet.baggage}</span>
              <button
                onClick={openClearance}
                className="text-xs font-bold text-[#d4af37] hover:underline uppercase cursor-pointer"
              >
                CONFIGURE TAIL →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}