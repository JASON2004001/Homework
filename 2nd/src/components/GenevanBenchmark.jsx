import React from 'react';

export default function GenevanBenchmark() {
  const pillars = [
    {
      num: 'PILLAR I',
      stat: '320+',
      label: 'Hours Hand-Finishing',
      desc: 'Every bridge bevel is executed with natural boxwood peg sticks and diamond pastes under 40x optical microscope magnification.',
      icon: '⏳',
    },
    {
      num: 'PILLAR II',
      stat: '100%',
      label: 'Anglage & Côtes de Genève',
      desc: 'Strict compliance with the Geneva Seal guidelines: internal angles carved to razor points, zero stamping, hand-drawn flank brushing.',
      icon: '🛡',
    },
    {
      num: 'PILLAR III',
      stat: '12 pcs',
      label: 'Independent Manufacture',
      desc: 'Free from conglomerate pressures. Annual production capped strictly at twelve calibres to protect absolute exclusivity and integrity.',
      icon: '🏛',
    },
    {
      num: 'PILLAR IV',
      stat: 'Centuries',
      label: 'Lifetime Heritage Archive',
      desc: 'Each serial record is scribed into parchment ledger archives in Geneva, with perpetual fabrication rights for bespoke replacement parts.',
      icon: '📜',
    },
  ];

  return (
    <section id="calibres" className="py-16 px-6 lg:px-14 bg-[#0a0a0c] text-[#ececee] border-t border-[#1c1c24]">
      <div className="mb-10">
        <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block mb-1">
          UNCOMPROMISING DISCIPLINE
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fbfbfd]">
          The Genevan Benchmark
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <div
            key={p.num}
            className="bg-[#121216] border border-[#24242e] rounded-3xl p-6 flex flex-col justify-between hover:border-[#d4af37]/40 transition group"
          >
            <div>
              <div className="flex justify-between items-center text-xs text-[#70707c] font-bold mb-4">
                <span>{p.num}</span>
                <span className="text-lg text-[#d4af37]">{p.icon}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#d4af37] mb-1">
                {p.stat}
              </div>
              <h3 className="text-sm font-serif font-bold text-[#f5f5f7] mb-3">
                {p.label}
              </h3>
              <p className="text-xs text-[#8a8a96] font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-[#d4af37]/60 to-transparent mt-6"></div>
          </div>
        ))}
      </div>
    </section>
  );
}