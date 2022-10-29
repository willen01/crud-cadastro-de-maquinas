import { Machine } from "../entities/machine";
import { IMachine } from "../protocols/machine";
import machineModel from "./DbModels";

export class MachineRepository implements IMachine {
  async create(dataMachine: Machine): Promise<void> {
    const machine = new machineModel({
      name: dataMachine.name,
      code: dataMachine.code,
      price: dataMachine.price,
      description: dataMachine.description,
    });

    await machine.save();
  }

  async list(): Promise<Machine[]> {
    const allmachines = await machineModel.find();
    return allmachines;
  }

  async listOne(id: string): Promise<Machine | null> {
    const searchMachineById = await machineModel.findById(id);
    return searchMachineById;
  }

  async update(id: string, newMachine: Machine): Promise<Machine | null> {
    const searchMachineById = await machineModel.findByIdAndUpdate(
      { _id: id },
      newMachine
    );
    return searchMachineById;
  }

  async delete(id: string): Promise<Machine | null> {
    const machine = await machineModel.findByIdAndDelete({ _id: id });
    return machine;
  }
}

// export default new MachineRepository();
