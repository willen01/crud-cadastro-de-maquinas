import { Request, Response } from "express";
import MachineRepository from "../repositories/MachineRepository";

export class UserController {
    async register(req: Request, res: Response) {
        const createMachine = await MachineRepository.create(req.body);
        if (createMachine) {
            res.status(201).send();
        } else {
            res.status(400).send();
        }
    }

    async read(req: Request, res: Response) {
        const allMachines = await MachineRepository.read();

        if (allMachines) {
            res.status(200).json(allMachines)
        } else {
            res.status(404).json({msg:'falha ao procurar máquinas'})
        }
    }
}

export default new UserController();