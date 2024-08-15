export default class SearchElementsScreen {

    get btnSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")') }
    get inpSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') }

}