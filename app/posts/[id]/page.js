// app/posts/[id]/page.js/

// from app/posts/[id]/page.js/ find comment in context/UsersContext.js/
//  that have comments/postId === params.id and render in p tag
"use client"
import { useParams } from 'next/navigation';
import { usePosts } from '../../../context/PostsContext';
import { useUsers } from '../../../context/UsersContext';
import CommentCard from '@/app/components/CommentCard';
import PostCard from '../../components/PostCard';



export default function PostsPage() {
  const params = useParams(); // Get the URL parameters
  const postId = params.id;  // Extract the 'id'
  const { posts } = usePosts();
  const { users } = useUsers();
  const post = posts.find(post => post.id === postId); 
  if (!post) {
    return <div>Post not found</div>; // Handle cases where the post doesn't exist
  }

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
      {/* ... other page content ... */}
      <h2>Commenters on this post:</h2>
      {commenters.map(user => (
        <p key={user.id}>{user.name}</p> 
      ))}
      <h2>Commenters on this post:</h2>

    </div>

      <p>Post ID: {postId}</p>
      <PostCard id={post.id} avatar={post.avatar} room={post.room}  
        poster={post.poster}
        topic={post.topic} content={post.content} image={post.image} 
      />

      <h2>Comments:</h2>
    <pre>@@@@@CommentCard with props@@@@@</pre>

    {postCommenters.map(user => ( 
      <CommentCard 
        key={user.id} 
        commenterName={user.name} 
        avatar={user.avatar}
        // comments={user.comments.filter(comment => comment.postId === postId)} 
      /> 
    ))}
    <pre>@@@@@CommentCard with props@@@@@</pre>
    <pre>//////CommentCard no props////////</pre>
      <CommentCard />  
    <pre>////////CommentCard no props/////////</pre>
      {/* <PostCard id={postId} avatar={avatar} /> */}
      {/* ... other content for your PostsPage ... */}
    </div>
  );
}
