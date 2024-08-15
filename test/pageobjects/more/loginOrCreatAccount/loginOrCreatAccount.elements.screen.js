export default class LoginOrCreatAccountElementsScreen {
    get loginOrCreactAccount() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/main_drawer_login_button")') }
    get btnLogin() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/create_account_login_button")') }

}