import { getMenu, postEntrada, postSaida} from "../controllers/moneyControllers.js";
import {Router} from "express";
import { moneyTokenExist } from "../middlewares/moneyTokenExist.js";
import { moneySchemaValidation } from "../middlewares/moneySchemaValidation.js";
import { moneyBodyPreenchido } from "../middlewares/moneyBodyPreenchido.js";

const router = Router();

router.get("/menu", moneyTokenExist, getMenu);
router.post("/entrada", moneyTokenExist, moneySchemaValidation, moneyBodyPreenchido, postEntrada);
router.post("/saida", moneyTokenExist, moneySchemaValidation, moneyBodyPreenchido, postSaida);

export default router;

