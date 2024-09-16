// app/register/page.jsx/
//from app/register/page.jsx/, after register, how to make session
"use client"
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
    const router = useRouter();
    
    //from app/register/page.jsx/, how to session username to browser, use context.
    const { username, setUsername, registerUser } = useAuth();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (username.trim() === '') {
            return;
        }
        try {
            await registerUser({ username });
            setUsername(username);
            router.push('/');
        } catch (error) {
            // Handle error
        }
    }

    
// ... 

//from app/register/page.jsx/
   try {
    const response = await fetch('/api/auth/register', {
        // where to insert async
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });

    if (response.ok) { 
      router.push('/'); 
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
  // ...


    return (
        <>
            <p>Register</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}/>
                <button type="submit">Register</button>
            </form>
            <pre>username: {username}</pre>
        </>
    );
}












// // app/register/page.jsx/


// "use client"
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '../../context/AuthContext';

// export default function Register() {
//     const router = useRouter();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const { registerUser } = useAuth();

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (username.trim() === '' || password.trim() === '') {
//             return; 
//         }
//         try {
//             await registerUser({ username, password });
//             router.push('/'); 
//         } catch (error) {
//             // Handle error
//         }
//     }
       

//         return (
//             <>
//                 <p>register</p>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="username">Username:</label>
//                     <input type="text" id="username" 
//                         name="username" 
//                         value={username} 
//                         onChange={handleUsernameChange}/>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         value={password} 
//                         type="password" id="password" name="password" 
//                         onChange={handlePasswordChange}    
//                     />
//                     <button type="submit">Register</button>
//                 </form>
//                 {/*why app/register/page.jsx/ */}
// <pre>username: {username}</pre>
// <pre>password: {password}</pre>
// {/* not render */}
//             </>

//         );
// }
