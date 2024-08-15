export default class LoginElementsScreen {

    get username() { return $('android=new UiSelector().className("android.widget.EditText").text("Nome de usuário")') }
    get password() { return $('android=new UiSelector().className("android.widget.EditText").text("Senha")') }
    get login() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_button")') }
    get alert() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/snackbar_text")') }

}