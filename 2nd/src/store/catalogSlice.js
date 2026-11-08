export const INITIAL_CATALOG_STATE = {
  activeFilter: 'ALL MASTERPIECES',
  timepieces: [
    {
      id: 'chr-880',
      editionBadge: 'EDITION 1 OF 5',
      allocationStatus: '1 PIECE REMAINING',
      ref: 'REF. CHR-880-PT',
      title: 'Chrono-Sphère I Tourbillon Volant',
      desc: 'Monolithic 42mm platinum housing with suspended three-dimensional balance bridge, Côtes de Genève.',
      dimensions: '42.0mm × 11.2mm',
      reserve: '72 Hours (Twin Barrels)',
      complication: '60s Flying Tourbillon',
      priceCHF: 185000,
      category: 'DOUBLE TOURBILLON',
      actionLabel: 'EXAMINE PROVENANCE →',
    },
    {
      id: 'chr-742',
      editionBadge: 'EDITION 3 OF 7',
      allocationStatus: 'RESERVED',
      ref: 'REF. CHR-742-RG',
      title: 'Astronomia Nocturne',
      desc: '18K Rose Gold case sheltering an authentic deep aventurine sky chart with sidereal time gear-train.',
      dimensions: '43.5mm × 12.8mm',
      reserve: '96 Hours Manual',
      complication: 'Sidereal Sky + Spherical Moon',
      priceCHF: 220000,
      category: 'ASTRONOMICAL CELESTIAL',
      actionLabel: 'WAITLIST REQUEST →',
    },
    {
      id: 'chr-519',
      editionBadge: 'EDITION 2 OF 12',
      allocationStatus: 'ALLOCATED',
      ref: 'REF. CHR-519-TI',
      title: 'Chronos Monopoussoir Skeleton',
      desc: 'Hand-beveled Grade 5 titanium bridges with an exposed horizontal clutch, instant-jump 30-minute display.',
      dimensions: '40.5mm × 10.9mm',
      reserve: '65 Hours Flyback',
      complication: 'Column-Wheel Monopusher',
      priceCHF: 135000,
      category: 'MINUTE REPEATER',
      actionLabel: 'ARCHIVE REGISTRY →',
    },
  ],
};

export const CATALOG_ACTIONS = {
  SET_FILTER: 'catalog/setFilter',
};

export function catalogReducer(state, action) {
  switch (action.type) {
    case CATALOG_ACTIONS.SET_FILTER:
      return { ...state, activeFilter: action.payload };
    default:
      return state;
  }
}