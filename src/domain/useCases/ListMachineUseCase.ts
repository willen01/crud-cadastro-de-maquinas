import { IMachine } from "../protocols/machine";

export class ListMachineUseCase {
  constructor(private machineRepository: IMachine) {}
  async list() {
    return await this.machineRepository.list();
  }

  async listOne(id: string) {
    return await this.machineRepository.listOne(id);
  }
}
