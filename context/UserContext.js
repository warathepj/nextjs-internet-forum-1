"use client"
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(() => {
        // Retrieve username from session storage if it exists
        return sessionStorage.getItem('username') || '';
    });

    useEffect(() => {
        // Store the username in session storage when it changes
        if (username) {
            sessionStorage.setItem('username', username);
        }
    }, [username]);
    // console.log("UUUUUUUUUUUUUUUUUsername", username)

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
