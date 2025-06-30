import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { AppError } from '../errors/AppError';
import { HttpStatus } from '../errors/httpStatusCodes';
import { ResponseType } from '../errors/error.types';
import { Role } from '../constants/roles';
import { AuthenticatedRequest } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET!;

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return next(
      new AppError('Token missing', ResponseType.AUTH, HttpStatus.UNAUTHORIZED)
    );
  }

  try {
    const decoded = verifyToken(token, JWT_SECRET);

    // Attach user to request
    (req as AuthenticatedRequest).user = {
      userId: decoded['userId'],
      email: decoded['email'],
      role: decoded['role'],
    };

    next();
  } catch (error) {
    return next(
      new AppError('Invalid or expired token', ResponseType.AUTH, HttpStatus.UNAUTHORIZED)
    );
  }
};

// 🛡️ Role-Based Access Control Middleware
export const authorize =
  (...allowedRoles: Role[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const user = (req as AuthenticatedRequest).user;

    if (!user || !allowedRoles.includes(user.role)) {
      return next(
        new AppError('Forbidden', ResponseType.FORBIDDEN, HttpStatus.FORBIDDEN)
      );
    }

    next();
  };
