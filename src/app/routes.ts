import { Router } from "express";
import UserController from "../domain/controllers/UserController";

const router = Router();

//cadastro
router.get("/register", UserController.register);


export { router };