import winston from 'winston';
import { config } from './index';

const colors = {
  error: '\x1b[31m',
  warn: '\x1b[33m',
  info: '\x1b[36m',
  debug: '\x1b[35m',
  reset: '\x1b[0m',
};

const logger = winston.createLogger({
  level: config.log_level,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ level, message, timestamp, ...meta }) => {
      const color = colors[level as keyof typeof colors] || colors.reset;
      const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : '';
      return `${color}[${timestamp}] ${level.toUpperCase()}: ${message}${metaStr ? ' ' + metaStr : ''}${colors.reset}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;
