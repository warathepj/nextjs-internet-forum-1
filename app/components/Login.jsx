// app/components/Login.js/

//from app/register/page.jsx/ and
// context/AuthContext.js/, console.log("registerUser from login", registerUser)
//in app/components/Login.js/

import { useState, useContext } from 'react';
import { useLogin } from '../../context/LoginContext';
import AuthContext from '../../context/AuthContext';
import { PasswordContext } from '../../context/PasswordContext';
import { usePassword } from '../../context/PasswordContext';
import styles from './Login.module.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { toggleLogin } = useLogin();
  const { toggleLoginButton, passwords } = usePassword();
  const { registerUser } = useContext(AuthContext);

  console.log("registerUser from login", registerUser);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Here you would typically make an API call to your backend to authenticate the user.

    // For now, let's just log the submitted credentials.
    console.log('Submitted credentials:', { username, password });
    // if app/components/Login.js/
    if (passwords.includes(password)) {
      // Valid password
      console.log('Login successful!');
      setErrorMessage(''); // Clear any previous error message
      setUsername('');
      setPassword('');
      toggleLogin(); // Close the login modal
      toggleLoginButton();
    } else {
      // Invalid password
      setErrorMessage('Incorrect password');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.x} onClick={toggleLogin}>
          <h1>X</h1>
        </div>
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}

            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
