import React from 'react';
import { RESERVATION_ACTIONS } from '../store/reservationSlice';

export default function ReservationModal({ state, dispatch }) {
  if (!state.isModalOpen && !state.confirmedBooking) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#14120f] border border-[#d4af37]/60 rounded-3xl max-w-md w-full p-6 sm:p-8 text-[#f5ebd9] shadow-2xl relative">
        {state.confirmedBooking ? (
          <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b] mx-auto flex items-center justify-center text-xl text-[#f59e0b]">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#fbf7f0]">
              Reservation Confirmed
            </h3>
            <div className="p-4 bg-black/50 border border-[#2b251e] rounded-xl text-left text-xs space-y-1.5 font-light">
              <p><span className="text-[#8c8070]">Booking Code:</span> <strong className="font-mono text-[#f59e0b]">{state.confirmedBooking.code}</strong></p>
              <p><span className="text-[#8c8070]">Time:</span> {state.confirmedBooking.date}</p>
              <p><span className="text-[#8c8070]">Salon:</span> {state.confirmedBooking.salon}</p>
              <p><span className="text-[#8c8070]">Party:</span> {state.confirmedBooking.guests}</p>
            </div>
            <p className="text-[11px] text-[#8c8070]">
              Our Maître d' will greet you at the North Gate.
            </p>
            <button
              onClick={() => dispatch({ type: RESERVATION_ACTIONS.SET_FIELD, payload: { field: 'confirmedBooking', value: null } })}
              className="w-full py-3 bg-[#f59e0b] hover:bg-[#d97706] text-black font-extrabold text-xs tracking-widest rounded-xl transition cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[#24201c] pb-3">
              <h3 className="text-lg font-serif font-bold text-[#fbf7f0]">
                Confirm Your Salon Table
              </h3>
              <button
                onClick={() => dispatch({ type: RESERVATION_ACTIONS.CLOSE_MODAL })}
                className="text-lg text-[#8c8070] hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="text-xs space-y-2 text-[#a39785]">
              <p>Selected Evening: <strong className="text-[#f5ebd9]">{state.evening}</strong></p>
              <p>Desired Salon: <strong className="text-[#f5ebd9]">{state.salon}</strong></p>
              <p>Intimacy: <strong className="text-[#f5ebd9]">{state.guests}</strong></p>
            </div>

            <button
              onClick={() => dispatch({ type: RESERVATION_ACTIONS.CONFIRM_BOOKING })}
              className="w-full py-3 bg-[#f59e0b] hover:bg-[#d97706] text-black font-extrabold text-xs tracking-widest rounded-xl shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition cursor-pointer"
            >
              COMPLETE RESERVATION →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}