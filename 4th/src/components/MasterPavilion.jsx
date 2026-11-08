import React from 'react';
import { BOOKING_ACTIONS } from '../store/retreatBookingSlice';

export default function MasterPavilion({ dispatch }) {
  const zones = [
    { code: 'ZONE ALPHA', name: 'Primary Tatami Suite' },
    { code: 'ZONE BETA', name: 'Sunken Basalt Bath' },
    { code: 'ZONE GAMMA', name: 'Hearth Fire Lounge' },
    { code: 'ZONE DELTA', name: '270° Cantilever Deck' },
  ];

  const handleReserve = () => {
    dispatch({ type: BOOKING_ACTIONS.SET_PAVILION, payload: 'The Hinoki Cedar Pavilion' });
    dispatch({ type: BOOKING_ACTIONS.OPEN_MODAL });
  };

  return (
    <section id="master-sanctum" className="py-14 px-6 lg:px-14 bg-[#0d0d0e] text-[#ececee] border-b border-[#1c1c1f]">
      {/* Top Filter Bar matching Screenshot 3 */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#1f1f22]">
        <div className="flex flex-wrap gap-2 text-[10px] font-sans tracking-[0.2em] uppercase font-bold">
          <span className="px-4 py-2 bg-[#1c1c20] text-[#dfba91] rounded-lg border border-[#2b2b32]">
            ALL RESIDENCES (4)
          </span>
          <span className="px-4 py-2 bg-[#121214] text-[#8e8b82] rounded-lg">FOREST IMMERSION</span>
          <span className="px-4 py-2 bg-[#121214] text-[#8e8b82] rounded-lg">CLIFFSIDE CANTILEVER</span>
          <span className="px-4 py-2 bg-[#121214] text-[#8e8b82] rounded-lg">ONSEN-CENTRIC</span>
          <span className="px-4 py-2 bg-[#121214] text-[#8e8b82] rounded-lg">MULTI-CHAMBER COMPOUND</span>
        </div>

        <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-[#8e8b82] uppercase font-mono">
          <span>☾ LUNAR ALIGNMENT: OPTIMAL</span>
          <span>SPATIAL STUDY / GRID MATRIX</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Visual Architectural Canvas */}
        <div className="lg:col-span-6 space-y-6">
          <div className="relative rounded-3xl overflow-hidden bg-radial from-[#22201d] via-[#141416] to-[#0a0a0b] border border-[#26262a] p-8 h-80 sm:h-96 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#dfba91] animate-ping"></span>
              <span className="text-[9px] tracking-[0.25em] text-[#dfba91] uppercase font-bold">
                MASTER SANCTUM • 01
              </span>
            </div>

            <div className="text-center space-y-2">
              <span className="text-5xl block select-none opacity-50">🏯</span>
              <span className="text-xs font-serif text-[#dfba91] tracking-[0.25em] uppercase block">
                Hinoki Structural Enclosure
              </span>
            </div>

            <div className="flex justify-between items-end text-[10px] tracking-wider font-mono">
              <div>
                <span className="text-[#78756d] block uppercase text-[8px]">ATMOSPHERE</span>
                <span className="text-[#f7f4ee]">Dawn Ridge Mist & Hinokitiol Aromas</span>
              </div>
              <div className="text-right">
                <span className="text-[#78756d] block uppercase text-[8px]">CONTINUOUS FLOW</span>
                <span className="text-[#dfba91]">41.8°C Steady</span>
              </div>
            </div>
          </div>

          {/* 4 Spatial Zones matching Screenshot 3 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {zones.map((z) => (
              <div key={z.code} className="p-3 bg-[#131316] border border-[#242428] rounded-xl text-center">
                <span className="text-[8px] font-mono text-[#78756d] uppercase block">{z.code}</span>
                <span className="text-[10px] font-serif font-bold text-[#f7f4ee] mt-0.5 block">{z.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Details & Pricing Inscription */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-[10px] tracking-[0.25em] text-[#78756d] font-mono uppercase">
            240 M² FOOTPRINT • 2–4 GUESTS • PRIVATE RAVINE FACING
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f7f4ee]">
            The Hinoki Cedar Pavilion
          </h2>

          <p className="text-xs sm:text-sm text-[#9a958a] font-light leading-relaxed">
            Conceived as a poetic transition between structural shelter and primeval cedar forest.
            Features solid, unvarnished Kiso cedar ceilings, a granite-lined wood-burning fireplace, and wide floor-to-ceiling
            glass screens that retract seamlessly into pocket walls to dissolve the boundary with the high alpine fog.
          </p>

          <div className="space-y-4 pt-2 text-xs">
            <div className="flex items-start gap-3">
              <span className="text-base text-[#dfba91]">♨️</span>
              <div>
                <h4 className="font-serif font-bold text-[#f7f4ee]">Quad-Person Hinoki Deep Bath</h4>
                <p className="text-[#78756d] mt-0.5">Plumbed directly to Well IV; high concentrations of meta-silicic acid for cellular renewal.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-base text-[#dfba91]">🪵</span>
              <div>
                <h4 className="font-serif font-bold text-[#f7f4ee]">Basalt Bedrock Fireplace</h4>
                <p className="text-[#78756d] mt-0.5">Sustained with fragrant, sustainably coppiced Nagano applewood and mountain pine logs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-base text-[#dfba91]">🍵</span>
              <div>
                <h4 className="font-serif font-bold text-[#f7f4ee]">In-Residence Dining Service</h4>
                <p className="text-[#78756d] mt-0.5">Nine-course hyper-seasonal dinner served course-by-course on bespoke ceramic ware.</p>
              </div>
            </div>
          </div>

          {/* Pricing Inscription Bar matching Screenshot 3 */}
          <div className="pt-6 border-t border-[#1f1f22] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[8px] tracking-[0.25em] text-[#78756d] uppercase block font-bold">
                SANCTUM INSCRIPTION
              </span>
              <div className="text-2xl font-serif font-bold text-[#f7f4ee]">
                ₹1,20,000 <span className="text-xs font-sans text-[#78756d] font-normal">/ solar night</span>
              </div>
              <span className="text-[9px] text-[#8e8b82] block mt-0.5">Includes Helipad Reception & Private Sommelier</span>
            </div>

            <button
              onClick={handleReserve}
              className="px-8 py-3.5 bg-[#dfba91] hover:bg-[#caa278] text-[#14120e] font-sans font-extrabold text-xs tracking-[0.2em] rounded-xl transition cursor-pointer active:scale-95 uppercase"
            >
              Reserve Sanctum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}