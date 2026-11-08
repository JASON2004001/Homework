import React, { createContext, useContext, useState, useEffect } from 'react';

const AirspaceContext = createContext();

export const AirspaceProvider = ({ children }) => {
  const [telemetry, setTelemetry] = useState({
    radarStatus: 'RADAR ACTIVE',
    tailId: 'AV-984X',
    zuluTime: '14:32:08Z',
    metar: 'METAR VIDP 18°C CAVOK • 310@08KT • QNH 30.12',
    galaStatus: 'IN-FLIGHT GALA Royal Osetra & Dom Pérignon Service Active',
    originIcao: 'VIDP (New Delhi IGI)',
    destIcao: 'VABB (Mumbai CSIA)',
    distanceNm: '610 NM',
    surfaceTemp: '18°C (Dew Point +06°C)',
    windVector: '310° @ 08 KT Gusting 12',
    barometricQnh: '30.12 inHg (1020 hPa)',
    runwayRvr: '> 6,000 FT (OPTIMAL)',
    departureSlot: 'SLOT 15:45Z VALID',
    mach: 'M 0.90',
    ktas: '516 KTAS',
    pressureAlt: '47,000 FT',
    isaDelta: 'ISA -52°C',
    turbulence: 'ZERO CAT / SMOOTH',
    cabinPressurization: '3,800 FT SIMULATED',
    fuelLoaded: '42,500 LBS LOADED',
    departureCountdown: 'T-MINUS 00:28:14',
  });

  // Ticking live Zulu clock
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const zulu = now.toISOString().substring(11, 19) + 'Z';
      setTelemetry((prev) => ({ ...prev, zuluTime: zulu }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AirspaceContext.Provider value={telemetry}>
      {children}
    </AirspaceContext.Provider>
  );
};

export const useAirspace = () => useContext(AirspaceContext);