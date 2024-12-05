import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
const port =  8000;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Sending login request to the server
      const response = await fetch(`http://localhost:${port}/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Use state values
      });
  
      // Parsing the response
      const data = await response.json();
  
      if (response.ok) {
        // Assuming the server returns a token in `data.token`
        const token = data.token;
        console.log("Token:", token);
  
       
        localStorage.setItem("authToken", token);
  
        // Mock login validation
        login(() => navigate("/dashboard")); // Call login callback for navigation
      } else {
        // Handle login failure (e.g., invalid credentials)
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
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
