// app/components/PostCard.js/

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
  const params = useParams(); 
  const postId = params.postId;
  const { posts } = usePosts();
  // Find the post with the matching ID
  const post = posts.find(post => post.id === id);
  // console.log("post from PostCard: ", post) 

  // Find the user who created the post (using posterId from post)
  const [randomTime, setRandomTime] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const { users } = useUsers();
  //console.log("users : ", users) 
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
      <div className={styles.header}>
        {/* 100 */}
        <div className={styles.info}>
          <div className={styles.postInfoContainer}>
            <div className={styles.postInfo}>
              <img
                src={avatar}
                className={styles.avatar}
              />
              <p>{sub}</p>
              <p> . </p>
              {id === 'user' ? (
                <pre>{timer} seconds ago</pre>
              ) : (
                <p>{formattedTime} ago</p>
              )}
            </div>
            {posterUser && (
              <p className={styles.poster}>{posterUser.name}</p>
            )}
          </div>
        </div>
        <JoinButton />
      </div>
      <p>{name}</p>
      <p className={styles.topic}>{topic}</p>

      {post ? <img src={post.image}
        alt="Post Image" className={styles.image} />
        : <img src="https://images.unsplash.com/photo-1725610588145-a508e5cfe90b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Post Image" className={styles.image} />
      }
      
      {paragraphs.map((paragraph, index) => (
        <p
          className={styles.paragraph}
          key={index}>{paragraph}</p>
      ))}
      <div className={styles.voteContainer}>
        <VoteButton id={id} />
        <Link href={`/posts/${id}`}> 
          <SeeCommentButton id={id} />
        </Link>
        <ShareButton />
      </div>

      <Link href={postId ? `/posts/${postId}/add-comment` : `/posts/${id}`}>
        <AddComment />
      </Link>
    </div>
  );
}

export default PostCard;
