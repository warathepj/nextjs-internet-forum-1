import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './AnnounceCard.module.css';

export default function AnnounceCard({ topic, detail }) {

  return (
    <div className={styles.container}>
      <h3>{topic}</h3>
      <p>{detail}</p>
    </div>
  );
}