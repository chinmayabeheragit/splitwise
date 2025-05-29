import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Route Index
// import { apiRouter } from './routes';

const app = express();

// 🔐 Global Middleware Setup
app.use(helmet());                          // Security headers
app.use(cors());                            // Cross-origin resource sharing
app.use(morgan('dev'));                     // HTTP logging
app.use(express.json());                    // Body parsing (JSON)
app.use(express.urlencoded({ extended: true }));

// 🔁 Mount routes
// app.use('/api/v1', apiRouter);

// 🚨 Optional: Global Error Handler (custom middleware)
// import { errorHandler } from './middlewares/error.middleware';
// app.use(errorHandler);

export default app;
