import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import usuariosRouters from "./routes/usuariosRoutes.js";
import moneyRouters from "./routes/moneyRoutes.js";

console.log("xablau");
const app = express();
app.use(express.json());
app.use(cors());
app.use(usuariosRouters);
app.use(moneyRouters);

// const port = process.env.DATABASE_URL ;

app.listen(5000, () => console.log(`runing in port: ${5000}`))