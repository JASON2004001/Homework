import React from 'react';
import { BOOKING_ACTIONS } from '../store/retreatBookingSlice';

export default function ReservationModal({ state, dispatch }) {
  if (!state.isModalOpen && !state.confirmedBooking) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 text-[#ececee]">
      <div className="bg-[#141416] border border-[#b3906e]/60 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        {state.confirmedBooking ? (
          <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#b3906e]/20 border border-[#b3906e] mx-auto flex items-center justify-center text-xl text-[#b3906e]">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#f4efe8]">
              Sanctuary Sojourn Confirmed
            </h3>
            <div className="p-4 bg-[#1b1a1e] border border-[#2b2a2e] rounded-xl text-left text-xs space-y-2">
              <p><span className="text-[#73716e]">Pass Number:</span> <strong className="font-mono text-[#b3906e]">{state.confirmedBooking.code}</strong></p>
              <p><span className="text-[#73716e]">Pavilion:</span> {state.confirmedBooking.pavilion}</p>
              <p><span className="text-[#73716e]">Dates:</span> {state.confirmedBooking.dates}</p>
              <p><span className="text-[#73716e]">Immersion:</span> {state.confirmedBooking.guests}</p>
            </div>
            <button
              onClick={() => dispatch({ type: BOOKING_ACTIONS.SET_FIELD, payload: { field: 'confirmedBooking', value: null } })}
              className="w-full py-3 bg-[#b3906e] text-black font-extrabold text-xs tracking-widest rounded transition cursor-pointer uppercase"
            >
              CLOSE CONFIRMATION
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[#212024] pb-3">
              <h3 className="text-lg font-serif font-bold text-[#f4efe8]">
                Confirm Residency Dates
              </h3>
              <button onClick={() => dispatch({ type: BOOKING_ACTIONS.CLOSE_MODAL })} className="text-lg text-[#858380] hover:text-white">
                ✕
              </button>
            </div>

            <div className="text-xs space-y-2 text-[#858380]">
              <p>Selected Pavilion: <strong className="text-[#f4efe8]">{state.activePavilion}</strong></p>
              <p>Calendar Window: <strong className="text-[#f4efe8]">{state.dates}</strong></p>
              <p>Immersion Package: <strong className="text-[#f4efe8]">{state.immersion}</strong></p>
            </div>

            <button
              onClick={() => dispatch({ type: BOOKING_ACTIONS.CONFIRM })}
              className="w-full py-3 bg-[#b3906e] hover:bg-[#9d7d5d] text-black font-extrabold text-xs tracking-widest rounded shadow-lg transition uppercase cursor-pointer"
            >
              FINALIZE SANCTUARY STAY →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}