import React from 'react';
import { useSanctuaryTelemetry } from '../context/SanctuaryTelemetryContext';

export default function Hero() {
  const telemetry = useSanctuaryTelemetry();

  return (
    <section id="hero" className="relative pt-12 pb-14 px-6 lg:px-14 bg-[#0d0d0e] text-[#ececee] border-b border-[#1c1c1f]">
      {/* Top Breadcrumb Telemetry */}
      <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-[#8e8b82] uppercase font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-[#c4a480] animate-pulse"></span>
        <span>SANCTUARY LIVING</span>
        <span>•</span>
        <span>HIGH RIDGE TERROIR</span>
        <span>•</span>
        <span>{telemetry.elevation}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column Headline & Narrative */}
        <div className="lg:col-span-8 space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f7f4ee] leading-[1.08] tracking-tight">
            Architectural Sanctuaries Carved into Nordic Solitude & Volcanic Warmth
          </h1>

          <p className="text-sm sm:text-base text-[#9a958a] max-w-2xl font-light leading-relaxed">
            Four bespoke residential pavilions embedded across Mount Asama's misted ridge.
            Handcrafted from structural Kiso hinoki cedar and quarry-cut basalt stone, each sanctum is
            privately plumbed with unbroken <em>100% Gensen Kakenagashi</em> thermal water straight from deep volcanic boreholes.
          </p>
        </div>

        {/* Right Column: Atmospheric Index & Live Telemetry Card matching Screenshot 2 */}
        <div className="lg:col-span-4 bg-[#141416] border border-[#26262a] rounded-3xl p-6 sm:p-7 shadow-2xl">
          <div className="flex justify-between items-center text-[9px] tracking-[0.25em] text-[#8e8b82] uppercase font-bold pb-4 border-b border-[#212124]">
            <span>ATMOSPHERIC INDEX</span>
            <span className="text-[#c4a480]">LIVE TELEMETRY</span>
          </div>

          <div className="grid grid-cols-2 gap-4 py-5 border-b border-[#212124]">
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#78756d] uppercase block">
                OUTDOOR TEMP
              </span>
              <div className="text-2xl font-serif font-bold text-[#f7f4ee] mt-1">
                {telemetry.outdoorTemp}
              </div>
              <span className="text-[10px] text-[#9a958a] mt-0.5 block">{telemetry.weatherCondition}</span>
            </div>

            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#78756d] uppercase block">
                SPRING SOURCE
              </span>
              <div className="text-2xl font-serif font-bold text-[#dfba91] mt-1">
                {telemetry.springSource}
              </div>
              <span className="text-[10px] text-[#9a958a] mt-0.5 block">{telemetry.wellName}</span>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between text-[10px] tracking-wider">
            <span className="text-[#78756d] uppercase">LUNAR SYNCHRONICITY</span>
            <span className="text-[#f7f4ee] font-mono font-medium">{telemetry.lunarPhase}</span>
          </div>
        </div>
      </div>
    </section>
  );
}