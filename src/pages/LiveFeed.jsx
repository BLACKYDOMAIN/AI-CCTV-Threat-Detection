import React, { useState } from "react";
import { uploadVideoForDetection } from "../services/api";

const LiveFeed = () => {
  const [videoURL, setVideoURL] = useState("");
  const [file, setFile] = useState(null);
  const [detections, setDetections] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileURL = URL.createObjectURL(uploadedFile);
      setVideoURL(fileURL);
      setFile(uploadedFile);
      setDetections([]);
    }
  };

  const handleDetect = async () => {
    if (!file) {
      alert("Please upload a video file first.");
      return;
    }

    setLoading(true);
    const result = await uploadVideoForDetection(file);
    setLoading(false);

    if (result) {
      setDetections(result.detections);
      alert("Detection complete ✅");
    } else {
      alert("Detection failed ❌");
    }
  };

  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h1 className="mb-4 text-2xl font-bold text-green-400">📡 Live Feed</h1>

      <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center">
        <label className="px-4 py-2 bg-blue-600 rounded cursor-pointer hover:bg-blue-700">
          Upload File
          <input
            type="file"
            accept="video/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>

        <button
          onClick={handleDetect}
          disabled={!file || loading}
          className={`px-4 py-2 rounded ${
            loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Detecting..." : "Run Detection"}
        </button>
      </div>

      {videoURL && (
        <video
          src={videoURL}
          controls
          autoPlay
          width="720"
          className="mb-4 border border-green-500 rounded shadow-lg"
        />
      )}

      {detections.length > 0 && (
        <div className="p-4 bg-gray-800 rounded">
          <h2 className="mb-2 text-lg font-semibold text-green-300">
            🧠 Detected Objects:
          </h2>
          <ul className="list-disc list-inside">
            {detections.map((item, index) => (
              <li key={index}>
                <span className="font-medium text-yellow-300">
                  {item.label}
                </span>{" "}
                (Confidence: {item.confidence}, BBox:{" "}
                {item.bbox.join(", ")})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LiveFeed;
