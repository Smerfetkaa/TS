import { Veterinarian } from './Veterinarian';
import { EmployeePositionEnum } from './types';
import { Employee } from './Employee';
describe('Veterinarian class', () => {
  let veterinarian: Veterinarian;

  beforeEach(() => {
    veterinarian = new Veterinarian(1, 'Pet', 'Svi', ['Diagnosis', 'Treatment']);
  });

  it('should create a veterinarian employee instance', () => {
    expect(veterinarian).toBeInstanceOf(Veterinarian);
    expect(veterinarian).toBeInstanceOf(Employee); // Veterinarian should also be an instance of Employee
  });

  it('should have correct id, first name, last name, position, and duties', () => {
    expect(veterinarian.id).toBe(1);
    expect(veterinarian.firstName).toBe('Pet');
    expect(veterinarian.lastName).toBe('Svi');
    expect(veterinarian.position).toBe(EmployeePositionEnum.VETERINARIAN);
    expect(veterinarian.duties).toEqual(['Diagnosis', 'Treatment']);
  });

  it('should return correct info string', () => {
    const info = veterinarian.getInfo();
    expect(info).toBe('Name: Pet Svi, Position: Veterinarian');
  });
});
