import { CurrentVisitors } from './CurrentVisitors';
import { Visitor } from './Visitor';

describe('CurrentVisitors class', () => {
  let currentVisitors: CurrentVisitors;

  beforeEach(() => {
    currentVisitors = new CurrentVisitors();
  });

  it('should add visitor correctly', () => {
    const visitor = new Visitor('Pet Svi', 'svi@example.com', new Date());
    currentVisitors.addVisitor(visitor);
    expect(currentVisitors['visitors']).toContain(visitor);
  });

  it('should notify visitors about closing time', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const visitor = new Visitor('Pet Svi', 'svi@example.com', new Date());
    currentVisitors.addVisitor(visitor);
    currentVisitors.notifyVisitorsAboutClose();
    expect(consoleSpy).toHaveBeenCalledWith(`Dear ${visitor}, the zoo will close in 15 minutes `);
  });

  it('should notify visitors about expired tickets', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const currentTime = new Date();
    const visitor1 = new Visitor('Svi Pet', 'svi@example.com', new Date(currentTime.getTime() - 5 * 60 * 60 * 1000)); // Expired ticket
    const visitor2 = new Visitor('Svi Pet2', 'svip@example.com', new Date(currentTime.getTime() - 2 * 60 * 60 * 1000)); // Not expired ticket
    currentVisitors.addVisitor(visitor1);
    currentVisitors.addVisitor(visitor2);
    currentVisitors.notifyVisitorsAboutEndOfTime();
    expect(consoleSpy).toHaveBeenCalledWith(`${visitor1.name}'s ticket has expired.`);
    expect(consoleSpy).not.toHaveBeenCalledWith(`${visitor2.name}'s ticket has expired.`);
  });

  it('should start and stop timer correctly', () => {
    jest.useFakeTimers();
    currentVisitors.startTimer();
    expect(currentVisitors['timer']).not.toBeNull();
    currentVisitors.stopTimer();
    expect(currentVisitors['timer']).toBeNull();
  });
});
