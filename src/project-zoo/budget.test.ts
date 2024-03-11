import { Budget } from './Budget';

describe('Budget class', () => {
  let budget: Budget;

  beforeEach(() => {
    budget = new Budget();
  });

  it('should update expenses correctly', () => {
    const dailyExpenses = 100;
    const date = new Date();
    budget.updateExpenses(dailyExpenses, date);
    expect(budget['expenses']).toEqual([{ dailyExpenses, date }]);
  });

  it('should generate financial report correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    budget.updateExpenses(100, new Date());
    budget.updateExpenses(200, new Date());
    budget.generateFinancialReport();
   expect(consoleSpy).toHaveBeenCalledWith(
     expect.stringMatching(
       /^Total expenses \[\{"dailyExpenses":100,"date":"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z"\},\{"dailyExpenses":200,"date":"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z"\}\]$/
     )
   );
  });
});
