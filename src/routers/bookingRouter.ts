import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const bookings = await prisma.booking.findMany();
  res.json(bookings);
});

router.post('/', async (req, res) => {
  const { startDate, endDate, userId, propertyId } = req.body;
  const booking = await prisma.booking.create({
    data: { startDate, endDate, userId, propertyId },
  });
  res.json(booking);
});

export default router;
