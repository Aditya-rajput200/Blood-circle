import React from "react";
 // Import your authentication context
import HospitalDashboard from "./dashboard"; 
import HospitalLogin from "./login"; 
import HospitalSignup from "./signUP"; 
import { useAuth } from "../../context/authContext";

const HospitalPage = () => {
  const { isAuthenticated } = useAuth(); 

  return (
    <div className="container mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold text-red-600">Hospital Portal</h2>
      <p className="text-gray-700 mt-2">
        Welcome to the Hospital Portal. Manage your blood inventory and stay connected.
      </p>
      {isAuthenticated ? (
        // Render the Hospital Dashboard if authenticated
        <div className="mt-5">
          <HospitalDashboard />
        </div>
      ) : (
        // Render login and signup components if not authenticated
        <div className="mt-5">
          <p className="text-gray-600 mb-4">
            Please log in or register to access the hospital dashboard.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-1/2">
              <HospitalLogin />
            </div>
            <div className="w-1/2">
              <HospitalSignup />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalPage;
