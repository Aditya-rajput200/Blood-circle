const express = require("express");
const { createHospital, loginHospital, manageBloodInventory, handleBloodRequests, coordinateDonorHospital, handleEmergencyBloodRequest } = require("../controler/hospital");
const hospital_router = express.Router();



hospital_router.post("/hospital/register", createHospital);
hospital_router.post("/hospital/login", loginHospital);

// Blood inventory routes
hospital_router.post("/inventory/manage", manageBloodInventory);

// Blood request routes
hospital_router.post("/blood-request", handleBloodRequests);
hospital_router.post("/donor-hospital-coordinate", coordinateDonorHospital);
hospital_router.post("/emergency-blood-request", handleEmergencyBloodRequest);

module.exports ={ hospital_router};