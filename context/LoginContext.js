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
