// app/register/page.jsx/
//from app/register/page.jsx/ state input data in
// context/AuthContext.js/

// import styles from './Button.module.css'; 
import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { registerUser
    } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Basic validation (add more robust validation as needed)
        if (username.trim() === '' || password.trim() === '') {
            return; // Handle validation errors
        }
        const userData = { username, password };
        return (
            <>
                <p>register</p>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Register</button>
                </form>

            </>

        );
    }
}
