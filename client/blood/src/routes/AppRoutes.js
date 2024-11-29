import React from "react";
import { Routes, Route } from "react-router-dom";
import Donor from "../components/pages/Donate";
import User from "../components/pages/User";
import HospitalRegistration from "../components/pages/HospitalRegistration";
import Donate from "../components/pages/Donate";
import Home from "../components/pages/Home"
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Navbar from "../components/ui/Navbar"; // Navbar Component

const AppRoutes = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default page */}
        
        <Route path="/donor" element={<Donor />} />
        <Route path="/user" element={<User />} />
        <Route path="/hospital-registration" element={<HospitalRegistration />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
