// app/contexts/PersistentUsernameContext.js
"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

const PersistentUsernameContext = createContext();

export function PersistentUsernameProvider({ children }) {
  const [username, setUsername] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('username') || '';
    }
    return '';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('username', username);
    }
  }, [username]);

  const logout = () => {
    setUsername('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('username');
    }
  };

  return (
    <PersistentUsernameContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </PersistentUsernameContext.Provider>
  );
}

export function usePersistentUsername() {
  const context = useContext(PersistentUsernameContext);
  if (context === undefined) {
    throw new Error('usePersistentUsername must be used within a PersistentUsernameProvider');
  }
  return context;
}
