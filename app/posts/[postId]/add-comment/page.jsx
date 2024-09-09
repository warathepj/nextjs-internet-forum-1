// app/add-comment/page.jsx/
"use client"
import { useState } from 'react'
import { useComment } from '../../../../context/UserCommentContext';
import { useContext } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Button from '../../../components/Button'
import PostButton from '../../../components/PostButton';

const AddComment = () => {
  const params = useParams(); // Get the URL parameters
  const postId = params.postId;
  const [isClicked, setIsClicked] = useState(false);

  // const [comment, setComment] = useContext(UserCommentContext);
  // const [comment, setComment] = useState("");
  const { comment, setComment } = useComment();

  // state comment to context/UserCommentContext.js/
  const [showComment, setShowComment] = useState(false);



  //in app/add-comment/page.jsx/, comment is data
  // from textarea, when handleClick render comment in pre tag
  // render comment
  const handleClick = () => {
    setIsClicked(true);
    // Add your logic here for what should happen when the button is clicked (e.g., sending data to a server)
    // Get the data from the textarea
    setShowComment(true);
    // You can now use the comment variable for further actions
    console.log(comment);
    router.back();
  };

  return (
    <div>AddComment
      {/* <pre>param: {param}</pre> */}
      <textarea
        id="comment"
        rows="4" cols="50"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        // className={styles.commentTextArea} 
        placeholder="Write your comment here..."></textarea>
      {/* //when click app/add-comment/page.jsx/ */}
      {/* <PostButton/> */}

  {/* add Link to app/add-comment/page.jsx/ */}
  <Link href={`/posts/${postId}`}>
  <Button label="Post" onClick={handleClick} />
</Link>
      {/* go to previos route */}
      {isClicked && <p>clicked</p>}
      {showComment && (
      <pre>comment : {comment}</pre>
    )}
    </div>
  )
}

export default AddComment