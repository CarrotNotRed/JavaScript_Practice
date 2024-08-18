/**
 * Given a student array and find out the best student
 * Given just only one best student
 */

const person1 = {name: "Anna", grades: [9,8,9]};
const person2 = JSON.parse(JSON.stringify(person1));
person2.name = "Belle"; //const but for object, we can adjust the values in object

/**
 * person1 = {name: "Bell", grades: [0,9,8]}; 
 * throw an error TypeError: Assignment to constant variable 
 * because cannot adjust the const variable
 * */

person2.grades = [6,7,5];
const person3 = JSON.parse(JSON.stringify(person1));
person3.name = "Dan";
person3.grades = [10, 8, 9];

const personAll = [person1, person2, person3];
let highestAverageScore = calculateScore(person1);
let highestName = person1.name;
for (const person of personAll) {
    let averageScore = calculateScore(person);
    if(averageScore >= highestAverageScore){
        highestAverageScore = averageScore;
        highestName = person.name;
    }
}
console.log(`The best score: ${highestAverageScore} and the best student: ${highestName}`);

function calculateScore(item) {
    let arr = item.grades;
    return arr.reduce((a, b) => a + b, 0)
}