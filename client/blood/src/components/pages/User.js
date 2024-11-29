import React, { useState } from 'react';

const User = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    bloodGroup: '',
    requestType: '', // Blood request or search request
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('User Request Submitted:', formData);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Blood Donation Request</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-600">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter your age"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Blood Group */}
        <div className="mb-4">
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-600">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Request Type (Blood Request or Search for Blood) */}
        <div className="mb-4">
          <label htmlFor="requestType" className="block text-sm font-medium text-gray-600">Request Type</label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            <option value="">Select Request Type</option>
            <option value="request">Request Blood</option>
            <option value="search">Search for Donor</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-red-700 text-white font-bold rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
