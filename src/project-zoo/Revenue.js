"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revenue = void 0;
var Revenue = /** @class */ (function () {
    function Revenue() {
    }
    Revenue.prototype.updateRevenue = function (price) {
        Revenue.revenue += price;
    };
    Revenue.getDailyRevenue = function () {
        return this.revenue;
    };
    Revenue.resetDailyRevenue = function () {
        this.revenue = 0;
    };
    Revenue.revenue = 0;
    return Revenue;
}());
exports.Revenue = Revenue;
