// src/services/export.js

export const exportLogsToCSV = (logs) => {
  const csvContent = [
    ['Type', 'Zone', 'Time', 'Verified'],
    ...logs.map((log) => [log.type, log.zone, log.time, log.verified])
  ]
    .map((e) => e.join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  triggerDownload(url, 'alert_logs.csv');
};

export const exportLogsToPDF = (logs) => {
  // Stub: integrate jsPDF or similar if needed
  alert('PDF export not implemented (use jsPDF)');
};

export const triggerDownload = (url, filename) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
};
