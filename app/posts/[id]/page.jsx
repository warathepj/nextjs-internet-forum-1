// app/posts/[id]/page.js/

// from app/posts/[id]/page.js/, change this to code 
// "poster is users in UsersContext that have id === posterId in PostsContext"
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
  const poster = users.find(user => user.id === post.posterId);
  // users.comments.postId === postId
  console.log("users from posts/[id]: ", users) // 9/8 ok it array of object(all users)
  // 
  // render users.comments.postId in app/posts/[id]/page.js/pre tag
  // reference file context/UsersContext
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
      <pre>-----DEBUG------</pre>
      <div>
        <pre>++++Commenters on this post:++++</pre>
        {commenters.map(user => (
          <pre key={user.id}>{user.name}</pre>
        ))}
        {/*  */}
        <pre>++++Commenters on this post:++++</pre>

      </div>
      <pre>-----DEBUG------</pre>
      {/* fusion line 48 and 103 */}
      {users.map(user => (
        user.comments.filter(comment => comment.postId === postId).map(comment => (
          <pre key={comment.id}>
            postId: {comment.postId}
            comment: {comment.comment}
          </pre>
        ))
      ))}
      <pre>-----new CommentCard------</pre>
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
      
      <pre>Post ID from posts/[id] params: {postId}</pre>

      <pre>post.posterId from posts/[id]: {post.posterId}</pre>
      {/* <pre>poster.avatar: {poster.avatar}</pre> */}
      {/* <pre>poster.name: {poster.name}</pre> */}
      {/* from app/posts/[id]/page.js/ 
log context/UsersContext.js/users that users.id === post.posterId*/}

      {/* posterId */}
      

      <p>Post ID: {postId}</p>
      <PostCard id={post.id} avatar={poster.avatar} 
        name={poster.name}
        room={post.room}  
        poster={post.poster}
        topic={post.topic} content={post.content} image={post.image} 
      />

      <h2>Comments:</h2>
      <pre>@@@@@CommentCard with props@@@@@</pre>

      {postCommenters.map(user => ( // line 48
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
