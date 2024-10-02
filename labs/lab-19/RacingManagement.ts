import Animal from "./Animal";

export default class RacingManagement {
  getWinnerRacing(animalList: Animal[]) {
    let speedArr = animalList.map((speed) => speed.getSpeed());
    return Math.max(...speedArr);
  }
}
