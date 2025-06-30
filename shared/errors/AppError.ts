import { ResponseType } from './error.types';
import { HttpStatus } from './httpStatusCodes';

export class AppError extends Error {
  statusCode: number;
  errorType: ResponseType;

  constructor(
    message: string,
    errorType: ResponseType = ResponseType.SERVER,
    statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errorType = errorType;
    Error.captureStackTrace(this, this.constructor);
  }
}
