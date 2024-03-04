interface ITicket {
  type: TicketTypeEnum;
  price: number;
}
enum TicketTypeEnum {
  ADULT = 20,
  CHILD = 10,
  FAMILY = 50,
}
class Ticket implements ITicket {
  price: number;
  constructor(public type: TicketTypeEnum) {
    this.price = Number(TicketTypeEnum[type]);
  }
}
interface IVisitor {
  name: string;
  contactInfo: string;
  time: Date;
}
class Visitor implements IVisitor {
  constructor(public name: string, public contactInfo: string, public time: Date) {}
}

class TicketOffice {
  private static instance: TicketOffice;
  dailyRevenue = new Revenue();
  currentVisitors = new CurrentVisitors();
  clients = new Clients();

  private constructor() {}

  static getInstance() {
    if (!TicketOffice.instance) {
      TicketOffice.instance = new TicketOffice();
    }
    return TicketOffice.instance;
  }

  sellTicket(ticket: Ticket, visitor: IVisitor) {
    const buyTime = new Date();
    visitor = new Visitor(visitor.name, visitor.contactInfo, buyTime);
    this.clients.addClient(visitor);
    this.currentVisitors.addVisitor(visitor);
    this.dailyRevenue.updateRevenue(ticket.price);
    console.log(`Sold ${ticket.type} ticket to ${visitor.name} for ${ticket.price} dollars.`);
  }
}

class CurrentVisitors {
  private visitors: IVisitor[] = [];
  private timer: NodeJS.Timeout | null = null;

  addVisitor(visitor: IVisitor) {
    this.visitors.push(visitor);
  }

  notifyVisitorsAboutClose() {
    this.visitors.forEach(visitor => {
      console.log(`Dear ${visitor}, the zoo will close in 15 minutes `);
    });
  }
  notifyVisitorsAboutEndOfTime() {
    const currentTime = new Date();
    this.visitors.forEach(visitor => {
      // Вважаємо,що кожен квиток діє 4 години з моменту придбання
      if (currentTime.getTime() - visitor.time!.getTime() >= 4 * 60 * 60 * 1000) {
        console.log(`${visitor.name}'s ticket has expired.`);
      }
    });
  }
  startTimer() {
    // таймер, перевіряє час кожні 15 хвилин
    this.timer = setInterval(() => {
      this.checkExpiry();
    }, 15 * 60 * 1000);
  }

  stopTimer() {
    // Зупиняємо таймер, якщо він запущений
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private checkExpiry() {
    const currentTime = new Date();
    this.visitors.forEach(visitor => {
      // Вважаємо що час кожного квитка 4 години
      if (currentTime.getTime() - visitor.time!.getTime() >= 4 * 60 * 60 * 1000) {
        console.log(`${visitor.name}'s ticket has expired.`);
        // Тут можна сповістити відвідувача, що його час закінчився
      }
    });
  }
}

class Clients {
  clients: Visitor[] = [];

  addClient(client: Visitor) {
    if (!this.clients.includes(client)) this.clients.push(client);
  }
}

class Revenue {
  private static revenue: number = 0;

  updateRevenue(price: number) {
    Revenue.revenue += price;
  }

  static getDailyRevenue() {
    return this.revenue;
  }

  static resetDailyRevenue() {
    this.revenue = 0;
  }
}

interface IAccRevenue {
  dailyRevenue: number;
  date: Date;
}
interface IAccExpenses {
  dailyExpenses: number;
  date: Date;
}
interface IBudget {
  updateExpenses(dailyExpenses: number, date: Date): void;
  generateFinancialReport(): void;
}

class Budget implements IBudget {
  private expenses: IAccExpenses[] = [];

  updateExpenses(dailyExpenses: number, date: Date) {
    this.expenses.push({ dailyExpenses, date });
  }

  generateFinancialReport() {
    console.log(`Total expenses - ${this.expenses}`);
  }
}
interface IAccounting {
  addRevenues(): void;
  generateRevenueReport(): void;
  generateExpensesReport(): void;
  payEmployees(amount: number): void;
  buyFood(amount: number): void;
  maintainZoo(amount: number): void;
}
class Accounting implements IAccounting {
  private revenues: IAccRevenue[] = [];
  private budget: IBudget;
  constructor() {
    this.budget = new Budget();
  }
  addRevenues() {
    this.revenues.push({
      dailyRevenue: Revenue.getDailyRevenue(),
      date: new Date(),
    });
    Revenue.resetDailyRevenue();
  }

  generateRevenueReport() {
    console.log(`Financial report: ${this.revenues}`);
  }
  generateExpensesReport() {
    this.budget.generateFinancialReport();
  }

  payEmployees(amount: number) {
    this.budget.updateExpenses(amount, new Date());
  }

  buyFood(amount: number) {
    this.budget.updateExpenses(amount, new Date());
  }

  maintainZoo(amount: number) {
    this.budget.updateExpenses(amount, new Date());
  }
}

interface IAnimal {
  id: number;
  specie: string;
  name: string;
  age: number;
  health: string;
}
class Animal implements IAnimal {
  constructor(
    public id: number,
    public specie: string,
    public name: string,
    public age: number,
    public health: string
  ) {}
}

enum EmployeePositionEnum {
  MANAGER = 'Manager',
  ZOOLOGIST = 'Zoologist',
  VETERINARIAN = 'Veterinarian',
  SERVICE = 'Service',
}

class Employee {
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

class Manager extends Employee {
  constructor(id: number, firstName: string, lastName: string, duties: string[]) {
    super(id, firstName, lastName, EmployeePositionEnum.MANAGER, duties);
  }
}

class Zoologist extends Employee {
  constructor(id: number, firstName: string, lastName: string, duties: string[]) {
    super(id, firstName, lastName, EmployeePositionEnum.ZOOLOGIST, duties);
  }
}

class Veterinarian extends Employee {
  constructor(id: number, firstName: string, lastName: string, duties: string[]) {
    super(id, firstName, lastName, EmployeePositionEnum.VETERINARIAN, duties);
  }
}
class Service extends Employee {
  constructor(id: number, firstName: string, lastName: string, duties: string[]) {
    super(id, firstName, lastName, EmployeePositionEnum.SERVICE, duties);
  }
}
interface IObservable {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(massage: string): void;
}
interface IObserver {
  update(massage: string): void;
}
class Administration implements IObservable {
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
class AdvertisingDepartment implements IObserver {
  constructor(private clientsList: Clients, private admin: Administration) {
    this.admin.addObserver(this);
  }
  update(massage: string) {
    this.notifyClients(massage);
  }
  notifyClients(massage: string) {
    this.clientsList.clients.forEach(() => console.log(massage));
  }
}


