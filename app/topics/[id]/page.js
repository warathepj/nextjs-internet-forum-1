// app/topics/[id]/page.js
'use client'
import { useParams, useSearchParams } from 'next/navigation';
import { useTopics } from '../../../context/TopicsContext';
import { usePosts } from '../../../context/PostsContext';
import Announce from '../../components/Announce';
import PostCard from '@/app/components/PostCard';

export default function TopicPage() {
  const params = useParams();
  const { topics } = useTopics();
  const { posts } = usePosts();
  const searchParams = useSearchParams();
  const topicId = params.id;
  const topic = topics.find(t => t === topicId);
  console.log("posts:", posts);
//   const messageContent = decodeURIComponent(searchParams.get('content')); 

  return (
    <>
      <h1>Topic Page</h1>
      <p>topic ID: {topicId}</p>
      {topic && <p>topic content: {topic}</p>} 
{/* how to props post.posterId from app/topics/[id]/page.js */}
{/* to app/components/PostCard.js/ */}
{/* ... existing code ... */}
<h2>Posts Related to this Topic:</h2>
      {posts.map(post => (
        post.room === topicId && (
          <PostCard key={post.id} posterId={post.posterId} /> 
        )
      ))}
      {/* ... existing code ... */}
{/* ... existing code ... */}
<h2>Posts Related to this Topic:</h2>
      {posts.map(post => (
        post.room === topicId && (
          <pre key={post.id}>{post.posterId}</pre> 
        )
      ))}
      {/* ... existing code ... */}
{/* ... existing code ... */}
<h2>Posts Related to this Topic:</h2>
      {posts.map(post => (
        post.id === topicId && ( 
          <pre key={post.id}>{post.posterId}</pre> 
        )
      ))}
      {/* ... existing code ... */}
{/* <PostCard /> */}
{/* ... existing code ... */}
<h2>Posts Related to this Topic:</h2>
{/* from this code */}
      {posts.map(post => (
        post.room === topicId && (
          <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre> 
        )
      ))}
      {/* result is */}
      {/* {
  "id": "g1",
  "room": "Gadgets",
  "posterId": 2,
  "topic": "Ask people who use bluetooth headphones. Have you ever dropped them on the floor?",
  "content": "",
  "image": "https://images.unsplash.com/photo-1645020089405-ee44c2cd7c58?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
} */}
{/* how to render only posterId in pre tag */}
      {/* ... existing code ... */}
{/* ... existing code ... */}
<h2>All Posts:</h2> 
      {posts.map(post => (
        <pre key={post.id}>
          {JSON.stringify(post, null, 2)} {/* Nicely formatted JSON output */}
        </pre>
      ))}
      {/* ... existing code ... */}
{/* ... existing code ... */}
<h2>Posts Related to this Topic:</h2>
      {posts.map(post => (
        post.id === topicId && (
          <pre key={post.id}>topic {post.topic}</pre> 
        )
      ))}
<h2>Posts Related to this Topic:</h2>

      {/* ... existing code ... */}
      {/* ... existing code ... */}
      {/* <pre>id</pre>
      <pre>posts {[posts]}</pre>
      <pre>{posts.content}</pre>

      {posts.map(post => (
        post.id === topicId && (
          <pre key={post.id}>{post.id}</pre>
        )
      ))}
      <pre>id</pre> */}

      {/* ... existing code ... */}
      <Announce />
    </>
  );
}
