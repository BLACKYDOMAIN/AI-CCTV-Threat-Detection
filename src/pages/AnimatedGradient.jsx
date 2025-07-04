import React from 'react';

const AnimatedGradient = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
      <h1 className="text-4xl font-bold">Welcome to the Admin Panel</h1>
    </div>
  );
};

export default AnimatedGradient;