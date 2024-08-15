import LoginActionsScreen from "../pageobjects/more/loginOrCreatAccount/login/login.actions.screen.js"
import LoginQuestionScreen from "../pageobjects/more/loginOrCreatAccount/login/login.question.screen.js"
import LoginOrCreatAccountActionsScreen from "../pageobjects/more/loginOrCreatAccount/loginOrCreatAccount.Actions.screen.js"
import MoreActionsScreen from "../pageobjects/more/more.actions.screen.js"
import OnboardingActionsScreen from "../pageobjects/onboarding.actions.screen.js"


describe('Wikipedia', () => {
    it('abrindo o aplicativo wikipedia', async () => {
        const onboardingActions = new OnboardingActionsScreen()
        const moreActions = new MoreActionsScreen()
        const loginOrCreatAccountActions = new LoginOrCreatAccountActionsScreen()
        const loginAction = new LoginActionsScreen()
        const loginQuestion = new LoginQuestionScreen()

        await onboardingActions.clickBtnSkip()

        //clicar 'Mais'
        await moreActions.clickBtnMore()

        //clicar em Entrar/Juntar-se
        await loginOrCreatAccountActions.clickLogin()

        //Clicar em Entrar
        await loginOrCreatAccountActions.clickBtnLogin()

        //Preencher nome de usuário e senha
        await loginAction.setUsername('tstwikipedia')
        await loginAction.setPassword('147258')

        //Clicar em Entrar
        await loginAction.clickBtnLogin()

        //Validar mensagem de login incorreto
        await loginQuestion.getMessage('O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor.')
    })
})