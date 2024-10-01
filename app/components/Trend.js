// app/components/Trend.js
import Link from 'next/link';
import { useContext } from 'react';
import { usePosts } from '../../context/PostsContext';
import { useUsers } from '../../context/UsersContext';
import { useMessages } from '../../context/MessageContext';
import PostCard from './PostCard';
import styles from './Trend.module.css';

export default function Trend() {
  const { messages } = useMessages();
  const { posts } = usePosts();
  const { users } = useUsers();

  return (
    <div className={styles.container}>
      <p>Trend</p>
      {posts.map(post => {
        const user = users.find(user => user.id === post.posterId);
        return (
          <Link href={`/posts/${post.id}`}>
            <PostCard
              key={post.id}
              id={post.id}
              avatar={user?.avatar}
              name={user?.name || "Unknown User"}
              room={post.room}
              sub={post.sub}
              poster={post.poster}
              topic={post.topic}
              content={post.content}
              image={post.image}
            />
          </Link>
        )
      })}
    </div>
  );
}
