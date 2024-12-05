const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding the database...");

  // Seed users
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123", // Ideally, hash this in a real-world app
      bloodGroup: "A+",
      age: 30,
      gender: "Male",
      address: "123 Main Street",
      phone: "1234567890",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "password123",
      bloodGroup: "O-",
      age: 28,
      gender: "Female",
      address: "456 Elm Street",
      phone: "9876543210",
    },
  });

  // Seed donors
  const donor1 = await prisma.donar.create({
    data: {
      name: "Michael Brown",
      bloodGroup: "A+",
      age: 35,
      gender: "Male",
      address: "789 Maple Avenue",
      phone: "5678901234",
      pincode: "110001",
    },
  });

  const donor2 = await prisma.donar.create({
    data: {
      name: "Sarah Johnson",
      bloodGroup: "B+",
      age: 40,
      gender: "Female",
      address: "321 Pine Road",
      phone: "6543210987",
      pincode: "110002",
    },
  });

  // Seed hospitals
  const hospital1 = await prisma.hospital.create({
    data: {
      name: "City Hospital",
      address: "123 Hospital Lane",
      phone: "1111111111",
      email: "info@cityhospital.com",
      hospitalId: "HOSP1",
      state: "California",
      city: "Los Angeles",
      pincode: "90001",
    },
  });

  const hospital2 = await prisma.hospital.create({
    data: {
      name: "Town Hospital",
      address: "456 Health Avenue",
      phone: "2222222222",
      email: "info@townhospital.com",
      hospitalId: "HOSP2",
      state: "New York",
      city: "New York",
      pincode: "10001",
    },
  });

  // Seed blood inventory
  await prisma.bloodInventory.create({
    data: {
      hospitalId: hospital1.id,
      bloodGroup: "A+",
      quantity: 10,
    },
  });

  await prisma.bloodInventory.create({
    data: {
      hospitalId: hospital2.id,
      bloodGroup: "B+",
      quantity: 5,
    },
  });

  // Seed blood requests
  await prisma.bloodRequest.create({
    data: {
      userId: user1.id,
      pincode: "110001",
      bloodGroup: "A+",
      age: 30,
      gender: "Male",
      phone: "1234567890",
      message: "Urgent blood needed",
      quantity: 2,
    },
  });

  // Seed donations
  await prisma.donation.create({
    data: {
      userId: user2.id,
      donarId: donor1.id,
      hospitalId: hospital1.id,
      bloodGroup: "A+",
      quantity: 2,
      pincode: "110001",
      message: "Helping with blood donation",
    },
  });

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
