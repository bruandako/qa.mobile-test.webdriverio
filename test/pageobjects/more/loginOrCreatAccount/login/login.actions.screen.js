import LoginInteractionsScreen from "./login.interactions.screen.js";

export default class LoginActionsScreen extends LoginInteractionsScreen {

    async getMessage() {
        return await this.alert.getText()
    }

}