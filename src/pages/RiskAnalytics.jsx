// src/pages/RiskAnalytics.jsx
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const pieData = [
  { name: 'Intrusion', value: 45 },
  { name: 'Loitering', value: 30 },
  { name: 'Weapon Detection', value: 15 },
  { name: 'Other', value: 10 },
];

const barData = [
  { zone: 'Zone A', Intrusion: 12, Loitering: 5 },
  { zone: 'Zone B', Intrusion: 8, Loitering: 10 },
  { zone: 'Zone C', Intrusion: 5, Loitering: 7 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const RiskAnalytics = () => {
  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h2 className="mb-4 text-2xl font-bold text-green-400">Risk Analytics</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-4 bg-gray-800 rounded shadow">
          <h3 className="mb-2 text-lg font-semibold">Threat Frequency by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-gray-800 rounded shadow">
          <h3 className="mb-2 text-lg font-semibold">Zone-wise Intrusion vs Loitering</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="zone" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Intrusion" fill="#00C49F" />
              <Bar dataKey="Loitering" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalytics;
