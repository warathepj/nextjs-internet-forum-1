// app/register/page.jsx
'use client';
import { usePersistentUsername } from '../../context/PersistentUsernameContext';
import LogoutButton from '../components/LogoutButton';
import Link from 'next/link';

export default function RegisterPage() {
  const { username, setUsername } = usePersistentUsername();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering with username:', username);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Link href="/" >
        <button type="submit">Register</button>
</Link>
      </form>
    </>
  );
}
