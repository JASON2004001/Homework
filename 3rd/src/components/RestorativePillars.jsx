import React from 'react';

export default function RestorativePillars() {
  const pillars = [
    {
      num: 'PILLAR I',
      tempTag: '41.4°C Hydrothermal',
      title: 'The Rotenburo Immersion',
      desc: 'Pure mineral hot springs flowing directly from subterranean volcanic aquifers over ancient volcanic basalt stone, shaded beneath whispering pine and hinoki cedar canopies.',
      footerTag: 'Continuous Flow Well',
      icon: '♨️',
    },
    {
      num: 'PILLAR II',
      tempTag: '88.0°C Dry Heat',
      title: 'Smoke & Hinoki Sauna',
      desc: 'Nordic wood-fired thermotherapy infused with alpine wild rosemary, eucalyptus resin, and slow-harvested birch branches for rhythmic löyly steam rituals.',
      footerTag: 'Aromatherapy Infused',
      icon: '🪵',
    },
    {
      num: 'PILLAR III',
      tempTag: '9.2°C Sub-Alpine Melt',
      title: 'Glacial Plunge & Cold Mist',
      desc: 'Sub-alpine contrast therapy drawing crystal mountain run-off. Stimulates micro-circulation, triggers deep dopamine release, and resets the central nervous system.',
      footerTag: 'Vascular Rejuvenation',
      icon: '❄️',
    },
  ];

  return (
    <section id="pillars" className="py-16 px-6 lg:px-14 bg-[#0c0c0d] text-[#ececee]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-4">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#b3906e] font-semibold uppercase block mb-1">
            THERMODYNAMIC PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f4efe8]">
            The Three Pillars of Restorative Bathing
          </h2>
        </div>
        <p className="text-xs text-[#858380] max-w-md font-light leading-relaxed">
          A seamless dialogue between centuries-old Onsen craftsmanship and Nordic contrast thermal traditions, designed to quiet the nervous system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <div
            key={p.num}
            className="bg-[#141416] border border-[#242327] rounded-3xl overflow-hidden p-6 flex flex-col justify-between hover:border-[#b3906e]/50 transition group"
          >
            <div>
              {/* CSS Texture Canvas matching the image placeholders */}
              <div className="relative h-56 rounded-2xl bg-radial from-[#24211e] via-[#161517] to-[#0c0c0d] border border-[#212023] mb-5 flex flex-col items-center justify-center">
                <span className="text-4xl block opacity-60 mb-2">{p.icon}</span>
                <span className="text-[8px] tracking-[0.25em] text-[#b3906e] font-serif uppercase">
                  {p.title}
                </span>

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#2b2a2e] text-[8px] tracking-[0.2em] text-[#f4efe8] px-2.5 py-1 rounded uppercase font-bold">
                  {p.tempTag}
                </div>
              </div>

              <div className="text-[10px] tracking-[0.2em] text-[#73716e] uppercase font-bold mb-1">
                {p.num}
              </div>
              <h3 className="text-xl font-serif font-bold text-[#f4efe8] mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-[#858380] font-light leading-relaxed">
                {p.desc}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-[#1f1e22] text-[9px] tracking-[0.2em] text-[#b3906e] uppercase font-bold">
              {p.footerTag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}