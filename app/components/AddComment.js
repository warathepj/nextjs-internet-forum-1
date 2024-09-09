// app/components/AddComment.js
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import styles from './AddComment.module.css'; // Import CSS module if needed

export default function AddComment() {
  const { username } = useAuth();

  if (username) {
  return (
    <div>
{/* //from app/components/AddComment.js */}
{/* <Link href="/add-comment"> Wrap AddComment with Link */}

      <button className={styles.addButton}>
        {/* add Link to /add-comment */}
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <h3>+</h3>
          <p>Add Comment</p>
          

        </div>
        

        {/* <p>Add Comment</p> */ }
    </button >
    {/* </Link> */}
    {/* Other content of the AddComment component */ }
    </div >
  );
} else {
//from app/components/AddComment.js/
  return <p 
          className={styles.addButton}
        >
          Please 
          <Link 
            href="/register"
          >
            register</Link> to add a comment.</p>;
  // when click only "register" to go to /register
}
}
