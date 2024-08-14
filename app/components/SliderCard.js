// app/components/SliderCard.js
//from app/components/SliderCard.j renders topThree[0] 
// in pre tag, data to render are id and votes.
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { usePosts } from '../../context/PostsContext';
// app/components/SliderCard.js
import { useVotes } from '../VoteContext'; // Adjust the path if necessary

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SliderCard.module.css';

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1352519522.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3615591365.

function SliderCard() {
  const { posts: postsWithVotes, posts } = usePosts();
  console.log("postsWithVotes: ", postsWithVotes);// array of object have votes
  //from app/components/SliderCard.js/postsWithVotes,
  // make new array of object of Top three most votes,
  // object have only id, topic, votes, image.

  const post = posts.find(post => post.id === "v1");
  console.log("post from SliderCard: ", post)// ok it object

  const topThree = postsWithVotes
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3)
    .map(post => ({
      id: post.id,
      topic: post.topic,
      votes: post.votes,
      image: post.image
    }));

  console.log("topThree from SliderCard: ", topThree)// ok it object


  // log postsWithVotes in app/components/SliderCard.js.
  // postsWithVotes is from context/PostsContext

  //in app/components/SliderCard.js, list all posts.id in pre tag


  //console.log("post.name from SliderCard: ", post.name)// 
  // why error ""
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className={styles.container}>


      {/* <pre>
        {topThree.map(post => (
          <div key={post.id} className={styles.test}>

            <pre>{post.id}</pre>
            <pre>{post.votes}</pre>
          </div>
        ))}
      </pre> */}

      <Slider {...settings}>
{/* //when click on app/components/SliderCard.js */}
<Link href={`/posts/${topThree[0].id}`}> 
        <div>

          {/* go to route /posts/topThree[0].id*/}
          {topThree.length > 0 && (
            <div key={topThree[0].id} className={styles.slide}>
              <img src={topThree[0].image} alt="Post Image"
                className={styles.img} />
              <p className={styles.topic}>{topThree[0].topic}</p>

              <p>votes: {topThree[0].votes}</p>
            </div>
          )}
        </div>
        </Link>

        <Link href={`/posts/${topThree[1].id}`}> 
        <div>
          {topThree.length > 0 && (
            <div key={topThree[1].id} className={styles.slide}>
              <img src={topThree[1].image} alt="Post Image"
                className={styles.img} />
              <p className={styles.topic}>{topThree[1].topic}</p>
              <p>votes: {topThree[1].votes}</p>
            </div>
          )}
        </div>
        </Link>

        <Link href={`/posts/${topThree[2].id}`}> 
        <div>
          {topThree.length > 0 && (
            <div key={topThree[2].id} className={styles.slide}>
              <img src={topThree[2].image} alt="Post Image"
                className={styles.img} />
              <p className={styles.topic}>{topThree[2].topic}</p>
              <p>votes: {topThree[2].votes}</p>
            </div>
          )}
        </div>
        </Link>
        {/* //in app/components/SliderCard.js, when click  */}

        {/* <div>
          {posts.map(post => (
            <div key={post.id}>
              <img src={post.image} alt="Post Image"
                className={styles.img} />
            </div>
          ))}
        </div> */}

        {/* <div >
          {post ? (
            <Link href="/posts/v1">
            <img src={post.image} alt="Post Image" className={styles.img} />
            </Link>
          ) : (
            "Post not found."
          )}
        </div> */}
        {/* go to /posts/v1 */}
        {/* <div>
          <p className={styles.testLabel}>test</p>
          <img
            className={styles.img}
            src="https://plus.unsplash.com/premium_photo-1720760948879-d10510c7049c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slider Image 1"
          />
        </div> */}
        {/* //from context/PostsContext.js/ render posts.topic that*/}
        {/* id: "v1", render in app/components/SliderCard.js/pre tag*/}

        {/* <div>
          <img
            className={styles.img}
            src="https://plus.unsplash.com/premium_photo-1661962901887-a41c1e30d6d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slider Image2"
          />
        </div> */}
        {/* <div>
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slider Image 3"
          />
        </div> */}
      </Slider>
    </div>
  );
}

export default SliderCard;
