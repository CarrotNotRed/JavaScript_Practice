/**
 * Two Sum
 * [3, 7, 22, 1] -> target number = 8 -> [index1, index2] -> [1, 3]
 * Assumption only one indice is existing
 */

/**
 * Using 2 loop
 * outer loop -> 0 -> length - 1
 *  inner loop -> outer loop + 1 -> length - 1
 *      if(firstNum + secondNum == targetNum) 
 *          return [firstNumIndex, secondNumIndex]
 * 
 * return []
 */

const givenArray = [2, 6, 22, 1];
const targetNumber = 8;
let indices = findIndicesUsingMap(givenArray, targetNumber);
console.log(indices);

function findIndicesUsingNestedLoop(givenArray, targetNumber) {
    for(let firstNumberIndex = 0; firstNumberIndex < givenArray.length; firstNumberIndex++){
        let firstNum = givenArray[firstNumberIndex];
        for(let secondNumberIndex = firstNumberIndex+1; secondNumberIndex < givenArray.length; secondNumberIndex++){
            let secondNum = givenArray[secondNumberIndex]; 
            if(firstNum + secondNum === targetNumber){
                return [firstNumberIndex, secondNumberIndex];
            }
        }
    }
    return [];
}

/**
 * Using map
 * put into map [num, index] -> lookingNum (key) = targetNum - currentNum -> using .has in map and find the value (index of array)
 * num = 3 -> index = 0 -> map [3, 0] -> looking number = 5
 * num = 7 -> index = 1 -> map [7, 1] -> looking number = 1
 * num = 22 -> index = 2 -> map [22, 2]
 * num = 1 -> index = 3 -> map [1, 3] -> has = true -> return value = 3 -> index
 */

function findIndicesUsingMap(givenArray, targetNumber) {
    let numMap = new Map();
    for(let firstNumberIndex = 0; firstNumberIndex < givenArray.length; firstNumberIndex++){
        let firstNum = givenArray[firstNumberIndex];
        let lookingNum = targetNumber - firstNum;
        if(numMap.has(lookingNum)){
            return [firstNumberIndex, numMap.get(lookingNum)];
        }
        numMap.set(firstNum, firstNumberIndex);
    }
    return [];
}