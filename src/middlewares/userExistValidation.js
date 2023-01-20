import { collectionUsuarios } from "../database/db.js";

export async function userExistValidation(req, res, next){
    const {email} = req.body;
    const userExist = await collectionUsuarios.findOne({email});

    if(userExist){
        return res.status(409).send({message: "Esse email já existe"});
    };
    next();
};