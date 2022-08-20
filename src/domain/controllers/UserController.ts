import { Request, Response } from "express";
import MachineRepository from "../repositories/MachineRepository";

export class UserController {
    async register(req: Request, res: Response){
        const createMachine = await MachineRepository.create(req.body);
        if(createMachine){
            res.status(201).send();
        } else {
            res.status(400).send();
        }
    }
}

export default new UserController();