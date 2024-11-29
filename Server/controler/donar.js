const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

// Donor Registration
exports.registerDonor = async (req, res) => {
  const { name, email, password, bloodGroup, age, gender, address, phone, pincode } = req.body;

  if (!name || !email || !password || !bloodGroup || !age || !gender || !address || !phone || !pincode) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    // Check if donor already exists
    const existingDonor = await prisma.donar.findUnique({
      where: { email },
    });

    if (existingDonor) {
      return res.status(409).json({ message: 'Donor with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create donor
    const newDonor = await prisma.donar.create({
      data: {
        name,
        bloodGroup,
        age,
        gender,
        address,
        phone,
        pincode,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'Donor registered successfully', donor: newDonor });
  } catch (error) {
    res.status(500).json({ message: 'Error registering donor', error: error.message });
  }
};


// Get Blood Requests
exports.getBloodRequests = async (req, res) => {
    try {
      const bloodRequests = await prisma.bloodRequest.findMany({
        where: { isCompleted: false },
        orderBy: { createdAt: 'desc' },
      });
  
      res.status(200).json(bloodRequests);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blood requests', error: error.message });
    }
  };
  
exports.scheduleDonation = async (req, res) => {
    const { donorId, userId, donationDate } = req.body;
  
    if (!donorId || !userId || !donationDate) {
      return res.status(400).json({ message: 'Please provide all required details' });
    }
  
    try {
      const newDonation = await prisma.donation.create({
        data: {
          donarId: donorId,
          userId,
          donationDate: new Date(donationDate),
        },
      });
  
      res.status(201).json({ message: 'Donation scheduled successfully', donation: newDonation });
    } catch (error) {
      res.status(500).json({ message: 'Error scheduling donation', error: error.message });
    }
  };
  
// notification reccies


// Review for Hospital
exports.reviewHospital = async (req, res) => {
    const { hospitalId, donorId, review } = req.body;
  
    if (!hospitalId || !donorId || !review) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
  
    try {
      const newReview = await prisma.review.create({
        data: {
          hospitalId,
          donorId,
          review,
        },
      });
  
      res.status(201).json({ message: 'Review submitted successfully', review: newReview });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting review', error: error.message });
    }
  };
  
// set therir avibility 
exports.setAvailability = async (req, res) => {
    const { donorId, isAvailable } = req.body;
  
    if (typeof isAvailable === 'undefined') {
      return res.status(400).json({ message: 'Please provide availability status' });
    }
  
    try {
      const updatedDonor = await prisma.donar.update({
        where: { id: donorId },
        data: { isAvailable },
      });
  
      res.status(200).json({ message: 'Availability updated successfully', donor: updatedDonor });
    } catch (error) {
      res.status(500).json({ message: 'Error updating availability', error: error.message });
    }
  };
// track donation histrory 
exports.getDonationHistory = async (req, res) => {
    const { donorId } = req.params;
  
    try {
      const donationHistory = await prisma.donation.findMany({
        where: { donarId: donorId },
        include: { user: true },
        orderBy: { createdAt: 'desc' },
      });
  
      res.status(200).json(donationHistory);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching donation history', error: error.message });
    }
  };

