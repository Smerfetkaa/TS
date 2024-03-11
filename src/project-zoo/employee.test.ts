import { Employee } from './Employee';
import { EmployeePositionEnum } from './types';

describe('Employee class', () => {
  let employee: Employee;

  beforeEach(() => {
    employee = new Employee(1, 'Svi', 'Pet', EmployeePositionEnum.MANAGER, ['Manage staff', 'Oversee operations']);
  });

  it('should create an employee instance', () => {
    expect(employee).toBeInstanceOf(Employee);
  });

  it('should have correct id, first name, last name, position, and duties', () => {
    expect(employee.id).toBe(1);
    expect(employee.firstName).toBe('Svi');
    expect(employee.lastName).toBe('Pet');
    expect(employee.position).toBe(EmployeePositionEnum.MANAGER);
    expect(employee.duties).toEqual(['Manage staff', 'Oversee operations']);
  });

  it('should return correct info string', () => {
    const info = employee.getInfo();
    expect(info).toBe('Name: Svi Pet, Position: Manager');
  });
});
