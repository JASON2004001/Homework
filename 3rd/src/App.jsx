import React, { useReducer } from 'react';

// Context Providers (2 Context APIs)
import { SanctuaryTelemetryProvider } from './context/SanctuaryTelemetryContext';
import { PatronWellnessProvider } from './context/PatronWellnessContext';

// Redux Slices (2 Redux Slices)
import { retreatBookingReducer, INITIAL_BOOKING_STATE, BOOKING_ACTIONS } from './store/retreatBookingSlice';
import { treatmentsReducer, INITIAL_TREATMENTS_STATE } from './store/treatmentsSlice';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import RestorativePillars from './components/RestorativePillars';
import HolisticRituals from './components/HolisticRituals';
import PersonalizedJourney from './components/PersonalizedJourney';
import ArchitecturalQuote from './components/ArchitecturalQuote';
import BotanicalBagDrawer from './components/BotanicalBagDrawer';
import ReservationModal from './components/ReservationModal';
import Footer from './components/Footer';

export default function App() {
  // Redux 1: Sanctuary multi-day booking
  const [bookingState, bookingDispatch] = useReducer(
    retreatBookingReducer,
    INITIAL_BOOKING_STATE
  );

  // Redux 2: Holistic rituals and filters
  const [treatmentsState, treatmentsDispatch] = useReducer(
    treatmentsReducer,
    INITIAL_TREATMENTS_STATE
  );

  return (
    <SanctuaryTelemetryProvider>
      <PatronWellnessProvider>
        <div className="min-h-screen bg-[#0c0c0d] text-[#ececee] font-sans selection:bg-[#b3906e] selection:text-black">
          {/* Screenshot 1 */}
          <Header onReserveClick={() => bookingDispatch({ type: BOOKING_ACTIONS.OPEN_MODAL })} />

          <main>
            {/* Screenshot 2 */}
            <Hero onExploreClick={() => bookingDispatch({ type: BOOKING_ACTIONS.OPEN_MODAL })} />

            {/* Screenshot 3 */}
            <BookingBar state={bookingState} dispatch={bookingDispatch} />

            {/* Screenshot 4 */}
            <RestorativePillars />

            {/* Screenshot 5 */}
            <HolisticRituals state={treatmentsState} dispatch={treatmentsDispatch} />

            {/* Screenshot 6 */}
            <PersonalizedJourney />

            {/* Screenshot 7 */}
            <ArchitecturalQuote />
          </main>

          {/* Screenshot 8 */}
          <Footer />

          {/* Zustand Slide-in Drawer */}
          <BotanicalBagDrawer />

          {/* Redux Reservation Modal */}
          <ReservationModal state={bookingState} dispatch={bookingDispatch} />
        </div>
      </PatronWellnessProvider>
    </SanctuaryTelemetryProvider>
  );
}