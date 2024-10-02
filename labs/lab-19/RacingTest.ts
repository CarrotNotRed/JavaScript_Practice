import Animal from "./Animal";
import { Dog } from "./Dog";
import { Horse } from "./Horse";
import RacingManagement from "./RacingManagement";
import { Tiger } from "./Tiger";

let racingManagement: RacingManagement = new RacingManagement();

//Create 3 objects
let horse: Animal = new Horse();
let tiger: Animal = new Tiger();
let dog: Animal = new Dog();
let winnerName: String = "";

const winner = racingManagement.getWinnerRacing([horse, tiger, dog]);
switch (winner) {
  case horse.getSpeed():
    winnerName = "Horse";
    break;
  case tiger.getSpeed():
    winnerName = "Tiger";
    break;
  case dog.getSpeed():
    winnerName = "Dog";
    break;

  default:
    break;
}
console.log(`The winner is ${winnerName} with speed ${winner}`);
