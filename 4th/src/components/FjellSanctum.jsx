import React from 'react';
import { BOOKING_ACTIONS } from '../store/retreatBookingSlice';

export default function FjellSanctum({ dispatch }) {
  const handleReserve = () => {
    dispatch({ type: BOOKING_ACTIONS.SET_PAVILION, payload: 'Fjell Pine Sanctum' });
    dispatch({ type: BOOKING_ACTIONS.OPEN_MODAL });
  };

  return (
    <section className="py-14 px-6 lg:px-14 bg-[#0d0d0e] text-[#ececee] border-b border-[#1c1c1f]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column Specifications */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-[10px] tracking-[0.25em] text-[#78756d] font-mono uppercase">
            310 M² COMPOUND • 2–6 GUESTS • CLIFF EDGE CANTILEVER
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f7f4ee]">
            Fjell Pine Sanctum
          </h2>

          <p className="text-xs sm:text-sm text-[#9a958a] font-light leading-relaxed">
            Suspended over a dramatic 200-meter sheer cliff face, the Fjell Pine Sanctum fuses bold
            Scandinavian architectural discipline with authentic thermal bathing rituals. The open-air cantilevered timber
            platform floats directly into mountain snow clouds, capturing 270° uninterrupted vistas of Mount Asama's volcanic spine.
          </p>

          {/* Metric Specifications matching Screenshot 4 */}
          <div className="space-y-3 pt-2 text-xs">
            <div className="flex justify-between py-2 border-b border-[#1f1f24]">
              <span className="text-[#8e8b82]">Dual Spring Hydrothermal System</span>
              <span className="text-[#f7f4ee] font-mono">42.2°C Onsen + 8°C Glacial Plunge</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f24]">
              <span className="text-[#8e8b82]">Nordic Smoke Savu Sauna</span>
              <span className="text-[#f7f4ee]">Native Black Birch Smoked</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f24]">
              <span className="text-[#8e8b82]">Acoustic Ridge Rating</span>
              <span className="text-[#dfba91] font-mono">99.8% Absolute Solitude</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#1f1f24]">
              <span className="text-[#8e8b82]">Helipad Direct Access</span>
              <span className="text-[#f7f4ee]">Private 4–Min Ridge Buggy</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[8px] tracking-[0.25em] text-[#78756d] uppercase block font-bold">
                ALPINE SUMMIT INSCRIPTION
              </span>
              <div className="text-2xl font-serif font-bold text-[#f7f4ee]">
                ₹1,65,000 <span className="text-xs font-sans text-[#78756d] font-normal">/ solar night</span>
              </div>
              <span className="text-[9px] text-[#8e8b82] block mt-0.5">Includes Ridge Master Concierge & Wine Cellar Key</span>
            </div>

            <button
              onClick={handleReserve}
              className="px-8 py-3.5 bg-[#dfba91] hover:bg-[#caa278] text-[#14120e] font-sans font-extrabold text-xs tracking-[0.2em] rounded-xl transition cursor-pointer active:scale-95 uppercase"
            >
              Explore & Reserve
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Cliff Art Frame */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden bg-radial from-[#1e2329] via-[#121417] to-[#0a0b0d] border border-[#26282e] p-8 h-96 flex flex-col justify-between shadow-2xl">
            <div className="flex justify-end">
              <span className="px-3 py-1 bg-black/70 border border-[#2b2b32] text-[9px] tracking-[0.2em] text-[#dfba91] rounded uppercase font-bold">
                HIGHEST ELEVATION SANCTUM • 02
              </span>
            </div>

            <div className="text-center space-y-2">
              <span className="text-6xl block select-none opacity-40">🏔️</span>
              <span className="text-xs font-serif text-[#dfba91] tracking-[0.25em] uppercase block">
                Cliffside 8.4-Meter Cantilever Deck
              </span>
            </div>

            <div className="flex justify-between items-center text-[10px] text-[#78756d] font-mono">
              <span>CANTILEVER PROJECTION: 8.4 METERS</span>
              <span>ELEVATION: 1,510M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}