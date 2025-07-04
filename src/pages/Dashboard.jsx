// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = "http://127.0.0.1:8000"; // FastAPI backend

const Dashboard = () => {
  const [latest, setLatest] = useState(null);
  const [previous, setPrevious] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cameraId, setCameraId] = useState("");
  const [monitorStatus, setMonitorStatus] = useState("");
  const [cameraList, setCameraList] = useState([]);

  // Fetch camera IDs on mount
  useEffect(() => {
    const fetchCameras = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/zones`); // Updated endpoint
        setCameraList(res.data.zones || []);
      } catch (error) {
        console.error("Error fetching camera list:", error);
      }
    };

    fetchCameras();
  }, []);

  // Fetch detection data
  useEffect(() => {
    const fetchDetections = async () => {
      try {
        const latestRes = await axios.get(`${BACKEND_URL}/api/detect/latest`);
        const allRes = await axios.get(`${BACKEND_URL}/api/detect/all`);
        setLatest(latestRes.data);
        setPrevious(allRes.data.slice(1));
      } catch (err) {
        console.error("Error fetching detections:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetections();
  }, []);

  const handleMonitor = async () => {
    if (!cameraId) {
      setMonitorStatus("⚠️ Please select a camera ID.");
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/api/monitor/${cameraId}`);
      setMonitorStatus(`✅ Monitoring started for ${cameraId}`);
    } catch (error) {
      setMonitorStatus("❌ Failed to start monitoring.");
      console.error("Monitor error:", error);
    }
  };

  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h2 className="mb-4 text-2xl font-bold text-green-400">AI CCTV Dashboard</h2>

      {/* Camera selector */}
      <div className="p-4 mb-6 bg-gray-800 border border-green-500 rounded">
        <h3 className="mb-2 text-lg font-semibold">Start Monitoring</h3>
        <select
          className="p-2 mr-4 text-black rounded"
          value={cameraId}
          onChange={(e) => setCameraId(e.target.value)}
        >
          <option value="">Select Camera</option>
          {cameraList.map((cam) => (
            <option key={cam} value={cam}>
              {cam}
            </option>
          ))}
        </select>
        <button
          onClick={handleMonitor}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Start
        </button>
        {monitorStatus && <p className="mt-2 text-sm">{monitorStatus}</p>}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Last Detection */}
          <div className="p-4 bg-gray-800 border border-green-500 rounded shadow">
            <h3 className="mb-2 text-lg font-semibold">Last Detection</h3>
            {latest?.filename ? (
              <div>
                <video
                  src={`${BACKEND_URL}/uploads/${latest.filename}`}
                  controls
                  className="w-full mb-2 rounded"
                />
                <ul className="text-sm list-disc list-inside">
                  {latest.detections.map((d, i) => (
                    <li key={i}>
                      <strong>{d.label}</strong> — Confidence: {d.confidence}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No detections yet.</p>
            )}
          </div>

          {/* New Alerts */}
          <div className="p-4 bg-gray-800 border border-red-500 rounded shadow">
            <h3 className="mb-2 text-lg font-semibold text-red-400">New Alerts</h3>
            <p>
              {latest?.detections?.length > 0
                ? "New threat detected in last file!"
                : "No threats detected recently."}
            </p>
            <Link to="/alerts" className="inline-block mt-2 text-blue-400 underline">
              View Alert Page
            </Link>
          </div>

          {/* Previous Detections */}
          <div className="col-span-2 p-4 mt-4 bg-gray-800 border border-gray-600 rounded shadow">
            <h3 className="mb-2 text-lg font-semibold">Previous Detection Cases</h3>
            {previous.length === 0 ? (
              <p>No previous detections yet.</p>
            ) : (
              <div className="pr-2 space-y-4 overflow-auto max-h-64">
                {previous.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-700 border border-gray-500 rounded"
                  >
                    <p className="mb-1 text-sm text-green-300">File: {item.filename}</p>
                    <ul className="ml-4 text-sm list-disc list-inside">
                      {item.detections.map((d, i) => (
                        <li key={i}>
                          {d.label} (Confidence: {d.confidence})
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
