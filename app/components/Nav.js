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
import { useLeftNav } from '../../context/LeftNavContext';
import { useLogin } from '../../context/LoginContext';
import { usePassword } from '../../context/PasswordContext';
import AddComment from './AddComment';


export default function Nav() {
  const { username } = useAuth();

  // const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  const buttonText = "Log In";
  const router = useRouter();
  const { isLeftNavOpen, setIsLeftNavOpen } = useLeftNav();
  console.log("isLeftNavOpen : ", isLeftNavOpen);
  // const { isCreateButtonOpen } = usePassword();
  // console.log("isCreateButtonOpen : ", isCreateButtonOpen);
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
        {/* <IcSharpMenu className={styles.icon} onClick={toggleLeftNav} /> */}
        <ChatProcessing className={styles.chatProcessing} onClick={() => router.push('/')} />
        {/* hide app/components/Nav */}
        {/* {isLoginButtonOpen && ( // Use renamed state in conditional rendering
           <Button label="Log In" onClick={handleLoginClick} /> 
          )}  */}

{/* //add Link to app/components/Nav */}
{/* //initial show app/components/Nav/ */}
<Link href="/register">
  { !username && <Button label="Register" /> }
  {/* when isLoggedin is true, hide Button */}
</Link>
          {/* to go to /register */}
        {/* {isCreateButtonOpen && ( // Use renamed state in conditional rendering */}
          {/* <AddComment /> */}
        {/* )} */}
        
      </nav>


    </>
  );
}
