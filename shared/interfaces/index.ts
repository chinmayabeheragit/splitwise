import { Request } from 'express';
import { Role } from '../constants/roles';

export interface JwtPayloadData {
  userId: string;
  email: string;
  role: Role;
}

export interface AuthenticatedRequest extends Request {
  user?: JwtPayloadData;
}
