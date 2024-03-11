import { Manager } from './Manager';
import { EmployeePositionEnum } from './types';
import { Employee } from './Employee';
describe('Manager class', () => {
  let manager: Manager;

  beforeEach(() => {
    manager = new Manager(1, 'Svi', 'Pet', ['Manage staff', 'Oversee operations']);
  });

  it('should create a manager instance', () => {
    expect(manager).toBeInstanceOf(Manager);
    expect(manager).toBeInstanceOf(Employee);
  });

  it('should have correct id, first name, last name, position, and duties', () => {
    expect(manager.id).toBe(1);
    expect(manager.firstName).toBe('Svi');
    expect(manager.lastName).toBe('Pet');
    expect(manager.position).toBe(EmployeePositionEnum.MANAGER);
    expect(manager.duties).toEqual(['Manage staff', 'Oversee operations']);
  });

  it('should return correct info string', () => {
    const info = manager.getInfo();
    expect(info).toBe('Name: Svi Pet, Position: Manager');
  });
});
