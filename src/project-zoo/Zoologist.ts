import { Employee } from './Employee';
import { EmployeePositionEnum } from './types';

export class Zoologist extends Employee {
  constructor(id: number, firstName: string, lastName: string, duties: string[]) {
    super(id, firstName, lastName, EmployeePositionEnum.ZOOLOGIST, duties);
  }
}
