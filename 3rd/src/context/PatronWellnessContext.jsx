import React, { createContext, useContext, useState } from 'react';

const PatronWellnessContext = createContext();

export const PatronWellnessProvider = ({ children }) => {
  const [patron] = useState({
    name: 'E. Lindström',
    memberTier: 'Solstice Solitude Member • 4th Sojourn',
    elementalConstitution: 'Vata-Water / Cedar Harmony',
    thermalPreference: '40.5°C Sustained Soaking',
    dietaryAlchemy: 'Plant-rich, Zero Allium',
    upcomingStay: '3 Nights • Komorebi Pavilion',
    hrvScore: '+28% Avg',
  });

  return (
    <PatronWellnessContext.Provider value={{ patron }}>
      {children}
    </PatronWellnessContext.Provider>
  );
};

export const usePatronWellness = () => useContext(PatronWellnessContext);