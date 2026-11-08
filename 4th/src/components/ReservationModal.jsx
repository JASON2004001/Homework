import React from 'react';
import { BOOKING_ACTIONS } from '../store/retreatBookingSlice';

export default function ReservationModal({ state, dispatch }) {
  if (!state.isModalOpen && !state.confirmedBooking) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 text-[#ececee]">
      <div className="bg-[#141416] border border-[#dfba91]/60 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        {state.confirmedBooking ? (
          <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#dfba91]/20 border border-[#dfba91] mx-auto flex items-center justify-center text-xl text-[#dfba91]">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#f7f4ee]">
              Sanctum Inscription Confirmed
            </h3>
            <div className="p-4 bg-[#1b1b1e] border border-[#2b2b30] rounded-xl text-left text-xs space-y-2">
              <p><span className="text-[#78756d]">Booking Reference:</span> <strong className="font-mono text-[#dfba91]">{state.confirmedBooking.reference}</strong></p>
              <p><span className="text-[#78756d]">Pavilion:</span> {state.confirmedBooking.pavilion}</p>
              <p><span className="text-[#78756d]">Arrival Window:</span> {state.confirmedBooking.arrivalDate}</p>
            </div>
            <button
              onClick={() => dispatch({ type: BOOKING_ACTIONS.SET_PAVILION, payload: 'The Hinoki Cedar Pavilion' })}
              className="w-full py-3 bg-[#dfba91] text-[#14120e] font-extrabold text-xs tracking-widest rounded-xl transition cursor-pointer uppercase"
            >
              Close Confirmation
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[#212124] pb-3">
              <h3 className="text-lg font-serif font-bold text-[#f7f4ee]">
                Inscribe Sanctuary Stay
              </h3>
              <button onClick={() => dispatch({ type: BOOKING_ACTIONS.CLOSE_MODAL })} className="text-lg text-[#78756d] hover:text-white cursor-pointer">
                ✕
              </button>
            </div>

            <p className="text-xs text-[#9a958a]">
              You are requesting private residency at <strong className="text-[#dfba91]">{state.activePavilion}</strong>.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: BOOKING_ACTIONS.CONFIRM_BOOKING });
              }}
              className="space-y-3 pt-2"
            >
              <input
                type="text"
                placeholder="Patron Full Name"
                required
                className="w-full p-3 bg-black/50 border border-[#2b2b30] rounded-xl text-xs text-[#ececee] focus:outline-none focus:border-[#dfba91]"
              />
              <input
                type="email"
                placeholder="Confidential Email Address"
                required
                className="w-full p-3 bg-black/50 border border-[#2b2b30] rounded-xl text-xs text-[#ececee] focus:outline-none focus:border-[#dfba91]"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-[#dfba91] hover:bg-[#caa278] text-[#14120e] font-extrabold text-xs tracking-widest rounded-xl transition uppercase cursor-pointer"
              >
                Transmit Inscription →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}