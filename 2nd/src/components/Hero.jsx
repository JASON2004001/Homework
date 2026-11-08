import React from 'react';
import { useCollector } from '../context/CollectorContext';

export default function Hero() {
  const { openProtocol } = useCollector();

  return (
    <section id="hero" className="relative pt-8 pb-14 px-6 lg:px-14 bg-[#0a0a0c] text-[#ececee] overflow-hidden">
      {/* Top Heritage Badge */}
      <div className="text-[10px] tracking-[0.3em] text-[#8e8e9c] uppercase font-semibold mb-6 flex items-center gap-2">
        <span className="w-5 h-[1px] bg-[#d4af37]"></span>
        <span>MANUFACTURE PRIVÉE GENÈVE • ANNO MMXXV</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#fbfbfd] leading-[1.08] tracking-tight">
            The Architecture of <br />
            <span className="italic font-normal text-[#d4af37]">Perpetual Motion</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9a9aa6] max-w-xl font-light leading-relaxed">
            Handcrafted in Geneva. Limited to twelve singular pieces per annum. Sculpted from
            monolithic platinum and blackened titanium, regulated by a flying tourbillon escapement.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={openProtocol}
              className="px-7 py-3.5 bg-[#d4af37] hover:bg-[#bfa030] text-black font-extrabold text-xs tracking-[0.18em] rounded shadow-[0_4px_25px_rgba(212,175,55,0.35)] transition flex items-center gap-2 active:scale-95 cursor-pointer uppercase"
            >
              <span>COMMISSION BESPOKE TIMEPIECE</span>
              <span>↗</span>
            </button>
            <a
              href="#bespoke"
              className="px-7 py-3.5 bg-[#121216] hover:bg-[#1a1a20] border border-[#2b2b34] text-[#ececee] font-bold text-xs tracking-[0.18em] rounded transition flex items-center gap-2 uppercase"
            >
              <span>⚙</span>
              <span>INSPECT MOVEMENT CALIBRE</span>
            </a>
          </div>

          {/* Three Movement Metrics matching Screenshot 2 */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1e1e24] max-w-lg">
            <div>
              <div className="text-[9px] tracking-[0.25em] text-[#70707c] uppercase">ESCAPEMENT</div>
              <div className="text-sm sm:text-base font-serif font-bold text-[#f5f5f7] mt-1">
                3 Hz / 21,600 VPH
              </div>
            </div>
            <div>
              <div className="text-[9px] tracking-[0.25em] text-[#70707c] uppercase">POWER RESERVE</div>
              <div className="text-sm sm:text-base font-serif font-bold text-[#f5f5f7] mt-1">
                72 Hours Twin Barrel
              </div>
            </div>
            <div>
              <div className="text-[9px] tracking-[0.25em] text-[#70707c] uppercase">CERTIFICATION</div>
              <div className="text-sm sm:text-base font-serif font-bold text-[#d4af37] mt-1">
                Poinçon de Genève
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Horological Masterpiece Artwork Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl border border-[#24242d] bg-gradient-to-b from-[#141419] to-[#0c0c0f] p-8 shadow-2xl overflow-hidden flex flex-col items-center">
            {/* Top Allocation Badge */}
            <div className="w-full flex justify-between items-center text-[10px] tracking-[0.25em] font-semibold text-[#80808e] mb-4">
              <span className="uppercase text-[#d4af37]">PIECE UNIQUE</span>
              <span className="font-mono text-[#f5f5f7]">N° 01/12</span>
            </div>

            {/* Pure SVG Animated Flying Tourbillon Assembly */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-2 flex items-center justify-center">
              {/* Outer Platinum Bezel */}
              <div className="absolute inset-0 rounded-full border-4 border-[#3e3e4a] shadow-[inset_0_0_20px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.15)] bg-[#0d0d10]"></div>

              {/* Skeleton Bridges SVG */}
              <svg className="w-56 h-56 relative z-10 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                {/* Movement Gears */}
                <circle cx="50" cy="50" r="45" stroke="#252530" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="35" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
                <circle cx="50" cy="50" r="18" fill="#181820" stroke="#d4af37" strokeWidth="1.5" />
                <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="#2c2c38" strokeWidth="2" />
                <path d="M 22 22 L 78 78 M 22 78 L 78 22" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
                {/* Blued Hands */}
                <line x1="50" y1="50" x2="50" y2="24" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="50" x2="72" y2="50" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                <circle cx="50" cy="50" r="4" fill="#d4af37" />
              </svg>

              {/* Sub-Dial Ring */}
              <div className="absolute bottom-6 w-20 h-20 rounded-full border border-[#d4af37]/40 bg-black/60 flex items-center justify-center">
                <span className="text-[8px] font-mono text-[#d4af37] animate-pulse">TOURBILLON</span>
              </div>
            </div>

            {/* Bottom Card Annotation matching Screenshot 2 */}
            <div className="w-full mt-4 p-4 rounded-xl bg-black/60 border border-[#22222a] text-left">
              <div className="flex items-center gap-2 text-[9px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-1">
                <span>CAGE TOURBILLON</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping"></span>
              </div>
              <p className="text-[11px] text-[#8a8a98] font-light leading-relaxed">
                0.28g ultra-light titanium cage rotating 360° every 60 seconds with mirror-polished anglage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}