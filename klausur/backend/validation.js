const joi = require('@hapi/joi');

//Register validation


const registerValidation = (body) => {

  const validationSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().required().email(),
    password: joi.string().min(6).required()
  });

  let {error} = validationSchema.validate(body);
  if(error){
    if(error.details[0].context.key === 'password'){
      return {error: 'password'}
    }
    else if(error.details[0].context.key === 'email'){
      return {error: 'email'}
    }
    else if(error.details[0].context.key === 'name'){
      return {error: 'name'}
    }
  }
}


const loginValidation = (body) => {

  const validationSchema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(6).required()
  });

  let {error} = validationSchema.validate(body);
  if(error){
    if(error.details[0].context.key === 'password')
      return {error: 'password'}
    else if(error.details[0].context.key === 'email'){
      return {error: 'email'}
    }
  }
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;