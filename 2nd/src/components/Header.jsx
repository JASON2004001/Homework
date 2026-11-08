import React from 'react';
import { useVaultStore } from '../store/useVaultStore';
import { useCollector } from '../context/CollectorContext';

export default function Header() {
  const vaultItems = useVaultStore((state) => state.vaultItems);
  const toggleVault = useVaultStore((state) => state.toggleVault);
  const { openProtocol } = useCollector();

  const formattedVaultCount = vaultItems.length < 10 ? `0${vaultItems.length}` : vaultItems.length;

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-md border-b border-[#1f1f24] px-6 lg:px-14 py-4 flex items-center justify-between text-[#ececee]">
      {/* Brand logo matching Screenshot 1 */}
      <a href="#hero" className="flex items-baseline gap-2.5">
        <span className="text-lg lg:text-xl font-serif tracking-[0.22em] font-semibold text-[#f8f8fa] uppercase">
          CHRONOS
        </span>
        <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-sans uppercase font-bold">
          ATELIER
        </span>
        <span className="text-[9px] tracking-[0.2em] text-[#787884] font-sans uppercase hidden sm:inline">
          GENÈVE
        </span>
      </a>

      {/* Navigation Links */}
      <nav className="hidden xl:flex items-center gap-9 text-[11px] font-sans tracking-[0.22em] text-[#9a9aa4] uppercase">
        <a
          href="#masterpieces"
          className="text-[#d4af37] border-b-2 border-[#d4af37] pb-1 font-semibold transition"
        >
          MASTERPIECES
        </a>
        <a href="#bespoke" className="hover:text-[#d4af37] transition">
          BESPOKE ATELIER
        </a>
        <a href="#calibres" className="hover:text-[#d4af37] transition">
          CALIBRES
        </a>
        <a href="#telemetry" className="hover:text-[#d4af37] transition">
          TELEMETRY
        </a>
        <a href="#heritage" className="hover:text-[#d4af37] transition">
          HERITAGE
        </a>
      </nav>

      {/* Actions: Concierge Privé button + Vault Count Lock Icon */}
      <div className="flex items-center gap-4">
        <button
          onClick={openProtocol}
          className="hidden sm:block px-5 py-2.5 bg-transparent hover:bg-[#1a1a20] border border-[#2e2e38] hover:border-[#d4af37]/60 text-[#f0f0f3] font-sans text-[11px] tracking-[0.2em] uppercase rounded transition"
        >
          CONCIERGE PRIVÉ
        </button>

        {/* Lock Vault Badge with Live Counter */}
        <button
          onClick={toggleVault}
          className="relative flex items-center justify-center p-2 rounded hover:bg-[#1a1a20] transition text-[#d4af37]"
          title="Open Collector's Vault"
        >
          {/* Lock SVG */}
          <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
            <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" />
            <circle cx="12" cy="16" r="1.5" fill="currentColor" />
          </svg>

          {/* Golden Badge Counter matching Screenshot 1 (02) */}
          <span className="absolute -top-1 -right-2 bg-[#d4af37] text-black font-mono font-black text-[9px] px-1.5 py-0.2 rounded shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            {formattedVaultCount}
          </span>
        </button>
      </div>
    </header>
  );
}