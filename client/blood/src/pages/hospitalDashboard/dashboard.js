import React, { useState } from "react";


import BloodRequest from "../donarDashboard/bloodReq";
import ScheduleDonation from "../donarDashboard/seduledDonation";
import History from "../donarDashboard/history";
import Inventory from "./inventory";


const HospitalDashboard = () => {
  const [activeSection, setActiveSection] = useState("inventory");

  const renderSection = () => {
    switch (activeSection) {
      case "inventory":
        return <Inventory/>;
      case "history":
        return <History />;
      case "scheduledDonation":
        return <ScheduleDonation />;
      case "bloodRequest":
        return <BloodRequest />;
      default:
        return <Inventory />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Hospital Dashboard</h1>
        <nav>
          <ul>
            <li
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-700 ${
                activeSection === "inventory" && "bg-gray-700"
              }`}
              onClick={() => setActiveSection("inventory")}
            >
              Inventory
            </li>
            <li
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-700 ${
                activeSection === "history" && "bg-gray-700"
              }`}
              onClick={() => setActiveSection("history")}
            >
              History
            </li>
            <li
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-700 ${
                activeSection === "scheduledDonation" && "bg-gray-700"
              }`}
              onClick={() => setActiveSection("scheduledDonation")}
            >
              Scheduled Donation
            </li>
            <li
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-700 ${
                activeSection === "bloodRequest" && "bg-gray-700"
              }`}
              onClick={() => setActiveSection("bloodRequest")}
            >
              Blood Request
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{renderSection()}</main>
    </div>
  );
};

export default HospitalDashboard