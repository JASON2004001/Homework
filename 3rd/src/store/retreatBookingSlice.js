export const INITIAL_BOOKING_STATE = {
  activePavilion: 'PRIVATE ONSEN VILLA',
  dates: 'Nov 14 – Nov 18, 2025',
  lunarPhase: 'Waxing Crescent • Meditative Moon',
  immersion: 'Geothermal + Daily Tisane Ritual',
  occupancy: '2 Guests • Rotenburo Bath',
  isModalOpen: false,
  confirmedBooking: null,
};

export const BOOKING_ACTIONS = {
  SET_PAVILION: 'booking/setPavilion',
  SET_FIELD: 'booking/setField',
  OPEN_MODAL: 'booking/openModal',
  CLOSE_MODAL: 'booking/closeModal',
  CONFIRM: 'booking/confirm',
};

export function retreatBookingReducer(state, action) {
  switch (action.type) {
    case BOOKING_ACTIONS.SET_PAVILION:
      return { ...state, activePavilion: action.payload };
    case BOOKING_ACTIONS.SET_FIELD:
      return { ...state, [action.payload.field]: action.payload.value };
    case BOOKING_ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case BOOKING_ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case BOOKING_ACTIONS.CONFIRM:
      return {
        ...state,
        isModalOpen: false,
        confirmedBooking: {
          code: `ELY-${Math.floor(100000 + Math.random() * 900000)}`,
          pavilion: state.activePavilion,
          dates: state.dates,
          guests: state.occupancy,
        },
      };
    default:
      return state;
  }
}