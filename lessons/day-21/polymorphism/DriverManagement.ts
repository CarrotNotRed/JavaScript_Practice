import AndroidDriver from "./AndroidDriver";
import AppiumDriver from "./AppiumDriver";
import IOSDriver from "./IOSDriver";

export default class DriverManagement{

    static getDriver(platform: string): AppiumDriver{
        if(!platform){
            throw new Error("Platform cannot be empty");
        }
        switch (platform) {
            case "android":
                return new AndroidDriver();
            case "ios":
                return new IOSDriver();
            default:
                throw new Error("Support drivers: Android, IOS");
        }
    } 
}