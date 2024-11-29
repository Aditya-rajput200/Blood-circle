import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black-200">
      <div className="bg-white p-6 shadow-md rounded-md w-80">
        <h2 className="text-2xl text-red-600 text-center font-bold mb-6">Signup</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-red-700 mb-1" htmlFor="Name">
              Name
            </label>
            <input
              type="text"
              id="Name"
              placeholder="Enter your Name"
              className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
