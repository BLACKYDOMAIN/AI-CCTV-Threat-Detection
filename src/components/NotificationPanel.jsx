import React, { useState, useEffect } from 'react';

const NotificationPanel = () => {
  const [alerts, setAlerts] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    // Simulate real-time alerts (replace with WebSocket or API polling)
    const interval = setInterval(() => {
      const newAlert = {
        type: ['Intrusion', 'Loitering', 'Weapon'][Math.floor(Math.random() * 3)],
        time: new Date().toLocaleTimeString(),
      };
      setAlerts(prev => [newAlert, ...prev.slice(0, 4)]); // keep last 5 alerts

      if (soundEnabled) {
        const audio = new Audio('/Notification.mp3'); // Ensure this file is in public folder
        audio.play();
      }
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="w-full max-w-md p-4 text-white bg-gray-900 rounded shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-green-400">Live Notifications</h2>
        <button
          onClick={toggleSound}
          className={`px-3 py-1 text-sm rounded ${soundEnabled ? 'bg-red-600' : 'bg-blue-600'} hover:opacity-80`}
        >
          {soundEnabled ? 'Sound: On' : 'Sound: Off'}
        </button>
      </div>

      <ul className="space-y-2 overflow-y-auto text-sm max-h-60">
        {alerts.map((alert, index) => (
          <li key={index} className="p-2 bg-gray-800 border border-green-600 rounded">
            <strong>{alert.type}</strong> at {alert.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
