import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  _id: string;
}

export const protect = (req: Request, res: Response, next: NextFunction): void =>{
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
     res.status(401).json({ message: 'Not authorized, no token' });
     return
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.userId = decoded._id;
    next();
  } catch (err) {
     res.status(401).json({ message: 'Not authorized, token failed' });
     return
  }
};
