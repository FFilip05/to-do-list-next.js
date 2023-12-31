"use client"
import { useState } from 'react';
export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email})
        // body: JSON.stringify({ email, password }),
      });
      console.log(response)
      if (response.ok) {
        // Login successful, handle the response accordingly (e.g., redirect)
        console.log('Login successful');
      } else {
        // Login failed, handle the error (e.g., display an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }

  };

    return (
     <div className="flex flex-col items-center">
      <p>Login to your account!</p>
      <input type="text" value={email} id="" placeholder="login" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={password} id="" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login!</button>
     </div>
    )
  }
  