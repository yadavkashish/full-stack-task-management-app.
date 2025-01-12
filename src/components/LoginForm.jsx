// src/component/loginform.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock credentials for testing
    const validUsername = 'testuser';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      const token = 'mocked-jwt-token'; // Mocked token for testing
      localStorage.setItem('jwtToken', token);
      onLogin(token); // Call onLogin with the mocked token
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleForgetPassword = () => {
    setShowHint(true);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="p-4 bg-white shadow rounded"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    >
      <h2 className="text-white text-3xl font-bold mb-4">Login</h2>
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Login
      </button>
      <button
        type="button"
        onClick={handleForgetPassword}
        className="text-white text-black-500 mt-2 p-2 underline"
      >
        Forgot Password?
      </button>
      {showHint && (
        <p className="text-gray-700 mt-2">
          <strong>Hint:</strong> Username - <code>testuser</code>, Password - <code>password123</code>
        </p>
      )}
    </form>
  );
};

export default LoginForm;
