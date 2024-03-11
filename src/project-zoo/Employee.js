"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, position, duties) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.duties = duties;
    }
    Employee.prototype.getInfo = function () {
        return "Name: ".concat(this.firstName, " ").concat(this.lastName, ", Position: ").concat(this.position);
    };
    return Employee;
}());
exports.Employee = Employee;
