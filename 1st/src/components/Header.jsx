import React from 'react';
import { useMember } from '../context/MemberContext';
import { useSommelierStore } from '../store/useSommelierStore';

export default function Header({ onBookClick }) {
  const { member } = useMember();
  const pairingsBag = useSommelierStore((state) => state.pairingsBag);
  const toggleDrawer = useSommelierStore((state) => state.toggleDrawer);
  const totalPairings = pairingsBag.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-[#0c0b0a]/95 backdrop-blur-md border-b border-[#24201c] px-6 lg:px-14 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <a href="#hero" className="flex items-center gap-3.5">
        <div className="w-9 h-9 rounded-full border border-[#f59e0b]/50 flex items-center justify-center bg-[#171410] shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <span className="text-[#f59e0b] text-base leading-none">✦</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[17px] font-serif tracking-widest text-[#f5ebd9] uppercase font-bold">
            AURELIA
          </span>
          <span className="text-[8px] tracking-[0.28em] text-[#d4af37] font-sans uppercase">
            RESERVE & DINING
          </span>
        </div>
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] font-sans tracking-[0.2em] text-[#c9bfae] uppercase">
        <a href="#menu" className="hover:text-[#f59e0b] transition">MENU</a>
        <a href="#experiences" className="hover:text-[#f59e0b] transition">EXPERIENCES</a>
        <a href="#story" className="hover:text-[#f59e0b] transition">STORY</a>
        <a href="#reviews" className="hover:text-[#f59e0b] transition">REVIEWS</a>
        <a href="#footer" className="hover:text-[#f59e0b] transition">VISIT</a>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Sommelier Vintage Bag Button */}
        <button
          onClick={toggleDrawer}
          className="relative px-3 py-2 bg-[#171410] border border-[#2d2720] hover:border-[#f59e0b]/60 rounded-lg text-xs text-[#d4af37] flex items-center gap-1.5 transition"
          title="Open Sommelier Bag"
        >
          <span>🍷</span>
          <span className="hidden sm:inline font-mono text-[10px]">VAULT</span>
          {totalPairings > 0 && (
            <span className="bg-[#f59e0b] text-black font-black text-[9px] px-1.5 py-0.2 rounded-full">
              {totalPairings}
            </span>
          )}
        </button>

        {/* Primary CTA: Book Table */}
        <button
          onClick={onBookClick}
          className="px-6 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-black font-extrabold text-[11px] tracking-[0.18em] rounded-lg shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition cursor-pointer active:scale-95"
        >
          BOOK TABLE
        </button>

        {/* Patron Icon */}
        <div
          className="w-9 h-9 rounded-lg bg-[#1a1612] border border-[#2d2720] flex items-center justify-center text-[#d4af37] text-xs"
          title={member.name}
        >
          👤
        </div>
      </div>
    </header>
  );
}