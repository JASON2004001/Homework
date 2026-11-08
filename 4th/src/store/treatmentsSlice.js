export const INITIAL_TREATMENTS_STATE = {
  residences: [
    {
      id: 'res-1',
      name: 'The Hinoki Cedar Pavilion',
      footprint: '240 m²',
      thermalFeatures: 'Solid Cedar Bath + Sunken Basin',
      hearth: 'Basalt Open Hearth',
      capacity: '2–4 Guests',
      priceINR: 120000,
      category: 'FOREST IMMERSION',
    },
    {
      id: 'res-2',
      name: 'Fjell Pine Sanctum',
      footprint: '310 m²',
      thermalFeatures: 'Dual Springs + Savu Birch Sauna',
      hearth: 'Triple-Faced Nordic Hearth',
      capacity: '2–6 Guests',
      priceINR: 165000,
      category: 'CLIFFSIDE CANTILEVER',
    },
    {
      id: 'res-3',
      name: 'Basalt Onsen Suite',
      footprint: '140 m²',
      thermalFeatures: 'Sunken Quarried Stone Rotenburo',
      hearth: 'Geothermal Radiative Slab',
      capacity: '2 Guests',
      priceINR: 82000,
      category: 'ONSEN-CENTRIC',
    },
    {
      id: 'res-4',
      name: 'Komorebi Forest Villa',
      footprint: '185 m²',
      thermalFeatures: 'Canopy Open Deck Stone Tub',
      hearth: 'Hinoki Wood Pellet Stove',
      capacity: '2–3 Guests',
      priceINR: 95000,
      category: 'MULTI-CHAMBER COMPOUND',
    },
  ],
};

export const TREATMENTS_ACTIONS = {
  SORT_BY_RATE: 'treatments/sortByRate',
};

export function treatmentsReducer(state, action) {
  switch (action.type) {
    case TREATMENTS_ACTIONS.SORT_BY_RATE:
      return {
        ...state,
        residences: [...state.residences].sort((a, b) => b.priceINR - a.priceINR),
      };
    default:
      return state;
  }
}