// app/register/page.jsx/


// import styles from './Button.module.css'; 
"use client"
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '../../context/AuthContext';

export default function Register() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { registerUser } = useContext(AuthContext);

    const userData = { username, password };
    registerUser(userData);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
//when app/register/page.jsx/handleSubmit go to /
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Basic validation (add more robust validation as needed)
        if (username.trim() === '' || password.trim() === '') {
            return; // Handle validation errors
        }
        
        try {
            await registerUser(userData); // Assuming registerUser returns a promise
            router.push('/'); // Redirect to home page after successful registration
          } catch (error) {
            // Handle registration errors
          }
    }
       

        return (
            <>
                <p>register</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" 
                        name="username" 
                        value={username} 
                        onChange={handleUsernameChange}/>
                    <label htmlFor="password">Password:</label>
                    <input
                        value={password} 
                        type="password" id="password" name="password" 
                        onChange={handlePasswordChange}    
                    />
                    <button type="submit">Register</button>
                </form>
                {/*why app/register/page.jsx/ */}
<pre>username: {username}</pre>
<pre>password: {password}</pre>
{/* not render */}
            </>

        );
}
