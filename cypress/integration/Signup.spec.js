import signup from "../pages/SignupPage.js"
import signupFactory from "../factories/SignupFactory.js"

describe("Signup",()=>{

/*         before(()=>{
            cy.log("Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes")
        })

        beforeEach(function(){
            cy.log("Tudo aqui é executado sempre ANTES de CADA caso de teste")
            cy.fixture('deliver').then((d)=>{
                 this.deliver = d
                
            })
        })

        after(()=>{
          cy.log("Tudo aqui é executado uma única vez DEPOS de TODOS os casos de testes")  
        })

        afterEach(()=>{
            cy.log("Tudo aqui é executado sempre DEPOIS de CADA caso de teste")
        }) */

       

    it('User should be deliver',function(){

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect documento',function(){

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = "Oops! CPF inválido"
        signup.alertMessageShouldBe(expectedMessage)

    })


    it('Incorrect email',function(){

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields',function(){

        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
 
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })

/*     it.only('Required fields',function(){
        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    }) */
    
})


