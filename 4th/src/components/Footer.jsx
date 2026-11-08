import React from 'react';
import { usePatronWellness } from '../context/PatronWellnessContext';

export default function Footer() {
  const { membership, toggleSoundscape } = usePatronWellness();

  return (
    <footer id="footer" className="bg-[#09090a] border-t border-[#1c1c1f] pt-14 pb-8 px-6 lg:px-14 text-[#8e8b82]">
      {/* Top Solstice & Equinox Dispatches matching Screenshot 8 */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 border-b border-[#1f1f22] gap-6">
        <div className="space-y-1">
          <span className="text-[9px] tracking-[0.25em] text-[#dfba91] uppercase font-mono block">
            ✉ SOLSTICE & EQUINOX DISPATCHES
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#f7f4ee]">
            Mindful Dispatches from the High Ridge
          </h3>
          <p className="text-xs text-[#78756d] max-w-xl font-light">
            Receive quarterly poetic chronicles on sub-alpine botanical harvests, micro-seasonal lunar onsen alignments, and silent architectural openings. Never promotional; only tranquil contemplation.
          </p>
        </div>

        <div className="w-full lg:w-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Address inscribed in the confidential dispatch ledger.");
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          >
            <input
              type="email"
              placeholder="Enter your private correspondence email"
              required
              className="px-4 py-3 bg-[#141416] border border-[#2b2b30] rounded-xl text-xs text-[#ececee] focus:outline-none focus:border-[#dfba91] w-full sm:w-80"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#dfba91] hover:bg-[#caa278] text-[#14120e] font-sans font-bold text-xs tracking-wider rounded-xl uppercase transition cursor-pointer"
            >
              Inscribe →
            </button>
          </form>
          <div className="flex items-center gap-4 text-[9px] text-[#78756d] font-mono mt-2">
            <span>• Carbon-Neutral Mail Protocol</span>
            <span>• Encrypted Dispatch Ledger</span>
          </div>
        </div>
      </div>

      {/* 5 Information Columns matching Screenshot 8 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 text-xs">
        {/* Coordinates */}
        <div className="col-span-2 md:col-span-1 space-y-3">
          <h4 className="text-[9px] tracking-[0.25em] text-[#dfba91] uppercase font-bold">
            SANCTUARY COORDINATES & TERROIR
          </h4>
          <div className="p-3 bg-[#141416] border border-[#242428] rounded-xl">
            <span className="text-[10px] text-[#f7f4ee] font-serif font-bold block">▲ MOUNT ASAMA RIDGE</span>
            <span className="text-[9px] font-mono text-[#78756d] block mt-1">36.6513° N, 138.1810° E</span>
            <span className="text-[9px] font-mono text-[#78756d]">1,480m Alpine Elevation</span>
          </div>
          <p className="text-[10px] text-[#78756d]">Microclimate: Sub-Alpine Mist</p>
        </div>

        {/* Architecture & Pavilions */}
        <div>
          <h4 className="text-[9px] tracking-[0.25em] text-[#dfba91] uppercase font-bold mb-3">
            ARCHITECTURE & PAVILIONS
          </h4>
          <ul className="space-y-2 text-[#9a958a]">
            <li>The Hinoki Cedar Pavilion (240m²)</li>
            <li>Komorebi Forest Villa (185m²)</li>
            <li>Basalt Onsen Suite (140m²)</li>
            <li>Fjell Pine Sanctum (310m²)</li>
            <li className="text-[#dfba91]">Architectural Blueprint Archive</li>
          </ul>
        </div>

        {/* Holistic Rituals */}
        <div>
          <h4 className="text-[9px] tracking-[0.25em] text-[#dfba91] uppercase font-bold mb-3">
            HOLISTIC RITUALS & APOTHECARY
          </h4>
          <ul className="space-y-2 text-[#9a958a]">
            <li>Geothermal Hydrotherapy</li>
            <li>Circadian Sleep Chambers</li>
            <li>Kurodake Volcanic Stones</li>
            <li>Wild Hinokitiol Inhalations</li>
            <li>Midnight Lunar Sound Immersion</li>
          </ul>
        </div>

        {/* Sanctuary Ethics */}
        <div>
          <h4 className="text-[9px] tracking-[0.25em] text-[#dfba91] uppercase font-bold mb-3">
            SANCTUARY ETHICS & STEWARDSHIP
          </h4>
          <ul className="space-y-2 text-[#9a958a]">
            <li className="text-[#dfba91]">• 100% Gensen Kakenagashi</li>
            <li>Basalt Bed Preservation Trust</li>
            <li>Dark Sky Alpine Reserve (Class I)</li>
            <li>Carbon-Negative Timber Sourcing</li>
            <li>Zero-Recirculation Hydro Charter</li>
          </ul>
        </div>

        {/* Private Concierge */}
        <div>
          <h4 className="text-[9px] tracking-[0.25em] text-[#dfba91] uppercase font-bold mb-3">
            PRIVATE CONCIERGE & SOCIETY
          </h4>
          <ul className="space-y-2 text-[#9a958a]">
            <li className="text-[#dfba91]">🛡 Inner Sanctum Membership</li>
            <li>Bespoke Helipad Transfer</li>
            <li>Dietary Consultation</li>
            <li>Guest Biometrics & Health Link</li>
            <li>Confidential Estate Bookings</li>
          </ul>
        </div>
      </div>

      {/* Bottom Live Soundscape Banner matching Screenshot 8 */}
      <div className="p-4 bg-[#141416] border border-[#242428] rounded-2xl flex flex-wrap items-center justify-between gap-4 my-6 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-xl">🌙</span>
          <div>
            <span className="text-[8px] font-mono text-[#78756d] uppercase">ASTRAL ALMANAC (78% ILLUM)</span>
            <div className="font-serif font-bold text-[#f7f4ee]">Waning Gibbous Phase</div>
            <span className="text-[9px] text-[#78756d]">Optimal open-air bath: 23:40 – 04:15</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleSoundscape}
            className="w-9 h-9 rounded-full bg-[#1e1e24] border border-[#2e2e38] flex items-center justify-center text-sm cursor-pointer hover:border-[#dfba91]"
            title="Toggle Live Soundscape"
          >
            {membership.isPlayingSoundscape ? '🔊' : '🔈'}
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-mono text-[#78756d] uppercase">LIVE RIDGE SOUNDSCAPE</span>
              <span className="text-[8px] font-mono text-[#dfba91] animate-pulse">STREAMING</span>
            </div>
            <div className="font-serif font-bold text-[#f7f4ee]">{membership.activeSoundscape}</div>
            <span className="text-[9px] text-[#78756d]">Sub-alpine rain & cedar canopy acoustic</span>
          </div>
        </div>

        <div className="text-right font-mono">
          <span className="text-[8px] text-[#dfba91] uppercase block">• WELL IV TELEMETRY</span>
          <span className="text-sm font-bold text-[#f7f4ee]">41.2°C • pH 7.4 Neutral</span>
          <span className="text-[9px] text-[#78756d] block">842 mg/L Sulfur & Meta-Silicic Acid</span>
        </div>
      </div>

      {/* Sub-footer Copyright */}
      <div className="pt-6 border-t border-[#17171a] flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#5e5c57] gap-3">
        <div>© MMXXIV ELYSIUM SANCTUARY CO. • ALL SACRED RIGHTS RESERVED</div>
        <div className="flex gap-6 uppercase tracking-wider">
          <a href="#charter" className="hover:text-[#dfba91]">GEOTHERMAL CHARTER</a>
          <a href="#solitude" className="hover:text-[#dfba91]">SOLITUDE PROTOCOLS</a>
          <a href="#privacy" className="hover:text-[#dfba91]">PRIVACY OF THE RIDGE</a>
          <a href="#accessibility" className="hover:text-[#dfba91]">ETHICAL MINERAL SOURCING</a>
        </div>
      </div>
    </footer>
  );
}