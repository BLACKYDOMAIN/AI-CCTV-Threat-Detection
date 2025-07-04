import React from 'react';

const Card = ({ title, count, icon }) => {
  return (
    <div className="w-full p-6 text-white bg-gray-900 shadow-lg rounded-2xl md:w-1/4">
      <div className="mb-2 text-3xl">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-2xl font-bold text-green-400">{count}</p>
    </div>
  );
};

export default Card;
