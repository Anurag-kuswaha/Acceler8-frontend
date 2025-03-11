import React, { useState } from 'react';
import axios from 'axios';

const RetrieveForm = () => {
  const [id, setId] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/api/getResumeById/${id}`);
      setResume(res.data.data);
    } catch (error) {
      setResume(null);
      alert('Resume not found');
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md w-96 mx-auto mt-10  bg-[#f8f8fa]">
      <h2 className="text-xl font-bold mb-4">Retrieve Resume by ID</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input placeholder="Resume ID" value={id} onChange={(e) => setId(e.target.value)} className="border p-2 w-full" />
        <button type="submit" className="bg-green-500 text-white p-2 w-full bg-[#1d5e6d]">Retrieve</button>
      </form>
      {resume && (
        <div className="mt-4 border p-2">
          <p>Name: {resume.name}</p>
          <p>Title: {resume.job_title}</p>
          <p>Description: {resume.job_description}</p>
          <p>Company: {resume.job_company}</p>
        </div>
      )}
    </div>
  );
};

export default RetrieveForm;