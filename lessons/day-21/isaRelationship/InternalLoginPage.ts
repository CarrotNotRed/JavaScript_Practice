import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {
  inputUsername(username: String): void {
    console.log(`Input internal username: ${username}`);
  }
  inputPassword(password: String): void {
    console.log(`Input internal password: ${password}`);
  }
  clickOnBtn(): void {
    console.log("Click on login button");
  }
}
