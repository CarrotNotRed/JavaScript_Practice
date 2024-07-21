/**
 * Finding maximum value/minimum value from an integer array
 * let intArr = [1, 2, 3, 4, 5];
Minimum: 1
Maximum: 5
 */
let intArr = [1, 2, 3, 4, 5];
let max = intArr[0];
let min = intArr[0];
for (let index = 0; index < intArr.length; index++) {
    if (max < intArr[index]) {
        max = intArr[index];
    }
    if (min > intArr[index]) {
        min = intArr[index];
    }
}
if (max == min) {
    console.log(`The array just have only value with min = max = ${max}`);
}
else{
    console.log(`The maximum value of this array is ${max}`);
    console.log(`The minimum value of this array is ${min}`);
}
