export default abstract class LoginPage {

    abstract inputUsername(username: String): void;
    abstract inputPassword(password: String): void;
    abstract clickOnBtn(): void;
}
