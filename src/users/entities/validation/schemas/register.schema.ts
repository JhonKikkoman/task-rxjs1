/** @format */

import * as Joi from 'joi';

export const registerSchema = Joi.object().keys({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  age: Joi.number().min(18).required(),
  about: Joi.string().optional().max(50),
});
