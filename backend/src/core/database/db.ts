import mongoose from 'mongoose';
import { DB_URI } from '@config/index';
import { logger } from '@config/logger';

export async function connectDatabase() {
  try {
    logger.info('Connecting database...')
    await mongoose.connect(DB_URI);
    logger.info('Database connected...');
  } catch (error) {
    logger.error(new Error('Database connection error'));
    process.exit(1);
  }
}