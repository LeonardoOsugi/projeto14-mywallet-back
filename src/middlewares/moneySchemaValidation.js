import { moneySchema } from "../models/schemas.js";

export function moneySchemaValidation(req, res, next){
    const { valor, descricao} = req.body;
    const {error} = moneySchema.validate({valor, descricao},{abortEarly: false});

    if(error){
        const errors = error.details.map((details) => details.message);
        return res.status(400).send(errors);
    };
    next();
};