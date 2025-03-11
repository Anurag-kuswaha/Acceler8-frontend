import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [form, setForm] = useState({ name: '', job_title: '', job_description: '', job_company: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/uploadResumeDetails`, form);
      console.log('res', res.data)
      setResponse(`Resume uploaded. please find you unique resume ID: ${res.data.data.id}`);
    } catch (error) {
        console.log('error is ', error.response.data.msg);
      setResponse(error.response.data.msg);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md w-50 mx-auto mt-10 bg-[#f8f8fa]">
      <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" required />
        <input name="job_title" placeholder="Job Title" onChange={handleChange} className="border p-2 w-full" />
        <input name="job_description" placeholder="Job Description" onChange={handleChange} className="border p-2 w-full" />
        <input name="job_company" placeholder="Company" onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full bg-[#00d095]">Upload</button>
      </form>
      {response && <p className="mt-2 text-green-500">{response}</p>}
    </div>
  );
};

export default UploadForm;