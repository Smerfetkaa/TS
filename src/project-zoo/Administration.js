"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administration = void 0;
var types_1 = require("./types");
var Manager_1 = require("./Manager");
var Zoologist_1 = require("./Zoologist");
var Veterinarian_1 = require("./Veterinarian");
var Service_1 = require("./Service");
var Animal_1 = require("./Animal");
var Administration = /** @class */ (function () {
    function Administration() {
        this.employees = [];
        this.animals = [];
        this.observers = [];
    }
    Administration.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Administration.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Administration.prototype.notifyObservers = function (massage) {
        this.observers.forEach(function (observer) { return observer.update(massage); });
    };
    Administration.prototype.addEmployee = function (firstName, lastName, position, duties) {
        var id = this.employees.length + 1;
        var employee;
        switch (position) {
            case types_1.EmployeePositionEnum.MANAGER:
                employee = new Manager_1.Manager(id, firstName, lastName, duties);
                break;
            case types_1.EmployeePositionEnum.ZOOLOGIST:
                employee = new Zoologist_1.Zoologist(id, firstName, lastName, duties);
                break;
            case types_1.EmployeePositionEnum.VETERINARIAN:
                employee = new Veterinarian_1.Veterinarian(id, firstName, lastName, duties);
                break;
            case types_1.EmployeePositionEnum.SERVICE:
                employee = new Service_1.Service(id, firstName, lastName, duties);
                break;
            default:
                throw new Error('Invalid position');
        }
        this.employees.push(employee);
    };
    Administration.prototype.removeEmployee = function (id) {
        this.employees = this.employees.filter(function (person) { return person.id !== id; });
    };
    Administration.prototype.getEmployees = function () {
        return this.employees;
    };
    Administration.prototype.addAnimal = function (specie, name, age, health) {
        var id = this.animals.length + 1;
        var animal = new Animal_1.Animal(id, specie, name, age, health);
        this.animals.push(animal);
    };
    Administration.prototype.removeAnimal = function (id) {
        this.animals = this.animals.filter(function (animal) { return animal.id !== id; });
    };
    return Administration;
}());
exports.Administration = Administration;
