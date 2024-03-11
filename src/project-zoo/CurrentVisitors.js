"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentVisitors = void 0;
var CurrentVisitors = /** @class */ (function () {
    function CurrentVisitors() {
        this.visitors = [];
        this.timer = null;
    }
    CurrentVisitors.prototype.addVisitor = function (visitor) {
        this.visitors.push(visitor);
    };
    CurrentVisitors.prototype.notifyVisitorsAboutClose = function () {
        this.visitors.forEach(function (visitor) {
            console.log("Dear ".concat(visitor, ", the zoo will close in 15 minutes "));
        });
    };
    CurrentVisitors.prototype.notifyVisitorsAboutEndOfTime = function () {
        var currentTime = new Date();
        this.visitors.forEach(function (visitor) {
            // Вважаємо,що кожен квиток діє 4 години з моменту придбання
            if (currentTime.getTime() - visitor.time.getTime() >= 4 * 60 * 60 * 1000) {
                console.log("".concat(visitor.name, "'s ticket has expired."));
            }
        });
    };
    CurrentVisitors.prototype.startTimer = function () {
        var _this = this;
        // таймер, перевіряє час кожні 15 хвилин
        this.timer = setInterval(function () {
            _this.checkExpiry();
        }, 15 * 60 * 1000);
    };
    CurrentVisitors.prototype.stopTimer = function () {
        // Зупиняємо таймер, якщо він запущений
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    };
    CurrentVisitors.prototype.checkExpiry = function () {
        var currentTime = new Date();
        this.visitors.forEach(function (visitor) {
            // Вважаємо що час кожного квитка 4 години
            if (currentTime.getTime() - visitor.time.getTime() >= 4 * 60 * 60 * 1000) {
                console.log("".concat(visitor.name, "'s ticket has expired."));
                // Тут можна сповістити відвідувача, що його час закінчився
            }
        });
    };
    return CurrentVisitors;
}());
exports.CurrentVisitors = CurrentVisitors;
