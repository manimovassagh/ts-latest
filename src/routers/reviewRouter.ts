import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const reviews = await prisma.review.findMany();
  res.json(reviews);
});

router.post('/', async (req, res) => {
  const { rating, comment, userId, propertyId } = req.body;
  const review = await prisma.review.create({
    data: { rating, comment, userId, propertyId },
  });
  res.json(review);
});

export default router;
