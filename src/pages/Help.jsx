// src/pages/Help.jsx
import React from 'react';

const Help = () => {
  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h1 className="mb-4 text-2xl font-bold text-green-400">Help & Instructions</h1>

      <div className="space-y-6">
        <section className="p-4 bg-gray-800 rounded shadow">
          <h2 className="mb-2 text-lg font-semibold text-green-300">📱 Connect Mobile Camera</h2>
          <ol className="ml-6 space-y-1 text-sm text-gray-300 list-decimal">
            <li>Install the <strong>IP Webcam</strong> app from Google Play Store.</li>
            <li>Open the app and scroll down to tap “<strong>Start server</strong>”.</li>
            <li>The app will show a local IP (e.g., <code>http://192.168.1.100:8080</code>).</li>
            <li>Copy the IP address and enter it in the Live Feed page.</li>
            <li>Click "Connect Mobile Camera" to start streaming.</li>
          </ol>
        </section>

        <section className="p-4 bg-gray-800 rounded shadow">
          <h2 className="mb-2 text-lg font-semibold text-green-300">📁 Uploading Video or Manual Evidence</h2>
          <p className="text-sm text-gray-300">
            You can upload any file (videos, images, documents) via:
          </p>
          <ul className="ml-6 space-y-1 text-sm text-gray-300 list-disc">
            <li><strong>Live Feed</strong> ➝ to analyze a video file</li>
            <li><strong>Complaint</strong> ➝ to submit manual evidence</li>
          </ul>
        </section>

        <section className="p-4 bg-gray-800 rounded shadow">
          <h2 className="mb-2 text-lg font-semibold text-green-300">📊 Understanding Dashboard</h2>
          <p className="text-sm text-gray-300">
            The Dashboard gives you quick access to:
          </p>
          <ul className="ml-6 space-y-1 text-sm text-gray-300 list-disc">
            <li><strong>Live Feed</strong> — Real-time view or upload analysis</li>
            <li><strong>Alerts</strong> — History of AI-detected threats</li>
            <li><strong>Risk Analytics</strong> — Charts & heatmap of incidents</li>
            <li><strong>Admin Panel</strong> — For system configuration</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Help;