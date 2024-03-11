import { Visitor } from './Visitor';

describe('Visitor', () => {
  it('should create a visitor with correct properties', () => {
    const name = 'John Gear';
    const contactInfo = 'john@example.com';
    const time = new Date();
    const visitor = new Visitor(name, contactInfo, time);

    expect(visitor.name).toBe(name);
    expect(visitor.contactInfo).toBe(contactInfo);
    expect(visitor.time).toBe(time);
  });
});
