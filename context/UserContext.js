
// context/UserContext.js
"use client"
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    // const [username, setUsername] = useState(() => {
        // Retrieve username from session storage if it exists
        // return sessionStorage.getItem('username') || '';
    // });

    //////////////////////

    const loadUsernameFromLocalStorage = () => {
        if (typeof window !== 'undefined') {
          const storedUsername = localStorage.getItem("username");
          if (storedUsername) {
            setUsername(storedUsername);
            // setUsername(JSON.parse(storedUsername));
          }
        }
      };
    
      // Load user on component mount
      useEffect(() => {
        loadUsernameFromLocalStorage();
      }, []);


    ///////////////
    // useEffect(() => {
        // Store the username in session storage when it changes
    //     if (username) {
    //         sessionStorage.setItem('username', username);
    //     }
    // }, [username]);
    // console.log("UUUUUUUUUUUUUUUUUsername", username)

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
