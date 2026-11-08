import React, { useReducer } from 'react';

// Context Providers (2 Context APIs)
import { AirspaceProvider } from './context/AirspaceContext';
import { PassengerProvider } from './context/PassengerContext';

// Redux Slices (2 Redux Slices)
import { charterFlightReducer, INITIAL_CHARTER_STATE } from './store/charterFlightSlice';
import { fleetCatalogReducer, INITIAL_FLEET_STATE } from './store/fleetCatalogSlice';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import InstrumentationBar from './components/InstrumentationBar';
import MultiLegDispatch from './components/MultiLegDispatch';
import CuratedFleet from './components/CuratedFleet';
import FlightManifest from './components/FlightManifest';
import CateringDrawer from './components/CateringDrawer';
import FlightClearanceModal from './components/FlightClearanceModal';
import Footer from './components/Footer';

export default function App() {
  // Redux 1: Multi-Leg Itinerary Dispatch
  const [charterState, charterDispatch] = useReducer(
    charterFlightReducer,
    INITIAL_CHARTER_STATE
  );

  // Redux 2: Curated Fleet Catalog
  const [fleetState, fleetDispatch] = useReducer(
    fleetCatalogReducer,
    INITIAL_FLEET_STATE
  );

  return (
    <AirspaceProvider>
      <PassengerProvider>
        <div className="min-h-screen bg-[#07090d] text-[#ececee] font-sans selection:bg-[#d4af37] selection:text-black">
          {/* Screenshot 1 */}
          <Header />

          <main>
            {/* Screenshot 2 */}
            <Hero />

            {/* Screenshot 3 */}
            <InstrumentationBar />

            {/* Screenshot 4 */}
            <MultiLegDispatch state={charterState} dispatch={charterDispatch} />

            {/* Screenshot 5 */}
            <CuratedFleet state={fleetState} dispatch={fleetDispatch} />

            {/* Screenshot 6 */}
            <FlightManifest />
          </main>

          {/* Screenshot 7 */}
          <Footer />

          {/* Zustand In-Flight Gala Drawer */}
          <CateringDrawer />

          {/* Context 2 Clearance Modal */}
          <FlightClearanceModal />
        </div>
      </PassengerProvider>
    </AirspaceProvider>
  );
}