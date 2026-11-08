import React, { createContext, useContext, useState } from 'react';

const SanctuaryTelemetryContext = createContext();

export const SanctuaryTelemetryProvider = ({ children }) => {
  const [telemetry] = useState({
    outdoorTemp: '3.8°C',
    weatherCondition: 'Pine Mist',
    springSource: '41.4°C',
    wellName: 'Well IV Basalt',
    lunarPhase: 'Waning Moon 82%',
    elevation: '1,480m Alpine Elevation',
    altitudeZone: 'High Ridge Terroir',
  });

  return (
    <SanctuaryTelemetryContext.Provider value={telemetry}>
      {children}
    </SanctuaryTelemetryContext.Provider>
  );
};

export const useSanctuaryTelemetry = () => useContext(SanctuaryTelemetryContext);