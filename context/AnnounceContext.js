'use client'
import { createContext, useState, useContext } from 'react';

const AnnounceContext = createContext();

export function AnnounceProvider({ children }) {
  const [announcements, setAnnouncements] = useState([
    {
      id: "1",
      topic: "avb",
      detail: "adjkfskjdflkjf"
    },
    {
      id: "2",
      topic: "avb",
      detail: "adjkfskjdflkjf"
    }
  ]);

  return (
    <AnnounceContext.Provider value={{ announcements, setAnnouncements }}>
      {children}
    </AnnounceContext.Provider>
  );
}

export function useAnnounce() {
  return useContext(AnnounceContext);
}