// app/components/UserComment.jsx/

"use client"
import { useContext } from 'react';
import { useComment } from '../../context/UserCommentContext';
import { usePersistentUsername } from '../../context/PersistentUsernameContext';
import styles from './CommentCard.module.css';

function UserComment() {
  const { username } = usePersistentUsername();
  const { comment, setComment } = useComment();

  return (
    <div className={styles.container}>
      {comment && (
        <>
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1654994983024-335d21549695?q=80&w=70&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar" />
          <p>{username}</p>
          <p className={styles.comment}>{comment}</p>
        </>
      )}
    </div>
  );
}

export default UserComment;
