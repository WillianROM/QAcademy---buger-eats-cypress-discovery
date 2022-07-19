var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var emailAdress = faker.internet.email(firstName)

        var data =   {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: `${emailAdress}`,
            whatsapp: '4199699593',
            address:{
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number:'1000',
                details:'Apt 125',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method:'Bike Elétrica',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}