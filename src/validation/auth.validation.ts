import Joi from 'joi';

const loginValidation = {
    body: Joi.object({
        email: Joi.string().email().trim().lowercase().required(),
        password: Joi.string().required(),
    })
};

export { loginValidation };
