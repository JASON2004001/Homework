import React, { createContext, useContext, useState } from 'react';

const CollectorContext = createContext();

export const CollectorProvider = ({ children }) => {
  const [collector, setCollector] = useState({
    custodyId: '#880-01',
    collectorName: 'Patron Privé',
    tier: 'Heritage Purist Guild',
    consultationModalOpen: false,
    activeSalonDate: 'Rue de la Cité 14, Genève',
  });

  const openProtocol = () => setCollector((prev) => ({ ...prev, consultationModalOpen: true }));
  const closeProtocol = () => setCollector((prev) => ({ ...prev, consultationModalOpen: false }));

  return (
    <CollectorContext.Provider value={{ collector, openProtocol, closeProtocol }}>
      {children}
    </CollectorContext.Provider>
  );
};

export const useCollector = () => useContext(CollectorContext);