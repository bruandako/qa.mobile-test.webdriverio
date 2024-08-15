import SearchInteractionsScreen from "./search.interactions.screen.js"

export default class SearchActionsScreen extends SearchInteractionsScreen {

    async pesquisar(textoParaPesquisa) {
        await this.clickBtnSearch()
        await this.setValueInpSearchText(textoParaPesquisa)
    }

}