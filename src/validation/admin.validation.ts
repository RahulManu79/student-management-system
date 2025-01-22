import Joi from 'joi';

const createStudentValidation = {
    body: Joi.object({
        email: Joi.string().email().trim().lowercase().required(),
        name: Joi.string().required(),
        department: Joi.string().required(),
        password: Joi.string().required(),
    })
};

const assignTaskValidation = {
    body: Joi.object({
        title: Joi.string().min(3).required(),
        assignedTo: Joi.string().required(),
        dueDate: Joi.date().iso().required(),
    })
};

export {
    createStudentValidation,
    assignTaskValidation
 };
