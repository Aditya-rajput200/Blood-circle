import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    localStorage.removeItem("authToken");
  };

  return (
    <nav className="bg-red-600 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Blood Donation Platform</Link>
        </h1>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
            
              <button
                onClick={handleLogout}
                className="bg-white text-red-600 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Navigation for Hospital, User, and Donor Pages */}
              <Link to="/hospital" className="hover:underline">
                Hospital
              </Link>
              <Link to="/user" className="hover:underline">
                User
              </Link>
              <Link to="/donor" className="hover:underline">
                Donor
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
