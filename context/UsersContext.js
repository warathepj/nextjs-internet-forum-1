// context/UsersContext.js/
// from context/UsersContext.js/ how to render all users in
'use client'
import { createContext, useState, useContext } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    // render context/UsersContext.js/users in
  const [users, setUsers] = useState([
      
      { 
        id: "1", 
        name: "ZenMaster", 
        avatar: "https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        comments: [
            {
                postId: "",
                comment: ""
            }
        ]

        
    },
    { 
      id: "2", 
      name: "CoffeeLover", 
      avatar: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comments: [
        {
          postId: "v1",
          comment: "That's a good point. Steam trains have definitely been around for a long time."
        }
      ] 
    }, 
    { 
      id: "3", 
      name: "AwkwardPenguin", 
      avatar: "https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comments: [] 
    },
    { 
      id: "4", 
      name: "YodaIsMyHomeboy", 
      avatar: "https://images.unsplash.com/photo-1603621760091-d7b12c66549a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comments: [] 
    },
    { 
      id: "5", 
      name: "WanderlustExplorer", 
      avatar: "https://plus.unsplash.com/premium_photo-1664300778169-8a45bfad23be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comments: [] 
    }
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );

}

// export const useUsers = () => useContext(UsersContext);

export function useUsers() {
    return useContext(UsersContext);
  }

  export { UsersProvider };
  