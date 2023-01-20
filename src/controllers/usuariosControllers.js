import bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";
import { collectionUsuarios, collectionSessions} from "../database/db.js";

export async function postLogin(req, res){
    const {email, password} = req.body;
    const token = uuidv4();
    try{
        const usuarioExiste = await collectionUsuarios.findOne({email});

        if(usuarioExiste && bcrypt.compareSync(password, usuarioExiste.password)){
            await collectionSessions.insertOne({
                token,
                userId: usuarioExiste._id
            });
            res.send({token});
            return;
        }else{
            res.sendStatus(401);
            return;
        };
    }catch(err){
        res.status(500).send(err);
    };
};

export async function postCadastro(req, res){
    const {name, email, password} = req.body;

    try{
        const hashPassword = bcrypt.hashSync(password, 10);
        await collectionUsuarios.insertOne({
            name, email, password: hashPassword, confirmPassword: hashPassword
        });

        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
}
