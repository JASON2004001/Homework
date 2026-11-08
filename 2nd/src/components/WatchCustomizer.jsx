import React from 'react';
import { CUSTOMIZER_ACTIONS } from '../store/customizerSlice';
import { useVaultStore } from '../store/useVaultStore';
import { useCollector } from '../context/CollectorContext';

export default function WatchCustomizer({ state, dispatch }) {
  const addToVault = useVaultStore((s) => s.addToVault);
  const { openProtocol } = useCollector();

  const caseOptions = [
    'Platinum 950',
    '18K Rose Gold (5N)',
    'Obsidian Forged Carbon',
    '18K White Gold',
  ];

  const dialOptions = [
    { title: 'Grand Feu Enamel', note: 'Bone White & Blued Hands' },
    { title: 'Slate Skeleton', note: 'Anglage Beveled Bridges' },
    { title: 'Sunburst Champagne', note: 'Gold Guilloché Clous de Paris' },
    { title: 'Aventurine Starlight', note: 'Deep Cosmic Copper Inclusions' },
  ];

  const strapOptions = [
    'Matte Black Alligator',
    'Saddle Horween Calfskin',
    'Slate Cordovan',
    'Hand-stitched Rubber',
  ];

  const handleSaveVault = () => {
    addToVault({
      id: `custom-${Date.now()}`,
      ref: `BESPOKE-${state.caseMaterial.slice(0, 2).toUpperCase()}`,
      title: `${state.caseMaterial} Bespoke Chronometer`,
      priceCHF: state.basePriceCHF,
    });
  };

  return (
    <section id="bespoke" className="py-16 px-6 lg:px-14 bg-[#0a0a0c] text-[#ececee]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block mb-1">
            PRIVATE COMMISSION
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fbfbfd]">
            L'Atelier Sur Mesure
          </h2>
          <p className="text-xs text-[#8c8c9a] max-w-xl font-light leading-relaxed mt-2">
            Every chronometer commissioned at Chronos Atelier is an unrepeatable synergy
            between horologist and patron. Configure case metallurgical alloys, grand feu finishes,
            and bespoke strap mounts.
          </p>
        </div>
        <div className="text-[10px] tracking-[0.25em] text-[#70707c] font-mono uppercase bg-[#141418] px-3.5 py-1.5 rounded border border-[#22222a]">
          CUSTOMIZER ENGINE <span className="text-[#d4af37] font-bold">V4.8 HAUTE</span>
        </div>
      </div>

      {/* Main Configurator Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Visualizer Canvas matching Screenshot 4 */}
        <div className="lg:col-span-6 bg-[#121216] border border-[#24242e] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div className="flex justify-between items-center text-[9px] tracking-[0.25em] text-[#70707c] uppercase font-bold mb-6">
            <span className="text-[#d4af37]">{state.caseMaterial.toUpperCase()} EDITION</span>
            <span>CLICK & DRAG TO INSPECT</span>
          </div>

          {/* Interactive Dial Render */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative rounded-full p-6 flex items-center justify-center border-4 border-[#2b2b36] shadow-[inset_0_0_35px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.1)] bg-[#0d0d10]">
            {/* Dial Face changes color dynamically based on state */}
            <div
              className={`w-full h-full rounded-full border border-[#d4af37]/40 flex flex-col items-center justify-center transition duration-500 relative ${
                state.dialArtistry === 'Grand Feu Enamel'
                  ? 'bg-radial from-[#f4ede2] via-[#e2d5c3] to-[#c9baa4] text-slate-900'
                  : state.dialArtistry === 'Slate Skeleton'
                  ? 'bg-radial from-[#1e1e24] via-[#121216] to-[#0a0a0c] text-[#f5f5f7]'
                  : state.dialArtistry === 'Sunburst Champagne'
                  ? 'bg-radial from-[#efdbb2] via-[#cca362] to-[#80632e] text-slate-900'
                  : 'bg-radial from-[#091b36] via-[#040d1a] to-[#01040a] text-[#d4af37]'
              }`}
            >
              {/* Roman Numerals */}
              <span className="text-[11px] font-serif font-black absolute top-2 select-none">XII</span>
              <span className="text-[11px] font-serif font-black absolute bottom-2 select-none">VI</span>
              <span className="text-[11px] font-serif font-black absolute right-3 select-none">III</span>
              <span className="text-[11px] font-serif font-black absolute left-3 select-none">IX</span>

              {/* Sub-dial brand imprint */}
              <div className="text-center space-y-0.5">
                <span className="text-[7px] tracking-[0.25em] font-sans font-bold uppercase block">
                  CHRONOS
                </span>
                <span className="text-[5px] tracking-[0.2em] opacity-70 block font-serif">
                  GENÈVE
                </span>
              </div>

              {/* Skeleton center wheel */}
              <div className="w-12 h-12 rounded-full border border-[#d4af37] absolute flex items-center justify-center opacity-80">
                <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
              </div>
            </div>
          </div>

          {/* Configuration Readout bar at bottom matching Screenshot 4 */}
          <div className="mt-8 pt-6 border-t border-[#1f1f26] flex flex-wrap justify-between items-end gap-4">
            <div>
              <span className="text-[8px] tracking-[0.25em] text-[#70707c] uppercase font-bold block mb-1">
                CONFIGURATION READOUT
              </span>
              <p className="text-xs font-serif text-[#f2f2f5]">
                {state.caseMaterial} • {state.dialArtistry} Dial • {state.leatherMount}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <span className="text-[8px] tracking-[0.2em] text-[#70707c] uppercase block">
                  LEAD TIME
                </span>
                <span className="text-sm font-serif font-bold text-[#ececee]">
                  {state.leadTimeWeeks} Weeks
                </span>
              </div>
              <div>
                <span className="text-[8px] tracking-[0.2em] text-[#70707c] uppercase block">
                  MANUFACTURE ESTIMATE
                </span>
                <span className="text-lg font-serif font-bold text-[#d4af37]">
                  CHF {state.basePriceCHF.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Customizer Panel matching Screenshot 4 */}
        <div className="lg:col-span-6 space-y-8 bg-[#121216] border border-[#24242e] rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* 1. Case Material & Metallurgy */}
          <div>
            <div className="flex justify-between text-xs font-serif font-bold text-[#f5f5f7] mb-3">
              <span>1. CASE MATERIAL & METALLURGY</span>
              <span className="text-[#d4af37]">{state.caseMaterial}</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {caseOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => dispatch({ type: CUSTOMIZER_ACTIONS.SET_CASE, payload: opt })}
                  className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${
                    state.caseMaterial === opt
                      ? 'border-[#d4af37] bg-[#221f14] text-[#d4af37] font-semibold'
                      : 'border-[#262632] bg-[#17171d] text-[#9c9ca8] hover:border-[#3d3d4e]'
                  }`}
                >
                  <span>{opt}</span>
                  <span className={`w-2 h-2 rounded-full ${state.caseMaterial === opt ? 'bg-[#d4af37]' : 'bg-[#33333f]'}`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Dial Artistry & Architecture */}
          <div>
            <div className="flex justify-between text-xs font-serif font-bold text-[#f5f5f7] mb-3">
              <span>2. DIAL ARTISTRY & ARCHITECTURE</span>
              <span className="text-[#d4af37]">{state.dialArtistry}</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {dialOptions.map((opt) => (
                <button
                  key={opt.title}
                  onClick={() => dispatch({ type: CUSTOMIZER_ACTIONS.SET_DIAL, payload: opt.title })}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    state.dialArtistry === opt.title
                      ? 'border-[#d4af37] bg-[#221f14]'
                      : 'border-[#262632] bg-[#17171d] hover:border-[#3d3d4e]'
                  }`}
                >
                  <div className={`text-xs font-semibold ${state.dialArtistry === opt.title ? 'text-[#d4af37]' : 'text-[#ececee]'}`}>
                    {opt.title}
                  </div>
                  <div className="text-[9px] text-[#70707c] mt-0.5">{opt.note}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Horological Mount & Leather */}
          <div>
            <div className="flex justify-between text-xs font-serif font-bold text-[#f5f5f7] mb-3">
              <span>3. HOROLOGICAL MOUNT & LEATHER</span>
              <span className="text-[#d4af37]">{state.leatherMount}</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {strapOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => dispatch({ type: CUSTOMIZER_ACTIONS.SET_STRAP, payload: opt })}
                  className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                    state.leatherMount === opt
                      ? 'border-[#d4af37] bg-[#221f14] text-[#d4af37] font-semibold'
                      : 'border-[#262632] bg-[#17171d] text-[#9c9ca8] hover:border-[#3d3d4e]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1f1f26]">
            <button
              onClick={handleSaveVault}
              className="py-3 px-4 bg-[#181820] hover:bg-[#20202a] border border-[#2e2e3a] hover:border-[#d4af37]/60 text-[#ececee] font-sans font-bold text-xs tracking-wider rounded-xl transition flex items-center justify-center gap-2 cursor-pointer uppercase"
            >
              <span>🔒</span>
              <span>SAVE TO COLLECTOR VAULT</span>
            </button>
            <button
              onClick={openProtocol}
              className="py-3 px-4 bg-[#d4af37] hover:bg-[#bfa030] text-black font-sans font-extrabold text-xs tracking-wider rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition flex items-center justify-center gap-2 cursor-pointer active:scale-95 uppercase"
            >
              <span>CONSULT WATCHMAKER</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}