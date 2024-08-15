import LoginActionsScreen from "./login.actions.screen.js";

export default class LoginQuestionScreen extends LoginActionsScreen {

    async invalidUserMessageIsDisplayed(desiredText) {
        expect(await super.getMessage()).toBe(desiredText)
    }

}