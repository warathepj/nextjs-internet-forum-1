// app/topics/[roomId]/page.js
'use client'
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useTopics } from '../../../context/TopicsContext';
import { usePosts } from '../../../context/PostsContext';
import { useUsers } from '../../../context/UsersContext';
import Announce from '../../components/Announce';
import PostCard from '@/app/components/PostCard';

export default function TopicPage() {
  const params = useParams();
  const { topics } = useTopics();
  const { posts } = usePosts();
  const { users } = useUsers();
  const searchParams = useSearchParams();
  const param = params.roomId;
  console.log("param from [roomId]:", param);
  // 12/8 ok
  // const topic = topics.find(t => t === topicId);
  console.log("posts from roomId:", posts);
  // 14/8 ok array of object all post
  console.log("users from roomId:", users);
  // 16/8 ok array of object all
  //   const messageContent = decodeURIComponent(searchParams.get('content')); 
  const topicPosts = posts.filter((post) => post.room === param);
  console.log("topicPosts from roomId:", topicPosts);

  //from app/topics/[id]/page.js, user is in users, log user that have
  // id === topicPosts.posterId
  // Assuming you have topicPosts and users available in this scope

  //from app/topics/[id]/page.js
  topicPosts.forEach((post) => {
    const poster = users.find((user) => user.id === post.posterId);
    if (poster) {
      console.log("poster from roomId:", poster);
      // log separate user (2 object)
    }
  });
  // render poster.id in pre tag

  // const poster = users.filter((user) => user.id === topicPosts.posterId); 
  // console.log("poster from roomId:", poster);


  return (
    <>
      {/* <pre>----------[roomId] DEBUG start----------------</pre>
      <pre>topicId(params.roomId): {params.roomId}</pre>
      <pre>....poster.id...</pre> */}

      <div>
        {/*topicPosts is array of object of post related to this topic  */}
        {topicPosts.map((post) => {
          const poster = users.find((user) => user.id === post.posterId);
          const topicPostId = post.id;
          const sub = post.sub;
          const avatar = poster.avatar;

          // const avatar = "https://plus.unsplash.com/premium_photo-1664300778169-8a45bfad23be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
          const room = post.room;
          const topic = post.topic;
          const content = post.content;
          const posterId = post.posterId;
          const image = post.image;

          return (
            <div key={post.id}>
              {/* {poster && <pre>poster.id: {poster.id}</pre>} */}
              {/* <pre>topicPostId: {topicPostId}</pre> */}
              {/* <pre>sub: {sub}</pre> */}
              {/* <pre>avatar: {avatar}</pre> */}
              {/* {poster && <pre>poster.avatar: {poster.avatar}</pre>} */}
              {/* {topicPosts && <pre>poster.id: {poster.id}</pre>}  */}
              {/* ... other JSX for post content ... */}
        <Link href={`/posts/${post.id}`}>

              {poster && 
                <PostCard
                  id={post.id}
                  avatar={avatar}
                  sub={sub}
                  topic={topic}
                  content={content} 
                  posterId={posterId} 
                  image={image} 
                />
              }
        </Link>

            </div>

          );
        })}
      </div>


      {/* <pre>....poster.id...</pre> */}
      {/* <pre>All Posts:</pre>  */}
      {/*from app/topics/[id]/page.js, modify */}
      {/* {posts.map(post => (
        <pre key={post.id}>
          {JSON.stringify(post, null, 2)} {/* Nicely formatted JSON output */}
      {/* </pre> */}
      {/* // ))} */}
      {/* <pre>.....</pre> */}
      {/* to render only posts that have room === params.roomId */}
      {/* <pre>Posts Related to this Topic:</pre> */}
      {/* {posts.map(post => (
        post.room === params.roomId && (
          <pre key={post.id}>
            {JSON.stringify(post, null, 2)}
          </pre>
        )
      ))} */}

      {/* <pre>.......</pre> */}
      {/*from app/topics/[id]/page.js, posts and users, 
      render users.name in pre tag
      where users.id === posts.posterId */}



      <div>
        {/* <pre>param: {param}</pre> */}
        {/* {topicPosts.map((post) => { */}
        {/* const poster = users.find((user) => user.id === post.posterId); */}
        {/* return ( */}
        {/* <div key={post.id}> */}
        {/* {poster && <pre>{poster.name}</pre>} */}
        {/* {poster && <pre>{poster.avatar}</pre>} */}
        {/* {poster && */}
        {/* <PostCard  */}
        {/* id={post.id}  */}
        {/* avatar={poster.avatar}  */}
        {/* //     room={room}  */}
        {/* //     topic={topic}  */}
        {/* //     content={content}  */}
        {/* //     posterId={posterId}  */}
        {/* //     image={image}  */}
        {/* />} */}
        {/* </div> */}
        {/* ); */}
        {/* })} */}
      </div>




      {/* <pre>.......</pre>

      <pre>users:</pre> */}
      {/* {users.map(user => (
        <pre key={user.id}>
          {JSON.stringify(user, null, 2)}
        </pre>
      ))} */}

      {/* <pre>.......</pre>
      <pre>Posts Related to this Topic:</pre> */}
      {/* {posts.map(post => (
        post.room === params.roomId && (
          // <pre>{post.id}</pre>
          // <PostCard key={post.id} posterId={post.posterId} /> 

          //   <Link key={post.id} href={`/posts/${post.id}`} className={styles.postCard}>
          <Link key={post.id} href={`/posts/${post.id}`}>
            <pre>poster: </pre>
            <PostCard
              id={post.id}
            // avatar={avatar} 
            //     room={room} 
            //     topic={topic} 
            //     content={content} 
            //     posterId={posterId} 
            //     image={image} 
            />
          </Link>
        )
      ))} */}
      {/* <pre>.....</pre>

      <pre>----------[roomId] DEBUG end--------------</pre>
      <h3>{params.roomId}</h3>

      <h1>Topic Page</h1> */}
      {/* <p>topic ID: {topicId}</p> */}
      {/* {topic && <p>topic content: {topic}</p>}  */}
      {/* how to props post.posterId from app/topics/[id]/page.js */}
      {/* to app/components/PostCard.js/ */}
      {/* ... existing code ... */}
      {/* <h2>Posts Related to this Topic:</h2> */}
      {/* {posts.map(post => (
        post.room === topicId && (
          <PostCard key={post.id} posterId={post.posterId} /> 
        )
      ))} */}
      {/* ... existing code ... */}
      {/* ... existing code ... */}
      {/* <h2>Posts Related to this Topic:</h2> */}
      {/* {posts.map(post => (
        post.room === topicId && (
          <pre key={post.id}>{post.posterId}</pre> 
        )
      ))} */}
      {/* ... existing code ... */}
      {/* ... existing code ... */}
      {/* <h2>Posts Related to this Topic:</h2> */}
      {/* {posts.map(post => (
        post.id === topicId && ( 
          <pre key={post.id}>{post.posterId}</pre> 
        )
      ))} */}
      {/* ... existing code ... */}
      {/* <PostCard /> */}
      {/* ... existing code ... */}
      {/* <h2>Posts Related to this Topic:</h2> */}
      {/* from this code */}
      {/* {posts.map(post => (
        post.room === topicId && (
          <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre> 
        )
      ))} */}
      {/* result is */}
      {/* {
  "id": "g1",
  "room": "Gadgets",
  "posterId": 2,
  "topic": "Ask people who use bluetooth headphones. Have you ever dropped them on the floor?",
  "content": "",
  "image": "https://images.unsplash.com/photo-1645020089405-ee44c2cd7c58?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
} */}



      {/*       
      <pre>posts {[posts]}</pre>
      <pre>{posts.content}</pre> */}

      {/* {posts.map(post => (
        post.id === topicId && (
          <pre key={post.id}>{post.id}</pre>
        )
      ))} */}

      <Announce />
    </>
  );
}
