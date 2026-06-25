export const RECOMMENDATION_WEIGHTS = {
  MUTUAL_FRIENDS: 0.5,
  JACCARD_SIMILARITY: 30,
  INTEREST_SIMILARITY: 20,
};

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 20,
  MAX_LIMIT: 100,
};

export const GRAPH_ALGORITHMS = {
  MAX_DEPTH: 3,
  MIN_SIMILARITY: 0.1,
};

export const JWT_CONFIG = {
  ACCESS_TOKEN_EXPIRY: '15m',
  REFRESH_TOKEN_EXPIRY: '7d',
};

export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Invalid email format',
  EMAIL_EXISTS: 'Email already exists',
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_PATTERN: 'Password must contain uppercase, lowercase, number, and special character',
  NAME_REQUIRED: 'Name is required',
  NAME_MIN_LENGTH: 'Name must be at least 2 characters',
};
