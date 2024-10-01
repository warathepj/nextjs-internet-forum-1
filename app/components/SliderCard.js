// app/components/SliderCard.js

"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePosts } from '../../context/PostsContext';
// import { useVotes } from '../VoteContext'; // Adjust the path if necessary
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SliderCard.module.css';

function SliderCard() {
  const { posts: postsWithVotes, posts } = usePosts();
  //console.log("postsWithVotes: ", postsWithVotes);// array of object have votes

  const post = posts.find(post => post.id === "v1");
//  console.log("post from SliderCard: ", post)// ok it object

  const topThree = postsWithVotes
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3)
    .map(post => ({
      id: post.id,
      topic: post.topic,
      votes: post.votes,
      image: post.image
    }));

  //console.log("topThree from SliderCard: ", topThree)// ok it object

  //console.log("post.name from SliderCard: ", post.name)// 
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
      <Slider {...settings}>
        <Link href={`/posts/${topThree[0].id}`}>
          <div>
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
       
      </Slider>
    </div>
  );
}

export default SliderCard;
