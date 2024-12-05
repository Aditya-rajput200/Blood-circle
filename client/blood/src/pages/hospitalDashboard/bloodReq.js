import React from "react";

const BloodRequest = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Blood Requests</h2>
      <p className="text-gray-700">View and manage incoming blood requests.</p>
      {/* Example: Table for Blood Requests */}
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-600">Requestor Name</th>
            <th className="px-4 py-2 bg-gray-600">Blood Group</th>
            <th className="px-4 py-2 bg-gray-600">Requested Date</th>
            <th className="px-4 py-2 bg-gray-600">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-gray-700">Nina Patel</td>
            <td className="px-4 py-2 text-gray-700">O+</td>
            <td className="px-4 py-2 text-gray-700">12/06/2024</td>
            <td className="px-4 py-2 text-gray-700">3 Units</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-700">Hina Sharma</td>
            <td className="px-4 py-2 text-gray-700">B+</td>
            <td className="px-4 py-2 text-gray-700">11/06/2024</td>
            <td className="px-4 py-2 text-gray-700">1 Units</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-700">Aisha Singh</td>
            <td className="px-4 py-2 text-gray-700">AB+</td>
            <td className="px-4 py-2 text-gray-700">04/08/2024</td>
            <td className="px-4 py-2 text-gray-700">3 Units</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-700">David Lee</td>
            <td className="px-4 py-2 text-gray-700">B-</td>
            <td className="px-4 py-2 text-gray-700">12/07/2024</td>
            <td className="px-4 py-2 text-gray-700">2 Units</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BloodRequest