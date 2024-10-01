// context/PasswordContext.js
'use client';
import { createContext, useState, useContext } from 'react';

const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState(["dog", "cat", "rat"]);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Add login state
  const [isLoginButtonOpen, setIsLoginButtonOpen] = useState(true);
  const [isCreateButtonOpen, setIsCreateButtonOpen] = useState(false);
  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  const toggleLoginButton = () => { 
    setIsLoginButtonOpen(!isLoginButtonOpen);
  };
  const toggleCreateButton = () => { 
    setIsCreateButtonOpen(!isCreateButtonOpen);
  };
  return (
    <PasswordContext.Provider value={{ passwords, setPasswords, isLoginButtonOpen, isCreateButtonOpen, setIsLoginButtonOpen, setIsCreateButtonOpen, toggleLoginButton, toggleCreateButton }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => useContext(PasswordContext);
