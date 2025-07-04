// src/pages/DataExport.jsx
import React from 'react';

const DataExport = () => {
  const handleExportCSV = () => {
    alert('Exported logs as CSV!');
  };

  const handleExportPDF = () => {
    alert('Exported logs as PDF!');
  };

  const handleDownloadMedia = () => {
    alert('Media download started!');
  };

  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h1 className="mb-6 text-2xl font-bold text-green-400">Data Export</h1>

      <div className="flex flex-col gap-4 mb-6 md:flex-row">
        <button
          onClick={handleExportCSV}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Export as CSV
        </button>
        <button
          onClick={handleExportPDF}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Export as PDF
        </button>
        <button
          onClick={handleDownloadMedia}
          className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
        >
          Download Images/Videos
        </button>
      </div>

      <p className="text-sm text-gray-300">
        You can export detection logs and download associated images or videos from this panel.
      </p>
    </div>
  );
};

export default DataExport;
