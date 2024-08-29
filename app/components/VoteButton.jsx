// app/components/VoteButton.js
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import ArrowUp from './(icon)/ArrowUp';
import ArrowDown from './(icon)/ArrowDown';
import styles from './VoteButton.module.css';

export default function VoteButton() {
    const [count, setCount] = useState(Math.floor(Math.random() * 1000)); // Initialize count state
    const [hasVoted, setHasVoted] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

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

      if (isLoggedIn) {
    return (
        <div className={styles.container}>

{/* //in app/components/VoteButton.js */}
{/* if isLoggedIn is true, can click two button,
 else render Please register !!*/}
            <button className={styles.arrow} onClick={handleUpvote} disabled={hasVoted}>
                <ArrowUp />
            </button>

            {/* add 1 to */}
                <p>{count}</p>


            <button className={styles.arrow} onClick={handleDownvote} disabled={hasVoted}>
                <ArrowDown />
            </button>
        </div>
      );
    } else {
      return <div className={styles.container}>
                <p>{count} votes</p>
              <p>Please register to vote!</p>
        </div>;
    }
}

