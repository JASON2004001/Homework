import React from 'react';
import { useSommelierStore } from '../store/useSommelierStore';

export default function MenuSection({ state }) {
  const addPairing = useSommelierStore((state) => state.addPairing);

  // Decorative icon per dish type for clean zero-asset styling
  const dishIcons = {
    d1: '🥟', // Ocean Course / Dumplings
    d2: '🥩', // Raw Bar Opus / Ribs
    d3: '🍹', // Pastry Finale / Cocktails
  };

  return (
    <section id="menu" className="py-16 px-6 lg:px-14 bg-[#0c0b0a] text-[#f5ebd9]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block mb-1">
            THE AUTUMN ANTHOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fbf7f0]">
            Ephemeral Compositions
          </h2>
        </div>
        <p className="text-xs text-[#9c9080] max-w-md font-light leading-relaxed">
          Every dish is conceived as a tactile sensory meditation, harvested
          within 40 leagues of Aurelia and finished over charred Japanese binchōtan coals.
        </p>
      </div>

      {/* 3 Menu Cards matching Screenshot 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {state.dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-[#151310] border border-[#29231c] rounded-3xl overflow-hidden hover:border-[#f59e0b]/50 transition flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Pure CSS Texture Canvas (Replaces missing images) */}
              <div className="relative h-56 w-full bg-radial from-[#241c14] via-[#16120e] to-[#0c0a08] flex items-center justify-center border-b border-[#24201c]">
                <div className="text-center space-y-1.5 opacity-40">
                  <span className="text-4xl block select-none">
                    {dishIcons[dish.id] || '✦'}
                  </span>
                  <span className="text-[8px] tracking-[0.25em] text-[#d4af37] uppercase font-serif block">
                    Aurelia Culinary Archive
                  </span>
                </div>

                {/* Top-Left Category Badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#2b251e] text-[8px] tracking-[0.25em] text-[#d4af37] px-2.5 py-0.5 rounded uppercase font-bold">
                  {dish.tag}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-serif font-bold text-[#fbf7f0] group-hover:text-[#f59e0b] transition">
                    {dish.title}
                  </h3>
                  <span className="text-lg font-serif font-bold text-[#f59e0b]">
                    ${dish.price}
                  </span>
                </div>
                <p className="text-xs text-[#8f8373] font-light leading-relaxed mb-4">
                  {dish.desc}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-[#1e1a15] flex items-center justify-between text-[10px] text-[#9c9080]">
              <span className="font-mono truncate max-w-[190px]">{dish.pairing}</span>
              <button
                onClick={() => addPairing({ name: dish.pairing, price: 45 })}
                className="text-[#d4af37] hover:text-[#f59e0b] font-bold underline cursor-pointer"
              >
                + Pair ($45)
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}