export const INITIAL_CHARTER_STATE = {
  activeTab: 'MULTI-LEG ITINERARY',
  legs: [
    {
      id: 'leg-1',
      num: '01',
      origin: 'New Delhi (VIDP)',
      destination: 'London (EGLF)',
      subtext: 'Indira Gandhi VIP Terminal → TAG Farnborough VIP',
      departure: 'OCT 24 • 15:30 IST',
      passengers: '6 Principals',
      status: 'SLOT ALLOCATED',
    },
    {
      id: 'leg-2',
      num: '02',
      origin: 'London (EGLF)',
      destination: 'Geneva (LSGG)',
      subtext: 'TAG Farnborough → Geneva Cointrin Private Terminal',
      departure: 'OCT 27 • 11:00 GMT',
      passengers: '4 Principals',
      status: 'SLOT ALLOCATED',
    },
    {
      id: 'leg-3',
      num: '03',
      origin: 'Geneva (LSGG)',
      destination: 'Dubai (OMDW)',
      subtext: 'Cointrin General Aviation → Al Maktoum Jet Aviation VIP',
      departure: 'NOV 01 • 18:00 CET',
      passengers: '6 Principals',
      status: 'SLOT ALLOCATED',
    },
  ],
  protocols: {
    deIcing: true,
    securityDetail: true,
    petInCabin: false,
    armoredTransit: true,
  },
  airtimeHours: 14.8,
  carbonOffset: '100% SAF Offset',
  projectedInvestmentINR: 15400000, // ₹1.54 Crore for sovereign multi-leg charter
};

export const CHARTER_ACTIONS = {
  SET_TAB: 'charter/setTab',
  ADD_LEG: 'charter/addLeg',
  TOGGLE_PROTOCOL: 'charter/toggleProtocol',
};

export function charterFlightReducer(state, action) {
  switch (action.type) {
    case CHARTER_ACTIONS.SET_TAB:
      return { ...state, activeTab: action.payload };
    case CHARTER_ACTIONS.TOGGLE_PROTOCOL:
      return {
        ...state,
        protocols: {
          ...state.protocols,
          [action.payload]: !state.protocols[action.payload],
        },
      };
    case CHARTER_ACTIONS.ADD_LEG: {
      const nextNum = state.legs.length + 1;
      const formattedNum = nextNum < 10 ? `0${nextNum}` : `${nextNum}`;
      const newLeg = {
        id: `leg-${Date.now()}`,
        num: formattedNum,
        origin: 'Dubai (OMDW)',
        destination: 'Mumbai (VABB)',
        subtext: 'Al Maktoum VIP → Mumbai Kalina General Aviation Terminal',
        departure: 'NOV 05 • 14:00 GST',
        passengers: '4 Principals',
        status: 'SLOT ALLOCATED',
      };
      return {
        ...state,
        legs: [...state.legs, newLeg],
        airtimeHours: Number((state.airtimeHours + 3.5).toFixed(1)),
        projectedInvestmentINR: state.projectedInvestmentINR + 3500000,
      };
    }
    default:
      return state;
  }
}