// app/announce/[id]/page/

'use client'

import React, { useContext } from 'react';

import { useAnnounce } from '../../../context/AnnounceContext'; 
import styles from './page.module.css';

export default function Page({ params }) {
  const { announcements } = useAnnounce();

  const announcement = announcements.find((announcement) => announcement.id === params.id);
  if (!announcement) {
    return <div>Announcement not found</div>;
  }
  return (
    <div>
      <h1>{announcement.topic}</h1>
      <h2>{announcement.title}</h2>
      <p>{announcement.content}</p>
    </div>
  );
}
