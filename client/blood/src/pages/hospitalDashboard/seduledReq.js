import React from "react";

const ScheduledDonation = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Scheduled Donations</h2>
      <p className="text-gray-700">Manage scheduled donations here.</p>
      {/* Example: Table for Scheduled Donations */}
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">Donor Name</th>
            <th className="px-4 py-2 bg-gray-200">Blood Group</th>
            <th className="px-4 py-2 bg-gray-200">Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-gray-700">Alice Johnson</td>
            <td className="px-4 py-2 text-gray-700">B+</td>
            <td className="px-4 py-2 text-gray-700">12/10/2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-700">Mark Brown</td>
            <td className="px-4 py-2 text-gray-700">A-</td>
            <td className="px-4 py-2 text-gray-700">12/12/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScheduledDonation;