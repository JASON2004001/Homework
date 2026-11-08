import React from 'react';
import { useApothecaryStore } from '../store/useApothecaryStore';

export default function BotanicalBagDrawer() {
  const { bagItems, isBagOpen, toggleBag, removeFromBag } = useApothecaryStore();

  if (!isBagOpen) return null;

  const totalINR = bagItems.reduce((acc, curr) => acc + curr.priceINR * curr.qty, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end text-[#ececee]">
      <div className="w-full max-w-md bg-[#121214] border-l border-[#242428] h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-[#212124] mb-6">
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#dfba91] font-bold uppercase block">
                APOTHECARY DISPATCH
              </span>
              <h3 className="text-xl font-serif font-bold text-[#f7f4ee]">
                Your Botanical Bag
              </h3>
            </div>
            <button onClick={toggleBag} className="text-lg text-[#8e8b82] hover:text-white cursor-pointer">
              ✕
            </button>
          </div>

          {bagItems.length === 0 ? (
            <div className="py-16 text-center text-xs text-[#78756d]">
              No botanical essences or tea ceremony sets chosen.
            </div>
          ) : (
            <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
              {bagItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-[#18181c] border border-[#242428] rounded-xl flex items-center justify-between text-xs"
                >
                  <div>
                    <h4 className="font-serif font-bold text-[#f7f4ee]">{item.name}</h4>
                    <span className="text-[#dfba91] font-mono text-[11px]">
                      ₹{item.priceINR.toLocaleString('en-IN')} × {item.qty}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromBag(item.name)}
                    className="text-[10px] text-red-400 hover:underline cursor-pointer"
                  >
                    Release
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-[#212124] space-y-4">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-[#8e8b82]">Subtotal:</span>
            <span className="text-[#dfba91] font-bold text-base">₹{totalINR.toLocaleString('en-IN')}</span>
          </div>
          <button
            onClick={() => {
              alert("Botanical preparation order sent to the herbal apothecary.");
              toggleBag();
            }}
            className="w-full py-3.5 bg-[#dfba91] hover:bg-[#caa278] text-[#14120e] font-extrabold text-xs tracking-widest rounded-xl transition uppercase cursor-pointer"
          >
            DISPATCH BOTANICAL ORDER →
          </button>
        </div>
      </div>
    </div>
  );
}