import { userSchema } from "../models/schemas.js";

export function userSchemaValidation(req, res, next){
    console.log("leo")
    const {name, email, password, confirmPassword} = req.body;
    const {error} = userSchema.validate({name, email, password, confirmPassword}, {abortEarly: false});

    if(error){
        const errors = error.details.map((details) => details.message);
        return res.status(400).send(errors);
    };
    next();
};