import React from 'react';
import { CHARTER_ACTIONS } from '../store/charterFlightSlice';
import { usePassenger } from '../context/PassengerContext';

export default function MultiLegDispatch({ state, dispatch }) {
  const { openClearance } = usePassenger();

  const tabs = [
    'MULTI-LEG ITINERARY',
    'ONE-WAY DIRECT',
    'ROUND-TRIP',
    'VAULT EMPTY-LEGS',
  ];

  return (
    <section id="dispatch" className="py-14 px-6 lg:px-14 bg-[#07090d] text-[#ececee] border-b border-[#171d2b]">
      <div className="bg-[#0b1019] border border-[#1c2637] rounded-3xl p-6 sm:p-10 shadow-2xl">
        {/* Header & Tabs matching Screenshot 4 */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4 pb-6 border-b border-[#182232]">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block mb-1">
              SOVEREIGN MISSION PLANNING
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f8fafc]">
              Multi-Leg Flight Charter Dispatch
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold uppercase">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => dispatch({ type: CHARTER_ACTIONS.SET_TAB, payload: tab })}
                className={`px-4 py-2 rounded-xl transition cursor-pointer ${
                  state.activeTab === tab
                    ? 'bg-[#d4af37] text-black shadow-lg'
                    : 'bg-[#101724] text-[#8393aa] hover:text-[#f8fafc]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Flight Legs List matching Screenshot 4 */}
        <div className="space-y-4 mb-6">
          {state.legs.map((leg) => (
            <div
              key={leg.id}
              className="p-5 bg-[#0f1624] border border-[#1e2a3d] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#d4af37]/50 transition"
            >
              <div className="flex items-center gap-4">
                <span className="text-lg font-mono font-bold text-[#d4af37]">{leg.num}</span>
                <div>
                  <span className="text-[8px] font-mono text-[#78889e] uppercase block">ORIGIN / DESTINATION</span>
                  <div className="text-base sm:text-lg font-serif font-bold text-[#f8fafc]">
                    {leg.origin} → {leg.destination}
                  </div>
                  <span className="text-[10px] text-[#8292a8] font-light">{leg.subtext}</span>
                </div>
              </div>

              <div className="flex items-center gap-8 font-mono text-xs">
                <div>
                  <span className="text-[8px] text-[#78889e] uppercase block">DEPARTURE</span>
                  <span className="text-[#f8fafc] font-bold">{leg.departure}</span>
                </div>
                <div>
                  <span className="text-[8px] text-[#78889e] uppercase block">PASSENGERS</span>
                  <span className="text-[#f8fafc] font-bold">{leg.passengers}</span>
                </div>
                <div className="px-3 py-1 bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 rounded text-[9px] font-bold tracking-widest uppercase">
                  {leg.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Additional Mission Leg Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => dispatch({ type: CHARTER_ACTIONS.ADD_LEG })}
            className="text-xs font-mono text-[#d4af37] hover:underline font-bold tracking-widest uppercase cursor-pointer"
          >
            ⊕ ADD ADDITIONAL MISSION LEG
          </button>
        </div>

        {/* Bespoke Mission Concierge Protocols Checkboxes matching Screenshot 4 */}
        <div className="py-4 border-t border-[#182232] mb-6">
          <span className="text-[9px] font-mono tracking-widest text-[#78889e] uppercase block mb-3 font-bold">
            BESPOKE MISSION CONCIERGE PROTOCOLS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            {Object.keys(state.protocols).map((key) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={state.protocols[key]}
                  onChange={() => dispatch({ type: CHARTER_ACTIONS.TOGGLE_PROTOCOL, payload: key })}
                  className="accent-[#d4af37] w-4 h-4 cursor-pointer"
                />
                <span className="text-[#cbd5e1] capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Bottom Investment & Clearance Banner */}
        <div className="p-6 bg-[#090d15] border border-[#1d293d] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-8 font-mono">
            <div>
              <span className="text-[8px] text-[#78889e] uppercase block">MISSION AIRTIME</span>
              <span className="text-xl font-bold text-[#f8fafc]">{state.airtimeHours} Flight Hours</span>
            </div>
            <div>
              <span className="text-[8px] text-[#78889e] uppercase block">CARBON FOOTPRINT</span>
              <span className="text-base font-bold text-[#10b981]">{state.carbonOffset}</span>
            </div>
            <div>
              <span className="text-[8px] text-[#78889e] uppercase block">PROJECTED INVESTMENT</span>
              <span className="text-2xl font-serif font-bold text-[#d4af37]">
                ₹{(state.projectedInvestmentINR / 10000000).toFixed(2)} Cr{' '}
                <span className="text-xs font-sans text-[#78889e] font-normal">INR Total</span>
              </span>
            </div>
          </div>

          <button
            onClick={openClearance}
            className="w-full md:w-auto px-8 py-4 bg-[#d4af37] hover:bg-[#b8952b] text-black font-extrabold text-xs tracking-widest rounded-xl transition cursor-pointer active:scale-95 uppercase flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(212,175,55,0.35)]"
          >
            <span>🛡 REQUEST FLIGHT CLEARANCE & RESERVE TAIL</span>
          </button>
        </div>
      </div>
    </section>
  );
}