import { CreateMachineController } from "../controllers/createMachineController";
import { DeleteMachineController } from "../controllers/DeleteMachineController";
import { ListMachineController } from "../controllers/listMachineController";
import { UpdataMachineController } from "../controllers/updateMachineController";
import { MachineRepository } from "../repositories/MachineRepository";
import { CreateMachineUseCase } from "./CreateMachineUseCase";
import { DeleteMachineUseCase } from "./DeleteUseCase";
import { ListMachineUseCase } from "./ListMachineUseCase";
import { UpdateMachineUseCase } from "./UpdateMachineUseCase";

//instância do repositório.
const machineRepository = new MachineRepository();

//instâncias dos casos de uso.
const createMachineUseCase = new CreateMachineUseCase(machineRepository);
const listMachineUseCase = new ListMachineUseCase(machineRepository);
const updateMachineUseCase = new UpdateMachineUseCase(machineRepository);
const deleteMachineUseCase = new DeleteMachineUseCase(machineRepository);

//instâncias do controller da aplicação
const createMachineController = new CreateMachineController(
  createMachineUseCase
);
const listMachineController = new ListMachineController(listMachineUseCase);
const updateMachineController = new UpdataMachineController(
  updateMachineUseCase
);
const deleteMachineController = new DeleteMachineController(
  deleteMachineUseCase
);

export {
  createMachineController,
  listMachineController,
  updateMachineController,
  deleteMachineController,
};
