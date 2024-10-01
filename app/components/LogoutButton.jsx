
// app/components/LogoutButton.jsx
'use client';
import { usePersistentUsername } from '../../context/PersistentUsernameContext';
import Button from './Button';

export default function LogoutButton() {
  const { logout } = usePersistentUsername();

  const handleLogout = () => {
    logout();
    console.log('User logged out');
  };

  return (

    <Button label="Logout" onClick={handleLogout} />
  );
}
