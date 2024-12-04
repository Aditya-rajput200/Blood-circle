const express = require('express');
const { createUser, loginUser, bloodRequest, trackBloodRequestStatus, sosAlert } = require('../controler/user');


const user_router = express.Router();

// User Registration
user_router.post('/register', createUser);

// User Login
user_router.post('/login', loginUser);

// Create Blood Request
user_router.post('/blood-request', bloodRequest);

// Track Blood Request Status
user_router.get('/blood-request/:userId/status', trackBloodRequestStatus);

// SOS Alert
//user_router.post('/sos-alert', sosAlert);

module.exports ={ user_router};
