import { create } from 'zustand';

export const useApothecaryStore = create((set) => ({
  bagItems: [
    {
      id: 'b1',
      title: 'Komorebi Herbal Steam Infusion',
      priceUSD: 320,
      qty: 1,
    },
    {
      id: 'b2',
      title: 'Hinoki Cedar Silk Essence',
      priceUSD: 380,
      qty: 1,
    },
  ],
  isBagOpen: false,
  toggleBag: () => set((state) => ({ isBagOpen: !state.isBagOpen })),
  addToBag: (ritual) =>
    set((state) => {
      const existing = state.bagItems.find((item) => item.title === ritual.title);
      if (existing) {
        return {
          bagItems: state.bagItems.map((item) =>
            item.title === ritual.title ? { ...item, qty: item.qty + 1 } : item
          ),
          isBagOpen: true,
        };
      }
      return {
        bagItems: [
          ...state.bagItems,
          { id: `bag-${Date.now()}`, title: ritual.title, priceUSD: ritual.priceUSD, qty: 1 },
        ],
        isBagOpen: true,
      };
    }),
  removeFromBag: (title) =>
    set((state) => ({
      bagItems: state.bagItems.filter((item) => item.title !== title),
    })),
}));