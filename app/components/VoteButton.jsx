// app/components/VoteButton.js
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import ArrowUp from './(icon)/ArrowUp';
import ArrowDown from './(icon)/ArrowDown';
import Link from 'next/link';
import styles from './VoteButton.module.css';

export default function VoteButton({ id }) {
  const [count, setCount] = useState(Math.floor(Math.random() * 1000)); // Initialize count state
  const [hasVoted, setHasVoted] = useState(false);
  const { username } = useAuth();

  const handleUpvote = () => {
    if (!hasVoted) { // Check if already voted
      setCount(count + 1);
      setHasVoted(true); // Mark as voted
    }
  };
  const handleDownvote = () => {
    if (!hasVoted) { // Check if already voted
      setCount(count - 1);
      setHasVoted(true); // Mark as voted
    }
  };

  if (username) {
    return (
      <div className={styles.container}>
        {/* //in app/components/VoteButton.js */}
        {/* if isLoggedIn is true, can click two button,
 else render Please register !!*/}
        <button className={styles.arrow} onClick={handleUpvote} disabled={hasVoted}>
          <ArrowUp />
        </button>

        {/*from app/components/VoteButton.js initial render */}
        <p>{id === 'user' ? 0 : count}</p>

        {/* <p>{count}</p> */}
{/* if id="user", render 0 */}

        <button className={styles.arrow} onClick={handleDownvote} disabled={hasVoted}>
          <ArrowDown />
        </button>
      </div>
    );
  } else {
    return <div className={styles.container}>
      <p style={{ fontSize: '.8rem' }}>{count} votes</p>

      <p
        style={{ fontSize: '.8rem' }}
      >
        Please 
        <Link
          href="/register"
        >
          register</Link> to vote.</p>
    </div>;
  }
}

