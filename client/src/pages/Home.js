import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center mt-10">
    <h1 className="text-4xl font-bold mb-4">Welcome to JobBoard</h1>
    <p className="mb-6">Find your dream job or hire the best talent.</p>
    <Link to="/jobs" className="bg-blue-600 text-white px-4 py-2 rounded">Explore Jobs</Link>
  </div>
);

export default Home;
