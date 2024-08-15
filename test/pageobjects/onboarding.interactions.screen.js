import OnboardingElementsScreen from "./onborading.elements.screen.js";

export default class OnboardingInteractionsScreen extends OnboardingElementsScreen {

    async clickBtnSkip() {
        await this.btnSkip.click()
    }

}