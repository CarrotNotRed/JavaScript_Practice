/**
 * Count how many odd, even number(s) in an integer array
 * let intArr = [1, 2, 3, 4, 5];
Even numders: 2
Odd numbers: 3
 */

let intArr = [1, 2, 3, 4, 5];
let oddNum = 0;
let evenNum = 0;
for (let index = 0; index < intArr.length; index++) {
    if (intArr[index]%2 == 0) {
        evenNum++;
    }
}
console.log(`Total of even num: ${evenNum}`);
console.log(`Total of odd num: ${intArr.length - evenNum}`);