import React, { createContext, useContext, useState } from 'react';

const PassengerContext = createContext();

export const PassengerProvider = ({ children }) => {
  const [patron, setPatron] = useState({
    name: 'Lady Vance',
    membershipTier: 'Obsidian Tier',
    membershipCode: '#084',
    hoursRemaining: '50+ HOURS',
    isClearanceModalOpen: false,
    selectedFlightCode: 'DEL-BOM-01',
    activeCurrency: 'INR',
  });

  const openClearance = () => setPatron((p) => ({ ...p, isClearanceModalOpen: true }));
  const closeClearance = () => setPatron((p) => ({ ...p, isClearanceModalOpen: false }));

  return (
    <PassengerContext.Provider value={{ patron, openClearance, closeClearance }}>
      {children}
    </PassengerContext.Provider>
  );
};

export const usePassenger = () => useContext(PassengerContext);