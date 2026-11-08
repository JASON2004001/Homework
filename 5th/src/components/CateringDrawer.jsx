import React from 'react';
import { useCateringStore } from '../store/useCateringStore';

export default function CateringDrawer() {
  const { galaItems, isDrawerOpen, toggleDrawer, removeGalaItem } = useCateringStore();

  if (!isDrawerOpen) return null;

  const totalINR = galaItems.reduce((acc, curr) => acc + curr.priceINR * curr.qty, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end text-[#ececee]">
      <div className="w-full max-w-md bg-[#0a0f17] border-l border-[#1d293d] h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-[#172233] mb-6">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37] font-bold uppercase block">
                IN-FLIGHT GALA CURATION
              </span>
              <h3 className="text-xl font-serif font-bold text-[#f8fafc]">
                Sommelier & Haute Dining Bag
              </h3>
            </div>
            <button onClick={toggleDrawer} className="text-lg text-[#8292a8] hover:text-white cursor-pointer">
              ✕
            </button>
          </div>

          {galaItems.length === 0 ? (
            <div className="py-16 text-center text-xs text-[#78889e] font-mono">
              No bespoke vintages or caviar pairings added to mission.
            </div>
          ) : (
            <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1 font-mono">
              {galaItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-[#0f1624] border border-[#1e2a3d] rounded-xl flex items-center justify-between text-xs"
                >
                  <div>
                    <h4 className="font-serif font-bold text-[#f8fafc]">{item.title}</h4>
                    <span className="text-[#d4af37] text-[11px]">
                      ₹{(item.priceINR / 1000).toLocaleString('en-IN')}k × {item.qty}
                    </span>
                  </div>
                  <button
                    onClick={() => removeGalaItem(item.title)}
                    className="text-[10px] text-red-400 hover:underline cursor-pointer"
                  >
                    Release
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-[#172233] space-y-4">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-[#8292a8]">Gala Investment:</span>
            <span className="text-[#d4af37] font-bold text-base">₹{totalINR.toLocaleString('en-IN')}</span>
          </div>
          <button
            onClick={() => {
              alert("In-Flight Gala manifest sent to private FBO flight kitchen.");
              toggleDrawer();
            }}
            className="w-full py-3.5 bg-[#d4af37] hover:bg-[#b8952b] text-black font-extrabold text-xs tracking-widest rounded-xl transition uppercase cursor-pointer"
          >
            DISPATCH CATERING MANIFEST →
          </button>
        </div>
      </div>
    </div>
  );
}