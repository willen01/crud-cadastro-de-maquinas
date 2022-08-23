import { Router } from "express";
import UserController from "../domain/controllers/UserController";

const router = Router();

//cadastro
router.post("/register", UserController.register);

//busca geral
router.get("/machines", UserController.readAll);

//busca individualizada
router.get("/machines/:id", UserController.readOne);

export { router };
