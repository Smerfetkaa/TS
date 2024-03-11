import { Employee } from "./Employee";
import { IAnimal, IObserver, EmployeePositionEnum, IObservable } from "./types";
import { Manager } from "./Manager";
import { Zoologist } from "./Zoologist";
import { Veterinarian } from "./Veterinarian";
import { Service } from "./Service";
import { Animal } from "./Animal";
export class Administration implements IObservable {
  private employees: Employee[] = [];
  private animals: IAnimal[] = [];
  private observers: IObserver[] = [];

  addObserver(observer: IObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(massage: string) {
    this.observers.forEach(observer => observer.update(massage));
  }
  addEmployee(firstName: string, lastName: string, position: EmployeePositionEnum, duties: string[]) {
    const id = this.employees.length + 1;
    let employee: Employee;

    switch (position) {
      case EmployeePositionEnum.MANAGER:
        employee = new Manager(id, firstName, lastName, duties);
        break;
      case EmployeePositionEnum.ZOOLOGIST:
        employee = new Zoologist(id, firstName, lastName, duties);
        break;
      case EmployeePositionEnum.VETERINARIAN:
        employee = new Veterinarian(id, firstName, lastName, duties);
        break;
      case EmployeePositionEnum.SERVICE:
        employee = new Service(id, firstName, lastName, duties);
        break;
      default:
        throw new Error('Invalid position');
    }
    this.employees.push(employee);
  }
  removeEmployee(id: number) {
    this.employees = this.employees.filter(person => person.id !== id);
  }
  getEmployees() {
    return this.employees;
  }
  addAnimal(specie: string, name: string, age: number, health: string) {
    const id = this.animals.length + 1;
    const animal = new Animal(id, specie, name, age, health);
    this.animals.push(animal);
  }
  removeAnimal(id: number) {
    this.animals = this.animals.filter(animal => animal.id !== id);
  }
}
