import { useState } from 'react';
export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Implement the logic to make a POST request to your login API
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

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
      <p>Create new account!</p>
      <input type="text" name="" id="" placeholder="login" />
      <input type="text" name="" id="" placeholder="password" />
      <button onClick={handleRegister}>Register</button>
     </div>
    )
  }
  