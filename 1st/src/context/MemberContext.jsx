import React, { createContext, useContext, useState } from 'react';

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [member, setMember] = useState({
    name: 'Julian Moreau Guest',
    tier: 'Private Salon Member',
    bookingHistoryCount: 3,
    isLoggedIn: true,
  });

  const toggleLogin = () => {
    setMember((prev) => ({ ...prev, isLoggedIn: !prev.isLoggedIn }));
  };

  return (
    <MemberContext.Provider value={{ member, toggleLogin }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMember = () => useContext(MemberContext);