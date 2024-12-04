import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-red-600 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-red-600">My Donations</h2>
          <p className="text-gray-700 mt-4">Track your past donations and upcoming events.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-red-600">Donation Requests</h2>
          <p className="text-gray-700 mt-4">View urgent donation requests near you.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
