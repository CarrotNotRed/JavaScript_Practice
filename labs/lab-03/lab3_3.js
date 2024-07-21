/**
 * Sort an integer array from min to max
 * Input: [12, 34, 1, 16, 28]
 * Expected output: [1, 12, 16, 28, 34]
 */

let arr = [12, 34, 1, 16, 28];
sortArray(arr);
console.log(arr);

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

