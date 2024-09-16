// app/components/PostCard.js/

// import React from 'react';
import { useEffect, useRef, useState, useContext } from 'react';
import { useParams } from 'next/navigation';
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
  id, room, sub, poster, posterId, topic, avatar, name, content, image
}) {
  const params = useParams(); // Get the URL parameters
  const postId = params.postId;
  const { posts } = usePosts();
  // const { posts } = useContext(PostsContext);
  // Find the post with the matching ID
  const post = posts.find(post => post.id === id);
  // console.log("post from PostCard: ", post) // ok it all object

  // Find the user who created the post (using posterId from post)
  const [randomTime, setRandomTime] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const { users } = useUsers();
  //console.log("users : ", users) // ok it array of object
  // const posterUser = users.find(user => user.id === id);
  const posterUser = users.find(user => user.id === posterId);
  //console.log("posterUser from PostCard : ", posterUser) // undefined
  const paragraphs = content?.split('/') || [];

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

  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000); // Update every 1000 milliseconds (1 second)
    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  useEffect(() => {
    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * 300);
      setRandomNumber(number);
    };
    generateRandomNumber();
  }, []);

  return (
    <div className={styles.container}>
      {/* <div>
        <h3>Users:</h3>
        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div> */}
      {/* <pre>---------PostCard DEBUG start----------------</pre> */}
      {/* <pre>PPPPPPPPPPPPPpostId from PostCard : {postId}</pre> */}
      {/* <pre>{avatar}</pre> */}
      {/* <p>Poster ID from [id] page : {posterId}</p>  */}
      {/* NEW */}
      {/* <p>Post ID: {id}</p> */}
      {/* 167 */}
      <div className={styles.header}>
        {/* 100 */}
        <div className={styles.info}>
          {/* render img in app/components/PostCard.js/, posterId in */}
          {/* context/PostsContext.js same to id in context/UsersContext.js/ */}
          {/* img src is from avatar in context/UsersContext.js/ */}
          {/* {posterUser && (
            <img
              // src={posterUser.avatar || '/next.svg'}
              src="https://plus.unsplash.com/premium_photo-1664300778169-8a45bfad23be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`${posterUser.name}'s Avatar`}
              className={styles.avatar}
            />
          )} */}
          {/* <img
            src={avatar} */}
          {/* // alt={`${posterUser.name}'s Avatar`} */}
          {/* className={styles.avatar}
          /> */}
          <div className={styles.postInfoContainer}>
            <div className={styles.postInfo}>
              {/* <pre>{avatar}</pre> */}
              <img
                src={avatar}
                // alt={`${posterUser.name}'s Avatar`}
                className={styles.avatar}
              />
              <p>{sub}</p>
              <p> . </p>

              {/* //create timer function that start when
render app/components/PostCard.js/, unit in second */}
              {id === 'user' ? (

                // app/components/PostCard.js/
                <pre>{timer} seconds ago</pre>
                // has change, how to render
                // app/components/SeeCommentButton.js/<p>{Math.floor(Math.random() * 300)}</p>
                // only one time that app/components/PostCard.js/ load
              ) : (
                <p>{formattedTime} ago</p>
              )}
              {/* <p>{formattedTime} ago</p> */}
              {/* and render "timer" in pre tag */}
            </div>
            {posterUser && (
              <p className={styles.poster}>{posterUser.name}</p>

            )}

          </div>
        </div>
        {/* 66 styles.info */}
        {/* <pre>{name}</pre> */}
        <JoinButton />

      </div>
      {/* styles.header */}
      {/* <pre>aaaaaaaaaaaaa</pre> */}
      <p>{name}</p>
      <p>{topic}</p>
      {/* <pre>post image</pre> */}
      {/* //render app/components/PostCard.js/ */}
      {/* {location.pathname === '/user-post' && (
      <img src="https://images.unsplash.com/photo-1725610588145-a508e5cfe90b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      )} */}

      {/* other content */}
      {post ? <img src={post.image}
        alt="Post Image" className={styles.image} />
        : <img src="https://images.unsplash.com/photo-1725610588145-a508e5cfe90b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Post Image" className={styles.image} />
      }
      {/* from code, if no image render /default.jpg */}



      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {/* // from app/components/PostCard.js/ when find "/" in */}
      {/* <p>{content}</p> */}
      {/* break to new line */}

      {/* //how to horizontal center all element in
 app/components/PostCard.js/ */}
      <div className={styles.voteContainer}>
        <VoteButton id={id}/>
        {/* when click app/components/PostCard.js/ */}
        <Link href={`/posts/${id}`}> {/* Wrap SeeCommentButton with Link */}
          <SeeCommentButton id={id}/>
        </Link>
        {/* go to posts/{id} */}
        <ShareButton />
      </div>
      <Link href={postId ? `/posts/${postId}/add-comment` : '#'}>
        <AddComment />
      </Link>

      {/* <Link href={`/posts/${postId}/add-comment`}>
      <AddComment />
      </Link> */}
      {/* from this code, if postId is false, stay in current page */}
      {/* <pre>---------PostCard DEBUG end----------------</pre> */}

    </div>
  );
}

export default PostCard;
