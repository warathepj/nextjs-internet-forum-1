"use client";
import { useWriteContext } from "../../context/WriteContext";
import { useAuth } from '../../context/AuthContext';

import PostCard from "../components/PostCard";

const Display = () => {
  const { username } = useAuth();

    const { topic, description } = useWriteContext();
    const avatar = "https://images.unsplash.com/photo-1654994983024-335d21549695?q=80&w=70&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const room = "User";
    const sub = "User Post";
    const image = "https://images.unsplash.com/photo-1725610588145-a508e5cfe90b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div>
            <h2>Topic: {topic}</h2>
            <p>Description: {description}</p>

            <PostCard 
                // id={post.id} 
                avatar={avatar} 
                name={username}
                room={room} 
                sub={sub} 
                poster={username}
                topic={topic} 
                content={description} 
                image={image} 
      />
        </div>
    );
};

export default Display;