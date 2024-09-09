// 'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import { useAnnounce } from '../../context/AnnounceContext'; 
import styles from './AnnounceCard.module.css';

export default function AnnounceCard() {
  const { announcements } = useAnnounce();

  return (
    <div className={styles.container}>
      <h2>Announcements</h2>
      {announcements.map((announcement) => (
        <Link 
        key={announcement.id} 
        // href={`/announce/${message.id}?content=${encodeURIComponent(message.content)}`}
        href={`/announce/${announcement.id}`}
      > 
        <div key={announcement.id} className={styles.card}>
          <h3>{announcement.topic}</h3>
          <p>{announcement.detail}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}