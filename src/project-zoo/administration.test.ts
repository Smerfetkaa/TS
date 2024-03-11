import { Administration } from './Administration';
import { EmployeePositionEnum } from './types';
import { Manager } from './Manager';

describe('Administration class', () => {
  let admin: Administration;

  beforeEach(() => {
    admin = new Administration();
  });

  it('should add and remove employees correctly', () => {
    const admin = new Administration();
    const manager = new Manager(1, 'Pet', 'Svi', ['Manage stuff']);
    admin.addEmployee(manager.firstName, manager.lastName, EmployeePositionEnum.MANAGER, manager.duties);
    expect(admin.getEmployees()).toContainEqual(manager);

    admin.removeEmployee(manager.id);
    expect(admin.getEmployees()).not.toContain(manager);
  });

  it('should add and remove observers correctly', () => {
    const observerMock = {
      update: jest.fn(),
    };

    admin.addObserver(observerMock);
    expect(admin['observers']).toContain(observerMock);

    admin.removeObserver(observerMock);
    expect(admin['observers']).not.toContain(observerMock);
  });

  it('should notify observers with the correct message', () => {
    const observerMock = {
      update: jest.fn(),
    };
    admin.addObserver(observerMock);
    const message = 'Test message';
    admin.notifyObservers(message);

    expect(observerMock.update).toHaveBeenCalledWith(message);
  });
});
