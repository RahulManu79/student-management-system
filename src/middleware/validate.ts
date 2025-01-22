import Joi, { Schema } from 'joi';
import _ from 'lodash';
import { Request, Response, NextFunction } from 'express';

type SchemaMap = {
    params?: Schema;
    query?: Schema;
    body?: Schema;
};

const validate = (schema: SchemaMap) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const validSchema = _.pick(schema, ['params', 'query', 'body']);
        const object = _.pick(req, Object.keys(validSchema));
        const { error, value } = Joi.compile(validSchema)
            .prefs({ errors: { label: 'path', wrap: { label: false } }, abortEarly: false })
            .validate(object, { stripUnknown: true });

        if (error) {
            next(error); 
            return;
        }

        Object.assign(req, value);
        next();
    };
};

export default validate;
