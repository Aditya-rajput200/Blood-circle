import React, { useState } from 'react';

const HospitalRegistration = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    hospitalName: '',
    address: '',
    contactPerson: '',
    phone: '',
    email: '',
    bloodTypesOffered: [],
    available24hrs: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === 'select-multiple') {
      const options = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData({
        ...formData,
        [name]: options,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Hospital Registration Submitted:', formData);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Hospital Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Hospital Name */}
        <div className="mb-4">
          <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-600">Hospital Name</label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter the hospital name"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter the hospital address"
          />
        </div>

        {/* Contact Person */}
        <div className="mb-4">
          <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-600">Contact Person</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter the contact person's name"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter the phone number"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter the email address"
          />
        </div>

        {/* Blood Types Offered (Multiple Select) */}
        <div className="mb-4">
          <label htmlFor="bloodTypesOffered" className="block text-sm font-medium text-gray-600">Blood Types Offered</label>
          <select
            id="bloodTypesOffered"
            name="bloodTypesOffered"
            value={formData.bloodTypesOffered}
            onChange={handleChange}
            multiple
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Available 24hrs */}
        <div className="mb-4">
          <label htmlFor="available24hrs" className="flex items-center">
            <input
              type="checkbox"
              id="available24hrs"
              name="available24hrs"
              checked={formData.available24hrs}
              onChange={handleChange}
              className="mr-2"
            />
            Available 24 Hours
          </label>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-red-700 text-white font-bold rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default HospitalRegistration;
