class DefaultValue {
  static normalDivide(a, b) {
    return a / b;
  }

  static divideWithDefaultValue(
    a,
    b = 1 //b = 1 when we don't provide b value
  ) {
    return a / b;
  }

  static divideWithCondition(a, b) {
    if (arguments.length != 2) {
      //arguments = [a, b] -> take all params to an array
      throw new Error("Must provide 2 params!");
    }
    if (b === 0) {
      throw new Error("Can't divide by zero!");
    }
    return a / b;
  }
}

console.log(DefaultValue.normalDivide(4, 0)); //output: Infinity
console.log(DefaultValue.normalDivide(4)); //output: NaN
console.log(DefaultValue.divideWithCondition(4)); //output: Must provide 2 params!
console.log(DefaultValue.divideWithCondition(4, 0)); //output: Can't divide by zero!
console.log(DefaultValue.divideWithCondition(4, 2)); //output: 2
