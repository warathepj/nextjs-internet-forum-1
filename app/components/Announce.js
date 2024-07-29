// components/announce.js
// 'use client'
import Link from 'next/link';
import styles from './Announce.module.css';
import AnnounceCard from './AnnounceCard';
import { useMessages } from '../../context/MessageContext';

export default function Announce() {
  const { messages } = useMessages();

  return (
    <div className={styles.container}>
      <p>Announce.js</p>
      {messages.map(message => (
        <Link 
          key={message.id} 
          // href={`/announce/${message.id}?content=${encodeURIComponent(message.content)}`}
          href={`/announce/${message.id}`}
        > 
          <AnnounceCard msg={message.content} /> 
        </Link>
      ))}

      {/* <AnnounceCard /> */}
    </div>
  );
}
