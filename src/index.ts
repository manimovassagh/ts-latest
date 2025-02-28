import { PrismaClient } from '@prisma/client';
import express from 'express';
import { verifyCognitoToken } from './middleware/authMiddleware';
import bookingRouter from './routers/bookingRouter';
import propertyRouter from './routers/propertyRouter';
import reviewRouter from './routers/reviewRouter';
import userRouter from './routers/userRouter';

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(verifyCognitoToken);

app.use('/users', userRouter);
app.use('/properties', propertyRouter);
app.use('/bookings', bookingRouter);
app.use('/reviews', reviewRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
