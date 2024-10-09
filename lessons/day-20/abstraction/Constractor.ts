import { Employee } from "./Employee";

export class Constractor extends Employee {
  constructor() {
    super(10000);
  }
  getSalary(): number {
    return 5000;
  }
  getSupportSalary(): number {
    return 0;
  }
}
