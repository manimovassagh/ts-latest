import { NextFunction, Request, Response } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}


// Mock verification function for development
export const verifyCognitoToken = (req: Request, res: Response, next: NextFunction) => {
  // Mock user data
  req.user = {
    sub: '1234567890',
    email: 'mockuser@example.com',
    // Add other mock user attributes as needed
  };
  next();
};
