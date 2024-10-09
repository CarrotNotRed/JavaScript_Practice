import { Constractor } from "./Constractor";
import { Employee } from "./Employee";
import EmployeeManagement from "./EmployeeManagement";
import { FTE } from "./FTE";
import { ParttimeEmployee } from "./ParttimeEmployee";

let employeeController: EmployeeManagement = new EmployeeManagement();

//Create data
let fte: Employee = new FTE();
let constractor: Employee = new Constractor();
// let partTime: Employee = new ParttimeEmployee();

// let totalSalary = employeeController.getTotalSalary([fte, constractor, partTime]);
let totalSalary = employeeController.getTotalSalary([fte, constractor]);
console.log(`Total salary: ${totalSalary}`);
