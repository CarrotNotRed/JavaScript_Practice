import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {
  inputUsername(username: String): void {
    console.log(`Input external username: ${username}`);
  }
  inputPassword(password: String): void {
    console.log(`Input external password: ${password}`);
  }
  clickOnBtn(): void {
    console.log("Click on login button");
  }
}
