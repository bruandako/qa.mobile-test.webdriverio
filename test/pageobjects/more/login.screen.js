export default class Login {
    get username() { return $('android=new UiSelector().className("android.widget.EditText").text("Nome de usuário")') }
    get password() { return $('android=new UiSelector().className("android.widget.EditText").text("Senha")') }
    get login() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_button")') }
    get alert() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/snackbar_text")') }

    async setUsername(txtUsername) {
        await this.username.setValue(txtUsername)
    }

    async setPassword(txtPassword) {
        await this.password.setValue(txtPassword)
    }

    async clickBtnLogin() {
        await this.login.click()
    }

    async getMessage() {
        return await this.alert.getText()
    }
}