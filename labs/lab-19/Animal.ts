export default class Animal{
    private speed: number;

    constructor(maxSpeed: number){
        this.speed = Math.floor(Math.random() * (maxSpeed + 1));
        console.log(`Speed: ${this.speed}`);
    }

    getSpeed(){
        return this.speed;
    }
}