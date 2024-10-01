// app/components/Nav
"use client"
import styles from './Nav.module.css';
import IcSharpMenu from './(icon)/IcSharpMenu';
import ChatProcessing from './(icon)/ChatProcessing';
import Button from './Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { usePersistentUsername } from '../../context/PersistentUsernameContext';

import { useLeftNav } from '../../context/LeftNavContext';
import { useLogin } from '../../context/LoginContext';
import { usePassword } from '../../context/PasswordContext';
import AddComment from './AddComment';
import LogoutButton from './LogoutButton';


export default function Nav() {
  const { username } = usePersistentUsername();
  const buttonText = "Log In";
  const router = useRouter();
  const { isLeftNavOpen, setIsLeftNavOpen } = useLeftNav();
  // console.log("isLeftNavOpen : ", isLeftNavOpen);
  const handleMenuClick = () => {
    setIsLeftNavOpen(true);
  };
  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  return (
    <>
      <nav className={styles.container}>
        <IcSharpMenu className={styles.icon} onClick={handleMenuClick} />
        <ChatProcessing className={styles.chatProcessing} onClick={() => router.push('/')} />
        <Link href="/register">
          {!username ? <Button label="Register" /> : <LogoutButton />}
        </Link>
      </nav>
    </>
  );
}
