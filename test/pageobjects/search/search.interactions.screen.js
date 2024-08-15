import SearchElementsScreen from "./search.elements.screen.js"

export default class SearchInteractionsScreen extends SearchElementsScreen {

    async clickBtnSearch() {
        await this.btnSearch.click()
    }

    async setValueInpSearch(searchText) {
        await this.inpSearch.setValue(searchText)
    }

}