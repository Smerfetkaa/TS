export interface ITicket {
  type: TicketTypeEnum;
  price: number;
}
export enum TicketTypeEnum {
  ADULT = 'ADULT',
  CHILD = 'CHILD',
  FAMILY = 'FAMILY',
}

export const ticketPrices: Record<TicketTypeEnum, number> = {
  [TicketTypeEnum.ADULT]: 20,
  [TicketTypeEnum.CHILD]: 10,
  [TicketTypeEnum.FAMILY]: 50,
};
export interface IVisitor {
  name: string;
  contactInfo: string;
  time: Date;
}
export interface IAccRevenue {
  dailyRevenue: number;
  date: Date;
}
export interface IAccExpenses {
  dailyExpenses: number;
  date: Date;
}
export interface IBudget {
  updateExpenses(dailyExpenses: number, date: Date): void;
  generateFinancialReport(): void;
}
export interface IAccounting {
  addRevenues(): void;
  generateRevenueReport(): void;
  generateExpensesReport(): void;
  payEmployees(amount: number): void;
  buyFood(amount: number): void;
  maintainZoo(amount: number): void;
}
export interface IAnimal {
  id: number;
  specie: string;
  name: string;
  age: number;
  health: string;
}
export enum EmployeePositionEnum {
  MANAGER = 'Manager',
  ZOOLOGIST = 'Zoologist',
  VETERINARIAN = 'Veterinarian',
  SERVICE = 'Service',
}
export interface IObservable {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(massage: string): void;
}
export interface IObserver {
  update(massage: string): void;
}
