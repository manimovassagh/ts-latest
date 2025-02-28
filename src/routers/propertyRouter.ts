import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const properties = await prisma.property.findMany();
  res.json(properties);
});

router.post('/', async (req, res) => {
  const { title, description, price, location, ownerId } = req.body;
  const property = await prisma.property.create({
    data: { title, description, price, location, ownerId },
  });
  res.json(property);
});

export default router;
