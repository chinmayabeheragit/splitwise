import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || '5000';
export const JWT_SECRET = process.env.JWT_SECRET || '';
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '7h';

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '5432';
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_PASS = process.env.DB_PASS || '';
export const DB_NAME = process.env.DB_NAME || 'splitwise';

// Construct Prisma DATABASE_URL dynamically
export const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public`;

export const CLOUD_NAME = process.env.CLOUD_NAME || '';
export const CLOUD_API_KEY = process.env.CLOUD_API_KEY || '';
export const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || '';
