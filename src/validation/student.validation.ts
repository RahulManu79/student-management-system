import Joi from 'joi';

const listAssignedTasksValidation = {
    params: Joi.object().keys({
        studentId: Joi.string().required(),
    }),
    query: Joi.object().keys({
        page: Joi.number().default(1),
        limit: Joi.number().default(20),
    }),
};

const viewAssignedTasksValidation = {
    params: Joi.object().keys({
        studentId: Joi.string().required(),
        taskId: Joi.string().required(),
    }),
};

const updateTaskStatusValidation = {
    body: Joi.object().keys({
        studentId: Joi.string().required(),
        taskId: Joi.string().required(),
        status: Joi.string()
            .valid('pending', 'overdue', 'completed')
            .required(),
    }),
};


export {
    viewAssignedTasksValidation,
    updateTaskStatusValidation,
    listAssignedTasksValidation
 };
