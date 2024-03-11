"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ticket_1 = require("./Ticket");
var types_1 = require("./types");
var TicketOffice_1 = require("./TicketOffice");
var Accounting_1 = require("./Accounting");
var AdvertisingDepartment_1 = require("./AdvertisingDepartment");
var Administration_1 = require("./Administration");
var Budget_1 = require("./Budget");
var Clients_1 = require("./Clients");
var adultTicket = new Ticket_1.Ticket(types_1.TicketTypeEnum.ADULT);
var childTicket = new Ticket_1.Ticket(types_1.TicketTypeEnum.CHILD);
var familyTicket = new Ticket_1.Ticket(types_1.TicketTypeEnum.FAMILY);
console.log(adultTicket.price);
var budget = new Budget_1.Budget();
budget.updateExpenses(100, new Date());
budget.updateExpenses(200, new Date());
console.log(budget.generateFinancialReport());
var visitor1 = {
    name: 'Pet Svi',
    contactInfo: 'pet@example.com',
    time: new Date(),
};
var visitor2 = {
    name: 'Svi Pet',
    contactInfo: 'svi@example.com',
    time: new Date(),
};
var clients = new Clients_1.Clients();
clients.addClient(visitor1);
clients.addClient(visitor2);
var administration = new Administration_1.Administration();
var ticketOffice = TicketOffice_1.TicketOffice.getInstance();
var accounting = new Accounting_1.Accounting();
var advertisingDepartment = new AdvertisingDepartment_1.AdvertisingDepartment(clients, administration);
console.log(advertisingDepartment.update('test'));
ticketOffice.sellTicket(adultTicket, visitor1);
ticketOffice.sellTicket(childTicket, visitor2);
ticketOffice.sellTicket(familyTicket, visitor1);
administration.addEmployee('Peter', 'Smith', types_1.EmployeePositionEnum.MANAGER, ['Manage staff', 'Coordinate operations']);
administration.addEmployee('Alice', 'Johnson', types_1.EmployeePositionEnum.ZOOLOGIST, [
    'Study animal behavior',
    'Ensure animal welfare',
]);
accounting.addRevenues();
accounting.generateRevenueReport();
accounting.payEmployees(5000);
accounting.buyFood(2000);
accounting.maintainZoo(3000);
accounting.generateExpensesReport();
