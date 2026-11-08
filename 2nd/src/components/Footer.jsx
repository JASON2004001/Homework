import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#08080a] border-t border-[#1a1a20] pt-14 pb-8 px-6 lg:px-14 text-[#8c8c9a]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-serif font-bold text-[#fbfbfd] tracking-[0.2em] uppercase">
              CHRONOS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-bold uppercase">
              ATELIER
            </span>
          </div>
          <p className="text-xs font-light text-[#70707e] leading-relaxed">
            Independent Manufacture of High Horology. Dedicated to preserving centuries
            of Geneva hand-finishing, perpetual complications, and astronomical mechanics
            in limited allocations.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121216] border border-[#22222a] rounded text-[9px] tracking-[0.2em] text-[#d4af37] font-bold uppercase">
            <span>🛡</span>
            <span>POINÇON DE GENÈVE CERTIFIÉ</span>
          </div>
        </div>

        {/* Horological Works */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            HOROLOGICAL WORKS
          </h4>
          <ul className="space-y-2 text-xs text-[#a2a2b0]">
            <li><a href="#masterpieces" className="hover:text-[#d4af37]">Grandes Complications</a></li>
            <li><a href="#masterpieces" className="hover:text-[#d4af37]">Tourbillon Volant</a></li>
            <li><a href="#bespoke" className="hover:text-[#d4af37]">Manufacture Calibres</a></li>
            <li><a href="#bespoke" className="hover:text-[#d4af37]">Bespoke Commissions</a></li>
            <li><a href="#telemetry" className="hover:text-[#d4af37]">Kinetic Telemetry</a></li>
          </ul>
        </div>

        {/* Manufacture & Salons */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            MANUFACTURE & SALONS
          </h4>
          <p className="text-xs text-[#ececee]">Rue de la Cité 14, 1204 Genève</p>
          <p className="text-xs text-[#70707e] mt-1">Confédération Suisse</p>
          <div className="mt-3 text-xs text-[#d4af37] flex items-center gap-1.5 font-bold">
            <span>📅</span>
            <span>PRIVATE SALON APPOINTMENT</span>
          </div>
          <p className="text-xs text-[#70707e] mt-1 font-mono">T: +41 22 819 04 00</p>
          <p className="text-xs text-[#70707e] font-mono">concierge@chronos-atelier.ch</p>
        </div>

        {/* Allocation Dispatches */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            ALLOCATION DISPATCHES
          </h4>
          <p className="text-xs text-[#70707e] mb-3 font-light leading-relaxed">
            Receive confidential notices on piece-unique releases and annual calibre production runs.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Patron address recorded for confidential allocation notices."); }} className="flex items-center bg-[#121216] border border-[#22222a] rounded overflow-hidden">
            <input
              type="email"
              placeholder="Patron email address"
              required
              className="w-full px-3 py-2 text-xs text-[#ececee] bg-transparent focus:outline-none"
            />
            <button type="submit" className="px-3 text-[#d4af37] hover:text-white">
              →
            </button>
          </form>
          <span className="text-[8px] tracking-[0.2em] text-[#555562] uppercase block mt-2 font-mono">
            DISCRETION GUARANTEED • ENCRYPTED RECORDS
          </span>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="pt-6 border-t border-[#14141a] flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#555562] gap-3">
        <div>© 2025 CHRONOS ATELIER SA. ALL RIGHTS RESERVED. • SWISS HAUTE HORLOGERIE</div>
        <div className="flex gap-6 uppercase tracking-wider">
          <a href="#provenance" className="hover:text-[#d4af37]">PROVENANCE & HALLMARKS</a>
          <a href="#custody" className="hover:text-[#d4af37]">TERMS OF CUSTODY</a>
          <a href="#security" className="hover:text-[#d4af37]">SECURITY PROTOCOLS</a>
        </div>
      </div>
    </footer>
  );
}