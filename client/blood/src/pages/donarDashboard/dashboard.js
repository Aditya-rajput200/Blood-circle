import React, { useState } from "react";
import BloodRequest from "./bloodReq";
import ScheduleDonation from "./seduledDonation";
import History from "./history";
// import BloodRequest from "./BloodRequest";
// import History from "./History";
// import ScheduleDonation from "./ScheduleDonation";

const DonorDashboard = () => {
  const [activeSection, setActiveSection] = useState("bloodRequest");

  const renderSection = () => {
    switch (activeSection) {
      case "bloodRequest":
        return <BloodRequest />;
      case "history":
        return <History />;
      case "scheduleDonation":
        return <ScheduleDonation />;
      default:
        return <BloodRequest />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Donor Dashboard</h1>
        <nav>
          <ul>
            <li
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-700 ${
                activeSection === "bloodRequest" && "bg-gray-700"
              }`}
              onClick={() => setActiveSection("bloodRequest")}
            >
              Blood Request
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
                activeSection === "scheduleDonation" && "bg-gray-700"
              }`}
              onClick={() => setActiveSection("scheduleDonation")}
            >
              Schedule Donation
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 bg-gray-100 p-6">
        {renderSection()}
      </main>
    </div>
  );
};

export default DonorDashboard