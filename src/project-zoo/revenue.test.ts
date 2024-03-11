import { Revenue } from './Revenue';

describe('Revenue', () => {
  beforeEach(() => {
    Revenue.resetDailyRevenue();
  });

  it('should update revenue correctly', () => {
    const revenue = new Revenue();
    revenue.updateRevenue(100);
    revenue.updateRevenue(200);

    expect(Revenue.getDailyRevenue()).toBe(300);
  });

  it('should reset revenue to 0', () => {
    const revenue = new Revenue();
    revenue.updateRevenue(100);
    Revenue.resetDailyRevenue();

    expect(Revenue.getDailyRevenue()).toBe(0);
  });
});
