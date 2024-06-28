const readline = require('readline-sync');
/**
 * Lab 2.2
 * Allow user to input a number, print out it’s an odd or even number
 */

let number = readline.questionInt("Input a number: ");
if(number < 0){
    console.log("This is not a positive number. Try again!");
}
else{
    if(number%2 == 0){
        console.log("This is an even number");
    }
    else{
        console.log("This is an odd number");
    }
}