const readline = require('readline-sync');
/**
 * Lab 2.1 + Suggest user to increase/decrease weight
 */
let height = readline.question("Your height: ");
let weight = readline.question("Your weight: ");
let BMI = weight/(height*height);

if(BMI < 18.5){
    console.log("Underweight");
    let increaseWeight = Math.round(18.5*height*height) - weight;
    console.log(`You should increase at least ${increaseWeight} kg`);
}
else if(BMI <= 24.9){
    console.log("Normal weight");
    console.log("Hurray. Keep your weight!");
}
else if(BMI <= 29.9){
    console.log("Overweight");
    let decreaseWeight = weight - Math.round(24.9*height*height);
    console.log(`You should decrease at least ${decreaseWeight} kg`);
}
else{
    console.log("Obesity");
    let decreaseWeight = weight - Math.round(24.9*height*height);
    console.log(`You should decrease at least ${decreaseWeight} kg`);
}

