// src/pages/SystemSettings.jsx
import React, { useState } from 'react';

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    sensitivity: 5,
    alertFrequency: 'Medium',
    zoneRiskLevels: 'Zone A: Medium, Zone B: Low',
    twilioKey: '',
    telegramBotToken: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Settings:', settings);
    alert('Settings saved! (This is a placeholder)');
  };

  return (
    <div className="max-w-2xl p-6 mx-auto min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h1 className="mb-6 text-2xl font-bold text-green-400">System Settings</h1>

      <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-gray-800 rounded shadow">

        <div>
          <label className="block mb-1 font-medium">Detection Sensitivity (1-10)</label>
          <input
            type="number"
            name="sensitivity"
            value={settings.sensitivity}
            onChange={handleChange}
            min={1}
            max={10}
            className="w-full px-3 py-2 text-white bg-gray-700 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Alert Frequency</label>
          <select
            name="alertFrequency"
            value={settings.alertFrequency}
            onChange={handleChange}
            className="w-full px-3 py-2 text-white bg-gray-700 rounded"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Zone-based Risk Levels</label>
          <textarea
            name="zoneRiskLevels"
            value={settings.zoneRiskLevels}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 text-white bg-gray-700 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Twilio API Key</label>
          <input
            type="text"
            name="twilioKey"
            value={settings.twilioKey}
            onChange={handleChange}
            placeholder="Enter your Twilio API key"
            className="w-full px-3 py-2 text-white bg-gray-700 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Telegram Bot Token</label>
          <input
            type="text"
            name="telegramBotToken"
            value={settings.telegramBotToken}
            onChange={handleChange}
            placeholder="Enter your Telegram Bot Token"
            className="w-full px-3 py-2 text-white bg-gray-700 rounded"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SystemSettings;
