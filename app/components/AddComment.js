// app/components/AddComment.js
import React from 'react';
import styles from './AddComment.module.css'; // Import CSS module if needed

export default function AddComment() {
  return (
    <div>
      <button className={styles.addButton}>
        {/* <h3>+</h3>      <button className={styles.addButton}> */}
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <h3>+</h3>
          <p>Add Comment</p>
        </div>
        

        {/* <p>Add Comment</p> */ }
    </button >
    {/* Other content of the AddComment component */ }
    </div >
  );
}
