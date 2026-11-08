import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#090807] border-t border-[#24201c] pt-14 pb-8 px-6 lg:px-14 text-[#9c9080]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand overview */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full border border-[#f59e0b]/50 flex items-center justify-center text-[#f59e0b] text-xs">
              ✦
            </div>
            <span className="text-lg font-serif font-bold text-[#fbf7f0] tracking-wider uppercase">
              AURELIA
            </span>
          </div>
          <p className="text-xs font-light text-[#7a7062] leading-relaxed">
            An immersive culinary sanctuary offering bespoke tasting narratives,
            rare cellar vintages, and discreet salon hospitality.
          </p>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            LOCATION
          </h4>
          <p className="text-xs text-[#f5ebd9]">440 Heritage Promenade</p>
          <p className="text-xs text-[#7a7062] mt-1">Crown Pavilion, Suite 10</p>
          <p className="text-xs text-[#7a7062] mt-1">Valet Reception North Gate</p>
        </div>

        {/* Salon Hours */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            SALON HOURS
          </h4>
          <p className="text-xs text-[#f5ebd9]">Wednesday – Sunday</p>
          <p className="text-xs text-[#7a7062] mt-1">Dinner: 17:30 – 23:00</p>
          <p className="text-xs text-[#7a7062] mt-1">Salon Bar until 01:00</p>
        </div>

        {/* Concierge */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
            CONCIERGE
          </h4>
          <p className="text-xs text-[#f5ebd9] font-mono">concierge@aureliareserve.com</p>
          <p className="text-xs text-[#7a7062] mt-1 font-mono">+1 (555) 839–2873</p>
          <div className="mt-3 inline-block px-3 py-1 border border-[#3d3326] text-[9px] tracking-[0.2em] text-[#d4af37] font-bold rounded uppercase">
            TWO MICHELIN STARS 2024
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="pt-6 border-t border-[#171410] flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#635a4e] gap-3">
        <div>© 2024 Aurelia Reserve & Dining. All rights reserved.</div>
        <div className="flex gap-6 uppercase tracking-wider">
          <a href="#privacy" className="hover:text-[#d4af37]">Privacy Policy</a>
          <a href="#dietary" className="hover:text-[#d4af37]">Dietary Protocol</a>
          <a href="#cellar" className="hover:text-[#d4af37]">Cellar Archive</a>
        </div>
      </div>
    </footer>
  );
}