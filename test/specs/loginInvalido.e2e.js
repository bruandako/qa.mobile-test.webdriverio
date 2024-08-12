

const { default: Login } = require("../pageobjects/more/loginOrCreatAccount/login/login.screen")
const { LoginOrCreatAccount } = require("../pageobjects/more/loginOrCreatAccount/loginOrCreatAccount.screen")
const { MoreScreen } = require("../pageobjects/more/more.screen")
const { OnboardingScreen } = require("../pageobjects/onboarding.screen")

describe('Wikipedia', () => {
    it('abrindo o aplicativo wikipedia', async () => {
        const onboarding = new OnboardingScreen()
        const more = new MoreScreen()
        const loginOrCreatAccount = new LoginOrCreatAccount()
        const login = new Login()

        await onboarding.clickBtnSkip()

        //clicar 'Mais'
        await more.clickBtnMore()

        //clicar em Entrar/Juntar-se
        await loginOrCreatAccount.clickLogin()

        //Clicar em Entrar
        await loginOrCreatAccount.clickBtnLogin()

        //Preencher nome de usuário e senha
        await login.setUsername()
        await login.setPassword()

        //Clicar em Entrar
        await login.clickBtnLogin()

        //Validar mensagem de login incorreto
        expect(await login.getMessage()).toBe('O nome de utilizador ou a palavra-passe inseridos estão incorretos. Tente novamente, por favor.')
    })
})