import { Router } from "express";
import UserController from "../domain/controllers/UserController";

const router = Router();

//cadastro
router.post("/register", UserController.register);

//leitura de cadastro
router.get("/machines", UserController.read);

export { router };