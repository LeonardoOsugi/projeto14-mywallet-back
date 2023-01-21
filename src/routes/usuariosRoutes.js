import { postLogin, postCadastro } from "../controllers/usuariosControllers.js";
import {Router} from "express";
import { validateLogin } from "../middlewares/validateLogin.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.js";
import { userExistValidation } from "../middlewares/userExistValidation.js";

const router = Router();
router.post("/login", validateLogin, postLogin);
router.post("/cadastro", userExistValidation, userSchemaValidation, postCadastro);

export default router;