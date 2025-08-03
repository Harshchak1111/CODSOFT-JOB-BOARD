import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/thundercats-emblem-vector-logo.png';
import hero1 from '../assets/undraw_interview.svg';
import hero2 from '../assets/undraw_feeling-proud_tdos.svg';

const Home = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-2xl font-bold">JobBoardPro</h1>
      </div>
      <nav>
        <Link to="/jobs" className="text-white hover:text-blue-400 mx-3">Jobs</Link>
        <Link to="/login" className="text-white hover:text-blue-400 mx-3">Login</Link>
      </nav>
    </header>

    <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Find the Right Job for You</h2>
        <p className="text-gray-300 mb-6">
          Discover top opportunities and land your next role with confidence.
        </p>
        <Link
          to="/jobs"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Explore Jobs
        </Link>
      </div>
      <div className="md:w-1/2 flex gap-4 justify-center mb-10 md:mb-0">
        <img src={hero1} alt="Interview" className="w-40 md:w-64 h-auto rounded-lg shadow-lg" />
        <img src={hero2} alt="Proud" className="w-40 md:w-64 h-auto rounded-lg shadow-lg" />
      </div>
    </main>

    <footer className="bg-gray-800 text-center text-gray-400 py-4">
      © {new Date().getFullYear()} JobBoardPro. All rights reserved.
    </footer>
  </div>
);

export default Home;
