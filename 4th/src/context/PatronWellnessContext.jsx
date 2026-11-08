import React, { createContext, useContext, useState } from 'react';

const PatronWellnessContext = createContext();

export const PatronWellnessProvider = ({ children }) => {
  const [membership, setMembership] = useState({
    tier: 'Inner Sanctum Founder',
    patronName: 'A. Manna',
    isPlayingSoundscape: true,
    activeSoundscape: 'Cedar Mist • 432 Hz Binaural',
  });

  const toggleSoundscape = () => {
    setMembership((prev) => ({
      ...prev,
      isPlayingSoundscape: !prev.isPlayingSoundscape,
    }));
  };

  return (
    <PatronWellnessContext.Provider value={{ membership, toggleSoundscape }}>
      {children}
    </PatronWellnessContext.Provider>
  );
};

export const usePatronWellness = () => useContext(PatronWellnessContext);