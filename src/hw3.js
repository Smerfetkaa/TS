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
var Company = /** @class */ (function () {
    function Company(name, departments, preEmployees, employees) {
        this.name = name;
        this.departments = departments;
        this.preEmployees = preEmployees;
        this.employees = employees;
    }
    return Company;
}());
var Department = /** @class */ (function () {
    function Department(name, area, budget) {
        this.employees = [];
        this.name = name;
        this.area = area;
        this.budget = budget;
    }
    Department.prototype.calculateBalance = function () {
        return this.budget.debit - this.budget.credit;
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        this.budget.credit = this.budget.credit + employee.salary;
    };
    Department.prototype.transformPreHiredToEmployee = function (preEmployee) {
        return new Employee(preEmployee.name, preEmployee.surname, preEmployee.salary, "active" /* StatusOfEmployees.active */, this);
    };
    Department.prototype.removeEmployee = function (deletedEmployee) {
        this.employees = this.employees.filter(function (employee) {
            return employee.name !== deletedEmployee.name && employee.surname !== deletedEmployee.surname;
        });
    };
    return Department;
}());
var PreEmployee = /** @class */ (function () {
    function PreEmployee(name, surname, salary, accountNumber) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.accountNumber = accountNumber;
    }
    return PreEmployee;
}());
var Employee = /** @class */ (function () {
    function Employee(name, surname, salary, status, department, paymentInfo) {
        this.name = name;
        this.surname = surname;
        this.paymentInfo = paymentInfo;
        this.salary = salary;
        this.status = status;
        this.department = department;
    }
    return Employee;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name, area, budget) {
        var _this = _super.call(this, name, area, budget) || this;
        _this.balance = { employeesOfDepartments: [], preEmployee: [], departments: [] };
        return _this;
    }
    AccountingDepartment.prototype.takeOnBalance = function (entity) {
        if (entity instanceof Employee) {
            this.balance.employeesOfDepartments.push(entity);
        }
        else if (entity instanceof Department) {
            this.balance.departments.push(entity);
        }
        else {
            this.balance.preEmployee.push(entity);
        }
    };
    AccountingDepartment.prototype.removeFromBalance = function (entity) {
        if (entity instanceof Employee) {
            this.balance.employeesOfDepartments = this.balance.employeesOfDepartments.filter(function (employee) { return employee.name !== entity.name && employee.surname !== entity.surname; });
        }
        else if (entity instanceof Department) {
            this.balance.departments = this.balance.departments.filter(function (department) { return department.name !== entity.name && department.area !== entity.area; });
        }
        else {
            this.balance.preEmployee = this.balance.preEmployee.filter(function (employee) { return employee.name !== entity.name && employee.surname !== entity.surname; });
        }
    };
    AccountingDepartment.prototype.payingSalary = function () {
        var calculateEmployeesSalary = this.balance.employeesOfDepartments.reduce(function (sum, employee) {
            return employee.status === "active" /* StatusOfEmployees.active */ ? (sum += employee.salary) : sum;
        }, 0);
        this.budget.credit = this.budget.credit + calculateEmployeesSalary;
        var externalPayment = this.balance.preEmployee.reduce(function (sum, employee) { return (sum += employee.salary); }, 0);
        return [this.budget, externalPayment];
    };
    return AccountingDepartment;
}(Department));
