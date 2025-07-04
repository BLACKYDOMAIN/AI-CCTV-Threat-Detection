// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/auth';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login({ username, password });

    if (result.status === 'success') {
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('userRole', 'Admin');
      navigate('/dashboard');
    } else {
      setError(result.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-rainbow bg-size-200 animate-gradient-x">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded shadow-md bg-opacity-90"
      >
        <h2 className="text-2xl font-bold text-green-400">Admin Login</h2>

        {error && <p className="text-red-500">{error}</p>}

        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700"
        >
          Login
        </button>

        <div className="text-sm text-center">
          Don&apos;t have an account? <Link to="/" className="text-green-300 hover:underline">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
