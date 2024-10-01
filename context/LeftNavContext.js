'use client'

import { createContext, useContext, useState } from 'react';
const LeftNavContext = createContext();
function LeftNavProvider({ children }) {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  return (
    <LeftNavContext.Provider value={{ isLeftNavOpen, setIsLeftNavOpen }}>
      {children}
    </LeftNavContext.Provider>
  );
}

export function useLeftNav() {
  return useContext(LeftNavContext);
}

export { LeftNavProvider };