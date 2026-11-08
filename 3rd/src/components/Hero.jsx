import React from 'react';
import { useSanctuaryTelemetry } from '../context/SanctuaryTelemetryContext';

export default function Hero({ onExploreClick }) {
  const telemetry = useSanctuaryTelemetry();

  return (
    <section id="hero" className="relative pt-10 pb-16 px-6 lg:px-14 bg-[#0c0c0d] text-[#ececee] overflow-hidden">
      {/* Sub-header badge */}
      <div className="text-[10px] tracking-[0.3em] text-[#858380] uppercase font-semibold mb-6 flex items-center gap-2">
        <span className="w-5 h-[1px] bg-[#b3906e]"></span>
        <span>ELYSIUM SANCTUARY • 極楽の湯 - 静寂の隠れ家</span>
      </div>

      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4efe8] leading-[1.08] tracking-tight">
          Where Volcanic Warmth Meets <br />
          <span className="italic font-normal text-[#b3906e]">Nordic Solitude.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#9a9792] max-w-2xl font-light leading-relaxed">
          An elevated alpine refuge carved from volcanic basalt and aromatic Hinoki cedar,
          offering restorative thermal soaking, acoustic silences, and seasonal apothecary cuisine.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={onExploreClick}
            className="px-7 py-3.5 bg-[#b3906e] hover:bg-[#9d7d5d] text-[#0c0c0d] font-extrabold text-xs tracking-[0.18em] rounded transition flex items-center gap-2 active:scale-95 cursor-pointer uppercase"
          >
            EXPLORE SEASONAL RESIDENCIES
          </button>
          <a
            href="#rituals"
            className="px-7 py-3.5 bg-[#171618] hover:bg-[#201f22] border border-[#2b2a2e] text-[#ececee] font-bold text-xs tracking-[0.18em] rounded transition flex items-center gap-2 uppercase"
          >
            DISCOVER ONSEN RITUALS
          </a>
        </div>
      </div>

      {/* Real-time Telemetry Dashboard matching Screenshot 2 */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#141416] border border-[#262529] rounded-2xl">
        <div className="border-r border-[#262529] pr-4">
          <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#73716e] uppercase">
            <span>Thermal Bath Temp</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b3906e] animate-pulse"></span>
          </div>
          <div className="text-lg sm:text-xl font-serif font-bold text-[#f4efe8] mt-1">
            {telemetry.bathTemp}
          </div>
          <div className="text-[10px] text-[#858380] mt-0.5">{telemetry.waterType}</div>
        </div>

        <div className="border-r border-[#262529] pr-4">
          <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#73716e] uppercase">
            <span>Mineral Density</span>
            <span className="text-[#b3906e]">⬡</span>
          </div>
          <div className="text-lg sm:text-xl font-serif font-bold text-[#f4efe8] mt-1">
            {telemetry.mineralDensity}
          </div>
          <div className="text-[10px] text-[#858380] mt-0.5">{telemetry.activeMinerals}</div>
        </div>

        <div className="border-r border-[#262529] pr-4">
          <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#73716e] uppercase">
            <span>Sanctuary Ridge</span>
            <span className="text-[#b3906e]">▲</span>
          </div>
          <div className="text-lg sm:text-xl font-serif font-bold text-[#f4efe8] mt-1">
            {telemetry.sanctuaryRidge}
          </div>
          <div className="text-[10px] text-[#858380] mt-0.5">{telemetry.zone}</div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#73716e] uppercase">
            <span>Tranquility Index</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b3906e]"></span>
          </div>
          <div className="text-lg sm:text-xl font-serif font-bold text-[#b3906e] mt-1">
            {telemetry.tranquilityIndex}
          </div>
          <div className="text-[10px] text-[#858380] mt-0.5">Ambient Sound: {telemetry.ambientSound}</div>
        </div>
      </div>
    </section>
  );
}