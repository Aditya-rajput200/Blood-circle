import React, { useState, useEffect } from "react";
import axios from "axios"; // For API calls

const Donate = () => {
  const [donationOptions, setDonationOptions] = useState([]); // State to store donation options
  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(null); // State for handling errors

  // Fetch data from the database
  useEffect(() => {
    const fetchDonationOptions = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/donation-options"); // Replace with your API
        setDonationOptions(response.data); // Assume API returns an array of donation options
      } catch (err) {
        setError("Failed to fetch donation options.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDonationOptions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-red-100 text-black">
      {/* Header Section */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Blood Circle</h1>
          <button className="px-4 py-2 bg-white text-red-600 rounded-md hover:bg-gray-100">
            Log Out
          </button>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-center text-red-600">
          Donate Now
        </h2>
        <p className="text-center mt-2 text-gray-700">
          Explore nearby hospitals, donation camps, and individuals in need.
        </p>

        {/* Summary Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-4 bg-red-600 text-white rounded-md shadow-lg">
            <h3 className="text-lg font-bold">50+ Hospitals</h3>
            <p>Locate hospitals nearby to donate blood.</p>
          </div>
          <div className="p-4 bg-red-600 text-white rounded-md shadow-lg">
            <h3 className="text-lg font-bold">50+ Blood Banks</h3>
            <p>Check available blood banks in your area.</p>
          </div>
          <div className="p-4 bg-red-600 text-white rounded-md shadow-lg">
            <h3 className="text-lg font-bold">50+ Donation Camps</h3>
            <p>Find donation camps and join the cause.</p>
          </div>
          <div className="p-4 bg-red-600 text-white rounded-md shadow-lg">
            <h3 className="text-lg font-bold">50+ Individuals</h3>
            <p>Help individuals with urgent blood requests.</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center justify-between mt-8 bg-white p-4 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Search for hospitals or camps"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Search
          </button>
          <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Filter
          </button>
          <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Sort
          </button>
        </div>

        {/* Donation Options Section */}
        <div className="mt-8">
          {loading ? (
            <p className="text-center text-gray-600">Loading donation options...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : donationOptions.length > 0 ? (
            donationOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-md shadow-md mb-4"
              >
                <div>
                  <h3 className="font-bold text-gray-800">{option.name}</h3>
                  <p className="text-sm text-gray-600">
                    Address: {option.address}
                  </p>
                  <p className="text-sm text-gray-600">
                    Distance: {option.distance} Km
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-3 py-1 ${
                      option.status === "Open"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } text-white text-sm rounded-md`}
                  >
                    {option.status}
                  </span>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                    Review
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Donate
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No donation options available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donate;
