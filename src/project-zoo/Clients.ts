import { Visitor } from "./Visitor";

export class Clients {
  clients: Visitor[] = [];

  addClient(client: Visitor) {
    if (!this.clients.includes(client)) this.clients.push(client);
  }
}
