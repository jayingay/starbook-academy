//validation
const Joi = require('joi');

const loginValidation = (data) => {
    const schema = Joi.object({
        Email: Joi.string().required().email(),
        Password: Joi.string().min(6).required()
    });

    return schema.validate(data);
}

module.exports.loginValidation = loginValidation;