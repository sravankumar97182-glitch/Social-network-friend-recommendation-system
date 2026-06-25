import mongoose from 'mongoose';
import { config } from './index';
import logger from './logger';

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.mongodb_uri);
    logger.info('✅ Database connected successfully');
  } catch (error) {
    logger.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    logger.info('✅ Database disconnected');
  } catch (error) {
    logger.error('❌ Database disconnection failed:', error);
  }
};
