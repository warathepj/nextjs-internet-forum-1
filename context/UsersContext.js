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
                postId: "g1",
                comment: "Use with a neck strap."
            },
            {
                postId: "v2",
                comment: "Driving in extremely cold temperatures, like those found at the North Pole, requires specific precautions to ensure your safety and the proper functioning of your vehicle."
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
      comments: [
        {
          postId: "v2",
          comment: "Use an engine block heater to warm up the engine before starting, especially in extremely cold temperatures. This helps prevent excessive wear and tear."
        }
      ] 
    },
    { 
      id: "4", 
      name: "YodaIsMyHomeboy", 
      avatar: "https://images.unsplash.com/photo-1603621760091-d7b12c66549a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comments: [
        {
          postId: "v2",
          comment: "Ensure your car battery is in good condition and has a sufficient charge. Cold weather can significantly reduce battery life.",
        },
        {
          postId: "g1",
          comment: "Being a clumsy person, I know myself that no matter what, I will definitely drop it on the floor. Normally we use Airpod Pro and put in an extra shockproof case.When I take it out and use it, it secretly falls off sometimes, but having said that, it holds up well.",
        },
      ] 
    },
    { 
      id: "5", 
      name: "WanderlustExplorer", 
      avatar: "https://plus.unsplash.com/premium_photo-1664300778169-8a45bfad23be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comments: [
        {
          postId: "v1",
          comment: "555555555555555"
        },
        {
          postId: "g1",
          comment: "Used to be, but only very small ones. These days, Bluetooth has grown in size as well. with our ear grooves, making it firm but not easy to fall out Anyway, choose to look at the big ones."
        }
      ] 
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
  