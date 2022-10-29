import { Machine } from "../entities/machine";
import { IMachine } from "../protocols/machine";

export class CreateMachineUseCase {
  constructor(private machineRepository: IMachine) {}
  async create(machine: Machine) {
    await this.machineRepository.create(machine);
  }
}
