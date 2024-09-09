// app/components/UserComment.jsx/
//why app/components/UserComment.jsx/ error
// ""
"use client"
// import { UserCommentContext } from '../../context/UserCommentContext';
import { useContext } from 'react';
import { useComment } from '../../context/UserCommentContext';
import { useAuth } from '../../context/AuthContext';
import styles from './CommentCard.module.css';

function UserComment() {
    // const { comment, setComment } = useContext(UserCommentContext);
  // const { comment } = useContext(UserCommentContext);
// let comment
const { username } = useAuth();
const { comment, setComment } = useComment();



  // if (comment === undefined) {
  //   throw new Error("UserComment must be used within a UserCommentProvider");
  // }

  return (
    <div>
      {/* <img src={avatar} alt="Avatar" className={styles.avatar} /> */}
      {/* <p>Comment by: {commenterName}</p> */}
      <img 
        className="avatar"  

            src="https://images.unsplash.com/photo-1654994983024-335d21549695?q=80&w=70&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="avatar" />
      <p>Comment by: {username}</p>
      <p>comment: {comment}</p>
      
    </div>
  );
}

export default UserComment;
