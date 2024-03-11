"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketOffice = void 0;
var Visitor_1 = require("./Visitor");
var CurrentVisitors_1 = require("./CurrentVisitors");
var Clients_1 = require("./Clients");
var Revenue_1 = require("./Revenue");
var TicketOffice = /** @class */ (function () {
    function TicketOffice() {
        this.dailyRevenue = new Revenue_1.Revenue();
        this.currentVisitors = new CurrentVisitors_1.CurrentVisitors();
        this.clients = new Clients_1.Clients();
    }
    TicketOffice.getInstance = function () {
        if (!TicketOffice.instance) {
            TicketOffice.instance = new TicketOffice();
        }
        return TicketOffice.instance;
    };
    TicketOffice.prototype.sellTicket = function (ticket, visitor) {
        var buyTime = new Date();
        visitor = new Visitor_1.Visitor(visitor.name, visitor.contactInfo, buyTime);
        this.clients.addClient(visitor);
        this.currentVisitors.addVisitor(visitor);
        this.dailyRevenue.updateRevenue(ticket.price);
        console.log("Sold ".concat(ticket.type, " ticket to ").concat(visitor.name, " for ").concat(ticket.price, " dollars."));
    };
    return TicketOffice;
}());
exports.TicketOffice = TicketOffice;
