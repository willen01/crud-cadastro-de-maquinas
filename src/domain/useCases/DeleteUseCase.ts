import { Machine } from "../entities/machine";
import { MachineRepository } from "../repositories/MachineRepository";

export class DeleteMachineUseCase {
  constructor(private machineRepository: MachineRepository) {}
  async delete(id: string): Promise<Machine | null> {
    return await this.machineRepository.delete(id);
  }
}
