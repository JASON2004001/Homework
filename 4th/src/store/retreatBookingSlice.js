export const INITIAL_BOOKING_STATE = {
  activePavilion: 'The Hinoki Cedar Pavilion',
  selectedFilter: 'ALL RESIDENCES (4)',
  lunarAlignment: 'Optimal',
  isModalOpen: false,
  confirmedBooking: null,
};

export const BOOKING_ACTIONS = {
  SET_PAVILION: 'booking/setPavilion',
  SET_FILTER: 'booking/setFilter',
  OPEN_MODAL: 'booking/openModal',
  CLOSE_MODAL: 'booking/closeModal',
  CONFIRM_BOOKING: 'booking/confirmBooking',
};

export function retreatBookingReducer(state, action) {
  switch (action.type) {
    case BOOKING_ACTIONS.SET_PAVILION:
      return { ...state, activePavilion: action.payload };
    case BOOKING_ACTIONS.SET_FILTER:
      return { ...state, selectedFilter: action.payload };
    case BOOKING_ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case BOOKING_ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case BOOKING_ACTIONS.CONFIRM_BOOKING:
      return {
        ...state,
        isModalOpen: false,
        confirmedBooking: {
          reference: `ELY-IN-${Math.floor(100000 + Math.random() * 900000)}`,
          pavilion: state.activePavilion,
          arrivalDate: 'Next New Moon: Dec 30',
        },
      };
    default:
      return state;
  }
}