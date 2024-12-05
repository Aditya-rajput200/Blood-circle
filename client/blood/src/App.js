import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/authContext";
import Navbar from "./components/Navabar";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
