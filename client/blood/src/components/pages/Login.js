import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black-200">
      <div className="bg-white p-6 shadow-md rounded-md w-80">
        <h2 className="text-2xl text-red-600 text-center font-bold mb-6">Blood Donation Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-red-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-red-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-200"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <a
              href="/forgot-password"
              className="text-sm text-red-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
