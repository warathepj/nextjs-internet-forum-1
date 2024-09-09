// app/context/UserPostContext.jsx
"use client"
import { createContext, useState, useContext } from "react";

// Create the context
const PostContext = createContext();

// Create the provider component
export const PostProvider = ({ children }) => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const usePost = () => { 
    return { topic, setTopic, description, setDescription };
  };

  return (
    <PostContext.Provider value={usePost}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostContext);
};
