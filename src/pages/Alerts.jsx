// src/pages/AlertLogs.jsx
import React, { useState } from 'react';

const sampleAlerts = [
  { id: 1, type: 'Intrusion', time: '2025-06-25 14:23', zone: 'Gate A', status: 'Verified' },
  { id: 2, type: 'Loitering', time: '2025-06-25 15:05', zone: 'Gate B', status: 'False' },
  { id: 3, type: 'Weapon Detected', time: '2025-06-25 15:45', zone: 'Parking', status: 'Verified' },
];

const AlertLogs = () => {
  const [alerts] = useState(sampleAlerts);
  const [filter, setFilter] = useState({ type: '', status: '', zone: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredAlerts = alerts.filter((alert) => {
    return (
      (!filter.type || alert.type === filter.type) &&
      (!filter.status || alert.status === filter.status) &&
      (!filter.zone || alert.zone === filter.zone)
    );
  });

  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h1 className="mb-4 text-2xl font-bold text-green-400">Alert Logs</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
        <select name="type" onChange={handleFilterChange} className="p-2 bg-gray-800 rounded">
          <option value="">All Types</option>
          <option value="Intrusion">Intrusion</option>
          <option value="Loitering">Loitering</option>
          <option value="Weapon Detected">Weapon Detected</option>
        </select>
        <select name="status" onChange={handleFilterChange} className="p-2 bg-gray-800 rounded">
          <option value="">All Status</option>
          <option value="Verified">Verified</option>
          <option value="False">False</option>
        </select>
        <select name="zone" onChange={handleFilterChange} className="p-2 bg-gray-800 rounded">
          <option value="">All Zones</option>
          <option value="Gate A">Gate A</option>
          <option value="Gate B">Gate B</option>
          <option value="Parking">Parking</option>
        </select>
      </div>

      {/* Alert Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left bg-gray-800 rounded">
          <thead className="text-green-400 bg-gray-700">
            <tr>
              <th className="p-2">Type</th>
              <th className="p-2">Time</th>
              <th className="p-2">Zone</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlerts.map((alert) => (
              <tr key={alert.id} className="border-t border-gray-600 hover:bg-gray-700">
                <td className="p-2">{alert.type}</td>
                <td className="p-2">{alert.time}</td>
                <td className="p-2">{alert.zone}</td>
                <td className="p-2">{alert.status}</td>
              </tr>
            ))}
            {filteredAlerts.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-400">
                  No alerts found for selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertLogs;
