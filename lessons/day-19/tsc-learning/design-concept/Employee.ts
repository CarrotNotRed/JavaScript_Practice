export class Employee{

  private salary: number;

  constructor(salary: number){
    this.salary = salary;
  }

  setSalary(salary: number){
    this.salary = salary;
  }

  getSalary(){
    return this.salary;
  }

  getSupportSalary(){
    return 0;
  }
}