// context/AuthContext.js/
"use client"
// context/AuthContext.js
import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  // Function to update the user state (e.g., after successful registration)
  const registerUser = (userData) => {
    // setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
