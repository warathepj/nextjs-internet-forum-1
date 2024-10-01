// app/page.jsx/
'use client'
import Link from 'next/link';
import Announce from './components/Announce';
import TopicsCard from './components/TopicsCard';
import LeftNav from './components/LeftNav';
import Login from './components/Login';
import SliderCard from './components/SliderCard';
import Trend from './components/Trend';
import LoginAlert from './components/LoginAlert';

import { useState, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { useMessages } from '../context/MessageContext';
import { useTopics } from '../context/TopicsContext';
import { useLeftNav } from '../context/LeftNavContext';
import { useLogin } from '../context/LoginContext';
import { PasswordProvider } from '../context/PasswordContext';
import { usePassword } from '../context/PasswordContext';
import { useUsers } from '../context/UsersContext';
import { UsersProvider } from '../context/UsersContext';
import { UsersContext } from '../context/UsersContext';

import styles from './page.module.css'
import LoginWarning from './components/LoginWarning';

export default function Home() {
  const { messages } = useMessages();
  const { topics } = useTopics();
  const { isLeftNavOpen, setIsLeftNavOpen } = useLeftNav();
  // console.log("isLeftNavOpen : ", isLeftNavOpen);
  const { isLoginOpen, setIsLoginOpen } = useLogin();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  // console.log("////////////isLoggedIn////////// : ", isLoggedIn);
  // const { passwords } = useContext(PasswordContext);
  const { passwords } = usePassword();
  // console.log("passwords : ", passwords);
  const { users } = useUsers();
  // In your parent component or a utility function
  function toggleBodyScrolling(disable) {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Restore normal scrolling
    }
  }

  // Call this function when the LeftNav opens/closes
  // For example, inside the toggleNav function:
  function toggleNav() {
    setIsLeftNavOpen(!isLeftNavOpen);
    toggleBodyScrolling(!isLeftNavOpen); // Pass the opposite of the current state
  }

  return (
    <>
      <div className={styles.loginAlert}>
      </div>
      {isLeftNavOpen && (
        <div className="overlay"></div>
      )}
      <div className={styles.sliderCard}>
        <div className={styles.leftNav}>
          <LeftNav isOpen={isLeftNavOpen} />
        </div>
        <SliderCard />
      </div>

      <Trend />
      <Announce />
     
      <h4>TOPICS</h4>
      {topics.map(topic => (
        <Link
          key={topic}
          href={`/topics/${topic}`}
        >
          <TopicsCard msg={topic} />
        </Link>
      ))}
    </>
  );
}


