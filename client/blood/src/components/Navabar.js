import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";


const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-red-600 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Blood Donation Platform</Link>
        </h1>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <button onClick={logout} className="bg-white text-red-600 px-3 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="bg-white text-red-600 px-3 py-1 rounded">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
