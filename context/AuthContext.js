"use client"
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const registerUser = async ({ username }) => {
    // Implement your registration logic here
    // For example:
    // await api.register(username, password);
    setUsername(username);
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      setIsLoggedIn, 
      username, 
      setUsername, 
      registerUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}









// // context/AuthContext
// "use client"
// import React, { createContext, useState, useContext } from 'react';

// // Create the context
// const AuthContext = createContext();

// // Create a provider component
// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // You can add more auth-related state or functions here

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Create a custom hook to use the auth context
// export function useAuth() {
//   return useContext(AuthContext);
// }