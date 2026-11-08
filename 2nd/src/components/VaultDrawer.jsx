import React from 'react';
import { useVaultStore } from '../store/useVaultStore';
import { useCollector } from '../context/CollectorContext';

export default function VaultDrawer() {
  const { vaultItems, isVaultOpen, toggleVault, removeFromVault } = useVaultStore();
  const { openProtocol } = useCollector();

  if (!isVaultOpen) return null;

  const totalCHF = vaultItems.reduce((acc, item) => acc + item.priceCHF, 0);
  const totalDeposit = vaultItems.reduce((acc, item) => acc + (item.depositCHF || Math.round(item.priceCHF * 0.2)), 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#111116] border-l border-[#24242e] h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-[#ececee]">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-[#202028] mb-6">
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#d4af37] font-bold uppercase block">
                HAUTE CUSTODY
              </span>
              <h3 className="text-xl font-serif font-bold text-[#fbfbfd]">
                Collector's Vault
              </h3>
            </div>
            <button onClick={toggleVault} className="text-lg text-[#8c8c9a] hover:text-white">
              ✕
            </button>
          </div>

          {/* List of Vault Pieces */}
          {vaultItems.length === 0 ? (
            <div className="py-16 text-center text-xs text-[#70707e]">
              Your vault is currently empty. Examine Masterpieces to request allocation.
            </div>
          ) : (
            <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
              {vaultItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-[#17171e] border border-[#262632] rounded-2xl flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-[8px] font-mono text-[#d4af37] uppercase">{item.ref}</span>
                    <h4 className="text-xs font-serif font-bold text-[#f5f5f7]">{item.title}</h4>
                    <p className="text-[10px] text-[#8c8c9a] mt-0.5">
                      CHF {item.priceCHF.toLocaleString()} • Deposit: CHF {(item.depositCHF || Math.round(item.priceCHF * 0.2)).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromVault(item.ref)}
                    className="text-[10px] text-red-400 hover:underline"
                  >
                    Release
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Subtotals & Pre-qualification */}
        <div className="pt-6 border-t border-[#202028] space-y-4">
          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-[#8c8c9a]">
              <span>Vault Valuation:</span>
              <span className="text-[#ececee]">CHF {totalCHF.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[#d4af37] font-bold">
              <span>Required Reservation Deposit:</span>
              <span>CHF {totalDeposit.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={() => {
              toggleVault();
              openProtocol();
            }}
            className="w-full py-3.5 bg-[#d4af37] hover:bg-[#bfa030] text-black font-extrabold text-xs tracking-widest rounded shadow-lg transition uppercase cursor-pointer"
          >
            TRANSMIT TO ALLOCATION BOARD →
          </button>
        </div>
      </div>
    </div>
  );
}