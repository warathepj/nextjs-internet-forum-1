'use client'
import { createContext, useState, useContext } from 'react';

const AnnounceContext = createContext();

export function AnnounceProvider({ children }) {
  const [announcements, setAnnouncements] = useState([
    {
      id: "1",
      topic: "Car Activities",
      detail: "Invite you to post about your car to join our event.",
      content: "Post content about your car to get votes. The top 3 people with the most votes will win prizes."
    },
    {
      id: "2",
      topic: "Gadgets Room Fan Meeting",
      detail: "Get ready to meet influencers from the Gadget Room",
      content: "Get ready to meet influencers at Urban Oasis Hotel soon."
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