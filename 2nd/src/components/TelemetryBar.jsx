import React from 'react';
import { useBoutiqueAtmosphere } from '../context/BoutiqueAtmosphereContext';

export default function TelemetryBar() {
  const telemetry = useBoutiqueAtmosphere();

  return (
    <div id="telemetry" className="w-full bg-[#0d0d10] border-y border-[#1e1e24] px-6 lg:px-14 py-4 text-[#d4af37]">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        {/* Live Indicator + Geneva CET */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse"></span>
          <span className="tracking-[0.22em] text-[#f2f2f5] font-bold uppercase text-[11px]">
            LIVE GENEVA ATELIER TELEMETRY
          </span>
          <span className="text-[#646470]">•</span>
          <span className="font-mono text-[#d4af37] text-[11px] font-semibold">
            {telemetry.timeCET}
          </span>
        </div>

        {/* Telemetry Metrics matching Screenshot 3 */}
        <div className="flex flex-wrap items-center gap-6 lg:gap-10 text-[11px]">
          {/* Atelier Climate */}
          <div className="flex items-center gap-2">
            <span className="text-[#8c8c9a]">🌡</span>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#70707e] uppercase block font-medium">
                ATELIER CLIMATE
              </span>
              <span className="text-[#ececee] font-mono font-semibold">
                {telemetry.climate}
              </span>
            </div>
          </div>

          {/* Escapement Delta */}
          <div className="flex items-center gap-2">
            <span className="text-[#d4af37]">⏱</span>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#70707e] uppercase block font-medium">
                ESCAPEMENT DELTA
              </span>
              <span className="text-[#d4af37] font-mono font-semibold">
                {telemetry.escapementDelta}
              </span>
            </div>
          </div>

          {/* Active Calibre */}
          <div className="flex items-center gap-2">
            <span className="text-[#8c8c9a]">⚙</span>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#70707e] uppercase block font-medium">
                ACTIVE CALIBRE
              </span>
              <span className="text-[#ececee] font-mono font-semibold">
                {telemetry.activeCalibre}
              </span>
            </div>
          </div>

          {/* Geneva Seal */}
          <div className="flex items-center gap-2">
            <span className="text-[#d4af37]">🛡</span>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#70707e] uppercase block font-medium">
                GENEVA SEAL
              </span>
              <span className="text-[#ececee] font-mono font-semibold">
                {telemetry.genevaSeal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}