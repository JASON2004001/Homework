import React from 'react';
import { useCateringStore } from '../store/useCateringStore';

export default function Hero() {
  const toggleDrawer = useCateringStore((s) => s.toggleDrawer);

  return (
    <section id="hero" className="relative pt-12 pb-16 px-6 lg:px-14 bg-[#07090d] text-[#ececee] overflow-hidden border-b border-[#171d2b]">
      {/* Top Satcom Status Indicator matching Screenshot 2 */}
      <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#859ab8] uppercase font-mono mb-6">
        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
        <span>SATCOM LINK ESTABLISHED</span>
        <span>•</span>
        <span>CORRIDOR NAT-BRAVO</span>
      </div>

      <div className="max-w-4xl space-y-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f8fafc] tracking-tight leading-[1.06]">
          Transcend the Horizon.
        </h1>
        <p className="text-lg sm:text-2xl font-serif italic text-[#d4af37] font-normal">
          Bespoke Flight Telemetry & Sovereign Airspace Command
        </p>
        <p className="text-xs sm:text-sm text-[#94a3b8] max-w-2xl font-light leading-relaxed">
          Discreet aeronautical execution for family offices, diplomatic delegations, and discerning
          principals. Direct ramp transfer with zero friction across international flight corridors.
        </p>
      </div>

      {/* Jet Aircraft Canvas Visualizer (Zero image assets required) */}
      <div className="my-10 relative h-72 sm:h-96 rounded-3xl overflow-hidden bg-radial from-[#182338] via-[#0d1422] to-[#05070a] border border-[#222c40] flex items-center justify-center shadow-2xl">
        {/* Architectural Wireframe Jet Body */}
        <div className="relative text-center select-none space-y-2 opacity-80">
          <span className="text-7xl sm:text-8xl block transform -rotate-6">🛩</span>
          <div className="text-[10px] font-mono tracking-[0.3em] text-[#d4af37] uppercase">
            FLAGSHIP GLOBAL JET STREAM • CORRIDOR ACTIVE
          </div>
        </div>

        {/* Ambient Radar Altitude Ring */}
        <div className="absolute inset-0 border border-[#d4af37]/10 rounded-3xl pointer-events-none"></div>
      </div>

      {/* In-Flight Gala Curation Bar matching Screenshot 2 */}
      <div className="p-5 bg-[#0e1420] border border-[#202b3f] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#172033] border border-[#2d3a54] flex items-center justify-center text-lg text-[#d4af37]">
            🛎
          </div>
          <div>
            <div className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold">
              <span>IN-FLIGHT GALA CURATION</span>
              <span className="px-1.5 py-0.5 bg-[#10b981]/20 text-[#10b981] rounded">CHEF ON-BOARD</span>
            </div>
            <div className="text-xs sm:text-sm font-serif font-bold text-[#f8fafc] mt-0.5">
              Imperial Beluga 50g • Dom Pérignon Vintage 2013 • Wagyu Tartare Service
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[10px] font-mono">
          <span className="text-[#8091a7]">Sommelier Note: Cellared at 11°C</span>
          <button
            onClick={toggleDrawer}
            className="text-[#d4af37] hover:underline font-bold uppercase tracking-wider cursor-pointer"
          >
            INSPECT PAIRING →
          </button>
        </div>
      </div>
    </section>
  );
}