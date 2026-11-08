import React, { useReducer } from 'react';

// Two Context APIs
import { BoutiqueAtmosphereProvider } from './context/BoutiqueAtmosphereContext';
import { CollectorProvider } from './context/CollectorContext';

// Two Redux Slices / Reducers
import { customizerReducer, INITIAL_CUSTOMIZER_STATE } from './store/customizerSlice';
import { catalogReducer, INITIAL_CATALOG_STATE } from './store/catalogSlice';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import TelemetryBar from './components/TelemetryBar';
import WatchCustomizer from './components/WatchCustomizer';
import MasterCollection from './components/MasterCollection';
import GenevanBenchmark from './components/GenevanBenchmark';
import VoicesFromVault from './components/VoicesFromVault';
import SalonAudienceCTA from './components/SalonAudienceCTA';
import VaultDrawer from './components/VaultDrawer';
import ProtocolModal from './components/ProtocolModal';
import Footer from './components/Footer';

export default function App() {
  // Redux 1: Watch Configuration Studio
  const [customizerState, customizerDispatch] = useReducer(
    customizerReducer,
    INITIAL_CUSTOMIZER_STATE
  );

  // Redux 2: Master Collection & Category Filter
  const [catalogState, catalogDispatch] = useReducer(
    catalogReducer,
    INITIAL_CATALOG_STATE
  );

  return (
    <BoutiqueAtmosphereProvider>
      <CollectorProvider>
        <div className="min-h-screen bg-[#0a0a0c] text-[#ececee] font-sans selection:bg-[#d4af37] selection:text-black">
          {/* Screenshot 1 */}
          <Header />

          <main>
            {/* Screenshot 2 */}
            <Hero />

            {/* Screenshot 3 */}
            <TelemetryBar />

            {/* Screenshot 4 */}
            <WatchCustomizer state={customizerState} dispatch={customizerDispatch} />

            {/* Screenshot 5 */}
            <MasterCollection state={catalogState} dispatch={catalogDispatch} />

            {/* Screenshot 6 */}
            <GenevanBenchmark />

            {/* Screenshot 7 */}
            <VoicesFromVault />

            {/* Screenshot 8 */}
            <SalonAudienceCTA />
          </main>

          {/* Screenshot 9 */}
          <Footer />

          {/* Slide-in Vault Drawer (Zustand) */}
          <VaultDrawer />

          {/* Salon Booking Modal (Context 2) */}
          <ProtocolModal />
        </div>
      </CollectorProvider>
    </BoutiqueAtmosphereProvider>
  );
}