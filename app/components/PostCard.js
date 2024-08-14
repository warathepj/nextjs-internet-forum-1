// app/components/PostCard.js/
// from app/components/PostCard.js/ render users in p tag

// import React from 'react';
import { useEffect, useRef, useState, useContext } from 'react';
import { usePosts } from '../../context/PostsContext';
import { useUsers } from '../../context/UsersContext';
import { UsersProvider } from '../../context/UsersContext';
import { UsersContext } from '../../context/UsersContext';
import { PostsContext } from '../../context/PostsContext'; 

import Link from 'next/link';
import VoteButton from './VoteButton';
import SeeCommentButton from './SeeCommentButton';
import ShareButton from './ShareButton';
import AddComment from './AddComment';
import JoinButton from './JoinButton';
import styles from './PostCard.module.css';

function PostCard({ 
  id, room, poster, posterId, topic, avatar, name, content, image 
}) {

  const { posts } = usePosts();
  // const { posts } = useContext(PostsContext);
  // Find the post with the matching ID
  const post = posts.find(post => post.id === id);
  console.log("post from PostCard: ", post) // ok it all object

  // Find the user who created the post (using posterId from post)
  const [randomTime, setRandomTime] = useState(0);
  const { users } = useUsers();
  console.log("users : ", users) // ok it array of object
  // const posterUser = users.find(user => user.id === id);
  const posterUser = users.find(user => user.id === posterId);
  console.log("posterUser from PostCard : ", posterUser) // undefined
  useEffect(() => {
    const generateRandomTime = () => {
      const timeInSeconds = Math.floor(Math.random() * 100_000) + 1;
      setRandomTime(timeInSeconds);
    };
    generateRandomTime();
  }, []);
  const formattedTime =
    randomTime > 86400 // 24 hours in seconds
      ? Math.floor(randomTime / 86400) + ' day'
      : randomTime > 3600 // 1 hour in seconds
        ? Math.floor(randomTime / 3600) + ' hr'
        : randomTime > 59
          ? Math.floor(randomTime / 60) + ' min'
          : randomTime + ' sec';
  return (
    <div className={styles.container}>
      {/* <div>
        <h3>Users:</h3>
        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div> */}
      <pre>---------PostCard DEBUG start----------------</pre>
      {/* <pre>{avatar}</pre> */}
      {/* <p>Poster ID from [id] page : {posterId}</p>  */}
      {/* NEW */}
          {/* <p>Post ID: {id}</p> */}
      <div className={styles.header}>
        <div className={styles.info}>
          {/* render img in app/components/PostCard.js/, posterId in */}
          {/* context/PostsContext.js same to id in context/UsersContext.js/ */}
          {/* img src is from avatar in context/UsersContext.js/ */}
          {posterUser && (
            <img
              src={posterUser.avatar || '/next.svg'}
              // src={'avatar'}
              alt={`${posterUser.name}'s Avatar`}
              className={styles.avatar}
            />
          )}
          {/* <img
            src={avatar} */}
            {/* // alt={`${posterUser.name}'s Avatar`} */}
            {/* className={styles.avatar}
          /> */}
          <div className={styles.postInfoContainer}>
            <div className={styles.postInfo}>
            <p>{room}</p>
              <p> . </p>
              <p>{formattedTime} ago</p>
            </div>
          {posterUser && (
            <p className={styles.poster}>{posterUser.name}</p>
          )}

          </div>
        </div>
        <pre>{name}</pre>
        <JoinButton />

      </div>
      <p>{topic}</p>
      {post ? <img src={post.image} alt="Post Image" className={styles.image} /> : "No image"}
      <p>{content}</p>
      <VoteButton />
      {/* when click app/components/PostCard.js/ */}
      <Link href={`/posts/${id}`}> {/* Wrap SeeCommentButton with Link */}
        <SeeCommentButton />
      </Link>
      {/* go to posts/{id} */}
      <ShareButton />
      <AddComment />
      {/* NEW */}
      <pre>---------PostCard DEBUG end----------------</pre>
      
    </div>
  );
}

export default PostCard;
