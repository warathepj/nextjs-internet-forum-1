// app/add-comment/page.jsx/
"use client"
import { useState } from 'react'
import { useContext } from 'react';
import { useComment } from '../../../../context/UserCommentContext';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Button from '../../../components/Button'
import PostButton from '../../../components/PostButton';
import styles from './page.module.css';

const AddComment = () => {
  const params = useParams(); // Get the URL parameters
  const postId = params.postId;
  const [isClicked, setIsClicked] = useState(false);
  const { comment, setComment } = useComment();
  const [showComment, setShowComment] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setShowComment(true);
    // console.log(comment);
    router.back();
  };

  return (
    <div className={styles.container}>AddComment
      <textarea
        id="comment"
        rows="4" cols="50"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."></textarea>

      <Link href={`/posts/${postId}`}>
        <Button label="Post" onClick={handleClick} />
      </Link>
      {isClicked && <p>clicked</p>}
      {showComment && (
        <pre>comment : {comment}</pre>
      )}
    </div>
  )
}

export default AddComment