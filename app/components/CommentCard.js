// app/components/CommentCard.js
import { useUsers } from '../../context/UsersContext';
import { UsersProvider } from '../../context/UsersContext';
import { UsersContext } from '../../context/UsersContext';

import styles from './CommentCard.module.css';

function CommentCard({ commenterName, avatar, comments }) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="Avatar" 
        // className={styles.avatar} 
        className="avatar"  
      />
      <p>{commenterName}</p>
      <p>{comments}</p>
      
    </div>
  );
}

export default CommentCard;
