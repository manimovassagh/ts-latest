import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: { name, email },
  });
  res.json(user);
});

// Property endpoints
app.get('/properties', async (req, res) => {
  const properties = await prisma.property.findMany();
  res.json(properties);
});

app.post('/properties', async (req, res) => {
  const { title, description, price, location, ownerId } = req.body;
  const property = await prisma.property.create({
    data: { title, description, price, location, ownerId },
  });
  res.json(property);
});

// Booking endpoints
app.get('/bookings', async (req, res) => {
  const bookings = await prisma.booking.findMany();
  res.json(bookings);
});

app.post('/bookings', async (req, res) => {
  const { startDate, endDate, userId, propertyId } = req.body;
  const booking = await prisma.booking.create({
    data: { startDate, endDate, userId, propertyId },
  });
  res.json(booking);
});

// Review endpoints
app.get('/reviews', async (req, res) => {
  const reviews = await prisma.review.findMany();
  res.json(reviews);
});

app.post('/reviews', async (req, res) => {
  const { rating, comment, userId, propertyId } = req.body;
  const review = await prisma.review.create({
    data: { rating, comment, userId, propertyId },
  });
  res.json(review);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
