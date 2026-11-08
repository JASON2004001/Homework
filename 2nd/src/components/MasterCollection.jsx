import React from 'react';
import { CATALOG_ACTIONS } from '../store/catalogSlice';
import { useVaultStore } from '../store/useVaultStore';

export default function MasterCollection({ state, dispatch }) {
  const addToVault = useVaultStore((s) => s.addToVault);

  const filters = [
    'ALL MASTERPIECES',
    'DOUBLE TOURBILLON',
    'MINUTE REPEATER',
    'ASTRONOMICAL CELESTIAL',
  ];

  const filteredPieces =
    state.activeFilter === 'ALL MASTERPIECES'
      ? state.timepieces
      : state.timepieces.filter((p) => p.category === state.activeFilter);

  return (
    <section id="masterpieces" className="py-16 px-6 lg:px-14 bg-[#0a0a0c] text-[#ececee]">
      {/* Header with Category Filter Buttons matching Screenshot 5 */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block mb-1">
            MASTER COLLECTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fbfbfd]">
            Les Grandes Complications
          </h2>
          <p className="text-xs text-[#8c8c9a] max-w-lg font-light leading-relaxed mt-2">
            Every reference is assembled entirely by a single master watchmaker from raw alloy stock to final casing.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => dispatch({ type: CATALOG_ACTIONS.SET_FILTER, payload: f })}
              className={`px-4 py-2 rounded text-[10px] font-sans tracking-[0.18em] uppercase transition font-bold cursor-pointer ${
                state.activeFilter === f
                  ? 'bg-[#d4af37] text-black shadow-[0_2px_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#141418] border border-[#24242e] text-[#90909e] hover:border-[#383846]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Masterpiece Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPieces.map((piece) => (
          <div
            key={piece.id}
            className="bg-[#121216] border border-[#24242e] rounded-3xl overflow-hidden hover:border-[#d4af37]/50 transition flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Card Canvas Header */}
              <div className="relative h-64 w-full bg-radial from-[#1e1e28] via-[#121218] to-[#0a0a0c] flex items-center justify-center border-b border-[#202028] p-4">
                {/* Dial Silhouette */}
                <div className="w-36 h-36 rounded-full border-2 border-[#d4af37]/40 bg-black/60 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] flex items-center justify-center group-hover:scale-105 transition duration-500">
                  <div className="text-center space-y-1">
                    <span className="text-2xl text-[#d4af37]">⚙</span>
                    <span className="text-[7px] font-mono text-[#8c8c9a] uppercase block">
                      {piece.ref}
                    </span>
                  </div>
                </div>

                {/* Top Pill Badges matching Screenshot 5 */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#2b2b36] text-[8px] tracking-[0.2em] text-[#f5f5f7] px-2.5 py-1 rounded uppercase font-bold">
                  {piece.editionBadge}
                </div>
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-[#2b2b36] text-[8px] tracking-[0.2em] text-[#d4af37] px-2.5 py-1 rounded uppercase font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                  <span>{piece.allocationStatus}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <span className="text-[9px] font-mono text-[#787884] uppercase tracking-wider block mb-1">
                  {piece.ref}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#fbfbfd] group-hover:text-[#d4af37] transition mb-2">
                  {piece.title}
                </h3>
                <p className="text-xs text-[#8a8a96] font-light leading-relaxed mb-6">
                  {piece.desc}
                </p>

                {/* Specs Box */}
                <div className="space-y-2 py-3 border-y border-[#1e1e26] text-[10px] text-[#90909e]">
                  <div className="flex justify-between">
                    <span className="uppercase text-[#6e6e7c]">CASE DIMENSIONS</span>
                    <span className="font-mono text-[#e5e5ea]">{piece.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase text-[#6e6e7c]">KINETIC RESERVE</span>
                    <span className="font-mono text-[#e5e5ea]">{piece.reserve}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase text-[#6e6e7c]">COMPLICATION</span>
                    <span className="font-mono text-[#d4af37]">{piece.complication}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Price & Action */}
            <div className="p-6 pt-0 flex items-center justify-between">
              <div>
                <span className="text-[8px] tracking-[0.2em] text-[#6e6e7c] uppercase block">
                  OFFICIAL ALLOCATION
                </span>
                <span className="text-base font-serif font-bold text-[#d4af37]">
                  CHF {piece.priceCHF.toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => addToVault(piece)}
                className="text-xs font-sans tracking-wider text-[#ececee] group-hover:text-[#d4af37] font-bold underline transition cursor-pointer"
              >
                {piece.actionLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}