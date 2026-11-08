import React, { createContext, useContext, useState } from 'react';

const AtmosphereContext = createContext();

export const AtmosphereProvider = ({ children }) => {
  const [telemetry] = useState({
    season: 'SEASON IX NARRATIVE',
    michelinStars: 'TWO MICHELIN STARS 2024',
    wineSpectator: 'GRAND AWARD WINE SPECTATOR',
    cellarTemp: '12.5°C',
    cellarHumidity: '72% RH',
    fireElement: 'Binchōtan White Oak Coals',
  });

  return (
    <AtmosphereContext.Provider value={telemetry}>
      {children}
    </AtmosphereContext.Provider>
  );
};

export const useAtmosphere = () => useContext(AtmosphereContext);