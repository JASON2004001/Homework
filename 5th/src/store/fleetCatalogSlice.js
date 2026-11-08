export const INITIAL_FLEET_STATE = {
  activeCategory: 'ALL SOVEREIGN FLEET',
  jets: [
    {
      id: 'g700',
      name: 'Gulfstream G700',
      rateINR: 1180000, // ₹11.8 Lakhs / hr
      category: 'ALL SOVEREIGN FLEET',
      subCategoryBadge: 'FLAGSHIP ULTRA-LONG RANGE',
      dispatchBadge: 'READY FOR DISPATCH',
      desc: 'Master stateroom with en-suite shower, circadian circadian lighting engine, and whisper-quiet cabin decibel ratings under 45 dBA.',
      range: '7,750 NM',
      maxCruise: 'Mach 0.925',
      ceiling: '51,000 FT',
      payload: '19 Pax',
      baggage: '195 cu ft • Wi-Fi Ka-Band',
    },
    {
      id: 'global7500',
      name: 'Bombardier Global 7500',
      rateINR: 1150000, // ₹11.5 Lakhs / hr
      category: 'HEAVY LONG-RANGE (10-14 PAX)',
      subCategoryBadge: 'FOUR-ZONE ARCHITECTURE',
      dispatchBadge: 'IN REPOSITIONING',
      desc: 'Patented Nuage zero-gravity ergonomic seats, dedicated dining conference suite for six, and full principal stateroom suite.',
      range: '7,700 NM',
      maxCruise: 'Mach 0.90',
      ceiling: '51,000 FT',
      payload: '16 Pax',
      baggage: '195 cu ft • Nuage Cinema Suite',
    },
    {
      id: 'chal3500',
      name: 'Challenger 3500',
      rateINR: 740000, // ₹7.4 Lakhs / hr
      category: 'MIDSIZE CABIN (8-9 PAX)',
      subCategoryBadge: 'SUPER-MIDSIZE CATEGORY',
      dispatchBadge: 'STANDBY VIDP',
      desc: 'First-in-class voice-controlled cabin atmosphere, sound-dampened acoustic cabin, and lowest direct operating noise envelope.',
      range: '3,400 NM',
      maxCruise: 'Mach 0.83',
      ceiling: '45,000 FT',
      payload: '9 Pax',
      baggage: '106 cu ft • Voice Cabin Control',
    },
    {
      id: 'pc24',
      name: 'Pilatus PC-24 Super Versatile',
      rateINR: 450000, // ₹4.5 Lakhs / hr
      category: 'LIGHT JETS (4-7 PAX)',
      subCategoryBadge: 'SHORT-FIELD CAPABILITY',
      dispatchBadge: 'ALPINE CLEARANCE',
      desc: 'Unpaved and short-strip certified. Direct access to high-altitude ski fields and remote private airfields without transfers.',
      range: '2,000 NM',
      maxCruise: '440 KTAS',
      ceiling: '2,930 FT MIN RUNWAY',
      payload: '8 Pax',
      baggage: 'Cargo Door • Continuous In-Flight Baggage',
    },
  ],
};

export const FLEET_ACTIONS = {
  SET_CATEGORY: 'fleet/setCategory',
};

export function fleetCatalogReducer(state, action) {
  switch (action.type) {
    case FLEET_ACTIONS.SET_CATEGORY:
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
}