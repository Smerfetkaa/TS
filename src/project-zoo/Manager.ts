import { Employee } from "./Employee";
import { EmployeePositionEnum } from "./types";
export class Manager extends Employee {
  constructor(id: number, firstName: string, lastName: string, duties: string[]) {
    super(id, firstName, lastName, EmployeePositionEnum.MANAGER, duties);
  }
}
