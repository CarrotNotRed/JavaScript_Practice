import ExternalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./InternalLoginPage";
import LoginPage from "./LoginPage";
import LoginPageFlow from "./LoginPageFlow";

const internal: LoginPage = new InternalLoginPage();
const external: LoginPage = new ExternalLoginPage();
const loginPageFlow: LoginPageFlow = new LoginPageFlow('test', '1234567');

loginPageFlow.login(internal);
loginPageFlow.login(external);