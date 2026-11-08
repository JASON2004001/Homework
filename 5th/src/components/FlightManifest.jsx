import React from 'react';

export default function FlightManifest() {
  const manifests = [
    {
      pax: 'P1',
      name: 'Lady Vance of Northumberland',
      detail: 'Obsidian #084 • Diplomatic Pass #GBR-9921',
      badge: 'CUSTOMS PRE-CLEARED',
    },
    {
      pax: 'P2',
      name: 'Lord Arthur Vance',
      detail: 'Principal Guest • Passport #GBR-4410',
      badge: 'CUSTOMS PRE-CLEARED',
    },
    {
      pax: 'P3',
      name: 'Dr. Elena Rostova',
      detail: 'Chief Medical Officer • Pass #CHE-1823',
      badge: 'BIOMETRIC MATCH',
    },
    {
      pax: 'P4',
      name: 'Marcus Sterling',
      detail: 'Executive Protection Lead • License #SEC-09',
      badge: 'SIDEARM DECLARED',
    },
  ];

  return (
    <section id="manifest" className="py-14 px-6 lg:px-14 bg-[#07090d] text-[#ececee] border-b border-[#171d2b]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Verified Flight Manifest matching Screenshot 6 */}
        <div className="lg:col-span-7 bg-[#0b1019] border border-[#1e2a3d] rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex justify-between items-center pb-4 border-b border-[#182232] mb-4">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold block">
                SECURITY PROTOCOL 256-BIT
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f8fafc]">
                Verified Flight Manifest #AV-984X
              </h3>
            </div>
            <span className="text-[9px] font-mono text-[#10b981] uppercase font-bold">
              ● ALL PRE-CLEARED
            </span>
          </div>

          <p className="text-xs text-[#8292a8] font-light leading-relaxed mb-6">
            Automated DHS Global Entry validation, private biometric customs declaration, and bespoke catering records tied to individual principal profiles.
          </p>

          <div className="space-y-3 mb-6">
            {manifests.map((m) => (
              <div
                key={m.pax}
                className="p-3.5 bg-[#0f1624] border border-[#1b2536] rounded-xl flex items-center justify-between text-xs font-mono"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-[#1e293b] text-[#d4af37] font-bold flex items-center justify-center text-[10px]">
                    {m.pax}
                  </span>
                  <div>
                    <h4 className="font-bold text-[#f8fafc]">{m.name}</h4>
                    <span className="text-[10px] text-[#78889e]">{m.detail}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] text-[#10b981] font-bold">
                  <span>{m.badge}</span>
                  <span>✓</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#182232] flex justify-between text-[10px] font-mono text-[#78889e]">
            <span>PAYLOAD TOTAL WEIGHT: 680 LBS PAX + 240 LBS BAGGAGE</span>
            <span className="text-[#10b981] font-bold">WITHIN CG ENVELOPE</span>
          </div>
        </div>

        {/* Right Column: Sovereign Jet-Card Tiers matching Screenshot 6 */}
        <div className="lg:col-span-5 bg-[#0b1019] border border-[#1e2a3d] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
          <div>
            <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold block">
              VAULT MEMBERSHIP
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f8fafc]">
              Sovereign Jet-Card Tiers
            </h3>
            <p className="text-xs text-[#8292a8] font-light mt-1">
              Guaranteed availability on 6 hours callout with fixed locked hourly rates and zero repositioning fees.
            </p>
          </div>

          {/* Obsidian Tier Card */}
          <div className="p-4 bg-[#111827] border-2 border-[#d4af37] rounded-2xl space-y-2">
            <div className="flex justify-between items-center font-mono">
              <h4 className="text-base font-serif font-bold text-[#d4af37]">Obsidian Tier</h4>
              <span className="text-[9px] bg-[#d4af37] text-black font-bold px-2 py-0.5 rounded">
                50+ HOURS
              </span>
            </div>
            <p className="text-xs text-[#94a3b8] font-light leading-relaxed">
              Guaranteed worldwide availability on 6-hr callout, dedicated Falcon 8X tail on priority standby, complimentary de-icing, and zero peak-day surcharges.
            </p>
            <div className="flex justify-between text-[9px] font-mono pt-1 text-[#10b981] font-bold">
              <span>● CURRENT ACTIVE TIER</span>
              <span className="text-[#d4af37]">UNLIMITED FLEET ACCESS</span>
            </div>
          </div>

          {/* Solitaire Gold */}
          <div className="p-4 bg-[#0f1624] border border-[#1d2739] rounded-2xl space-y-1">
            <div className="flex justify-between font-mono">
              <h4 className="text-sm font-serif font-bold text-[#f8fafc]">Solitaire Gold</h4>
              <span className="text-[9px] text-[#78889e]">25 HOURS</span>
            </div>
            <p className="text-xs text-[#8292a8] font-light leading-relaxed">
              Guaranteed super-midsize and heavy jet access with 24-hr callout, fixed predictable billing, and personalized sommelier profiles.
            </p>
          </div>

          {/* Centurion Wing */}
          <div className="p-4 bg-[#0f1624] border border-[#1d2739] rounded-2xl space-y-1">
            <div className="flex justify-between font-mono">
              <h4 className="text-sm font-serif font-bold text-[#f8fafc]">Centurion Wing</h4>
              <span className="text-[9px] text-[#78889e]">ON-DEMAND ESCROW</span>
            </div>
            <p className="text-xs text-[#8292a8] font-light leading-relaxed">
              Bespoke aircraft charter escrow solution with zero upfront capital tie-up and tailored tail sourcing globally.
            </p>
          </div>

          <button
            onClick={() => alert("Transmitting Obsidian Tier Concierge Inscription...")}
            className="w-full py-3.5 bg-[#172033] hover:bg-[#202c44] border border-[#d4af37]/50 text-[#d4af37] font-mono font-bold text-xs tracking-wider rounded-xl transition cursor-pointer uppercase flex items-center justify-center gap-2"
          >
            <span>👑 INQUIRE FOR OBSIDIAN MEMBERSHIP</span>
          </button>
        </div>
      </div>
    </section>
  );
}