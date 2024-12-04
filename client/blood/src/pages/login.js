import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    

    // Mock login validation
    if (email === "user@example.com" && password === "password") {
      login(() => navigate("/dashboard")); // Pass navigation logic as a callback
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-red-100 text-black flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-red-600 text-center">Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
