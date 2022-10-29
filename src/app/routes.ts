import { request, response, Router } from "express";
import {
  createMachineController,
  deleteMachineController,
  listMachineController,
  updateMachineController,
} from "../domain/useCases";

const router = Router();

//cadastro
router.post("/register", (request, response) => {
  return createMachineController.create(request, response);
});

// //busca geral
router.get("/machines", (request, response) => {
  return listMachineController.list(request, response);
});

// //busca individualizada
router.get("/machines/:id", (request, response) => {
  return listMachineController.listOne(request, response);
});

// //atualiza cadastro
router.patch("/machines/:id", (request, response) => {
  return updateMachineController.update(request, response);
});

// //Deleta item
router.delete("/machines/:id", (request, response) => {
  return deleteMachineController.delete(request, response);
});

export { router };
