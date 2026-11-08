import React from 'react';
import { useApothecaryStore } from '../store/useApothecaryStore';

export default function Header({ onReserveClick }) {
  const bagItems = useApothecaryStore((s) => s.bagItems);
  const toggleBag = useApothecaryStore((s) => s.toggleBag);
  const totalCount = bagItems.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0e]/95 backdrop-blur-md border-b border-[#212124] px-6 lg:px-14 py-4 flex items-center justify-between text-[#ececee]">
      {/* Brand logo & thermal badge matching Screenshot 1 */}
      <a href="#hero" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl border border-[#c4a480]/40 flex items-center justify-center bg-[#18181b]">
          <span className="text-[#c4a480] text-sm leading-none">🪷</span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-serif tracking-[0.2em] font-semibold text-[#f5f2eb] uppercase">
            ELYSIUM SANCTUARY
          </span>
          <span className="text-[8px] tracking-[0.28em] text-[#8e8b82] uppercase font-sans">
            THERMAL PAVILION • NAGANO
          </span>
        </div>
      </a>

      {/* Navigation links matching Screenshot 1 */}
      <nav className="hidden xl:flex items-center gap-8 text-[11px] font-sans tracking-[0.2em] text-[#9b978e] uppercase">
        <a href="#residences" className="hover:text-[#c4a480] transition">Thermal Springs</a>
        <a href="#master-sanctum" className="hover:text-[#c4a480] transition">Private Pavilions</a>
        <a href="#matrix" className="hover:text-[#c4a480] transition">Holistic Rituals</a>
        <a href="#sensory" className="hover:text-[#c4a480] transition">Sensory Architecture</a>
        <a href="#footer" className="hover:text-[#c4a480] transition">Membership</a>
      </nav>

      {/* Action buttons */}
      <div className="flex items-center gap-4">
        {/* Botanical Bag Drawer Button */}
        <button
          onClick={toggleBag}
          className="px-3.5 py-2 rounded-xl bg-[#18181b] border border-[#2b2b30] hover:border-[#c4a480]/60 text-xs text-[#dcd7cb] flex items-center gap-2 transition cursor-pointer"
        >
          <span>🌿</span>
          <span className="text-[10px] tracking-[0.2em] uppercase hidden sm:inline">BOTANICAL BAG</span>
          <span className="w-5 h-5 rounded-full bg-[#c4a480] text-[#0d0d0e] font-bold text-[10px] flex items-center justify-center">
            {totalCount}
          </span>
        </button>

        {/* Primary CTA: Reserve Sanctum */}
        <button
          onClick={onReserveClick}
          className="px-7 py-3 bg-[#dfba91] hover:bg-[#caa278] text-[#14120e] font-sans font-bold text-xs tracking-[0.18em] rounded-xl transition cursor-pointer active:scale-95 uppercase shadow-[0_4px_20px_rgba(223,186,145,0.25)]"
        >
          Reserve Sanctum
        </button>
      </div>
    </header>
  );
}