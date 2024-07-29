'use client'
import { createContext, useState, useContext } from 'react';

const TopicsContext = createContext();

export function TopicsProvider({ children }) {
  const [topics, setTopics] = useState([
    "Vehicles", "Gadgets", "Science", "Business"
  ]);

  return (
    <TopicsContext.Provider value={{ topics, setTopics }}>
      {children}
    </TopicsContext.Provider>
  );
}

export function useTopics() {
  return useContext(TopicsContext);
}
