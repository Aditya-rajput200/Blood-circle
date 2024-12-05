import React, { useState } from "react";

const HospitalSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    registrationNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Hospital Sign-Up Details:", formData);
    // Add sign-up logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Hospital Sign-Up
        </h1>
        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Hospital Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Hospital Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter hospital name"
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
              placeholder="Enter email address"
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
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter hospital address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Registration Number */}
          <div>
            <label
              htmlFor="registrationNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter registration number"
              value={formData.registrationNumber}
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
            <a href="/hospital-login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalSignup