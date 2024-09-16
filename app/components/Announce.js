// components/announce.js
// 'use client'
import Link from 'next/link';
import styles from './Announce.module.css';
import AnnounceCard from './AnnounceCard';
import { useMessages } from '../../context/MessageContext';
import { useAnnounce } from '../../context/AnnounceContext'; 

export default function Announce() {
  const { announcements } = useAnnounce();

  const { messages } = useMessages();

  return (
    <div className={styles.container}>
      <p>Announce</p>
      {announcements.map((announcement) => (
        <Link 
          key={announcement.id} 
          // href={`/announce/${message.id}?content=${encodeURIComponent(message.content)}`}
          href={`/announce/${announcement.id}`}
        > 
          <AnnounceCard 
            topic={announcement.topic} 
            detail={announcement.detail} 
          /> 
        </Link>
      ))}

      {/* <AnnounceCard /> */}
    </div>
  );
}
