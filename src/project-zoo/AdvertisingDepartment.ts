import { IObserver } from './types';
import { Clients } from './Clients';
import { Administration } from './Administration';
export class AdvertisingDepartment implements IObserver {
  constructor(private clientsList: Clients, private admin: Administration) {
    this.admin.addObserver(this);
  }
  update(message: string) {
    this.notifyClients(message);
  }
  notifyClients(message: string) {
    this.clientsList.clients.forEach(client => console.log(`${client.name} ${message}`));
  }
}
