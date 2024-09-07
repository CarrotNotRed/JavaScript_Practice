//OOP
class Employee {
  constructor(salary) {
    this._validateSalary(salary);
    this._salary = salary;
  }

  set salary(salary) {
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  //support method "_"
  _validateSalary(salary) {
    if (salary < 0) {
      throw new Error("Salary MUST be greater than 0 !!");
    }
  }
}

module.exports = Employee;
