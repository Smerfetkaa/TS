import { Accounting } from './Accounting';
import { Budget } from './Budget';
import { Revenue } from './Revenue';

describe('Accounting', () => {
  let accounting: Accounting;

  beforeEach(() => {
    accounting = new Accounting();
  });

  it('should add revenues correctly', () => {
    const revenueBefore = Revenue.getDailyRevenue();
    const dateBefore = new Date();
    accounting.addRevenues();

    const revenues = accounting['revenues'];
    const addedRevenue = revenues[revenues.length - 1];

    expect(revenues.length).toBe(1);
    expect(addedRevenue.dailyRevenue).toBe(revenueBefore);
    expect(addedRevenue.date.toDateString()).toBe(dateBefore.toDateString());
  });
});
