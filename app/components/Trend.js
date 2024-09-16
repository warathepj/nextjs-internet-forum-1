// app/components/Trend.js
// 'use client'
import Link from 'next/link';
import { useContext } from 'react';
import { usePosts } from '../../context/PostsContext';
import { useUsers } from '../../context/UsersContext';

import { useMessages } from '../../context/MessageContext';
import PostCard from './PostCard';
import styles from './Trend.module.css';

export default function Trend() {
  // const { posts } = useContext(PostsContext);
  // const { posts } = useContext(MessageContext);
  // const params = useParams(); // Get the URL parameters
  // const postId = params.id;
  const { messages } = useMessages();
  const { posts } = usePosts();
  const { users } = useUsers();

  return (
    <div className={styles.container}>
      <p>Trend</p>
      <pre>
        {/* {post.room} */}
      </pre>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      {/* <pre>
        {posts.map(post => (
          <div key={post.id}>post.posterId: {post.posterId}</div>
        ))}
      </pre> */}
      {/* to render users name that have id === post.posterId */}


      {/* //in app/components/Trend.js/ modify*/}
      {/* <pre>
        {posts.map(post => (
          <div key={post.id}>
            {users.find(user => user.id === post.posterId)?.name || "Unknown User"}: {post.posterId}
          </div>
        ))}
      </pre> */}


      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}

        {/* /////////////// */}

        {/* <pre> */}
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
      {/* </pre> */}



        {/* /////////////// */}


      {/* {posts.map(({ id, avatar, room, topic, image, content, posterId }) => ( */}
      {/* // when click app/components/Trend.js */}
      {/* //when click app/components/Trend.js/ */}
      {/* <Link key={id} href={`/posts/${id}`} className={styles.postCard}> */}
      {/* <pre style={{color: 'white'}}>avatar: {avatar}</pre> */}

{/* to render */}
      {/* <PostCard id={post.id}  */}
      {/* // avatar={user.avatar}  */}
      {/* // name={user.name} */}
      {/* room={post.room}  */}
      {/* sub={post.sub}  */}
      {/* poster={post.poster} */}
      {/* topic={post.topic} content={post.content} image={post.image}  */}
      {/* /> */}
      {/* <PostCard 
            id={id} 
            avatar={avatar} 
            room={room} 
            topic={topic} 
            content={content} 
            posterId={posterId} 
            image={image} 
          /> */}
      {/* </Link> */}
      {/* ))} */}
      {/* it error "Error: Objects are not valid as a React child 
      (found: object with keys {postId, comment}). If you meant to 
      render a collection of children, use an array instead."*/}
      {/* PostCard from 'app/components/PostCard'; */}
      {/* usePosts} from 'context/PostsContext'; */}
      {/* how to fix? */}
    </div>
  );
}
