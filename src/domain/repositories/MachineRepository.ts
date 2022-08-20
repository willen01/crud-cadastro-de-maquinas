import { Machine } from "../entities/machine";
import machineModel from "./DbModels";

class MachineRepository {
    async create(dataMachine: Machine) {
        const machine = new machineModel({
            name: dataMachine.name,
            code: dataMachine.code,
            price: dataMachine.price,
            description: dataMachine.description
        })

        try {
            await machine.save();
            return true;
        } catch (error) {
            return false;
        }
    }

    async read() {
        const allmachines = await machineModel.find();
        return allmachines;
    }
}

export default new MachineRepository();