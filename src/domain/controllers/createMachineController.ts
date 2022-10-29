import { Request, Response } from "express";
import { CreateMachineUseCase } from "../useCases/CreateMachineUseCase";

export class CreateMachineController {
  constructor(private createMachineUseCase: CreateMachineUseCase) {}
  async create(request: Request, response: Response): Promise<Response> {
    const machineDate = request.body;
    try {
      await this.createMachineUseCase.create(machineDate);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json();
    }
  }
}
