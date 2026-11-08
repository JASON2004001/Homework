// Clean Redux-style action types & reducer
export const INITIAL_RESERVATION_STATE = {
  evening: 'Tonight, Oct 24 (19:30)',
  salon: 'Main Atrium Salon',
  guests: '2 Guests (Tasting Table)',
  isModalOpen: false,
  confirmedBooking: null,
};

export const RESERVATION_ACTIONS = {
  SET_FIELD: 'reservation/setField',
  OPEN_MODAL: 'reservation/openModal',
  CLOSE_MODAL: 'reservation/closeModal',
  CONFIRM_BOOKING: 'reservation/confirmBooking',
};

export function reservationReducer(state, action) {
  switch (action.type) {
    case RESERVATION_ACTIONS.SET_FIELD:
      return { ...state, [action.payload.field]: action.payload.value };
    case RESERVATION_ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case RESERVATION_ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case RESERVATION_ACTIONS.CONFIRM_BOOKING:
      return {
        ...state,
        confirmedBooking: {
          code: `AUR-${Math.floor(100000 + Math.random() * 900000)}`,
          date: state.evening,
          salon: state.salon,
          guests: state.guests,
        },
        isModalOpen: false,
      };
    default:
      return state;
  }
}
