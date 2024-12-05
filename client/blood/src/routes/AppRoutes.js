import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import HospitalPage from "../pages/hospitalDashboard/hospital";
import DonarPage from "../pages/donarDashboard/donar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hospital" element={<HospitalPage />} />
      <Route path="/donar" element={<DonarPage />} />
      {/* Add additional routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
