// 'use client'
import styles from './AnnounceCard.module.css';

export default function AnnounceCard({ msg }) { // Receive the prop
  return (
    <div className={styles.container}>
      <p>Announce Card</p>
      <p>{msg}</p> {/* Display the message */}
    </div>
  )
}
