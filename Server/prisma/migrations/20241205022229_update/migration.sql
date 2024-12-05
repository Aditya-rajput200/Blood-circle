/*
  Warnings:

  - Added the required column `bloodGroup` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pincode` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BloodRequest" ADD COLUMN     "hospitalId" TEXT;

-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "bloodGroup" TEXT NOT NULL,
ADD COLUMN     "hospitalId" TEXT,
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "pincode" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "requestId" TEXT;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "BloodRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodRequest" ADD CONSTRAINT "BloodRequest_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;
