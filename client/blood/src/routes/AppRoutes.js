import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Donate from "../pages/Donate";
import BloodRequestPage from '../pages/BloodRequestPage';
import CheckBloodAvailability from "../pages/Awareness";
// import PrivateRoute from "../PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/blood-requests" element={<BloodRequestPage />} />
      <Route path="/check-blood-availability" element={<CheckBloodAvailability />} />;
    </Routes>
  );
};

export default AppRoutes;




