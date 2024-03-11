import { Ticket } from './Ticket';
import { Visitor } from './Visitor';
import { IVisitor } from './types';
import { CurrentVisitors } from './CurrentVisitors';
import { Clients } from './Clients';
import { Revenue } from './Revenue';
export class TicketOffice {
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
