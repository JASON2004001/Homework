export const INITIAL_TREATMENTS_STATE = {
  activeCategory: 'ALL RITUALS',
  rituals: [
    {
      id: 'r1',
      title: 'Komorebi Herbal Steam',
      duration: '75 MIN SESSION',
      priceUSD: 320,
      desc: 'Steamed seasonal pine needles, tart yuzu rinds, and mountain sage combined with rhythmic meridian massage.',
      category: 'HERBAL STEAM & ONSEN',
      icon: '🌿',
    },
    {
      id: 'r2',
      title: 'Singing Quartz Sound Sanctuary',
      duration: '60 MIN SESSION',
      priceUSD: 260,
      desc: '432Hz acoustic frequency sound wave bath inside a subterranean basalt acoustic cave pool.',
      category: 'SOUND BATHS & RESONANCE',
      icon: '🪨',
    },
    {
      id: 'r3',
      title: 'Hinoki Cedar Silk Scrub & Soak',
      duration: '90 MIN SESSION',
      priceUSD: 380,
      desc: 'Fine volcanic ash exfoliation paired with custom 100% pure steam-distilled Hinoki oil bath immersion.',
      category: 'HOLISTIC BODYWORK',
      icon: '🪵',
    },
    {
      id: 'r4',
      title: 'Matcha & Reishi Alchemical Facial',
      duration: '75 MIN SESSION',
      priceUSD: 310,
      desc: 'Antioxidant-dense stone-ground Uji matcha treatment complemented with sculpted cooling jade gua sha work.',
      category: 'TEA ALCHEMY',
      icon: '🍵',
    },
  ],
};

export const TREATMENTS_ACTIONS = {
  SET_CATEGORY: 'treatments/setCategory',
};

export function treatmentsReducer(state, action) {
  switch (action.type) {
    case TREATMENTS_ACTIONS.SET_CATEGORY:
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
}