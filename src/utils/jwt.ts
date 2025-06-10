// utils/jwt.ts
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret';

interface TokenPayload {
  id: number;
  email: string;
  role: string;
}

export const generateToken = (user: TokenPayload): string => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '7d' });
};
