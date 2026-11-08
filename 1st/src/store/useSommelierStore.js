import { create } from 'zustand';

export const useSommelierStore = create((set) => ({
  pairingsBag: [
    { id: 'w1', name: '2018 Domaine Leflaive Puligny', price: 95, qty: 1 }
  ],
  isDrawerOpen: false,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  addPairing: (pairing) => set((state) => {
    const existing = state.pairingsBag.find((item) => item.name === pairing.name);
    if (existing) {
      return {
        pairingsBag: state.pairingsBag.map((item) =>
          item.name === pairing.name ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    }
    return {
      pairingsBag: [...state.pairingsBag, { id: Date.now().toString(), ...pairing, qty: 1 }],
      isDrawerOpen: true,
    };
  }),
  removePairing: (name) => set((state) => ({
    pairingsBag: state.pairingsBag.filter((item) => item.name !== name),
  })),
}));