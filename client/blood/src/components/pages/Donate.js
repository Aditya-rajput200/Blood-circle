// src/components/Donate.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Donate Blood</h1>
        
        {/* Login/Signup Section */}
        {!isLoggedIn ? (
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-4">Please log in or sign up to donate blood</p>
            <Link to="/login">
              <button className="btn bg-red-700 text-white hover:bg-red-900 border-red-900 mr-4">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn bg-green-700 text-white hover:bg-green-900 border-green-900">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-4">You are logged in! Ready to donate?</p>
            <button className="btn bg-red-700 text-white hover:bg-red-900 border-red-900">
              Donate Now
            </button>
          </div>
        )}

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donor Center Location Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Donor Center Location</h2>
            <p className="text-gray-600 mb-4">
              Find the nearest blood donation centers around you. Locations are updated regularly to make your donation experience smooth.
            </p>
            <Link to="/donor-center">
              <button className="btn bg-blue-700 text-white hover:bg-blue-900 border-blue-900">
                Find Nearest Centers
              </button>
            </Link>
          </div>

          {/* Other Ways to Help Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Other Ways to Help</h2>
            <p className="text-gray-600 mb-4">
              Not ready to donate blood? You can help by spreading awareness, volunteering, or supporting blood donation events.
            </p>
            <Link to="/ways-to-help">
              <button className="btn bg-yellow-700 text-white hover:bg-yellow-900 border-yellow-900">
                Learn Other Ways
              </button>
            </Link>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-12">
          {/* Simple Carousel with Tailwind */}
          <div className="carousel w-full rounded-lg shadow-lg overflow-hidden">
            {/* Donor Center Locations Carousel */}
            {/* <div className="carousel-item w-full">
              <img src="https://via.placeholder.com/400x300" alt="Donor Center Location" className="w-full object-cover"/>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 flex justify-center items-center">
                <p className="text-white text-lg font-bold">Donor Centers Near You</p>
              </div>
            </div> */}

            {/* Other Ways to Help Carousel */}
            {/* <div className="carousel-item w-full">
              <img src="https://via.placeholder.com/400x300" alt="Other Ways to Help" className="w-full object-cover"/>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 flex justify-center items-center">
                <p className="text-white text-lg font-bold">Support Blood Donation</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
