import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try{
    await mongoClient.connect();
}catch(err){
    console.log(err);
};

export const db = mongoClient.db();
export const collectionUsuarios = db.collection("usuarios");
export const  collectionMoney = db.collection("money");
export const collectionSessions = db.collection("sessions");

