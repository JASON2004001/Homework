import React from 'react';
import { BOOKING_ACTIONS } from '../store/retreatBookingSlice';

export default function BookingBar({ state, dispatch }) {
  const pavilions = [
    'PRIVATE ONSEN VILLA',
    'FOREST CEDAR PAVILION',
    'ZEN SANCTUARY SUITE',
  ];

  return (
    <div id="booking" className="px-6 lg:px-14 py-4 bg-[#0c0c0d]">
      <div className="bg-[#141416] border border-[#262529] rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Top Tab Bar matching Screenshot 3 */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#212024] mb-6">
          <div className="flex flex-wrap gap-2">
            {pavilions.map((p) => (
              <button
                key={p}
                onClick={() => dispatch({ type: BOOKING_ACTIONS.SET_PAVILION, payload: p })}
                className={`px-5 py-2.5 rounded-lg text-[10px] font-sans tracking-[0.2em] uppercase font-bold transition cursor-pointer ${
                  state.activePavilion === p
                    ? 'bg-[#b3906e] text-[#0c0c0d]'
                    : 'bg-[#1b1a1e] text-[#858380] hover:text-[#f4efe8]'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="text-[10px] font-sans tracking-[0.2em] text-[#b3906e] flex items-center gap-2">
            <span>🌙</span>
            <span>Only 3 Pavilions Remain for Winter Solstice</span>
          </div>
        </div>

        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Stay Dates & Lunar Phase */}
          <div className="p-3 bg-[#1b1a1e] border border-[#2b2a2e] rounded-xl">
            <span className="text-[9px] tracking-[0.2em] text-[#73716e] uppercase font-bold block mb-1">
              STAY DATES & LUNAR PHASE
            </span>
            <div className="text-xs font-serif font-bold text-[#f4efe8] flex items-center gap-2">
              <span>📅</span>
              <span>{state.dates}</span>
            </div>
            <span className="text-[9px] text-[#b3906e] block mt-0.5">{state.lunarPhase}</span>
          </div>

          {/* Thermal Ritual Immersion */}
          <div>
            <span className="text-[9px] tracking-[0.2em] text-[#73716e] uppercase font-bold block mb-2">
              THERMAL RITUAL IMMERSION
            </span>
            <select
              value={state.immersion}
              onChange={(e) =>
                dispatch({
                  type: BOOKING_ACTIONS.SET_FIELD,
                  payload: { field: 'immersion', value: e.target.value },
                })
              }
              className="w-full bg-[#1b1a1e] border border-[#2b2a2e] text-xs text-[#f4efe8] p-3.5 rounded-xl focus:outline-none focus:border-[#b3906e]"
            >
              <option>Geothermal + Daily Tisane Ritual</option>
              <option>Nordic Löyly Steam & Cold Mist</option>
              <option>Complete Silent Sanctuary Sojourn</option>
            </select>
          </div>

          {/* Occupancy & Bath */}
          <div>
            <span className="text-[9px] tracking-[0.2em] text-[#73716e] uppercase font-bold block mb-2">
              OCCUPANCY & BATH
            </span>
            <select
              value={state.occupancy}
              onChange={(e) =>
                dispatch({
                  type: BOOKING_ACTIONS.SET_FIELD,
                  payload: { field: 'occupancy', value: e.target.value },
                })
              }
              className="w-full bg-[#1b1a1e] border border-[#2b2a2e] text-xs text-[#f4efe8] p-3.5 rounded-xl focus:outline-none focus:border-[#b3906e]"
            >
              <option>2 Guests • Rotenburo Bath</option>
              <option>1 Guest • Silent Reflection Suite</option>
              <option>4 Guests • Family Hinoki Pavilion</option>
            </select>
          </div>

          {/* Action Button */}
          <div>
            <button
              onClick={() => dispatch({ type: BOOKING_ACTIONS.OPEN_MODAL })}
              className="w-full p-3.5 bg-[#b3906e] hover:bg-[#9d7d5d] text-[#0c0c0d] font-extrabold text-xs tracking-[0.2em] rounded-xl transition flex items-center justify-center gap-2 cursor-pointer uppercase active:scale-95"
            >
              <span>CHECK AVAILABILITY</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}