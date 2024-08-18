let targetStr = "tmoi nmmay gmamp nhamu lmuc 7h";

//using replace all
let decodedStr = targetStr.replaceAll("m", "");
console.log(decodedStr);

//using regex (refer more String Regular Expression)
let decodedStrByRegex = targetStr.replace(/m/gi, "");
console.log(decodedStrByRegex);

let speed = "200mins";
let decodedSpeed = speed.replace(/[^0-9]/gi, ""); //g = global, i = insensitive (ignore upper or lower case)
console.log(decodedSpeed);


