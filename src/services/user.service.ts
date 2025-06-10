// src/services/user.service.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/jwt';


import * as userQuery from '../queries/user.query';
import { RegisterUserDTO } from '../dtos/user.dto';

export const registerUser = async (data: RegisterUserDTO) => {
  const existingUser = await userQuery.findUserByEmail(data.email);
  if (existingUser) throw new Error('Email already in use.');

  const hashedPassword = await bcrypt.hash(data.password, 10);
  return userQuery.createUser(data.email, data.name, hashedPassword);
};

export const loginUser = async (email: string, password: string): Promise<string> => {
  const user = await userQuery.findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid credentials');

  // Use the correct structure expected by generateToken
  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role || 'user', // fallback if role not stored
  });

  return token;
};