export const INITIAL_CUSTOMIZER_STATE = {
  caseMaterial: 'Platinum 950',
  dialArtistry: 'Grand Feu Enamel',
  leatherMount: 'Matte Black Alligator',
  leadTimeWeeks: 16,
  basePriceCHF: 148000,
  engraving: '',
  isConfigModalOpen: false,
};

export const CUSTOMIZER_ACTIONS = {
  SET_CASE: 'customizer/setCase',
  SET_DIAL: 'customizer/setDial',
  SET_STRAP: 'customizer/setStrap',
  SET_ENGRAVING: 'customizer/setEngraving',
};

const ALLOY_PRICES = {
  'Platinum 950': 148000,
  '18K Rose Gold (5N)': 136000,
  'Obsidian Forged Carbon': 154000,
  '18K White Gold': 139000,
};

const DIAL_SURCHARGES = {
  'Grand Feu Enamel': 0,
  'Slate Skeleton': 12000,
  'Sunburst Champagne': 4500,
  'Aventurine Starlight': 18000,
};

export function customizerReducer(state, action) {
  switch (action.type) {
    case CUSTOMIZER_ACTIONS.SET_CASE: {
      const newCase = action.payload;
      const base = ALLOY_PRICES[newCase] || 148000;
      const dialExtra = DIAL_SURCHARGES[state.dialArtistry] || 0;
      return {
        ...state,
        caseMaterial: newCase,
        basePriceCHF: base + dialExtra,
      };
    }
    case CUSTOMIZER_ACTIONS.SET_DIAL: {
      const newDial = action.payload;
      const base = ALLOY_PRICES[state.caseMaterial] || 148000;
      const dialExtra = DIAL_SURCHARGES[newDial] || 0;
      return {
        ...state,
        dialArtistry: newDial,
        basePriceCHF: base + dialExtra,
        leadTimeWeeks: newDial === 'Aventurine Starlight' ? 20 : 16,
      };
    }
    case CUSTOMIZER_ACTIONS.SET_STRAP:
      return {
        ...state,
        leatherMount: action.payload,
      };
    case CUSTOMIZER_ACTIONS.SET_ENGRAVING:
      return {
        ...state,
        engraving: action.payload,
      };
    default:
      return state;
  }
}