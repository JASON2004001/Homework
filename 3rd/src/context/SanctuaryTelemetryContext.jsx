import React, { createContext, useContext, useState, useEffect } from 'react';

const SanctuaryTelemetryContext = createContext();

export const SanctuaryTelemetryProvider = ({ children }) => {
  const [telemetry, setTelemetry] = useState({
    bathTemp: '41.2°C / 106.1°F',
    waterType: 'Rich Silicate Geothermal',
    mineralDensity: '1,420 ppm',
    activeMinerals: 'Metasilicic Acid & Mg²⁺',
    sanctuaryRidge: '1,248m MSL',
    zone: 'Alpine Sub-Ridge Zone',
    tranquilityIndex: '98% Quietude',
    ambientSound: '18 dB',
  });

  return (
    <SanctuaryTelemetryContext.Provider value={telemetry}>
      {children}
    </SanctuaryTelemetryContext.Provider>
  );
};

export const useSanctuaryTelemetry = () => useContext(SanctuaryTelemetryContext);