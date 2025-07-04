// src/pages/Complaint.jsx
import React, { useState } from 'react';

const Complaint = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [evidenceFile, setEvidenceFile] = useState(null);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setEvidenceFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);

      if (evidenceFile) {
        data.append('evidence', evidenceFile);
      }

      const res = await fetch('http://localhost:8000/complaint', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        setResponseMsg('✅ Complaint submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
        setEvidenceFile(null);
      } else {
        setResponseMsg(`❌ Error: ${result.message || 'Submission failed'}`);
      }
    } catch (err) {
      console.error('Error:', err);
      setResponseMsg('❌ Network or server error.');
    }
  };

  return (
    <div className="p-6 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-green-900 animate-gradient-x bg-[length:300%_300%]">
      <h1 className="mb-4 text-2xl font-bold text-green-400">📝 Submit a Complaint</h1>

      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 text-black rounded"
        />
        <input
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          type="email"
          className="w-full p-2 text-black rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-2 text-black rounded"
        />

        <label className="block">
          <span className="text-gray-300">Upload Evidence (optional)</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full mt-1 text-white"
          />
        </label>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
        >
          Submit
        </button>

        {responseMsg && <p className="mt-4 text-yellow-400">{responseMsg}</p>}
      </form>
    </div>
  );
};

export default Complaint;
