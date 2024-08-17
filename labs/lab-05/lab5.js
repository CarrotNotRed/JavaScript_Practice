const readline = require(`readline-sync`);
/**
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 * Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
 * The program need to allow user to input a sentence, not hard code (optional)
 */

function countWords(sentence) {
    let words = sentence.toLowerCase().replaceAll(",", "").split(" ");
    let wordCounts = {};
  
    for (let word of words) {
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
  
    for (let word in wordCounts) {
      console.log(`${word}: ${wordCounts[word]}`);
    }
  }
  

let sentence = readline.question("Enter your sentence: ");
countWords(sentence);


