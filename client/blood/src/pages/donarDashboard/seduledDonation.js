import React, { useState } from "react";

const ScheduleDonation = () => {
  const [donationDate, setDonationDate] = useState("");
  const [donationTime, setDonationTime] = useState("");
  const [donationType, setDonationType] = useState("Whole Blood");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the form submission (e.g., sending data to the backend)
    alert("Donation scheduled successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Schedule a Donation</h2>
      <p className="text-gray-700 mb-6 text-center">
        Use this section to schedule your next blood donation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Donation Type */}
        <div>
          <label htmlFor="donation-type" className="block text-gray-700 font-medium">
            Donation Type
          </label>
          <select
            id="donation-type"
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="Whole Blood">Whole Blood</option>
            <option value="Plasma">Plasma</option>
            <option value="Platelets">Platelets</option>
          </select>
        </div>

        {/* Donation Date */}
        <div>
          <label htmlFor="donation-date" className="block text-gray-700 font-medium">
            Donation Date
          </label>
          <input
            type="date"
            id="donation-date"
            value={donationDate}
            onChange={(e) => setDonationDate(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Donation Time */}
        <div>
          <label htmlFor="donation-time" className="block text-gray-700 font-medium">
            Donation Time
          </label>
          <input
            type="time"
            id="donation-time"
            value={donationTime}
            onChange={(e) => setDonationTime(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="block text-gray-700 font-medium">
            Comments / Special Instructions
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
          >
            Schedule Donation
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleDonation