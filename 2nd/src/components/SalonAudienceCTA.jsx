import React from 'react';
import { useCollector } from '../context/CollectorContext';

export default function SalonAudienceCTA() {
  const { openProtocol } = useCollector();

  return (
    <div className="px-6 lg:px-14 py-8 bg-[#0a0a0c]">
      <div className="bg-[#141418] border border-[#262632] rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="space-y-2 text-center lg:text-left">
          <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block">
            CONFIDENTIAL PROTOCOL
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#fbfbfd]">
            Request Private Salon Audience
          </h3>
          <p className="text-xs text-[#8c8c9a] max-w-xl font-light leading-relaxed">
            Due to our strict annual allocation of twelve movements, audiences at Rue de la Cité
            in Geneva are arranged exclusively by pre-qualification.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={openProtocol}
            className="px-6 py-4 bg-[#d4af37] hover:bg-[#bfa030] text-black font-extrabold text-xs tracking-[0.18em] rounded shadow-[0_4px_25px_rgba(212,175,55,0.35)] transition flex items-center gap-2 uppercase active:scale-95 cursor-pointer"
          >
            <span>INITIATE SALON PROTOCOL</span>
            <span>📅</span>
          </button>
          <button
            onClick={() => alert("Downloading Chronos Atelier Haute Horology Monograph (PDF)...")}
            className="px-6 py-4 bg-[#1c1c24] hover:bg-[#252530] border border-[#30303e] text-[#f2f2f5] font-bold text-xs tracking-[0.18em] rounded transition flex items-center gap-2 uppercase cursor-pointer"
          >
            <span>DOWNLOAD MANUFACTURE MONOGRAPH</span>
            <span>📥</span>
          </button>
        </div>
      </div>
    </div>
  );
}