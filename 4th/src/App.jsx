import React, { useReducer } from 'react';

// Two Context APIs
import { SanctuaryTelemetryProvider } from './context/SanctuaryTelemetryContext';
import { PatronWellnessProvider } from './context/PatronWellnessContext';

// Two Redux Slices
import { retreatBookingReducer, INITIAL_BOOKING_STATE, BOOKING_ACTIONS } from './store/retreatBookingSlice';
import { treatmentsReducer, INITIAL_TREATMENTS_STATE } from './store/treatmentsSlice';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import MasterPavilion from './components/MasterPavilion';
import FjellSanctum from './components/FjellSanctum';
import ResidenceGrid from './components/ResidenceGrid';
import ComparativeMatrix from './components/ComparativeMatrix';
import SensoryTectonics from './components/SensoryTectonics';
import BotanicalBagDrawer from './components/BotanicalBagDrawer';
import ReservationModal from './components/ReservationModal';
import Footer from './components/Footer';

export default function App() {
  // Redux 1: Booking Pipeline
  const [bookingState, bookingDispatch] = useReducer(
    retreatBookingReducer,
    INITIAL_BOOKING_STATE
  );

  // Redux 2: Residence Matrix & Architectural Specifications
  const [treatmentsState, treatmentsDispatch] = useReducer(
    treatmentsReducer,
    INITIAL_TREATMENTS_STATE
  );

  return (
    <SanctuaryTelemetryProvider>
      <PatronWellnessProvider>
        <div className="min-h-screen bg-[#0d0d0e] text-[#ececee] font-sans selection:bg-[#dfba91] selection:text-black">
          {/* Screenshot 1 */}
          <Header onReserveClick={() => bookingDispatch({ type: BOOKING_ACTIONS.OPEN_MODAL })} />

          <main>
            {/* Screenshot 2 */}
            <Hero />

            {/* Screenshot 3 */}
            <MasterPavilion dispatch={bookingDispatch} />

            {/* Screenshot 4 */}
            <FjellSanctum dispatch={bookingDispatch} />

            {/* Screenshot 5 */}
            <ResidenceGrid dispatch={bookingDispatch} />

            {/* Screenshot 6 */}
            <ComparativeMatrix state={treatmentsState} dispatch={treatmentsDispatch} />

            {/* Screenshot 7 */}
            <SensoryTectonics dispatch={bookingDispatch} />
          </main>

          {/* Screenshot 8 */}
          <Footer />

          {/* Zustand Botanical Bag Drawer */}
          <BotanicalBagDrawer />

          {/* Redux Reservation Modal */}
          <ReservationModal state={bookingState} dispatch={bookingDispatch} />
        </div>
      </PatronWellnessProvider>
    </SanctuaryTelemetryProvider>
  );
}