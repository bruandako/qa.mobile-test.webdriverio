export default class SearchResultScreen {
    get searchResult() { return $(`android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_results_list").childSelector(new UiSelector().className("android.view.ViewGroup").instance(0)).childSelector(new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title"))`) }

    async getSearchResult() {
        await this.searchResult.getText()
    }

}