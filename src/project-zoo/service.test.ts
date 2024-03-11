import { Service } from './Service';
import { EmployeePositionEnum } from './types';
import { Employee } from './Employee';
describe('Service class', () => {
  let service: Service;

  beforeEach(() => {
    service = new Service(1, 'Jane', 'Smith', ['Cleaning', 'Maintenance']);
  });

  it('should create a service employee instance', () => {
    expect(service).toBeInstanceOf(Service);
    expect(service).toBeInstanceOf(Employee); // Service should also be an instance of Employee
  });

  it('should have correct id, first name, last name, position, and duties', () => {
    expect(service.id).toBe(1);
    expect(service.firstName).toBe('Jane');
    expect(service.lastName).toBe('Smith');
    expect(service.position).toBe(EmployeePositionEnum.SERVICE);
    expect(service.duties).toEqual(['Cleaning', 'Maintenance']);
  });

  it('should return correct info string', () => {
    const info = service.getInfo();
    expect(info).toBe('Name: Jane Smith, Position: Service');
  });
});
