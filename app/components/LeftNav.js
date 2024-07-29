// app/components/LeftNav.js
"use client"
import styles from './LeftNav.module.css';
import TopicsCard from './TopicsCard';
import { useTopics } from '../../context/TopicsContext';
import { useLeftNav } from '../../context/LeftNavContext';
import { useEffect } from 'react';
import Link from 'next/link';

export default function LeftNav({ isOpen, toggleNav }) {
  const { topics } = useTopics();
  const { isLeftNavOpen, setIsLeftNavOpen } = useLeftNav();
  console.log("isLeftNavOpen LeftNav : ", isLeftNavOpen);

  function toggleBodyScrolling(disable) {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    toggleBodyScrolling(isLeftNavOpen);
  }, [isLeftNavOpen]);

  const handleHeaderClick = () => {
    setIsLeftNavOpen(false);
  };
  return (
    <>
      <nav className={`${styles.containerLnav} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header} onClick={handleHeaderClick}>
          <div className={styles.x}> {/* Wrap <h3> in a div with the new class */}
            <h3>X</h3>
          </div>
        </div>
        <p>TOPICS</p>
        {topics.map(topic => (
          // <div className={styles.topicsCard}>

          <Link
            key={topic}
            href={`/topics/${topic}`}
            onClick={() => setIsLeftNavOpen(false)}
          >
            <TopicsCard msg={topic} />
          </Link>
          // </div>
        ))}
      </nav>
    </>
  );
}
