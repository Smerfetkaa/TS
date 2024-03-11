"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeePositionEnum = exports.ticketPrices = exports.TicketTypeEnum = void 0;
var TicketTypeEnum;
(function (TicketTypeEnum) {
    TicketTypeEnum["ADULT"] = "ADULT";
    TicketTypeEnum["CHILD"] = "CHILD";
    TicketTypeEnum["FAMILY"] = "FAMILY";
})(TicketTypeEnum || (exports.TicketTypeEnum = TicketTypeEnum = {}));
exports.ticketPrices = (_a = {},
    _a[TicketTypeEnum.ADULT] = 20,
    _a[TicketTypeEnum.CHILD] = 10,
    _a[TicketTypeEnum.FAMILY] = 50,
    _a);
var EmployeePositionEnum;
(function (EmployeePositionEnum) {
    EmployeePositionEnum["MANAGER"] = "Manager";
    EmployeePositionEnum["ZOOLOGIST"] = "Zoologist";
    EmployeePositionEnum["VETERINARIAN"] = "Veterinarian";
    EmployeePositionEnum["SERVICE"] = "Service";
})(EmployeePositionEnum || (exports.EmployeePositionEnum = EmployeePositionEnum = {}));
