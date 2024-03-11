import { IBudget } from './types';
import { IAccExpenses } from './types';
export class Budget implements IBudget {
  private expenses: IAccExpenses[] = [];

  updateExpenses(dailyExpenses: number, date: Date) {
    this.expenses.push({ dailyExpenses, date });
  }

  generateFinancialReport() {
    const report = JSON.stringify(this.expenses);
    console.log(`Total expenses ${report}`);
  }
}
