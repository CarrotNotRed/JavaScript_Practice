class MethodOverloading {
  static add(a, b) {
    return a + b;
  }

  static add(a, b, c) {
    return a + b + c;
  }

  //Using Rest Parameter to aim overloading
  static addOverLoading(factor, ...nums) {
    return nums.map((value) => value * factor); // return an array
  }
}

console.log(MethodOverloading.add(1, 2)); //output: NaN -> using latest method of add() -> 1 + 2 + undefined = NaN

console.log(MethodOverloading.addOverLoading(2, 1, 2, 3)); //output [2, 4, 6]

/**
 * static just access from class not object
 */

const utilObj = new MethodOverloading();
console.log(utilObj.add(1, 2, 3)); 
//output: error utilObj.add() is not a function because static method is not used by object