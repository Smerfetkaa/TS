"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounting = void 0;
var Budget_1 = require("./Budget");
var Revenue_1 = require("./Revenue");
var Accounting = /** @class */ (function () {
    function Accounting() {
        this.revenues = [];
        this.budget = new Budget_1.Budget();
    }
    Accounting.prototype.addRevenues = function () {
        this.revenues.push({
            dailyRevenue: Revenue_1.Revenue.getDailyRevenue(),
            date: new Date(),
        });
        Revenue_1.Revenue.resetDailyRevenue();
    };
    Accounting.prototype.generateRevenueReport = function () {
        console.log("Financial report: ".concat(this.revenues));
    };
    Accounting.prototype.generateExpensesReport = function () {
        this.budget.generateFinancialReport();
    };
    Accounting.prototype.payEmployees = function (amount) {
        this.budget.updateExpenses(amount, new Date());
    };
    Accounting.prototype.buyFood = function (amount) {
        this.budget.updateExpenses(amount, new Date());
    };
    Accounting.prototype.maintainZoo = function (amount) {
        this.budget.updateExpenses(amount, new Date());
    };
    return Accounting;
}());
exports.Accounting = Accounting;
