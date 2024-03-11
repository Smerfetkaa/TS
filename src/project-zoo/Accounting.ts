import { IBudget, IAccRevenue, IAccounting } from "./types";
import { Budget } from "./Budget";
import { Revenue } from "./Revenue";

export class Accounting implements IAccounting {
  private revenues: IAccRevenue[] = [];
  private budget: IBudget;
  constructor() {
    this.budget = new Budget();
  }
  addRevenues() {
    this.revenues.push({
      dailyRevenue: Revenue.getDailyRevenue(),
      date: new Date(),
    });
    Revenue.resetDailyRevenue();
  }

  generateRevenueReport() {
    console.log(`Financial report: ${this.revenues}`);
  }
  generateExpensesReport() {
    this.budget.generateFinancialReport();
  }

  payEmployees(amount: number) {
    this.budget.updateExpenses(amount, new Date());
  }

  buyFood(amount: number) {
    this.budget.updateExpenses(amount, new Date());
  }

  maintainZoo(amount: number) {
    this.budget.updateExpenses(amount, new Date());
  }
}