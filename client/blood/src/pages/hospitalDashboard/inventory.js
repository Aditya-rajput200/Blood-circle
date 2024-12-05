import React from "react";

const Inventory = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Inventory</h2>
      <p className="text-gray-700">Manage blood inventory here.</p>
      {/* Example: Table for Inventory */}
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-600">Blood Group</th>
            <th className="px-4 py-2 bg-gray-600">Quantity</th>
            <th className="px-4 py-2 bg-gray-600">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-gray-700">A+</td>
            <td className="px-4 py-2 text-gray-700">50 Units</td>
            <td className="px-4 py-2 text-gray-700">12/05/2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-700">AB+</td>
            <td className="px-4 py-2 text-gray-700">30 Units</td>
            <td className="px-4 py-2 text-gray-700">09/05/2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-700">B+</td>
            <td className="px-4 py-2 text-gray-700">40 Units</td>
            <td className="px-4 py-2 text-gray-700">01/03/2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-700">A+</td>
            <td className="px-4 py-2 text-gray-700">50 Units</td>
            <td className="px-4 py-2 text-gray-700">29/10/2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-gray-700">O-</td>
            <td className="px-4 py-2 text-gray-700">30 Units</td>
            <td className="px-4 py-2 text-gray-700">31/06/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory