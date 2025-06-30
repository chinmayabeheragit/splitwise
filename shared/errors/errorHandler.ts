import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      type: err.errorType,
      message: err.message,
    });
  }

  console.error('[Unhandled Error]', err);
  return res.status(500).json({
    status: 'error',
    type: 'Unhandled',
    message: 'Internal Server Error',
  });
};
