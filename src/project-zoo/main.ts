import { Ticket } from './Ticket';
import { TicketTypeEnum, IVisitor, EmployeePositionEnum } from './types';
import { TicketOffice } from './TicketOffice';
import { Accounting } from './Accounting';
import { AdvertisingDepartment } from './AdvertisingDepartment';
import { Administration } from './Administration';
import { Budget } from './Budget';
import { Clients } from './Clients';

const adultTicket = new Ticket(TicketTypeEnum.ADULT);
const childTicket = new Ticket(TicketTypeEnum.CHILD);
const familyTicket = new Ticket(TicketTypeEnum.FAMILY);

console.log(adultTicket.price);
const budget = new Budget();
budget.updateExpenses(100, new Date());
budget.updateExpenses(200, new Date());
console.log(budget.generateFinancialReport());
const visitor1: IVisitor = {
  name: 'Pet Svi',
  contactInfo: 'pet@example.com',
  time: new Date(),
};

const visitor2: IVisitor = {
  name: 'Svi Pet',
  contactInfo: 'svi@example.com',
  time: new Date(),
};

const clients = new Clients();
clients.addClient(visitor1);
clients.addClient(visitor2);
const administration = new Administration();

const ticketOffice = TicketOffice.getInstance();
const accounting = new Accounting();
const advertisingDepartment = new AdvertisingDepartment(clients, administration);
console.log(advertisingDepartment.update('test'));

ticketOffice.sellTicket(adultTicket, visitor1);
ticketOffice.sellTicket(childTicket, visitor2);
ticketOffice.sellTicket(familyTicket, visitor1);

administration.addEmployee('Peter', 'Smith', EmployeePositionEnum.MANAGER, ['Manage staff', 'Coordinate operations']);
administration.addEmployee('Alice', 'Johnson', EmployeePositionEnum.ZOOLOGIST, [
  'Study animal behavior',
  'Ensure animal welfare',
]);

accounting.addRevenues();
accounting.generateRevenueReport();
accounting.payEmployees(5000);
accounting.buyFood(2000);
accounting.maintainZoo(3000);
accounting.generateExpensesReport();
