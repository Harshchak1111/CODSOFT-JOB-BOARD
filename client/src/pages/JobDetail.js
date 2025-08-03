import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const JobDetail = () => {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = localStorage.getItem('token');

  useEffect(() => {
    API.get(`/jobs`).then((res) => {
      const jobData = res.data.find((j) => j._id === id);
      setJob(jobData);
    });
  }, [id]);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleApply = async (e) => {
    e.preventDefault();
    if (!resume) {
      setMessage("Please upload a resume.");
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      await API.post(`/apply/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage("Application submitted successfully!");
    } catch (error) {
      setMessage("Application failed. Try again.");
    }
  };

  if (!job) return <p className="text-center mt-10">Loading job details...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600">{job.company} — {job.location}</p>
      <p className="my-4">{job.description}</p>
      <p className="font-semibold text-lg mb-4">Salary: {job.salary}</p>

      {user.role === 'candidate' && (
        <form onSubmit={handleApply} className="space-y-4">
          <label className="block">
            Upload Resume:
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} required className="mt-2" />
          </label>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Apply</button>
        </form>
      )}

      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
};

export default JobDetail;
