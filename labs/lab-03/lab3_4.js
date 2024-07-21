/**
 * Merge 2 SORTED integer array into one SORTED array
 * Array 01: [1, 12, 16, 28, 34]
 * Array 02: [1, 13, 16, 27, 99]
 * Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 */

let arr1 = [1, 12, 16, 28, 34];
let arr2 = [1, 13, 16, 27, 99];
let arr = arr1.concat(arr2);
sortArray(arr);
console.log(arr);

function mergeArrays(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

function sortArray(arr) {
    let done = false;
    while (!done){
        done = true;
        for(let i = 1; i < arr.length; i++){
            if(arr[i-1] > arr[i]){
                done = false;
                swap(arr, i - 1, i)
            }
        }
    }
    return arr;
    }

function swap(arr, a, b){
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}