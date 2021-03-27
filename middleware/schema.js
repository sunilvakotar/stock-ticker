const Joi = require("joi");

module.exports = {
    addSymbol : Joi.object().keys({
        symbol: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.string())
    })
};