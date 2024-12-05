import React from "react";

const bloodRequests = [
  { id: 1, name: "John Doe", bloodGroup: "O+", location: "City Hospital", urgency: "High" },
  { id: 2, name: "Jane Smith", bloodGroup: "A-", location: "General Clinic", urgency: "Medium" },
  { id: 3, name: "Alex Johnson", bloodGroup: "B+", location: "Central Hospital", urgency: "Low" },
];

const BloodRequest = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Blood Request</h2>
      <p className="text-gray-700 mb-6 text-center">This section displays all active blood requests.</p>

      <div className="space-y-6">
        {bloodRequests.map((request) => (
          <div
            key={request.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-800">{request.name}</p>
              <p className="text-gray-600">Blood Group: {request.bloodGroup}</p>
              <p className="text-gray-600">Location: {request.location}</p>
              <p className={`text-sm font-medium ${request.urgency === 'High' ? 'text-red-500' : request.urgency === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
                Urgency: {request.urgency}
              </p>
            </div>

            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                Accept
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodRequest;
