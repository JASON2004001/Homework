import React from 'react';
import { TREATMENTS_ACTIONS } from '../store/treatmentsSlice';
import { useApothecaryStore } from '../store/useApothecaryStore';

export default function HolisticRituals({ state, dispatch }) {
  const addToBag = useApothecaryStore((s) => s.addToBag);

  const categories = [
    'ALL RITUALS',
    'HERBAL STEAM & ONSEN',
    'SOUND BATHS & RESONANCE',
    'HOLISTIC BODYWORK',
    'TEA ALCHEMY',
  ];

  const filteredRituals =
    state.activeCategory === 'ALL RITUALS'
      ? state.rituals
      : state.rituals.filter((r) => r.category === state.activeCategory);

  return (
    <section id="rituals" className="py-16 px-6 lg:px-14 bg-[#0c0c0d] text-[#ececee]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#b3906e] font-semibold uppercase block mb-1">
            APOTHECARY MENU
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f4efe8]">
            Curated Holistic Rituals
          </h2>
          <p className="text-xs text-[#858380] max-w-lg font-light leading-relaxed mt-2">
            Each formula is hand-blended each dawn utilizing wild botanicals harvested from the Hakone ridge line.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => dispatch({ type: TREATMENTS_ACTIONS.SET_CATEGORY, payload: c })}
              className={`px-4 py-2 rounded text-[9px] font-sans tracking-[0.2em] uppercase font-bold transition cursor-pointer ${
                state.activeCategory === c
                  ? 'bg-[#b3906e] text-[#0c0c0d]'
                  : 'bg-[#151417] border border-[#242327] text-[#858380] hover:border-[#38373b]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Ritual Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRituals.map((ritual) => (
          <div
            key={ritual.id}
            className="bg-[#141416] border border-[#242327] rounded-3xl overflow-hidden p-6 flex flex-col justify-between hover:border-[#b3906e]/50 transition group"
          >
            <div>
              {/* Texture Header */}
              <div className="h-44 rounded-2xl bg-radial from-[#221f1d] via-[#151417] to-[#0c0c0d] border border-[#212023] mb-4 flex flex-col items-center justify-center">
                <span className="text-3xl block opacity-60 mb-1">{ritual.icon}</span>
                <span className="text-[8px] font-mono text-[#b3906e] uppercase tracking-wider">
                  Botanical Formulation
                </span>
              </div>

              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[9px] tracking-[0.2em] text-[#73716e] uppercase font-bold">
                  {ritual.duration}
                </span>
                <span className="text-lg font-serif font-bold text-[#b3906e]">
                  ${ritual.priceUSD}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-[#f4efe8] mb-2">
                {ritual.title}
              </h3>
              <p className="text-xs text-[#858380] font-light leading-relaxed mb-6">
                {ritual.desc}
              </p>
            </div>

            <button
              onClick={() => addToBag(ritual)}
              className="w-full py-2.5 bg-[#1b1a1e] hover:bg-[#b3906e] hover:text-black border border-[#2e2d31] text-[#f4efe8] font-sans font-bold text-[10px] tracking-[0.2em] rounded-xl transition flex items-center justify-center gap-2 uppercase cursor-pointer"
            >
              <span>👜</span>
              <span>ADD TO BOTANICAL BAG</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}