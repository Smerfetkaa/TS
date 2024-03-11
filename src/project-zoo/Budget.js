"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budget = void 0;
var Budget = /** @class */ (function () {
    function Budget() {
        this.expenses = [];
    }
    Budget.prototype.updateExpenses = function (dailyExpenses, date) {
        this.expenses.push({ dailyExpenses: dailyExpenses, date: date });
    };
    Budget.prototype.generateFinancialReport = function () {
        var report = JSON.stringify(this.expenses);
        console.log("Total expenses ".concat(report));
    };
    return Budget;
}());
exports.Budget = Budget;
