"use client";
import { createContext, useContext, useState } from "react";

const WriteContext = createContext();

export const WriteProvider = ({ children }) => {
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");

    return (
        <WriteContext.Provider value={{ topic, setTopic, description, setDescription }}>
            {children}
        </WriteContext.Provider>
    );
};

// Create a custom hook to use the context
export const useWriteContext = () => {
    return useContext(WriteContext);
};