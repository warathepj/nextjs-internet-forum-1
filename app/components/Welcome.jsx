"use client"
import { useAuth } from '../../context/AuthContext';


const Welcome = () => {
  const { isLoggedIn, setIsLoggedI, username, setUsername } = useAuth();

  return (

    <div>
      {isLoggedIn ? (
        <p>Welcome, {username}</p>
      ) : (
        <p style={{ color: 'red' }}>Please register for a better user experience.</p>

      )}
    </div>
  )
}

export default Welcome