class SigupPage{
    go(){
        // cy.viewport(1440,900)
        cy.visit("/")
        cy.get(`a[href="/deliver"]`).click()
        cy.get(`#page-deliver h1`).should("have.text","Cadastre-se para  fazer entregas")
    }

    fillForm(deliver){
        cy.get(`input[placeholder="Nome completo"]`).type(deliver.name)
        cy.get(`input[placeholder="CPF somente números"]`).type(deliver.cpf)
        cy.get(`input[placeholder="E-mail"`).type(deliver.email)
        cy.get(`input[placeholder="Whatsapp"]`).type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"][placeholder="Número"]').focus().type(deliver.address.number)
        cy.get('input[name="address-details"][placeholder="Complemento"]').focus().type(deliver.address.details)

        cy.get('input[name="address"]').should("have.value", deliver.address.street)
        cy.get('input[name="district"]').should("have.value", deliver.address.district)
        cy.get('input[name="city-uf"]').should("have.value", deliver.address.city_state)

        cy.contains(".delivery-method li",deliver.delivery_method).click()
        cy.get('input[type="file"][accept^="image"]').attachFile("/images/" + deliver.cnh)
    }

    submit(){
        cy.contains(".button-success","Cadastre-se para fazer entregas").click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get("div.swal2-container div.swal2-html-container").should("have.text",expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        // cy.get("span.alert-error").should("have.text",expectedMessage)
        cy.contains("span.alert-error", expectedMessage).should("be.visible")
    }
}

export default new SigupPage;