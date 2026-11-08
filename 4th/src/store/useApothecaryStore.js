import { create } from 'zustand';

export const useApothecaryStore = create((set) => ({
  bagItems: [
    { id: 'bot-1', name: 'Nagano Applewood & Hinoki Infusion', priceINR: 6500, qty: 1 },
    { id: 'bot-2', name: 'Volcanic Basalt Mineral Soak Salts', priceINR: 4800, qty: 1 },
  ],
  isBagOpen: false,
  toggleBag: () => set((state) => ({ isBagOpen: !state.isBagOpen })),
  addToBag: (item) =>
    set((state) => {
      const exists = state.bagItems.find((i) => i.name === item.name);
      if (exists) {
        return {
          bagItems: state.bagItems.map((i) =>
            i.name === item.name ? { ...i, qty: i.qty + 1 } : i
          ),
          isBagOpen: true,
        };
      }
      return {
        bagItems: [...state.bagItems, { ...item, id: `bot-${Date.now()}`, qty: 1 }],
        isBagOpen: true,
      };
    }),
  removeFromBag: (name) =>
    set((state) => ({
      bagItems: state.bagItems.filter((i) => i.name !== name),
    })),
}));