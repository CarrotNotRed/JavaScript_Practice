// Create Data, call controller to process data

const Employee = require("./Employee");
const SalaryController = require("./SalaryController");

//Create user-defined data - model
let teo = new Employee(8000);
let ti = new Employee(10000);

//Init controller
let salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total Salary: ${totalSalary}`);




