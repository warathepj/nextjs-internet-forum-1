// app/components/VoteButton.js
import { useState } from 'react';
import ArrowUp from './(icon)/ArrowUp';
import ArrowDown from './(icon)/ArrowDown';
import styles from './VoteButton.module.css';

export default function PostButton() {
    const [count, setCount] = useState(Math.floor(Math.random() * 1000)); // Initialize count state
    const [hasVoted, setHasVoted] = useState(false);
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

    return (
//set width of app/components/VoteButton.js
        <div className={styles.container}>
{/* <p>VoteButton</p> */}
{/* fit to 3 element inside */}
{/*when click on app/components/VoteButton.js */}
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
}

