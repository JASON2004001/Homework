import { create } from 'zustand';

export const useVaultStore = create((set) => ({
  vaultItems: [
    {
      id: 'item-1',
      title: 'Chrono-Sphère I Tourbillon Volant',
      ref: 'REF. CHR-880-PT',
      priceCHF: 185000,
      depositCHF: 37000,
    },
    {
      id: 'item-2',
      title: 'Astronomia Nocturne',
      ref: 'REF. CHR-742-RG',
      priceCHF: 220000,
      depositCHF: 44000,
    },
  ],
  isVaultOpen: false,
  toggleVault: () => set((state) => ({ isVaultOpen: !state.isVaultOpen })),
  addToVault: (piece) =>
    set((state) => {
      const exists = state.vaultItems.find((i) => i.ref === piece.ref);
      if (exists) return { isVaultOpen: true };
      const deposit = Math.round(piece.priceCHF * 0.2);
      return {
        vaultItems: [...state.vaultItems, { ...piece, depositCHF: deposit }],
        isVaultOpen: true,
      };
    }),
  removeFromVault: (ref) =>
    set((state) => ({
      vaultItems: state.vaultItems.filter((i) => i.ref !== ref),
    })),
}));