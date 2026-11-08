import { create } from 'zustand';

export const useCateringStore = create((set) => ({
  galaItems: [
    {
      id: 'cat-1',
      title: 'Imperial Beluga 50g with Warm Blinis',
      priceINR: 185000,
      qty: 1,
    },
    {
      id: 'cat-2',
      title: 'Dom Pérignon Vintage 2013 Cellared Reserve',
      priceINR: 240000,
      qty: 2,
    },
  ],
  isDrawerOpen: false,
  toggleDrawer: () => set((s) => ({ isDrawerOpen: !s.isDrawerOpen })),
  addGalaItem: (item) =>
    set((s) => {
      const exists = s.galaItems.find((i) => i.title === item.title);
      if (exists) {
        return {
          galaItems: s.galaItems.map((i) =>
            i.title === item.title ? { ...i, qty: i.qty + 1 } : i
          ),
          isDrawerOpen: true,
        };
      }
      return {
        galaItems: [...s.galaItems, { ...item, id: `gala-${Date.now()}`, qty: 1 }],
        isDrawerOpen: true,
      };
    }),
  removeGalaItem: (title) =>
    set((s) => ({
      galaItems: s.galaItems.filter((i) => i.title !== title),
    })),
}));