// app/components/CommentCard.js
import { useUsers } from '../../context/UsersContext';
import { UsersProvider } from '../../context/UsersContext';
import { UsersContext } from '../../context/UsersContext';

import styles from './CommentCard.module.css';

function CommentCard({ commenterName, avatar, comments }) {
  return (
    <div>
      {/* NEW */}
      <p>Comment by: {commenterName}</p>
      <img src={avatar} alt="Avatar" className={styles.avatar} />
      <p>{comments}</p>
      {/* NEW */}
      {/* OLD */}
      <p>comment card</p> 
      <img src="https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" className={styles.avatar} /> 
      
      <p>That's a good point. Steam trains have definitely been around for a long time.</p> 
      {/* OLD */}

      {/* Other content of the CommentCard component */}
    </div>
  );
}

export default CommentCard;
