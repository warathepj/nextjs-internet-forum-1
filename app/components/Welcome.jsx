"use client"
import Link from 'next/link';
import { useContext } from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { usePersistentUsername } from '../../context/PersistentUsernameContext';
import Button from './Button';
import styles from './Welcome.module.css'

const Welcome = () => {
  const { username } = usePersistentUsername();

  return (
    <div>
      {username ? (
        <div>
          <p>Welcome, {username}</p>
          <div className={styles.container}>
            <img
              className="avatar"
              src="https://images.unsplash.com/photo-1654994983024-335d21549695?q=80&w=70&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
            />
            <div className={styles.button}>
              <Link href="/write">
                <Button
                  label="Write Post"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ color: 'red' }}>Please register for a better user experience.</p>
      )}
    </div>
  )
}

export default Welcome