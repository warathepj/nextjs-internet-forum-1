// app/context/CommentContext.jsx
"use client"
import { createContext, useState, useContext } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comment, setComment] = useState("");

  return (
    <CommentContext.Provider value={{ comment, setComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);