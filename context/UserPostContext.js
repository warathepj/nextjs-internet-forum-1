// app/context/UserPostContext.jsx
"use client"
import { createContext, useState, useContext } from "react";

const PostContext = createContext();

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
