import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"; // Importing routes
import { Spotlight } from "./components/ui/Spotlight";
import AuthRoutes from "./routes/AuthRoute";

function App() {
  return (
    <Router>
      <div className="!bg-black text-white">
        {/* Spotlight or other global components */}
        <Spotlight />
        {/* Authroute */}
        <AuthRoutes/>
        {/* App Routes */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
