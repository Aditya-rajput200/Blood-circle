import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
// Navbar Component

const AuthRoutes = () => {
  return (
    <>
      

      {/* Routes */}
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </>
  );
};

export default AuthRoutes;
