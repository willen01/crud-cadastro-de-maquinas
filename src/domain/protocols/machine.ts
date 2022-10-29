import { Machine } from "../entities/machine";

export interface IMachine {
  create(data: Machine): Promise<void>;
  list(): Promise<Machine[]>;
  listOne(id: string): Promise<Machine | null>;
  update(id: string, newMachine: Machine): Promise<Machine | null>;
  delete(id: string): Promise<Machine | null>;
}
