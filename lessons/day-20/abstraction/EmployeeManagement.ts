import { Employee } from "./Employee";

export default class EmployeeManagement {
  getTotalSalary(employeeList: Employee[]) {
    let total: number = 0;
    employeeList.forEach((emp) => (total += emp.getSalary() + emp.getSupportSalary()));
    return total;
  }
}
