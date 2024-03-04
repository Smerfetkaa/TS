// type AllEmployees = { employeesOfDepartments: Employee[]; preEmployee: PreEmployee[] };
// type AllAccountingEntity = AllEmployees & { departments: Department[] };

// type Budget = { debit: number; credit: number };
// const enum StatusOfEmployees {
//   active = 'active',
//   inactive = 'inactive',
//   unpaidLeave = 'unpaidLeave',
// }

// class Company {
//   name: string;
//   departments: Department[];
//   preEmployees: PreEmployee[];
//   employees: AllEmployees;
//   constructor(name: string, departments: Department[], preEmployees: PreEmployee[], employees: AllEmployees) {
//     this.name = name;
//     this.departments = departments;
//     this.preEmployees = preEmployees;
//     this.employees = employees;
//   }
// }
// class Department {
//   name: string;
//   area: string;
//   employees: Employee[] = [];
//   budget: Budget;

//   constructor(name: string, area: string, budget: Budget) {
//     this.name = name;
//     this.area = area;
//     this.budget = budget;
//   }

//   calculateBalance(): number {
//     return this.budget.debit - this.budget.credit;
//   }
//   addEmployee(employee: Employee): void {
//     this.employees.push(employee);
//     this.budget.credit += employee.salary;
//   }
//   transformPreHiredToEmployee(preEmployee: PreEmployee): Employee {
//     return new Employee(preEmployee.name, preEmployee.surname, preEmployee.salary, StatusOfEmployees.active, this);
//   }
//   removeEmployee(deletedEmployee: Employee): void {
//     this.employees = this.employees.filter(
//       (employee: { name: string; surname: string }) =>
//         employee.name !== deletedEmployee.name && employee.surname !== deletedEmployee.surname
//     );
//   }
// }
// class PreEmployee {
//   name: string;
//   surname: string;
//   salary: number;
//   accountNumber: number;

//   constructor(name: string, surname: string, salary: number, accountNumber: number) {
//     this.name = name;
//     this.surname = surname;
//     this.salary = salary;
//     this.accountNumber = accountNumber;
//   }
// }

// class Employee {
//   name: string;
//   surname: string;
//   salary: number;
//   status: StatusOfEmployees;
//   department: Department;
//   paymentInfo?: string;

//   constructor(
//     name: string,
//     surname: string,
//     salary: number,
//     status: StatusOfEmployees,
//     department: Department,
//     paymentInfo?: string
//   ) {
//     this.name = name;
//     this.surname = surname;
//     this.paymentInfo = paymentInfo;
//     this.salary = salary;
//     this.status = status;
//     this.department = department;
//   }
// }
// class AccountingDepartment extends Department {
//   balance: AllAccountingEntity = { employeesOfDepartments: [], preEmployee: [], departments: [] };

//   constructor(name: string, area: string, budget: Budget) {
//     super(name, area, budget);
//   }
//   takeOnBalance(entity: Employee | Department | PreEmployee): void {
//     if (entity instanceof Employee) {
//       this.balance.employeesOfDepartments.push(entity);
//     } else if (entity instanceof Department) {
//       this.balance.departments.push(entity);
//     } else {
//       this.balance.preEmployee.push(entity);
//     }
//   }
//   removeFromBalance(entity: Employee | Department | PreEmployee): void {
//     if (entity instanceof Employee) {
//       this.balance.employeesOfDepartments = this.balance.employeesOfDepartments.filter(
//         employee => employee.name !== entity.name && employee.surname !== entity.surname
//       );
//     } else if (entity instanceof Department) {
//       this.balance.departments = this.balance.departments.filter(
//         department => department.name !== entity.name && department.area !== entity.area
//       );
//     } else {
//       this.balance.preEmployee = this.balance.preEmployee.filter(
//         employee => employee.name !== entity.name && employee.surname !== entity.surname
//       );
//     }
//   }

//   payingSalary(): [Budget, number] {
//     const calculateEmployeesSalary = this.balance.employeesOfDepartments.reduce(
//       (sum: number, employee: { salary: number; status: StatusOfEmployees }) =>
//         employee.status === StatusOfEmployees.active ? (sum += employee.salary) : sum,
//       0
//     );
//     this.budget.credit = this.budget.credit + calculateEmployeesSalary;

//     const externalPayment = this.balance.preEmployee.reduce(
//       (sum: number, employee: { salary: number }) => (sum += employee.salary),
//       0
//     );

//     return [this.budget, externalPayment];
//   }
// }
