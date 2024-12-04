const prisma = require("../lib/prisma");

// Get a list of upcoming blood donation events
exports.getUpcomingEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      where: {
        date: {
          gte: new Date(), // Only future events
        },
      },
      select: {
        id: true,
        name: true,
        description: true,
        location: true,
        date: true,
        organizer: true,
      },
      orderBy: {
        date: 'asc', // Order by date
      },
    });

    if (events.length === 0) {
      return res.status(404).json({ message: 'No upcoming events found.' });
    }

    res.status(200).json({ events });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    res.status(500).json({ message: 'Error fetching upcoming events' });
  }
};


// Volunteer for a specific donation drive
// exports.volunteerForEvent = async (req, res) => {
//     const { eventId, userId } = req.body;
  
//     if (!eventId || !userId) {
//       return res.status(400).json({ message: 'Event ID and User ID are required.' });
//     }
  
//     try {
//       // Check if the user is already a volunteer for this event
//       const existingVolunteer = await prisma.volunteer.findUnique({
//         where: {
//           userId_eventId: { userId, eventId },
//         },
//       });
  
//       if (existingVolunteer) {
//         return res.status(400).json({ message: 'You are already volunteering for this event.' });
//       }
  
//       // Create a new volunteer entry
//       const volunteer = await prisma.volunteer.create({
//         data: {
//           userId,
//           eventId,
//         },
//       });
  
//       res.status(201).json({ message: 'Successfully signed up as a volunteer!', volunteer });
//     } catch (error) {
//       console.error('Error signing up as a volunteer:', error);
//       res.status(500).json({ message: 'Error signing up as a volunteer' });
//     }
//   };  version>>>>2


// Generate a leaderboard of top donors
exports.getDonorLeaderboard = async (req, res) => {
    try {
      const leaderboard = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          donations: {
            select: {
              id: true, // Count number of donations
            },
          },
        },
        orderBy: {
          donations: {
            _count: 'desc',
          },
        },
        take: 10, // Limit to top 10 donors
      });
  
      const formattedLeaderboard = leaderboard.map((user) => ({
        id: user.id,
        name: user.name,
        donationCount: user.donations.length,
      }));
  
      res.status(200).json({ leaderboard: formattedLeaderboard });
    } catch (error) {
      console.error('Error generating leaderboard:', error);
      res.status(500).json({ message: 'Error generating leaderboard' });
    }
  };
    