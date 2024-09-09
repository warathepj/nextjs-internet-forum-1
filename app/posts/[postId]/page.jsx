// app/posts/[postId]/page.js/

"use client"
import { useParams } from 'next/navigation';
import { usePosts } from '../../../context/PostsContext';
import { useUsers } from '../../../context/UsersContext';
// import { useComment } from '../../../context/CommentContext';

import CommentCard from '@/app/components/CommentCard';
import PostCard from '../../components/PostCard';
import UserComment from '../../components/UserComment';

export default function PostsPage() {
  const params = useParams(); // Get the URL parameters
  const postId = params.postId;  // Extract the 'id'
  const { posts } = usePosts();
  const { users } = useUsers();
  const post = posts.find(post => post.id === postId);
  const poster = users.find(user => user.id === post.posterId);

  // const { comment, setComment } = useComment();
  

  console.log("users from posts/[id]: ", users) // 9/8 ok it array of object(all users)
  console.log("poster from posts/[id]: ", poster) // 9/8 undefine

  //from app/posts/[id]/page.js/
  // render poster.avatar in pre tag
  console.log("posts from posts/[id]: ", posts) 
  // 11/8 ok array of object (all), have posterId, no have avatar
  // link posts with UsersContext ref posterId
  if (!post) {
    return <div>Post not found</div>; // Handle cases where the post doesn't exist
  }
  console.log("post from posts/[id]: ", post) // ok object 
  // need posterId: "number"

  // Find users who commented on this post
  const commenters = users.filter(user =>
    user.comments.some(comment => comment.postId === postId)
  );

  // Find users who commented on this post and their comments
  const postCommenters = users.filter(user =>
    user.comments.some(comment => comment.postId === postId)
  );

  return (
    <div>
      <div>
        {/* <pre>++++Commenters on this post:++++</pre> */}
        {/* {commenters.map(user => (
          <pre key={user.id}>{user.name}</pre>
        ))} */}
        {/*  */}
        {/* <pre>++++Commenters on this post:++++</pre> */}

      </div>
      {/* <pre>-----DEBUG------</pre> */}
      {/* {users.map(user => (
        user.comments.filter(comment => comment.postId === postId).map(comment => (
          <pre key={comment.id}>
            postId: {comment.postId}
            comment: {comment.comment}
          </pre>
        ))
      ))} */}
      {/* <pre>-----new CommentCard------</pre> */}
      {/* {users.map(user => (
        user.comments.filter(comment => comment.postId === postId).map(comment => (
          <div>
            <CommentCard
              key={user.id}
              commenterName={user.name}
              avatar={user.avatar}
              comments={comment.comment}
            />
          </div>

        ))
      ))} */}
      
      {/* <pre>Post ID from posts/[id] params: {postId}</pre>

      <pre>post.posterId from posts/[id]: {post.posterId}</pre>
      <pre>post.sub: {post.sub}</pre> */}
      {/* <pre>poster.avatar: {poster.avatar}</pre> */}
      {/* <pre>poster.name: {poster.name}</pre> */}
      {/* from app/posts/[id]/page.js/ 
log context/UsersContext.js/users that users.id === post.posterId*/}

      {/* posterId */}
      

      <p>Post ID: {postId}</p>
      <PostCard id={post.id} avatar={poster.avatar} 
        name={poster.name}
        room={post.room} 
        sub={post.sub} 
        poster={post.poster}
        topic={post.topic} content={post.content} image={post.image} 
      />

      <h2>Comments:</h2>
      <UserComment/>
      <pre>@@@@@CommentCard with props@@@@@</pre>
      {users.map(user => (
        user.comments.filter(comment => comment.postId === postId).map(comment => (
          <div>
            <CommentCard
              key={user.id}
              commenterName={user.name}
              avatar={user.avatar}
              comments={comment.comment}
            />
          </div>

        ))
      ))}
      {/* {postCommenters.map(user => ( // line 48 */}
        {/* <CommentCard */}
          {/* key={user.id} */}
          {/* commenterName={user.name} */}
          {/* avatar={user.avatar} */}
        {/* // comments={user.comments.filter(comment => comment.postId === postId)}  */}
        {/* /> */}
      {/* ))} */}
      <pre>@@@@@CommentCard with props@@@@@</pre>
      
    </div>
  );
}
