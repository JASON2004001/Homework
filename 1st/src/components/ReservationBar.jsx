import React from 'react';
import { RESERVATION_ACTIONS } from '../store/reservationSlice';

export default function ReservationBar({ state, dispatch }) {
  const handleFieldChange = (field, value) => {
    dispatch({
      type: RESERVATION_ACTIONS.SET_FIELD,
      payload: { field, value },
    });
  };

  const handleFindAvailability = () => {
    dispatch({ type: RESERVATION_ACTIONS.OPEN_MODAL });
  };

  return (
    <div className="px-6 lg:px-14 py-4 bg-[#0c0b0a]">
      <div className="bg-[#151310] border border-[#2b251e] rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-[#f59e0b]">📅</span>
            <div>
              <h3 className="text-xl font-serif text-[#fbf7f0] font-bold">
                Private Salon Reservation
              </h3>
              <p className="text-xs text-[#8c8070] font-light">
                Intimate seating releases 30 days in advance at 09:00 EST.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#d4af37] bg-[#211b13] px-3 py-1 rounded-full border border-[#3b3022]">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
            <span>LIMITED: 4 TABLES OPEN TONIGHT</span>
          </div>
        </div>

        {/* 3 Dropdown Filters + Primary Action Button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label className="text-[10px] tracking-[0.25em] text-[#807567] uppercase font-bold block mb-2">
              SERVICE EVENING
            </label>
            <select
              value={state.evening}
              onChange={(e) => handleFieldChange('evening', e.target.value)}
              className="w-full bg-[#0d0c0a] border border-[#2b251e] text-xs text-[#f5ebd9] p-3 rounded-xl focus:outline-none focus:border-[#f59e0b]"
            >
              <option>Tonight, Oct 24 (19:30)</option>
              <option>Tomorrow, Oct 25 (20:00)</option>
              <option>Friday, Oct 27 (19:30)</option>
              <option>Saturday, Oct 28 (21:00)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] tracking-[0.25em] text-[#807567] uppercase font-bold block mb-2">
              ATMOSPHERE / SALON
            </label>
            <select
              value={state.salon}
              onChange={(e) => handleFieldChange('salon', e.target.value)}
              className="w-full bg-[#0d0c0a] border border-[#2b251e] text-xs text-[#f5ebd9] p-3 rounded-xl focus:outline-none focus:border-[#f59e0b]"
            >
              <option>Main Atrium Salon</option>
              <option>The Open Hearth Counter</option>
              <option>Private Salon Nocturne</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] tracking-[0.25em] text-[#807567] uppercase font-bold block mb-2">
              PARTY INTIMACY
            </label>
            <select
              value={state.guests}
              onChange={(e) => handleFieldChange('guests', e.target.value)}
              className="w-full bg-[#0d0c0a] border border-[#2b251e] text-xs text-[#f5ebd9] p-3 rounded-xl focus:outline-none focus:border-[#f59e0b]"
            >
              <option>2 Guests (Tasting Table)</option>
              <option>4 Guests (Salon Booth)</option>
              <option>6 Guests (Chef's Alcove)</option>
              <option>Up to 14 Guests (Full Vault)</option>
            </select>
          </div>

          <div>
            <button
              onClick={handleFindAvailability}
              className="w-full p-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-black font-extrabold text-xs tracking-[0.2em] rounded-xl shadow-[0_4px_25px_rgba(245,158,11,0.35)] transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>FIND AVAILABILITY</span>
              <span>🔑</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}