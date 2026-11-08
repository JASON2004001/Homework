import React from 'react';
import { useApothecaryStore } from '../store/useApothecaryStore';

export default function BotanicalBagDrawer() {
  const { bagItems, isBagOpen, toggleBag, removeFromBag } = useApothecaryStore();

  if (!isBagOpen) return null;

  const totalUSD = bagItems.reduce((acc, curr) => acc + curr.priceUSD * curr.qty, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#121214] border-l border-[#242327] h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-[#ececee]">
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-[#212024] mb-6">
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#b3906e] font-bold uppercase block">
                APOTHECARY DISPATCH
              </span>
              <h3 className="text-xl font-serif font-bold text-[#f4efe8]">
                Your Botanical Bag
              </h3>
            </div>
            <button onClick={toggleBag} className="text-lg text-[#858380] hover:text-white">
              ✕
            </button>
          </div>

          {bagItems.length === 0 ? (
            <div className="py-16 text-center text-xs text-[#73716e]">
              No holistic infusions or ritual appointments selected yet.
            </div>
          ) : (
            <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
              {bagItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-[#18171b] border border-[#242327] rounded-xl flex items-center justify-between text-xs"
                >
                  <div>
                    <h4 className="font-serif font-bold text-[#f4efe8]">{item.title}</h4>
                    <span className="text-[#b3906e] font-mono text-[11px]">
                      ${item.priceUSD} × {item.qty}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromBag(item.title)}
                    className="text-[10px] text-red-400 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-[#212024] space-y-4">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-[#858380]">Ritual Total:</span>
            <span className="text-[#b3906e] font-bold text-base">${totalUSD}</span>
          </div>
          <button
            onClick={() => {
              alert("Botanical order transmitted to Onsen Herbalist dispensary.");
              toggleBag();
            }}
            className="w-full py-3.5 bg-[#b3906e] hover:bg-[#9d7d5d] text-[#0c0c0d] font-extrabold text-xs tracking-widest rounded transition uppercase cursor-pointer"
          >
            DISPATCH TO RESIDENCY DISPENSARY →
          </button>
        </div>
      </div>
    </div>
  );
}