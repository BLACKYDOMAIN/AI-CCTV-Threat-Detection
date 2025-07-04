// src/pages/SnapshotGallery.jsx
import React from 'react';

const fallbackSnapshots = [
  { url: '/snapshot1.jpg' },
  { url: '/snapshot2.jpg' },
  { url: '/snapshot3.jpg' }
];

const SnapshotGallery = ({ snapshots = fallbackSnapshots }) => {
  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  const handleShare = (url) => {
    alert(`Sharing ${url} via Telegram/Email...`);
  };

  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h2 className="mb-4 text-2xl font-bold text-green-400">Snapshot Gallery</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {snapshots.map((shot, index) => (
          <div
            key={index}
            className="p-2 bg-gray-800 border border-green-600 rounded shadow-md"
          >
            <img
              src={shot.url}
              alt={`snapshot-${index}`}
              className="w-full mb-2 rounded"
              onError={(e) => {
                e.target.src = '/heatmap-placeholder.jpg';
              }}
            />
            <div className="flex justify-between text-sm">
              <button
                onClick={() => handleDownload(shot.url, `snapshot-${index}.jpg`)}
                className="text-green-400 hover:underline"
              >
                Download
              </button>
              <button
                onClick={() => handleShare(shot.url)}
                className="text-blue-400 hover:underline"
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnapshotGallery;
