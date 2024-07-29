// MessageContext.js
'use client'
import { createContext, useState, useContext } from 'react';

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content: "Hello World"
    },
    {
      id: "2",
      content: "Hello moon"
    }
  ]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessages() {
  return useContext(MessageContext);
}
