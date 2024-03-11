import { ITicket, TicketTypeEnum, ticketPrices } from './types';
export class Ticket implements ITicket {
  price: number;
  constructor(public type: TicketTypeEnum) {
    this.price = ticketPrices[type];
  }
}
