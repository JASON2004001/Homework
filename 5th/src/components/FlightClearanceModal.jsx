import React, { useState } from 'react';
import { usePassenger } from '../context/PassengerContext';

export default function FlightClearanceModal() {
  const { patron, closeClearance } = usePassenger();
  const [confirmed, setConfirmed] = useState(false);

  if (!patron.isClearanceModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 text-[#ececee]">
      <div className="bg-[#0b1019] border border-[#d4af37]/60 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative font-mono">
        {confirmed ? (
          <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#10b981]/20 border border-[#10b981] mx-auto flex items-center justify-center text-xl text-[#10b981]">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#f8fafc]">
              Flight Clearance Locked
            </h3>
            <p className="text-xs text-[#8292a8] font-light leading-relaxed">
              Your mission authorization for <strong className="text-[#d4af37]">Tail #AV-984X</strong> has been assigned to the Ramp 4B tarmac queue. The captain and sommelier have been alerted.
            </p>
            <button
              onClick={() => {
                setConfirmed(false);
                closeClearance();
              }}
              className="w-full py-3 bg-[#d4af37] text-black font-extrabold text-xs tracking-widest rounded-xl transition cursor-pointer uppercase"
            >
              CLOSE CLEARANCE RECORD
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[#182232] pb-3">
              <h3 className="text-lg font-serif font-bold text-[#f8fafc]">
                Request Airspace Clearance
              </h3>
              <button onClick={closeClearance} className="text-lg text-[#8292a8] hover:text-white cursor-pointer">
                ✕
              </button>
            </div>

            <p className="text-xs text-[#8292a8]">
              Principal Member: <strong className="text-[#d4af37]">{patron.name}</strong> ({patron.membershipTier})
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setConfirmed(true);
              }}
              className="space-y-3 pt-2 text-xs"
            >
              <input
                type="text"
                placeholder="Diplomatic / Corporate Entity"
                required
                className="w-full p-3 bg-black/50 border border-[#202b3d] rounded-xl text-[#ececee] focus:outline-none focus:border-[#d4af37]"
              />
              <input
                type="email"
                placeholder="Confidential Secure Email"
                required
                className="w-full p-3 bg-black/50 border border-[#202b3d] rounded-xl text-[#ececee] focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-[#d4af37] hover:bg-[#b8952b] text-black font-extrabold text-xs tracking-widest rounded-xl transition uppercase cursor-pointer"
              >
                AUTHORIZE MISSION CLEARANCE →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}