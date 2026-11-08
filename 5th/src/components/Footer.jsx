import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#05070a] border-t border-[#131822] pt-14 pb-8 px-6 lg:px-14 text-[#78889e] font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-xs">
        {/* Hangar Zero Column */}
        <div className="space-y-3">
          <h4 className="text-base font-serif font-bold text-[#f8fafc]">
            AeroVault Hangar Zero
          </h4>
          <p className="font-light leading-relaxed text-[#8292a8]">
            Sovereign global aeronautics and private charter command. Unrestricted airspace execution for principals and diplomatic missions.
          </p>
          <div className="space-y-1 text-[11px] pt-2">
            <div className="text-[#d4af37] font-bold">DISPATCH: +1 (800) 840-AERO</div>
            <div className="text-[#10b981]">ENCRYPTED UPLINK: SATCOM-4 CH-88</div>
          </div>
        </div>

        {/* Private FBO Terminals matching Screenshot 7 */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            PRIVATE FBO TERMINALS
          </h4>
          <ul className="space-y-2 text-[#94a3b8]">
            <li>New Delhi FBO • VIDP (DEL)</li>
            <li>Mumbai VIP Terminal • VABB (BOM)</li>
            <li>Teterboro FBO • KTEB (NYC)</li>
            <li>Le Bourget Private Lounge • LFPB (PAR)</li>
            <li>Al Maktoum VIP Terminal • OMDW (DXB)</li>
            <li>Farnborough Hangar • EGLF (LON)</li>
          </ul>
        </div>

        {/* Certifications & Protocol matching Screenshot 7 */}
        <div className="space-y-3">
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            CERTIFICATIONS & PROTOCOL
          </h4>
          <div className="p-2.5 bg-[#0b1019] border border-[#1b2536] rounded text-[10px] text-[#f8fafc]">
            FAA PART 135 DIRECT AIR CARRIER
          </div>
          <div className="p-2.5 bg-[#0b1019] border border-[#1b2536] rounded text-[10px] text-[#d4af37] font-bold">
            ARGUS PLATINUM ELITE SAFETY
          </div>
          <div className="p-2.5 bg-[#0b1019] border border-[#1b2536] rounded text-[10px] text-[#10b981] font-bold">
            WYVERN WINGMAN AUDITED
          </div>
        </div>

        {/* Security & Manifest Protocol matching Screenshot 7 */}
        <div className="space-y-3">
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            SECURITY & MANIFEST PROTOCOL
          </h4>
          <p className="font-light leading-relaxed text-[#8292a8]">
            All passenger payloads, transponder corridors, and manifest registries protected under 256-bit military cryptographic protocol.
          </p>
          <div className="flex items-center gap-2 text-[#10b981] font-bold text-[10px] pt-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>SECURE NODE CONNECTED</span>
          </div>
        </div>
      </div>

      {/* Sub-footer Copyright matching Screenshot 7 */}
      <div className="pt-6 border-t border-[#10151f] flex flex-col sm:flex-row justify-between items-center text-[10px] gap-3">
        <div>© 2025 AeroVault Aviation Group Ltd. All rights reserved. Sovereign Class.</div>
        <div className="flex gap-6 uppercase tracking-wider">
          <a href="#privacy" className="hover:text-[#d4af37]">PRIVACY POLICY</a>
          <a href="#terms" className="hover:text-[#d4af37]">CHARTER TERMS</a>
          <a href="#safety" className="hover:text-[#d4af37]">SAFETY CLEARANCE</a>
        </div>
      </div>
    </footer>
  );
}