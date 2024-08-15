import LoginElementsScreen from "./login.elements.screen.js";

export default class LoginInteractionsScreen extends LoginElementsScreen {

    async setUsername(txtUsername) {
        await super.username.setValue(txtUsername)
    }

    async setPassword(txtPassword) {
        await super.password.setValue(txtPassword)
    }

    async clickBtnLogin() {
        await super.login.click()
    }

}