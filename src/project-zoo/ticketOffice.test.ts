import { TicketOffice } from './TicketOffice';
import { Ticket } from './Ticket';
import { Visitor } from './Visitor';
import { TicketTypeEnum } from './types';
import { Revenue } from './Revenue';
describe('TicketOffice', () => {
  let ticketOffice: TicketOffice;

  beforeEach(() => {
    ticketOffice = TicketOffice.getInstance();
  });

  it('should sell a ticket to a visitor and update revenue', () => {
    const ticket = new Ticket(TicketTypeEnum.ADULT);
    const visitor = new Visitor('Svi Pet', 'svi@example.com', new Date());

    ticketOffice.sellTicket(ticket, visitor);

    expect(Revenue.getDailyRevenue()).toBe(ticket.price);
    expect(ticketOffice.clients.clients.length).toBe(1);
  });
});
