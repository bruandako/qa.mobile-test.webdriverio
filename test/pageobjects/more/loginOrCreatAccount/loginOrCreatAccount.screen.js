export default class LoginOrCreatAccount {
    get loginOrCreactAccount() { return $(`android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_results_list").childSelector(new UiSelector().className("android.view.ViewGroup").instance(0)).childSelector(new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title"))`) }
    get btnLogin() { return $(`android=new UiSelector().resourceId("org.wikipedia.alpha:id/create_account_login_button")`) }

    async clickLogin() {
        await this.loginOrCreactAccount.click()
    }

    async clickBtnLogin() {
        await this.btnLogin.click()
    }

}