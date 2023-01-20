import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.DATABASE_URL ||  5000;

app.listen(port, () => console.log(`runing in port: ${port}`))