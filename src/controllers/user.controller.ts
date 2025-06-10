// src/controllers/userController.ts
import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await userService.registerUser(userData);
    res.status(201).json({
      message: 'User registered successfully',
      data: { id: newUser.id, email: newUser.email, name: newUser.name },
    });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ message: err.message || 'Failed to register user' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await userService.loginUser(email, password);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error: any) {
    res.status(401).json({ message: error.message || 'Login failed' });
  }
};
