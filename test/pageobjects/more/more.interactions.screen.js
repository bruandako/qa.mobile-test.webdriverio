import MoreElementsScreen from "./more.elements.screen.js";

export default class MoreInteractionsScreen extends MoreElementsScreen {

    async clickBtnMore() {
        await super.moreBtn.click()
    }

}