import LoginPage from "./LoginPage";

export default class LoginPageFlow{

    private username: String;
    private password: String;

    constructor(username: String, password: String){
        this.username = username;
        this.password = password;
    }

    login(loginPage: LoginPage){
        loginPage.inputUsername(this.username);
        loginPage.inputPassword(this.password);
        loginPage.clickOnBtn();
    }

}