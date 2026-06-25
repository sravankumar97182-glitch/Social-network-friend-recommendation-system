import Joi from 'joi';

const passwordSchema = Joi.string()
  .min(8)
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
  .required()
  .messages({
    'string.pattern.base':
      'Password must contain uppercase, lowercase, number, and special character',
    'string.min': 'Password must be at least 8 characters',
  });

const emailSchema = Joi.string()
  .email()
  .required()
  .messages({
    'string.email': 'Please provide a valid email',
  });

export const registerSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.min': 'Name must be at least 2 characters',
  }),
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = Joi.object({
  email: emailSchema,
  password: Joi.string().required(),
});

export const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).optional(),
  bio: Joi.string().max(500).optional(),
  location: Joi.string().max(100).optional(),
  avatar: Joi.string().uri().optional(),
  interests: Joi.array().items(Joi.string()).optional(),
}).min(1);

export const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(20),
});

export const recommendationQuerySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(20),
  minScore: Joi.number().min(0).max(100).default(0),
});
