import React, { useEffect, useState } from 'react';
import API from '../api';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    salary: ''
  });

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    API.get('/jobs').then(res => {
      const employerJobs = res.data.filter(job => job.postedBy === user.id);
      setJobs(employerJobs);
    });
  }, [user.id]);

  const handleDelete = async (jobId) => {
    await API.delete(`/jobs/${jobId}`);
    setJobs(jobs.filter(job => job._id !== jobId));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/jobs', form);
      setJobs([...jobs, res.data]);
      setForm({ title: '', company: '', location: '', description: '', salary: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Employer Dashboard</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-10 space-y-4">
        <h3 className="text-xl font-semibold mb-2">Post a New Job</h3>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Job Title" className="w-full border px-3 py-2 rounded" />
        {/* ...more inputs... */}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post Job</button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-4">Your Posted Jobs</h3>
        {jobs.map((job) => (
          <div key={job._id} className="border rounded p-4 mb-4 bg-white shadow">
            <h4 className="text-lg font-bold">{job.title}</h4>
            <p>{job.company} – {job.location}</p>
            <p>{job.description}</p>
            <p className="font-semibold mt-2">Salary: {job.salary}</p>
            <button onClick={() => handleDelete(job._id)} className="text-red-600 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerDashboard;
