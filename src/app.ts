import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

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

// Swagger Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Base Route
app.get('/', (req, res) => {
  res.send('🌿 Welcome to SplitEase API by Chinmaya');
});

// Add routes here
// app.use('/api/v1/auth', authRoutes);

export default app;
