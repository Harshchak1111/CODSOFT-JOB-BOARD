// src/pages/JobList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    API.get('/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by title or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border mb-4 rounded"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {filteredJobs.map(job => (
          <div key={job._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.company} — {job.location}</p>
            <Link to={`/jobs/${job._id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
