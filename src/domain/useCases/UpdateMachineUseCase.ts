import { Machine } from "../entities/machine";
import { IMachine } from "../protocols/machine";

export class UpdateMachineUseCase {
  constructor(private machineRepository: IMachine) {}
  async update(id: string, newMachine: Machine): Promise<Machine | null> {
    return this.machineRepository.update(id, newMachine);
  }
}
