import dotenv from 'dotenv';

dotenv.config();

interface Config {
  node_env: string;
  port: number;
  mongodb_uri: string;
  jwt_secret: string;
  jwt_refresh_secret: string;
  jwt_expire: string;
  jwt_refresh_expire: string;
  cors_origin: string[];
  log_level: string;
}

const getConfig = (): Config => {
  const requiredEnvs = ['MONGODB_URI', 'JWT_SECRET', 'JWT_REFRESH_SECRET'];
  const missing = requiredEnvs.filter((env) => !process.env[env]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  return {
    node_env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3000', 10),
    mongodb_uri: process.env.MONGODB_URI!,
    jwt_secret: process.env.JWT_SECRET!,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET!,
    jwt_expire: process.env.JWT_EXPIRE || '15m',
    jwt_refresh_expire: process.env.JWT_REFRESH_EXPIRE || '7d',
    cors_origin: (process.env.CORS_ORIGIN || 'http://localhost:5173').split(','),
    log_level: process.env.LOG_LEVEL || 'info',
  };
};

export const config = getConfig();
