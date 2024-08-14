// app/components/Trend.js
// 'use client'
import Link from 'next/link';
import { useContext } from 'react';
import { usePosts} from '../../context/PostsContext';
import { useMessages } from '../../context/MessageContext';
import PostCard from './PostCard';
import styles from './Trend.module.css';

export default function Trend() {
  // const { posts } = useContext(PostsContext);
  // const { posts } = useContext(MessageContext);
  const { messages } = useMessages();
  const { posts } = usePosts();

  

  return (
    <div className={styles.container}>
      <p>trend</p> 
      {posts.map(({ id, avatar, room, topic, image, content, posterId }) => (
// when click app/components/Trend.js
//when click app/components/Trend.js/
        <Link key={id} href={`/posts/${id}`} className={styles.postCard}>
          <pre style={{color: 'white'}}>avatar: {avatar}</pre>

          <PostCard 
            id={id} 
            avatar={avatar} 
            room={room} 
            topic={topic} 
            content={content} 
            posterId={posterId} 
            image={image} 
          />
        </Link>
      ))}
      {/* it error "Error: Objects are not valid as a React child 
      (found: object with keys {postId, comment}). If you meant to 
      render a collection of children, use an array instead."*/}
{/* PostCard from 'app/components/PostCard'; */}
{/* usePosts} from 'context/PostsContext'; */}
{/* how to fix? */}
    </div>
  );
}
