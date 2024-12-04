const express = require('express');
const { getUpcomingEvents,  getDonorLeaderboard } = require('../controler/comunity');


const event_router = express.Router();

// Get a list of upcoming blood donation events
event_router.get('/upcoming-events', getUpcomingEvents);

// Volunteer for a specific donation drive
// event_router.post('/volunteer', volunteerForEvent);

// Generate a leaderboard of top donors
event_router.get('/leaderboard', getDonorLeaderboard);

module.exports = {event_router};
