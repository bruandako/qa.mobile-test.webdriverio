import SearchResultElementsScreen from "./searchResult.elements.screen.js";

export default class SearchResultInteractionsScreen extends SearchResultElementsScreen {

    async getSearchResult() {
        await super.searchResult.getText()
    }

}