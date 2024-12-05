import React from "react";

const donationHistory = [
  { id: 1, date: "2024-11-15", amount: "1 unit", status: "Completed" },
  { id: 2, date: "2024-10-10", amount: "1 unit", status: "Completed" },
  { id: 3, date: "2024-08-05", amount: "1 unit", status: "Completed" },
  { id: 4, date: "2024-07-01", amount: "1 unit", status: "Pending" },
];

const History = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Donation History</h2>
      <p className="text-gray-700 mb-6 text-center">This section shows your past blood donation history.</p>
      
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="px-6 py-4 text-left font-medium">Date</th>
            <th className="px-6 py-4 text-left font-medium">Amount Donated</th>
            <th className="px-6 py-4 text-left font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {donationHistory.map((donation) => (
            <tr key={donation.id} className="border-b">
              <td className="px-6 py-4 text-gray-800">{donation.date}</td>
              <td className="px-6 py-4 text-gray-800">{donation.amount}</td>
              <td
                className={`px-6 py-4 ${
                  donation.status === "Completed" ? "text-green-500" : "text-yellow-500"
                } font-semibold`}
              >
                {donation.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
          View More History
        </button>
      </div>
    </div>
  );
};

export default History;