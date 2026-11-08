import React, { useState } from 'react';
import { useCollector } from '../context/CollectorContext';

export default function ProtocolModal() {
  const { collector, closeProtocol } = useCollector();
  const [submitted, setSubmitted] = useState(false);

  if (!collector.consultationModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#121216] border border-[#d4af37]/60 rounded-3xl max-w-md w-full p-6 sm:p-8 text-[#ececee] shadow-2xl relative">
        {submitted ? (
          <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] mx-auto flex items-center justify-center text-xl text-[#d4af37]">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#fbfbfd]">
              Audience Protocol Initiated
            </h3>
            <p className="text-xs text-[#8c8c9a] font-light leading-relaxed">
              Your dossier for <strong className="text-[#d4af37]">{collector.activeSalonDate}</strong> has been transmitted under seal. The Maître Horloger concierge will reach out within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                closeProtocol();
              }}
              className="w-full py-3 bg-[#d4af37] text-black font-extrabold text-xs tracking-widest rounded transition"
            >
              CLOSE DOSSIER
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-[#202028] pb-3">
              <h3 className="text-lg font-serif font-bold text-[#fbfbfd]">
                Private Salon Pre-Qualification
              </h3>
              <button onClick={closeProtocol} className="text-lg text-[#70707c] hover:text-white">
                ✕
              </button>
            </div>

            <p className="text-xs text-[#8c8c9a] font-light">
              Custodian ID: <strong className="text-[#d4af37] font-mono">{collector.custodyId}</strong>
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3 pt-2"
            >
              <input
                type="text"
                placeholder="Patron Legal Name"
                required
                className="w-full p-3 bg-black/50 border border-[#292934] rounded text-xs text-[#ececee] focus:outline-none focus:border-[#d4af37]"
              />
              <input
                type="email"
                placeholder="Confidential Email"
                required
                className="w-full p-3 bg-black/50 border border-[#292934] rounded text-xs text-[#ececee] focus:outline-none focus:border-[#d4af37]"
              />
              <select className="w-full p-3 bg-black/50 border border-[#292934] rounded text-xs text-[#ececee] focus:outline-none focus:border-[#d4af37]">
                <option>Salon Genève (Rue de la Cité 14)</option>
                <option>Salon Mayfair (London)</option>
                <option>Salon Ginza (Tokyo)</option>
                <option>Salon Zurich (Bahnhofstrasse)</option>
              </select>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#d4af37] hover:bg-[#bfa030] text-black font-extrabold text-xs tracking-widest rounded shadow-lg transition uppercase cursor-pointer"
              >
                TRANSMIT CONFIDENTIAL PROTOCOL →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}