const express = require("express");
const { registerDonor, scheduleDonation, reviewHospital, setAvailability, getDonationHistory, getBloodRequests } = require("../controler/donar");
const donar_router = express.Router();


// Donor Registration
donar_router.post("/register", registerDonor);

// Get Available Blood Requests
donar_router.get("/blood-requests", getBloodRequests);


// Schedule Donation
donar_router.post("/schedule-donation", scheduleDonation);

// Submit Review for a Hospital
donar_router.post("/review", reviewHospital);

// Update Donor Availability
donar_router.patch("/availability", setAvailability);

// Get Donation History
donar_router.get("/history/:donorId", getDonationHistory);

module.exports = {donar_router};
