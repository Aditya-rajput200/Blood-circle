// hospital registration and login

const { creteToken } = require("../middleware/auth");
const prisma = require("../lib/prisma");
 
exports.createHospital = async (req, res) => {
    const { name, email,hospitalId, State, city, pincode, address, phone } = req.body;
    if (!name || !email || !hospitalId|| !password || !bloodGroup || !age || !gender || !address || !phone) {
       return res.status(400).json({ message: "Please provide all the required fields" })
    }
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                hospitalId,
                State,
                city,
                pincode,
                address,
                phone
            }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: "Error Creating the Hospital" })
    }
}

exports.loginHospital = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.hospital.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            return res.status(404).json({ message: "Hospital not found" })
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid Credentials" })
        }
        const token = creteToken(
            {
                id: user.id,
                role: "hospital"
            }
           
        )

        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: "Error Logging in Hospital" })
    }
}   


// inventory


// Add or Update Blood Inventory
exports.manageBloodInventory = async (req, res) => {
  const { hospitalId, bloodGroup, quantity } = req.body;

  if (!hospitalId || !bloodGroup || !quantity) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const inventory = await prisma.bloodInventory.upsert({
      where: {
        hospitalId_bloodGroup: { hospitalId, bloodGroup },
      },
      update: {
        quantity: { increment: quantity },
      },
      create: {
        hospitalId,
        bloodGroup,
        quantity,
      },
    });

    res.status(200).json({ message: 'Inventory updated successfully', inventory });
  } catch (error) {
    res.status(500).json({ message: 'Error managing inventory', error: error.message });
  }
};

// blood request 
// Handle Blood Requests
exports.handleBloodRequests = async (req, res) => {
    const { userId, bloodGroup, quantity, message, pincode } = req.body;
  
    if (!userId || !bloodGroup || !quantity || !message || !pincode) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
  
    try {
      const newRequest = await prisma.bloodRequest.create({
        data: {
          userId,
          bloodGroup,
          quantity,
          message,
          pincode,
          isCompleted: false,
        },
      });
  
      res.status(201).json({ message: 'Blood request created successfully', request: newRequest });
    } catch (error) {
      res.status(500).json({ message: 'Error creating blood request', error: error.message });
    }
  };
  
// donar hospital cordiantion 
// Donor-Hospital Coordination
exports.coordinateDonorHospital = async (req, res) => {
    const { donorId, hospitalId, bloodGroup, quantity } = req.body;
  
    if (!donorId || !hospitalId || !bloodGroup || !quantity) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
  
    try {
      // Check if inventory has enough blood
      const inventory = await prisma.bloodInventory.findFirst({
        where: { hospitalId, bloodGroup },
      });
  
      if (!inventory || inventory.quantity < quantity) {
        return res.status(400).json({ message: 'Insufficient blood in inventory' });
      }
  
      // Reduce inventory
      await prisma.bloodInventory.update({
        where: {
          hospitalId_bloodGroup: { hospitalId, bloodGroup },
        },
        data: {
          quantity: { decrement: quantity },
        },
      });
  
      // Log the coordination
      const coordination = await prisma.donation.create({
        data: {
          donarId: donorId,
          hospitalId,
          bloodGroup,
          quantity,
        },
      });
  
      res.status(200).json({ message: 'Coordination successful', coordination });
    } catch (error) {
      res.status(500).json({ message: 'Error coordinating donor and hospital', error: error.message });
    }
  };
  
// emergency blood request
// Emergency Blood Request
exports.handleEmergencyBloodRequest = async (req, res) => {
    const { bloodGroup, pincode, quantity } = req.body;
  
    if (!bloodGroup || !pincode || !quantity) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
  
    try {
      // Find nearby hospitals with blood availability
      const nearbyHospitals = await prisma.bloodInventory.findMany({
        where: {
          bloodGroup,
          quantity: { gte: quantity },
          hospital: { pincode },
        },
        include: {
          hospital: true,
        },
      });
  
      if (nearbyHospitals.length === 0) {
        return res.status(404).json({ message: 'No hospital with sufficient blood found' });
      }
  
      res.status(200).json({ message: 'Nearby hospitals found', hospitals: nearbyHospitals });
    } catch (error) {
      res.status(500).json({ message: 'Error handling emergency blood request', error: error.message });
    }
  };
  