import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

import userRoutes from './routes/user.routes';

import prisma from './config/db'; // Import Prisma client

// Swagger (optional - replace with real spec)
import swaggerDocument from './docs/swagger.json';

dotenv.config();

const app: Application = express();

// Core Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.use('/api/users', userRoutes);


// Swagger Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Base Route
app.get('/', (req, res) => {
  res.send('🌿 Welcome to SplitEase API by Chinmaya');
});

// Database connection test
async function connectDatabase() {
  try {
    await prisma.$connect();
    console.log('🔥 Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1); // Exit if DB connection fails
  }
}

// Immediately invoke connection test on app load
connectDatabase();

export default app;
