import React, { useState } from "react";

const DonorSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bloodGroup: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign-Up Details Submitted:", formData);
    // Add your sign-up logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Donor Sign-Up
        </h1>
        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Blood Group */}
          <div>
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-600">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select your blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-center font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonorSignUp;