"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisingDepartment = void 0;
var AdvertisingDepartment = /** @class */ (function () {
    function AdvertisingDepartment(clientsList, admin) {
        this.clientsList = clientsList;
        this.admin = admin;
        this.admin.addObserver(this);
    }
    AdvertisingDepartment.prototype.update = function (message) {
        this.notifyClients(message);
    };
    AdvertisingDepartment.prototype.notifyClients = function (message) {
        this.clientsList.clients.forEach(function (client) { return console.log("".concat(client.name, " ").concat(message)); });
    };
    return AdvertisingDepartment;
}());
exports.AdvertisingDepartment = AdvertisingDepartment;
