export const INITIAL_MENU_STATE = {
  activeCategory: 'ALL',
  dishes: [
    {
      id: 'd1',
      tag: 'OCEAN COURSE',
      title: 'Wild Brittany Turbot',
      price: 68,
      desc: 'Steamed over Jura Vin Jaune, braised baby leek nectar, white truffle dashi, and crisp sea purslane.',
      pairing: '2020 MEURSAULT CLOS DE LA BARRE',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80',
    },
    {
      id: 'd2',
      tag: 'RAW BAR OPUS',
      title: 'Hokkaido Uni & Royal Oscietra',
      price: 85,
      desc: 'Charred milk brioche, cured egg yolk snow, mountain sansho pepper oil, and reserve Ossetra pearls.',
      pairing: 'KRUG GRANDE CUVÉE 170TH ED.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    },
    {
      id: 'd3',
      tag: 'PASTRY FINALE',
      title: 'Caramelized Mission Fig Tart',
      price: 34,
      desc: 'Laminated feuilletine crust, smoked Tahitian vanilla bean gelato, and reduced pine honey gastrique.',
      pairing: "1998 CHÂTEAU D'YQUEM SAUTERNES",
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',
    },
  ],
};

export const MENU_ACTIONS = {
  SET_CATEGORY: 'menu/setCategory',
};

export function menuReducer(state, action) {
  switch (action.type) {
    case MENU_ACTIONS.SET_CATEGORY:
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
}