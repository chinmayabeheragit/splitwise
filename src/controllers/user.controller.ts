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
