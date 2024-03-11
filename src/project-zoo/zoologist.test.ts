import { Zoologist } from './Zoologist';
import { EmployeePositionEnum } from './types';
import { Employee } from './Employee';
describe('Zoologist class', () => {
  let zoologist: Zoologist;

  beforeEach(() => {
    zoologist = new Zoologist(1, 'Jane', 'Smith', ['Observation', 'Research']);
  });

  it('should create a zoologist employee instance', () => {
    expect(zoologist).toBeInstanceOf(Zoologist);
    expect(zoologist).toBeInstanceOf(Employee); // Zoologist should also be an instance of Employee
  });

  it('should have correct id, first name, last name, position, and duties', () => {
    expect(zoologist.id).toBe(1);
    expect(zoologist.firstName).toBe('Jane');
    expect(zoologist.lastName).toBe('Smith');
    expect(zoologist.position).toBe(EmployeePositionEnum.ZOOLOGIST);
    expect(zoologist.duties).toEqual(['Observation', 'Research']);
  });

  it('should return correct info string', () => {
    const info = zoologist.getInfo();
    expect(info).toBe('Name: Jane Smith, Position: Zoologist');
  });
});
