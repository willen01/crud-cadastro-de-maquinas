import { Request, Response } from "express";
import { DeleteMachineUseCase } from "../useCases/DeleteUseCase";

export class DeleteMachineController {
  constructor(private deleteMachineUseCase: DeleteMachineUseCase) {}

  async delete(request: Request, response: Response): Promise<Response> {
    const idMachine = request.params.id;
    try {
      const deleteMachine = await this.deleteMachineUseCase.delete(idMachine);
      return response.status(200).json(deleteMachine);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
