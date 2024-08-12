export default class SearchScreen {
    get btnSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")') }
    get inpSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') }

    async clickBtnSearch() {
        await this.btnSearch.click()
    }

    async setValueInpSearch(searchText) {
        await this.inpSearch.setValue(searchText)
    }

    async pesquisar(textoParaPesquisa) {
        await this.clickBtnSearch()
        await this.setValueInpSearchText(textoParaPesquisa)
    }

}