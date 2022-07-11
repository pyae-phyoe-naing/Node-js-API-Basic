const Joi = require('joi');

module.exports = {
    Schema: {
        AddCategory: Joi.object({
            name: Joi.string().required(),
            image:Joi.string().required()
        })
    }
}