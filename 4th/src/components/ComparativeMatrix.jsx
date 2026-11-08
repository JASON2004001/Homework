import React from 'react';

export default function ComparativeMatrix({ state }) {
  return (
    <section id="matrix" className="py-14 px-6 lg:px-14 bg-[#0d0d0e] text-[#ececee] border-b border-[#1c1c1f]">
      <div className="bg-[#141416] border border-[#242428] rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 border-b border-[#212124] mb-6 gap-2">
          <div>
            <span className="text-[9px] tracking-[0.25em] text-[#dfba91] font-mono uppercase block mb-1">
              ARCHITECTURAL DIMENSION STUDY
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#f7f4ee]">
              Comparative Residence Matrix
            </h2>
          </div>
          <span className="text-[9px] tracking-[0.2em] text-[#78756d] uppercase font-mono">
            ALL PAVILIONS EQUIPPED WITH UNFILTERED 100% GENSEN WELL WATER
          </span>
        </div>

        {/* Responsive Table matching Screenshot 6 */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="text-[9px] tracking-[0.2em] text-[#78756d] uppercase border-b border-[#1f1f22]">
                <th className="pb-4">SANCTUARY</th>
                <th className="pb-4">INTERIOR FOOTPRINT</th>
                <th className="pb-4">THERMAL FEATURES</th>
                <th className="pb-4">HEARTH & CLIMATE</th>
                <th className="pb-4">CAPACITY</th>
                <th className="pb-4 text-right">SOLAR RATE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1b1b1e]">
              {state.residences.map((r) => (
                <tr key={r.id} className="hover:bg-[#1a1a1e]/60 transition">
                  <td className="py-5 font-serif font-bold text-[#f7f4ee] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfba91]"></span>
                    <span>{r.name}</span>
                  </td>
                  <td className="py-5 font-mono text-[#8e8b82]">{r.footprint}</td>
                  <td className="py-5 text-[#9a958a]">{r.thermalFeatures}</td>
                  <td className="py-5 text-[#8e8b82]">{r.hearth}</td>
                  <td className="py-5 font-mono text-[#8e8b82]">{r.capacity}</td>
                  <td className="py-5 font-serif font-bold text-[#dfba91] text-right">
                    ₹{r.priceINR.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}