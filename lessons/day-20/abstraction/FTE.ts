import { Employee } from "./Employee";

export class FTE extends Employee {
  constructor() {
    super(5000);
  }
  
  getSupportSalary(): number {
    return 1000;
  }
  
  getSalary(): number {
    return 10000;
  }
}
