let myNumArray = [1,2,3,4,5,6,7,8,9,10];

/**
 * Delete number at index where is an even number
 * but do not delete the number at index 0
 * -> output = [1,2,4,6,8,10];
 */

// for (let index = myNumArray.length - 1; index > 0; index--) {
//     if (index%2 == 0) {
//         myNumArray.splice(index, 1);
//     }
// }
// console.log(myNumArray);

// const arr1 = [1, null, undefined, () => 2, {
//     test: () => 3,
// }, Symbol('4')]

// const cloneArr1 = JSON.parse(JSON.stringify(arr1))

// console.log('>>Deep clone>>>', cloneArr1)

// var new_arr  = ['a', 'b', 'c', 'd'];
// var new_arr2 = [...new_arr];
// new_arr[0] = 'update';
// // new_arr.push('e');
// console.log(new_arr);  // Output 'a', 'b', 'c', 'd'
// console.log(new_arr2); // Output 'a', 'b', 'c', 'd', 'e'

// const obj = {a:1,b:2,c:{d:3}};
// const shallowClone = {...obj};
// obj.c.d = 34; // chúng ta thay đổi giá trị d của object gốc
// console.log(obj); // kết quả cho chúng ta thấy {a:1,b:2,c:{d:34}} 
// console.log(shallowClone); 

function testArgumentsKeyword(){ 
    const arr = Array.from(arguments);
    // console.log(arr.filter(el => el === 'arg2'))
    console.log(arr)
} 

testArgumentsKeyword('arg1','arg2', 'arg3', 'arg4', 'arg5');
