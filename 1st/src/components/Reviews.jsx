import React from 'react';

export default function Reviews() {
  const reviews = [
    {
      text: '“We celebrated our 15th wedding anniversary at the Hearth Counter. The progression from the sea urchin brioche to the aged wagyu was breathtaking. The wine pairings were completely unexpected yet brilliant.”',
      author: 'Eleanor Vance',
      tag: 'Verified Diner • September 2024',
      initial: 'E',
    },
    {
      text: '“The level of discretion and acoustic comfort in the Salon is second to none in Manhattan. Hosted our executive board dinner here; our guests from Tokyo and London were utterly captivated.”',
      author: 'Marcus Sterling',
      tag: 'Private Salon Host • October 2024',
      initial: 'M',
    },
    {
      text: '“The Zero-Proof beverage pairing deserves its own Michelin star. Complex infusions and house-fermented teas that matched the culinary nuance at every single course. Pure craftsmanship.”',
      author: 'Sophia Chen',
      tag: 'Sommelier & Gastronome • August 2024',
      initial: 'S',
    },
  ];

  return (
    <section id="reviews" className="py-16 px-6 lg:px-14 bg-[#0c0b0a] text-[#f5ebd9]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-[#151310] border border-[#262019] rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-md"
          >
            <div>
              <div className="text-[#f59e0b] text-sm tracking-widest mb-3">
                ★★★★★
              </div>
              <p className="text-xs text-[#a39785] font-light leading-relaxed italic">
                {r.text}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[#1f1b16]">
              <div className="w-10 h-10 rounded-full bg-[#262019] text-[#f59e0b] font-serif font-bold flex items-center justify-center">
                {r.initial}
              </div>
              <div>
                <div className="text-xs font-serif font-bold text-[#fbf7f0]">
                  {r.author}
                </div>
                <div className="text-[10px] text-[#786e60] font-light">
                  {r.tag}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}