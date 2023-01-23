import { collectionMoney, collectionUsuarios, collectionSessions } from "../database/db.js";

export async function getMenu(req, res){
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try{
        const session = await collectionSessions.findOne({token});
        const lista = await collectionMoney.find().toArray();
        const user = await collectionUsuarios.findOne({_id: session?.userId});
        if(!user){
            return res.sendStatus(401);
        }
        delete user.password;
        delete user.confirmPassword;
        delete user.email;
        res.send(lista);
    }catch(err){
        res.status(500).send(err);
    };
};

export async function postEntrada(req, res){
    const {valor, descricao} = req.body;

    try{
        await collectionMoney.insertOne({
            status: "entrada",
            valor,
            descricao
        });

        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    };
};

export async function postSaida(req, res){
    const {valor, descricao} = req.body;

    try{
        await collectionMoney.insertOne({
            status: "saida",
            valor,
            descricao
        });

        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
}