export abstract class Employee {
  private salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  setSalary(salary: number) {
    this.salary = salary;
  }

  abstract getSalary(): number;

  abstract getSupportSalary(): number;
}
