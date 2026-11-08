import React, { useReducer } from 'react';

// Context Providers (2 Context APIs)
import { AtmosphereProvider } from './context/AtmosphereContext';
import { MemberProvider } from './context/MemberContext';

// Redux Reducers & Initial States (2 Redux Slices)
import { reservationReducer, INITIAL_RESERVATION_STATE, RESERVATION_ACTIONS } from './store/reservationSlice';
import { menuReducer, INITIAL_MENU_STATE } from './store/menuSlice';

// Zustand Store (1 Zustand Store)
import { useSommelierStore } from './store/useSommelierStore';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import ReservationBar from './components/ReservationBar';
import MenuSection from './components/MenuSection';
import Sanctuaries from './components/Sanctuaries';
import QuoteSection from './components/QuoteSection';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

export default function App() {
  // Redux Store 1: Table Reservations
  const [reservationState, reservationDispatch] = useReducer(
    reservationReducer,
    INITIAL_RESERVATION_STATE
  );

  // Redux Store 2: Tasting Menu Items & Courses
  const [menuState, menuDispatch] = useReducer(menuReducer, INITIAL_MENU_STATE);

  // Zustand Store: Cellar Bag & Sommelier Drawer
  const { pairingsBag, isDrawerOpen, toggleDrawer, removePairing } = useSommelierStore();

  return (
    <AtmosphereProvider>
      <MemberProvider>
        <div className="min-h-screen bg-[#0c0b0a] text-[#f5ebd9] font-sans selection:bg-[#f59e0b] selection:text-black">
          {/* Header */}
          <Header onBookClick={() => reservationDispatch({ type: RESERVATION_ACTIONS.OPEN_MODAL })} />

          {/* Main Body */}
          <main>
            <Hero onReserveClick={() => reservationDispatch({ type: RESERVATION_ACTIONS.OPEN_MODAL })} />
            <ReservationBar state={reservationState} dispatch={reservationDispatch} />
            <MenuSection state={menuState} dispatch={menuDispatch} />
            <Sanctuaries />
            <QuoteSection />
            <Reviews />
          </main>

          {/* Footer */}
          <Footer />

          {/* Redux-controlled Reservation Modal */}
          <ReservationModal state={reservationState} dispatch={reservationDispatch} />

          {/* Zustand-controlled Sommelier Drawer */}
          {isDrawerOpen && (
            <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-[#14120f] border-l border-[#2d2720] p-6 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#24201c] mb-4">
                  <h3 className="font-serif font-bold text-lg text-[#fbf7f0]">
                    Sommelier Vault
                  </h3>
                  <button onClick={toggleDrawer} className="text-sm text-[#8c8070] hover:text-white">
                    ✕
                  </button>
                </div>

                {pairingsBag.length === 0 ? (
                  <p className="text-xs text-[#8c8070]">No vintage pairings selected yet.</p>
                ) : (
                  <div className="space-y-3">
                    {pairingsBag.map((item) => (
                      <div key={item.id} className="p-3 bg-black/40 border border-[#2b251e] rounded-xl flex items-center justify-between text-xs">
                        <div>
                          <div className="font-serif font-bold text-[#f5ebd9]">{item.name}</div>
                          <div className="text-[10px] text-[#f59e0b]">${item.price} × {item.qty}</div>
                        </div>
                        <button
                          onClick={() => removePairing(item.name)}
                          className="text-[10px] text-red-400 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#24201c]">
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span>Vault Subtotal:</span>
                  <span className="text-[#f59e0b]">
                    ${pairingsBag.reduce((sum, item) => sum + item.price * item.qty, 0)}
                  </span>
                </div>
                <button
                  onClick={toggleDrawer}
                  className="w-full py-2.5 bg-[#f59e0b] text-black font-extrabold text-xs tracking-wider rounded-lg transition"
                >
                  KEEP EXPLORING
                </button>
              </div>
            </div>
          )}
        </div>
      </MemberProvider>
    </AtmosphereProvider>
  );
}