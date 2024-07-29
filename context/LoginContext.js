// Suggested code may be subject to a license. Learn more: ~LicenseLog:1904957916.

// context/LoginContext.js
'use client';
import { createContext, useState, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Initially hidden
  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <LoginContext.Provider value={{ isLoginOpen, setIsLoginOpen, toggleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
