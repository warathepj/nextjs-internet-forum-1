// context/UsersContext.js/
'use client'
import { createContext, useState, useContext } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
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
        },
        {
          postId: "b1",
          comment: "If you don't have any investment knowledge,I recommend you to keep your bank deposits as before.Because if you invest by listening to others, you won't have 10 million left.I recommend you to study about investment and your ability to accept risks first.The return on investment will depend on your knowledge and ability.From the question you set, 12% per year is considered high.You must have some knowledge, ability, and experience.The investment that is risk-free according to the textbooks is government bonds.Currently, the return on 10-year government bonds is 2-3% per year.",
        },
        {
          postId: "s1",
          comment: "Some models press and hold, some models press 2-3 buttons."
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
        {
          postId: "s1",
          comment: "Most of the time, press 2 times = cancel."
        }
      ]
    },
    {
      id: "5",
      name: "WanderlustExplorer",
      avatar: "https://plus.unsplash.com/premium_photo-1664300778169-8a45bfad23be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comments: [
        {
          postId: "v1",
          comment: "You can't build a railroad to everyone's house."
        },
        {
          postId: "g1",
          comment: "Used to be, but only very small ones. These days, Bluetooth has grown in size as well. with our ear grooves, making it firm but not easy to fall out Anyway, choose to look at the big ones."
        },
        {
          postId: "s1",
          comment: "Many brands can do it. But most people don't know."
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

export function useUsers() {
  return useContext(UsersContext);
}

export { UsersProvider };
