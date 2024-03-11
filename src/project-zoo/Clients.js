"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients = void 0;
var Clients = /** @class */ (function () {
    function Clients() {
        this.clients = [];
    }
    Clients.prototype.addClient = function (client) {
        if (!this.clients.includes(client))
            this.clients.push(client);
    };
    return Clients;
}());
exports.Clients = Clients;
