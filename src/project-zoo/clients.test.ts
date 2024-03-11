import { Visitor } from './Visitor';
import { Clients } from './Clients';

describe('Clients', () => {
  let clients: Clients;

  beforeEach(() => {
    clients = new Clients();
  });

  it('should add a client to the list of clients', () => {
    const visitor = new Visitor('Pet Svi', 'svi@example.com', new Date());
    clients.addClient(visitor);

    expect(clients.clients.length).toBe(1);
    expect(clients.clients[0]).toBe(visitor);
  });

  it('should not add a client if it already exists in the list', () => {
    const visitor = new Visitor('Pet Svi', 'svi@example.com', new Date());
    clients.addClient(visitor);
    clients.addClient(visitor);

    expect(clients.clients.length).toBe(1);
  });
});
