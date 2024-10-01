// app/components/AddComment.js
import Link from 'next/link';
import { usePersistentUsername } from '../../context/PersistentUsernameContext';
import styles from './AddComment.module.css';

export default function AddComment() {
  const { username } = usePersistentUsername();

  if (username) {
    return (
      <div>
        <button className={styles.addButton}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <h3>+</h3>
            <p>Add Comment</p>
          </div>
        </button >
      </div >
    );
  } else {
    return 
      <p
        className={styles.addButton}
      >
        Please
        <Link href="/register">
          register
        </Link>
         to add a comment.
      </p>;
  }
}
