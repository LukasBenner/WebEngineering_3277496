const joi = require('@hapi/joi');

//Register validation


const registerValidation = (body) => {

  const validationSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().required().email(),
    password: joi.string().min(6).required()
  });

  return validationSchema.validate(body);
}


const loginValidation = (body) => {

  const validationSchema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(6).required()
  });

  return validationSchema.validate(body);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;