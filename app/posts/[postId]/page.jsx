// app/posts/[postId]/page.js/

"use client"
import { useParams } from 'next/navigation';
import { usePosts } from '../../../context/PostsContext';
import { useUsers } from '../../../context/UsersContext';
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

//  console.log("users from posts/[id]: ", users) 
  // console.log("poster from posts/[id]: ", poster) 
  // console.log("posts from posts/[id]: ", posts)
  if (!post) {
    return <div>Post not found</div>; // Handle cases where the post doesn't exist
  }
//  console.log("post from posts/[id]: ", post) // ok object 

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
      <PostCard id={post.id} avatar={poster.avatar}
        name={poster.name}
        room={post.room}
        sub={post.sub}
        poster={post.poster}
        topic={post.topic} content={post.content} image={post.image}
      />

      <h2>Comments:</h2>
      <UserComment />
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
    </div>
  );
}
