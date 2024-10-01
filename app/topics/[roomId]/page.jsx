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
  // console.log("param from [roomId]:", param);
  // console.log("posts from roomId:", posts);
  // console.log("users from roomId:", users);
  const topicPosts = posts.filter((post) => post.room === param);
  // console.log("topicPosts from roomId:", topicPosts);
  topicPosts.forEach((post) => {
    const poster = users.find((user) => user.id === post.posterId);
    if (poster) {
      // console.log("poster from roomId:", poster);
    }
  });

  return (
    <>
      <div>
        {topicPosts.map((post) => {
          const poster = users.find((user) => user.id === post.posterId);
          const topicPostId = post.id;
          const sub = post.sub;
          const avatar = poster.avatar;
          const room = post.room;
          const topic = post.topic;
          const content = post.content;
          const posterId = post.posterId;
          const image = post.image;

          return (
            <div key={post.id}>
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
      <Announce />
    </>
  );
}
