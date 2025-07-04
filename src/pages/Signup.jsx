// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Admin account created for ${username}`);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-rainbow bg-size-200 animate-gradient-x">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded shadow-md bg-opacity-90"
      >
        <h2 className="text-2xl font-bold text-green-400">Admin Sign Up</h2>

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
          Sign Up
        </button>

        <p className="mt-2 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-green-300 hover:underline">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
