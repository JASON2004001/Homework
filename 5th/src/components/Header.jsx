import React from 'react';
import { useAirspace } from '../context/AirspaceContext';
import { usePassenger } from '../context/PassengerContext';
import { useCateringStore } from '../store/useCateringStore';

export default function Header() {
  const telemetry = useAirspace();
  const { patron } = usePassenger();
  const toggleDrawer = useCateringStore((s) => s.toggleDrawer);
  const galaItems = useCateringStore((s) => s.galaItems);

  const totalGalaCount = galaItems.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-[#07090d]/95 backdrop-blur-md border-b border-[#1b202c] text-[#ececee]">
      {/* Top Telemetry Flight Ticker matching Screenshot 1 */}
      <div className="hidden lg:flex items-center justify-between px-6 lg:px-14 py-1.5 bg-[#05070a] border-b border-[#131822] text-[10px] font-mono tracking-wider text-[#8b9bb4]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="text-[#10b981] font-bold">{telemetry.radarStatus}</span>
          </div>
          <div>
            <span>TAIL ID </span>
            <span className="text-[#d4af37] font-bold">{telemetry.tailId}</span>
          </div>
          <div>
            <span>ZULU TIME </span>
            <span className="text-[#f1f5f9] font-bold">{telemetry.zuluTime}</span>
          </div>
          <div>{telemetry.metar}</div>
        </div>

        {/* Gala active banner */}
        <button
          onClick={toggleDrawer}
          className="text-[#d4af37] hover:underline flex items-center gap-1.5 cursor-pointer font-bold tracking-widest text-[9px] uppercase"
        >
          <span>✦ {telemetry.galaStatus}</span>
          <span className="px-1.5 py-0.2 bg-[#d4af37] text-black rounded-full font-sans text-[8px]">
            {totalGalaCount}
          </span>
        </button>
      </div>

      {/* Main Navigation Bar matching Screenshot 1 */}
      <div className="px-6 lg:px-14 py-3 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1b2333] to-[#0c1017] border border-[#2d3748] flex items-center justify-center text-[#d4af37] shadow-inner">
            ✈
          </div>
          <div className="flex flex-col">
            <span className="text-base font-serif tracking-[0.25em] font-semibold text-[#f8fafc] uppercase">
              AEROVAULT
            </span>
            <span className="text-[8px] tracking-[0.28em] text-[#94a3b8] uppercase font-mono">
              PRIVATE TERMINAL & BESPOKE CHARTER
            </span>
          </div>
        </a>

        {/* Navigation links matching Screenshot 1 */}
        <nav className="hidden xl:flex items-center gap-9 text-[11px] font-mono tracking-[0.2em] text-[#94a3b8] uppercase font-medium">
          <a href="#airspace" className="text-[#d4af37] font-bold border-b-2 border-[#d4af37] pb-1">
            AIRSPACE RADAR
          </a>
          <a href="#dispatch" className="hover:text-[#d4af37] transition">FLIGHT BOOKING</a>
          <a href="#fleet" className="hover:text-[#d4af37] transition">FLEET DIRECTORY</a>
          <a href="#manifest" className="hover:text-[#d4af37] transition">MANIFEST & TIERS</a>
          <a href="#footer" className="hover:text-[#d4af37] transition">FBO CONCIERGE</a>
        </nav>

        {/* Actions: Currency switch & Passenger Profile Pass */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-[#0d121c] border border-[#202738] rounded-lg px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#94a3b8]">
            <span className="text-[#d4af37] font-bold">INR</span>
            <span className="mx-1 text-[#475569]">/</span>
            <span className="hover:text-[#f8fafc] cursor-pointer">USD</span>
            <span className="mx-1 text-[#475569]">/</span>
            <span className="hover:text-[#f8fafc] cursor-pointer">MACH</span>
          </div>

          {/* Patron Membership Card Badge */}
          <div className="flex items-center gap-2.5 bg-[#101726] border border-[#243048] rounded-xl px-3 py-1.5 shadow-md">
            <div className="w-7 h-7 rounded-full bg-[#1e293b] border border-[#d4af37]/60 flex items-center justify-center text-xs">
              👑
            </div>
            <div className="text-left font-mono">
              <span className="text-[11px] font-bold text-[#f8fafc] block leading-none">
                {patron.name}
              </span>
              <span className="text-[8px] tracking-wider text-[#d4af37] block mt-0.5 font-bold uppercase">
                {patron.membershipTier} {patron.membershipCode}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}