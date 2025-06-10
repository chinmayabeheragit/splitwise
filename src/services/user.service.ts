// src/services/user.service.ts
import bcrypt from 'bcrypt';
import * as userQuery from '../queries/user.query';
import { RegisterUserDTO } from '../dtos/user.dto';

export const registerUser = async (data: RegisterUserDTO) => {
  const existingUser = await userQuery.findUserByEmail(data.email);
  if (existingUser) throw new Error('Email already in use.');

  const hashedPassword = await bcrypt.hash(data.password, 10);
  return userQuery.createUser(data.email, data.name, hashedPassword);
};
