import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
});

export const moneySchema = joi.object({
    valor: joi.string().required(),
    descricao: joi.string().required()
})