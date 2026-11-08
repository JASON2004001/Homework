import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#09090a] border-t border-[#1c1b1e] pt-14 pb-8 px-6 lg:px-14 text-[#858380]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Solstice Dispatch Form */}
        <div className="space-y-3 lg:col-span-1">
          <h4 className="text-base font-serif font-bold text-[#f4efe8]">
            The Seasonal Solstice Dispatch
          </h4>
          <p className="text-xs font-light text-[#73716e] leading-relaxed">
            Meditative chronicles, micro-season shifts, thermal water chemistry reports, and rare botanical harvest previews delivered quarterly.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Inscribed into the Seasonal Solstice Dispatch.");
            }}
            className="flex items-center bg-[#141416] border border-[#262529] rounded overflow-hidden"
          >
            <input
              type="email"
              placeholder="guest@elysium.retreat"
              required
              className="w-full px-3 py-2 text-xs text-[#ececee] bg-transparent focus:outline-none"
            />
            <button type="submit" className="px-3 py-2 bg-[#212024] text-[10px] tracking-wider text-[#b3906e] font-bold uppercase hover:bg-[#2c2b30]">
              INSCRIBE
            </button>
          </form>
        </div>

        {/* Sanctuary Conduct */}
        <div>
          <h4 className="text-[10px] tracking-[0.25em] text-[#b3906e] uppercase font-bold mb-3">
            SANCTUARY CONDUCT
          </h4>
          <ul className="space-y-2 text-xs text-[#9c9a96]">
            <li><a href="#pillars" className="hover:text-[#b3906e]">Japanese Onsen Etiquette Guide</a></li>
            <li><a href="#pillars" className="hover:text-[#b3906e]">Shinrin-yoku Protocol</a></li>
            <li><a href="#journey" className="hover:text-[#b3906e]">Nordic Thermal Conservation</a></li>
            <li><a href="#hero" className="hover:text-[#b3906e]">Volcanic Spring Analysis</a></li>
          </ul>
        </div>

        {/* Alpine Telemetry Box matching Screenshot 8 */}
        <div className="lg:col-span-2 bg-[#121214] border border-[#212024] p-5 rounded-2xl">
          <h4 className="text-[10px] tracking-[0.25em] text-[#b3906e] uppercase font-bold mb-3">
            ALPINE TELEMETRY
          </h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[#73716e] block text-[10px]">Ridge Location</span>
              <span className="text-[#f4efe8] font-mono">Hakone-Nordic Alpine</span>
            </div>
            <div>
              <span className="text-[#73716e] block text-[10px]">Elevation</span>
              <span className="text-[#f4efe8] font-mono">1,240m Above Sea</span>
            </div>
            <div>
              <span className="text-[#73716e] block text-[10px]">Water Temperature</span>
              <span className="text-[#b3906e] font-mono font-bold">41.4°C • Hinoki Cedar</span>
            </div>
            <div>
              <span className="text-[#73716e] block text-[10px]">Micro-Climate</span>
              <span className="text-[#f4efe8] font-mono">Mist • 9°C Alpine Air</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="pt-6 border-t border-[#18171a] flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#555457] gap-3">
        <div className="flex gap-4">
          <span>🌿 ISO 14001 Ecological Certified</span>
          <span>🍃 Nordic Green Wellness Alliance</span>
          <span>Hakone Geopark Biosphere Custodian</span>
        </div>
        <div>
          © 2025 Elysium Sanctuary Retreat Ltd. All silent rights reserved.
        </div>
      </div>
    </footer>
  );
}