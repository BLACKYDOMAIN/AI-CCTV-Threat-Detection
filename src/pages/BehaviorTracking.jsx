// src/pages/BehaviorTracking.jsx
import React from 'react';

const motionTimeline = [
  { time: '10:00 AM', zone: 'Gate A', activity: 'Loitering' },
  { time: '10:05 AM', zone: 'Gate A', activity: 'Intrusion' },
  { time: '10:10 AM', zone: 'Parking', activity: 'Unusual Motion' },
];

const BehaviorHistory = () => {
  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h1 className="mb-6 text-2xl font-bold text-green-400">Behavior History & Tracking</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Heatmap Section */}
        <div className="p-4 bg-gray-800 rounded shadow">
          <h2 className="mb-3 text-lg">Suspicious Movement Heatmap</h2>
          <img
            src="/heatmap-placeholder.jpg"
            alt="Heatmap of suspicious motion"
            className="w-full max-w-full border border-green-500 rounded"
          />
        </div>

        {/* Timeline Section */}
        <div className="p-4 bg-gray-800 rounded shadow">
          <h2 className="mb-3 text-lg">Motion Timeline</h2>
          <ul className="space-y-3">
            {motionTimeline.map((event, idx) => (
              <li key={idx} className="pl-3 border-l-4 border-green-500">
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-white">{event.time}</span> - {event.activity} in{' '}
                  <span className="text-green-300">{event.zone}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BehaviorHistory;
