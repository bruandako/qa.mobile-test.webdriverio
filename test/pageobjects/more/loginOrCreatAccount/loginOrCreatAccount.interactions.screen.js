import LoginOrCreatAccountElementsScreen from "./loginOrCreatAccount.elements.screen.js"

export default class LoginOrCreatAccountInteractionsScreen extends LoginOrCreatAccountElementsScreen {

    async clickLogin() {
        await super.loginOrCreactAccount.click()
    }

    async clickBtnLogin() {
        await super.btnLogin.click()
    }

}