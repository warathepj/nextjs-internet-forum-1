// 'use client'
import React, { useContext } from 'react';
import { useAnnounce } from '../../context/AnnounceContext'; 
import styles from './AnnounceCard.module.css';

export default function AnnounceCard() {
  const { announcements } = useAnnounce();

  return (
    <div className={styles.container}>
      <h2>Announcements</h2>
      {announcements.map((announcement) => (
        <div key={announcement.id} className={styles.card}>
          <h3>{announcement.topic}</h3>
          <p>{announcement.detail}</p>
        </div>
      ))}
    </div>
  );
}