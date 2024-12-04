import React from "react";
import { Routes, Route } from "react-router-dom";




import Navbar from "./components/Navabar";
import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protectRoute.";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration/>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
