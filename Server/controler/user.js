const { creteToken } = require("../middleware/auth");
const prisma = require("../lib/prisma");
 
exports.createUser = async (req, res) => {
    const { name, email, password, bloodGroup, age, gender, address, phone } = req.body;
    if (!name || !email || !password || !bloodGroup || !age || !gender || !address || !phone) {
       return res.status(400).json({ message: "Please provide all the required fields" })
    }
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                bloodGroup,
                age,
                gender,
                address,
                phone
            }
        })
       return res.status(201).json(user)
    } catch (error) {
       return res.status(500).json({ message: "Error creating user" })
    }

}

exports.loginUser = async(req, res) =>{
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!user){
            return res.status(404).json({ message: "User not found" })
        }
        if(user.password != password){
            return res.status(401).json({ message: "Invalid Credentials" })
        }
         const token =   creteToken(
            {
                id: user.id,
                role:"user"
            }
         )
       return res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: "Error logging in user" })
    }   
}

exports.bloodRequest = async(req, res) =>{
  const {userId,pincode,bloodGroup,age,gender,phone,message,quantiy} = req.body;
  if(!userId || !pincode || !bloodGroup || !age || !gender || !phone  ){
    return res.status(400).json({ message:"Please provide all the required fields"})
  }

  try {

    const newRequest = await prisma.bloodRequest.create({
      data: {
        userId,
        pincode,
        bloodGroup,
        age,
        gender,
        phone,
        quantiy,
        message
      }
    })
    res.status(201).json(newRequest)    
    
  } catch (error) {
    
  }
}

exports.trackBloodRequestStatus = async (req, res) => {
  const { userId } = req.params; 
  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    // Fetch blood requests associated with the user
    const bloodRequests = await prisma.bloodRequest.findMany({
      where: { userId },
      select: {
        id: true,
        bloodGroup: true,
        quantity: true,
        status: true, // Track the status of the request
        createdAt: true,
        updatedAt: true,
      },
    });

    // If no requests are found, return a message
    if (!bloodRequests || bloodRequests.length === 0) {
      return res.status(404).json({ message: 'No blood requests found for this user.' });
    }

    // Return the blood requests with their statuses
    res.status(200).json({ bloodRequests });
  } catch (error) {
    console.error('Error tracking blood request status:', error);
    res.status(500).json({ message: 'Error fetching blood request status' });
  }
};




// const { sendNotification } = require("../utils/notification");  // A utility function for sending notifications

// //SOS Alert Handler   this funtinnaliyt is not implemented yet
// exports.sosAlert = async (req, res) => {
//   const { userId, latitude, longitude, message } = req.body;

//   // Check if all necessary fields are provided
//   if (!userId || !latitude || !longitude || !message) {
//     return res.status(400).json({ message: "Please provide all required fields." });
//   }

//   try {
//     // Save the SOS alert in the database
//     const sosAlert = await prisma.sosAlert.create({
//       data: {
//         userId,
//         latitude,
//         longitude,
//         message,
//         status: "pending", // status can be pending, resolved, etc.
//         createdAt: new Date(),
//       },
//     });

//     // Find nearby donors and hospitals (this could be done using a geolocation service or custom logic)
//     const nearbyDonors = await findNearbyDonors(latitude, longitude);
//     const nearbyHospitals = await findNearbyHospitals(latitude, longitude);

//     // Send notifications to donors and hospitals
//     if (nearbyDonors.length > 0) {
//       sendNotification(nearbyDonors, `Urgent SOS alert! Help needed for a blood donation. Message: ${message}`);
//     }

//     if (nearbyHospitals.length > 0) {
//       sendNotification(nearbyHospitals, `Urgent SOS alert! Immediate assistance needed at your location. Message: ${message}`);
//     }

//     // Return success response
//     res.status(200).json({ message: "SOS Alert sent successfully", sosAlert });
//   } catch (error) {
//     console.error("Error sending SOS Alert:", error);
//     res.status(500).json({ message: "Error sending SOS alert." });
//   }
// };

// // Function to find nearby donors based on geolocation
// async function findNearbyDonors(latitude, longitude) {
//   // Define the radius for "nearby" donors (in kilometers or miles, etc.)
//   const radius = 5; // For example, within 5 km of the user's location

//   // Query the Donar model for donors within a specific radius of the SOS user's location
//   const nearbyDonors = await prisma.donar.findMany({
//     where: {
//       AND: [
//         {
//           latitude: {
//             gte: latitude - radius / 100, // Adjust based on your geolocation system
//             lte: latitude + radius / 100,
//           },
//         },
//         {
//           longitude: {
//             gte: longitude - radius / 100, // Adjust based on your geolocation system
//             lte: longitude + radius / 100,
//           },
//         },
//       ],
//     },
//   });

//   return nearbyDonors;
// }

// // Function to find nearby hospitals based on geolocation
// async function findNearbyHospitals(latitude, longitude) {
//   // Define the radius for "nearby" hospitals (in kilometers or miles, etc.)
//   const radius = 5; // For example, within 5 km of the user's location

//   // Query the Hospital model for hospitals within a specific radius of the SOS user's location
//   const nearbyHospitals = await prisma.hospital.findMany({
//     where: {
//       AND: [
//         {
//           latitude: {
//             gte: latitude - radius / 100, // Adjust based on your geolocation system
//             lte: latitude + radius / 100,
//           },
//         },
//         {
//           longitude: {
//             gte: longitude - radius / 100, // Adjust based on your geolocation system
//             lte: longitude + radius / 100,
//           },
//         },
//       ],
//     },
//   });

//   return nearbyHospitals;
// }
