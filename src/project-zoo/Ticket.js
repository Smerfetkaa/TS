"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
var types_1 = require("./types");
var Ticket = /** @class */ (function () {
    function Ticket(type) {
        this.type = type;
        this.price = types_1.ticketPrices[type];
    }
    return Ticket;
}());
exports.Ticket = Ticket;
