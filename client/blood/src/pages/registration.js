import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "",
    bloodType: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { fullName, email, password, confirmPassword, phoneNumber, role, bloodType } = formData;

    if (!fullName || !email || !password || !confirmPassword || !phoneNumber || !role || !bloodType) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Mock registration success
    setSuccess("You’ve successfully registered! Now, log in to get started.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-red-800 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-red-500">
          Sign Up to Join the Blood Circle
        </h1>
        <p className="mt-2 text-gray-600 text-center">
          Become a donor or request blood – it's easy!
        </p>

        {/* Error and Success Messages */}
        {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}
        {success && <div className="mt-4 text-green-500 text-sm">{success}</div>}

        {/* Registration Form */}
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Select Role */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select Your Role</option>
            <option value="Donor">Donor</option>
            <option value="Recipient">Recipient</option>
            <option value="Hospital">Hospital</option>
            <option value="Blood Bank">Blood Bank</option>
            <option value="Donation Camp">Donation Camp</option>
          </select>

          {/* Blood Type */}
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            title="Please select your blood type from the list."
          >
            <option value="">Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-md font-semibold shadow-lg transition-all duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
