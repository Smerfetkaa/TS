import { EmployeePositionEnum } from "./types";
export class Employee {
  constructor(
    public readonly id: number,
    public firstName: string,
    public lastName: string,
    public position: EmployeePositionEnum,
    public duties: string[]
  ) {}

  getInfo(): string {
    return `Name: ${this.firstName} ${this.lastName}, Position: ${this.position}`;
  }
}
