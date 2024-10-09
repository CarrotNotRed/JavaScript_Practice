import AppiumDriver from "./AppiumDriver";

export default class AndroidDriver extends AppiumDriver{
    initSession(): void {
        console.log("Init Android driver");
    }
}