// app/components/CommentCard.js
import { useUsers } from '../../context/UsersContext';
import { UsersProvider } from '../../context/UsersContext';
import { UsersContext } from '../../context/UsersContext';

import styles from './CommentCard.module.css';

function CommentCard({ commenterName, avatar, comments }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" className={styles.avatar} />
      <p>Comment by: {commenterName}</p>
      <p>comment: {comments}</p>
      
    </div>
  );
}

export default CommentCard;
