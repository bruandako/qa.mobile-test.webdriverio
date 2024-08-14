import LoginScreen from "../pageobjects/more/login.screen.js"
import LoginOrCreatAccountScreen from "../pageobjects/more/loginOrCreatAccount.screen.js"
import MoreScreen from "../pageobjects/more/more.screen.js"
import OnboardingScreen from "../pageobjects/onboarding.screen.js"


describe('Wikipedia', () => {
    it('abrindo o aplicativo wikipedia', async () => {
        const onboarding = new OnboardingScreen()
        const more = new MoreScreen()
        const loginOrCreatAccount = new LoginOrCreatAccountScreen()
        const login = new LoginScreen()

        await onboarding.clickBtnSkip()

        //clicar 'Mais'
        await more.clickBtnMore()

        //clicar em Entrar/Juntar-se
        await loginOrCreatAccount.clickLogin()

        //Clicar em Entrar
        await loginOrCreatAccount.clickBtnLogin()

        //Preencher nome de usuário e senha
        await login.setUsername('tstwikipedia')
        await login.setPassword('147258')

        //Clicar em Entrar
        await login.clickBtnLogin()

        //Validar mensagem de login incorreto
        expect(await login.getMessage()).toBe('O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor.')
    })
})