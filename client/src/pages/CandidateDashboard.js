import React, { useEffect, useState } from 'react';
import API from '../api';

const CandidateDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get('/apply/my-applications')
      .then(res => setApplications(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Candidate Dashboard</h2>
      <p className="mb-6 text-gray-700">Here are the jobs you’ve applied for:</p>

      {applications.length === 0 ? (
        <p>You haven't applied to any jobs yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app._id} className="bg-white border p-4 rounded shadow">
              <h3 className="text-xl font-bold">{app.job.title}</h3>
              <p className="text-gray-600">{app.job.company} – {app.job.location}</p>
              <p className="text-sm mt-1 text-gray-500">Applied on: {new Date(app.createdAt).toLocaleDateString()}</p>
              <p className="mt-2">
                Resume:{" "}
                <a
                  href={`http://localhost:5000/uploads/${app.resume}`}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidateDashboard;
