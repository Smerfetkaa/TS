import { AdvertisingDepartment } from './AdvertisingDepartment';
import { Clients } from './Clients';
import { Administration } from './Administration';

describe('AdvertisingDepartment class', () => {
  let advertisingDepartment: AdvertisingDepartment;
  let clientsList: Clients;
  let admin: Administration;

  beforeEach(() => {
    clientsList = new Clients();
    admin = new Administration();
    advertisingDepartment = new AdvertisingDepartment(clientsList, admin);
  });

  it('should notify clients correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const message = 'Test message';
    clientsList.addClient({ name: 'Svi', contactInfo: 'petr@example.com', time: new Date() });
    advertisingDepartment.update(message);

    expect(consoleSpy).toHaveBeenCalledWith('Svi Test message');
  });
});
