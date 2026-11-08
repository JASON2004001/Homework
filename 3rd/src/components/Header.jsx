import React from 'react';
import { useApothecaryStore } from '../store/useApothecaryStore';

export default function Header({ onReserveClick }) {
  const bagItems = useApothecaryStore((s) => s.bagItems);
  const toggleBag = useApothecaryStore((s) => s.toggleBag);

  const totalCount = bagItems.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-[#0c0c0d]/95 backdrop-blur-md border-b border-[#212124] px-6 lg:px-14 py-4 flex items-center justify-between text-[#ececee]">
      {/* Brand Mark */}
      <a href="#hero" className="flex items-baseline gap-3">
        <span className="text-xl sm:text-2xl font-serif tracking-widest font-normal text-[#f4efe8]">
          Elysium
        </span>
        <span className="text-[9px] tracking-[0.25em] text-[#b3906e] font-sans uppercase font-semibold">
          ONSEN & THERMAL SPRINGS
        </span>
      </a>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8 text-[11px] font-sans tracking-[0.2em] text-[#9c9a96] uppercase">
        <a href="#booking" className="hover:text-[#b3906e] transition">FOREST VILLAS</a>
        <a href="#rituals" className="hover:text-[#b3906e] transition">HOLISTIC RITUALS</a>
        <a href="#pillars" className="hover:text-[#b3906e] transition">TEA & ALCHEMY</a>
        <a href="#journey" className="hover:text-[#b3906e] transition">ABOUT SANCTUARY</a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={onReserveClick}
          className="px-6 py-2.5 bg-[#b3906e] hover:bg-[#9d7d5d] text-[#0c0c0d] font-bold text-[11px] tracking-[0.2em] uppercase rounded transition cursor-pointer active:scale-95"
        >
          RESERVE SANCTUARY
        </button>

        {/* Botanical Bag Icon + Count */}
        <button
          onClick={toggleBag}
          className="relative p-2 text-[#b3906e] hover:text-[#d4af37] transition cursor-pointer"
          title="Open Botanical Bag"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {totalCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#b3906e] text-black font-bold font-mono text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>

        {/* Avatar Profile */}
        <div className="w-8 h-8 rounded-full border border-[#38373a] bg-[#1a191d] flex items-center justify-center text-xs text-[#b3906e]" title="Resident Custodian">
          🧘
        </div>
      </div>
    </header>
  );
}