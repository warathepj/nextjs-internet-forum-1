// app/context/CommentContext.jsx
"use client"
import { createContext, useState, useContext } from "react";

// Create the context
const CommentContext = createContext();

// Create the provider component
export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState("");

  return (
    <CommentContext.Provider value={{ comment, setComment }}>
      {children}
    </CommentContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useComment = () => useContext(CommentContext);