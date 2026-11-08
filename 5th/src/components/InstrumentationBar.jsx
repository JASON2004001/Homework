import React from 'react';
import { useAirspace } from '../context/AirspaceContext';

export default function InstrumentationBar() {
  const telemetry = useAirspace();

  return (
    <section id="airspace" className="py-12 px-6 lg:px-14 bg-[#07090d] text-[#ececee] border-b border-[#171d2b]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Live Route Weather Radar matching Screenshot 3 */}
        <div className="p-6 bg-[#0c111a] border border-[#1e2738] rounded-3xl flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold mb-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                LIVE ROUTE WEATHER RADAR
              </span>
              <span className="text-[#10b981]">● CAVOK</span>
            </div>

            <div className="flex items-baseline justify-between mb-4">
              <div>
                <div className="text-2xl font-mono font-bold text-[#f8fafc]">VIDP</div>
                <div className="text-[9px] font-mono text-[#8292a8]">New Delhi IGI</div>
              </div>
              <div className="text-center font-mono text-[9px] text-[#d4af37]">
                <div>✈</div>
                <div>610 NM</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-mono font-bold text-[#f8fafc]">VABB</div>
                <div className="text-[9px] font-mono text-[#8292a8]">Mumbai CSIA</div>
              </div>
            </div>

            <div className="space-y-2 py-3 border-y border-[#182130] text-[10px] font-mono">
              <div className="flex justify-between">
                <span className="text-[#78889e]">SURFACE TEMP:</span>
                <span className="text-[#f8fafc]">{telemetry.surfaceTemp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78889e]">WIND VECTOR:</span>
                <span className="text-[#d4af37]">{telemetry.windVector}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78889e]">BAROMETRIC QNH:</span>
                <span className="text-[#d4af37]">{telemetry.barometricQnh}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78889e]">RUNWAY RVR:</span>
                <span className="text-[#10b981]">{telemetry.runwayRvr}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-between text-[10px] font-mono">
            <span className="text-[#78889e] uppercase">DEPARTURE CLEARANCE:</span>
            <span className="text-[#d4af37] font-bold">{telemetry.departureSlot}</span>
          </div>
        </div>

        {/* 2. Cruising Instrumentation matching Screenshot 3 */}
        <div className="p-6 bg-[#0c111a] border border-[#1e2738] rounded-3xl flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold mb-4">
              <span>▲ CRUISING INSTRUMENTATION</span>
              <span className="text-[#d4af37]">FL470 ASSIGNED</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-[#111724] border border-[#202b3d] rounded-xl">
                <span className="text-[8px] font-mono text-[#78889e] uppercase block">TRUE MACH</span>
                <span className="text-2xl font-mono font-bold text-[#f8fafc]">{telemetry.mach}</span>
                <span className="text-[9px] font-mono text-[#10b981] block">{telemetry.ktas}</span>
              </div>
              <div className="p-3 bg-[#111724] border border-[#202b3d] rounded-xl">
                <span className="text-[8px] font-mono text-[#78889e] uppercase block">PRESSURE ALT</span>
                <span className="text-2xl font-mono font-bold text-[#f8fafc]">47,000 FT</span>
                <span className="text-[9px] font-mono text-[#8292a8] block">{telemetry.isaDelta}</span>
              </div>
            </div>

            <div className="space-y-2 py-3 border-y border-[#182130] text-[10px] font-mono">
              <div className="flex justify-between">
                <span className="text-[#78889e]">TURBULENCE INDEX:</span>
                <span className="text-[#10b981]">{telemetry.turbulence}</span>
              </div>
              {/* Turbulence smooth line */}
              <div className="h-1.5 w-full bg-[#182130] rounded-full overflow-hidden my-1">
                <div className="h-full w-4/5 bg-gradient-to-r from-[#10b981] to-[#d4af37] rounded-full"></div>
              </div>
              <div className="flex justify-between text-[9px] text-[#78889e]">
                <span>HEADWIND: -18 KT</span>
                <span>TRACK: NAT-BRAVO (56°N)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-between text-[10px] font-mono">
            <span className="text-[#78889e] uppercase">CABIN PRESSURIZATION:</span>
            <span className="text-[#10b981] font-bold">{telemetry.cabinPressurization}</span>
          </div>
        </div>

        {/* 3. Ramp & Dispatch Status matching Screenshot 3 */}
        <div className="p-6 bg-[#0c111a] border border-[#1e2738] rounded-3xl flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold mb-4">
              <span>⛽ RAMP & DISPATCH STATUS</span>
              <span className="text-[#10b981]">RAMP 4B READY</span>
            </div>

            <div className="space-y-2.5 py-2 text-[10px] font-mono">
              <div className="flex justify-between py-1 border-b border-[#182130]">
                <span className="text-[#78889e]">SAF FUEL BLEND:</span>
                <span className="text-[#f8fafc] font-bold">{telemetry.fuelLoaded}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#182130]">
                <span className="text-[#78889e]">SECURITY CLEARANCE:</span>
                <span className="text-[#10b981] font-bold">BIOMETRIC GREEN PASS</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#182130]">
                <span className="text-[#78889e]">DIPLOMATIC ESCORT:</span>
                <span className="text-[#d4af37] font-bold">TARMAC MOTORCADE ACTIVE</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#182130]">
                <span className="text-[#78889e]">CABIN ATTENDANT:</span>
                <span className="text-[#f8fafc]">CERTIFIED SOMMELIER #41</span>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[9px] font-mono text-[#78889e] mb-1">
                <span>FLIGHT PREPARATION DISPATCH</span>
                <span className="text-[#10b981] font-bold">96% COMPLETE</span>
              </div>
              <div className="h-1.5 w-full bg-[#182130] rounded-full overflow-hidden">
                <div className="h-full w-[96%] bg-[#d4af37] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-between text-[10px] font-mono">
            <span className="text-[#78889e] uppercase">DEPARTURE ENGINE SPIN:</span>
            <span className="text-[#f8fafc] font-bold">{telemetry.departureCountdown}</span>
          </div>
        </div>
      </div>
    </section>
  );
}