"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var Employee_1 = require("./Employee");
var types_1 = require("./types");
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service(id, firstName, lastName, duties) {
        return _super.call(this, id, firstName, lastName, types_1.EmployeePositionEnum.SERVICE, duties) || this;
    }
    return Service;
}(Employee_1.Employee));
exports.Service = Service;
