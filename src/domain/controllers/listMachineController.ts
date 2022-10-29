import { ListMachineUseCase } from "../useCases/ListMachineUseCase";
import { Request, Response } from "express";

export class ListMachineController {
  constructor(private listMachineUseCase: ListMachineUseCase) {}
  async list(_: Request, response: Response) {
    try {
      const allMachines = await this.listMachineUseCase.list();
      return response.status(201).json({ allMachines });
    } catch (error) {
      return response.json(400).json(error);
    }
  }

  async listOne(request: Request, response: Response) {
    const idMachine = request.params.id;
    try {
      const machine = await this.listMachineUseCase.listOne(idMachine);
      return response.status(200).json({ machine });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
