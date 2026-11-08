import React, { createContext, useContext, useState, useEffect } from 'react';

const BoutiqueAtmosphereContext = createContext();

export const BoutiqueAtmosphereProvider = ({ children }) => {
  const [telemetry, setTelemetry] = useState({
    timeCET: '13:58:10 CET',
    climate: '19.8°C (41% RH)',
    escapementDelta: '+0.2 s / 24h',
    activeCalibre: 'CHR-904 Volant',
    genevaSeal: 'Hallmark #084/2025',
    workshopStatus: 'Live Fabrication in Progress',
  });

  // Live ticking clock for Geneva CET
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const cetTime = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Paris' }) + ' CET';
      setTelemetry((prev) => ({ ...prev, timeCET: cetTime }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <BoutiqueAtmosphereContext.Provider value={telemetry}>
      {children}
    </BoutiqueAtmosphereContext.Provider>
  );
};

export const useBoutiqueAtmosphere = () => useContext(BoutiqueAtmosphereContext);