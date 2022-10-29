import { UpdateMachineUseCase } from "../useCases/UpdateMachineUseCase";
import { Request, Response } from "express";

export class UpdataMachineController {
  constructor(private updateMachineUseCase: UpdateMachineUseCase) {}
  async update(request: Request, response: Response): Promise<Response> {
    const idMachine = request.params.id;
    const newDataMachine = request.body;
    try {
      await this.updateMachineUseCase.update(idMachine, newDataMachine);
      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
