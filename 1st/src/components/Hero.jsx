import React from 'react';
import { useAtmosphere } from '../context/AtmosphereContext';
import { useSommelierStore } from '../store/useSommelierStore';

export default function Hero({ onReserveClick }) {
  const telemetry = useAtmosphere();
  const addPairing = useSommelierStore((state) => state.addPairing);

  return (
    <section id="hero" className="relative pt-6 pb-12 px-6 lg:px-14 bg-[#0c0b0a] text-[#f5ebd9]">
      {/* Accolades Bar */}
      <div className="flex flex-wrap items-center justify-between text-[10px] tracking-[0.25em] text-[#9c9080] border-b border-[#24201c] pb-3 mb-10 gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-[#1a1612] border border-[#2d2720] text-[#d4af37] font-bold rounded">
            ★ {telemetry.michelinStars}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline uppercase">WORLD'S 50 BEST DISCOVERY</span>
        </div>
        <div className="flex items-center gap-4 text-[#d4af37]">
          <span>🏆 {telemetry.wineSpectator}</span>
          <span className="text-[#3a332a]">|</span>
          <span className="text-[#9c9080]">{telemetry.season}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase">
            <span className="w-6 h-[1px] bg-[#d4af37]"></span>
            <span>AN IMMERSIVE GASTRONOMIC SANCTUARY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#fbf7f0] leading-[1.08] tracking-tight">
            An Ode to Fire, <br />
            <span className="italic font-normal text-[#f59e0b]">Season & Artistry.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#a39785] max-w-xl font-light leading-relaxed">
            Step beyond the bustle into a discreet salon where elemental flame,
            biodynamic harvests, and rare vintage archives meet. Curated across a 12–course
            progressive tasting odyssey by Chef Patron Julian Moreau.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onReserveClick}
              className="px-7 py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-black font-extrabold text-xs tracking-[0.18em] rounded-lg shadow-[0_4px_25px_rgba(245,158,11,0.4)] transition flex items-center gap-2 active:scale-95"
            >
              <span>RESERVE SANCTUARY</span>
              <span>→</span>
            </button>
            <a
              href="#menu"
              className="px-7 py-3.5 bg-[#171410] hover:bg-[#211d17] border border-[#2d2720] text-[#f5ebd9] font-bold text-xs tracking-[0.18em] rounded-lg transition flex items-center gap-2"
            >
              <span>🍴</span>
              <span>EXPLORE MENUS</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1f1b16] max-w-md">
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#f59e0b]">12</div>
              <div className="text-[9px] tracking-[0.2em] text-[#807567] uppercase mt-0.5">COURSE TASTING</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#f59e0b]">1,850+</div>
              <div className="text-[9px] tracking-[0.2em] text-[#807567] uppercase mt-0.5">CELLAR LABELS</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#f59e0b]">24</div>
              <div className="text-[9px] tracking-[0.2em] text-[#807567] uppercase mt-0.5">SEATS PER EVENING</div>
            </div>
          </div>
        </div>

        {/* Right Column: Card Without Image Dependencies */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#2d2720] bg-[#12100d] shadow-2xl">
            {/* Pure CSS Texture / Atmospheric Hero Canvas */}
            <div className="relative h-64 sm:h-72 w-full bg-radial from-[#241c14] via-[#15120e] to-[#0c0a08] flex items-center justify-center border-b border-[#24201c]">
              <div className="text-center space-y-2 opacity-40">
                <span className="text-4xl text-[#d4af37]">✦</span>
                <p className="text-[9px] tracking-[0.25em] text-[#d4af37] uppercase font-serif">Aurelia Culinary Sanctuary</p>
              </div>

              {/* Top-Right Pill Badge */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#2f2720] text-[8px] tracking-[0.25em] text-[#f59e0b] px-3 py-1 rounded font-bold uppercase">
                COURSE VII HIGHLIGHT
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] font-semibold mb-1">
                <span className="uppercase text-[#d4af37]">AUTUMN NOCTURNE OPUS</span>
                <span className="text-[#f5ebd9]">$295 Tasting Inception</span>
              </div>

              <h3 className="text-2xl font-serif text-[#fbf7f0] font-bold mt-1">
                Miyazaki A5 Wagyu & Périgord Truffle
              </h3>
              
              <p className="text-xs text-[#8f8373] mt-2 font-light leading-relaxed">
                Emulsified aged beef tallow, smoked sunchoke velouté, and charred Japanese binchōtan reduction.
              </p>

              {/* Sommelier Pairing Bar */}
              <div className="mt-5 p-3.5 bg-black/60 border border-[#2b251e] rounded-2xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#1e1914] border border-[#3b3228] flex items-center justify-center text-lg text-[#d4af37] shrink-0">
                    🍷
                  </div>
                  <div className="truncate">
                    <span className="text-[8px] tracking-[0.2em] text-[#8a7f70] uppercase block font-semibold">
                      SOMMELIER PAIRING
                    </span>
                    <span className="text-xs text-[#f5ebd9] font-serif font-bold truncate block">
                      2018 Domaine Leflaive Puligny
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => addPairing({ name: '2018 Domaine Leflaive Puligny', price: 95 })}
                  className="px-3 py-1.5 bg-[#f59e0b]/15 hover:bg-[#f59e0b] hover:text-black border border-[#f59e0b]/50 text-[#f59e0b] text-[10px] font-bold rounded-lg transition shrink-0 cursor-pointer active:scale-95"
                >
                  + Pair ($95)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}