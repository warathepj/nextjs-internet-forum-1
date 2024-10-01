// app/components/Login.js/

"use client"
import { useState, useContext } from 'react';
import { useLogin } from '../../context/LoginContext';
import AuthContext from '../../context/AuthContext';
import { PasswordContext } from '../../context/PasswordContext';
import { usePassword } from '../../context/PasswordContext';
import styles from './Login.module.css';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [user, setUser] = useState('User Name');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { toggleLogin, setIsLoginOpen } = useLogin();
  const { toggleLoginButton, passwords } = usePassword();
  const { username, password, login, logout } = useAuth();
  console.log("username from login", username);
  console.log("password from login", password);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  console.log("isLoggedIn from login", isLoggedIn);

  // console.log("registerUser from login", registerUser);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    if (user === username && pass === password) {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.x} onClick={toggleLogin}>
          <h1>X</h1>
        </div>
      </div>

      {isLoggedIn && (
        <pre>logged in!!</pre>
      )}
      {!isLoggedIn && (
        <pre>not logged in!!</pre>
      )}

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Username:</label>
          <input
            type="text"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
      <a href="/register">Register</a>
    </div>
  );
}
