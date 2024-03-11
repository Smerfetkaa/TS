import { Ticket } from './Ticket';
import { TicketTypeEnum } from './types';
describe('Ticket', () => {
  it('should create a ticket with correct price for ADULT type', () => {
    const ticket = new Ticket(TicketTypeEnum.ADULT);
    expect(ticket.type).toBe(TicketTypeEnum.ADULT);
    expect(ticket.price).toBe(20);
  });

  it('should create a ticket with correct price for CHILD type', () => {
    const ticket = new Ticket(TicketTypeEnum.CHILD);
    expect(ticket.type).toBe(TicketTypeEnum.CHILD);
    expect(ticket.price).toBe(10);
  });

  it('should create a ticket with correct price for FAMILY type', () => {
    const ticket = new Ticket(TicketTypeEnum.FAMILY);
    expect(ticket.type).toBe(TicketTypeEnum.FAMILY);
    expect(ticket.price).toBe(50);
  });
});
