// app/components/VoteButton.js
import { useState } from 'react';
import { usePersistentUsername } from '../../context/PersistentUsernameContext';
import ArrowUp from './(icon)/ArrowUp';
import ArrowDown from './(icon)/ArrowDown';
import Link from 'next/link';
import styles from './VoteButton.module.css';

export default function VoteButton({ id }) {
  const [count, setCount] = useState(Math.floor(Math.random() * 1000)); // Initialize count state
  const [hasVoted, setHasVoted] = useState(false);
  const { username } = usePersistentUsername();

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
        <button className={styles.arrow} onClick={handleUpvote} disabled={hasVoted}>
          <ArrowUp />
        </button>
        <p>{id === 'user' ? 0 : count}</p>
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

