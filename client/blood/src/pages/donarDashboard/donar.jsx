import React from "react";

import DonarDashboard from "./dashboard"; // Import the dashboard component

import { useAuth } from "../../context/authContext";

const DonarPage = () => {
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated

  return (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold text-red-600">Donor Portal</h2>
      <p className="text-gray-700 mt-2">
        Welcome to the Donor Portal. Register as a donor, view requests, and save lives.
      </p>
      {isAuthenticated ? (
        // Render the Donor Dashboard if authenticated
        <div className="mt-5">
          <DonarDashboard />
        </div>
      ) : (
        // Render login and signup components if not authenticated
        <div className="mt-5">
          <p className="text-gray-600 mb-4">
            Please log in or register to access the donor dashboard.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
            
            </div>
            <div className="w-1/2">
              <DonarSignup />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonarPage;
