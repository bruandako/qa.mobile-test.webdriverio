export default class MoreScreen {
    get moreBtn() { return $(`android=new UiSelector().resourceId("org.wikipedia.alpha:id/nav_tab_more")`) }

    async clickBtnMore() {
        await this.moreBtn.click()
    }

}