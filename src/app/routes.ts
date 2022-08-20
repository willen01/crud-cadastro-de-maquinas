import { Router } from "express";
import UserController from "../domain/controllers/UserController";

const router = Router();

//cadastro
router.post("/register", UserController.register);


export { router };