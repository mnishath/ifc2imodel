import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import itwinRoutes from './routes/itwin.routes';
import logger from './utils/logger';

dotenv.config();

export function createServer() {
  const app = express();

  app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
  app.use(express.json());

  app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 },
    })
  );
  
  // Extend session type for TypeScript
  app.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.url}`);
    next();
  });

  app.use('/api/auth', authRoutes);
  app.use('/api', itwinRoutes);

  return app;
}